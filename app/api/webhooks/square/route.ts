import { NextRequest, NextResponse } from 'next/server';
import crypto from 'crypto';
import { createClient } from '@supabase/supabase-js';
import { createOrUpdateGHLContact } from '@/lib/ghl/client';
import { squareClient } from '@/lib/square/client';

const supabase = createClient(
    process.env.NEXT_PUBLIC_SUPABASE_URL!,
    process.env.SUPABASE_SERVICE_ROLE_KEY!
  );

function verifySignature(body: string, signature: string): boolean {
    const webhookSecret = process.env.SQUARE_WEBHOOK_SECRET!;
    const hmac = crypto.createHmac('sha256', webhookSecret);
    const expectedSignature = hmac.update(body).digest('base64');
    return signature === expectedSignature;
}

export async function POST(request: NextRequest) {
    try {
          const body = await request.text();
          const signature = request.headers.get('x-square-hmacsha256-signature');

      if (process.env.NODE_ENV === 'production' && signature) {
              if (!verifySignature(body, signature)) {
                        return NextResponse.json({ error: 'Invalid signature' }, { status: 401 });
              }
      }

      const event = JSON.parse(body);

      if (event.type === 'payment.created' || event.type === 'payment.updated') {
              const payment = event.data.object.payment;

            if (payment.status !== 'COMPLETED') {
                      return NextResponse.json({ message: 'Payment not completed' });
            }

            const orderResponse = await squareClient.ordersApi.retrieveOrder(payment.order_id);
              const order = orderResponse.result.order;

            const customerResponse = await squareClient.customersApi.retrieveCustomer(payment.customer_id);
              const customer = customerResponse.result.customer;

            const lineItem = order?.lineItems?.[0];
              const episodeNumber = lineItem?.name?.includes('Episode 1') ? '1' : '1';

            const { data: orderData, error: orderError } = await supabase
                .from('orders')
                .insert({
                            square_payment_id: payment.id,
                            square_order_id: payment.order_id,
                            customer_email: customer?.emailAddress || '',
                            amount_paid: (payment.totalMoney?.amount || 0) / 100,
                            currency: payment.totalMoney?.currency || 'GBP',
                            status: 'paid',
                            episode_purchased: `episode-${episodeNumber}`,
                })
                .select()
                .single();

            if (orderError) throw orderError;

            const ghlContact = await createOrUpdateGHLContact({
                      email: customer?.emailAddress || '',
                      firstName: customer?.givenName || 'Customer',
                      lastName: customer?.familyName || '',
                      phone: customer?.phoneNumber || '',
                      tags: ['Customer', `episode-${episodeNumber}`, 'Active'],
                      customFields: {
                                  episodes_purchased: `episode-${episodeNumber}`,
                                  total_spent: String((payment.totalMoney?.amount || 0) / 100),
                                  last_purchase_date: new Date().toISOString(),
                                  last_order_id: payment.order_id,
                      },
            });

            return NextResponse.json({
                      success: true,
                      message: 'Payment processed and contact created',
                      orderId: orderData.id,
                      contactId: ghlContact.contact.id,
            });
      }

      return NextResponse.json({ message: 'Event received' });
    } catch (error) {
          console.error('Webhook error:', error);
          return NextResponse.json(
            { error: 'Webhook processing failed', details: error },
            { status: 500 }
                );
    }
}

export async function GET() {
    return NextResponse.json({ 
                                 status: 'Square webhook endpoint is running',
          timestamp: new Date().toISOString()
    });
}

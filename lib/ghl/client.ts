const GHL_API_BASE = 'https://services.leadconnectorhq.com';

interface CreateContactParams {
    email: string;
    firstName: string;
    lastName: string;
    phone?: string;
    tags?: string[];
    customFields?: Record<string, string>;
}

export async function createOrUpdateGHLContact(params: CreateContactParams) {
    const { email, firstName, lastName, phone, tags, customFields } = params;

  const response = await fetch(`${GHL_API_BASE}/contacts/`, {
        method: 'POST',
        headers: {
                'Authorization': `Bearer ${process.env.GHL_API_KEY}`,
                'Content-Type': 'application/json',
                'Version': '2021-07-28',
        },
        body: JSON.stringify({
                locationId: process.env.GHL_LOCATION_ID,
                email,
                firstName,
                lastName,
                phone,
                tags,
                customFields: customFields || {},
        }),
  });

  if (!response.ok) {
        const error = await response.text();
        throw new Error(`GHL API error: ${error}`);
  }

  return await response.json();
}

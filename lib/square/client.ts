import { Client, Environment } from 'square';

const client = new Client({
    accessToken: process.env.SQUARE_ACCESS_TOKEN!,
    environment: Environment.Production,
});

export const squareClient = client;
export const paymentsApi = client.paymentsApi;
export const ordersApi = client.ordersApi;
export const customersApi = client.customersApi;

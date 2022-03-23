import { createClient } from 'redis';

const client = createClient();

client.on('error', (err) => console.log('Redis Client Error', err));

await client.connect();

export function addOrderToList(order) {
    client.rPush('ordersList', JSON.stringify(order));
}

export function getOrdersList(start, end) {
  return client.lRange('ordersList', start, end);
}

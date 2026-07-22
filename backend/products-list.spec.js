import { test, expect } from '@playwright/test';
import { listAllProducts } from './helpers/listAllProducts';

test.describe('Products List', () =>{

  test('API 1: Get All Products List', async ({ request }) => {
    const { response, body } = await listAllProducts(request);

    expect(response.status()).toBe(200);
    expect(Array.isArray(body.products)).toBeTruthy();
    expect(body.products.length).toBeGreaterThan(0);
    expect(body.products[0]).toHaveProperty('id');
  });
});


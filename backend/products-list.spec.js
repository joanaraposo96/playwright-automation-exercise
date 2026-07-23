import { test, expect } from '@playwright/test';
import { listAllProducts } from './helpers/listAllProducts';

test.describe('Products List', () =>{

  test('API 1: Get All Products List', async ({ request }) => {
    const { response, body } = await listAllProducts(request);
    const list = [
      'id',
      'name',
      'price',
      'brand',
      'category'

    ]

    expect(response.status()).toBe(200);
    expect(Array.isArray(body.products)).toBe(true);
    expect(body.products.length).toBeGreaterThan(0);
    body.products.forEach((product) => {
      list.forEach((item) => {
        expect(product).toHaveProperty(item);
        expect(product[item]).toBeDefined();
      });
    });
  });
});


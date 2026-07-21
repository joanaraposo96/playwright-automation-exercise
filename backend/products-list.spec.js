import { expect, test } from '@playwright/test';
import { listAllProducts } from './helpers/listAllProducts';

test.describe('Products List', () =>{

  test('API 1: Get All Products List', async ({ request }) => {
    const { request, body } = listAllProducts(request);

    expect(request.status()).toBe(200);
  });
});


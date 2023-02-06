import { expect } from '@open-wc/testing';
import ProductDetails from './product-details.js';

describe('ProductDetails', () => {
  it('<app-product-details> is an instance of ProductDetails', async () => {
    const element = document.createElement('app-product-details');
    expect(element).to.be.instanceOf(ProductDetails);
  });
});

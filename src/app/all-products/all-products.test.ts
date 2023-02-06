import { expect } from '@open-wc/testing';
import AllProducts from './all-products.js';

describe('AllProducts', () => {
  it('<app-all-products> is an instance of AllProducts', async () => {
    const element = document.createElement('app-all-products');
    expect(element).to.be.instanceOf(AllProducts);
  });
});

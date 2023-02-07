import { expect } from '@open-wc/testing';
import ProductDetails1Updates from './product-details1updates.js';

describe('ProductDetails1Updates', () => {
  it('<app-product-details1updates> is an instance of ProductDetails1Updates', async () => {
    const element = document.createElement('app-product-details1updates');
    expect(element).to.be.instanceOf(ProductDetails1Updates);
  });
});

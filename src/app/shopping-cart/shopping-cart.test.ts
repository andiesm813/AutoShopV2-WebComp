import { expect } from '@open-wc/testing';
import ShoppingCart from './shopping-cart.js';

describe('ShoppingCart', () => {
  it('<app-shopping-cart> is an instance of ShoppingCart', async () => {
    const element = document.createElement('app-shopping-cart');
    expect(element).to.be.instanceOf(ShoppingCart);
  });
});

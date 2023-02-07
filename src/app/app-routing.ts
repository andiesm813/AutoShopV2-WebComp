import { Route } from '@vaadin/router';
import './not-found/not-found.js';
import './home/home';
import './all-products/all-products';
import './product-details1updates/product-details1updates';
import './product-details/product-details';
import './shopping-cart/shopping-cart';

export const routes: Route[] = [
  { path: '', component: 'app-home', name: 'Home' },
  { path: 'home', component: 'app-home', name: 'Home' },
  { path: 'all-products', component: 'app-all-products', name: 'All Products' },
  { path: 'product-details1updates', component: 'app-product-details1updates', name: 'Product Details1Updates' },
  { path: 'product-details', component: 'app-product-details', name: 'Product Details' },
  { path: 'shopping-cart', component: 'app-shopping-cart', name: 'Shopping Cart' },
  // The fallback route should always be after other alternatives.
  { path: '(.*)', component: 'app-not-found' }
];

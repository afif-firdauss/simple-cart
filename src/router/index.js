import { lazy } from 'react';

const Home = lazy(() => import('pages/Home'));
const Cart = lazy(() => import('pages/Cart'));

export const ProductRoute = [
  {
    path: '/',
    component: Home,
  },
  {
    path: 'cart/:id',
    component: Cart,
  },
];
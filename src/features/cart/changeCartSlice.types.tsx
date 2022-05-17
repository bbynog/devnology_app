import { CartProduct } from 'types';

export interface CartState {
  products: CartProduct[];
  total: number;
}

import { CartProduct } from 'types';

export const findProductInCart = (
  cart: CartProduct[],
  product: CartProduct
) => {
  return cart.find(cartProduct => cartProduct.id === product.id);
};

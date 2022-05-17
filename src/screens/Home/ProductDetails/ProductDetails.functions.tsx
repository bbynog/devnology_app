import { NavigationProp } from '@react-navigation/native';
import {
  BottomTabNavigatorParamsList,
  TabScreen,
} from 'navigation/TabNavigator/TabNavigator.types';
import { CartProduct, Product } from 'types';

import { AnyAction, Dispatch } from '@reduxjs/toolkit';
import { addProductToCart } from 'features/cart';

export const handleShareThisPress = () => {
  // share
};
export const handleAddToCartPress = (
  product: Product,
  navigation: NavigationProp<BottomTabNavigatorParamsList>,
  dispatch: Dispatch<AnyAction>
) => {
  const cartProduct = mountCartProduct(product);
  dispatch(addProductToCart(cartProduct));
  navigation.goBack();
  navigation.navigate(TabScreen.CART);
};

const mountCartProduct = (product: Product) => {
  const cartProduct: CartProduct = {
    id: product.id,
    name: product.name,
    imagesUri: product.imagesUri,
    price: product.price,
    quantity: 1,
    subTotal: product.price,
  };

  return cartProduct;
};

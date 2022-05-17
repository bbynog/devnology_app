import React from 'react';
import { ListRenderItem } from 'react-native';

import { CartStackNavigatorParamsList, StackScreen } from 'navigation/types';
import { CartProduct } from 'types';
import { ProductCart } from 'components';

import { NavigationProp } from '@react-navigation/native';

export const handleCheckoutButtonPress = (
  navigation: NavigationProp<CartStackNavigatorParamsList>
) => {
  navigation.navigate(StackScreen.CHECKOUT);
};

export const renderProduct: ListRenderItem<CartProduct> = ({ item }) => {
  return <ProductCart product={item} />;
};

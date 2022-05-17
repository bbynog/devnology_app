import { StackNavigatorParamsList, StackScreen } from 'navigation/types';

import { Product } from 'types';

import { StackNavigationProp } from '@react-navigation/stack';

export const navigateToProductDetails = (
  product: Product,
  navigation: StackNavigationProp<StackNavigatorParamsList>
) => {
  navigation.navigate(StackScreen.PRODUCT_DETAILS, {
    product: product,
  });
};

import { Product } from 'types';
import { BottomTabNavigatorParamsList, TabScreen } from 'navigation/types';

import { NavigationProp, RouteProp } from '@react-navigation/native';

export type HomeStackNavigatorParamsList = {
  HomeStack: undefined;
  ProductDetailsStack: {
    product: Product;
  };
};

export type SearchStackNavigatorParamsList = {
  SearchStack: undefined;
};

export type CartStackNavigatorParamsList = {
  CartStack: undefined;
  CheckoutStack: undefined;
};

export type ProfileStackNavigatorParamsList = {
  ProfileStack: undefined;
};

export type MoreStackNavigatorParamsList = {
  MoreStack: undefined;
};

export type StackNavigatorParamsList = HomeStackNavigatorParamsList &
  SearchStackNavigatorParamsList &
  CartStackNavigatorParamsList &
  ProfileStackNavigatorParamsList &
  MoreStackNavigatorParamsList;

export enum StackScreen {
  HOME = 'HomeStack',
  PRODUCT_DETAILS = 'ProductDetailsStack',
  SEARCH = 'SearchStack',
  CART = 'CartStack',
  CHECKOUT = 'CheckoutStack',
  PROFILE = 'ProfileStack',
  MORE = 'MoreStack',
}

export interface HomeStackNavigatorProps {
  navigation: NavigationProp<BottomTabNavigatorParamsList, TabScreen.CART>;
  route: RouteProp<StackNavigatorParamsList>;
}

export interface CartStackNavigatorProps {
  navigation: NavigationProp<StackNavigatorParamsList>;
  route: RouteProp<StackNavigatorParamsList>;
}

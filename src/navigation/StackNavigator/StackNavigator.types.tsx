type HomeStackNavigatorParamsList = {
  HomeStack: undefined;
  ProductDetailsStack: undefined;
};

type SearchStackNavigatorParamsList = {
  SearchStack: undefined;
};

type CartStackNavigatorParamsList = {
  CartStack: undefined;
  CheckoutStack: undefined;
};

type ProfileStackNavigatorParamsList = {
  ProfileStack: undefined;
};

type MoreStackNavigatorParamsList = {
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

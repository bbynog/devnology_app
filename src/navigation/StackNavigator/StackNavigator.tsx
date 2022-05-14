import React from 'react';

import {
  homeNavigationOptions,
  navigatorDefaultOptions,
  productDetailsNavigationOptions,
} from './StackNavigator.styles';

import { createStackNavigator } from '@react-navigation/stack';

import {
  HomeScreen,
  SearchScreen,
  CartScreen,
  ProfileScreen,
  MoreScreen,
  ProductDetailsScreen,
  CheckoutScreen,
} from 'screens';

import { StackNavigatorParamsList, StackScreen } from './StackNavigator.types';

const Stack = createStackNavigator<StackNavigatorParamsList>();

export const HomeStackNavigator = () => {
  return (
    <Stack.Navigator screenOptions={navigatorDefaultOptions}>
      <Stack.Screen
        name={StackScreen.HOME}
        component={HomeScreen}
        options={homeNavigationOptions}
      />
      <Stack.Screen
        name={StackScreen.PRODUCT_DETAILS}
        component={ProductDetailsScreen}
        options={productDetailsNavigationOptions}
      />
    </Stack.Navigator>
  );
};

export const SearchStackNavigator = () => {
  return (
    <Stack.Navigator screenOptions={navigatorDefaultOptions}>
      <Stack.Screen name={StackScreen.SEARCH} component={SearchScreen} />
    </Stack.Navigator>
  );
};

export const CartStackNavigator = () => {
  return (
    <Stack.Navigator screenOptions={navigatorDefaultOptions}>
      <Stack.Screen name={StackScreen.CART} component={CartScreen} />
      <Stack.Screen name={StackScreen.CHECKOUT} component={CheckoutScreen} />
    </Stack.Navigator>
  );
};

export const ProfileStackNavigator = () => {
  return (
    <Stack.Navigator screenOptions={navigatorDefaultOptions}>
      <Stack.Screen name={StackScreen.PROFILE} component={ProfileScreen} />
    </Stack.Navigator>
  );
};

export const MoreStackNavigator = () => {
  return (
    <Stack.Navigator screenOptions={navigatorDefaultOptions}>
      <Stack.Screen name={StackScreen.MORE} component={MoreScreen} />
    </Stack.Navigator>
  );
};

import React from 'react';

import {
  createStackNavigator,
  StackNavigationOptions,
} from '@react-navigation/stack';

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

import { theme } from 'theme';
import { Logo } from 'components';

const Stack = createStackNavigator<StackNavigatorParamsList>();

const { colors } = theme;

const navigatorDefaultOptions: StackNavigationOptions = {
  headerStyle: {
    backgroundColor: colors.primary,
  },
  headerTintColor: colors.onPrimary,
  headerTitle: () => <Logo />,
};

export const HomeStackNavigator = () => {
  return (
    <Stack.Navigator screenOptions={navigatorDefaultOptions}>
      <Stack.Screen name={StackScreen.HOME} component={HomeScreen} />
      <Stack.Screen
        name={StackScreen.PRODUCT_DETAILS}
        component={ProductDetailsScreen}
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

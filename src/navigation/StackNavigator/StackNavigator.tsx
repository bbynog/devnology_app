import React, { useLayoutEffect } from 'react';

import {
  HomeScreen,
  SearchScreen,
  CartScreen,
  ProfileScreen,
  MoreScreen,
  ProductDetailsScreen,
  CheckoutScreen,
} from 'screens';
import { theme } from 'theme';

import {
  navigatorDefaultOptions,
  productDetailsNavigationOptions,
} from './StackNavigator.options';
import {
  CartStackNavigatorProps,
  HomeStackNavigatorProps,
  StackNavigatorParamsList,
  StackScreen,
} from './StackNavigator.types';

import { createStackNavigator } from '@react-navigation/stack';
import { getFocusedRouteNameFromRoute } from '@react-navigation/native';

const { colors } = theme;

const Stack = createStackNavigator<StackNavigatorParamsList>();

export const HomeStackNavigator = ({
  navigation,
  route,
}: HomeStackNavigatorProps) => {
  useLayoutEffect(() => {
    const routeName = getFocusedRouteNameFromRoute(route) || StackScreen.HOME;
    if (routeName === StackScreen.PRODUCT_DETAILS) {
      navigation.setOptions({
        tabBarStyle: { display: 'none' },
      });
    } else {
      navigation.setOptions({
        tabBarStyle: { display: 'flex', backgroundColor: colors.primary },
      });
    }
  }, [navigation, route]);

  return (
    <Stack.Navigator screenOptions={navigatorDefaultOptions}>
      <Stack.Screen name={StackScreen.HOME} component={HomeScreen} />
      <Stack.Screen
        name={StackScreen.PRODUCT_DETAILS}
        component={ProductDetailsScreen}
        options={() => productDetailsNavigationOptions(navigation)}
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

export const CartStackNavigator = ({
  navigation,
  route,
}: CartStackNavigatorProps) => {
  useLayoutEffect(() => {
    const routeName = getFocusedRouteNameFromRoute(route) || StackScreen.CART;
    if (routeName === StackScreen.CHECKOUT) {
      navigation.setOptions({
        tabBarStyle: { display: 'none' },
      });
    } else {
      navigation.setOptions({
        tabBarStyle: { display: 'flex', backgroundColor: colors.primary },
      });
    }
  }, [navigation, route]);
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

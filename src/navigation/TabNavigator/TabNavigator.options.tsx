import React from 'react';

import { theme } from 'theme';
import { BadgedCartIcon } from 'components';

import { styles } from './TabNavigator.styles';

import {
  MaterialCommunityIcons,
  AntDesign,
  Octicons,
  Foundation,
} from '@expo/vector-icons';
import { BottomTabNavigationOptions } from '@react-navigation/bottom-tabs';

const { colors } = theme;

export const tabNavigatorOptions: BottomTabNavigationOptions = {
  headerShown: false,
  tabBarShowLabel: true,
  tabBarInactiveTintColor: colors.card,
  tabBarActiveTintColor: colors.secondary,
  tabBarStyle: {
    backgroundColor: colors.primary,
  },
  tabBarLabelStyle: {
    marginTop: -6,
    marginBottom: 5,
  },
};

export const homeTabScreenOptions: BottomTabNavigationOptions = {
  tabBarIcon: ({ color, size }) => (
    <MaterialCommunityIcons
      name={'home-outline'}
      color={color}
      size={size + 3}
    />
  ),
};

export const searchTabScreenOptions: BottomTabNavigationOptions = {
  tabBarIcon: ({ color, size }) => (
    <AntDesign name={'search1'} color={color} size={size - 1} />
  ),
};

export const cartTabScreenOptions: BottomTabNavigationOptions = {
  tabBarIcon: ({ color, size }) => <BadgedCartIcon color={color} size={size} />,
  tabBarIconStyle: styles.badgedIcon,
};

export const profileTabScreenOptions: BottomTabNavigationOptions = {
  tabBarIcon: ({ color, size }) => (
    <Octicons name={'person'} color={color} size={size} />
  ),
};

export const moreTabScreenOptions: BottomTabNavigationOptions = {
  tabBarIcon: ({ color, size }) => (
    <Foundation name={'list'} color={color} size={size} />
  ),
};

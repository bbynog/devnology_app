import React from 'react';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';

import {
  HomeStackNavigator,
  SearchStackNavigator,
  CartStackNavigator,
  ProfileStackNavigator,
  MoreStackNavigator,
} from '../StackNavigator/StackNavigator';

import { BottomTabNavigatorParamList, TabScreen } from './TabNavigator.types';

import {
  MaterialCommunityIcons,
  Octicons,
  AntDesign,
  Foundation,
} from '@expo/vector-icons';

import { useTheme } from '@react-navigation/native';

const Tab = createBottomTabNavigator<BottomTabNavigatorParamList>();

export const BottomTabNavigator = () => {
  const { colors } = useTheme();
  return (
    <Tab.Navigator
      screenOptions={{
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
      }}
    >
      <Tab.Screen
        name={TabScreen.HOME}
        component={HomeStackNavigator}
        options={{
          tabBarIcon: ({ color, size }) => (
            <MaterialCommunityIcons
              name={'home-outline'}
              color={color}
              size={size + 3}
            />
          ),
        }}
      />
      <Tab.Screen
        name={TabScreen.SEARCH}
        component={SearchStackNavigator}
        options={{
          tabBarIcon: ({ color, size }) => (
            <AntDesign name={'search1'} color={color} size={size - 1} />
          ),
        }}
      />
      <Tab.Screen
        name={TabScreen.CART}
        component={CartStackNavigator}
        options={{
          tabBarIcon: ({ color, size }) => (
            <AntDesign name={'shoppingcart'} color={color} size={size} />
          ),
        }}
      />
      <Tab.Screen
        name={TabScreen.PROFILE}
        component={ProfileStackNavigator}
        options={{
          tabBarIcon: ({ color, size }) => (
            <Octicons name={'person'} color={color} size={size} />
          ),
        }}
      />
      <Tab.Screen
        name={TabScreen.MORE}
        component={MoreStackNavigator}
        options={{
          tabBarIcon: ({ color, size }) => (
            <Foundation name={'list'} color={color} size={size} />
          ),
        }}
      />
    </Tab.Navigator>
  );
};

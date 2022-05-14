import React from 'react';
import { StyleSheet } from 'react-native';

import { StackNavigationOptions } from '@react-navigation/stack';

import { theme } from 'theme';
import { Logo } from 'components';
import {
  DefaultHeaderRight,
  ProductDetailsHeaderRight,
} from './StackNavigator.components';

const { colors } = theme;

export const styles = StyleSheet.create({
  homeHeaderRightContainer: {
    flexDirection: 'row',
    marginRight: 15,
  },
  chatBubbleIconStyles: {
    transform: [
      {
        rotateY: '180deg',
      },
    ],
    marginRight: 30,
  },
  productDetailsHeaderRightContainer: {
    marginRight: 15,
  },
  productDetailsHeaderTitleContainer: {
    marginLeft: 50,
  },
});

export const navigatorDefaultOptions: StackNavigationOptions = {
  headerStyle: {
    backgroundColor: colors.primary,
  },
  headerTintColor: colors.onPrimary,
  headerTitle: () => <Logo />,
  headerRight: () => DefaultHeaderRight,
};

export const productDetailsNavigationOptions: StackNavigationOptions = {
  headerRight: () => ProductDetailsHeaderRight,
  headerTitleContainerStyle: styles.productDetailsHeaderTitleContainer,
};

export const homeNavigationOptions: StackNavigationOptions = {
  headerRight: () => DefaultHeaderRight,
};

import React from 'react';

import { theme } from 'theme';
import { Logo, BadgedCartIcon } from 'components';
import { BottomTabNavigatorParamsList, TabScreen } from 'navigation/types';

import { styles } from './StackNavigator.styles';
import { handleBadgedCartIconPress } from './StackNavigator.functions';

import { NavigationProp } from '@react-navigation/native';
import { DefaultHeaderRight } from './StackNavigator.components';

const { colors } = theme;

export const navigatorDefaultOptions = () => {
  return {
    headerStyle: {
      backgroundColor: colors.primary,
    },
    headerTintColor: colors.onPrimary,
    headerTitle: () => <Logo />,
    headerRight: () => <DefaultHeaderRight />,
  };
};

export const productDetailsNavigationOptions = (
  navigation: NavigationProp<BottomTabNavigatorParamsList, TabScreen.CART>
) => {
  return {
    headerRight: () => (
      <BadgedCartIcon onPress={() => handleBadgedCartIconPress(navigation)} />
    ),
    headerRightContainerStyle: styles.headerRightContainerStyles,
    headerTitleContainerStyle: styles.productDetailsHeaderTitleContainer,
  };
};

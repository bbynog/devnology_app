import React from 'react';
import { View } from 'react-native';

import { customColors, theme } from 'theme';
import { Logo, BadgedCartIcon } from 'components';
import { BottomTabNavigatorParamsList, TabScreen } from 'navigation/types';

import { styles } from './StackNavigator.styles';
import { handleBadgedCartIconPress } from './StackNavigator.functions';

import { NavigationProp } from '@react-navigation/native';
import { DefaultHeaderRight } from './StackNavigator.components';

import { StackNavigationOptions } from '@react-navigation/stack';

const { colors } = theme;

export const navigatorDefaultOptions = () => {
  return {
    headerStyle: {
      backgroundColor: colors.primary,
    },
    headerTintColor: colors.onPrimary,
    headerTitle: () => <Logo />,
    headerRight: () => <DefaultHeaderRight />,
    headerBackTitleVisible: false,
  };
};

export const productDetailsScreenOptions = (
  navigation: NavigationProp<BottomTabNavigatorParamsList, TabScreen.CART>
) => {
  return {
    headerRight: () => (
      <View style={styles.badgedIconContainer}>
        <BadgedCartIcon onPress={() => handleBadgedCartIconPress(navigation)} />
      </View>
    ),
    headerRightContainerStyle: styles.headerRightContainerStyles,
    headerTitleContainerStyle: styles.productDetailsHeaderTitleContainer,
  };
};

import React from 'react';
import { View } from 'react-native';

import { styles } from './StackNavigator.styles';

import { theme } from 'theme';

import {
  Ionicons,
  MaterialCommunityIcons,
  AntDesign,
} from '@expo/vector-icons';

const { colors } = theme;

export const DefaultHeaderRight = (
  <View style={styles.homeHeaderRightContainer}>
    <Ionicons
      name={'ios-chatbubble-outline'}
      style={styles.chatBubbleIconStyles}
      color={colors.onPrimary}
      size={24}
    />
    <MaterialCommunityIcons
      name={'bell-outline'}
      size={25}
      color={colors.onPrimary}
    />
  </View>
);

export const ProductDetailsHeaderRight = (
  <View style={styles.productDetailsHeaderRightContainer}>
    <AntDesign name={'shoppingcart'} color={colors.onPrimary} size={25} />
  </View>
);

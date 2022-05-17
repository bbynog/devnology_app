import React from 'react';
import { Text, View } from 'react-native';

import { customColors, theme } from 'theme';

import { MaterialCommunityIcons, MaterialIcons } from '@expo/vector-icons';
import { emptyCartViewStyles, styles } from './Cart.styles';

const { colors } = theme;

export const IconOfCheckoutButton = (
  <MaterialCommunityIcons
    name={'chevron-right'}
    size={37}
    color={customColors.white}
  />
);

export const EmptyCartView = () => {
  return (
    <View style={emptyCartViewStyles.container}>
      <View style={emptyCartViewStyles.iconContainer}>
        <MaterialIcons
          name={'add-shopping-cart'}
          size={200}
          color={colors.primary}
        />
      </View>
      <View style={emptyCartViewStyles.textContainer}>
        <Text style={emptyCartViewStyles.text}>Your cart is empty.</Text>
        <Text style={emptyCartViewStyles.text}>Go shopping!</Text>
      </View>
    </View>
  );
};

export const ListHeaderLabel = () => {
  return <Text style={styles.labelText}>Cart</Text>;
};

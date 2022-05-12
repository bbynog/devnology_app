import React from 'react';
import { View, Text } from 'react-native';

import { styles } from './Checkout.styles';

interface CheckoutProps {}

export const CheckoutScreen = ({}: CheckoutProps) => {
  return (
    <View style={styles.container}>
      <Text>Halu Checkout</Text>
    </View>
  );
};

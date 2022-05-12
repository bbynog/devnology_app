import React from 'react';
import { View, Text } from 'react-native';

import { styles } from './ProductDetails.styles';

interface ProductDetailsProps {}

export const ProductDetailsScreen = ({}: ProductDetailsProps) => {
  return (
    <View style={styles.container}>
      <Text>Halu ProductDetails</Text>
    </View>
  );
};

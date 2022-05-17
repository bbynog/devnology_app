import React from 'react';
import { View, Text, Image, TouchableOpacity } from 'react-native';

import { Product } from 'types';
import { currencyFormat } from 'utils';
import { StackNavigatorParamsList } from 'navigation/types';

import { styles } from './ProductCard.styles';
import { navigateToProductDetails } from './ProductCard.functions';

import { StackNavigationProp } from '@react-navigation/stack';
import { useNavigation } from '@react-navigation/native';

interface ProductCardProps {
  product: Product;
}

export const ProductCard = ({ product }: ProductCardProps) => {
  const navigation =
    useNavigation<StackNavigationProp<StackNavigatorParamsList>>();

  const { name, imagesUri, price } = product;

  return (
    <TouchableOpacity
      style={styles.container}
      onPress={() => navigateToProductDetails(product, navigation)}
    >
      <View style={styles.imageContainer}>
        <Image source={{ uri: imagesUri[0].uri }} style={styles.image} />
      </View>
      <View style={styles.nameContainer}>
        <Text style={styles.nameText} numberOfLines={2}>
          {name}
        </Text>
      </View>
      <View style={styles.priceContainer}>
        <Text style={styles.priceText}>{currencyFormat(price)}</Text>
      </View>
    </TouchableOpacity>
  );
};

import React from 'react';
import { View, Text, Image, TouchableOpacity } from 'react-native';

import { CartProduct } from 'types';
import { currencyFormat } from 'utils';
import { useAppDispatch } from 'hooks';
import { addProductToCart, removeProductFromCart } from 'features/cart';

import { styles } from './CartProductCard.styles';

import { Ionicons } from '@expo/vector-icons';

interface CartProductCardProps {
  product: CartProduct;
}

export const CartProductCard = ({ product }: CartProductCardProps) => {
  const dispatch = useAppDispatch();

  const { price, name, imagesUri } = product;
  return (
    <View style={styles.container}>
      <View style={styles.imageContainer}>
        <Image source={{ uri: imagesUri[0].uri }} style={styles.image} />
      </View>
      <View>
        <View style={styles.nameContainer}>
          <Text numberOfLines={3} style={styles.nameText}>
            {name}
          </Text>
        </View>
        <>
          <Text style={styles.priceText}>{currencyFormat(price)}</Text>
        </>
        <View style={styles.quantityActionsContainer}>
          <TouchableOpacity
            onPress={() => dispatch(removeProductFromCart(product))}
            style={styles.icon}
          >
            <Ionicons name={'remove-circle'} size={20} />
          </TouchableOpacity>
          <>
            <Text style={styles.quantityText}>{product.quantity}</Text>
          </>
          <TouchableOpacity
            onPress={() => dispatch(addProductToCart(product))}
            style={styles.icon}
          >
            <Ionicons name={'add-circle'} size={20} />
          </TouchableOpacity>
        </View>
      </View>
    </View>
  );
};

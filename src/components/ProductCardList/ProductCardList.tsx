import React from 'react';
import { FlatList, ViewStyle } from 'react-native';

import { Product } from 'types';

import { renderProductCard } from './ProductCardList.functions';
import { styles } from './ProductCardList.styles';

interface ProductCardListProps {
  data: Product[];
  style?: ViewStyle;
}

export const ProductCardList = ({ data, style }: ProductCardListProps) => {
  const flatListStyle = [styles.listContainer, style];

  return (
    <FlatList
      data={data.slice(0, 3)}
      renderItem={renderProductCard}
      horizontal={true}
      contentContainerStyle={flatListStyle}
    />
  );
};

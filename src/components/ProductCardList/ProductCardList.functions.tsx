import React from 'react';
import { ListRenderItem } from 'react-native';

import { Product } from 'types';
import { ProductCard } from 'components/ProductCard/ProductCard';

export const renderProductCard: ListRenderItem<Product> = ({ item }) => {
  return <ProductCard product={item} />;
};

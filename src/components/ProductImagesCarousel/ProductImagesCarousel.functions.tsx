import React from 'react';
import { Image, ListRenderItem } from 'react-native';

import { ProductImage } from 'types';

import { styles } from './ProductImagesCarousel.styles';

export const renderProductImage: ListRenderItem<ProductImage> = ({ item }) => {
  return <Image style={styles.image} source={{ uri: item.uri }} />;
};

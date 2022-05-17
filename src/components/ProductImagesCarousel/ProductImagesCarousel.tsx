import React, { useRef, useState } from 'react';
import { View, useWindowDimensions } from 'react-native';

import { theme } from 'theme';
import { ProductImage } from 'types';

import { styles } from './ProductImagesCarousel.styles';
import { renderProductImage } from './ProductImagesCarousel.functions';

import { Octicons } from '@expo/vector-icons';
import Carousel from 'react-native-snap-carousel';

interface ProductImagesCarouselProps {
  imagesUri: ProductImage[];
}

export const ProductImagesCarousel = ({
  imagesUri,
}: ProductImagesCarouselProps) => {
  const [showedImageIndex, setShowedImageIndex] = useState(0);
  const carouselRef = useRef<any>(null);

  const { width } = useWindowDimensions();

  return (
    <View style={styles.container}>
      <Carousel
        ref={c => {
          carouselRef.current = c;
        }}
        data={imagesUri}
        renderItem={renderProductImage}
        sliderWidth={width}
        itemWidth={230}
        onSnapToItem={index => setShowedImageIndex(index)}
      />
      <View style={styles.dotsContainer}>
        {imagesUri.map((dot, index) => {
          let dotColor = theme.colors.primaryContrast;
          if (showedImageIndex === index) {
            dotColor = theme.colors.primary;
          }
          return (
            <Octicons
              name={'dot-fill'}
              size={25}
              color={dotColor}
              key={index}
              style={styles.dot}
            />
          );
        })}
      </View>
    </View>
  );
};

import React from 'react';
import { View, useWindowDimensions } from 'react-native';

import { BannerTO } from 'types';

import { renderBanner } from './BannerCarousel.functions';
import { styles } from './BannerCarousel.styles';

import Carousel from 'react-native-snap-carousel';

interface BannerCarouselProps {
  data: BannerTO[];
}

export const BannerCarousel = ({ data }: BannerCarouselProps) => {
  const { width } = useWindowDimensions();

  return (
    <View style={styles.container}>
      <Carousel
        data={data}
        renderItem={renderBanner}
        sliderWidth={width}
        itemWidth={350}
      />
    </View>
  );
};

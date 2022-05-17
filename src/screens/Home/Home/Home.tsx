import React, { useEffect, useState } from 'react';
import { View, Text, Button } from 'react-native';

import { BannerCarousel, CategoriesList, ProductCardList } from 'components';
import { categoriesData, productsData, bannerData } from 'mocks';

import { styles } from './Home.styles';

interface HomeScreenProps {}

export const HomeScreen = ({}: HomeScreenProps) => {
  return (
    <View style={styles.container}>
      <View style={styles.categoriesContainer}>
        <Text style={styles.label}>Categories</Text>
        <CategoriesList data={categoriesData} style={styles.cardsContainer} />
      </View>
      <View style={styles.latestContainer}>
        <Text style={styles.label}>Latest</Text>
        <BannerCarousel data={bannerData} />
      </View>
      <View style={styles.productCardListContainer}>
        <ProductCardList data={productsData} />
      </View>
    </View>
  );
};

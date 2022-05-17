import React from 'react';
import { View, Text } from 'react-native';

import { BannerCarousel, CategoriesList, ProductCardList } from 'components';

import { useFetchCategories } from 'queries/category';
import { useFetchProducts } from 'queries/product';
import { useFetchBanners } from 'queries/banner';

import { styles } from './Home.styles';
import { LoadingScreen } from 'components/LoadingScreen/LoadingScreen';

interface HomeScreenProps {}

export const HomeScreen = ({}: HomeScreenProps) => {
  const { data: categoriesData, isLoading: isLoadingCategories } =
    useFetchCategories();

  const { data: productsData, isLoading: isLoadingProducts } =
    useFetchProducts();

  const { data: bannersData, isLoading: isLoadingBanners } = useFetchBanners();

  if (isLoadingCategories || isLoadingProducts || isLoadingBanners) {
    return <LoadingScreen />;
  }

  return (
    <View style={styles.container}>
      <View style={styles.categoriesContainer}>
        <Text style={styles.label}>Categories</Text>
        <CategoriesList data={categoriesData!} style={styles.cardsContainer} />
      </View>
      <View style={styles.latestContainer}>
        <Text style={styles.label}>Latest</Text>
        <BannerCarousel data={bannersData!} />
      </View>
      <View style={styles.productCardListContainer}>
        <ProductCardList data={productsData!} />
      </View>
    </View>
  );
};

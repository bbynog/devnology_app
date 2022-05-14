import React from 'react';
import { View, Text, Button } from 'react-native';

import { styles } from './Home.styles';

import { useNavigation } from '@react-navigation/native';
import { StackNavigationProp } from '@react-navigation/stack';
import {
  StackNavigatorParamsList,
  StackScreen,
} from 'navigation/StackNavigator/StackNavigator.types';

import { CategoriesList } from 'components';

import { categoriesData } from 'mocks';

interface HomeScreenProps {}

export const HomeScreen = ({}: HomeScreenProps) => {
  const navigation =
    useNavigation<StackNavigationProp<StackNavigatorParamsList>>();

  const navigateToProductDetails = () => {
    navigation.navigate(StackScreen.PRODUCT_DETAILS);
  };

  return (
    <View style={styles.container}>
      <View style={styles.categoriesContainer}>
        <Text style={styles.label}>Categories</Text>
        <CategoriesList
          data={categoriesData}
          contentContainerStyle={styles.cardsContainer}
        />
      </View>

      <Button title={'ProductDetails'} onPress={navigateToProductDetails} />
    </View>
  );
};

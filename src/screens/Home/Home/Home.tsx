import React from 'react';
import { View, Text, Button } from 'react-native';

import { styles } from './Home.styles';

import { useNavigation } from '@react-navigation/native';
import { StackNavigationProp } from '@react-navigation/stack';
import {
  StackNavigatorParamsList,
  StackScreen,
} from 'navigation/StackNavigator/StackNavigator.types';

import { CategoriesList, RoundedButton } from 'components';

import { categoriesData } from 'mocks';

import { Entypo } from '@expo/vector-icons';
import { customColors } from 'theme';

import { productService, categoryService } from 'services';

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

      <RoundedButton
        label={'Share this'}
        icon={
          <Entypo name={'chevron-right'} color={customColors.gold} size={26} />
        }
        onPress={() => console.log('click')}
      />
      <Button title={'ProductDetails'} onPress={navigateToProductDetails} />
    </View>
  );
};

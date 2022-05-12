import React from 'react';
import { View, Text, Button } from 'react-native';

import { styles } from './Home.styles';

import { useNavigation } from '@react-navigation/native';
import { StackNavigationProp } from '@react-navigation/stack';
import {
  StackNavigatorParamsList,
  StackScreen,
} from 'navigation/StackNavigator/StackNavigator.types';

interface HomeScreenProps {}

export const HomeScreen = ({}: HomeScreenProps) => {
  const navigation =
    useNavigation<StackNavigationProp<StackNavigatorParamsList>>();

  const navigateToProductDetails = () => {
    navigation.navigate(StackScreen.PRODUCT_DETAILS);
  };
  return (
    <View style={styles.container}>
      <Text>Halu, Home Screen!</Text>
      <Button title={'ProductDetails'} onPress={navigateToProductDetails} />
    </View>
  );
};

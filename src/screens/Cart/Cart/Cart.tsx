import React from 'react';
import { Button, Text, View } from 'react-native';

import { styles } from './Cart.styles';

import { useNavigation } from '@react-navigation/native';
import { StackNavigationProp } from '@react-navigation/stack';
import {
  StackNavigatorParamsList,
  StackScreen,
} from 'navigation/StackNavigator/StackNavigator.types';

export const CartScreen = () => {
  const navigation =
    useNavigation<StackNavigationProp<StackNavigatorParamsList>>();

  const navigateToCheckout = () => {
    navigation.navigate(StackScreen.CHECKOUT);
  };
  return (
    <View style={styles.container}>
      <Text>Halu Cart Screen!</Text>
      <Button title={'Checkout'} onPress={navigateToCheckout} />
    </View>
  );
};

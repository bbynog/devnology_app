import React from 'react';
import { View, Text } from 'react-native';

import { customColors, theme } from 'theme';
import { RoundedButton } from 'components';
import { ProfileStackNavigatorParamsList } from 'navigation/types';

import { styles } from './Checkout.styles';
import { navigateToMyOrders } from './Checkout.functions';
import { IconOfMyOrdersButton } from './Checkout.components';

import { Feather } from '@expo/vector-icons';
import { NavigationProp, useNavigation } from '@react-navigation/native';

import { SafeAreaView } from 'react-native-safe-area-context';

const { colors } = theme;

interface CheckoutProps {}

export const CheckoutScreen = ({}: CheckoutProps) => {
  const navigation =
    useNavigation<NavigationProp<ProfileStackNavigatorParamsList>>();
  return (
    <SafeAreaView style={styles.screenContainer}>
      <View style={styles.circleCheckedContainer}>
        <Feather name={'check'} size={60} color={colors.secondaryVariant} />
      </View>
      <View style={styles.titleContainer}>
        <Text style={styles.titleText}>Order Placed!</Text>
      </View>
      <View style={styles.descriptionContainer}>
        <Text style={styles.descriptionText}>
          Your order was placed successfully. For more details, check All My
          Orders page under Profile tab
        </Text>
      </View>
      <RoundedButton
        onPress={() => navigateToMyOrders(navigation)}
        label={'MY ORDERS'}
        labelColor={customColors.white}
        backgroundColor={colors.primary}
        icon={IconOfMyOrdersButton}
        style={styles.myOrdersButton}
      />
    </SafeAreaView>
  );
};

import React from 'react';
import { Text, View, FlatList } from 'react-native';

import { customColors, theme } from 'theme';
import { Divider, RoundedButton } from 'components';
import { currencyFormat } from 'utils';
import { CartStackNavigatorParamsList } from 'navigation/types';
import { useAppSelector } from 'hooks';

import { styles } from './Cart.styles';
import { handleCheckoutButtonPress, renderProduct } from './Cart.functions';
import {
  EmptyCartView,
  IconOfCheckoutButton,
  ListHeaderLabel,
} from './Cart.components';

import { useNavigation } from '@react-navigation/native';
import { StackNavigationProp } from '@react-navigation/stack';

const { colors } = theme;

export const CartScreen = () => {
  const { products: cartProducts, total: cartTotal } = useAppSelector(
    state => state.cart
  );

  const navigation =
    useNavigation<StackNavigationProp<CartStackNavigatorParamsList>>();

  return (
    <View style={styles.container}>
      <FlatList
        data={cartProducts}
        renderItem={renderProduct}
        contentContainerStyle={styles.flatListContainer}
        ItemSeparatorComponent={() => <Divider size={20} />}
        ListHeaderComponent={cartProducts.length ? <ListHeaderLabel /> : null}
        ListEmptyComponent={<EmptyCartView />}
      />
      <View style={styles.footerContainer}>
        <View style={styles.totalContainer}>
          <Text style={styles.totalLabelText}>Total</Text>
          <Text style={styles.totalPriceText}>{currencyFormat(cartTotal)}</Text>
        </View>
        <>
          <RoundedButton
            onPress={() => handleCheckoutButtonPress(navigation)}
            label={'CHECKOUT'}
            icon={IconOfCheckoutButton}
            backgroundColor={colors.primary}
            labelColor={customColors.white}
          />
        </>
      </View>
    </View>
  );
};

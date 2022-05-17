import React from 'react';
import { View, Text, ScrollView } from 'react-native';

import { ProductImagesCarousel, RoundedButton } from 'components';
import { Product } from 'types';
import { currencyFormat } from 'utils';
import { BottomTabNavigatorParamsList } from 'navigation/types';
import { customColors, theme } from 'theme';

import { styles } from './ProductDetails.styles';
import {
  handleAddToCartPress,
  handleShareThisPress,
} from './ProductDetails.functions';
import {
  IconOfAddToCartButton,
  IconOfShareThisButton,
} from './ProductDetails.components';

import { NavigationProp, useNavigation } from '@react-navigation/native';
import { useAppDispatch } from 'hooks';

import { SafeAreaView } from 'react-native-safe-area-context';

const { colors } = theme;

interface ProductDetailsProps {
  route: {
    params: {
      product: Product;
    };
  };
}

export const ProductDetailsScreen = ({ route }: ProductDetailsProps) => {
  const dispatch = useAppDispatch();

  const { product } = route.params;

  const navigation =
    useNavigation<NavigationProp<BottomTabNavigatorParamsList>>();

  return (
    <SafeAreaView style={styles.screenContainer}>
      <ScrollView>
        <View style={styles.headerContainer}>
          <Text style={styles.labelText}>{product.fullName}</Text>
        </View>
        <ProductImagesCarousel imagesUri={product.imagesUri} />
        <View style={styles.priceContainer}>
          <Text style={styles.labelText}>Price:</Text>
          <Text style={styles.priceText}>{currencyFormat(product.price)}</Text>
        </View>
        <View style={styles.aboutContainer}>
          <Text style={styles.labelText}>About this item:</Text>
          <Text style={styles.aboutText}>{product.description}</Text>
        </View>
      </ScrollView>
      <View style={styles.footerContainer}>
        <RoundedButton
          onPress={handleShareThisPress}
          label={'SHARE THIS'}
          backgroundColor={customColors.white}
          labelColor={colors.primary}
          icon={IconOfShareThisButton}
        />
        <RoundedButton
          onPress={() => handleAddToCartPress(product, navigation, dispatch)}
          label={'ADD TO CART'}
          backgroundColor={colors.primary}
          labelColor={customColors.white}
          icon={IconOfAddToCartButton}
        />
      </View>
    </SafeAreaView>
  );
};

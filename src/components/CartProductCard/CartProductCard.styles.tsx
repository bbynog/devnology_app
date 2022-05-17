import { StyleSheet } from 'react-native';
import { customColors, theme } from 'theme';

const { colors } = theme;

export const styles = StyleSheet.create({
  container: {
    flex: 1,
    flexDirection: 'row',
  },
  imageContainer: {
    marginRight: 25,
  },
  image: {
    width: 90,
    height: 90,
    resizeMode: 'contain',
  },
  nameContainer: {
    minHeight: 40,
    width: '82%',
  },
  nameText: {
    fontSize: 13,
  },
  pricesContainer: {
    flexDirection: 'row',
    alignItems: 'flex-end',
  },
  priceText: {
    color: customColors.black,
    fontWeight: '700',
    fontSize: 16,
  },
  subTotalPriceText: {
    color: colors.primaryVariant,
    fontWeight: '500',
    fontSize: 14,
    marginLeft: 10,
  },
  quantityActionsContainer: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  icon: {
    marginTop: 3,
  },
  quantityText: {
    fontWeight: '700',
    fontSize: 16,
    marginHorizontal: 6,
  },
});

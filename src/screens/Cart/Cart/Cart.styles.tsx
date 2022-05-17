import { StyleSheet } from 'react-native';
import { customColors, theme } from 'theme';

const { colors } = theme;

export const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: customColors.white,
  },
  labelText: {
    fontSize: 32,
    fontWeight: '700',
    color: colors.primary,
  },
  flatListContainer: {
    marginLeft: 25,
    marginTop: 20,
  },
  footerContainer: {
    backgroundColor: colors.primaryVariant,
    width: '100%',
    height: 90,
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-around',
  },
  totalContainer: {},
  totalLabelText: {
    color: customColors.white,
    fontWeight: '400',
    fontSize: 17,
  },
  totalPriceText: {
    color: customColors.white,
    fontWeight: '700',
    fontSize: 25,
  },
});

export const emptyCartViewStyles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: customColors.white,
    alignItems: 'center',
    marginTop: 100,
    marginRight: 25,
  },
  iconContainer: {},
  textContainer: {},
  text: {
    fontSize: 30,
    color: colors.primary,
    fontWeight: '700',
    textAlign: 'center',
    marginTop: 10,
  },
});

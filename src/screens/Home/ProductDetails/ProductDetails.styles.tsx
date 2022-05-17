import { StyleSheet } from 'react-native';
import { customColors, theme } from 'theme';

const { colors } = theme;

export const styles = StyleSheet.create({
  screenContainer: {
    flex: 1,
    backgroundColor: customColors.white,
  },

  headerContainer: {
    marginTop: 20,
    marginLeft: 20,
  },
  labelText: {
    fontSize: 18,
    fontWeight: '700',
  },

  priceContainer: {
    marginTop: 10,
    marginLeft: 20,
  },
  priceText: {
    fontSize: 30,
    fontWeight: '900',
    color: colors.primary,
  },
  aboutContainer: {
    marginTop: 12,
    marginLeft: 20,
  },
  aboutText: {
    marginTop: 10,
    fontWeight: '400',
    fontSize: 17,
  },
  footerContainer: {
    width: '100%',
    height: 90,
    backgroundColor: colors.primaryVariant,
    flexDirection: 'row',
    justifyContent: 'space-around',
    alignItems: 'center',
  },
});

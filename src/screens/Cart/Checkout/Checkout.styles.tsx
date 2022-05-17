import { StyleSheet } from 'react-native';
import { customColors, theme } from 'theme';

const { colors } = theme;

export const styles = StyleSheet.create({
  screenContainer: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: customColors.white,
  },
  circleCheckedContainer: {
    justifyContent: 'center',
    alignItems: 'center',
    borderRadius: 100,
    backgroundColor: colors.primary,
    width: 110,
    height: 110,
  },
  titleContainer: {
    marginTop: 25,
  },
  titleText: {
    fontSize: 32,
    color: colors.primary,
    fontWeight: '700',
  },
  descriptionContainer: {
    width: '70%',
    marginTop: 25,
  },
  descriptionText: {
    color: colors.primary,
    fontSize: 15,
    textAlign: 'center',
  },
  myOrdersButton: {
    marginTop: 80,
  },
});

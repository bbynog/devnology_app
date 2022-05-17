import { StyleSheet } from 'react-native';
import { customColors } from 'theme';

export const styles = StyleSheet.create({
  container: {
    alignItems: 'center',
    height: 160,
    width: 110,
    backgroundColor: customColors.white,
    borderRadius: 10,
  },
  imageContainer: {
    marginTop: 5,
  },
  image: {
    width: 85,
    height: 85,
    resizeMode: 'contain',
  },
  nameContainer: { marginHorizontal: 6 },
  nameText: {
    fontWeight: '400',
    fontSize: 10,
  },
  priceContainer: {
    alignSelf: 'flex-start',
    marginLeft: 11,
    marginTop: 4,
  },
  priceText: {
    fontWeight: '700',
  },
});

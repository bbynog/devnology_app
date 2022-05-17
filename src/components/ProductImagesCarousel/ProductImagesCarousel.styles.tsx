import { StyleSheet } from 'react-native';

export const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  image: {
    width: 230,
    height: 230,
    resizeMode: 'contain',
    alignSelf: 'center',
    marginTop: 20,
  },
  dotsContainer: {
    flexDirection: 'row',
  },
  dot: {
    marginHorizontal: 6,
  },
});

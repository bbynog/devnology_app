import { StyleSheet } from 'react-native';
import { theme } from 'theme';

export const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  label: {
    fontSize: 34,
    fontWeight: 'bold',
    color: theme.colors.primary,
    paddingLeft: 18,
    marginBottom: 10,
  },
  categoriesContainer: {},
  latestContainer: {
    marginTop: 20,
  },
  cardsContainer: {
    flex: 1,
    flexDirection: 'row',
    justifyContent: 'space-evenly',
  },
  productCardListContainer: {
    marginTop: 30,
    marginHorizontal: 15,
  },
});

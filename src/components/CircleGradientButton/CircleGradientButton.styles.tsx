import { StyleSheet } from 'react-native';
import { theme } from 'theme';

export const styles = StyleSheet.create({
  circleContainer: {
    borderRadius: 100,
    height: 75,
    width: 75,
    marginBottom: 5,
    justifyContent: 'center',
    alignItems: 'center',
  },
  label: {
    fontSize: 15,
    color: theme.colors.primary,
    alignSelf: 'center',
  },
});

import { StyleSheet } from 'react-native';
import { theme } from 'theme';

const { colors } = theme;

export const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  badge: {
    position: 'absolute',
    backgroundColor: colors.secondary,
    left: 15,
    top: 11,
  },
});

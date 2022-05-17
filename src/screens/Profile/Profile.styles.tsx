import { StyleSheet } from 'react-native';

import { theme } from 'theme';

const { colors } = theme;

export const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: colors.primaryContrast,
  },
});

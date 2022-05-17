import { StyleSheet } from 'react-native';
import { theme } from 'theme';

const { colors } = theme;

export const styles = StyleSheet.create({
  homeHeaderRightContainer: {
    flexDirection: 'row',
    marginRight: 15,
  },
  headerRightContainerStyles: {
    marginTop: 14,
    marginRight: 16,
  },
  chatBubbleIconStyles: {
    transform: [
      {
        rotateY: '180deg',
      },
    ],
    marginRight: 30,
  },
  productDetailsHeaderRightContainer: {
    marginRight: 15,
  },
  productDetailsHeaderTitleContainer: {
    marginLeft: 50,
  },
  badge: {
    position: 'absolute',
    backgroundColor: colors.secondary,
    left: 15,
    top: 11,
  },
});

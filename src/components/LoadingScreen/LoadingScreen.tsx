import React from 'react';
import { View, ActivityIndicator } from 'react-native';

import { customColors } from 'theme';

import { styles } from './LoadingScreen.styles';

interface LoadingScreenProps {}

export const LoadingScreen = ({}: LoadingScreenProps) => {
  return (
    <View style={styles.screenContainer}>
      <ActivityIndicator size={'large'} color={customColors.logoGreen} />
    </View>
  );
};

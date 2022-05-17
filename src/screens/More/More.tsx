import React from 'react';
import { View } from 'react-native';

import { Logo } from 'components';

import { styles } from './More.styles';

export const MoreScreen = () => {
  return (
    <View style={styles.container}>
      <Logo />
    </View>
  );
};

import React from 'react';
import { View } from 'react-native';

import { Logo } from 'components';

import { styles } from './Search.styles';

export const SearchScreen = () => {
  return (
    <View style={styles.container}>
      <Logo />
    </View>
  );
};

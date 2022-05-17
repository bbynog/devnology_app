import React from 'react';

import { Logo } from 'components';

import { styles } from './Search.styles';

import { SafeAreaView } from 'react-native-safe-area-context';

export const SearchScreen = () => {
  return (
    <SafeAreaView style={styles.container}>
      <Logo />
    </SafeAreaView>
  );
};

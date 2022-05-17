import React from 'react';

import { Logo } from 'components';

import { styles } from './More.styles';

import { SafeAreaView } from 'react-native-safe-area-context';

export const MoreScreen = () => {
  return (
    <SafeAreaView style={styles.container}>
      <Logo />
    </SafeAreaView>
  );
};

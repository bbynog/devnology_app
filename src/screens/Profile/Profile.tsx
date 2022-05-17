import React from 'react';

import { Logo } from 'components';

import { styles } from './Profile.styles';

import { SafeAreaView } from 'react-native-safe-area-context';

export const ProfileScreen = () => {
  return (
    <SafeAreaView style={styles.container}>
      <Logo />
    </SafeAreaView>
  );
};

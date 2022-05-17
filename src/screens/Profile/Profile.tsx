import React from 'react';
import { View } from 'react-native';

import { Logo } from 'components';

import { styles } from './Profile.styles';

export const ProfileScreen = () => {
  return (
    <View style={styles.container}>
      <Logo />
    </View>
  );
};

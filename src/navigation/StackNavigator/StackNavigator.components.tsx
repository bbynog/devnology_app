import React from 'react';
import { View, TouchableOpacity } from 'react-native';

import { theme } from 'theme';

import { styles } from './StackNavigator.styles';

import { Ionicons, MaterialCommunityIcons } from '@expo/vector-icons';

const { colors } = theme;

interface DefaultHeaderRightProps {
  chatOnPress?: () => void;
  notificationOnPress?: () => void;
}

export const DefaultHeaderRight = ({
  chatOnPress,
  notificationOnPress,
}: DefaultHeaderRightProps) => {
  return (
    <View style={styles.homeHeaderRightContainer}>
      <TouchableOpacity onPress={() => chatOnPress?.()}>
        <Ionicons
          name={'ios-chatbubble-outline'}
          style={styles.chatBubbleIconStyles}
          color={colors.onPrimary}
          size={24}
        />
      </TouchableOpacity>
      <TouchableOpacity onPress={() => notificationOnPress?.()}>
        <MaterialCommunityIcons
          name={'bell-outline'}
          size={25}
          color={colors.onPrimary}
        />
      </TouchableOpacity>
    </View>
  );
};

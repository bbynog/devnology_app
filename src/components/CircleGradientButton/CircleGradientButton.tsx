import React from 'react';
import { View, Text, Pressable } from 'react-native';

import { Gradient } from 'components/Gradient/Gradient';

import { styles } from './CircleGradientButton.styles';

import { MaterialCommunityIcons } from '@expo/vector-icons';

import { MaterialCommunityIconName } from 'types';

interface CircleGradientButtonProps {
  colors: string[];
  label?: string;
  iconName?: MaterialCommunityIconName;
  iconColor?: string;
  iconSize?: number;
  onPress?: (id: number) => void;
  disabled?: boolean;
  id: number;
}

export const CircleGradientButton = ({
  id,
  colors,
  label,
  iconName,
  iconColor = 'rgba(255, 255, 255, 0.86)',
  iconSize = 60,
  onPress,
  disabled,
}: CircleGradientButtonProps) => {
  return (
    <View>
      <Pressable
        onPress={() => onPress?.(id)}
        android_ripple={disabled ? {} : { color: 'grey', borderless: true }}
        disabled={disabled}
      >
        <Gradient colors={colors} style={styles.circleContainer}>
          {iconName ? (
            <MaterialCommunityIcons
              name={iconName}
              color={iconColor}
              size={iconSize}
            />
          ) : null}
        </Gradient>
        {label ? <Text style={styles.label}>{label}</Text> : null}
      </Pressable>
    </View>
  );
};

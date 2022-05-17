import React from 'react';
import { View, Text, TouchableOpacity } from 'react-native';

import { MaterialCommunityIconName } from 'types';
import { Gradient } from 'components/Gradient/Gradient';

import { styles } from './CircleGradientButton.styles';

import { MaterialCommunityIcons } from '@expo/vector-icons';

interface CircleGradientButtonProps {
  colors: string[];
  label?: string;
  iconName?: MaterialCommunityIconName;
  iconColor?: string;
  iconSize?: number;
  onPress?: (id: string) => void;
  disabled?: boolean;
  id: string;
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
      <TouchableOpacity onPress={() => onPress?.(id)} disabled={disabled}>
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
      </TouchableOpacity>
    </View>
  );
};

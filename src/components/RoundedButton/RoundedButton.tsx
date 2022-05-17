import React from 'react';
import { View, Text, TouchableOpacity, ViewStyle } from 'react-native';

import {
  StackNavigatorParamsList,
  BottomTabNavigatorParamsList,
} from 'navigation/types';

import { styles } from './RoundedButton.styles';

import { NavigationProp, useTheme } from '@react-navigation/native';

interface RoundedButtonProps {
  label?: string;
  icon?: JSX.Element;
  labelColor?: string;
  backgroundColor?: string;
  onPress: (
    navigation?: NavigationProp<
      StackNavigatorParamsList & BottomTabNavigatorParamsList
    >
  ) => void;
  style?: ViewStyle;
}

export const RoundedButton = ({
  label = '',
  icon,
  labelColor,
  backgroundColor,
  onPress,
  style,
}: RoundedButtonProps) => {
  const { colors } = useTheme();
  label = label?.toUpperCase();

  const buttonStyles = [
    styles.buttonContainer,
    { backgroundColor: backgroundColor || colors.onPrimary },
    style,
  ];

  const labelTextStyles = [styles.labelText, { color: labelColor }];

  return (
    <TouchableOpacity style={buttonStyles} onPress={() => onPress?.()}>
      <View style={styles.labelContainer}>
        <Text style={labelTextStyles}>{label}</Text>
      </View>
      <View style={styles.iconContainer}>{icon}</View>
    </TouchableOpacity>
  );
};

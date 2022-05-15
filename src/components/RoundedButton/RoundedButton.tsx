import React from 'react';
import { View, Text, TouchableOpacity } from 'react-native';

import { useTheme } from '@react-navigation/native';

import { styles } from './RoundedButton.styles';

interface RoundedButtonProps {
  label?: string;
  icon?: JSX.Element;
  labelColor?: string;
  backgroundColor?: string;
  onPress: () => void;
}

export const RoundedButton = ({
  label,
  icon,
  labelColor,
  backgroundColor,
  onPress,
}: RoundedButtonProps) => {
  const { colors } = useTheme();
  label = label?.toUpperCase();

  const buttonStyles = [
    styles.buttonContainer,
    { backgroundColor: backgroundColor || colors.onPrimary },
  ];

  const labelTextStyles = [styles.labelText, { color: labelColor }];

  return (
    <TouchableOpacity style={buttonStyles} onPress={onPress}>
      <Text style={labelTextStyles}>{label + '   '}</Text>
      {icon}
    </TouchableOpacity>
  );
};

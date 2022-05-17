import React from 'react';

import { theme, customColors } from 'theme';

import { MaterialCommunityIcons } from '@expo/vector-icons';

const { colors } = theme;

export const IconOfShareThisButton = (
  <MaterialCommunityIcons
    name={'chevron-up'}
    size={40}
    color={colors.primary}
  />
);

export const IconOfAddToCartButton = (
  <MaterialCommunityIcons
    name={'chevron-right'}
    size={37}
    color={customColors.white}
  />
);

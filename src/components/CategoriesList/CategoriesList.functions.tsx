import { CircleGradientButton } from 'components/CircleGradientButton/CircleGradientButton';
import React from 'react';
import { theme } from 'theme';

const { colors } = theme;

const navigateToCategoriesScreen = (id: string) => {
  //navivigation.navigate('CategoriesScreen', {});
};

export const renderSeeAllButton = () => (
  <CircleGradientButton
    colors={[colors.onPrimary, colors.onPrimary]}
    label={'See All'}
    iconName={'chevron-right'}
    iconColor={colors.secondaryVariant}
    onPress={navigateToCategoriesScreen}
    id={'-1'}
  />
);

const navigateToCategory = (id: string) => {
  // navigation.navigate('CategoryScreen', {
  //     id: id
  // })
};

export const renderButtonItem = ({ item }) => {
  const { firstColor, secondColor, iconColor, iconName, label, id } = item;
  return (
    <CircleGradientButton
      id={id}
      colors={[firstColor, secondColor]}
      label={label}
      iconName={iconName}
      iconColor={iconColor}
      onPress={navigateToCategory}
    />
  );
};

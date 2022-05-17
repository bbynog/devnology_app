import React from 'react';
import { ListRenderItem } from 'react-native';

import { theme } from 'theme';
import { CategoryTO } from 'types';

import { CircleGradientButton } from 'components/CircleGradientButton/CircleGradientButton';

const { colors } = theme;

const navigateToCategoriesScreen = (id: string) => {
  //navigation.navigate('CategoriesScreen', {});
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

export const renderButtonItem: ListRenderItem<CategoryTO> = ({ item }) => {
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

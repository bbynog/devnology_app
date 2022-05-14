import React from 'react';
import { FlatList, ViewStyle } from 'react-native';

import {
  renderSeeAllButton,
  renderButtonItem,
} from './CategoriesList.functions';

import { CircleGradientButtonTO } from 'types';

interface CategoriesListProps {
  data: CircleGradientButtonTO[];
  contentContainerStyle: ViewStyle;
  customRenderItem?: () => any;
}

export const CategoriesList = ({
  data,
  contentContainerStyle,
  customRenderItem,
}: CategoriesListProps) => {
  return (
    <FlatList
      data={data}
      renderItem={customRenderItem ? customRenderItem : renderButtonItem}
      horizontal
      contentContainerStyle={contentContainerStyle}
      ListFooterComponent={renderSeeAllButton}
    />
  );
};

import React from 'react';
import { FlatList, ViewStyle } from 'react-native';

import { CategoryTO } from 'types';

import {
  renderSeeAllButton,
  renderButtonItem,
} from './CategoriesList.functions';

interface CategoriesListProps {
  data: CategoryTO[];
  style: ViewStyle;
  customRenderItem?: () => any;
}

export const CategoriesList = ({
  data,
  style,
  customRenderItem,
}: CategoriesListProps) => {
  return (
    <FlatList
      data={data}
      renderItem={customRenderItem ? customRenderItem : renderButtonItem}
      horizontal
      contentContainerStyle={style}
      ListFooterComponent={renderSeeAllButton}
    />
  );
};

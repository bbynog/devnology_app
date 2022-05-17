import React from 'react';
import { ListRenderItem } from 'react-native';

import { BannerTO } from 'types';
import { Banner } from '../Banner/Banner';

export const renderBanner: ListRenderItem<BannerTO> = ({ item }) => {
  return <Banner banner={item} onPress={() => {}} />;
};

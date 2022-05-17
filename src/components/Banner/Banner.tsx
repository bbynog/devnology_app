import React from 'react';
import { TouchableOpacity, Image } from 'react-native';

import { BannerTO } from 'types';

import { styles } from './Banner.styles';

interface BannerProps {
  banner: BannerTO;
  onPress: () => void;
}

export const Banner = ({ banner, onPress }: BannerProps) => {
  return (
    <TouchableOpacity onPress={onPress}>
      <Image source={{ uri: banner.uri }} style={styles.banner} />
    </TouchableOpacity>
  );
};

import React, { useCallback } from 'react';
import { View, TouchableOpacity } from 'react-native';

import { RootState } from 'store/types';
import { theme } from 'theme';

import { styles } from './BadgedCartIcon.styles';

import { AntDesign } from '@expo/vector-icons';
import { connect, ConnectedProps } from 'react-redux';
import { Badge } from 'react-native-paper';

const { colors } = theme;

type BadgedCartIconProps = {
  onPress?: () => void;
  color?: string;
  size?: number;
} & PropsFromRedux;

const BadgedCartIcon = ({
  cartLength,
  onPress,
  color = colors.onPrimary,
  size = 25,
}: BadgedCartIconProps) => {
  const renderBadgedIcon = useCallback(
    () => (
      <>
        <AntDesign name={'shoppingcart'} color={color} size={size} />
        <Badge
          children={cartLength}
          visible={!!cartLength}
          style={styles.badge}
          size={16}
        />
      </>
    ),
    [cartLength, color, size]
  );
  return (
    <>
      {onPress ? (
        <TouchableOpacity style={styles.container} onPress={() => onPress?.()}>
          {renderBadgedIcon()}
        </TouchableOpacity>
      ) : (
        <View style={styles.container}>{renderBadgedIcon()}</View>
      )}
    </>
  );
};

const mapStateToProps = (state: RootState) => ({
  cartLength: state.cart.products.length,
});

const connector = connect(mapStateToProps);

type PropsFromRedux = ConnectedProps<typeof connector>;

export default connect(mapStateToProps)(BadgedCartIcon);

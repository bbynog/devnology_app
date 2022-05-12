import React from 'react';
import { Image } from 'react-native';

interface LogoProps {}

export const Logo = ({}: LogoProps) => {
  return (
    <>
      <Image source={require('../../../assets/logo.png')} />
    </>
  );
};

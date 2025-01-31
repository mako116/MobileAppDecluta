import React from 'react';
import { StyleSheet, View } from 'react-native';
import Svg, { Path } from 'react-native-svg';

const ArrowDownBlack = () => {
  return (
    <Svg
      width="20"
      height="20"
      viewBox="0 0 20 20"
      fill="none"
    >
      <Path
        d="M16.5999 7.42578L11.1666 12.8591C10.5249 13.5008 9.4749 13.5008 8.83324 12.8591L3.3999 7.42578"
        stroke="#292D32"
        strokeWidth="1.5"
        strokeMiterlimit="10"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </Svg>
  );
};

const styles = StyleSheet.create({});

export default ArrowDownBlack;

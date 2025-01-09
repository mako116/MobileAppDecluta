import React from 'react';
import Svg, { Path } from 'react-native-svg';
import { StyleSheet, View } from 'react-native';

const ArrowDown = () => {
  return (
    <Svg
      width="16"
      height="16"
      viewBox="0 0 16 16"
      fill="none"
     >
      <Path
        d="M13.56 5.26833L9.21333 9.615C8.7 10.1283 7.86 10.1283 7.34667 9.615L3 5.26833"
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

export default ArrowDown;

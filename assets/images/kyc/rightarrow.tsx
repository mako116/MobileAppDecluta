import React from 'react';
import { StyleSheet, View } from 'react-native';
import Svg, { Path } from 'react-native-svg';

const Rightarrow = () => {
  return (
    <Svg width="24" height="24" viewBox="0 0 24 24" fill="none">
      <Path
        d="M9 19L14.3306 12.7809C14.7158 12.3316 14.7158 11.6684 14.3306 11.2191L9 5"
        stroke="#A4A4A4"
        strokeWidth="1.5"
        strokeLinecap="round"
      />
    </Svg>
  );
};

const styles = StyleSheet.create({});

export default Rightarrow;

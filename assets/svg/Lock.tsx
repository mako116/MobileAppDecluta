import React from 'react';
import { StyleSheet } from 'react-native';
import Svg, { Rect, Path } from 'react-native-svg';

const Lock = () => {
  return (
    <Svg width="24" height="24" viewBox="0 0 24 24" fill="none">
      <Rect x="4" y="9" width="16" height="12" rx="4" stroke="#212121" strokeWidth="1.5" />
      <Path
        d="M12 16L12 14"
        stroke="#212121"
        strokeWidth="1.5"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <Path
        d="M16 9V7C16 4.79086 14.2091 3 12 3V3C9.79086 3 8 4.79086 8 7L8 9"
        stroke="#212121"
        strokeWidth="1.5"
      />
    </Svg>
  );
};

const styles = StyleSheet.create({});

export default Lock;

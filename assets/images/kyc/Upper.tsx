import React from 'react';
import { StyleSheet, View } from 'react-native';
import Svg, { Path } from 'react-native-svg';

const Upper = () => {
  return (
    <Svg width="24" height="24" viewBox="0 0 24 24" fill="none">
    <Path
      d="M5 15L11.2191 9.66939C11.6684 9.2842 12.3316 9.2842 12.7809 9.66939L19 15"
      stroke="#A4A4A4"
      strokeWidth="1.5"
      strokeLinecap="round"
    />
  </Svg>
   );
};

const styles = StyleSheet.create({
  container: {
    justifyContent: 'center',
    alignItems: 'center',
  },
});

export default Upper;

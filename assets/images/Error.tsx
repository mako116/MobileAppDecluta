import React from 'react';
import { StyleSheet, View } from 'react-native';
import Svg, { Path } from 'react-native-svg';

const CloseError = () => {
  return (
       <Svg width="16" height="16" viewBox="0 0 16 16" fill="none" 
       >
        <Path
          d="M12 4L4 12"
          stroke="#E42527"
          strokeWidth="1.1"
          strokeLinecap="round"
          strokeLinejoin="round"
        />
        <Path
          d="M4 4L12 12"
          stroke="#E42527"
          strokeWidth="1.1"
          strokeLinecap="round"
          strokeLinejoin="round"
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

export default CloseError;

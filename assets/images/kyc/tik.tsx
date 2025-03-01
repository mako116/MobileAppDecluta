import React from 'react';
import { StyleSheet, View } from 'react-native';
import Svg, { Rect, Path } from 'react-native-svg';

const Tik = () => {
  return (
       <Svg width="20" height="20" viewBox="0 0 20 20" fill="none">
        <Rect width="20" height="20" rx="10" fill="#F5EADC" />
        <Path
          d="M7.16675 9.99995L9.05341 11.8866L12.8334 8.11328"
          stroke="#212121"
          strokeLinecap="round"
          strokeLinejoin="round"
        />
      </Svg>
   );
};
 

export default Tik;

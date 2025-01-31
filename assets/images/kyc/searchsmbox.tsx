import React from 'react';
import { StyleSheet, View } from 'react-native';
import Svg, { Rect, Circle, Path } from 'react-native-svg';

const Searchsmbox = () => {
  return (
       <Svg width="20" height="20" viewBox="0 0 20 20" fill="none">
        <Rect width="20" height="20" rx="10" fill="#F5EADC" />
        <Circle cx="9.5" cy="9.5" r="4" stroke="#212121" strokeLinecap="round" strokeLinejoin="round" />
        <Path
          d="M12.25 12.479L14.75 14.979"
          stroke="#212121"
          strokeLinecap="round"
          strokeLinejoin="round"
        />
      </Svg>
   );
};
 

export default Searchsmbox;

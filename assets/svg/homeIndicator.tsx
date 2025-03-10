import React from 'react';
import Svg, { Rect } from 'react-native-svg';

const HomeIndicator = () => {
  return (
    <Svg
      width="75" 
      height="5" 
      viewBox="0 0 75 5" 
      fill="none"
     >
        <Rect 
            width="75" 
            height="5" 
            rx="2.5" 
            fill="#E9E9E9"
        />
    </Svg>
  );
};

export default HomeIndicator;


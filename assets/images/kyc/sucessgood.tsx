import React from 'react';
import { StyleSheet, View } from 'react-native';
import Svg, { Rect, Circle, Path } from 'react-native-svg';

const SuccessGood = () => {
  return (
       <Svg width="135" height="135" viewBox="0 0 135 135" fill="none">
        <Rect width="135" height="135" rx="67.5" fill="#F5EADC" />
        <Circle cx="68" cy="67" r="56" fill="#DEBC8E" />
        <Path
          d="M21.3334 67.0002C21.3334 41.2269 42.2268 20.3335 68 20.3335C93.7733 20.3335 114.667 41.2269 114.667 67.0002C114.667 92.7734 93.7733 113.667 68 113.667C42.2268 113.667 21.3334 92.7734 21.3334 67.0002Z"
          fill="#B29672"
        />
        <Path
          d="M56.3334 64.6667L65.6667 74L84.3334 55.3333"
          stroke="white"
          strokeWidth="7"
          strokeLinecap="round"
          strokeLinejoin="round"
        />
      </Svg>
   );
};

 
export default SuccessGood;

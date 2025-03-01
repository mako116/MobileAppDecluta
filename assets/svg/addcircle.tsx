import React from 'react';
import Svg, { Path } from 'react-native-svg';

const Addcircle = () => {
  return (
    <Svg
      width="32"
      height="32"
      viewBox="0 0 32 32"
      fill="none"
     >
      {/* Circle Outline */}
      <Path
        d="M16.0003 29.3346C23.3337 29.3346 29.3337 23.3346 29.3337 16.0013C29.3337 8.66797 23.3337 2.66797 16.0003 2.66797C8.66699 2.66797 2.66699 8.66797 2.66699 16.0013C2.66699 23.3346 8.66699 29.3346 16.0003 29.3346Z"
        stroke="#A4A4A4"
        strokeWidth="1.5"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      {/* Horizontal Line */}
      <Path
        d="M10.667 16H21.3337"
        stroke="#A4A4A4"
        strokeWidth="1.5"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      {/* Vertical Line */}
      <Path
        d="M16 21.3346V10.668"
        stroke="#A4A4A4"
        strokeWidth="1.5"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </Svg>
  );
};

export default Addcircle;

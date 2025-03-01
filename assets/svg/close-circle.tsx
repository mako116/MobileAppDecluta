import React from 'react';
import Svg, { Path } from 'react-native-svg';

const CloseCircle = () => {
  return (
    <Svg width="16" height="16" viewBox="0 0 16 16" fill="none">
      <Path
        d="M7.99992 14.6673C11.6666 14.6673 14.6666 11.6673 14.6666 8.00065C14.6666 4.33398 11.6666 1.33398 7.99992 1.33398C4.33325 1.33398 1.33325 4.33398 1.33325 8.00065C1.33325 11.6673 4.33325 14.6673 7.99992 14.6673Z"
        stroke="#E42527"
        strokeWidth="1.5"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <Path
        d="M6.11334 9.88661L9.88668 6.11328"
        stroke="#E42527"
        strokeWidth="1.5"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <Path
        d="M9.88668 9.88661L6.11334 6.11328"
        stroke="#E42527"
        strokeWidth="1.5"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </Svg>
  );
};

export default CloseCircle;

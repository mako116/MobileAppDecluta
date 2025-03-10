import React from 'react';
import Svg, { Path } from 'react-native-svg';

const CloseSquare = () => {
  return (
    <Svg
      width="30" height="30" viewBox="0 0 28 28" fill="none"
     >
      {/* Circle Outline */}
      <Path
        d="M9.00781 18.7691L17.5921 9.23096" 
        stroke="#212121" 
        stroke-width="1.5" 
        stroke-linecap="round" 
        stroke-linejoin="round"
      />
      {/* Horizontal Line */}
      <Path
        d="M17.5921 18.7691L9.00781 9.23096" 
        stroke="#212121" 
        stroke-width="1.5" 
        stroke-linecap="round" 
        stroke-linejoin="round"
      />
    </Svg>
  );
};

{/* <svg width="28" height="28" viewBox="0 0 28 28" fill="none" xmlns="http://www.w3.org/2000/svg" >
    <path d="M9.00781 18.7691L17.5921 9.23096" stroke="#212121" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"/>
<path d="M17.5921 18.7691L9.00781 9.23096" stroke="#212121" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"/>
</svg> */}

export default CloseSquare;

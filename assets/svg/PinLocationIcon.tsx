import React from 'react';
import Svg, { Path } from 'react-native-svg';

interface Location {
  width?: string | number;
  height?: string | number;
}
const PinLocation:React.FC<Location>=({width='20',height='20'}) => {
  return (
    <Svg width={width} height={height} viewBox="0 0 14 14" fill="none" 
     >
      <Path
        d="M7 1.3125C4.82617 1.3125 3.0625 2.99113 3.0625 5.05859C3.0625 7.4375 5.6875 11.2074 6.65137 12.5095C6.69138 12.5645 6.74382 12.6092 6.8044 12.64C6.86499 12.6709 6.93201 12.6869 7 12.6869C7.06799 12.6869 7.13501 12.6709 7.1956 12.64C7.25618 12.6092 7.30862 12.5645 7.34863 12.5095C8.3125 11.2079 10.9375 7.43941 10.9375 5.05859C10.9375 2.99113 9.17383 1.3125 7 1.3125Z" stroke="#212121" stroke-linecap="round" stroke-linejoin="round"
      />
      <Path
        d="M7 6.5625C7.72487 6.5625 8.3125 5.97487 8.3125 5.25C8.3125 4.52513 7.72487 3.9375 7 3.9375C6.27513 3.9375 5.6875 4.52513 5.6875 5.25C5.6875 5.97487 6.27513 6.5625 7 6.5625Z" stroke="#212121" stroke-linecap="round" stroke-linejoin="round"
      />
    </Svg>
  );
};

export default PinLocation;

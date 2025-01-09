import React from 'react';
import Svg, { Path } from 'react-native-svg'; // Import from react-native-svg

const ArrowUp = () => {
    return (
        <Svg width="16" height="16" viewBox="0 0 16 16" fill="none" 
      >
            <Path
                d="M13.5601 10.7317L9.21346 6.385C8.70012 5.87167 7.86012 5.87167 7.34679 6.385L3.00012 10.7317"
                stroke="#292D32"
                strokeWidth="1.5"
                strokeMiterlimit="10"
                strokeLinecap="round"
                strokeLinejoin="round"
            />
        </Svg>
    );
};

export default ArrowUp;

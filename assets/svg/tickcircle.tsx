import React from 'react';
import Svg, { Circle, Path } from 'react-native-svg';

const Tickcircle = () => {
    return (
        <Svg
            width="25"
            height="25"
            viewBox="0 0 25 25"
            fill="none"
         >
            <Circle cx="12.5" cy="12.5" r="10" fill="#009217" />
            <Path
                d="M8.25 12.4999L11.08 15.3299L16.75 9.66992"
                stroke="white"
                strokeWidth="1.5"
                strokeLinecap="round"
                strokeLinejoin="round"
            />
        </Svg>
    );
};

export default Tickcircle;

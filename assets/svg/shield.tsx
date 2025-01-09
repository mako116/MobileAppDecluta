import React from 'react';
import { Svg, Path } from 'react-native-svg'; // Importing the necessary components from react-native-svg

const Shield = () => {
    return (
        <Svg width="16" height="17" viewBox="0 0 16 17" fill="none" 
        >
            <Path 
                d="M8.00033 15.1654C6.45588 14.7765 5.18077 13.8903 4.17499 12.5067C3.16921 11.1231 2.66655 9.58714 2.66699 7.8987V3.83203L8.00033 1.83203L13.3337 3.83203V7.8987C13.3337 9.58759 12.831 11.1238 11.8257 12.5074C10.8203 13.8909 9.54521 14.7769 8.00033 15.1654Z" 
                fill="#F5EADC" 
            />
        </Svg>
    );
};

export default Shield;

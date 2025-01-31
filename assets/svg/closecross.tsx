import React from 'react';
import Svg, { Path } from 'react-native-svg';
import { StyleSheet, View } from 'react-native';

const Closecross = () => {
    return (
        <Svg width="18" height="18" viewBox="0 0 18 18" fill="none" 
       >
            <Path
                d="M9 16.5C13.125 16.5 16.5 13.125 16.5 9C16.5 4.875 13.125 1.5 9 1.5C4.875 1.5 1.5 4.875 1.5 9C1.5 13.125 4.875 16.5 9 16.5Z"
                stroke="#7E7E7E"
                strokeWidth="1.5"
                strokeLinecap="round"
                strokeLinejoin="round"
            />
            <Path
                d="M6.87744 11.1225L11.1224 6.8775"
                stroke="#7E7E7E"
                strokeWidth="1.5"
                strokeLinecap="round"
                strokeLinejoin="round"
            />
            <Path
                d="M11.1224 11.1225L6.87744 6.8775"
                stroke="#7E7E7E"
                strokeWidth="1.5"
                strokeLinecap="round"
                strokeLinejoin="round"
            />
        </Svg>
    );
};

const styles = StyleSheet.create({});

export default Closecross;

import React from 'react';
import { StyleSheet, View } from 'react-native';
import Svg, { Path } from 'react-native-svg';

const GoodCheck = () => {
    return (
        <Svg width="12" height="10" viewBox="0 0 12 10" fill="none" 
        >
            <Path
                d="M11.3334 1.5L4.00002 8.83333L0.666687 5.5"
                stroke="#463E31"
                strokeWidth="1.1"
                strokeLinecap="round"
                strokeLinejoin="round"
            />
        </Svg>
    );
};

const styles = StyleSheet.create({});

export default GoodCheck;

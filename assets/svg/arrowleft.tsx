import React from 'react';
import { StyleSheet } from 'react-native';
import Svg, { Path } from 'react-native-svg';

const Arrowleft = () => {
    return (
        <Svg
            width="16"
            height="16"
            viewBox="0 0 16 16"
            fill="none"
         >
            <Path
                d="M5.26833 13.56L9.615 9.21333C10.1283 8.7 10.1283 7.86 9.615 7.34667L5.26833 3"
                stroke="#292D32"
                strokeWidth="1.5"
                strokeMiterlimit="10"
                strokeLinecap="round"
                strokeLinejoin="round"
            />
        </Svg>
    );
};

const styles = StyleSheet.create({});

export default Arrowleft;

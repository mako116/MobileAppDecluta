import React from 'react';
import { Svg, Path } from 'react-native-svg';
import { StyleSheet, View } from 'react-native';

const CheckSquare = () => {
    return (
        <Svg width="27" height="28" viewBox="0 0 27 28" fill="none">
            <Path d="M2.25 14C2.25 7.7868 7.2868 2.75 13.5 2.75C19.7132 2.75 24.75 7.7868 24.75 14C24.75 20.2132 19.7132 25.25 13.5 25.25C7.2868 25.25 2.25 20.2132 2.25 14Z" fill="#DEBC8E"/>
            <Path d="M10.6875 13.4375L12.9375 15.6875L17.4375 11.1875" stroke="#463E31" strokeWidth="1.6875" strokeLinecap="round" strokeLinejoin="round"/>
        </Svg>
    );
};

const styles = StyleSheet.create({});

export default CheckSquare;

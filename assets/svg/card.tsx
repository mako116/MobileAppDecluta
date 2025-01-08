import React from 'react';
import Svg, { Path } from 'react-native-svg';
import { StyleSheet } from 'react-native';

const CardIcon = () => {
    return (
        <Svg
            width="17"
            height="14"
            viewBox="0 0 17 14"
            fill="none"
         >
            <Path
                d="M1.8335 4.96094H15.1668"
                stroke="#292D32"
                strokeMiterlimit="10"
                strokeLinecap="round"
                strokeLinejoin="round"
            />
            <Path
                d="M4.5 9.62695H5.83333"
                stroke="#292D32"
                strokeMiterlimit="10"
                strokeLinecap="round"
                strokeLinejoin="round"
            />
            <Path
                d="M7.5 9.62695H10.1667"
                stroke="#292D32"
                strokeMiterlimit="10"
                strokeLinecap="round"
                strokeLinejoin="round"
            />
            <Path
                d="M4.7935 2.04492H12.2002C14.5735 2.04492 15.1668 2.55826 15.1668 4.60576V9.39492C15.1668 11.4424 14.5735 11.9558 12.2068 11.9558H4.7935C2.42683 11.9616 1.8335 11.4483 1.8335 9.40076V4.60576C1.8335 2.55826 2.42683 2.04492 4.7935 2.04492Z"
                stroke="#292D32"
                strokeLinecap="round"
                strokeLinejoin="round"
            />
        </Svg>
    );
};

const styles = StyleSheet.create({});

export default CardIcon;

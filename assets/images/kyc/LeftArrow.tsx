import React from 'react';
import { TouchableOpacity, StyleSheet } from 'react-native';
import Svg, { Path } from 'react-native-svg';
import { useNavigation } from '@react-navigation/native';

function LeftArrow({ width = 24, height = 24, color = "#212121", strokeWidth = 1.5 }) {
    return (
        <Svg 
            width={width} 
            height={height} 
             viewBox="0 0 24 24" 
            fill="none"
        >
            <Path 
                d="M8.00009 8L4.7072 11.2929C4.31668 11.6834 4.31668 12.3166 4.7072 12.7071L8.00009 16M5.00009 12L19.0001 12" 
                stroke={color} 
                strokeWidth={strokeWidth} 
                strokeLinecap="round" 
            />
        </Svg>
    );
}

export default function BackButton() {
    const navigation = useNavigation();

    const goBack = () => {
        navigation.goBack();
    };

    return (
        <TouchableOpacity style={styles.button} onPress={goBack}>
            <LeftArrow />
        </TouchableOpacity>
    );
}

const styles = StyleSheet.create({
    button: {
        // padding: 10,
        paddingVertical:10,
        paddingRight:10,
        // paddingHorizontal:5,
        alignSelf: 'flex-start', // Adjust alignment as needed
    },
});

import React from 'react';
import { TouchableOpacity, StyleSheet } from 'react-native';
import Svg, { Path } from 'react-native-svg';
import { useNavigation } from '@react-navigation/native';

function LeftArrow({ width = 24, height = 24, color = "#212121", strokeWidth = 1.5 }) {
    return (
        <Svg width={width} height={height} viewBox="0 0 24 25" fill="none">
        <Path d="M5 12.5H19M5 12.5L12 5.5M5 12.5L12 19.5" stroke="#212121" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
        </Svg>
    );
}

export default function LeftButton() {
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
        // paddingVertical:10,
        paddingRight:10,
        // paddingHorizontal:5,
        alignSelf: 'flex-start', // Adjust alignment as needed
    },
});

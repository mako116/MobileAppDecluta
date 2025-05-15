import { useNavigation } from 'expo-router';
import React from 'react';
import { StyleSheet, TouchableOpacity, View } from 'react-native';
import Svg, { Path } from 'react-native-svg';

const ArrowBk  = ({ width = 24, height = 24, color = "#212121", strokeWidth = 1.5 }) => {
    return (
        <View> 
            <Svg width={width} 
            height={height}  
            viewBox="0 0 24 24" fill="none" >
             <Path d="M5 12H19M5 12L12 5M5 12L12 19" 
              stroke={color} 
              strokeWidth={strokeWidth} 
              stroke-linecap="round" stroke-linejoin="round"/>
           </Svg>

        </View>
    );
}
export default function ArrowBkOutline() {
    const navigation = useNavigation();

    const goBack = () => {
        navigation.goBack();
    };

    return (
        <TouchableOpacity style={styles.button} onPress={goBack}>
            <ArrowBk />
        </TouchableOpacity>
    );
}
const styles = StyleSheet.create({
    button: {
                alignSelf: 'flex-start', // Adjust alignment as needed
    },
})

 
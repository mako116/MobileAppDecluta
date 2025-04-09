import React from 'react';
import { StyleSheet, View } from 'react-native';
import Svg, { Path } from 'react-native-svg';

const Crossbad  = () => {
    return (
        <View>
     <Svg width="16" height="17" viewBox="0 0 16 17" fill="none">
     <Path d="M12 4.5L4 12.5" stroke="#E42527" stroke-width="1.1" stroke-linecap="round" stroke-linejoin="round"/>
    <Path d="M4 4.5L12 12.5" stroke="#E42527" stroke-width="1.1" stroke-linecap="round" stroke-linejoin="round"/>
    </Svg>
 </View>
    );
}

const styles = StyleSheet.create({})

export default Crossbad;

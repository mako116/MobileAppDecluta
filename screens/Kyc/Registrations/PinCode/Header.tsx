import DotsTop from '@/assets/images/kyc/dotsTop';
import LeftArrow from '@/assets/images/kyc/LeftArrow';
import React from 'react';
import { StyleSheet, Text, View } from 'react-native';
 import BackButton from '@/assets/images/kyc/LeftArrow';
import SetUpPin from './SetUpPin';
import Three from '@/assets/images/kyc/three';
 
const Header = () => {
    return (
        <View style={styles.header}>
            {/* <View style={styles.iconRow}> */}
                 <View style={styles.centerContainer}>
                    <Three/>
                </View>
            {/* </View> */}
            
             {/* setup pin*/}
             <SetUpPin/>
         </View>
    );
};

const styles = StyleSheet.create({
    header: {
        backgroundColor: "#fff",
        paddingTop: "17%",
         height:"100%"
    },
    label:{
        fontFamily:"Helvetica Neue",
        fontWeight:"700",
        fontSize:16,
        lineHeight:22.4,
        color:"#212121"
    },
    iconRow: {
        flexDirection: "row",
        alignItems: "center",
        paddingHorizontal: 5,
         paddingBottom:"1%",
     },
    centerContainer: {
        // flex: 0.9,  
        alignItems: "center",  
        paddingBottom:20
        // justifyContent: "center", 
    },
});

export default Header;

import DotsTop from '@/assets/images/kyc/dotsTop';
import LeftArrow from '@/assets/images/kyc/LeftArrow';
import React from 'react';
import { StyleSheet, Text, View } from 'react-native';
 import BackButton from '@/assets/images/kyc/LeftArrow';
import PreIdentity from './PreIdentity';

const Header = () => {
    return (
        <View style={styles.header}>
            <View style={styles.iconRow}>
                <BackButton />
                <View style={styles.centerContainer}>
                    <Text style={styles.label}>Verify Your Profile</Text>
                </View>
            </View>
            
             {/* pre identity kyc screen */}
             <PreIdentity/>
         </View>
    );
};

const styles = StyleSheet.create({
    header: {
        backgroundColor: "#fff",
        paddingTop: "13%",
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
        flex: 0.5,  
        alignItems: "center",  
        justifyContent: "center", 
    },
});

export default Header;

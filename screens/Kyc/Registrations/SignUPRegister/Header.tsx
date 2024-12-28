import DotsTop from '@/assets/images/kyc/dotsTop';
import LeftArrow from '@/assets/images/kyc/LeftArrow';
import React from 'react';
import { StyleSheet, View } from 'react-native';
import SignUpRegister from './SignUpRegister';
import BackButton from '@/assets/images/kyc/LeftArrow';

const Header = () => {
    return (
        <View style={styles.header}>
            <View style={styles.iconRow}>
                <BackButton />
                <View style={styles.centerContainer}>
                    <DotsTop />
                </View>
            </View>
            <SignUpRegister />
        </View>
    );
};

const styles = StyleSheet.create({
    header: {
        backgroundColor: "#fff",
        paddingTop: "15%",
       
        
        height:"100%"
    },
    iconRow: {
        flexDirection: "row",
        alignItems: "center",
        paddingHorizontal: 13,
         paddingBottom:"3%",
     },
    centerContainer: {
        flex: 1,  
        alignItems: "center",  
        justifyContent: "center", 
    },
});

export default Header;

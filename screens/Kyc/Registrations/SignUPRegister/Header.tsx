import DotsTop from '@/assets/images/kyc/dotsTop';
import LeftArrow from '@/assets/images/kyc/LeftArrow';
import React from 'react';
import { SafeAreaView, StyleSheet, View } from 'react-native';
import SignUpRegister from './SignUpRegister';
import BackButton from '@/assets/images/kyc/LeftArrow';

const Header = () => {
    return (
        <SafeAreaView style={styles.header}>
            <View style={styles.iconRow}>
                <BackButton />
                <View style={styles.centerContainer}>
                    <DotsTop />
                </View>
            </View>
            <SignUpRegister />
        </SafeAreaView>
    );
};

const styles = StyleSheet.create({
    header: {
        backgroundColor: "#fff",
        height:"100%"
    },
    iconRow: {
        flexDirection: "row",
        alignItems: "center",
        paddingHorizontal: 5,
        //  paddingBottom:"3%",
     },
    centerContainer: {
        flex: 0.9,  
        alignItems: "center",  
        justifyContent: "center", 
    },
});

export default Header;

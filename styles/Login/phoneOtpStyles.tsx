import {  StyleSheet } from 'react-native';


const PhoneOtpStyles = StyleSheet.create({
    signs: {
      paddingTop: 90,
      paddingBottom: 30,
      alignItems: "center",
      backgroundColor: "#fff",
    },
    logo: {
      width: 100,
      height: 100,
      resizeMode: 'contain',
      justifyContent: "center",
    },
    instructions: {
      marginHorizontal: 16,
      paddingVertical: 20,
      gap: 10,
    },
    title: {
      color: "#212121",
      fontWeight: "700",
      fontSize: 19,
      lineHeight: 26.6,
      fontFamily:"Helvetica Neue"
  
    },
    subtitle: {
      color: "#212121",
      fontWeight: "400",
      fontSize: 14,
      lineHeight: 19.6,
      marginRight: 10,
      fontFamily:"Proxima Nova",
  
    },
    phoneNumber: {
      fontWeight: "700",
      fontFamily:"Helvetica Neue"
  
    },
    otpSection: {
       marginBottom: 140,
    },
    helpSection: {
      flexDirection: "row",
      justifyContent: "center",
      alignItems: "center",
      marginTop: 120,
      paddingHorizontal: 16,
    },
    helpText: {
      color: "#212121",
      fontSize: 14,
      marginHorizontal: 5,
    },
    helpLink: {
      color: "#DEBC8E",
      fontSize: 14,
      fontWeight: "600",
    },
});

export default PhoneOtpStyles;
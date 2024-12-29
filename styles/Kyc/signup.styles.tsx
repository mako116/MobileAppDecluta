import { StyleSheet } from "react-native";

const KycSignup = StyleSheet.create({
    container: {
      flex: 1,
      backgroundColor: '#F9F9F9',
      paddingHorizontal: 13,
    },
    scrollContainer: {
      flexGrow: 1, // Allows ScrollView content to stretch vertically
      justifyContent: 'center', // Vertically center the content inside ScrollView
      alignItems: 'center', // Horizontally center the content inside ScrollView
    },
    successContainer: {
      alignItems: 'center', // Horizontally center the content
      justifyContent: 'center', // Vertically center the content
      backgroundColor: '#F9F9F9',
      marginVertical: 'auto',
      paddingVertical: 30,
    },
    headerText: {
      fontSize: 23,
      lineHeight: 32.2,
    },
    successText: {
      fontFamily:"Proxima Nova",
      fontWeight:"400",
      fontSize:14,
      lineHeight:19.6,
      marginBottom:18,
      textAlign: 'center',
    },
    profile:{
      paddingVertical:12
    },
    texts:{
      fontFamily:"Proxima Nova",
      fontWeight:"400",
      fontSize:13,
      lineHeight:19.6,
      marginBottom:18
    },
    Header:{
      fontFamily:"Helvetica Neue",
      fontWeight:"700",
      fontSize:16,
      lineHeight:22.4,
      marginBottom:6
    },
    input: {
      paddingVertical: 15,
      borderRadius: 3,
      borderWidth: 1,
      borderColor: '#E9E9E9',
      paddingHorizontal: 15,
      paddingLeft: 15,
      fontSize: 14,
      backgroundColor: "white",
      color: "#a1a1a1",
      fontFamily:"Proxima Nova"
    },
    resider: {
      fontWeight: '700',
      fontSize: 28,
      lineHeight: 39.2,
      color: '#212121',
      paddingVertical: 10,
      fontFamily:"Helvetica Neue"
    },
    label: {
      fontWeight: '400',
      fontSize: 14,
      color: '#212121',
      marginBottom:4,
      fontFamily:"Proxima Nova",
      lineHeight:19.6
    },
    dropdownContainer: {
      marginVertical: 10,
    },
    dropdownButton: {
      paddingVertical: 15,
      borderRadius: 3,
      borderWidth: 1,
      borderColor: '#E9E9E9',
      paddingHorizontal: 15,
      flexDirection: 'row',
      alignItems: 'center',
      justifyContent: 'space-between',
      backgroundColor: 'white',
    },
    centerContainer: {
      flexDirection: 'row',
      alignItems: 'center',
    },
    flagIcon: {
      width: "18%",
      height: 24,
      marginRight: 8,
    },
    countryName: {
      fontWeight: '400',
      fontSize: 14,
      color: '#212121',
      fontFamily:"Proxima Nova",
      lineHeight:19.6
    },
    icon: {
      width: "10%",
      height: "100%",
      objectFit:"contain"
    },
    button: {
      marginVertical: 20,
      paddingVertical: 15,
      borderRadius: 8,
      backgroundColor: '#DEBC8E',
      alignItems: 'center',
    },
    buttonDisabled: {
      backgroundColor: '#E9E9E9',
    },
    buttonText: {
      color: '#212121',
      fontWeight: '400',
      fontSize: 16,
      fontFamily:"Proxima Nova",
      lineHeight:22.4
    },
    textDisabled: {
      color: '#A4A4A4',
      fontWeight: '400',
      fontSize: 16,
      fontFamily:"Proxima Nova",
      lineHeight:22.4
    },
    cityText: {
        color: 'gray', // Default color
      },
      cityTextSelected: {
        color: 'black', // Selected color
      },
  });


  export default KycSignup
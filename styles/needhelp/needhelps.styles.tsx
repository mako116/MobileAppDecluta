import { StyleSheet } from "react-native";

export const Needs = StyleSheet.create({
    // Dropdown Styles
    dropdownContainer: {
      marginVertical: 10,
    },
    dropdownButton: {
        paddingVertical: 25,
        paddingHorizontal:10,
      paddingLeft: 15,
      fontSize: 14,
      borderWidth:1,
      borderColor:'#E9E9E9',
      backgroundColor:"#fff",
      color: "#a1a1a1",
      fontFamily:"Proxima Nova",

      // height: 55,
      borderRadius: 3,
      
      flexDirection: "row",
      justifyContent: "space-between",
      alignItems: "center",
     },
    dropdownButtonText: {
      color: "#333",
    },
    dropdownMenu: {
      marginTop: 5,
      borderWidth: 1,
      borderColor: "#ddd",
      borderRadius: 8,
      marginHorizontal: 16,
      backgroundColor: "#fff",
      overflow: "hidden",
    },
    dropdownItem: {
      padding: 15,
    },
    dropdownItemText: {
      color: "#333",
    },
    selectedBackground: {
      backgroundColor: "#F5EADC", // Highlight selected item
    },
  
    // Phone Input Styles
    container: {
      marginTop: 6,
    },
    phoneContainer: {
      flexDirection: 'row',
   alignItems: 'center',
   backgroundColor: "white",
   paddingVertical:5
    },
    flagButton: {
      marginLeft: 8,
    },
    callingCode: {
      marginHorizontal: 10,
   fontSize: 13,
   color: '#212121',
   borderRightWidth: 1,
   height:20,
   
   borderColor: "#212121",
   paddingRight: 15,
   fontFamily:"Helvetica Neue",
   lineHeight:18.2,
   fontWeight:"500"
    },
    phoneInput: {
      flex:1,
   height: 55,
   borderRadius: 3,
    fontSize: 14,
   backgroundColor: "white",
    color: '#212121',
   paddingRight: 15,
   fontFamily:"Proxima Nova",
   lineHeight:14,
   fontWeight:"500"
    },
  
    // Text Input Styles
    inputFocused: {
      borderColor: "#DEBC8E",
    },
    textarea: {
      height: 120,
      borderRadius: 8,
      borderWidth: 1,
      borderColor: "#E9E9E9",
      backgroundColor: "#FFF",
      paddingHorizontal: 15,
      paddingTop: 10,
      fontSize: 14,
           fontFamily:"ProximaNovaR",
      color: "#333",
      textAlignVertical: "top", // Ensures text starts at the top-left
    },
  
    // Label Styles
    label: {
      fontWeight: "400",
      fontSize: 14,
      lineHeight: 19.6,
      color: "#212121",
    },
  });
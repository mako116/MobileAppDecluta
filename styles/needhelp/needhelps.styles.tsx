import { StyleSheet } from "react-native";

export const Needs = StyleSheet.create({
    // Dropdown Styles
    dropdownContainer: {
      marginVertical: 10,
    },
    dropdownButton: {
      height: 55,
      borderRadius: 3,
      marginHorizontal: 16,
      borderWidth: 1,
      borderColor: "#E9E9E9",
      paddingLeft: 15,
      fontSize: 14,
      backgroundColor: "white",
      color: "#a1a1a1",
      flexDirection: "row",
      justifyContent: "space-between",
      alignItems: "center",
      padding: 10,
      marginTop: 8,
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
      flexDirection: "row",
      alignItems: "center",
      backgroundColor: "white",
      marginHorizontal: 16,
    },
    flagButton: {
      marginLeft: 8,
    },
    callingCode: {
      marginRight: 10,
      fontSize: 16,
      color: "#333",
    },
    phoneInput: {
      height: 55,
      borderRadius: 3,
      borderLeftWidth: 1,
      borderColor: "#E9E9E9",
      paddingLeft: 15,
      fontSize: 14,
      backgroundColor: "white",
      color: "#a1a1a1",
      flex: 1, // Allows phone input to take up remaining space
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
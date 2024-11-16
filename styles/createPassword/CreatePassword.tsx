import { StyleSheet } from "react-native";


export const Creating = StyleSheet.create({
    signs: {
      paddingHorizontal: 12,
      paddingTop: 60,
      paddingBottom: 20,
      flexDirection: "row",
      alignItems: "center",
      backgroundColor: "#fff",
    },
    phoneContainer: {
      flexDirection: 'row',
      alignItems: 'center',
      backgroundColor: "white",
      marginHorizontal: 16,
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
    },
    container: {
      marginTop: 16,
      paddingHorizontal: 16,
    },
    input: {
      flex: 1,
      height: 50,
      borderRadius: 4,
      paddingLeft: 15,
      fontSize: 14,
      marginTop: 8,
      backgroundColor: "white",
      color: "#212121",
    },
    passwordContainer: {
      flexDirection: 'row',
      alignItems: 'center',
      borderWidth: 1,
      borderColor: "#E9E9E9",
      borderRadius: 3,
      paddingRight: 10,
      marginTop: 8,
      backgroundColor: "white",
    },
    focusBorder: {
      borderColor: "#DFBD8F",
    },
    requirementsContainer: {
      marginVertical: 10,
    },
    requirementItem: {
      flexDirection: 'row',
      marginVertical: 3,
    },
    createAccountButton: {
      marginTop: 20,
      backgroundColor: "#DEBC8E",
      paddingVertical: 15,
      color:"#212121",
      borderRadius: 5,
      alignItems: "center",
    },
    footerTextContainer: {
      flexDirection: 'row',
      flexWrap: 'wrap',
      marginTop: 30,
      textAlign: 'center',
      paddingHorizontal: 40,
      justifyContent: 'center',
      alignItems: 'center',
    },
    footerText: {
      fontWeight: '400',
      fontSize: 12,
      lineHeight: 16.8,
      color: '#212121',
    },
    linkText: {
      textDecorationLine: 'underline',
      color: '#C8A980',
      fontWeight: '400',
      fontSize: 12,
      lineHeight: 16.8,
    },
    buttonText: {
       color: "#212121",
      fontSize: 16,
      fontWeight: "700",
    },
    section: {
      paddingTop: 13,
      paddingHorizontal: 13,
    },
    disabledButton: {
      backgroundColor: "#E9E9E9",
      color:"#A4A4A4"
    },
  });
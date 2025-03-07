import { StyleSheet } from "react-native";


export const Creating = StyleSheet.create({
  row: {
    display: "flex",
    flexDirection: 'row',
    alignItems: "center",
    justifyContent: "center"
  },
  signs: {
    width:"100%",
    paddingHorizontal: 12,
    paddingTop: 60,
      justifyContent:"center",
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
      marginTop: 20,
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
      fontFamily:"Proxima Nova",
    },
    linkText: {
      textDecorationLine: 'underline',
      color: '#C8A980',
      fontWeight: '400',
      fontSize: 12,
      lineHeight: 16.8,
      fontFamily:"Proxima Nova",
    },
    linkTexts: {
      // textDecorationLine: 'underline',
      color: '#C8A980',
      fontWeight: '400',
      fontSize: 12,
      lineHeight: 16.8,
      fontFamily:"Proxima Nova",
    },
    buttonText: {
       color: "#212121",
      fontSize: 16,
      fontWeight: "700",
      fontFamily:"Proxima Nova",
    },
    section: {
      paddingTop: 13,
      paddingHorizontal: 13,
    },
    disabledButton: {
      backgroundColor: "#E9E9E9",
      color:"#A4A4A4"
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
    rowJustified: {
      display: "flex",
      flexDirection: 'row',
      alignItems: "center",
      justifyContent: "space-between",
      paddingHorizontal: 12,
      paddingTop:65,
      paddingBottom: 20,
    },
    divider: {
      width: 70,
      height: 1,
      backgroundColor: "black",
      marginHorizontal: 7
    },
    currentStageIcon: {
      padding: 4,
      borderRadius: 20,
      backgroundColor: "black"
    },
    passedStageIcon: {
      padding: 4,
      borderRadius: 20,
      backgroundColor: "black"
    },
  });
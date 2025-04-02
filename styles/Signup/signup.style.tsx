import { StyleSheet } from "react-native";

export const SignUpStyles = StyleSheet.create({
  row: {
    flexDirection: "row",
    alignItems: "center"
  },
  signs: {
    paddingHorizontal: 15,
    paddingTop: 70,
    paddingBottom: 25,
    flexDirection: "row",
    alignItems: "center",
    backgroundColor: "#fff",
  },
  texts: {
    fontWeight: "700",
    fontSize: 16,
    lineHeight: 22.4,
    color: "#212121",
    marginLeft: 15,
    fontFamily: "Helvetica Neue"
  },
    header: {
      backgroundColor: "#fff",
      paddingTop: 20,
      paddingBottom: 20,
    },
    headers: {
      // backgroundColor: "#fff",
      paddingTop: 20,
      paddingBottom: 20,
    },
    genderOption: {
      padding: 10,
      marginHorizontal: 5,
      borderRadius: 5,
      borderWidth: 1,
      borderColor: "#ccc",
      alignItems: "center",
    },    
    sigInImage: {
      alignSelf: "center",
      marginTop: 40,
      marginBottom: 10,
      // borderRadius: 20,
      width:215,
      height:44
    },
    welcomeText: {
      fontWeight: "700",
      lineHeight: 22.4,
      textAlign: "center",
      fontSize: 16,
      color: "#212121",
      fontFamily:"Helvetica Neue"
    },
    inputContainer: {
      marginHorizontal: 2,
      marginTop: 30,
      gap: 10,
    },
    label: {
      // marginLeft: 18,
      fontFamily:"Proxima Nova",
      fontSize: 14,
      fontWeight: "400"
    },
    Kyclabel: {
       fontFamily:"Proxima Nova"
    },
    TextInput: {
      flex: 1,
       padding: 25,
      paddingLeft: 15,
      fontSize: 14,
      borderWidth:1,
      borderColor:'#E9E9E9',
      backgroundColor:"#fff",
      color: "#a1a1a1",
      fontFamily:"Proxima Nova"
    },
    input: {
      flex: 1,
      padding: 17,
      paddingLeft: 5,
      fontSize: 14,
      color: "#a1a1a1",
      fontFamily:"Proxima Nova"
    },
    inputs: {
      width:"100%",
      flex: 1,
       // paddingVertical: 25,
      paddingLeft: 15,
      fontSize: 15,
      fontWeight:'700',
      lineHeight:22.4,
      color: "#212121",
      fontFamily:"Helvetica Neue"
    },
    inputContainerStyle: {
      
      borderRadius: 4,
      borderWidth: 1,
      borderColor: "#E9E9E9",
      paddingLeft: 15,
      backgroundColor: "white",
    },
    inputContainerStyles: {
      paddingVertical: 3,
       borderRadius: 4,
      borderWidth: 1,
      borderColor: "#E9E9E9",
      // paddingLeft: 15,
      backgroundColor: "white",
    },
    visibleIcon: {
      position: "absolute",
      right: 30,
      top: 15,
    },
    forgotSection: {
      color: "#7E7E7E",
      marginHorizontal: 16,
      textAlign: "right",
      fontSize: 14,
      lineHeight: 19.6,
      fontFamily:"Proxima Nova"
    },
    loginButton: {
      padding: 17,
      borderRadius: 5,
      marginHorizontal: 16,
      backgroundColor: "#DEBC8E",
      marginTop: 5,
    },
    loginButtons: {
      // flex:1,
      padding: 20,
      borderRadius: 8,
      // marginHorizontal: 16,
      backgroundColor: "#DEBC8E",
      marginTop: 5,
    },
    loginButtoned: {
      flex:1,
      padding: 20,
      borderRadius: 8,
      // marginHorizontal: 16,
      backgroundColor: "#DEBC8E",
      marginTop: 5,
    },
    KycButton: {
      padding: 16,
      borderRadius: 8,
      // marginHorizontal: 16,
      backgroundColor: "#DEBC8E",
      marginTop: 5,
    },
    loginText: {
      color: "#212121",
      textAlign: "center",
      fontFamily:"Proxima Nova",
      fontSize: 16,
      fontWeight: "400"
    },
    signUpRedirect: {
      flexDirection: "row",
      marginHorizontal: 16,
      paddingVertical: 7,
      justifyContent:"center"
    },
    signUpText: {
      color: "#463E31",
      fontFamily:"Proxima Nova",
      fontSize:16,
      fontWeight: "400"
    },
    signUpLink: {
      color: "#DEBC8E",
      fontWeight: "700",
      paddingLeft: 5,
      fontSize: 16,
      fontFamily:"Proxima Nova"
    },
    separatorContainer: {
      flexDirection: "row",
      alignItems: "center",
      marginHorizontal: 16,
    },
    separator: {
      flex: 1,
      height: 1,
      // marginHorizontal: 16,
      borderColor: "#A4A4A4",
      borderWidth:0.5
    },
    separatorText: {
      width: 40,
      marginHorizontal: 16,
      textAlign: "center",
      fontSize: 19,
      color: "#463E31",
      fontWeight: "400",
      lineHeight: 19.6,
      fontFamily:"Proxima Nova"
    },
    socialButtons: {
      gap: 15,
      marginHorizontal: 16,
      marginVertical: 15,
    },
    socialButton: {
      flexDirection: "row",
      padding: 17,
      alignItems: "center",
      justifyContent:"center",
      borderWidth: 1,
      borderColor: "#E9E9E9",
      backgroundColor: "#FFFFFF",
      borderRadius: 8,
      gap: 10,
    },
    separator2: {
      height: 20,
      // width: 10,
      borderWidth: 1,
      borderColor:"#7E7E7E"
    },
  
     // Modal styles
     modalContainer: {
      flex: 1,
      justifyContent: "center",
      alignItems: "center",
      backgroundColor: "rgba(0, 0, 0, 0.5)"
    },
    modalContent: {
      width: "85%",
      padding: 10,
      // paddingVertical:10,
      backgroundColor: "white",
      borderRadius: 10,
      alignItems: "center"
    },
    modalTitle: {
      fontSize: 24,
      fontWeight: "bold",
      color: "#DEBC8E",
      marginVertical: 10
    },
    modalMessage: {
      fontSize: 14,
      color: "#333",
      fontWeight:'400',
      lineHeight:19.6,
      textAlign: "center",
      marginBottom: 20
    },
    modalButtons: {
      flexDirection: "column",
      padding:20,
       justifyContent: "center",
      width: "100%",
      gap:10,
      marginTop: 10
    },
    modalButton: {
      flexDirection: "row",
      alignItems: "center",
      justifyContent: "center",  // Center horizontally
      paddingVertical: 10,
      paddingHorizontal: 15,
      borderRadius: 5
    },
    continueButton: {
      paddingVertical: 10,
      paddingHorizontal: 15,
      backgroundColor: "#DEBC8E",
     
    },
    confirmButton: {
      textAlign:"center",
      alignItems:"center",
      // margin:"auto",
      backgroundColor: "#fff",
      borderWidth:1,
          
    },
    buttonText: {
      color: "#000",
      fontWeight:"400",
      lineHeight:22.4,
      fontSize: 16,
      textAlign: "center"  // Center text within the Text component
    },
    dropdownContainer: {
      marginVertical: 10,
    },
    dropdownButton: {
      borderRadius: 3,
      borderWidth: 1,
      borderColor: "#E9E9E9",
      paddingLeft: 15,
      fontSize: 14,
      backgroundColor: "white",
      color: "#a1a1a1",
      fontFamily:"Proxima Nova",
      flexDirection: 'row',
      justifyContent: 'space-between',
      alignItems: 'center',
      padding: 16,
      marginTop: 8,
    },
    dropdownButtonText: {
      color: '#333',
      fontFamily:"Proxima Nova",
    },
    customLogo: {
      marginLeft:15,
       height: 18,
       width: 18, // Adjust size of the custom logo
       resizeMode: "contain",
     },
    dropdownMenu: {
      width: '100%',
      marginTop: 5,
      borderWidth: 1,
      borderColor: '#ddd',
      borderRadius: 2,
      backgroundColor: '#fff',
      overflow: 'hidden',
    },
    dropdownItem: {
      padding: 10,
      paddingVertical: 20
    },
    dropdownItemText: {
      color: '#333',
      fontFamily:"Proxima Nova",
    },
    selectedBackground: {
      backgroundColor: '#F5EADC', // Highlight background color for selected item
    },
    container: {
      marginTop: 10,
    },
    phoneContainer: {
       flexDirection: 'row',
      alignItems: 'center',
      backgroundColor: "white",
      // marginTop: 30,
      // gap: 10,
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
    flagButton: {
      marginLeft: 8,
    },
    phoneInput: {
      height: 55,
      borderRadius: 3,
      fontSize: 14,
      backgroundColor: "white",
      color: '#212121',
      paddingRight: 15,
      fontFamily:"Proxima Nova",
      fontWeight:"400"
    },
    divider: {
      width: 35,
      height: 2,
      backgroundColor: "black",
      marginHorizontal: 7
    },
    currentStageIcon: {
      padding: 4,
      borderRadius: 20,
      backgroundColor: "#DEBC8E"
    },
    passedStageIcon: {
      padding: 4,
      borderRadius: 20,
      backgroundColor: "black"
    },
  });
  
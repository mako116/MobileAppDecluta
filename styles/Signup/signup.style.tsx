import { StyleSheet } from "react-native";




export const SignUpStyles = StyleSheet.create({
    header: {
      backgroundColor: "#fff",
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
      // borderRadius: 20,
      width:199,
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
      marginLeft: 18,
      marginBottom: 5,
      fontFamily:"Proxima Nova"
    },
    Kyclabel: {
       fontFamily:"Proxima Nova"
    },
    input: {
      height: 55,
      marginHorizontal: 16,
      borderRadius: 3,
      borderWidth: 1,
      borderColor: "#E9E9E9",
      paddingLeft: 15,
      fontSize: 14,
      backgroundColor: "white",
      color: "#a1a1a1",
      fontFamily:"Proxima Nova"
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
      padding: 16,
      borderRadius: 8,
      marginHorizontal: 16,
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
      fontFamily:"Proxima Nova"
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
    },
    signUpLink: {
      color: "#DEBC8E",
      fontWeight: "700",
      paddingLeft: 5,
      fontSize:16,
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
      fontWeight: "600",
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
      padding: 18,
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
    }
  });
  
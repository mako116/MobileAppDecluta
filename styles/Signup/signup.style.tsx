import { StyleSheet } from "react-native";




export const SignUpStyles = StyleSheet.create({
    header: {
      backgroundColor: "#fff",
      paddingTop: 40,
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
      marginTop: 50,
      borderRadius: 20,
    },
    welcomeText: {
      fontWeight: "700",
      lineHeight: 22.4,
      textAlign: "center",
      fontSize: 16,
      color: "#212121",
    },
    inputContainer: {
      marginHorizontal: 16,
      marginTop: 30,
      gap: 10,
    },
    label: {
      marginLeft: 18,
      marginBottom: 5,
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
    },
    loginButton: {
      padding: 16,
      borderRadius: 8,
      marginHorizontal: 16,
      backgroundColor: "#DEBC8E",
      marginTop: 5,
    },
    loginText: {
      color: "#212121",
      textAlign: "center",
    },
    signUpRedirect: {
      flexDirection: "row",
      marginHorizontal: 16,
      paddingVertical: 14,
    },
    signUpText: {
      color: "#7E7E7E",
    },
    signUpLink: {
      color: "#DEBC8E",
      fontWeight: "bold",
      paddingLeft: 5,
    },
    separatorContainer: {
      flexDirection: "row",
      alignItems: "center",
      marginHorizontal: 16,
    },
    separator: {
      flex: 1,
      height: 1,
      backgroundColor: "#C4C4C4",
    },
    separatorText: {
      width: 40,
      textAlign: "center",
      fontSize: 16,
      color: "#7E7E7E",
      fontWeight: "600",
      lineHeight: 19.6,
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
      borderColor: "#C4C4C4",
      backgroundColor: "#FFFFFF",
      borderRadius: 8,
      gap: 10,
    },
    separator2: {
      height: "100%",
      width: 2,
      backgroundColor: "#D3D3D3",
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
  
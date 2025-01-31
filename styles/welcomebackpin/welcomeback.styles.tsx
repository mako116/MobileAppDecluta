import { StyleSheet } from "react-native";

const welcomePin = StyleSheet.create({
    container: {
        flex: 1,
        width:"100%",
          backgroundColor: '#f9f9f9',
          height:"100%"
     },
    pinContainer: {
        paddingTop: 70,
        paddingHorizontal: 20,
    },
    pinText: {
        fontSize: 15,
        lineHeight:19.6,
        fontWeight: '400',
        marginBottom: 10,
        fontFamily:"Proxima Nova"
    },
    input: {
        // flex: 1,
        // height: '100%',
        borderColor: '#ddd',
        borderWidth: 1,
        borderRadius: 8,
        textAlign: 'center',
        fontSize: 15,
        fontWeight: '400',
        fontFamily:"Proxima Nova"
    },
    inputFilled: {
        borderColor: '#DEBC8E', // Highlight filled inputs
    },
    calculatorContainer: {
        marginTop: "30%",
    },
    calculatorRow: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        marginBottom: 15,
        paddingHorizontal:10
    },
    span:{
        fontWeight:"400",
        fontSize:16,
        lineHeight:22.4,
        textAlign:"center",
        fontFamily:"Proxima Nova"
    },
    logout:{
        fontSize:16,
        color:"#DEBC8E",
        fontWeight:"700",
        textDecorationLine:"underline",
        lineHeight:22.4,
        fontFamily:"Proxima Nova"
    },
    calculatorButton: {
        // paddingVertical:10,
        // paddingHorizontal:"13%",
        width: 85,
        height: 50,
        borderWidth: 1,
        borderColor: '#E9E9E9',
        borderRadius: 3,
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: '#fff',
    },
    buttonText: {
        fontSize: 16,
        fontWeight: '700',
        fontFamily:"Helvetica Neue",
        lineHeight:22.4
    },
      // Modal styles
      modalBackground: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: 'rgba(0, 0, 0, 0.5)', // Semi-transparent background
    },
    modalContainer: {
        width: '90%',
        paddingHorizontal: 23,
        paddingVertical:23,
        backgroundColor: 'white',
        borderRadius: 10,
        alignItems: 'center',
    },
    modalTitle: {
        fontSize: 19,
        lineHeight:26.6,
        paddingVertical:10,
        fontWeight:"700",
        textAlign: 'center',
        marginBottom: 10,
        fontFamily:"Helvetica Neue",
    },
    modalMessage: {
        lineHeight:19.6,
        fontSize: 14,
        fontWeight:"400",
        textAlign: 'center',
        marginBottom: 20,
         fontFamily:"Proxima Nova"
    },
    modalButton: {
        width:"100%",
        
        backgroundColor: '#DEBC8E',
        paddingVertical: 18,
        paddingHorizontal: 20,
        borderRadius: 5,
    },
    modalButtonText: {
        lineHeight:22.4,
        color: '#212121',
        textAlign:"center",
        fontSize: 16,
        fontWeight: '400',
         fontFamily:"Proxima Nova"
    },
});
export default welcomePin;
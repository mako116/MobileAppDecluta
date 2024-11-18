import { StyleSheet } from "react-native";

const welcomePin = StyleSheet.create({
    container: {
        flex: 1,
        width:"100%",
          backgroundColor: '#fff',
     },
    pinContainer: {
        paddingTop: 70,
        paddingHorizontal: 20,
    },
    pinText: {
        fontSize: 16,
        fontWeight: '600',
        marginBottom: 10,
    },
    input: {
        flex: 1,
        height: '100%',
        borderColor: '#ddd',
        borderWidth: 1,
        borderRadius: 8,
        textAlign: 'center',
        fontSize: 18,
        fontWeight: '700',
    },
    inputFilled: {
        borderColor: '#DEBC8E', // Highlight filled inputs
    },
    calculatorContainer: {
        marginTop: 60,
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
        textAlign:"center"
    },
    logout:{
        fontSize:16,
        color:"#DEBC8E",
        fontWeight:"700",
        textDecorationLine:"underline",
        lineHeight:22.4
    },
    calculatorButton: {
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
        fontSize: 24,
        fontWeight: '600',
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
    },
    modalMessage: {
        lineHeight:19.6,
        fontSize: 14,
        fontWeight:"400",
        textAlign: 'center',
        marginBottom: 20,
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
    },
});
export default welcomePin;
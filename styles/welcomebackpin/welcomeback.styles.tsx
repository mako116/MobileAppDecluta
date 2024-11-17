import { StyleSheet } from "react-native";

const welcomePin = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#F9F9F9',
     },
    pinContainer: {
        marginVertical: 30,
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
        marginTop: 20,
    },
    calculatorRow: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        marginBottom: 15,
    },
    calculatorButton: {
        width: 60,
        height: 60,
        borderWidth: 1,
        borderColor: '#ddd',
        borderRadius: 30,
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
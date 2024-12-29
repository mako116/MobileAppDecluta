import { StyleSheet } from "react-native";

const HeaderNotification = StyleSheet.create({
    draggableBar:{
        width: 80,
        height: 5,
        borderRadius: 5,
        backgroundColor: '#D9D9D9',
        alignSelf: 'center',
        marginBottom: 10,
        marginTop: 10,
    },
    modalContainer: {
      flex: 1,
      justifyContent: 'center',
      alignItems: 'center',
      paddingHorizontal: 15,
      borderBottomWidth: 1,
        borderColor: '#E9E9E9',
      
    },
    modalTitle: {
      fontFamily: 'Helvetica Neue',
      fontSize: 19,
      fontWeight: '700',
      marginBottom: 10,
      textAlign: 'center',
      lineHeight: 26.6,
    },
    pg: {
      fontFamily: 'Proxima Nova',
      fontSize: 14,
      fontWeight: '400',
      marginBottom: 10,
      textAlign: 'left',
      color: '#333333',
      lineHeight: 19.6,
    },
    modalText: {
      fontSize: 14,
      fontWeight: '400',
      fontFamily: 'Proxima Nova',
      lineHeight: 19.6,
    },
    modalButtons: {
      flexDirection: 'row',
      gap: 10,
      justifyContent: 'space-between',
      paddingVertical: 20,
    },
    pickerContainer: {
      borderWidth: 1,
      borderColor: '#E9E9E9',
      borderRadius: 5,
      marginBottom: 10,
      flexDirection: 'row',
        justifyContent: 'space-between',
        alignItems: 'center',
        width: '100%',
        paddingHorizontal: 5,
        paddingVertical: 10,
    },
    picker: {
      height: 50,
    },
    overlay: {
        flex: 1,
        backgroundColor: 'rgba(0, 0, 0, 0.7)',
        justifyContent: 'flex-end',
        backdropFilter: 'blur(9000px)',
    },
    modalContent: {
        paddingHorizontal: 20,
        paddingVertical: 10,
        width: '100%',
        paddingBottom: 30,
    },
    modalContentContainerOne: {
        backgroundColor: 'white',
        borderTopLeftRadius: 20,
        borderTopRightRadius: 20, 
    },
    modalContentTwo: {
        backgroundColor: 'white',
        paddingHorizontal: 20,
        paddingVertical: 10,
        width: '100%',
        height: '46%',
        paddingBottom: 30,
    },
    modalContentStates: {
        backgroundColor: 'white',
        paddingHorizontal: 20,
        paddingVertical: 10,
        width: '100%',
        height: '50%',
        paddingBottom: 30,
    },
    headerRow: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        alignItems: 'center',
        marginBottom: 10,
    },
    pickerWrapper: {
    width: '100%',
    paddingVertical: 10,
    },
    label: {
    textAlign: 'left',
    paddingVertical: 5,
    },
    warningIcon: {
        height: 35,
        width: 35,
    },
    listItem: {
    flexDirection: 'row',
    alignItems: 'center',
    },
    successIcon: {
    alignSelf: 'center',
    marginVertical: 10,
    },
    successMessage: {
    textAlign: 'center',
    marginBottom: 15,
    },
  });

  export default HeaderNotification;
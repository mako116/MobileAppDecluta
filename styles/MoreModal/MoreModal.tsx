import { StyleSheet } from "react-native";

const Mores = StyleSheet.create({
    modalOverlay: {
      flex: 1,
      backgroundColor: 'rgba(0, 0, 0, 0.5)',
      justifyContent: 'center',
      alignItems: 'center',
    },
    modalContent: {
      width: '80%',
      padding: 20,
      backgroundColor: 'white',
      borderRadius: 10,
      alignItems: 'center',
    },
    modalBackground: {
      flex: 1,
    },
    title: {
      fontSize: 18,
      fontWeight: 'bold',
      marginBottom: 20,
    },
    modalContainer: {
      position: 'absolute',
      bottom: '11%',
      right: '0%',
      backgroundColor: 'white',
      borderTopLeftRadius: 10,
      borderTopRightRadius: 10,
      borderBottomLeftRadius: 10,
      borderBottomRightRadius: 10,
      padding: 10,
      elevation: 10,
    },
    modalOption: {
      flexDirection: 'row',
      alignItems: 'center',
      paddingVertical: 10,
      borderRadius:10
    },
    modalText: {
      // fontFamily: 'HelveticaNeueLT',
      
      marginLeft: 10,
      fontSize: 16,
      lineHeight:19.6,
      // color: '#212121',
      // fontWeight:"400"
    },
  });

export  default Mores
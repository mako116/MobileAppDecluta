import { StyleSheet } from "react-native";

const MenuStyle = StyleSheet.create({
    modalOverlay: {
      flex: 1,
      backgroundColor: 'rgba(0, 0, 0, 0.5)',
      justifyContent: 'center',
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
      width: 182,
      position: 'absolute',
      bottom: '56%',
      right: '4%',
      backgroundColor: 'white',
      borderRadius: 8,
      padding: 10,
      elevation: 10,
     
    },
    modalOption: {
      flexDirection: 'row',
      alignItems: 'center',
      paddingVertical: 8,
      borderRadius:10,
      gap:6,
    },
    modalText: {
      fontFamily: 'Proxima Nova',
      marginLeft:6,
       fontSize: 14,
      lineHeight:19.6,
      color: '#212121',
      },
  });

export  default MenuStyle;
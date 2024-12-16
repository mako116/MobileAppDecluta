import { StyleSheet } from "react-native";



 const Homes = StyleSheet.create({
    container: {
      flex: 1,
      paddingTop: 30,
      backgroundColor: '#F9F9F9',
      borderColor: '#000',
      borderTopWidth: 2,
    },
    content: {
      flex: 1,
      paddingVertical: 5,
     },
    rowContainer: {
      flexDirection: 'row',
      justifyContent: 'space-between',
      alignItems: 'center',
      width: '100%',
      paddingHorizontal: 10,
      paddingVertical: 10,
 
    },
    leftItem: {
      flexDirection: 'column',
      alignItems: 'flex-start',
    },
    rightItems: {
      flexDirection: 'row',
      alignItems: 'flex-end',
    },
    modalContainer: {
      flex: 1,
      justifyContent: 'center',
      alignItems: 'center',
      backgroundColor: 'rgba(0, 0, 0, 0.5)',
    },
    modalContent: {
      width: '80%',
      padding: 20,
      backgroundColor: 'white',
      borderRadius: 10,
      alignItems: 'center',
    },
    modalTitle: {
      fontSize: 18,
      fontWeight: 'bold',
      marginBottom: 10,
      textAlign: 'center',
    },
    modalText: {
      fontSize: 16,
      marginBottom: 20,
      textAlign: 'center',
    },
    modalButtons: {
      flexDirection: 'row',
      justifyContent: 'space-around',
      width: '100%',
    },
    cartIcon: {
      position: 'absolute', // Keeps the cart icon fixed at the bottom
      bottom: "12%", // Adjust the distance from the bottom
      right: 20, // Adjust the distance from the right
      backgroundColor: '#fff', // Customize color
      width: 50,
      height: 50,
      borderRadius: 10,
      justifyContent: 'center',
      alignItems: 'center',
      elevation: 5,
    },
    cartBadge: {
      position: 'absolute',
      top: -10,
      right: -5,
      backgroundColor: '#E42527',
      width: 20,
      height: 20,
      borderRadius: 10,
      justifyContent: 'center',
      alignItems: 'center',
    },
    cartBadgeText: {
      fontSize: 12,
      fontWeight: 'bold',
      color: '#fff',
    },
  });

  export default Homes
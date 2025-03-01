import { StyleSheet } from "react-native";

const Country = StyleSheet.create({
    modalContainer: {
      flex: 1,
      justifyContent: 'flex-end',
      backgroundColor: 'rgba(0, 0, 0, 0.5)',
    },
    modalContent: {
      width: '100%',
      backgroundColor: 'white',
      borderTopLeftRadius: 16,
      borderTopRightRadius: 16,
      paddingHorizontal: 13,
      paddingBottom:"15%",
      paddingTop:"10%"
    },
    header: {
      flexDirection: 'row',
      justifyContent: 'space-between',
      alignItems: 'center',
      marginBottom: 15,
    },
    label: {
      fontWeight: '700',
      fontSize: 18,
      color: '#333',
      flex: 1,
      textAlign: 'center',
      paddingBottom:12
    },
    searchContainer: {
      flexDirection: 'row',
      alignItems: 'center',
      borderWidth: 1,
      borderColor: '#E9E9E9',
      borderRadius: 4,
      paddingHorizontal: 12,
      marginBottom: 15,
      paddingVertical:5,
    },
    searchInput: {
      flex: 1,
      fontSize: 14,
      color: '#A4A4A4',
      fontFamily:"Proxima Nova",
      fontWeight:"400",
      lineHeight:19.6,
      paddingVertical: 10,
    },
    dropdownButton: {
      flexDirection: 'row',
      alignItems: 'center',
      justifyContent: 'space-between',
      borderWidth: 1,
      borderColor: '#E9E9E9',
      borderRadius: 8,
      paddingVertical: 19,
      paddingHorizontal: 15,
      backgroundColor: 'white',
    },
    centerContainer: {
      flexDirection: 'row',
      alignItems: 'center',
    },
    flagIcon: {
      width: 20,
      height: 20,
      marginRight: 8,
    },
    countryName: {
      fontSize: 14,
      color: '#212121',
      fontFamily:"Proxima Nova",
      fontWeight:"400",
      lineHeight:19.6
    },
    dropdownMenu: {
      marginTop: 14,
     
      //  borderWidth: 1,
      borderColor: '#E9E9E9',
      
      backgroundColor: '#fff',
    },
    dropdownItem: {
      flexDirection: 'row',
      alignItems: 'center',
      paddingVertical: 20,
      paddingHorizontal: 15,
      borderRadius: 4,
      gap:8,
    },
    dropdownItemText: {
      fontSize: 14,
      color: '#212121',
      fontFamily:"Proxima Nova",
      fontWeight:"400",
      lineHeight:19.6
    },
    subFlagIcon: {
      width: 20,
      height: 20,
    },
    selectedBackground: {
      backgroundColor: '#F5EADC',
    },
  });
  

  export default Country
import { StyleSheet } from "react-native";

const HeaderCheckoutStyl = StyleSheet.create({
    container: {
      paddingBottom: 10,
       
       height:"100%"
    },
   
    tabContainer: {
      flexDirection: "row",
      alignItems: "center",
      paddingTop: "10%",
      gap:5,
      
    },
    tabButton: {
      marginHorizontal: 5,
      textAlign: "center",
      alignItems: "center",
      justifyContent: "center",
    },
    activeTab: {
    },
    closeButtonText: {
      fontSize: 18,
      fontWeight: "bold",
      color: "#333",
      textAlign: "center",
    },
    tabButtonText: {
      fontSize: 16,
      fontWeight: "400",
      color: "#212121",
      textAlign: "center",
      fontFamily: "Proxima Nova",
      lineHeight: 22.4,
    },
    allTabButton: {
    },
    centerBorder: {
      width: 1.4,
      height: 15,  
      backgroundColor: '#A4A4A4',
      alignSelf: 'center',
    },
    allTabText: {
  
    },
    activeTabText: {
      fontSize: 17,
      fontWeight: "700",
      lineHeight:22.4,
      color: "#212121",
      fontFamily:"Helvetica Neue"
    },
  })


  export default HeaderCheckoutStyl;
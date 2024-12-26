import {  StyleSheet } from 'react-native';

const NotificationTabsStyles = StyleSheet.create({
    container: {
      paddingVertical: 10,
      paddingHorizontal: 15,
    },
    scrollContainer: {
      paddingHorizontal: 5,
      paddingTop: 10, 
   },
    tabContainer: {
      flexDirection: "row",
      alignItems: "center",
      justifyContent: "center",
      marginBottom: 10,
      position: "relative",
    },
    tabButton: {
     
      // paddingVertical:5,
      paddingHorizontal:10,
      // paddingVertical: 10,
      height:35,
      borderRadius: 4,
      backgroundColor: "#fff",
      marginHorizontal: 5,
     borderWidth:1,
      borderColor:"#E9E9E9",
      textAlign:"center",
      alignItems:"center"
    },
    activeTab: {
      backgroundColor: "#DEBC8E",
      // borderColor: "#091E42",
      // elevation: 3,
    },
    tabButtonText: {
      fontSize: 12,
      fontWeight: "400",
      color: "#212121",
      textAlign: "center",
      fontFamily:'Proxima Nova',
      margin:"auto",
      lineHeight:16.8
    },
     allTabButton: {
      width:60,
      height:34,
      borderWidth:1,
      borderColor:"#E9E9E9"
    },
    allTabText: {
      // fontWeight: "bold",  
      color: "#000",
    },
    activeTabText: {
      color: "#091E42",
      fontWeight: "600",
    },
    notificationDot: {
      position: "absolute",
      top: -8,
      right: -8,
      backgroundColor: "#E42527",
      borderRadius: 9,
      width: 12,
      height: 12,
      justifyContent: "center",
      alignItems: "center",
     },
    notificationText: {
      color: "#FFFFFF",
      fontSize: 9,
      fontWeight: "400",
      lineHeight:11
    },
    panelContainer: {
      // height:"100%"
    },
    tabContent: {
      alignItems: "center",
      justifyContent: "center",
      padding: 20,
      backgroundColor: "#EFF3F8",
      borderRadius: 10,
    },
    tabText: {
      fontSize: 16,
      fontWeight: "600",
      color: "#091E42",
    },
  });

export default NotificationTabsStyles;
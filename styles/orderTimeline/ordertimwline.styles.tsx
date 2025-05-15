import { StyleSheet } from "react-native";

const OrderTime = StyleSheet.create({
    title: {
      fontWeight: '700',
      lineHeight: 16.8,
      fontSize: 14,
      fontFamily: 'Proxima Nova',
      marginTop: 12,
    },
    container: {
      alignItems: "flex-start",
      paddingVertical: 8,
      paddingHorizontal: 15,
    //   maxWidth:"80%"
    },
    timelineSection: {
      flexDirection: 'row',
      gap: 10,
      width: "100%",
      marginTop: 10,
      alignItems: "flex-start",
    },
    timelineTitle: {
      fontSize: 16,
      fontWeight: '700',
      fontFamily: "Helvetica Neue",
      color: "#474747",
      marginVertical: 5,
    },
    timelineSubtitle: {
      fontSize: 14,
      fontWeight: '200',
      color: "#7E7E7E",
      fontFamily: 'Proxima Nova',
    },
    bullet: {
      fontSize: 14,
      fontWeight: '200',
      color: "#7E7E7E",
      marginLeft: 5,
      fontFamily: 'Proxima Nova',
    },
    escrowAmount: {
      fontSize: 12,
      fontWeight: '200',
      fontFamily: 'Proxima Nova',
      color: "#212121",
      marginVertical: 5,
      
      
      alignItems:"flex-end",
     
    
    },
    statusIcon: {
      width: 24,
      height: 24,
    },
    line: {
      width: 2,
      height: 45,
      marginHorizontal: "auto",
    },
    lineTall: {
      width: 2,
      height: 200,
      marginHorizontal: "auto",
    },
    confirmButton: {
      borderWidth: 1,
      borderRadius: 7,
      paddingHorizontal: 15,
      paddingVertical: 8,
      marginTop: 10,
      borderColor: "#463E31",
      maxWidth: "80%",
    },
    confirmText: {
      fontSize: 14,
      fontWeight: '200',
      color: "#212121",
      fontFamily: 'Proxima Nova',
      marginLeft: 5,
    },
    imageRow: {
      flexDirection: "row",
      gap: 10,
    },
    confirmImage: {
      width: 79,
      height: 79,
    },
    completeSection: {
      marginVertical: 15,
      alignItems: "center",
    },
    successMessage: {
      fontSize: 12,
      fontWeight: '200',
      marginBottom: 10,
      fontFamily: 'Proxima Nova',
      color: "#7E7E7E",
    },
  });

  export default OrderTime
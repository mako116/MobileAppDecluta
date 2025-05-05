import { StyleSheet } from "react-native";

const TransactionDetailsStyles = StyleSheet.create({
    safeArea: {
      // flex: 1,
      // backgroundColor: '#fff',
      height:"100%"
    },
    scrollContent: {
      padding: 20,
      paddingBottom: 40,
     },
    statusRow: {
      gap: 10,
      alignItems: 'center',
      marginBottom: 20,
    },
    statusImage: {
      width: 64,
      height: 64,
    },
    itemName: {
      fontSize: 15,
      fontWeight: '500',
      color: '#212121',
      fontFamily: "Proxima Nova",
  
    },
    itemPrice: {
      fontSize: 18,
      fontWeight: '700',
      color: '#212121',
      fontFamily: "Helvetica Neue",
    },
    summaryContainer: {
      paddingHorizontal: 0,
    },
    sectionTitle: {
      fontSize: 16,
      fontWeight: '600',
      marginBottom: 10,
      fontFamily: "Helvetica Neue",
      color: '#212121',
    },
    summaryBox: {
      backgroundColor: '#fff',
      borderRadius: 8,
      padding: 12,
    },
    summaryRow: {
      flexDirection: 'row',
      justifyContent: 'space-between',
      marginVertical: 6,
    },
    label: {
      fontSize: 14,
      color: '#7E7E7E',
      fontWeight: '400',
      fontFamily: "Proxima Nova",
  
    },
    value: {
      fontSize: 14,
      fontWeight: '500',
      color: '#212121',
      fontFamily: "Proxima Nova",
  
    },
    historyLink: {
      flexDirection: 'row',
      gap: 5,
      alignItems: 'center',
      justifyContent: 'center',
      marginTop: 16,
      borderTopWidth: 1,
      borderColor: '#E9E9E9',
      paddingTop: 12,
    },
    historyText: {
      fontSize: 14,
      fontWeight: '500',
      color: '#212121',
      fontFamily: "Proxima Nova",
  
    },
  });
  

  export default TransactionDetailsStyles
import { StyleSheet } from "react-native";

const orderStyles = StyleSheet.create({
    container: {
      flex: 1,
      paddingHorizontal: 12,
      height:"100%"
    },
    orderContainer: {
      backgroundColor: '#fff',
      borderRadius: 10,
      borderColor: '#E9E9E9',
      borderWidth: 1,
      paddingHorizontal: 12,
      paddingVertical:15,
      marginBottom: 14,
    },
    header: {
      flexDirection: 'row',
      justifyContent: 'space-between',
      alignItems: 'center',
    },
    orderId: {
      fontWeight: 'bold',
      fontSize: 15,
      lineHeight:25,
      fontFamily:"Proxima Nova",
      alignItems: 'center',
     },
     actionRow: {
      flexDirection: 'row',
      justifyContent: 'space-between',
      gap: 10,
    },
    centeredContainer: {
      flex: 1,
      justifyContent: 'center',
      alignItems: 'center',
    },
    inline: {
      flexDirection: 'row',
      alignItems: 'center',
      gap: 5,
    },
    itemCount: {
      color: '#7E7E7E',
      fontSize: 12,
      fontWeight: '300',
    },
    buttonRow: {
      flexDirection: 'row',
      justifyContent: 'space-between',
      marginTop: 16,
      gap: 12,
    },
    
    location: {
      color: '#474747',
    },    
    orderTotal: {
      marginTop: 2,
      color: '#555',
      lineHeight:25,
      fontFamily:"Proxima Nova"
    },
    itemBox: {
      borderTopWidth: 1,
      borderColor: '#E9E9E9',
      paddingTop: 22,
      marginTop: 12,
    },
    roundedBox:{
      borderWidth: 1,
      borderColor: '#E9E9E9',   
       paddingTop:15,
       paddingBottom:5,
      marginVertical:10,
      paddingHorizontal: 6,
      alignItems:"center",
      borderRadius: 8,
    },
    itemRow: {
      flexDirection: 'row',
      marginBottom: 12,
      paddingHorizontal: 6,
      alignItems:"flex-start",
  
      paddingTop:26,
      paddingBottom:5,
      borderRadius: 8,
      position:"relative"
    },
    image: {
      width: 60,
      height: 60,
      borderRadius: 5,
    },
    text: {
      paddingLeft: 12,
      flex: 1,
    },
    itemLabel: {
      color: '#888',
      fontSize: 14,
      lineHeight:25,
      fontFamily:"Proxima Nova"
    },
    title: {
      fontWeight: '700',
      fontSize: 14,
      lineHeight:25,
      fontFamily: 'Helvetica Neue',
    },
    description: {
      marginTop: 2,
      color: '#444',
      lineHeight:25,
      fontFamily:"Proxima Nova"
    },
    footer: {
      flexDirection: 'row',
      flexWrap: 'wrap',
      gap: 12,
      marginTop: 8,
      marginBottom: 12,
     },
    statusContainer: {
      flexDirection: 'row',
      alignItems: 'center',
      justifyContent:"center",
      paddingVertical: 5,
      paddingHorizontal: 10,
      borderRadius: 5,
      // alignSelf: 'flex-start',
      marginBottom: 8,
      position:"absolute",
      top:"-5%",
      zIndex:100000,
      margin:"auto",
      width:"85%",
     },
    statusText: {
      fontSize: 12,
      fontWeight: '300',
      fontFamily:"Proxima Nova",
      lineHeight:25,    
      marginLeft: 6,
    },
    statusIcon: {
      width: 14,
      height: 14,
      resizeMode: 'contain',
    },
  });

  export default orderStyles
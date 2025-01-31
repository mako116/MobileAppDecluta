import { StyleSheet } from "react-native";

const YourCart = StyleSheet.create({
    header: {
      flexDirection: 'row',
      justifyContent: 'space-between',
      alignItems: 'center',
       marginTop:15,
    },
    overlayText: {
      fontSize: 16,
      color: '#fff',
      fontWeight: '600',
    },
    overlay: {
      position: 'absolute',
      top: 0,
      left: 0,
      right: 0,
      bottom: 0,
      backgroundColor: 'rgba(0, 0, 0, 0.5)',
      justifyContent: 'center',
      alignItems: 'center',
      borderRadius: 10,
    },
   
    checkboxContainer: {
      flexDirection: 'row',
      alignItems: 'center',
      paddingTop:10,
       marginBottom:5,
    },
    rows:{
      flexDirection:"row",
      alignItems:"center",
      // justifyContent:"flex-start",
      paddingRight:10,
      gap:10
    },
    rowSed:{
      flexDirection:"row",
      alignItems:"center",
      justifyContent:"space-between",
      paddingHorizontal:10,
      paddingVertical:15,
      gap:10,
      borderWidth: 1,
      borderColor: '#E9E9E9',
      borderRadius: 4,
    },
    CardText:{
      fontSize: 13,
      fontWeight: '700',
       fontFamily:"Helvetica Neue",
      lineHeight:18.2,
      color: '#000000', // Color for the amount text
     },
    checkbox: {
      width: 18,
      height: 17,
      borderWidth: 1,
      borderColor: '#89939E',
      borderRadius: 4,
      justifyContent: 'center',
      alignItems: 'center',
      marginRight: 10,
    },
    checkedBox: {
      width: 18.2,
      height: 17,
      borderRadius: 4,
      justifyContent: 'center',
      alignItems: 'center',
      backgroundColor: '#DFBD8F', // Background color when checked
    },
    checkboxText: {
      height:"100%",
      // width:"100%",
      flex:1,
      fontSize: 14,
      textAlign:"center",
      alignItems:"center",
      marginVertical:"20%",
      color: '#463E31',
      marginBottom:3,
      fontWeight:"100",
      fontFamily:"Proxima Nova"
    },
    rewardText: {
      fontSize: 14,
      color: '#333',
      fontFamily:"Proxima Nova",
     lineHeight:19.6,
      textAlign:"center"
    },
    container: {
       backgroundColor: '#f9f9f9',
      borderColor: '#000',
       height:"100%",
      //  paddingBottom:"20%"
    },
    headerText: {
      fontSize: 16,
      fontWeight: 'bold',
    },
   
    counterContainer: {
      flexDirection: 'row',
      justifyContent: 'center',
      alignItems: 'center',
      marginTop: 10,
      gap: 5,
       backgroundColor: '#fff',
       borderWidth:1,
       borderRadius:4,
       borderColor:"#E9E9E9"
    },
    button: {
     
      padding: 10,
      borderRadius: 5,
    },
    rewardInfoContainer: {
      flexDirection:"row",
      alignItems:"center",
       justifyContent:"space-between",
      marginBottom: 5,
     },
     bonusT: {
      fontSize: 12,
      fontWeight: '400',
      color: '#212121',
      fontFamily:"Proxima Nova",
      lineHeight:16.8
    },
    bonusText: {
      fontSize: 14,
      fontWeight: '400',
      color: '#212121',
      fontFamily:"Proxima Nova",
      lineHeight:19.6
    },
    bonusTexts: {
      fontSize: 20,
      fontWeight: '400',
      color: '#212121',
      fontFamily:"Proxima Nova",
      lineHeight:26.6
    },
    rewardAmountContainer: {
      flexDirection: 'row',
      alignItems: 'center',
        justifyContent:"flex-end"
    },
    rewardAmount: {
      fontSize: 14,
      fontWeight: '400',
       fontFamily:"Helvetica Neue",
      lineHeight:19.6,
      color: '#009217', // Color for the amount text
      marginLeft: 5,
    },
    buttonText: {
      color:"#212121",
      fontSize: 16,
      lineHeight:22.4,
      fontFamily:"Proxima Nova",
      fontWeight: '400',
    },
    countText: {
       color:"#212121",
       fontSize: 14,
       lineHeight:19.6,
       fontFamily:"Proxima Nova",
       fontWeight: '400',
    },
    main: {
    
      paddingHorizontal: 13,
      
    },
    notificationContent:{
      flexDirection: 'row',
      gap:12
    },
    notificationContents: {
      flexDirection: 'row',
      paddingTop:14,
       borderBottomWidth:1,
      justifyContent:"space-between",
      borderColor:"#E9E9E9",
    },
    notificationC: {
      flexDirection: 'row',
      paddingTop:14,
      //  borderBottomWidth:1,
      justifyContent:"space-between",
      borderColor:"#E9E9E9",
      paddingHorizontal:1
    },
    notificationCont: {
      flexDirection: 'row',
      paddingVertical:8,
       borderWidth:1,
      justifyContent:"space-between",
      alignItems:"center",
      borderColor:"#E9E9E9",
      borderRadius:4,
      // backgroundColor:"#fff"
    },
    image: {
      width: 50,
      height: 50,
      borderRadius: 5,
    },
    textContainer: {
      gap:2,
    },
    textContainers: {
      paddingBottom: '3%',
      alignItems:"flex-end"
    },
    title: {
      fontWeight: '700',
      fontFamily:"Helvetica Neue",
      fontSize:14,
      lineHeight:19.6 
    },
    price: {
      fontWeight: '400',
      fontFamily:"Proxima Nova",
      fontSize:14,
      lineHeight:19.6
    },
    description: {
      lineHeight: 19.6,
      fontSize: 12,
      fontWeight:"400",
      fontFamily:"Proxima Nova",
  
     },
     checkoutSection: {
      paddingHorizontal: 16,
      paddingTop: 16,
      // backgroundColor:"#fff"
    },
    checkoutRow: {
      flexDirection: 'row',
      justifyContent: 'space-between',
      marginBottom: 10,
      
    },
    couponText: {
      color: '#333',
      fontSize: 14,
      marginBottom: 10,
    },
    couponInputContainer: {
      flexDirection: 'row',
      alignItems: 'center',
      marginBottom: 8,
      
    },
    couponInput: {
      flex: 1,
      borderWidth: 1,
      borderColor: '#E9E9E9',
      borderRadius: 5,
      paddingLeft: 15,
      paddingVertical:"3.5%"
    },
    applyButton: {
      marginLeft: 10,
      backgroundColor: '#333',
      borderRadius: 5,
      paddingHorizontal: 25,
      paddingVertical:"3.5%"
    },
    bottomButton: {
      flexDirection:"row",
      justifyContent:"center",
      backgroundColor: '#DEBC8E',
      borderRadius: 5,
      paddingVertical: 15,
      alignItems: 'center',
      marginTop: 10,
      gap:5
    },
    secureSection: {
      //  flexDirection:"row",
      justifyContent:"center",
      // marginTop: 15,
      alignItems: 'center',
      paddingVertical: 13,
    //  backgroundColor:"#fff"
    },
    modalContainer: {
      flex: 1,
      justifyContent: 'flex-end',
      alignItems: 'center',
      backgroundColor: 'rgba(0, 0, 0, 0.2)', // Semi-transparent background
    },
    modalContent: {
      backgroundColor: 'white',
      padding: 20,
      borderTopLeftRadius: 26,
      borderTopRightRadius: 26,
      width: '100%',
    },
    modalTitle: {
      fontSize: 19,
      fontWeight: '700',
      marginBottom: 10,
      color: '#212121',
      textAlign: 'center',
      fontFamily: 'Helvetica Neue',
      lineHeight: 26.6,
    },
    inputGroup: {
      marginBottom: 15,
    },
    bottomButtons: {
      flexDirection: 'row',
      justifyContent: 'center',
      borderRadius: 5,
      paddingVertical: 17,
      alignItems: 'center',
      marginTop: 10,
      gap: 5,
    },
    label: {
      fontSize: 14,
      fontWeight: '400',
      marginBottom: 5,
      lineHeight:19.6,
      color: '#212121',
      fontFamily:"Helvetica Neue",
    },
    input: {
      flex:1,
       paddingLeft: 10,
      fontSize: 13,
       color:"#212121",
      fontFamily:"Proxima Nova",
      fontWeight:'400',
      lineHeight:18.2
    },

    
    pinInputContainer: {
      flexDirection: 'row',
      alignItems: 'center',
      justifyContent: 'space-between',
    },
    eyeIcon: {
      paddingHorizontal: 10,
    },
    saveButton: {
      backgroundColor: '#4CAF50',
      padding: 10,
      marginTop: 10,
      borderRadius: 5,
      alignItems: 'center',
    },
    closeButton: {
      backgroundColor: '#F44336',
      padding: 10,
      marginTop: 10,
      borderRadius: 5,
      alignItems: 'center',
    },
    
  });


  export default YourCart
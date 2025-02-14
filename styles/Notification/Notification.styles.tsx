import {  StyleSheet } from 'react-native';

const NotificationStyles = StyleSheet.create({
    container: {
      flex: 1,
      backgroundColor: '#F8F9FA',
    },
    noNotificationContainer: {
      flex: 1,
      justifyContent: 'center',
      alignItems: 'center',
      padding: 20,
     },
    noNotificationText: {
      textAlign:"center",
      lineHeight:19.6,
      fontSize: 14,
      fontWeight:"400",
      color: '#474747',
      marginTop:5
    },
    scrollContent: {
      // padding: 10,
    },
    main: {
      marginTop: 10,
      backgroundColor: '#FFFFFF',
      borderRadius: 10,
      padding: 10,
      borderWidth:1,
     borderColor:"#E9E9E9"
    },
    notificationContent: {
      flexDirection: 'row',
      paddingVertical: "3%",
    },
    notificationContents: {
      // flexDirection: 'row',
      paddingVertical: 4,
    },
    image: {
      width: 30,
      height: 30,
      borderRadius: 5,
    },
    textContainer: {
      paddingHorizontal: 10,
      // paddingVertical: '3%',
    },
    title: {
      fontFamily: 'Helvetica Neue',
      fontWeight: '700',
      marginBottom:5
    },
    description: {
      paddingRight: '10%',
      lineHeight: 19.6,
      fontSize: 14,
      color:"#212121",
      fontFamily:"Proxima Nova"
    },
    footer: {
      flexDirection: 'row',
      justifyContent: 'space-between',
      alignItems: 'center',
      paddingTop: '3%',
      borderTopWidth: 1,
      borderColor: '#E9E9E9',
    },
    footerLeft: {
      flexDirection: 'row',
      alignItems: 'center',
      gap: 10,
    },
    time: {
      fontWeight:"400",
      lineHeight:16.8,
      color: '#474747',
      fontSize: 12,
      fontFamily:"Proxima Nova"
    },
    tag: {
      width:69,
      height:22,
      backgroundColor: '#F5EADC',
      color: '#212121',
      padding: 2,
      textAlign:"center",
      fontSize: 12,
      borderRadius: 4,
      fontFamily:"Proxima Nova"
    },
    footerRight: {
      flexDirection: 'row',
      alignItems: 'center',
      gap: 5,
    },
    actionText: {
      color: '#212121',
      fontSize: 12,
      fontWeight: '400',
      fontFamily:"Proxima Nova",
      lineHeight:16.8
    },
  });


  export default NotificationStyles;
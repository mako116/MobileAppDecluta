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
      marginTop: 15,
      backgroundColor: '#FFFFFF',
      borderRadius: 10,
      padding: 10,
      elevation: 3,
      shadowColor: '#000',
      shadowOffset: { width: 0, height: 2 },
      shadowOpacity: 0.1,
      shadowRadius: 4,
    },
    notificationContent: {
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
      paddingVertical: '3%',
    },
    title: {
      fontFamily: 'Poppins',
      fontWeight: '700',
      marginBottom:5
    },
    description: {
      paddingRight: '10%',
      lineHeight: 19.6,
      fontSize: 14,
    },
    footer: {
      flexDirection: 'row',
      justifyContent: 'space-between',
      alignItems: 'center',
      paddingVertical: '2%',
      borderTopWidth: 1,
      borderColor: '#E9E9E9',
    },
    footerLeft: {
      flexDirection: 'row',
      alignItems: 'center',
      gap: 10,
    },
    time: {
      color: '#474747',
      fontSize: 12,
    },
    tag: {
      backgroundColor: '#F5EADC',
      color: '#212121',
      padding: 5,
      fontSize: 12,
      borderRadius: 5,
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
    },
  });


  export default NotificationStyles;
import { StyleSheet } from "react-native";

const CategoryStyles = StyleSheet.create({
    row: {
      flexDirection: 'row',
      alignItems: 'center',
    },
    container: {
      paddingHorizontal: 15,
      paddingVertical: 10,
      borderWidth: 1,
      borderColor: '#E9E9E9',
      borderRadius: 10,
      overflow: 'hidden',
      backgroundColor: '#fff',
    },
    imageContainer: {
      alignItems: 'center',
      position: 'relative',
    },
    image: {
      width: 150,
      height: 144,
      borderRadius: 4,
    },
    timeAgoContainer: {
      position: 'absolute',
      bottom: '1%',
      right: 10,
      backgroundColor: '#21212166',
      width: 48,
      height: 20,
      alignItems: 'center',
      justifyContent: 'center',
      borderBottomEndRadius: 4,
    },
    timeAgoText: {
      fontWeight: '400',
      fontSize: 8,
      lineHeight: 11.2,
      color: '#fff',
      fontFamily: 'Proxima Nova',
    },
    specificContainer: {
      position: 'absolute',
      bottom: '1.5%',
      left: 0,
       width: 48,
      height: 20,
      alignItems: 'center',
      justifyContent: 'center',
      borderBottomEndRadius: 4,
    },
    specifics:{
      width:20,
      height:20
    },
    textContainer: {
      paddingLeft: 12,
      paddingBottom: 10,
    },
    nairaIconStyle: {
      width: 15,
      height: 15,
      marginRight: 3,
    },
    title: {
      fontSize: 16,
      lineHeight: 22.4,
      fontWeight: '700',
      color: '#212121',
      fontFamily: 'Helvetica Neue',
      paddingVertical: 5,
    },
    name: {
      fontSize: 12,
      lineHeight: 16.8,
      fontWeight: '400',
      color: '#474747',
      fontFamily: 'Proxima Nova',
    },
    locations: {
      flexDirection: 'row',
      alignItems: 'center',
    },
    locationsText: {
      fontSize: 12,
      lineHeight: 16.8,
      fontWeight: '400',
      color: '#474747',
      marginLeft: 4,
      fontFamily: 'Proxima Nova',
      marginTop: 5,
    },
  
});

export default CategoryStyles;
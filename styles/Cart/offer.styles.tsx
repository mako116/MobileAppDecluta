import { StyleSheet } from "react-native";

const OfferStyle = StyleSheet.create({
    offerCard: {
      borderWidth: 1,
      paddingTop: "9.5%",
      paddingBottom:"4%",
      backgroundColor: "#fff",
      paddingHorizontal: "3.1%",
      justifyContent: "center",
      gap: 10,
      borderColor: "#E9E9E9",
      borderRadius: 4,
      marginTop:"11%"
    },
    offerExpiry: {
      flexDirection: "row",
      justifyContent: "space-between",
      width: "100%",
    },
    dottedBorders: {
      position: "relative",
      paddingVertical: 10,
      paddingHorizontal: 13,
    },
    topBorder: {
      position: "absolute",
      flexDirection: "row",
      top: 0,
      left: 0,
      right: 0,
      justifyContent: "space-between",
      overflow: "hidden",
    },
    bottomBorder: {
      position: "absolute",
      flexDirection: "row",
      bottom: 0,
      left: 0,
      right: 0,
      justifyContent: "space-between",
      overflow: "hidden",
    },
    leftBorder: {
      position: "absolute",
      flexDirection: "column",
      top: 0,
      bottom: 0,
      left: 0,
      justifyContent: "space-between",
      overflow: "hidden",
    },
    rightBorder: {
      position: "absolute",
      flexDirection: "column",
      top: 0,
      bottom: 0,
      right: 0,
      justifyContent: "space-between",
      overflow: "hidden",
    },
    borderSide: {
      width: 1.2,
      height: 5,
      backgroundColor: "#DEBC8E",
      marginVertical: 2,
      paddingVertical: "1%",
      borderRadius: 40,
    },
    dash: {
      width: "1.2%",
      height: 1, // Thickness of the dash
      backgroundColor: "#DEBC8E",
      marginHorizontal: 2, // Spacing between dashes
    },
    applyOfferContainer: {
      flexDirection: "row",
      justifyContent: "space-between",
      width:"100%"
    },
    offerDetails: {
      flexDirection: "row",
      alignItems: "center",
      gap: 5,
    },
    offerIndicator: {
    //   width: 156,
    paddingHorizontal:75,
      paddingVertical:5,
      backgroundColor: "#E9E9E9",
    //   height: 10,
      borderRadius:30
    },
    cashback:{
        fontFamily:"Helvetica Neue",
        fontWeight:"400",
        lineHeight:19.6,
        fontSize:14,
        color:"#474747"
    },
    title:{
        fontFamily:"Helvetica Neue",
        fontWeight:"700",
        lineHeight:22.4,
        fontSize:16,
        color:"#212121"
    },
    desc:{
        fontFamily:"Proxima Nova",
        fontWeight:"400",
        lineHeight:19.6,
        fontSize:14,
        color:"#212121"
    },
    smdesc:{
        fontFamily:"Proxima Nova",
        fontWeight:"400",
        lineHeight:16.8,
        fontSize:12,
        color:"#474747"
    },
    applyButton: {
      justifyContent: "center",
      alignItems: "center",
      borderRadius: 8,
      paddingHorizontal: 13,
      paddingVertical: 10,
      backgroundColor: "#DEBC8E",
    },
    applyButtonDisabled: {
      backgroundColor: "#E9E9E9",
    },
    applyButtonText: {
      color: "#463E31",
      fontSize: 14,
      fontFamily:"Proxima Nova",
      fontWeight:"400",
      lineHeight:19.6,
    },
    applyButtonTextDisabled: {
      color: "#A4A4A4",
    },
    discountLabel: {
      borderWidth: 1,
      position: "absolute",
      top: "-10%",
      zIndex: 1000,
      borderColor: "#7E7E7E",
      borderRadius: 20,
      paddingHorizontal: 15,
      paddingVertical: 3,
      backgroundColor: "#fff",
    },
  });


  export default OfferStyle
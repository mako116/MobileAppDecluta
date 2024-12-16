import { StyleSheet } from "react-native";
import { responsiveHeight, responsiveWidth } from "react-native-responsive-dimensions";
import {
    widthPercentageToDP as wp,
    heightPercentageToDP as hp
} from "react-native-responsive-screen";

export const commonstyles = StyleSheet.create({
    container:{
        flex:1,
        alignItems:"center",
        justifyContent:"center"
    },
    buttonContainer:{
        backgroundColor:"#2467ec",
        width: responsiveWidth(90),
        height: responsiveHeight(2.5),
        
        borderRadius:5,
        marginHorizontal:5,
    },
    dotStyle:{
        backgroundColor:"#c6c7cc",
        width: responsiveWidth(1.5),
        height: responsiveHeight(0.7),
        borderRadius:5,
        marginHorizontal:5,
    },
    activeDotStyle:{
        backgroundColor:"#2467ec",
        width: responsiveWidth(1.5),
        height: responsiveHeight(0.7),
        borderRadius:5,
        marginHorizontal:5,
    },
    title:{
        fontSize: hp("3.5%"),
        textAlign:"center"
    },
    description:{
         fontSize: hp("2.5%"),
         color:"#575757",
        textAlign:"center"
    },
    welcomeButton:{
       backgroundColor:"#2467ec",
       width: responsiveWidth(88),
       height: responsiveHeight(5.5),
       alignSelf:"center",
       justifyContent:"center",
       alignItems:"center",
       borderRadius:5
    },
input:{
  height:55,
  marginHorizontal:16,
  borderRadius:8,
  paddingLeft:15,
  fontSize:16,
  backgroundColor:"white",
  color:"#a1a1a1"
},
errorContainer:{
    flexDirection:"row",
    alignItems:"center",
    marginHorizontal:16,
    marginVertical:4,
    // position:"absolute",
    // top:60,
}
})
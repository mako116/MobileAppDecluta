import { StyleSheet } from "react-native";

const SellItems = StyleSheet.create({
    contains:{
        marginTop:10
        // flex:1
    },
    flexRow:{
        flexDirection:"column",
        justifyContent:"space-between",
        height:"100%",
       
    },
    Box:{
        borderWidth:1,
        paddingHorizontal:15,
        paddingVertical:20,
        marginVertical:10,
        borderRadius:10,
        borderColor:"#E9E9E9",
        backgroundColor:"#fff"
    },
    optionSubText: {
        fontSize: 14,
        fontFamily: "Proxima Nova",
        color: "#212121",
    },
    flexRows:{
        flexDirection:"column",
        justifyContent:"space-between",
        // height:"85%",
        paddingHorizontal: 20,
    },
    number:{
        textAlign:"right",
        color:"#89939E",
        fontFamily:"Proxima Nova",
        fontSize:13
        // flex:1
    },
    flexDif:{
        flexDirection:"row",
        gap:20,
        justifyContent:"space-between",
    },
    flexDifAbs:{
        flexDirection:"row",
        gap:20,
        justifyContent:"space-between",
        position: 'absolute',
        bottom: 0,
        width: '100%',
        paddingHorizontal: 20,
        paddingTop: 20,
        paddingBottom:70,
        marginBottom:"10%", 
        backgroundColor:"#fff"
    },
    flexDifAb:{
        // flexDirection:"row",
        gap:20,
        // justifyContent:"space-between",
        position: 'absolute',
        bottom: 0,
        width: '100%',
        paddingHorizontal: 20,
        paddingTop: 20,
        paddingBottom:40,
        marginBottom:"10%", 
        backgroundColor:"#fff"
    },
    scrollViewContent: {
        flexGrow: 1,
        paddingHorizontal: 20,
        height: "120%", 
      
    },

    label:{
        fontFamily:"Helvetica Neue",
        fontWeight:"700",
        fontSize:16,
        lineHeight:22.4,
        color:"#212121"
    },
    subLabal:{
        fontFamily:"Helvetica Neue",
        fontWeight:"400",
        fontSize:14,
        lineHeight:19.6,
        color:"#212121",
        marginTop:5
    },
    img:{
        width:70,
        height:70,
        marginTop:10
    }
})

export default SellItems
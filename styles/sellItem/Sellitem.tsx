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
    overlayContainer: {
        ...StyleSheet.absoluteFillObject,
        backgroundColor: 'rgba(0,0,0,0.6)',
        justifyContent: 'center',
        alignItems: 'center',
        borderRadius: 10,
      },
      
      overlayText: {
        color: 'white',
        fontWeight: 'bold',
        fontSize: 16,
      },
      
    Box:{
        borderWidth:1,
        paddingHorizontal:15,
        paddingVertical: 20,
        marginVertical:10,
        borderRadius:10,
        borderColor:"#E9E9E9",
        backgroundColor:"#fff"
    },
    optionSubText: {
        fontSize: 12,
        fontWeight: 400,
        marginTop: 5,
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
        paddingHorizontal: 20,
        backgroundColor:"#fff",
    },
    flexDifAb:{
        // flexDirection:"row",
        gap:20,
        width: '100%',
        paddingHorizontal: 20,
        backgroundColor:"#fff",
        paddingTop:10,
        paddingBottom:'10%'
    },
    scrollViewContent: {
        paddingHorizontal: 20,
        // backgroundColor:"#F9F9F9",
        // flex: 1,
        // height:'130%',
         width:'100%'
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
        borderStyle:"dashed",
        borderWidth:1,
        borderColor:"#E9E9E9",
        borderRadius:10,
        backgroundColor: "white",
        justifyContent:"center",
        alignItems:"center",
    },
    imagesContainer: {
        flexDirection: 'row',
        flexWrap: 'wrap',
        marginTop: 10,
        justifyContent: 'flex-start',
    },
    imageWrapper: {
        margin: 5,
        position: 'relative',
        borderRadius: 8,
    },
    imageItem: {
        width: 70,
        height: 65,
        borderRadius: 8,
    },
    removeButton: {
        position: 'absolute',
        top: -10,
        right: -10,
        backgroundColor: '#DEBC8E',
        width: 20,
        zIndex:10000,
        height: 20,
        borderRadius: 10,
        justifyContent: 'center',
        alignItems: 'center',
    },
    removeButtonText: {
        color: 'black',
        fontSize: 10,
        fontWeight: 'bold',
    },
    // These styles should be in your SellItems style object
    videoContainer: {
        marginTop: 10,
    },
    videoWrapper: {
        width: '48%',  
        aspectRatio: 16/9,
        position: 'relative',
        borderRadius: 8,
        // overflow: 'hidden',
        marginBottom: 10,
    },
    videoThumbnail: {
        width: '100%',
        height: '100%',
        borderRadius: 8,
    },
    playIconContainer: {
        position: 'absolute',
        top: 0,
        left: 0,
        right: 0,
        bottom: 0,
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: 'rgba(0, 0, 0, 0.3)',
    },
    playIcon: {
        color: 'white',
        fontSize: 30,
    }
})

export default SellItems
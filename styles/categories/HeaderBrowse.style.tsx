import { StyleSheet } from "react-native";

const HeadBrowse = StyleSheet.create({
    container: {
      // flex: 1,
      backgroundColor: '#F9F9F9',
      height: '100%',
   
    },
    header: {
      flexDirection: 'row',
      backgroundColor: '#fff',
      paddingHorizontal: 16,
      paddingTop: '13%',
      paddingBottom:"4%",
      alignItems: 'center',
      gap:20,
      marginBottom:20
    },
    filterContainer:{flexDirection:"row",zIndex:1000, alignItems:"center",justifyContent:"space-between", backgroundColor:"#fff", paddingHorizontal:"2%",paddingVertical:"1%", borderTopWidth:1,borderColor:"#E9E9E9", marginTop:-4,},
    texts:{
      paddingHorizontal:10,
      paddingTop:18,
      paddingBottom:8,
      color:"#212121", 
      fontWeight:"700", 
      fontSize:16,
      lineHeight:22.4,
      fontFamily: 'Helvetica Neue',
      },

      subTexts: {
        paddingHorizontal:10, 
        color:"#212121", 
        fontWeight:"400", 
        fontSize:14, 
        fontFamily: 'Proxima Nova',
        lineHeight:19.6,
        paddingBottom:"3%",
        zIndex:-1000,
      },
    searchBar: {
      flex: 1,
      flexDirection: 'row',
      alignItems: 'center',
      borderWidth: 1,
      borderColor: '#E9E9E9',
      borderRadius: 4,
      paddingHorizontal: 8,
      // height: 40,
      paddingVertical:"2%"
    },
    input: {
        flex: 1,
      fontSize: 14,
      fontWeight: '400',
      fontFamily: 'Proxima Nova',
      lineHeight: 19.6,
      color: '#212121',
    },
    filterButton: {
      paddingVertical: '3%',
      paddingLeft: 10,
    },
    
    dropdown: {
      position: 'absolute',
      top: 45, // Adjust based on your UI
      left: 10,
      backgroundColor: '#fff',
      borderRadius: 8,
      padding: 10,
      elevation: 5,
      zIndex: 1,
    },
    dropdown2: {
      position: 'absolute',
      top: 45, // Adjust based on your UI
      right: 10,
      backgroundColor: '#fff',
      borderRadius: 8,
      padding: 10,
      elevation: 5,
      zIndex: 1,
    },
    dropdownItem: {
      paddingVertical: 8,
      paddingHorizontal: 15,
      fontSize: 14,
      color: '#333',
    },
    divider: {
      width: 1.3,
      height: 22,
      backgroundColor: '#A4A4A4',
      marginLeft: '5%',
    },
    categoryScroll: {
      paddingHorizontal: 16,
      
     marginBottom:"5%"
    },
    categoryBox: {
      justifyContent: 'space-between',
      flexDirection: 'row',
      alignItems: 'center',
      backgroundColor: '#fff',
      borderRadius: 4,
      paddingVertical: 10,
      paddingHorizontal: 10,
      marginVertical: '2%',
      borderWidth: 1,
      borderColor: '#E9E9E9',
    },
  
    categoryImage: {
      width: 42,
      height: 42,
      marginRight: 10,
      resizeMode: 'contain',
    },
    categoryText: {
      fontSize: 14,
      fontWeight: '700',
      fontFamily: 'Helvetica Neue',
      lineHeight: 19.6,
      color: '#212121',
    },
    categoryP: {
      fontSize: 14,
      fontWeight: '400',
      fontFamily: 'Proxima Nova',
      lineHeight: 19.6,
      color: '#212121',
    },
    noResultsText: {
      textAlign: 'center',
      marginTop: 20,
      fontSize: 16,
      color: '#888',
    },
  });

  export default HeadBrowse
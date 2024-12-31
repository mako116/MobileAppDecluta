import { StyleSheet } from "react-native";

const HeadBrowse = StyleSheet.create({
    container: {
      flex: 1,
      backgroundColor: '#F9F9F9',
      // height: '100%',
      gap:20
    },
    header: {
      flexDirection: 'row',
      backgroundColor: '#fff',
      paddingHorizontal: 16,
      paddingTop: '13%',
      paddingBottom:"4%",
      alignItems: 'center',
        marginBottom:"2%"
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
    categoryScroll: {
      paddingHorizontal: 16,
      
    
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
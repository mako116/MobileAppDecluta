import { StyleSheet } from "react-native";

const SearchCategoryStyles = StyleSheet.create({
    gridContainer: {
      width:"90%",
       flexDirection: 'row',
      flexWrap: 'wrap',
      gap:10,
      justifyContent:"flex-start"
      // justifyContent: 'space-between', 
    },
    gridItem: {
      backgroundColor: '#FFFFFF',
      borderRadius: 4,
      borderWidth: 1,
      borderColor: "#E9E9E9",
        marginBottom: 5, // Add spacing between rows
      alignItems: "flex-start",
      paddingVertical: 5,
      paddingHorizontal:10,
      // height:21,
       justifyContent:"flex-start",
       gap:20,
      
      // marginHorizontal:1
    },
    title: {
      fontSize: 14,
      fontWeight: '400',
      lineHeight: 16.6,
      color: '#463E31',
      fontFamily: "Proxima Nova",
    },
    header: {
      flexDirection: 'row',
      alignItems: 'center',
      marginBottom: 10,
      marginTop:20
    },
    headerText: {
      marginLeft: 5,
      fontSize: 16,
      lineHeight: 22.4,
      fontWeight: '600',
      fontFamily: "Proxima Nova",
    },
  });

  export default SearchCategoryStyles;
import { StyleSheet } from "react-native";


const SearchScreeStyles = StyleSheet.create({
    container: { 
        paddingVertical: 10, 
        paddingTop: 45 ,
        backgroundColor: "white"
    },
    searchBox: { 
        flexDirection: 'row', 
        alignItems: 'center', 
        paddingHorizontal: 13 
    },
    input: { 
        flex: 1, 
        fontSize: 14,
    },
    inputContainer: { 
        flex: 1, 
        marginHorizontal: 10, 
        fontSize: 14,
        borderRadius: 5,
        alignItems:"center",
        borderWidth: 1,
        borderColor: '#E9E9E9',
         paddingHorizontal:10,
        paddingVertical:3,
        flexDirection: "row"
    },
    resultItem: { 
        flexDirection: 'row', 
        justifyContent: 'space-between', 
        padding: 14 , 
        borderWidth:1, 
        borderColor:"#EAEAEA"
    },
    itemDetails: { 
        flexDirection: 'row', 
        alignItems: 'center' 
    },
    itemImage: { 
        width: 50, 
        height: 50, 
        marginRight: 10 
    },
    resultText: { 
        fontSize: 14, 
        fontWeight: 400,
        fontFamily: 'Proxima Nova' 
    },
    resultCategoryText: {
        fontSize: 14, 
        fontWeight: 700,
        fontFamily: 'Helvetica Neue' 
    },
    resultSubtitle: { 
        fontSize: 14, 
        color: '#666' 
    },
    iphonesButton: {
        padding: 15,
        // backgroundColor: '#007BFF',
        borderRadius: 5,
        margin: 10,
        alignItems: 'center',
    },
    iphonesButtonText: {
        color: '#fff',
        fontSize: 16,
        fontWeight: 'bold',
    },
    noResultText: { 
        textAlign: 'center', 
        marginTop: 20, 
        fontSize: 16 
    },
});

export default SearchScreeStyles;
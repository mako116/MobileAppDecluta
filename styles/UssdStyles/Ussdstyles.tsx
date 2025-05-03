import { StyleSheet } from "react-native";

const UssdStyles = StyleSheet.create({
    container: {
      gap: 5,
      paddingBottom: 10,
      paddingHorizontal: 10,
      paddingVertical: 10,
      borderWidth: 1,
      borderColor: '#E9E9E9',
      borderRadius: 4,  
      backgroundColor: '#FFFFFF',  
    },
    headerText: {
        marginHorizontal:"auto",
        fontSize: 19,
       fontWeight: '700',
       color: '#212121',
        marginTop: 13,
       fontFamily:"Helvetica Neue",
       paddingBottom:14,
       lineHeight:26.6
     },
    dropdownButton: {
        width: "100%",
        padding: 10,
        borderWidth: 1,
        borderColor: "#E9E9E9",
        borderRadius: 8,
        backgroundColor: "#f8f8f8",
        alignItems: "center",
      },
      dropdownButtonText: {
        fontSize: 16,
        color: "#333",

      },
    header: {
      paddingBottom: 5,
    },
    title: {
      fontSize: 16,
      // fontWeight: '600',  
      // color: '#333333',  
    },
    dropdown: {
        flexDirection: "row",
        justifyContent: "space-between",
        alignItems: "center",
        padding: 15,
        borderWidth: 1,
        borderColor: "#E9E9E9",
        borderRadius: 6,
        backgroundColor: "#FFFFFF",
      },
      dropdownsd: {
        marginTop:12,
        // alignItems: "center",
        paddingHorizontal: 15,
        paddingVertical:15,
        gap:10,
        
        borderRadius: 6,
        backgroundColor: "#FFFFFF",
      },
      dropdowned: {
        flexDirection: "row",
        justifyContent: "space-between",
        alignItems: "center",
        paddingHorizontal: 15,
        borderWidth: 1,
        borderColor: "#E9E9E9",
        borderRadius: 6,
        backgroundColor: "#FFFFFF",
        marginVertical: 10,
        paddingVertical:3,
      },
      dropdownText: {
        fontSize: 16,
        color: "#333",
      },
      modalOverlay: {
        flex: 1,
        justifyContent: "flex-end",
        alignItems: "center",
        backgroundColor: "rgba(0,0,0,0.5)",
      },
      modalContent: {
        width: "100%",
        backgroundColor: "white",
        borderRadius: 10,
        paddingHorizontal: 20,
        paddingVertical:14,
        elevation: 5,
      },
      modalContents: {
        width: "100%",
        backgroundColor: "white",
        borderRadius: 30,
        paddingHorizontal: 20,
        paddingVertical:14,
        elevation: 5,
      },
      searchInput: {
        // borderWidth: 1,
        borderColor: "#CBD5E0",
        borderRadius: 6,
        padding: 10,
        marginVertical: 5,
      },
      bankItem: {
        flexDirection: "row",
        justifyContent: "space-between",
        paddingVertical: 20,
        paddingHorizontal:10
       
      },
      CategoryItem: {
        flexDirection: "row",
        // justifyContent: "space-between",
        paddingVertical: 15,
        paddingHorizontal:0,
        gap:0,
        borderBottomWidth:1,
        borderColor:"#E9E9E9"
       
      },
      bankName: {
        fontSize: 16,
        fontWeight: "500",
      },
      ussdCode: {
        fontSize: 14,
        color: "#666",
      },
      closeButton: {
        marginTop: 10,
        padding: 12,
        backgroundColor: "#E53E3E",
        borderRadius: 6,
        alignItems: "center",
      },
      closeText: {
        color: "#FFF",
        fontSize: 16,
        fontWeight: "600",
      },
      button: {
        width: '100%',
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'space-between',
        backgroundColor: '#fff',
        paddingHorizontal: 13,
        paddingVertical: 13,
        borderTopLeftRadius: 4,
        borderTopRightRadius: 4,
        borderColor: '#E9E9E9',
        borderWidth: 1,
      },
      buttonRow: {
        flexDirection: 'row',
        gap: 10,
        alignItems: 'center',
      },
      dropdowns: {
        overflow: 'hidden',
      },
      dropdownContainer: {
        backgroundColor: '#fff',
        width: '100%',
      
      },
      row: {
        flexDirection: 'row',
        alignItems: 'center',
        gap: 2,
      },
      saveText: {
        color: '#009217',
        fontWeight: '400',
        fontSize: 12,
        lineHeight: 16.8,
        textAlign: 'right',
      },
      timerContainer: {
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'center',
        marginTop: 20,
        padding: 10,
      },
      digitBox: {
        marginHorizontal:6,
        paddingVertical:7,
        paddingHorizontal:15,
         borderWidth: 1,
        borderColor: '#E9E9E9',
        justifyContent: 'center',
        alignItems: 'center',
        borderRadius: 4,
        backgroundColor: '#F5EADC',
       },
      colon: {
       alignItems:"center",
        marginBottom:"10%"
      },
      digitText: {
        fontSize: 22,
        fontWeight: '600',
        color: '#333',
      },
  });

  export default UssdStyles
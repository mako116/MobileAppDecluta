import { StyleSheet } from "react-native";

export const ReviewsStyles = StyleSheet.create({
    scrollContainer: {
    //   paddingBottom: 100,
    },
    container: {
      padding: 16,
    },
    loaderContainer: {
      flex: 1,
      justifyContent: 'center',
      alignItems: 'center',
    },
    title: {
      fontSize: 16,
      fontWeight: '600',
      marginVertical: 10,
      color: '#333',
    },
    description: {
      fontSize: 13,
      color: '#666',
      marginBottom: 12,
    },
    sectionTitle: {
      fontSize: 15,
      fontWeight: '600',
      marginVertical: 10,
      color: '#333',
    },
    imageRow: {
      flexDirection: 'row',
      marginBottom: 12,
    },
    imageWrapper: {
      marginRight: "3.3%",
      position: 'relative',
    },
    image: {
      width: 70,
      height: 80,
      borderRadius: 10,
      objectFit:"contain"
    },
    overlay: {
      position: 'absolute',
      top: 0,
      left: 0,
      width: 70,
      height: 80,
      backgroundColor: 'rgba(0,0,0,0.6)',
      justifyContent: 'center',
      alignItems: 'center',
      borderRadius: 10,
    },
    overlayText: {
      color: '#fff',
      fontWeight: 'bold',
    },
    fieldContainer: {
      marginBottom: 20,
    },
    fieldHeader: {
      flexDirection: 'row',
      justifyContent: 'space-between',
    },
    label: {
      fontSize: 14,
      fontWeight: '500',
      color: '#333',
    },
    editText: {
      fontSize: 12,
      color: '#007BFF',
    },
    valueText: {
      fontSize: 13,
      color: '#444',
      marginTop: 6,
    },
    input: {
      borderWidth: 1,
      borderColor: '#ddd',
      padding: 10,
      borderRadius: 6,
      marginTop: 8,
      fontSize: 14,
    },
    saveButton: {
      backgroundColor: '#DEBC8E',
      paddingVertical: 8,
      paddingHorizontal: 20,
      borderRadius: 6,
      alignSelf: 'flex-start',
      marginTop: 8,
    },
    saveButtonText: {
        color: "#212121",
        textAlign: "center",
        fontFamily:"Proxima Nova",

      fontWeight: '500',
    },
    summaryCard: {
    //   backgroundColor: '#E9E9E9',
      borderColor: '#E9E9E9',
      borderWidth: 1,
      borderRadius: 8,
      padding: 16,
      marginVertical: 20,
    },
    summaryTitle: {
      fontSize: 14,
      fontWeight: '600',
      color: '#333',
    },
    summaryValue: {
      fontSize: 16,
      fontWeight: 'bold',
      color: '#463E31',
      marginTop: 6,
    },
    footer: {
      flexDirection: 'row',
      justifyContent: 'space-between',
      padding: 16,
      backgroundColor: '#fff',
      position: 'absolute',
      bottom: 0,
      left: 0,
      right: 0,
      borderTopColor: '#eee',
      borderTopWidth: 1,
    },
    outlineButton: {
      borderColor: '#463E31',
      borderWidth: 1,
      paddingVertical: 12,
      paddingHorizontal: 20,
      borderRadius: 6,
    },
    primaryButton: {
      backgroundColor: '#463E31',
      paddingVertical: 12,
      paddingHorizontal: 20,
      borderRadius: 6,
    },
    footerText: {
      color: '#463E31',
      fontWeight: '600',
    },
    footerTextWhite: {
      color: '#fff',
      fontWeight: '600',
    },
  });
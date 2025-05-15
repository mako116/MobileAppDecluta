import { StyleSheet } from "react-native";

export const categoryStyles = StyleSheet.create({

  container: {
    marginTop: 1,
  },
  searchContainer: {
    // marginBottom: 20,
    marginVertical: 10,
  },
  searchTitle: {
    fontSize: 15,
  //  fontWeight: "700", 
   fontFamily:"HelveticaNeueBold",
    marginBottom: 14,
  },
  searchBar: {
    flexDirection: 'row',
    alignItems: 'center',
    borderWidth: 1,
    borderColor: '#e0e0e0',
    borderRadius: 8,
    paddingHorizontal: 10,
    paddingVertical: 13,
    backgroundColor: '#fff',
  },
  searchIcon: {
    width: 20,
    height: 20,
    marginRight: 8,
    opacity: 0.5,
  },
  searchInput: {
    flex: 1,
    fontSize: 14,
    color: '#333',
    fontFamily:"ProximaNovaR",

  },
  categoryHeader: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    // marginBottom: 5,
  },
  categoryTitle: {
    fontSize: 15,
  
    fontFamily:"HelveticaNeueBold",  
  },
  viewAllContainer: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  viewAllText: {
    color: '#333',
    fontSize: 14,
    fontFamily:"ProximaNovaR",
  },
  viewAllArrow: {
    fontSize: 18,
    marginLeft: 5,
  },
  categoryGrid: {
    paddingVertical: 5,
  },
  categoryItem: {
    flex: 1,
    paddingRight: 7,
    paddingBottom: 10
  },
  cardContainer: {
    height: 110,
    backgroundColor: '#fff',
    borderRadius: 4,
    padding: 8,
    justifyContent: "space-evenly",
    alignItems: 'center',
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 1 },
    shadowOpacity: 0.1,
    shadowRadius: 2,
    elevation: 1,
  },
  imageContainer: {
    backgroundColor: '#F5EADC',
    borderRadius: 3,
    width: '100%',
    alignItems: 'center',
    paddingVertical: 5
  },
  categoryImage: {
    width: 55,
    height: 55,
    objectFit:"contain",
    

  },
  categoryName: {
    marginTop: 3,
    fontSize: 14,
    textAlign: 'center',
    color: '#474747',
    fontFamily:"Helvetica Neue", 
    paddingVertical: 6, 
    fontWeight: "700",
  },
});
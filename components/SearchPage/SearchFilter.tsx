 import React from 'react';
import { Image, ScrollView, StyleSheet, Text, TouchableOpacity, View } from 'react-native';
import SearchProduct from './SearchProducts/SearchProducts';

interface Item {
  id: number;
  title: string;
}

const SearchFilter: React.FC = () => {
  const trendingItems: Item[] = [
    { id: 1, title: 'iPhone' },
    { id: 2, title: 'HP Laptop' },
    { id: 3, title: 'Generator' },
    { id: 4, title: 'Samsung' },
    { id: 5, title: 'EarPods' },
    { id: 6, title: 'Solar inventer' },
  ];

  const discoverItems: Item[] = [
    { id: 7, title: 'AirPods' },
    { id: 8, title: 'Uk Used phone' },
    { id: 9, title: 'Redmi' },
    { id: 10, title: '7 seater' },
    { id: 11, title: 'Gas cylinder' },
    { id: 12, title: '4000w Blender' },
  ];

  const renderItems = (items: Item[]) => (
    <View style={styles.gridContainer}>
      {items.map((item) => (
        <View key={item.id} style={styles.gridItem}>
          <TouchableOpacity>
            <Text style={styles.title}>{item.title}</Text>
          </TouchableOpacity>
        </View>
      ))}
    </View>
  );

  return (
    <ScrollView  >
    <View style={{ paddingHorizontal: 25, paddingVertical:3 }}>
      <View style={styles.header}>
        <Image source={require('../../assets/images/noto_fire.png')} />
        <Text style={styles.headerText}>Trending..</Text>
      </View>

      {renderItems(trendingItems)}

      <View style={styles.header}>
        <Image source={require('../../assets/images/cool.png')} />
        <Text style={styles.headerText}>Discover more</Text>
      </View>

      {renderItems(discoverItems)}
    </View>
   <View>
   <SearchProduct/>
   </View>
    </ScrollView>
  );
};

const styles = StyleSheet.create({
  gridContainer: {
    width:"90%",
     flexDirection: 'row',
    flexWrap: 'wrap',
    gap:10,
    justifyContent:"flex-start"
    // justifyContent: 'space-between', 
  },
  gridItem: {
    backgroundColor: '#f8f9fa',
    borderRadius: 4,
    elevation: 3, // Adds shadow for Android
    shadowColor: '#000', // Adds shadow for iOS
    shadowOpacity: 0.2,
    shadowOffset: { width: 1, height: 2 },
    shadowRadius: 4,
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
    fontSize: 12,
    fontWeight: '400',
    lineHeight: 16.6,
    color: '#463E31',
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
    fontWeight: '600',
  },
});

export default SearchFilter;

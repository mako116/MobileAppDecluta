import { View, Text, TextInput, FlatList, Image, TouchableOpacity, StyleSheet } from 'react-native';
import React from 'react';
import { Ionicons } from '@expo/vector-icons';
import { useRouter } from 'expo-router';

export default function ProductsCategories() {
  // Use Expo Router instead of React Navigation
  const router = useRouter();
  
  const categories = [
    {
      id: '1',
      imageUrl: require('../../../../assets/images/newimages/compu.png'),
      name: 'Electronics',
    },
    {
      id: '2',
      imageUrl: require('../../../../assets/images/newimages/phone.png'),
      name: 'Smartphones',
    },
    {
      id: '3',
      imageUrl: require('../../../../assets/images/newimages/lap.png'),
      name: 'Laptops',
    },
    {
      id: '4',
      imageUrl: require('../../../../assets/images/newimages/compu.png'),
      name: 'Furniture',
    },
    {
      id: '5',
      imageUrl: require('../../../../assets/images/newimages/compu.png'),
      name: 'Appliances',
    },
    {
      id: '6',
      imageUrl: require('../../../../assets/images/newimages/compu.png'),
      name: 'Fashion',
    },
  ];

  // Function to handle search press and navigate to search page
  const handleSearchPress = () => {

    router.push('/(routes)/SearchPages');
  };
 
  const renderCategoryItem = ({ item }) => (
    <TouchableOpacity style={styles.categoryItem}>
      <View style={styles.cardContainer}>
        <View style={styles.imageContainer}>
          <Image source={item.imageUrl} style={styles.categoryImage} resizeMode="contain" />
        </View>
        <Text style={styles.categoryName}>{item.name}</Text>
      </View>
    </TouchableOpacity>
  );

  return (
    <View style={styles.container}>
      <View style={styles.searchContainer}>
        <Text style={styles.searchTitle}>Search for anything!</Text>
        <TouchableOpacity style={styles.searchBar} onPress={handleSearchPress}>
          <Ionicons name="search-outline" size={20} color="#999" style={styles.searchIcon} />
          <TextInput
            style={styles.searchInput}
            placeholder="Search phones, laptops, furniture & more..."
            placeholderTextColor="#999"
            editable={false} // Make input not editable since we'll navigate on touch
            pointerEvents="none" // Prevents input from receiving touch events
          />
        </TouchableOpacity>
      </View>

      {/* Category Header */}
      <View style={styles.categoryHeader}>
        <Text style={styles.categoryTitle}>Browse our category</Text>
        <TouchableOpacity>
          <View style={styles.viewAllContainer}>
            <Text style={styles.viewAllText}>View all</Text>
            <Text style={styles.viewAllArrow}>›</Text>
          </View>
        </TouchableOpacity>
      </View>

      {/* Category Grid */}
      <FlatList
        data={categories}
        keyExtractor={(item) => item.id}
        numColumns={3}
        showsVerticalScrollIndicator={false}
        renderItem={renderCategoryItem}
        contentContainerStyle={styles.categoryGrid}
      />
    </View>
  );
}

const styles = StyleSheet.create({
  // All your existing styles remain unchanged
  container: {
    marginTop: 1,
  },
  searchContainer: {
    marginBottom: 20,
  },
  searchTitle: {
    fontSize: 18,
    fontWeight: 'bold',
    marginBottom: 10,
  },
  searchBar: {
    flexDirection: 'row',
    alignItems: 'center',
    borderWidth: 1,
    borderColor: '#e0e0e0',
    borderRadius: 8,
    paddingHorizontal: 10,
    paddingVertical: 6,
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
    fontSize: 16,
    color: '#333',
  },
  categoryHeader: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    marginBottom: 15,
  },
  categoryTitle: {
    fontSize: 18,
    fontWeight: 'bold',
  },
  viewAllContainer: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  viewAllText: {
    color: '#333',
    fontSize: 14,
  },
  viewAllArrow: {
    fontSize: 18,
    marginLeft: 5,
  },
  categoryGrid: {
    paddingVertical: 5,
  },
  categoryItem: {
    flex: 1/3,
    padding: 5,
  },
  cardContainer: {
    backgroundColor: '#fff',
    borderRadius: 8,
    padding: 8,
    alignItems: 'center',
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 1 },
    shadowOpacity: 0.1,
    shadowRadius: 2,
    elevation: 1,
  },
  imageContainer: {
    backgroundColor: '#FFF8EE',
    borderRadius: 8,
    width: '100%',
    aspectRatio: 1,
    justifyContent: 'center',
    alignItems: 'center',
    marginBottom: 8,
    padding: 10,
  },
  categoryImage: {
    width: '70%',
    height: '70%',
  },
  categoryName: {
    fontSize: 14,
    textAlign: 'center',
    color: '#333',
    fontWeight: 'bold',
    marginTop: 4,
    marginBottom: 6,
  },
});
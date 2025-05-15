import { View, Text, TextInput, FlatList, Image, TouchableOpacity } from 'react-native';
import React from 'react';
import { Ionicons } from '@expo/vector-icons';
import { useRouter } from 'expo-router';
import { categoryStyles } from '@/styles/Homes/Category.styles';

export default function ProductsCategories() {
  // Use Expo Router instead of React Navigation
  const router = useRouter();
  
  const categories = [
    {
      id: '1',
      imageUrl: require('../../../../assets/images/categories/Electronics.png'),
      name: 'Electronics',
    },
    {
      id: '2',
      imageUrl: require('../../../../assets/images/categories/SmartPhones.png'),
      name: 'Smartphones',
    },
    {
      id: '3',
      imageUrl: require('../../../../assets/images/categories/Laptop.png'),
      name: 'Laptops',
    },
    {
      id: '4',
      imageUrl: require('../../../../assets/images/categories/Furniture.png'),
      name: 'Furniture',
    },
    {
      id: '5',
      imageUrl: require('../../../../assets/images/categories/Appliances.png'),
      name: 'Appliances',
    },
    {
      id: '6',
      imageUrl: require('../../../../assets/images/categories/Fashion.png'),
      name: 'Fashion',
    },
  ];

  // Function to handle search press and navigate to search page
  const handleSearchPress = () => {

    router.push('/(routes)/SearchPages');
  };
 
  const renderCategoryItem = ({ item }) => (
    <TouchableOpacity style={categoryStyles.categoryItem}>
      <View style={categoryStyles.cardContainer}>
        <View style={categoryStyles.imageContainer}>
          <Image source={item.imageUrl} style={categoryStyles.categoryImage} resizeMode="contain" />
        </View>
        <Text style={categoryStyles.categoryName}>{item.name}</Text>
      </View>
    </TouchableOpacity>
  );

  return (
    <View style={categoryStyles.container}>
      <View style={categoryStyles.searchContainer}>
        <Text style={categoryStyles.searchTitle}>Search for anything!</Text>
        <TouchableOpacity style={categoryStyles.searchBar} onPress={handleSearchPress}>
          <Ionicons name="search-outline" size={20} color="#999" style={categoryStyles.searchIcon} />
          <TextInput
            style={categoryStyles.searchInput}
            placeholder="Search phones, laptops, furniture & more..."
            placeholderTextColor="#999"
       
            editable={false} 
            pointerEvents="none" 
          />
        </TouchableOpacity>
      </View>

      {/* Category Header */}
      <View style={categoryStyles.categoryHeader}>
        <Text style={categoryStyles.categoryTitle}>Browse our category</Text>
        <TouchableOpacity>
          <View style={categoryStyles.viewAllContainer}>
            <Text style={categoryStyles.viewAllText}>View all</Text>
            <Text style={categoryStyles.viewAllArrow}>›</Text>
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
        contentContainerStyle={categoryStyles.categoryGrid}
      />
    </View>
  );
}
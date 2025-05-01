import React, { useState, useRef } from 'react';
import { StyleSheet, View, FlatList, SafeAreaView, TextInput, TouchableOpacity, Modal, Text } from 'react-native';
import { router } from 'expo-router';
import { Ionicons } from '@expo/vector-icons';

import ItemCard from './ItemCard';
import { Item } from './item';
import ItemHeader from '@/UI/Header/ItemHeader';

export default function MyItemsScreen() {
  const [searchQuery, setSearchQuery] = useState('');
  const [filterVisible, setFilterVisible] = useState(false);
  const [selectedFilter, setSelectedFilter] = useState('All');
  
  const searchInputRef = useRef(null);

  const items: Item[] = [
    {
      id: '1',
      title: 'Samsung Galaxy A0...',
      price: 75000,
      currency: '₦',
      condition: 'Used',
      status: 'active',
      image: 'https://i.pinimg.com/736x/e8/28/de/e828deef8257790cfb5ea7963f3d2ef7.jpg',
      quantity: 1,
      dateAdded: '23-06-2024',
      itemNumber: '0123456789',
      category: 'Mobile Phones',
    },
    {
      id: '2',
      title: 'Oraimo Earpod 10',
      price: 20000,
      currency: '₦',
      condition: 'Used',
      status: 'inactive',
      image: 'https://i.pinimg.com/736x/06/d8/1e/06d81e396dd0cca272b7f3d7c90a68e4.jpg',
      quantity: 1,
      dateAdded: '22-06-2024',
      itemNumber: '0123456790',
      category: 'Electronics',
    },
    {
      id: '3',
      title: 'Apple Iphone XR',
      price: 250000,
      currency: '₦',
      condition: 'Used Like New',
      status: 'pending',
      image: 'https://i.pinimg.com/736x/42/17/18/4217180ddbe91686f92ee7c71c2bfa98.jpg',
      quantity: 1,
      dateAdded: '21-06-2024',
      itemNumber: '0123456791',
      category: 'Mobile Phones',
    },
    {
      id: '4',
      title: 'LG Home Theatre',
      price: 180000,
      currency: '₦',
      condition: 'New',
      status: 'sold',
      image: 'https://i.pinimg.com/736x/f7/cb/98/f7cb98099f150fe3398895c35b344da3.jpg',
      quantity: 1,
      dateAdded: '20-06-2024',
      dateSold: '25-06-2024',
      itemNumber: '0123456792',
      category: 'Electronics',
      buyer: 'John D.',
    },
    {
      id: '5',
      title: 'HP Spectre 360',
      price: 755000,
      currency: '₦',
      condition: 'Refurbished',
      status: 'pending',
      image: 'https://i.pinimg.com/736x/49/a5/23/49a52381639c73ca79afe01a2593aff1.jpg',
      quantity: 1,
      dateAdded: '19-06-2024',
      itemNumber: '0123456793',
      category: 'Computers',
    },
    {
      id: '6',
      title: 'Single Seater Chair',
      price: 25000,
      currency: '₦',
      condition: 'Used',
      status: 'rejected',
      image: 'https://i.pinimg.com/736x/ad/9c/ca/ad9ccab0661519c68b9768ffe77aa389.jpg',
      quantity: 1,
      dateAdded: '18-06-2024',
      itemNumber: '0123456794',
      category: 'Furniture',
    },
  ];

  const handleItemPress = (item: Item) => {
    router.push(`/(routes)/Account/MyItem/${item.id}`);
    
  };

  const openFilter = () => {
    setFilterVisible(true);
  };

  const applyFilter = (filter) => {
    setSelectedFilter(filter);
    setFilterVisible(false);
  };

  // Filter items based on search query and selected filter
  const filteredItems = items.filter((item) => {
    // Search query filter
    const matchesSearch = item.title.toLowerCase().includes(searchQuery.toLowerCase());
    
    // Status filter
    if (selectedFilter === 'All') {
      return matchesSearch;
    } else if (selectedFilter === 'Draft') {
      return matchesSearch && item.status === 'draft';
    } else if (selectedFilter === 'Active') {
      return matchesSearch && item.status === 'active';
    } else if (selectedFilter === 'Inactive') {
      return matchesSearch && item.status === 'inactive';
    } else if (selectedFilter === 'Pending review') {
      return matchesSearch && item.status === 'pending';
    } else if (selectedFilter === 'Sold') {
      return matchesSearch && item.status === 'sold';
    } else if (selectedFilter === 'Archived') {
      return matchesSearch && item.status === 'archived';
    } else if (selectedFilter === 'Rejected') {
      return matchesSearch && item.status === 'rejected';
    }
    
    return matchesSearch;
  });

  const FilterModal = () => {
    const filters = [
      'All', 
      'Draft', 
      'Active', 
      'Inactive', 
      'Pending review', 
      'Sold', 
      'Archived', 
      'Rejected'
    ];

    return (
      <Modal
        visible={filterVisible}
        transparent={true}
        animationType="slide"
        onRequestClose={() => setFilterVisible(false)}
      >
        <View style={styles.modalOverlay}>
          <View style={styles.modalContent}>
            <View style={styles.modalHeader}>
              <Text style={styles.modalTitle}>Filter</Text>
              <TouchableOpacity onPress={() => setFilterVisible(false)}>
                <Ionicons name="close" size={24} color="black" />
              </TouchableOpacity>
            </View>
            
            <View style={styles.filtersContainer}>
              {filters.map((filter) => (
                <TouchableOpacity
                  key={filter}
                  style={styles.filterOption}
                  onPress={() => applyFilter(filter)}
                >
                  <View style={styles.radioContainer}>
                    <View 
                      style={[
                        styles.radioOuter, 
                        selectedFilter === filter && styles.radioOuterSelected
                      ]}
                    >
                      {selectedFilter === filter && <View style={styles.radioInner} />}
                    </View>
                    <Text style={styles.filterText}>{filter}</Text>
                  </View>
                </TouchableOpacity>
              ))}
            </View>
          </View>
        </View>
      </Modal>
    );
  };

  return (
    <SafeAreaView style={styles.container}>
      <ItemHeader title="My Items" showBack showNotification showCart />
      
      <View style={styles.searchContainer}>
        <View style={styles.searchInputContainer}>
          <Ionicons name="search" size={20} color="#999" style={styles.searchIcon} />
          <TextInput
            ref={searchInputRef}
            style={styles.searchInput}
            placeholder="I'm looking for..."
            value={searchQuery}
            onChangeText={setSearchQuery}
          />
          {searchQuery.length > 0 && (
            <TouchableOpacity onPress={() => setSearchQuery('')}>
              <Ionicons name="close-circle" size={20} color="#999" />
            </TouchableOpacity>
          )}
        </View>
        
        <TouchableOpacity style={styles.filterButton} onPress={openFilter}>
          <Ionicons name="options-outline" size={20} color="#333" />
        </TouchableOpacity>
      </View>

      <FlatList
        data={filteredItems}
        keyExtractor={(item) => item.id}
        renderItem={({ item }) => <ItemCard item={item} onPress={handleItemPress} />}
        style={styles.list}
        contentContainerStyle={styles.listContent}
        ListEmptyComponent={
          <View style={styles.emptyContainer}>
            <Text style={styles.emptyText}>No items found</Text>
          </View>
        }
      />

      <FilterModal />
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#f8f8f8',
  },
  searchContainer: {
    flexDirection: 'row',
    paddingHorizontal: 16,
    paddingVertical: 8,
    backgroundColor: 'white',
    alignItems: 'center',
  },
  searchInputContainer: {
    flex: 1,
    flexDirection: 'row',
    alignItems: 'center',
    backgroundColor: '#f1f1f1',
    borderRadius: 8,
    paddingHorizontal: 12,
    marginRight: 8,
  },
  searchIcon: {
    marginRight: 8,
  },
  searchInput: {
    flex: 1,
    height: 40,
  },
  filterButton: {
    padding: 12,
    borderRadius: 8,
    backgroundColor: '#f1f1f1',
  },
  list: {
    flex: 1,
  },
  listContent: {
    paddingTop: 16,
    paddingBottom: 16,
  },
  modalOverlay: {
    flex: 1,
    justifyContent: 'flex-end',
    backgroundColor: 'rgba(0, 0, 0, 0.5)',
  },
  modalContent: {
    backgroundColor: 'white',
    borderTopLeftRadius: 16,
    borderTopRightRadius: 16,
    padding: 16,
    maxHeight: '80%',
  },
  modalHeader: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    marginBottom: 16,
  },
  modalTitle: {
    fontSize: 18,
    fontWeight: '600',
  },
  filtersContainer: {
    paddingBottom: 20,
  },
  filterOption: {
    paddingVertical: 12,
    borderBottomWidth: 1,
    borderBottomColor: '#f1f1f1',
  },
  radioContainer: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  radioOuter: {
    height: 20,
    width: 20,
    borderRadius: 10,
    borderWidth: 1,
    borderColor: '#ddd',
    justifyContent: 'center',
    alignItems: 'center',
    marginRight: 10,
  },
  radioOuterSelected: {
    borderColor: '#00C853',
  },
  radioInner: {
    height: 10,
    width: 10,
    borderRadius: 5,
    backgroundColor: '#00C853',
  },
  filterText: {
    fontSize: 16,
  },
  emptyContainer: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    padding: 20,
  },
  emptyText: {
    fontSize: 16,
    color: '#666',
  },
});
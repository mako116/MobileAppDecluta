import React, { useState } from 'react';
import {
  View,
  Text,
  TouchableOpacity,
  StyleSheet,
  SafeAreaView,
  Modal,
  ScrollView,
  Dimensions
} from 'react-native';
import { Ionicons } from '@expo/vector-icons';
import FontAwesome from '@expo/vector-icons/FontAwesome';
import { StatusBar } from 'expo-status-bar';
import { Link } from 'expo-router';
import { Route } from 'expo-router';
import { useRouter } from 'expo-router';
import FilterProducts from '@/components/Filter/FilterProduct';

const { width } = Dimensions.get('window');

const SearchResultsScreen = () => {
  const [sortModalVisible, setSortModalVisible] = useState(false);
  const [selectedSort, setSelectedSort] = useState('Best Match');
    const router = useRouter();

  // Sort options
  const sortOptions = [
    'Best Match',
    'Time: newly listed',
    'Price: lowest first',
    'Price: highest first',
    'Popularity: lowest first',
    'Popularity: highest first'
  ];

  const toggleSortModal = () => {
    setSortModalVisible(!sortModalVisible);
  };

  const handleSortSelect = (option) => {
    setSelectedSort(option);
    setSortModalVisible(false);
  };

  return (
    <SafeAreaView style={styles.container}>
      <StatusBar style="dark" />
      
      <View style={styles.header}>
        <View style={styles.filterContainer}>
   
            <TouchableOpacity     onPress={() => router.push('/(routes)/Filter/AllFilter')} style={styles.filterButton}>
              <Ionicons name="options-outline" size={20} color="#333" />
              <Text style={styles.filterText}>Filter</Text>
              <Ionicons name="chevron-down" size={16} color="#333" />
            </TouchableOpacity>
     
          
          <TouchableOpacity style={styles.sortButton} onPress={toggleSortModal}>
           
          <FontAwesome name="sort-amount-desc" size={14} color="#333" />
            <Text style={styles.sortText}>{selectedSort}</Text>
            <Ionicons name="chevron-down" size={16} color="#333" />
          </TouchableOpacity>
        </View>
      </View>




<FilterProducts />

      
      {/* Sort Modal -  */}
      <Modal
        transparent={true}
        visible={sortModalVisible}
        animationType="slide"
        onRequestClose={toggleSortModal}
      >
        <View style={styles.modalOverlay}>
          <View style={styles.modalContainer}>
            <View style={styles.modalHeader}>
              <Text style={styles.modalTitle}>Sort</Text>
              <TouchableOpacity onPress={toggleSortModal}>
                <Text style={styles.doneButton}>Done</Text>
              </TouchableOpacity>
            </View>
            
            <ScrollView style={styles.sortOptions}>
              {sortOptions.map((option, index) => (
                <TouchableOpacity 
                  key={index} 
                  style={styles.sortOption}
                  onPress={() => handleSortSelect(option)}
                >
                  <View style={styles.radioContainer}>
                    <View style={styles.radioOuter}>
                      {selectedSort === option && <View style={styles.radioInner} />}
                    </View>
                    <Text style={styles.sortOptionText}>{option}</Text>
                  </View>
                </TouchableOpacity>
              ))}
            </ScrollView>
          </View>
        </View>
      </Modal>
      
      
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#f8f8f8',
  },
  header: {
    paddingHorizontal: 16,
    paddingTop: 40,
    paddingBottom: 10,
    backgroundColor: '#ffffff',
    borderBottomWidth: 1,
    borderBottomColor: '#eeeeee',
  },
  filterContainer: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
  },
  filterButton: {
    flexDirection: 'row',
    alignItems: 'center',
    paddingVertical: 8,
  },
  filterText: {
    marginLeft: 8,
    marginRight: 4,
    color: '#333',
    fontSize: 16,
    fontWeight: '500',
  },
  sortButton: {
    flexDirection: 'row',
    alignItems: 'center',
    paddingVertical: 8,
  },
  sortText: {
    marginLeft: 8,
    marginRight: 4,
    color: '#333',
    fontSize: 16,
    fontWeight: '500',
  },
  modalOverlay: {
    flex: 1,
    backgroundColor: 'rgba(0, 0, 0, 0.3)',
  },
  modalContainer: {
    backgroundColor: 'white',
    marginTop: 'auto',
    width: '100%',
    height: '60%',
    borderTopLeftRadius: 20,
    borderTopRightRadius: 20,
  },
  modalHeader: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    padding: 16,
    borderBottomWidth: 1,
    borderBottomColor: '#eeeeee',
  },
  modalTitle: {
    fontSize: 18,
    fontWeight: 'bold',
    color: '#333',
    textAlign: 'center',
  },
  doneButton: {
    fontSize: 16,
    color: '#007AFF',
    fontWeight: '500',
  },
  sortOptions: {
    flex: 1,
    paddingHorizontal: 16,
  },
  sortOption: {
    paddingVertical: 16,
    borderBottomWidth: 1,
    borderBottomColor: '#eeeeee',
  },
  radioContainer: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  radioOuter: {
    height: 22,
    width: 22,
    borderRadius: 11,
    borderWidth: 2,
    borderColor: '#debc8e',
    alignItems: 'center',
    justifyContent: 'center',
    marginRight: 10,
  },
  radioInner: {
    height: 12,
    width: 12,
    borderRadius: 6,
    backgroundColor: '#debc8e',
  },
  sortOptionText: {
    fontSize: 16,
    color: '#333',
  },
  content: {
    flex: 1,
    padding: 16,
  },
  contentItem: {
    backgroundColor: 'white',
    padding: 16,
    borderRadius: 8,
    marginBottom: 12,
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 1 },
    shadowOpacity: 0.1,
    shadowRadius: 2,
    elevation: 1,
  },
  contentText: {
    fontSize: 16,
  }
});

export default SearchResultsScreen;
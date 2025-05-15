import React from 'react';
import { View, Text, TouchableOpacity, StyleSheet } from 'react-native';
import { Ionicons } from '@expo/vector-icons';

interface FilterHeaderProps {
  title: string;
  onBackPress: () => void;
  onResetPress?: () => void;
  showCart?: boolean;
}

const FilterHeader: React.FC<FilterHeaderProps> = ({ 
  title, 
  onBackPress, 
  onResetPress, 
  showCart = true 
}) => {
  return (
    <View style={styles.headerContainer}>
      <TouchableOpacity onPress={onBackPress} style={styles.backButton}>
        <Ionicons name="arrow-back" size={24} color="black" />
      </TouchableOpacity>
      <Text style={styles.headerTitle}>{title}</Text>
      <View style={styles.rightIcons}>
        {title === 'Filter' && (
          <TouchableOpacity onPress={onResetPress} style={styles.resetButton}>
            <Text style={styles.resetText}>Reset</Text>
          </TouchableOpacity>
        )}
        {showCart && (
          <TouchableOpacity style={styles.cartButton}>
            <Ionicons name="cart-outline" size={24} color="black" />
          </TouchableOpacity>
        )}
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  headerContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    paddingHorizontal: 16,
    paddingVertical: 12,
    borderBottomWidth: 1,
    borderBottomColor: '#eee',
    backgroundColor: 'white',
    paddingTop: 60
  },
  backButton: {
    padding: 4,
  },
  headerTitle: {
    flex: 1,
    fontSize: 18,
    fontWeight: '500',
    marginLeft: 16,
  },
  rightIcons: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  resetButton: {
    marginRight: 16,
  },
  resetText: {
    color: '#333',
    fontSize: 16,
  },
  cartButton: {
    padding: 4,
  },
});

export default FilterHeader;
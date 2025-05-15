import { View, Text, TouchableOpacity, Image } from 'react-native';
import React from 'react';
import { MaterialIcons } from '@expo/vector-icons';
import ProductsSlider2 from '../ProductCategories2/ProductCategories2';
import { router } from 'expo-router';

export default function Categories() {
  return (
    <View style={{ backgroundColor: "#f9f9f9", paddingHorizontal: 15 }}>
      {/* Products Slider Section */}
      <View>
        <ProductsSlider2 />
      </View>
    </View>
  );
}

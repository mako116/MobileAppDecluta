import React from 'react';
import { useLocalSearchParams } from 'expo-router';
import { View, Text, Image, StyleSheet, TouchableOpacity, ScrollView } from 'react-native';

const ProductDetails = () => {
  const { name, imageUrl, title, locations } = useLocalSearchParams();

  return (
    <ScrollView contentContainerStyle={styles.container}>
      {/* Product Image */}
      <View style={styles.imageContainer}>
        <Image source={imageUrl } style={styles.productImage} resizeMode="cover" />
      </View>

      {/* Product Details */}
      <View style={styles.detailsContainer}>
        <Text style={styles.productName}>{name}</Text>
        <Text style={styles.productPrice}>{title}</Text>
        <Text style={styles.productLocation}>Location: {locations}</Text>
      </View>

      {/* Additional Details Section */}
      <View style={styles.additionalInfoContainer}>
        <Text style={styles.sectionTitle}>Product Details</Text>
        <Text style={styles.additionalInfoText}>
          This is a high-quality product available at an affordable price. Ideal for users who value reliability and performance.
        </Text>
      </View>

      {/* Call to Action */}
      <TouchableOpacity style={styles.ctaButton}>
        <Text style={styles.ctaButtonText}>Contact Seller</Text>
      </TouchableOpacity>
    </ScrollView>
  );
};

const styles = StyleSheet.create({
  container: {
    flexGrow: 1,
    backgroundColor: '#f9f9f9',
    paddingVertical: 45,
    paddingHorizontal:20,
    height:"100%"
  },
  imageContainer: {
    width: '100%',
    height: 300,
    marginBottom: 20,
    borderRadius: 10,
    overflow: 'hidden',
  },
  productImage: {
    width: '100%',
    height: '100%',
  },
  detailsContainer: {
    backgroundColor: '#fff',
    padding: 15,
    borderRadius: 10,
    marginBottom: 20,
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.1,
    shadowRadius: 4,
    elevation: 5,
  },
  productName: {
    fontSize: 22,
    fontWeight: 'bold',
    color: '#333',
    marginBottom: 10,
  },
  productPrice: {
    fontSize: 18,
    color: '#212121',
    marginBottom: 10,
  },
  productLocation: {
    fontSize: 16,
    color: '#888',
  },
  additionalInfoContainer: {
    marginTop: 20,
    marginBottom: 20,
    padding: 15,
    backgroundColor: '#fff',
    borderRadius: 10,
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.1,
    shadowRadius: 4,
    elevation: 5,
  },
  sectionTitle: {
    fontSize: 18,
    fontWeight: 'bold',
    marginBottom: 10,
    color: '#333',
  },
  additionalInfoText: {
    fontSize: 16,
    color: '#555',
    lineHeight: 22,
  },
  ctaButton: {
    backgroundColor: '#DEBC8E',
    padding: 15,
    borderRadius: 10,
    alignItems: 'center',
    marginTop: 20,
  },
  ctaButtonText: {
    fontSize: 18,
    color: '#fff',
    fontWeight: 'bold',
  },
});

export default ProductDetails;

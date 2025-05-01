import React, { useState } from 'react';
import { 
  StyleSheet, 
  View, 
  Text, 
  Image, 
  ScrollView, 
  TouchableOpacity, 
  SafeAreaView, 
  StatusBar,
  Dimensions
} from 'react-native';
import { Ionicons, MaterialIcons } from '@expo/vector-icons';
import ItemHeader from '@/UI/Header/ItemHeader';



const productImages = [
  'https://i.pinimg.com/736x/16/6d/bf/166dbfe7b442d32475013a1b5c118277.jpg', 
  'https://i.pinimg.com/736x/ed/ba/84/edba8455fd583dd853a00f7759db1d45.jpg', 
  'https://i.pinimg.com/736x/cb/66/b3/cb66b3c9ef8e8452e9c6f79e4273e543.jpg', 
  'https://i.pinimg.com/736x/73/cf/60/73cf601af22f0af2dab89be37227357e.jpg',
  'https://i.pinimg.com/736x/4f/eb/d2/4febd21db2673f23b5a27be306ef3575.jpg', 
  'https://i.pinimg.com/736x/50/79/50/5079501e79a7d7720645f77a0d2c47c0.jpg', 
];

export default function PreviewItemProduct() {

  const [selectedImage, setSelectedImage] = useState(0);


  const handleSelectImage = (index) => {
    setSelectedImage(index);
  };

  return (
    <SafeAreaView style={styles.container}>
      <StatusBar barStyle="dark-content" backgroundColor="#fff" />
      <ItemHeader title='Item Preview' />
      
      <ScrollView style={styles.scrollView}>
        {/* Main Product Image  */}
        <View style={styles.mainImageContainer}>
          <Image 
            source={{ uri: productImages[selectedImage] }}
            style={styles.mainImage}
            resizeMode="contain"
          />
        </View>
        
        {/* Thumbnail Images */}
        <ScrollView 
          horizontal 
          showsHorizontalScrollIndicator={false}
          style={styles.thumbnailScrollView}
        >
          {productImages.map((image, index) => (
            <TouchableOpacity 
              key={index}
              style={[
                styles.thumbnailContainer,
                selectedImage === index && styles.selectedThumbnail
              ]}
              onPress={() => handleSelectImage(index)}
            >
              <Image
                source={{ uri: image }}
                style={styles.thumbnailImage}
                resizeMode="contain"
              />
            </TouchableOpacity>
          ))}
        </ScrollView>
        
        {/* Product Info */}
        <View style={styles.productInfoContainer}>
          <Text style={styles.productTitle}>Samsung Galaxy A05 6.7 
            4GB/8GB ROM ANDROID 13</Text>
          
          <View style={styles.locationContainer}>
            <MaterialIcons name="location-on" size={16} color="#888" />
            <Text style={styles.locationText}>Challenge, Ibadan, Oyo state</Text>
          </View>
          
          <View style={styles.priceContainer}>
            <Text style={styles.oldPriceText}>₦ 399,000</Text>
            <Text style={styles.currentPriceText}>₦ 390,000</Text>
          </View>
          
          {/* About Item Section */}
          <View style={styles.aboutItemContainer}>
            <Text style={styles.sectionTitle}>About this item</Text>
            <View style={{backgroundColor:'white', padding:12, borderRadius:8, marginBottom:16, borderWidth:0.3, borderColor:'#ddd'}}>
            
            <View style={styles.infoRow}>
              <Text style={styles.infoLabel}>Condition</Text>
              <Text style={styles.infoValue}>Used</Text>
            </View>
            
            <View style={styles.infoRow}>
              <Text style={styles.infoLabel}>Item Number</Text>
              <Text style={styles.infoValue}>123456585858</Text>
            </View>
            
            <View style={styles.infoRow}>
              <Text style={styles.infoLabel}>Category</Text>
              <Text style={styles.infoValue}>Mobile Phones</Text>
            </View>
            
            <View style={styles.infoRow}>
              <Text style={styles.infoLabel}>Sub-category</Text>
              <Text style={styles.infoValue}>Samsung</Text>
            </View>
            </View>
            
            {/* Item Description */}
            <View style={styles.descriptionContainer}>
              <Text style={styles.sectionTitle}>Item description from the seller</Text>
              <View style={{backgroundColor:'white', padding:12, borderRadius:8, marginBottom:16, borderWidth:0.3, borderColor:'#ddd'}}>

              <Text style={styles.descriptionText}>
                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aliquam fermentum felis at amet tortor pharetra commodo. Praesent eleifend diam ut est faucibus volutpat.
              </Text>
              <TouchableOpacity>
                <Text style={styles.seeMoreText}>See full description</Text>
              </TouchableOpacity>
              </View>
            </View>
          </View>
        </View>
      </ScrollView>
      
      {/* Bottom Action Buttons */}
      <View style={styles.bottomActions}>
        <TouchableOpacity style={styles.backButton}>
          <Text style={styles.backButtonText}>Back</Text>
        </TouchableOpacity>
        <TouchableOpacity style={styles.editButton}>
          <Text style={styles.editButtonText}>Edit</Text>
        </TouchableOpacity>
      </View>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#f9f9f9',
  },
  header: {
    flexDirection: 'row',
    alignItems: 'center',
    paddingHorizontal: 16,
    paddingVertical: 10,
    borderBottomWidth: 1,
    borderBottomColor: '#eee',
  },
  backButton: {
    padding: 5,
  },
  headerTitle: {
    fontSize: 16,
    fontWeight: '500',
    marginLeft: 10,
  },
  scrollView: {
    flex: 1,
    backgroundColor: '#f9f9f9',
  },
  mainImageContainer: {
    width: '100%',
    height: 300,
    backgroundColor: '#fff',
    justifyContent: 'center',
    alignItems: 'center',
    borderBottomWidth: 1,
    borderBottomColor: '#eee',
  },
  mainImage: {
    width: '80%',
    height: '80%',
  },
  thumbnailScrollView: {
    flexDirection: 'row',
    paddingVertical: 10,
    borderBottomWidth: 1,
    borderBottomColor: '#eee',
    backgroundColor: '#fff',
  },
  thumbnailContainer: {
    width: 70,
    height: 70,
    marginHorizontal: 5,
    alignItems: 'center',
    justifyContent: 'center',
    borderWidth: 1,
    borderColor: '#ddd',
    borderRadius: 4,
    overflow: 'hidden',
  },
  // New style for selected thumbnail
  selectedThumbnail: {
    borderColor: '#f0d6b1',
    borderWidth: 2,
  },
  thumbnailImage: {
    width: '100%',
    height: '100%',
  },
  productInfoContainer: {
    padding: 16,
  },
  productTitle: {
    fontSize: 24,
    fontWeight: 'bold',
    marginBottom: 8,
    lineHeight: 33,
  },
  locationContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    marginBottom: 10,
  },
  locationText: {
    fontSize: 14,
    color: '#888',
    marginLeft: 4,
  },
  priceContainer: {
    marginBottom: 16,
  },
  oldPriceText: {
    fontSize: 24,
    color: '#888',
    fontWeight: 'bold',
    textDecorationLine: 'line-through',
    marginBottom: 4,
  },
  currentPriceText: {
    fontSize: 24,
    fontWeight: 'bold',
    color: '#000',
  },
  aboutItemContainer: {
    marginTop: 1,
  },
  sectionTitle: {
    fontSize: 16,
    fontWeight: 'bold',
    marginBottom: 12,
  },
  infoRow: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    paddingVertical: 10,
  },
  infoLabel: {
    fontSize: 14,
    color: '#666',
  },
  infoValue: {
    fontSize: 14,
    fontWeight: 'bold',
  },
  descriptionContainer: {
    marginTop: 20,
  },
  descriptionText: {
    fontSize: 14,
    color: '#666',
    lineHeight: 20,
  },
  seeMoreText: {
    color: '#000',
    marginTop: 8,
    fontSize: 14,
    fontWeight: 'bold',
    textDecorationLine: 'underline',
  },
  bottomActions: {
    flexDirection: 'row',
    borderTopWidth: 1,
    borderTopColor: '#eee',
    backgroundColor: '#fff',
    paddingVertical: 10,
    paddingHorizontal: 16,
    justifyContent: 'space-between',
    alignItems: 'center',
  },
  backButton: {
    flex: 1,
    paddingVertical: 16,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#f9f9f9',
    borderRadius: 4,
    marginRight: 8,
    borderWidth: 1,
  },
  backButtonText: {
    fontSize: 16,
    color: '#333',
  },
  editButton: {
    flex: 1,
    paddingVertical: 16,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#f0d6b1',
    borderRadius: 4,
  },
  editButtonText: {
    fontSize: 16,
    color: '#333',
  },
});
import React from 'react';
import { 
  StyleSheet, 
  View, 
  Text, 
  Image, 
  ScrollView, 
  TouchableOpacity, 
  SafeAreaView, 
  StatusBar
} from 'react-native';
import { Ionicons, MaterialIcons } from '@expo/vector-icons';
import ItemHeader from '@/UI/Header/ItemHeader';

const EditItemProduct = () => {

  const SectionHeader = ({ title, hasEdit = true }) => (
    <View style={styles.sectionHeader}>
      <Text style={styles.sectionTitle}>{title}</Text>
      {hasEdit && (
        <TouchableOpacity>
          <Text style={styles.editText}>Edit</Text>
        </TouchableOpacity>
      )}
    </View>
  );

  const DetailSection = ({ title, content, hasEdit = true }) => (
    <View style={styles.detailSection}>
      <SectionHeader title={title} hasEdit={hasEdit} />
      <Text style={styles.detailContent}>{content}</Text>
    </View>
  );

  // Product images array for the media gallery
  const productImages = [
    'https://i.pinimg.com/736x/16/6d/bf/166dbfe7b442d32475013a1b5c118277.jpg', 
    'https://i.pinimg.com/736x/ed/ba/84/edba8455fd583dd853a00f7759db1d45.jpg', 
    'https://i.pinimg.com/736x/cb/66/b3/cb66b3c9ef8e8452e9c6f79e4273e543.jpg', 
    'https://i.pinimg.com/736x/73/cf/60/73cf601af22f0af2dab89be37227357e.jpg',
  ];

  return (
    <SafeAreaView style={styles.container}>
      <StatusBar barStyle="dark-content" backgroundColor="#fff" />
  
      <ItemHeader title='Edit Item'/>
      
      <ScrollView style={styles.scrollView}>
   
        <View style={styles.mediaSection}>
          <SectionHeader title="Item Media" />
          <View style={styles.mediaGallery}>
         
            <Image 
              source={{ uri: productImages[0] }}
              style={styles.mediaImage}
              resizeMode="cover"
            />
            <Image 
              source={{ uri: productImages[1] }}
              style={styles.mediaImage}
              resizeMode="cover"
            />
            <Image 
              source={{ uri: productImages[2] }}
              style={styles.mediaImage}
              resizeMode="cover"
            />
            
            {/* Last visible image with +6 overlay */}
            <View style={styles.mediaImageContainer}>
              <Image 
                source={{ uri: productImages[3] }}
                style={styles.mediaImage}
                resizeMode="cover"
              />
              <View style={styles.overlayContainer}>
                <Text style={styles.overlayText}>+6</Text>
              </View>
            </View>
          </View>
        </View>
        
        {/* Title Section */}
        <DetailSection 
          title="Title"
          content="Samsung Galaxy A05 6.7 4GB RAM/64GB ROM ANDROID 13"
        />
        
        {/* Description Section */}
        <View style={styles.detailSection}>
          <SectionHeader title="Description" />
          <Text style={styles.detailContent}>
            For sale is my used Samsung Galaxy A05 with a 6.7" display, 4GB RAM, and 64GB ROM, running on Android 13.
          </Text>
          <Text style={styles.detailContent}>
            This phone has been well-maintained and is in good condition, with minor signs of wear on the exterior. The screen is scratch-free and the battery life is still strong.
          </Text>
          <Text style={styles.detailContent}>
            I'm upgrading to a new device, so I'm letting this reliable phone go to a new home. Includes original charger and cable. No other accessories included.
          </Text>
        </View>
        
        {/* Availability Section */}
        <DetailSection 
          title="Availability"
          content="List as single item"
        />
        
        {/* Condition Section */}
        <DetailSection 
          title="Condition"
          content="Used like new"
        />
        
        {/* Category Section */}
        <DetailSection 
          title="Category"
          content="Phones & Tablets - Smartphones"
        />
        
        {/* Location Section */}
        <DetailSection 
          title="Location"
          content="Ibadan Southwest, Ibadan, Oyo State"
        />
        
        {/* Price Section */}
        <View style={styles.detailSection}>
          <SectionHeader title="Price" />
          <View style={styles.priceItem}>
            <Text style={styles.priceLabel}>Sale Price</Text>
            <Text style={styles.priceValue}>₦ 390,000</Text>
          </View>
          <View style={styles.priceItem}>
            <Text style={styles.priceLabel}>Discount Price</Text>
            <Text style={styles.priceValue}>₦ 290,000</Text>
          </View>
        </View>
        
        {/* Service Fee Section */}
        <View style={styles.detailSection}>
          <SectionHeader title="Service Fee" />

          <View style={styles.serviceFeeInfo}>
            <Text style={styles.serviceFeeText}>We take 10% commission on sold items.</Text>
            <TouchableOpacity style={styles.infoIcon}>
              <Ionicons name="information-circle-outline" size={20} color="#888" />
            </TouchableOpacity>
          </View>
          <View style={styles.feeSummaryContainer}>
            <View style={styles.feeContainer}>
              <Text style={styles.feeTitle}>10% DecuttaKing Service Fee</Text>
              <Text style={styles.feeAmount}>₦ 29,000.00</Text>
            </View>
            
            <View style={styles.receiveContainer}>
              <Text style={styles.receiveTitle}>You'll Receive</Text>
              <Text style={styles.receiveSubtitle}>Your estimated payment after our service fee.</Text>
              <Text style={styles.receiveAmount}>₦ 261,000.00</Text>
            </View>
          </View>
        </View>
      </ScrollView>
      
      {/* Bottom Action Buttons */}
      <View style={styles.bottomActions}>
        <TouchableOpacity style={styles.backActionButton}>
          <Text style={styles.backActionButtonText}>Back</Text>
        </TouchableOpacity>
        <TouchableOpacity style={styles.publishButton}>
          <Text style={styles.publishButtonText}>Publish</Text>
        </TouchableOpacity>
      </View>
    </SafeAreaView>
  );
};

export default EditItemProduct;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#f9f9f9',
  },
  scrollView: {
    flex: 1,
  },
  mediaSection: {

    padding: 16,
    marginBottom: 8,
  },
  sectionHeader: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    marginBottom: 10,
  },
  sectionTitle: {
    fontSize: 16,
    fontWeight: 'bold',
  },
  editText: {
    fontSize: 14,
    fontWeight: 'bold',
    color: 'gray',
  },
  mediaGallery: {
    flexDirection: 'row',
    flexWrap: 'wrap',
    justifyContent: 'space-between',
  },
  mediaImage: {
    width: 80,
    height: 80,
    marginBottom: 10,
    borderRadius: 8,
  },
  mediaImageContainer: {
    position: 'relative',
    width: 80,
    height: 80,
    marginBottom: 10,
  },
  overlayContainer: {
    position: 'absolute',
    top: 0,
    left: 0,
    right: 0,
    bottom: 0,
    backgroundColor: 'rgba(0, 0, 0, 0.4)',
    justifyContent: 'center',
    alignItems: 'center',
    borderRadius: 8,
  },
  overlayText: {
    color: 'white',
    fontSize: 18,
    fontWeight: 'bold',
  },
  detailSection: {

    paddingHorizontal: 16,
    paddingVertical: 8,
    // marginBottom: 8,
  },
  detailContent: {
    fontSize: 14,
    color: '#333',
    marginBottom: 8,
    lineHeight: 20,
  },
  priceItem: {

    paddingVertical: 8,
  },
  priceLabel: {
    fontSize: 14,
    color: '#666',
  },
  priceValue: {
    fontSize: 14,
    fontWeight: '500',
  },
  serviceFeeInfo: {
    flexDirection: 'row',
    alignItems: 'center',
    marginBottom: 16,
  },
  serviceFeeText: {
    fontSize: 14,
    color: '#666',
    marginRight: 5,
  },
  infoIcon: {
    padding: 2,
  },
  feeSummaryContainer: {
    borderWidth: 1,
    borderColor: '#ddd',
    padding: 12,
    borderRadius: 8,
    marginBottom: 16,
  },
  feeContainer: {
    marginBottom: 12,
  },
  feeTitle: {
    fontSize: 14,
    fontWeight: '500',
    marginBottom: 4,
  },
  feeAmount: {
    fontSize: 14,
    fontWeight: '500',
  },
  receiveContainer: {
    marginTop: 16,
  },
  receiveTitle: {
    fontSize: 16,
    fontWeight: '500',
    marginBottom: 4,
  },
  receiveSubtitle: {
    fontSize: 14,
    color: '#666',
    marginBottom: 8,
  },
  receiveAmount: {
    fontSize: 16,
    fontWeight: 'bold',
  },
  bottomActions: {
    flexDirection: 'row',
    borderTopWidth: 1,
    borderTopColor: '#eee',
    backgroundColor: '#fff',
  },
  backActionButton: {
    flex: 1,
    paddingVertical: 16,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#fff',
    borderWidth: 1,
    borderColor: '#ddd',
    marginHorizontal: 16,
    marginVertical: 16,
    borderRadius: 4,
  },
  backActionButtonText: {
    fontSize: 16,
    color: '#333',
  },
  publishButton: {
    flex: 1,
    paddingVertical: 16,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#f0d6b1',
    marginHorizontal: 16,
    marginVertical: 16,
    borderRadius: 4,
  },
  publishButtonText: {
    fontSize: 16,
    color: '#333',
  },
});
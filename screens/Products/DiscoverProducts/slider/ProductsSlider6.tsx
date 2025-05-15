import React, { useState } from 'react';
import { View, Text, Image, TouchableOpacity, FlatList, StyleSheet } from 'react-native';
import { MaterialIcons, MaterialCommunityIcons, Ionicons } from '@expo/vector-icons';

export default function MarketplaceListings() {
  const [products, setProducts] = useState([
    {
      id: 1,
      name: "Samsung Galaxy A05 6.7...",
      price: "300,000.00",
      originalPrice: "390,000.00",
      location: "Challenge, Ibadan",
      postedBy: "Segun A.",
      timeAgo: "3d ago",
      itemsLeft: 1,
      image: "https://i.pinimg.com/474x/58/a2/7f/58a27f6998b58cb4e47cfac4efdb41fa.jpg", 
      hasVideo: true,
      type: "P2P"
    },
    {
      id: 2,
      name: "LG Home Theatre 100w",
      price: "180,000.00",
      location: "Agodi Gate, Ibadan",
      postedBy: "Anuoluwapo O.",
      timeAgo: "Just now",
      itemsLeft: 5,
      image: "https://i.pinimg.com/474x/d7/ff/e4/d7ffe42811a7a0e202c2d5019cab5543.jpg",
      hasVideo: true,
      type: "P2P"
    },
    {
      id: 3,
      name: "Single Seater Chair",
      price: "25,000.00",
      location: "UI, Ibadan",
      postedBy: "Oluwabukola C.",
      timeAgo: "3d ago",
      itemsLeft: 1,
      image: "https://i.pinimg.com/474x/25/84/b9/2584b98cf8bcd0e8f7dd4e673684d000.jpg",
      type: "P2P"
    }
  ]);

  const renderItem = ({ item }) => (
    <View style={styles.productCard}>
      {/* P2P Badge positioned at the top level of the card */}
      <View style={styles.p2pBadge}>
        <Text style={styles.p2pText}>{item.type}</Text>
      </View>
      
      {/* Left side container with image and social buttons */}
      <View style={styles.leftContainer}>
        <View style={styles.imageContainer}>
          <Image 
            source={{ uri: item.image }} 
            style={styles.productImage}
          />
          {item.hasVideo && (
            <View style={styles.playButton}>
              <MaterialIcons name="play-arrow" size={14} color="white" />
            </View>
          )}
        </View>
        
        {/* Social actions */}
        <View style={styles.socialActions}>
          <TouchableOpacity style={styles.socialButton}>
            <View style={styles.badge}>
              <Text style={styles.badgeText}>2</Text>
            </View>
            <MaterialCommunityIcons name="message-outline" size={20} color="#666" />
          </TouchableOpacity>
          <TouchableOpacity style={styles.socialButton}>
            <Ionicons name="share-social-outline" size={20} color="#666" />
          </TouchableOpacity>
        </View>
      </View>
      
      {/* Main content details */}
      <View style={styles.mainContent}>
        <View style={styles.contentContainer}>
     
          <View style={styles.timeAgoBadge}>
            <Text style={styles.timeAgoText}>Posted {item.timeAgo}</Text>
          </View>
          
          <Text style={styles.productName} numberOfLines={1}>{item.name}</Text>
          
          <View style={styles.priceContainer}>
            {item.originalPrice && (
              <Text style={styles.originalPrice}>₦ {item.originalPrice}</Text>
            )}
            <Text style={styles.price}>₦ {item.price}</Text>
          </View>
          
          <View style={styles.stockInfo}>
            <Text style={styles.itemsLeft}>{item.itemsLeft} Item{item.itemsLeft > 1 ? 's' : ''} left</Text>
            <View style={styles.stockBarContainer}>
              <View style={[styles.stockBar, {width: item.itemsLeft > 3 ? '50%' : '20%'}]}></View>
            </View>
          </View>
          
          <View style={styles.locationContainer}>
            <Ionicons name="location-outline" size={14} color="#666" />
            <Text style={styles.location}>{item.location}</Text>
          </View>
          
          <View style={styles.posterInfo}>
            <View style={styles.posterIconContainer}>
              <View style={styles.avatarContainer}>
                <Text style={styles.avatarText}>{item.postedBy.charAt(0)}</Text>
              </View>
            </View>
            <Text style={styles.postedBy}>Posted by {item.postedBy}</Text>
          </View>
        </View>
        
        <TouchableOpacity style={styles.chevronButton}>
          <MaterialIcons name="chevron-right" size={22} color="#000" />
        </TouchableOpacity>
      </View>
    </View>
  );

  return (
    <View style={styles.container}>
      <FlatList
        data={products}
        renderItem={renderItem}
        keyExtractor={item => item.id.toString()}
        contentContainerStyle={styles.listContainer}
      />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,

  },
  listContainer: {
    paddingVertical: 10,

  },
  productCard: {
    backgroundColor: 'white',
    borderRadius: 10,
    marginBottom: 12,
    overflow: 'hidden',
    flexDirection: 'row',
    position: 'relative',
    borderColor: '#e0e0e0',
    borderWidth: 1,
    marginHorizontal: 10
  },
  p2pBadge: {
    position: 'absolute',
    // top: 1,
    left: 0,
    backgroundColor: 'white',
    paddingHorizontal: 12,
    paddingVertical: 4,
    borderTopLeftRadius: 10,
    zIndex: 10,
    elevation: 1,
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 1 },
    shadowOpacity: 0.1,
    shadowRadius: 1,
  },
  p2pText: {
    fontSize: 10,
    fontFamily:"HelveticaNeueBold",  
    color: '#000',
  },
  leftContainer: {
    width: 100,
    alignItems: 'center',
    justifyContent: 'space-between',
    paddingVertical: 10,
    backgroundColor: '#f5f5f5',
    borderTopLeftRadius: 10,
    borderBottomLeftRadius: 10,
    paddingTop: 30
  },
  imageContainer: {
    width: 75,
    height: 75,
    borderRadius: 4,
    overflow: 'hidden',
    position: 'relative',
  },
  productImage: {
    width: '100%',
    height: '100%',
    resizeMode: 'cover',
  },
  playButton: {
    position: 'absolute',
    width: 24,
    height: 24,
    borderRadius: 12,
    backgroundColor: 'rgba(0,0,0,0.5)',
    justifyContent: 'center',
    alignItems: 'center',
    bottom: 4,
    left: 4,
  },
  socialActions: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    width: '100%',
    paddingHorizontal: 12,
    paddingVertical: 8,
    marginTop: 'auto',
  },
  socialButton: {
    position: 'relative',
    padding: 4,
  },
  badge: {
    position: 'absolute',
    top: -4,
    right: -4,
    backgroundColor: '#e54',
    width: 16,
    height: 16,
    borderRadius: 8,
    justifyContent: 'center',
    alignItems: 'center',
    zIndex: 1,
  },
  badgeText: {
    color: 'white',
    fontSize: 10,
    fontFamily: 'HelveticaNeueBold',
  },
  mainContent: {
    flex: 1,
    justifyContent: 'space-between',
    flexDirection: 'row',
    paddingVertical: 10,
    paddingHorizontal: 12,
    backgroundColor: 'white',
    width: '100%',
  },
  contentContainer: {
    flex: 1,
  },
  timeAgoBadge: {
    backgroundColor: '#f5f5f5',
    paddingHorizontal: 8,
    paddingVertical: 8,
    borderRadius: 5,
    marginBottom: 6,
    alignSelf: 'flex-end',
    marginRight: -32, 
  },
  timeAgoText: {
    fontSize: 10,
    color: '#666',
    fontFamily:"ProximaNovaR",  
  },
  productName: {
    fontSize: 16,
    fontFamily:"HelveticaNeueBold",  
    marginBottom: 4,
    color: '#333',
  },
  priceContainer: {
    flexDirection: 'row',
    marginBottom: 6,
  },
  originalPrice: {
    fontSize: 14,
    color: '#999',
    textDecorationLine: 'line-through',
    marginRight: 6,
    fontFamily:"HelveticaNeueBold",  
  },
  price: {
    fontSize: 16,
    fontWeight: '600',
    color: '#d4a456',
    fontFamily:"HelveticaNeueBold",  
  },
  stockInfo: {
    marginBottom: 6,
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
  },
  stockInfoTextContainer: {
    flex: 0.5,
  },
  itemsLeft: {
    fontSize: 12,
    color: '#666',
    fontFamily:"ProximaNovaR",
  },
  stockBarContainer: {
    height: 4,
    backgroundColor: '#eee',
    borderRadius: 2,
    overflow: 'hidden',
    flex: 1,
    marginLeft: 8,
  },
  stockBar: {
    height: '100%',
    backgroundColor: '#e54',
    borderRadius: 2,
  },
  locationContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    marginBottom: 6,
  },
  location: {
    fontSize: 12,
    color: '#666',
    marginLeft: 4,
    fontFamily:"ProximaNovaR",
  },
  posterInfo: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  posterIconContainer: {
    marginRight: 6,
  },
  avatarContainer: {
    width: 20,
    height: 20,
    borderRadius: 10,
    backgroundColor: '#d4a456',
    justifyContent: 'center',
    alignItems: 'center',
  },
  avatarText: {
    color: 'white',
    fontSize: 10,
    fontFamily:"ProximaNovaR",  
  },
  postedBy: {
    fontSize: 12,
    color: '#666',
    fontFamily:"ProximaNovaR",
  },
  chevronButton: {
    justifyContent: 'center',
    backgroundColor: '#f0d8b0',
    width: 32,
    height: 32,
    borderRadius: 4,
    alignItems: 'center',
    alignSelf: 'flex-end',
  },
});
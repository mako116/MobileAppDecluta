import { View, Text, Image, StyleSheet, ImageSourcePropType, TouchableOpacity } from 'react-native';
import React from 'react';
import LocationIcons from '../../icons';
import { Ionicons, MaterialCommunityIcons, MaterialIcons } from '@expo/vector-icons';
import { router } from 'expo-router';

interface CategoryProps {
  imageUrl: string;
  name: string;
  price: string;
  originalPrice?: string;
  location: string;
  itemsLeft: number;
  postedBy: string;
  hasVideo?: boolean;
  type: string;
  timeAgo: string;
  onPress?: () => void;
}

export default function SlidLingCategory({ imageUrl, name, price, originalPrice, location, timeAgo, hasVideo, type, itemsLeft, postedBy, onPress }: CategoryProps) {
  return (
    <View style={styles.productCard}>
      <View style={styles.p2pBadge}>
        <Text style={styles.p2pText}>{type}</Text>
      </View>
      
      {/* Left side container with image and social buttons */}
      <View style={styles.leftContainer}>
        <View style={styles.imageContainer}>
          <Image 
            source={{uri: imageUrl}} 
            style={styles.productImage}
          />
          {hasVideo && (
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
            <Text style={styles.timeAgoText}>Posted {timeAgo}</Text>
          </View>
          
          <Text style={styles.productName} numberOfLines={1}>{name}</Text>
          
          <View style={styles.priceContainer}>
            {originalPrice && (
              <Text style={styles.originalPrice}>₦ {originalPrice}</Text>
            )}
            <Text style={styles.price}>₦ {price}</Text>
          </View>
          
          <View style={styles.stockInfo}>
            <Text style={styles.itemsLeft}>{itemsLeft} Item{itemsLeft > 1 ? 's' : ''} left</Text>
            <View style={styles.stockBarContainer}>
              <View style={[styles.stockBar, {width: itemsLeft > 3 ? '50%' : '20%'}]}></View>
            </View>
          </View>
          
          <View style={styles.locationContainer}>
            <Ionicons name="location-outline" size={14} color="#666" />
            <Text style={styles.location}>{location}</Text>
          </View>
          
          <View style={styles.posterInfo}>
            <View style={styles.posterIconContainer}>
              <View style={styles.avatarContainer}>
                <Text style={styles.avatarText}>{postedBy}</Text>
              </View>
            </View>
            <Text style={styles.postedBy}>Posted by {postedBy}</Text>
          </View>
        </View>
        
        <TouchableOpacity 
          onPress={onPress}
          style={styles.chevronButton}>
          <MaterialIcons name="chevron-right" size={22} color="#d4a456" />
        </TouchableOpacity>
        
      </View>
    </View>
  );
}
const styles = StyleSheet.create({
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
    top: 10,
    left: 10,
    backgroundColor: 'white',
    paddingHorizontal: 6,
    paddingVertical: 2,
    borderRadius: 4,
    zIndex: 10,
    elevation: 1,
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 1 },
    shadowOpacity: 0.1,
    shadowRadius: 1,
  },
  p2pText: {
    fontSize: 10,
    fontWeight: '600',
    color: '#333',
  },
  leftContainer: {
    width: 100,
    alignItems: 'center',
    justifyContent: 'space-between',
    paddingVertical: 10,
    backgroundColor: '#f5f5f5',
    borderTopLeftRadius: 10,
    borderBottomLeftRadius: 10,
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
    fontWeight: 'bold',
  },
  mainContent: {
    flex: 1,
    justifyContent: 'space-between',
    flexDirection: 'row',
    paddingVertical: 10,
    paddingHorizontal: 12,
    backgroundColor: 'white',
  },
  contentContainer: {
    flex: 1,
  
  },
  timeAgoBadge: {
    alignSelf: 'flex-end',
    backgroundColor: '#f5f5f5',
    paddingHorizontal: 8,
    paddingVertical: 4,
    borderRadius: 10,
    marginBottom: 4,
    alignItems: 'center',
  
  },
  timeAgoText: {
    fontSize: 10,
    color: '#666',
  },
  productName: {
    fontSize: 16,
    fontWeight: '500',
    marginBottom: 4,
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
  },
  price: {
    fontSize: 16,
    fontWeight: '600',
    color: '#d4a456',
  },
  stockInfo: {
    marginBottom: 6,
  },
  itemsLeft: {
    fontSize: 12,
    color: '#666',
    marginBottom: 2,
  },
  stockBarContainer: {
    height: 4,
    backgroundColor: '#eee',
    borderRadius: 2,
    overflow: 'hidden',
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
    fontWeight: '500',
  },
  postedBy: {
    fontSize: 12,
    color: '#666',
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

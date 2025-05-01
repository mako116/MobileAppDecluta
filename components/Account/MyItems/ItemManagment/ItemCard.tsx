import React from 'react';
import { StyleSheet, View, Text, Image, TouchableOpacity } from 'react-native';
import { Ionicons } from '@expo/vector-icons';
import { Item } from './item';

interface ItemCardProps {
  item: Item;
  onPress: (item: Item) => void;
}

const getStatusText = (status: string): { text: string; color: string } => {
  switch (status) {
    case 'active':
      return { text: '(Active)', color: '#4CAF50' };
    case 'inactive':
      return { text: '(Inactive)', color: '#9E9E9E' };
    case 'pending':
      return { text: '(Pending)', color: '#FF9800' };
    case 'sold':
      return { text: '(Sold)', color: '#2196F3' };
    case 'rejected':
      return { text: '(Rejected)', color: '#F44336' };
    case 'draft':
      return { text: '(Draft)', color: '#9E9E9E' };
    case 'under_review':
      return { text: '(Under Review)', color: '#9C27B0' };
    default:
      return { text: '', color: '#000000' };
  }
};

const ItemCard: React.FC<ItemCardProps> = ({ item, onPress }) => {
  const statusStyle = getStatusText(item.status);

  return (
    <TouchableOpacity style={styles.container} onPress={() => onPress(item)}>
      <View style={styles.imageContainer}>
        <Image source={{ uri: item.image }} style={styles.image} />
        <View style={styles.quantityBadge}>
          <Text style={styles.quantityText}>{item.quantity}</Text>
        </View>
      </View>
      <View style={styles.contentContainer}>
        <View style={styles.titleContainer}>
          <Text style={styles.title} numberOfLines={1}>
            {item.title}
          </Text>
          <Text style={[styles.status, { color: statusStyle.color }]}>{statusStyle.text}</Text>
        </View>
        <View style={styles.detailsContainer}>
          <Ionicons name="cash-outline" size={14} color="#666" />
          <Text style={styles.price}>
            {item.currency}{item.price.toLocaleString()}
          </Text>
        </View>
        <View style={styles.detailsContainer}>
          <Ionicons name="information-circle-outline" size={14} color="#666" />
          <Text style={styles.condition}>{item.condition}</Text>
        </View>
      </View>
      <Ionicons name="chevron-forward" size={20} color="#C7C7CC" />
    </TouchableOpacity>
  );
};

const styles = StyleSheet.create({
  container: {
    flexDirection: 'row',
    padding: 12,
    backgroundColor: 'white',
    borderBottomWidth: 1,
    borderBottomColor: '#F2F2F7',
    alignItems: 'center',
  },
  imageContainer: {
    position: 'relative',
    width: 60,
    height: 60,
    marginRight: 12,
  },
  image: {
    width: 60,
    height: 60,
    borderRadius: 4,
    backgroundColor: '#F2F2F7',
  },
  quantityBadge: {
    position: 'absolute',
    bottom: 0,
    left: 0,
    backgroundColor: 'rgba(0, 0, 0, 0.7)',
    paddingHorizontal: 4,
    paddingVertical: 2,
    borderRadius: 4,
  },
  quantityText: {
    color: 'white',
    fontSize: 10,
  },
  contentContainer: {
    flex: 1,
    justifyContent: 'center',
  },
  titleContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    marginBottom: 4,
  },
  title: {
    fontSize: 16,
    fontWeight: '500',
    marginRight: 4,
    flex: 1,
  },
  status: {
    fontSize: 12,
    fontWeight: '500',
  },
  detailsContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    marginTop: 2,
  },
  price: {
    fontSize: 14,
    color: '#666',
    marginLeft: 4,
  },
  condition: {
    fontSize: 14,
    color: '#666',
    marginLeft: 4,
  },
});

export default ItemCard;
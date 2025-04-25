import React, { useState, useEffect } from 'react';
import { ScrollView, Text, StyleSheet, View, Image, TouchableOpacity, Alert } from 'react-native';
import Ionlocate from '@/assets/images/cart/ionlocate';
import Tag from '@/assets/images/cart/tag';
import { useDispatch, useSelector } from 'react-redux';
import { addItemToCart, fetchCart } from '@/redux/Redux/slice/cartSlice';
import { RootState } from '@/redux/store';

type Notification = {
  id: string;
  title: string;
  image: any;
  time: string;
  tag: string;
  action: string | null;
  price: string;
  count: number;
};

const initialNotifications: Notification[] = [
  {
    id: '67f324b749ab762a23c32bdc', // Updated with a valid MongoDB ObjectId format
    title: 'Samsung Galaxy A0...',
    image: require('../../../../assets/images/speakks.png'),
    time: 'Today 20:28',
    tag: 'Challenge, Ibadan, Oyo',
    action: null,
    price: '₦75,000.00',
    count: 1,
  },
  {
    id: '67f324b749ab762a23c32bdd', // Another valid MongoDB ObjectId format
    title: 'LG Home Theatre',
    image: require('../../../../assets/images/speakks.png'),
    time: 'Today 20:28',
    tag: 'Challenge, Ibadan, Oyo',
    action: null,
    price: '₦75,000.00',
    count: 1,
  },
];

const DropdownContent: React.FC = () => {
  const [notifications] = useState(initialNotifications);
  const dispatch = useDispatch();
  const cartState = useSelector((state: RootState) => state.cart);

  // Fetch cart data when component mounts
  useEffect(() => {
    dispatch(fetchCart());
  }, [dispatch]);

  const handleAddToCart = async (item: Notification) => {
    try {
      console.log("Adding to cart:", item.id);
      
      // Make sure the item id is in the correct format for your API
      if (!item.id || typeof item.id !== 'string') {
        console.error("Invalid product ID:", item.id);
        Alert.alert('Error', 'Invalid product ID');
        return;
      }
      
      // Log the exact payload being sent
      console.log("Dispatching with payload:", {
        productId: item.id,
        quantity: item.count
      });
      
      await dispatch(addItemToCart({
        productId: item.id,
        quantity: item.count
      }));
      
      Alert.alert('Success', 'Item added to cart successfully');
    } catch (error) {
      console.error('Add to cart error:', error);
      Alert.alert('Error', 'Failed to add item to cart');
    }
  };

  return (
    <ScrollView horizontal showsHorizontalScrollIndicator={false} showsVerticalScrollIndicator={false}>
      {notifications.map((item) => (
        <View key={item.id} style={styles.main}>
          <View style={styles.notificationContent}>
            <Image source={item.image} style={styles.image} />
            <View style={styles.textContainer}>
              <Text style={styles.title}>{item.title.length > 20 ? `${item.title.substring(0, 20)}...` : item.title}</Text>
              <View style={{ flexDirection: 'row', alignItems: 'center', gap: 2 }}>
                <Tag />
                <Text style={styles.description}>{item.price}</Text>
              </View>
              <View style={{ flexDirection: 'row', alignItems: 'center', gap: 2 }}>
                <Ionlocate />
                <Text style={styles.description}>
                  {item.tag.length > 30 ? `${item.tag.substring(0, 30)}...` : item.tag}
                </Text>
              </View>
            </View>
            
            <TouchableOpacity
              style={styles.button}
              onPress={() => handleAddToCart(item)}
            >
              <Text style={styles.buttonText}>Add to cart</Text>
            </TouchableOpacity>
          </View>
        </View>
      ))}
    </ScrollView>
  );
};

const styles = StyleSheet.create({
  button: {
    borderWidth: 1,
    paddingHorizontal: 5,
    paddingVertical: 5,
    borderRadius: 5,
    borderColor: '#E9E9E9',
  },
  buttonText: {
    color: '#474747',
    fontSize: 12,
    lineHeight: 16.8,
    fontWeight: '400',
  },
  main: {
    marginTop: 15,
    paddingHorizontal: 9,
    borderWidth: 1,
    borderColor: '#E9E9E9',
    marginRight: 10,
    paddingVertical: 10,
    backgroundColor: '#fff',
    minWidth: 180, // Prevent content from being too squeezed
  },
  notificationContent: {
    flexDirection: 'row',
    alignItems: 'center',
    gap: 10,
  },
  image: {
    width: 40,
    height: 40,
    borderRadius: 5,
  },
  textContainer: {
    gap: 2,
  },
  title: {
    fontWeight: '700',
    fontSize: 12,
    maxWidth: 130, // Limit width to prevent text from overflowing
  },
  description: {
    fontSize: 12,
    fontWeight: '400',
  },
});

export default DropdownContent;
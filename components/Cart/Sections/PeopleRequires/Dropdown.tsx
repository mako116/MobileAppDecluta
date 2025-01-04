import React, { useState } from 'react';
import { ScrollView, Text, StyleSheet, View, Image, TouchableOpacity } from 'react-native';
import Ionlocate from '@/assets/images/cart/ionlocate';
import Tag from '@/assets/images/cart/tag';
import { useCart } from '@/context/CartContext';
 
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
    id: '1',
    title: 'Samsung Galaxy A0...',
    image: require('../../../../assets/images/speakks.png'),
    time: 'Today 20:28',
    tag: 'Challenge, Ibadan, Oyo',
    action: null,
    price: '₦75,000.00',
    count: 1,
  },
  {
    id: '2',
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
  const [notifications, setNotifications] = useState(initialNotifications);
  const { addToCart } = useCart();  // Use addToCart from CartContext

  const handleAddToCart = (item: any) => {
    addToCart({
      id: item.id,
      name: item.title,
      count: 1,
      price: parseFloat(item.price.replace('₦', '').replace(',', '')),
      image: item.image,
      location: item.location,
      used: '',
      description: 'Challenge, Ibadan, Oyo',
      totalPrice: 0,
      rewardPrice: 0,
      checkout: 0
    });
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

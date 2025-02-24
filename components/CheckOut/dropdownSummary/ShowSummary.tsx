import React, { useState } from 'react';
import {
  View,
  Text,
  TouchableOpacity,
  StyleSheet,
  Animated,
  ScrollView,
  Image,
} from 'react-native';
import CartWhite from '@/assets/svg/cartwhite';
import { useCart } from '@/context/CartContext';
import YourCart from '@/styles/Cart/YourCart.styles';
import ArrowDown from '@/assets/svg/arrowDown';
import ArrowUp from '@/assets/svg/arrowUp';
import Ionlocate from '@/assets/images/cart/ionlocate';
import Cube from '@/assets/images/cart/cube';

const DropdownWithSummary: React.FC = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [animation] = useState(new Animated.Value(0));
  const { cart } = useCart();

  const toggleDropdown = () => {
    if (isOpen) {
      // Close animation
      Animated.timing(animation, {
        toValue: 0,
        duration: 300,
        useNativeDriver: true,
      }).start(() => setIsOpen(false));
    } else {
      setIsOpen(true);
      // Open animation
      Animated.timing(animation, {
        toValue: 1,
        duration: 300,
        useNativeDriver: true,
      }).start();
    }
  };

  const scaleY = animation.interpolate({
    inputRange: [0, 1],
    outputRange: [0, 1],
  });

  const getCartSummary = () => {
    let totalAmount = 0;
    let uniqueItemCount = cart.length; // Unique items count is the number of items in the cart.
  
    cart.forEach((item) => {
      totalAmount += item.price * item.count;
    });
  
    return { totalAmount, uniqueItemCount };
  };
  
  const { totalAmount, uniqueItemCount } = getCartSummary();

  const formatPrice = (price: number): string => {
    return price.toLocaleString('en-NG', {
      style: 'currency',
      currency: 'NGN',
    });
  };

  return (
    <View style={{marginTop:"5%"}}>
      <TouchableOpacity style={styles.button} onPress={toggleDropdown}>
        <View style={styles.buttonRow}>
          <CartWhite />
          <Text style={YourCart.price}>
            {isOpen ? 'Hide order summary' : 'Show order summary'}
          </Text>
          {isOpen ? <ArrowDown /> : <ArrowDown />}
        </View>
        <Text style={YourCart.title}>{formatPrice(totalAmount)}</Text>
      </TouchableOpacity>

      <Animated.View style={[styles.dropdown, { transform: [{ scaleY }] }]}>
        {isOpen && (
          <View style={styles.dropdownContainer}>
            <ScrollView showsVerticalScrollIndicator={false}>
              <View style={YourCart.main}>
                {cart.map((item) => (
                  <View key={item.id} style={YourCart.notificationContents}>
                    <View style={YourCart.notificationContent}>
                      <Image source={item.image} style={YourCart.image} />
                      <View style={YourCart.textContainer}>
                        <Text style={YourCart.title}>
                          {item.name && item.name.length > 20
                            ? `${item.name.substring(0, 20)}...`
                            : item.name}
                        </Text>
                        <View style={styles.row}>
                          <Cube/>
                          <Text style={YourCart.description}>Used</Text>
                        </View>
                        <View style={styles.row}>
                        <Ionlocate />
                          <Text style={YourCart.description}>
                            {item.location || 'No location available'}
                          </Text>
                        </View>
                      </View>
                    </View>
                    <View style={YourCart.textContainers}>
                      <Text style={YourCart.price}>
                        {formatPrice(item.price * item.count)}
                      </Text>
                      <Text style={styles.saveText}>(Save 15%)</Text>
                    </View>
                  </View>
                ))}
                <View style={YourCart.notificationC}>
                  <Text>Subtotal - {uniqueItemCount} items</Text>
                  <Text>{formatPrice(totalAmount)}</Text>
                </View>
                <View style={YourCart.notificationC}>
                  <Text>Bonus to Earn: WELCOME</Text>
                  <Text>{formatPrice(totalAmount)}</Text>
                </View>
                <View style={YourCart.notificationC}>
                  <Text>Reward bonus</Text>
                  <Text>-₦500.00</Text>
                </View>
                <View style={YourCart.notificationC}>
                  <Text>Fee</Text>
                  <Text>₦2,000.00</Text>
                </View>
                <View style={YourCart.notificationC}>
                  <Text style={YourCart.title}>Total</Text>
                  <Text style={YourCart.title}>₦232,000.00</Text>
                </View>
               <TouchableOpacity onPress={toggleDropdown} style={{marginHorizontal:"auto", paddingVertical:5}}>
               {isOpen ? <ArrowUp /> : <ArrowUp />}
               </TouchableOpacity>
              </View>
            </ScrollView>
          </View>
        )}
      </Animated.View>
    </View>
  );
};

export default DropdownWithSummary;

const styles = StyleSheet.create({
  button: {
    width: '100%',
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    backgroundColor: '#fff',
    paddingHorizontal: 10,
    paddingVertical: 13,
    borderTopLeftRadius: 4,
    borderTopRightRadius: 4,
    borderColor: '#E9E9E9',
    borderLeftWidth: 1,
    borderRightWidth: 1,
    borderTopWidth: 1,
    // position: 'relative',
  },
  buttonRow: {
    flexDirection: 'row',
    gap: 10,
    alignItems: 'center',
  },
  dropdown: {
    overflow: 'hidden',
  },
  dropdownContainer: {
    backgroundColor: '#fff',
    width: '100%',
    borderBottomLeftRadius: 4,
    borderBottomRightRadius: 4,
     borderLeftWidth: 1,
    borderRightWidth: 1,
    borderBottomWidth: 1,
    borderColor: '#E9E9E9',
  },
  row: {
    flexDirection: 'row',
    alignItems: 'center',
    gap: 2,
  },
  saveText: {
    color: '#009217',
    fontWeight: '400',
    fontSize: 12,
    lineHeight: 16.8,
    textAlign: 'right',
  },
});

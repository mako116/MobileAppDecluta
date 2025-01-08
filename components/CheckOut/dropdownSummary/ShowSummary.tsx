import React, { useState } from 'react';
import {
  View,
  Text,
  TouchableOpacity,
  StyleSheet,
  Animated,
} from 'react-native';
import ArrowDownBlack from '@/assets/images/cart/arrowDownBlack';
import CartWhite from '@/assets/svg/cartwhite';
import { useCart } from '@/context/CartContext';
import CheckoutBoard from '../Selections/CheckoutBoard';
import YourCart from '@/styles/Cart/YourCart.styles';
 
const DropdownWithSummary: React.FC = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [animation] = useState(new Animated.Value(0));
  const { cart} = useCart();

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

  // Dropdown scale transformation
  const scaleY = animation.interpolate({
    inputRange: [0, 1],
    outputRange: [0, 1], // Collapse to expand
  });

  const getCartSummary = () => {
    let totalAmount = 0;
    let itemCount = 0;

    cart.forEach((item) => {
      totalAmount += item.price * item.count;
      itemCount += item.count;
    });

    return { totalAmount, itemCount };
  };
  const { totalAmount } = getCartSummary();
  
  const formatPrice = (price: number): string => {
    if (price > 900) {
      return price.toLocaleString('en-NG', {
        style: 'currency',
        currency: 'NGN',
      });
    } else {
      return `₦${price.toFixed(2)}`;
    }
  };

  return (
    <View >
      {/* Dropdown Button */}
      <TouchableOpacity style={styles.button} onPress={toggleDropdown}>
        <View style={{flexDirection:"row", gap:15}}>
            <CartWhite/>
        <Text style={YourCart.price}>Show order summary</Text>
        {isOpen ? <ArrowDownBlack /> : <ArrowDownBlack />}
        </View>
        <Text style={YourCart.title}>
        {formatPrice(totalAmount)}
        </Text>
      </TouchableOpacity>
     

      {/* Dropdown List */}
      <Animated.View style={[styles.dropdown, { transform: [{ scaleY }] }]}>
        {isOpen && (
          <View style={{position:"absolute", top:0, zIndex:1000,  backgroundColor: '#fff',width:"100%",  borderRadius: 4,
            }}>
            <TouchableOpacity style={styles.item}>
              <Text style={styles.itemText}>Profile</Text>
            </TouchableOpacity>
            <TouchableOpacity style={styles.item}>
              <Text style={styles.itemText}>Settings</Text>
            </TouchableOpacity>
            <TouchableOpacity style={styles.item}>
              <Text style={styles.itemText}>Logout</Text>
            </TouchableOpacity>
          </View>
        )}
      </Animated.View>
    </View>
  );
};

export default DropdownWithSummary;

const styles = StyleSheet.create({
 
  button: {
    width:"100%",
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    backgroundColor: '#fff',
    paddingHorizontal: 10,
    paddingVertical:13,
    borderRadius: 4,
   borderColor:"#E9E9E9",
   borderWidth:1,
    gap:10,
    position:"relative"
  },
  buttonText: {
    color: '#212121',
    fontSize: 14,
    fontWeight: '400',
  },
  dropdown: {
    zIndex:1000,
    
  
  },
  item: {
    flexDirection: 'row',
    alignItems: 'center',
    padding: 10,
  },
  itemText: {
    marginLeft: 10,
    fontSize: 16,
  },
});

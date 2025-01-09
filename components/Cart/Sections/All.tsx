import Cube from '@/assets/images/cart/cube';
import Ionlocate from '@/assets/images/cart/ionlocate';
import Minus from '@/assets/images/cart/minus';
import Plus from '@/assets/images/cart/Plus';
 import React, { useState } from 'react';
 
import {
  Image,
  ScrollView,
   Text,
  TouchableOpacity,
  View,
} from 'react-native';
import ModalPage from './RemovalModal/RemoveItem';
import DropdownContent from './PeopleRequires/Dropdown';
import Star from '@/assets/images/cart/Star';
import ArrowDownBlack from '@/assets/images/cart/arrowDownBlack';
import { useCart } from '@/context/CartContext';
import YourCart from '@/styles/Cart/YourCart.styles';
import Cart from '@/assets/svg/cart';
import CheckoutFoot from './Footer/CheckoutFoot';
 
 

const Alling: React.FC = () => {
  const { cart, increaseCount, decreaseCount, removeFromCart } = useCart();
  const [isModalVisible, setIsModalVisible] = useState(false);
  const [itemToRemove, setItemToRemove] = useState<any | null>(null);
  const [isDropdownVisible, setDropdownVisible] = useState(false);
 

  const handleIncrease = (id: string) => {
    increaseCount(id);
  };


  const handleDecrease = (id: string) => {
    const item = cart.find((item) => item.id === id);
    if (item) {
      if (item.count === 1) {
        // If the count is 1, remove the item after decreasing it to 0
        removeFromCart(id); // Remove item from cart
      } else {
        decreaseCount(id); // Otherwise, just decrease the count
      }
    }
  };

  const handleRemove = () => {
    if (itemToRemove) {
      removeFromCart(itemToRemove.id);
      setIsModalVisible(false);
      setItemToRemove(null);
    }
  };

  const handleCancel = () => {
    setIsModalVisible(false);
    setItemToRemove(null);
  };

  const toggleDropdown = () => {
    setDropdownVisible(!isDropdownVisible);
  };
 
 
    // Format price function to add commas for values over ₦900
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
  
   // Calculate the subtotal (total price of all items) and total number of items
  const getCartSummary = () => {
    let totalAmount = 0;
    let itemCount = 0;

    cart.forEach((item) => {
      totalAmount += item.price * item.count; // Total price
      itemCount += item.count; // Total items
    });

    return { totalAmount, itemCount };
  };

  const { totalAmount, itemCount } = getCartSummary();
  
  if (cart.length === 3) {
    return ( 
      <View style={YourCart.container}>
        <View style={{ justifyContent: "center", alignItems: "center", paddingVertical: 20 }}>
          <Cart />
          <Text style={[YourCart.title, { textAlign: "center",fontSize:19 , marginBottom:3,marginTop:10}]}>
            Your cart is empty</Text>
          <Text style={YourCart.rewardText}>Start shopping to add items!</Text>
        </View>
      </View>
    );
  }
  return (
    <View style={YourCart.container}>
      <ScrollView
       showsHorizontalScrollIndicator={false} // Hides horizontal scrollbar
       showsVerticalScrollIndicator={false}   // Hides vertical scrollbar
       scrollEventThrottle={16}
       >
        <View style={YourCart.main}>
        
          {cart.map((item) => (
            <View key={item.id} style={YourCart.notificationContents} >
                 <View style={YourCart.notificationContent}
                 >
                 <Image source={item.image} style={YourCart.image} />
                <View style={YourCart.textContainer}>
                  <Text style={YourCart.title}>
                     {item.name && item.name.length > 20 ? `${item.name.substring(0, 10)}...` : item.name}
                     </Text>
                    <View style={{ flexDirection: 'row', alignItems: 'center', gap: 2 }}>
                      <Cube />
                      <Text style={YourCart.description}>
                        Used
                      </Text>
                    </View>
                    <View style={{ flexDirection: 'row', alignItems: 'center', gap: 2 }}>
                      <Ionlocate />
                      <Text style={YourCart.description}>
                        {item.location && item.location.length > 0 ? item.location : 'No location available'}
                      </Text>
                    </View>
                    <TouchableOpacity onPress={() => { 
                       setItemToRemove(item); // Set the item to be removed
                       setIsModalVisible(true); // Show the modal
                       }}>
                        <Text style={{ color: '#A4A4A4', fontSize: 12, fontWeight: '400', lineHeight: 16.8 }}>
                          Remove</Text>
                      </TouchableOpacity>
                 </View>
                 </View>
                <View style={YourCart.textContainers}>
                <Text style={YourCart.price}>
                {formatPrice(item.totalPrice)}
                  </Text> 
                  <Text
                    style={{
                      color: '#009217',
                      fontWeight: '400',
                      fontSize: 12,
                      lineHeight: 16.8,
                      fontFamily: 'Helvetica Neue',
                      textAlign: 'right',
                    }}
                  >
                    (Save 15%)
                  </Text>
                  <View style={YourCart.counterContainer}>
                    <TouchableOpacity onPress={() => handleDecrease(item.id)} style={YourCart.button}>
                      <Minus />
                    </TouchableOpacity>
                    <Text style={YourCart.countText}>{item.count}</Text>
                    <TouchableOpacity onPress={() => handleIncrease(item.id)} style={YourCart.button}>
                      <Plus />
                    </TouchableOpacity>
                  </View>
                </View>
             </View>
         ))}
        
          <TouchableOpacity onPress={toggleDropdown}>
            <View style={YourCart.header}>
             
              <View style={{flexDirection:"row",alignItems:"center",gap:5}}>
              <Star/>
              <Text style={YourCart.headerText}>People also added these to cart</Text>
              </View>
              <ArrowDownBlack/>
            </View>
          </TouchableOpacity>
          {isDropdownVisible && <DropdownContent />}
          {isModalVisible && (
            <ModalPage
              isModalVisible={isModalVisible}
              handleCancel={handleCancel}
              handleRemove={handleRemove}
            />
          )}
        </View>
      </ScrollView>
   {/* Checkout Button */}
   <CheckoutFoot/>
   
  </View>
  );
  
};



export default Alling;

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
import { TextInput } from 'react-native';
import { Ionicons } from '@expo/vector-icons';
import CloseCircle from '@/assets/svg/close-circle';
 import Lock from '@/assets/svg/Lock';
import YourCart from '@/styles/Cart/YourCart.styles';
import Cart from '@/assets/svg/cart';
import Offers from '@/assets/svg/offers';
 
 
const Updates = () => {
  const { cart,applyRewardsBonus, increaseCount,checkoutPrice , decreaseCount, removeFromCart } = useCart();
  const [isModalVisible, setIsModalVisible] = useState(false);
  const [itemToRemove, setItemToRemove] = useState<any | null>(null);
  const [isDropdownVisible, setDropdownVisible] = useState(false);
  const [isDropdownVisidle, setIsDropdownVisidle] = useState(false); // For coupon input
  const [isDropdownVisid, setIsDropdownVisid] = useState(false); // For rewards bonus
  const [isRewardApplied, setIsRewardApplied] = useState<boolean>(false);
  const [couponCode, setCouponCode] = useState("");

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

  // Handle checkout logic  checkout Price Button
  const handleCheckout = () => {
    console.log("Proceeding to checkout with the following cart:", cart);
    // you can add the functionality here
  };

  const toggleDropdowns = () => {
    setIsDropdownVisid((prev) => !prev);
  };

  const toggleDropdows = () => {
    setIsDropdownVisidle((prev) => !prev);
  };

  const toggleReward = () => {
    setIsRewardApplied((prev) => !prev);
    applyRewardsBonus(!isRewardApplied);   
  };


  // adding the coupon number
const applyCoupon = () => {
  if (couponCode.trim() === "WELCOME") {
    console.log("Coupon applied!");
    // Adjust totalAmount with a discount here
  } else {
    console.log("Invalid coupon code");
  }
};
  // reward welcome bonus 
  const rewardBonus = 4500;
  // Format the rewardBonus using Intl.NumberFormat to include a comma as thousand separator and ensure two decimal places
  const formattedBonus = new Intl.NumberFormat('en-NG', {
    minimumFractionDigits: 2,
    maximumFractionDigits: 2,
  }).format(rewardBonus);

  if (cart.length === 0) {
    return (
      <View style={[YourCart.container,{paddingHorizontal:40}]}>
        <View style={{ justifyContent: "center", alignItems: "center", paddingVertical: 20 }}>
          <Offers />
          <Text style={[YourCart.title, { textAlign: "center",fontSize:19 , marginBottom:3}]}>
          No Current Offers
            </Text>
          <Text style={YourCart.rewardText}>
          We don't have any offers right now. Check back later for exciting promotions and
          discounts.
            </Text>
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
  <View style={{ backgroundColor: "#fff" ,  paddingBottom:"22%"}}>
  <View style={YourCart.checkoutSection}>
    <View style={YourCart.checkoutRow}>
      <TouchableOpacity
        style={{ flexDirection: "row", alignItems: "center", gap: 10 }}
        onPress={toggleDropdowns}
      >
        <Text style={[YourCart.title, { fontSize: 15 }]}>
          Subtotal - {itemCount} items
        </Text>
        <Ionicons
          name={isDropdownVisid ? "chevron-down" : "chevron-up"} // Icon based on state
          size={17}
          color="#292D32"
        />
      </TouchableOpacity>
      <Text style={YourCart.title}>{formatPrice(totalAmount)}</Text>
    </View>

    {isDropdownVisid && (
      <>
      {/* coupon toggle */}
        {!isRewardApplied && (
          <Text style={[YourCart.title, { fontSize: 16 , marginTop:5}]}>
            Have a coupon?{" "}
            <TouchableOpacity style={{ marginTop: 5 }} onPress={toggleDropdows}>
              <Text style={[YourCart.title, { fontSize: 16 }]}>Click here</Text>
            </TouchableOpacity>
          </Text>
        )}
        {/* coupon Input */}
          {isDropdownVisidle && (
            <View>
           <Text style={[YourCart.bonusText,{paddingBottom:8, paddingTop:5}]}>
            If you have a coupon code, please apply it below.
            </Text>
            <View style={YourCart.couponInputContainer}>
            <TextInput
              style={YourCart.couponInput}
              placeholder=" coupon code"
              value={couponCode}
              onChangeText={setCouponCode}
            />
             <TouchableOpacity
          style={[
            YourCart.applyButton,
            { backgroundColor: couponCode.trim() ? "#DEBC8E" : "#E9E9E9" }, // Dynamic background color
          ]}
          onPress={applyCoupon}
          disabled={!couponCode.trim()} // Disable button if input is empty
        >
          <Text style={[YourCart.bonusText,{ color: couponCode.trim() ? "#463E31" : "#A4A4A4"} ]}>
            Apply
          </Text>
        </TouchableOpacity>
          </View>
          </View>
        )}
        {/* Welcome bonus  */}
        {isRewardApplied && (
          <View style={YourCart.rewardInfoContainer}>
            <Text style={YourCart.bonusText}>Bonus to Earn: WELCOME</Text>
            <View style={YourCart.rewardAmountContainer}>
              <CloseCircle />
              <Text style={YourCart.rewardAmount}>+ ₦{formattedBonus}</Text>
            </View>
          </View>
        )}
        <View style={YourCart.checkboxContainer}>
          <TouchableOpacity onPress={toggleReward} style={YourCart.checkbox}>
            <View
              style={[
                isRewardApplied && YourCart.checkedBox,  
              ]}
            >
              <Text style={YourCart.checkboxText}>
                {isRewardApplied ? "✓" : ""}
              </Text>
            </View>
          </TouchableOpacity>
        
            <Text style={YourCart.rewardText}>
              Apply Rewards Bonus (₦500.00)
            </Text>
         </View>
        </>
      )}
     <TouchableOpacity
      style={YourCart.bottomButton}
      onPress={handleCheckout}
      disabled={cart.length === 0}
    >
      <Lock/>
      <Text style={YourCart.buttonText}>
        Checkout {formatPrice(checkoutPrice)}
      </Text>
    </TouchableOpacity>
    </View>
    <View style={YourCart.secureSection}>
         <Image
         source={require('../../../assets/svg/Frame 645480.png')}
         style={{ width: "55%", height: 30 }}
         resizeMode='contain'
         />
     </View>
    </View>
  );
  
};


 
export default Updates;

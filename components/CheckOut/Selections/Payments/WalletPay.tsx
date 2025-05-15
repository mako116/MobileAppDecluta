 import Addmodal from '@/components/CheckOut/AddModal/AddmodalBoard';
import ModalProceed from '@/components/Cart/Sections/Modal/ModalProceed';
import { useCart } from '@/context/CartContext';
import YourCart from '@/styles/Cart/YourCart.styles';
import React, { useEffect, useState } from 'react';
import { Image, ScrollView, StyleSheet, Text, TouchableOpacity, View } from 'react-native';
import HeaderProp from '@/UI/Header/HeaderProp';
import HeaderWithDesc from '@/UI/Header/HeaderWithDescription';
import DropdownWithSummary from '../../dropdownSummary/ShowSummary';
import Refresh2 from '@/assets/images/New folder/refresh-2';
import { router } from 'expo-router';
import AsyncStorage from '@react-native-async-storage/async-storage';
import { useSelector } from 'react-redux';
import { RootState } from '@/redux/store';
// import DangerTriangle from ;
 
const WalletPay = () => {
  const { cart } = useCart();
  const [hasClicked, setHasClicked] = useState(false); // Track if the button was clicked
  const [clickCount, setClickCount] = useState(0); // Track number of clicks
  const [totalAmount, setTotalAmount] = useState(0);
  // const [modalProceed, setModalProceed] = useState(false);
  const [addmodal, setAddmodal] = useState(false);

  
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

  useEffect(() => {
    const calculateTotalAmount = () => {
      let amount = 0;
      cart.forEach((item) => {
        amount += item.price * item.count;
      });
      setTotalAmount(amount);
    };

    calculateTotalAmount();
  }, [cart]); // Recalculate whenever the cart changes

  const handleButtonPress = () => {
    setHasClicked(true); // Set clicked state to true
    setClickCount((prevCount) => prevCount + 1); // Increment click count

    // Check if the "Add Money" button is clicked twice
    if (clickCount + 1 >= 2 && totalAmount <= 0) {
      toggleAdd(); // Open modal
    }
  };
 
   // Function to toggle modal visibility
   const toggleAdd = () => {
    setAddmodal(!addmodal);
  };

  // Function to handle the Proceed button click
  const ProceedAdd = () => {
    toggleAdd(); // Show modal when Proceed is clicked
  };

  const res = useSelector((state: RootState) => state.auth.userData);
  const [showSignup, setShowSignup] = useState(false);
  const [hasToken, setHasToken] = useState(false);
  

  useEffect(() => {
    const checkProfileCompletion = async () => {
      try {
        // If Redux already has the user data, use it instead of fetching again
        const userData = res;
        console.log("User data detail:", userData);
  
        const hasAddress = !!userData?.address;
  
        const token = await AsyncStorage.getItem("token");
        setHasToken(!!token); // Simplified boolean check
  
        if (!token) return;
  
        if (hasAddress) {
          setShowSignup(false);
        } else {
          setShowSignup(true);
        }
      } catch (error) {
        console.error("Error fetching user data:", error);
        setShowSignup(true);
      }
    };
  
    checkProfileCompletion();
  }, [res, router]);
  

  if (!hasToken) {
    return null;
  }


 
 

  return (
    <View style={{height:"100%",marginBottom:"30%"}}>
    <HeaderWithDesc title='Pay with Wallet' paddingTop={50} />
    
    <ScrollView contentContainerStyle={{flexDirection:"column",justifyContent:"space-between",flex:0.8}}>
      <View style={[YourCart.main,{paddingHorizontal:20}]}>
        <DropdownWithSummary />
  
        {/* Show no-token box if no token */}
        {showSignup && (
          <View style={YourCart.noTokenBox}>
            {/* <DangerTriangle/> */}
            <Image source={require('../../../../assets/images/New folder/dangers.png')} style={{width:40,height:40,marginTop:10}} />
            <Text style={[YourCart.title,{marginTop:10,fontSize:16,marginBottom:13}]}>Verify Your KYC to Use Your Wallet</Text>
            <Text style={[YourCart.rewardText,{fontSize:15}]}>
            Verify your KYC and you can add money, pay lesser transaction fees, receive payments from buyers and make secure transactions pon DecluttaKing.
            </Text>
            <Text style={[YourCart.rewardText,{marginVertical:5,fontWeight:"300"}]}>
            You’ll be done in 2 minutes!
            </Text>
            <TouchableOpacity style={[YourCart.bottomButton,{width:"100%",marginTop:15}]} onPress={() => router.push('/(routes)/kyc/Signup')}>
              <Text style={YourCart.buttonText}>Verify Now</Text>
            </TouchableOpacity>
          </View>
        )}
  
        {/* Show wallet section only if token exists */}
        {!showSignup  &&(
          <View style={styles.main}>
            <Text style={[YourCart.title, { paddingTop: 5 }]}>Your Wallet Balance:</Text>
            <Text style={[YourCart.bonusTexts]}>{formatPrice(totalAmount)}</Text>
  
            {hasClicked && totalAmount <= 0 && (
              <Text style={styles.errorText}>Insufficient balance</Text>
            )}
  
            <TouchableOpacity style={YourCart.bottomButton} onPress={handleButtonPress}>
              <Text style={YourCart.buttonText}>
                {hasClicked && totalAmount <= 0 ? 'Add Money' : 'Proceed to Payment'}
              </Text>
            </TouchableOpacity>
          </View>
        )}
      </View>
  
      {/* Change payment method */}
      <TouchableOpacity onPress={() => router.push("/(routes)/checkout")} style={{flexDirection:"row",alignItems:"center",justifyContent:"center",gap:5}}>
        <Refresh2 />
        <Text style={YourCart.title}>Change payment method</Text>
      </TouchableOpacity>
    </ScrollView>
  
    {/* Add Money Modal */}
    <Addmodal addmodal={addmodal} ProceedAdd={ProceedAdd} />
  </View>
  
  );
};

const styles = StyleSheet.create({
  main: {
    borderWidth: 1,
    borderColor: '#E9E9E9',
    paddingVertical: 17,
    paddingHorizontal: 10,
    gap: 7,
    backgroundColor: '#fff',
    borderRadius: 4,
    marginTop:15
  },
 
  errorText: {
    fontSize: 14,
    fontWeight: '400',
    color: '#E42527',
    fontFamily: 'Proxima Nova',
    lineHeight: 19.6,
  },
});

export default WalletPay;

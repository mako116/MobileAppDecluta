 import Addmodal from '@/components/CheckOut/AddModal/AddmodalBoard';
import ModalProceed from '@/components/Cart/Sections/Modal/ModalProceed';
import { useCart } from '@/context/CartContext';
import YourCart from '@/styles/Cart/YourCart.styles';
import React, { useEffect, useState } from 'react';
import { Image, StyleSheet, Text, TouchableOpacity, View } from 'react-native';

const WalletPay = () => {
  const { cart } = useCart();
  const [hasClicked, setHasClicked] = useState(false); // Track if the button was clicked
  const [clickCount, setClickCount] = useState(0); // Track number of clicks
  const [totalAmount, setTotalAmount] = useState(0);
  const [modalProceed, setModalProceed] = useState(false);
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


  // Function to toggle modal visibility
  const toggleModal = () => {
    setModalProceed(!modalProceed);
  };

  // Function to handle the Proceed button click
  const Proceed = () => {
    toggleModal(); // Show modal when Proceed is clicked
  };

  return (
    <View>
      <View style={styles.main}>
        <Text style={YourCart.title}>Pay with your DecluttaKing Wallet</Text>
        <Text style={[YourCart.price, { paddingTop: 5 }]}>Your Wallet Balance:</Text>
        <Text style={[YourCart.bonusTexts]}>{formatPrice(totalAmount)}</Text>

        {/* Show error only after button is clicked */}
        {hasClicked && totalAmount <= 0 && (
          <Text style={styles.errorText}>Insufficient balance</Text>
        )}

        <TouchableOpacity style={YourCart.bottomButton} onPress={handleButtonPress}>
          <Text style={YourCart.buttonText}>
            {hasClicked && totalAmount <= 0 ? 'Add Money' : 'Proceed to Payment'}
          </Text>
        </TouchableOpacity>
      </View>
     
      {/* Modal for Add Money */}
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

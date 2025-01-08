import { useCart } from '@/context/CartContext';
import YourCart from '@/styles/Cart/YourCart.styles';
import React, { useEffect, useState } from 'react';
import { Image, StyleSheet, Text, TouchableOpacity, View } from 'react-native';

const WalletPay = () => {
  const { cart } = useCart();
  const [hasClicked, setHasClicked] = useState(false); // Track if the button was clicked
  const [totalAmount, setTotalAmount] = useState(0);

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

    // Logic for checking if balance is insufficient
    if (totalAmount <= 0) {
      // If balance is insufficient, you can trigger your modal or any other logic
      console.log('Insufficient balance - show add money modal');
    } else {
      console.log('Proceed to Payment');
    }
  };

  return (
    <View>
      <View style={styles.main}>
        <Text style={YourCart.title}>Pay with your DecluttaKing Wallet</Text>
        <Text style={[YourCart.price,{paddingTop:5}]}>Your Wallet Balance:</Text>
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
      <View style={styles.footer}>
        <Text style={YourCart.title}>
        💯 Secure Payment Protection
        </Text>
         <Image
          source={require('../../../../assets/svg/payemnes.png')}
          style={styles.images}
        //   resizeMode="contain"
        />
      </View>
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
  footer: {
    gap:10,
    paddingTop: '70%',
    alignItems: 'center',
    justifyContent: 'flex-end',
  },
  image: {
    width: '55%',
    height: 30,
  },
  images: {
    borderWidth:1,
    borderColor:"#E9E9E9",
    borderRadius:3.43,
    width: '70%',
    height: 30,
  },
  errorText: {
    
    fontSize: 14,
    fontWeight: '400',
    color: '#E42527',
    fontFamily:"Proxima Nova",
    lineHeight:19.6
    // marginVertical: 5,
  },
});

export default WalletPay;

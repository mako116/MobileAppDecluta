import CloseCircle from '@/assets/svg/close-circle';
import Lock from '@/assets/svg/Lock';
import { useCart } from '@/context/CartContext';
import YourCart from '@/styles/Cart/YourCart.styles';
import { Ionicons } from '@expo/vector-icons';
import React, { useState } from 'react';
import { Image, Text, TextInput, TouchableOpacity } from 'react-native';
import {  View } from 'react-native';
import CouponRemovedModal from '../Modal/Removed';

const CheckoutFoot = () => {
  const { cart, applyRewardsBonus, checkoutPrice } = useCart();
  const [isRewardApplied, setIsRewardApplied] = useState<boolean>(false);
  const [couponCode, setCouponCode] = useState<string>('');
  const [isCouponApplied, setIsCouponApplied] = useState<boolean>(false);
  const [isDropdownVisible, setIsDropdownVisible] = useState<boolean>(false);
  const [isRewardDropdownVisible, setIsRewardDropdownVisible] = useState<boolean>(false);
  const [modalVisible, setModalVisible] = useState<boolean>(false);

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

  const getCartSummary = () => {
    let totalAmount = 0;
    let itemCount = 0;

    cart.forEach((item) => {
      totalAmount += item.price * item.count;
      itemCount += item.count;
    });

    return { totalAmount, itemCount };
  };

  const { totalAmount, itemCount } = getCartSummary();

  const handleCheckout = () => {
    console.log('Proceeding to checkout with the following cart:', cart);
  };

  const toggleReward = () => {
    setIsRewardApplied((prev) => !prev);
    setIsCouponApplied(true);
  };

  const closeModal = () => {
    setModalVisible(false);
  };

  const applyCoupon = () => {
    if (couponCode.trim() === 'WELCOME') {
      console.log('Coupon applied!');
      setIsCouponApplied(true);
      setIsDropdownVisible(false);
    } else {
      console.log('Invalid coupon code');
    }
  };

  const rewardBonus = 4500;
  const formattedBonus = new Intl.NumberFormat('en-NG', {
    minimumFractionDigits: 2,
    maximumFractionDigits: 2,
  }).format(rewardBonus);

  const toggleRewardDropdown = () => {
    setIsRewardDropdownVisible((prev) => !prev);
  };

  const toggleCouponDropdown = () => {
    setIsDropdownVisible((prev) => !prev);
  };

  const handleCloseBonus = () => {
    setModalVisible(true);
    setIsRewardApplied(false);
    applyRewardsBonus(false);
    setIsCouponApplied(false);
    setCouponCode('');
    setIsDropdownVisible(true);
  };

  return (
    <View style={{ backgroundColor: '#fff', paddingBottom: '22%' }}>
      <View style={YourCart.checkoutSection}>
        <View style={YourCart.checkoutRow}>
          <TouchableOpacity
            style={{ flexDirection: 'row', alignItems: 'center', gap: 10 }}
            onPress={toggleRewardDropdown}
          >
            <Text style={[YourCart.title, { fontSize: 15 }]}>
              Subtotal - {itemCount} items
            </Text>
            <Ionicons
              name={isRewardDropdownVisible ? 'chevron-down' : 'chevron-up'}
              size={17}
              color="#292D32"
            />
          </TouchableOpacity>
          <Text style={YourCart.title}>{formatPrice(totalAmount)}</Text>
        </View>

        {isRewardDropdownVisible && (
          <>
            {!isRewardApplied && !isCouponApplied && (
              <Text style={[YourCart.title, { fontSize: 16, marginTop: 5 }]}>
                Have a coupon?{' '}
                <TouchableOpacity style={{ marginTop: 5 }} onPress={toggleCouponDropdown}>
                  <Text style={[YourCart.title, { fontSize: 16 }]}>Click here</Text>
                </TouchableOpacity>
              </Text>
            )}

            {/* Coupon Input */}
            {isDropdownVisible && !isCouponApplied && !isRewardApplied && (
              <View>
                <Text style={[YourCart.bonusText, { paddingBottom: 8, paddingTop: 5 }]}>
                  If you have a coupon code, please apply it below.
                </Text>
                <View style={YourCart.couponInputContainer}>
                  <TextInput
                    style={YourCart.couponInput}
                    placeholder="coupon code"
                    value={couponCode}
                    onChangeText={setCouponCode}
                  />
                  <TouchableOpacity
                    style={[
                      YourCart.applyButton,
                      { backgroundColor: couponCode.trim() ? '#DEBC8E' : '#E9E9E9' },
                    ]}
                    onPress={applyCoupon}
                    disabled={!couponCode.trim()}
                  >
                    <Text
                      style={[
                        YourCart.bonusText,
                        { color: couponCode.trim() ? '#463E31' : '#A4A4A4' },
                      ]}
                    >
                      Apply
                    </Text>
                  </TouchableOpacity>
                </View>
              </View>
            )}

            {/* Show Welcome Bonus after Coupon Applied */}
            {isCouponApplied && (
              <View style={YourCart.rewardInfoContainer}>
                <Text style={YourCart.bonusText}>Welcome Bonus Applied</Text>
                <View style={YourCart.rewardAmountContainer}>
                  <TouchableOpacity onPress={handleCloseBonus}>
                    <CloseCircle />
                  </TouchableOpacity>
                  <Text style={YourCart.rewardAmount}>+ {formattedBonus}</Text>
                </View>
              </View>
            )}

            {/* Checkbox for Rewards */}
            {!isCouponApplied && (
              <View style={YourCart.checkboxContainer}>
                <TouchableOpacity onPress={toggleReward} style={YourCart.checkbox}>
                  <View style={[isRewardApplied && YourCart.checkedBox]}>
                    <Text style={YourCart.checkboxText}>
                      {isRewardApplied ? '✓' : ''}
                    </Text>
                  </View>
                </TouchableOpacity>
                <Text style={YourCart.rewardText}>Apply Rewards Bonus (₦500.00)</Text>
              </View>
            )}
          </>
        )}

        <TouchableOpacity
          style={YourCart.bottomButton}
          onPress={handleCheckout}
          disabled={cart.length === 0}
        >
          <Lock />
          <Text style={YourCart.buttonText}>Checkout {formatPrice(checkoutPrice)}</Text>
        </TouchableOpacity>
      </View>

      <View style={YourCart.secureSection}>
        <Image
          source={require('../../../../assets/svg/Frame 645480.png')}
          style={{ width: '55%', height: 30 }}
          resizeMode="contain"
        />
      </View>

      {/* Coupon Applied Modal */}
      <CouponRemovedModal visible={modalVisible} onClose={closeModal} />
    </View>
  );
};

 
export default CheckoutFoot;

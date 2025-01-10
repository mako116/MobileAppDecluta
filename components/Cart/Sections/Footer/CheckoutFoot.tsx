import CloseCircle from '@/assets/svg/close-circle';
import Lock from '@/assets/svg/Lock';
import { useCart } from '@/context/CartContext';
import YourCart from '@/styles/Cart/YourCart.styles';
import { Ionicons } from '@expo/vector-icons';
import React, { useState } from 'react';
import { Image, Text, TextInput, TouchableOpacity, View } from 'react-native';
import CouponRemovedModal from '../Modal/Removed';
import { router } from 'expo-router';
import ModalProceed from '../Modal/ModalProceed';
import GoodCheck from '@/assets/svg/goodCheck';

const CheckoutFoot = () => {
  const { cart, checkoutPrice } = useCart();
  const [isRewardApplied, setIsRewardApplied] = useState<boolean>(false);
  const [couponCode, setCouponCode] = useState<string>('');
  const [isCouponApplied, setIsCouponApplied] = useState<boolean>(false);
  const [isDropdownVisible, setIsDropdownVisible] = useState<boolean>(false);
  const [isRewardDropdownVisible, setIsRewardDropdownVisible] = useState<boolean>(false);
  const [modalVisible, setModalVisible] = useState<boolean>(false);
  const [modalProceed, setModalProceed] = useState(false);

  const formatPrice = (price: number): string => {
    return price > 900
      ? price.toLocaleString('en-NG', { style: 'currency', currency: 'NGN' })
      : `₦${price.toFixed(2)}`;
  };

  const getCartSummary = () => {
    let totalAmount = 0;
    let uniqueItemCount = cart.length;

    cart.forEach((item) => {
      totalAmount += item.price * item.count;
    });

    return { totalAmount, uniqueItemCount };
  };

  const { totalAmount, uniqueItemCount } = getCartSummary();

  const handleCheckout = () => {
    router.push('/(routes)/checkout');
    console.log('Checkout initiated');
  };

  const toggleRewardDropdown = () => {
    setIsRewardDropdownVisible((prev) => !prev);
  };

  const toggleCouponDropdown = () => {
    setIsDropdownVisible((prev) => !prev);
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

  const handleCloseBonus = () => {
    setModalVisible(true);
    setIsRewardApplied(false);
    setIsCouponApplied(false);
    setCouponCode('');
    setIsDropdownVisible(true);
  };

  const toggleReward = () => {
    setIsRewardApplied((prev) => !prev);
  };

  const toggleModal = () => {
    setModalProceed(!modalProceed);
  };

  const RewardBonus = 500;
  const WelcomeBonus = 4500;
  const formattedWelcomeBonus = new Intl.NumberFormat('en-NG', {
    minimumFractionDigits: 2,
    maximumFractionDigits: 2,
  }).format(WelcomeBonus);

  return (
    <View style={{ backgroundColor: '#fff', paddingBottom: '22%' }}>
      <View style={YourCart.checkoutSection}>
        <View style={YourCart.checkoutRow}>
          <TouchableOpacity
            style={{ flexDirection: 'row', alignItems: 'center', gap: 10 }}
            onPress={toggleRewardDropdown}
          >
            <Text style={[YourCart.title, { fontSize: 15 }]}>
              Subtotal - {uniqueItemCount} items
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
            {/* Coupon Input */}
            { !isCouponApplied && (
              <Text style={[YourCart.title, { fontSize: 16, marginTop: 5 }]}>
                Have a coupon?{' '}
                <TouchableOpacity style={{ marginTop: 5 }} onPress={toggleCouponDropdown}>
                  <Text style={[YourCart.title, { fontSize: 16 }]}>Click here</Text>
                </TouchableOpacity>
              </Text>
            )}

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

            {/* Welcome Bonus */}
            {isCouponApplied && (
              <View style={YourCart.rewardInfoContainer}>
                <Text style={YourCart.bonusText}>Welcome Bonus Applied</Text>
                <View style={YourCart.rewardAmountContainer}>
                  <TouchableOpacity onPress={handleCloseBonus}>
                    <CloseCircle />
                  </TouchableOpacity>
                  <Text style={YourCart.rewardAmount}>+ {formattedWelcomeBonus}</Text>
                </View>
              </View>
            )}

            {/* Independent Checkbox for Rewards */}
            <View style={YourCart.checkboxContainer}>
              <TouchableOpacity onPress={toggleReward} style={YourCart.checkbox}>
                <View style={[isRewardApplied && YourCart.checkedBox]}>
                  {isRewardApplied && <GoodCheck />}
                </View>
              </TouchableOpacity>
              <Text style={YourCart.rewardText}>
                Apply Rewards Bonus ({formatPrice(RewardBonus)})
              </Text>
            </View>
          </>
        )}

        <TouchableOpacity
          style={YourCart.bottomButton}
          onPress={handleCheckout}
        >
          <Lock />
          <Text style={YourCart.buttonText}>Checkout {formatPrice(checkoutPrice)}</Text>
        </TouchableOpacity>
      </View>

      <TouchableOpacity onPress={toggleModal} style={YourCart.secureSection}>
        <Image
          source={require('../../../../assets/svg/Frame 645480.png')}
          style={{ width: '55%', height: 30 }}
          resizeMode="contain"
        />
      </TouchableOpacity>

      <ModalProceed modalProceed={modalProceed} toggleModal={toggleModal} />
      <CouponRemovedModal visible={modalVisible} onClose={() => setModalVisible(false)} />
    </View>
  );
};

export default CheckoutFoot;

import Cube from '@/assets/images/cart/cube';
import Tag from '@/assets/images/cart/tag';
import Rightarrow from '@/assets/images/kyc/rightarrow';
import Lock from '@/assets/svg/Lock';
import PinLocation from '@/assets/svg/PinLocationIcon';
import Button from '@/components/Button/button';
import YourCart from '@/styles/Cart/YourCart.styles';
// import YourCart from '@/OrderTime/Cart/YourCart.OrderTime';
import OrderTime from '@/styles/orderTimeline/ordertimwline.styles';
import React, { useState } from 'react';
import { Image, StyleSheet, Text, TouchableOpacity, View } from 'react-native';

const OrderTimeline = () => {
  const [isPickedUp, setIsPickedUp] = useState(false);

  return (
    <View >
      <Text style={OrderTime.title}>Order Timeline</Text>

      <View style={[YourCart.noTokenBox, OrderTime.container]}>
        {/* Payment Made */}
        <View style={OrderTime.timelineSection}>
          <View>
            <Image source={require("../../../assets/images/New folder/tick-circleblac.png")} style={OrderTime.statusIcon} />
            <Image source={require("../../../assets/images/New folder/Line 2.png")} style={OrderTime.line} />
          </View>
          <View>
            <Text style={OrderTime.timelineTitle}>Payment Made</Text>
            <Text style={OrderTime.timelineSubtitle}>Payment has been made and is held in escrow.</Text>
            <View style={{flexDirection:"row",alignItems:"center",gap:5}}>
            <Lock /> 
            <Text style={OrderTime.escrowAmount}>
            Amount in Escrow: ₦75,000.00
            </Text>
            </View>
          </View>
        </View>

        {/* Confirm Pickup */}
        <View style={OrderTime.timelineSection}>
          <View>
            <Image
              source={
                isPickedUp
                  ? require("../../../assets/images/New folder/tick-circleblac.png")
                  : require("../../../assets/images/New folder/tick-circleempty.png")
              }
              style={OrderTime.statusIcon}
            />
            <Image source={require("../../../assets/images/New folder/Line 2.png")} style={OrderTime.lineTall} />
          </View>
          <View>
            {/* this will  display  and hide when the button is clicked */}

            <Text style={OrderTime.timelineTitle}>Confirm Pickup</Text>
            {!isPickedUp && (
            <View>
            <Text style={OrderTime.timelineSubtitle}>Click the button below to confirm that you have received the item.</Text>
            <Text style={OrderTime.timelineSubtitle}>Please note that:</Text>
            <Text style={OrderTime.bullet}>{'\u2022'} Funds will be immediately released to Segun A</Text>
            <Text style={OrderTime.bullet}>{'\u2022'} This order will be considered final and cannot be changed or cancelled</Text>
            <Text style={OrderTime.bullet}>Ensure all details are accurate before confirming.</Text>

            </View>            
            )}
             {/* this will  display  and hide when the button is clicked */}

            {!isPickedUp && (
              <TouchableOpacity
                style={[OrderTime.confirmButton, { backgroundColor: isPickedUp ? '#DEBC8E' : '#fff' }]}
                onPress={() => setIsPickedUp(true)}
              >
                <Text style={OrderTime.confirmText}>Yes! I've picked up the item</Text>
              </TouchableOpacity>
            )}

             {/* this will only display when the button is clicked */}

            {isPickedUp && (
              <>
             <Text style={[OrderTime.timelineSubtitle,{maxWidth:"80%"}]}>
             You have confirmed that the pickup was successful and the funds have been released to Segun A.
               </Text>
                <Text style={[OrderTime.timelineTitle,{marginTop:7}]}>Confirmation Photo</Text>
                <View style={OrderTime.imageRow}>
                  <Image source={require("../../../assets/images/New folder/Frame 646237.png")} style={OrderTime.confirmImage} />
                  <Image source={require("../../../assets/images/New folder/Frame 646237.png")} style={OrderTime.confirmImage} />
                  <Image source={require("../../../assets/images/New folder/Frame 646237.png")} style={OrderTime.confirmImage} />
                </View>
              </>
            )}
          </View>
        </View>

        {/* Order Complete */}
        <View style={[OrderTime.timelineSection, OrderTime.completeSection, { opacity: isPickedUp ? 1 : 0.3 }]}>
          <View>
            {/* Toggle for image checked */}
            <Image
              source={
                isPickedUp
                  ? require("../../../assets/images/New folder/tick-circleblac.png")
                  : require("../../../assets/images/New folder/tick-circleempty.png")
              }
              style={OrderTime.statusIcon}
            />
          </View>
          <View>
            <Text style={OrderTime.timelineTitle}>Order Complete</Text>
          </View>
        </View>

        {/* this will only display when the button is clicked */}
        {isPickedUp && (
          <>
            <Text style={OrderTime.successMessage}>Congrats! Your order has been completed successfully.</Text>
            <Button width={'100%'} title={'Rate Seller'} backgroundColor={'#DEBC8E'} borderWidth={0} onPress={() => { }} />
            <View style={{ marginVertical: 9 }} />
            <Button width={'100%'} title={'Rate DecluttaKing'} backgroundColor={'#fff'} borderWidth={1} onPress={() => { }} />
          </>
        )}
      </View>
    </View>
  );
};

export default OrderTimeline;


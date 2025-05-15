import Close from '@/assets/images/kyc/close';
import Button from '@/components/Button/button';
import YourCart from '@/styles/Cart/YourCart.styles';
import HeaderNotification from '@/styles/Notification/HomeHeaderNotificationTabs';
import { SignUpStyles } from '@/styles/Signup/signup.style';
import UssdStyles from '@/styles/UssdStyles/Ussdstyles';
import { router } from 'expo-router';
import React, { useRef } from 'react';
import { Animated, Modal, PanResponder, StyleSheet, Text, TouchableOpacity, View } from 'react-native';

interface ModalProps {
    visible: boolean;
    onClose: () => void;
    onConfirm?: () => void;
  }
const Disclaimer: React.FC<ModalProps> = ({
    visible,
    onClose,
}) => {
      const translateY = useRef(new Animated.Value(0)).current;
    
    const handleClose = () => {
        onClose();
       };
         const handleNext = () => {
              router.push("/(routes)/sellanItem/ReviewItem");
        
         };
         const panResponder = useRef(
           PanResponder.create({
             onMoveShouldSetPanResponder: (_, gestureState) => gestureState.dy > 0,
             onPanResponderMove: Animated.event([null, { dy: translateY }], { useNativeDriver: false }),
             onPanResponderRelease: (_, gestureState) => {
               if (gestureState.dy > 100) {
                 handleClose();
               } else {
                 Animated.spring(translateY, { toValue: 0, useNativeDriver: true }).start();
               }
             },
           })
         ).current;
       
    return (
         <Modal visible={visible} animationType="slide" transparent>
        <View style={HeaderNotification.overlay}>
               <Animated.View style={HeaderNotification.modalContentContainerOne} {...panResponder.panHandlers}>
         <View style={HeaderNotification.modalContent}>
                
          <View style={[YourCart.rewardInfoContainer]}>
          <View style={{marginHorizontal:"auto"}}>
              <Text style={[UssdStyles.headerText,{paddingBottom:0}]}>
            DecluttaKing 
            </Text>
            <Text style={[UssdStyles.headerText,{marginTop:0}]}>
             Service Fee Disclaimer
            </Text>
          </View>
            <TouchableOpacity onPress={handleClose}>
               <Close/>
            </TouchableOpacity>
          </View>
          <Text style={[SignUpStyles.label,{lineHeight:20,paddingTop:20,borderTopWidth:1,borderColor:"#E9E9E9"}]}>
          DecluttaKing charges a <Text style={[SignUpStyles.texts,{fontSize:14}]}>10% commission </Text> which covers operational costs such as: safe transactions, escrow protection, platform maintenance and support. The fees are nun-refundable and could change in the future. 
          </Text>
          <Text style={[SignUpStyles.label,{lineHeight:20,marginVertical:20}]}>
          We only charge this 10% commission after you make a sale, not before.
          </Text>
          <Button title="Okay" onPress={handleNext} backgroundColor="#DEBC8E" borderWidth={0} />
          </View>
         </Animated.View>
        </View>
        </Modal>
    );
}

const styles = StyleSheet.create({})

export default Disclaimer;

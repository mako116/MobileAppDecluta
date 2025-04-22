import Good from '@/assets/images/checkbox/Good';
import Close from '@/assets/images/kyc/close';
import Button from '@/components/Button/button';
import YourCart from '@/styles/Cart/YourCart.styles';
import HeaderNotification from '@/styles/Notification/HomeHeaderNotificationTabs';
import { SignUpStyles } from '@/styles/Signup/signup.style';
import UssdStyles from '@/styles/UssdStyles/Ussdstyles';
import { router } from 'expo-router';
import { goBack } from 'expo-router/build/global-state/routing';
import React, { useRef } from 'react';
import { Animated, Modal, PanResponder, StyleSheet, Text, TouchableOpacity, View } from 'react-native';

interface ModalProps {
    visibles: boolean;
    onClose: () => void;
     }
const DraftItem: React.FC<ModalProps> = ({
    visibles,
    onClose,
}) => {
      const translateY = useRef(new Animated.Value(0)).current;
    
    const handleClose = () => {
        onClose();
       };
         const handleNext = () => {
              router.push("/(routes)/sellanItem/itemUnderReview");
        
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
         <Modal visible={visibles} animationType="slide" transparent>
        <View style={HeaderNotification.overlay}>
         <Animated.View style={HeaderNotification.modalContentContainerOnes} {...panResponder.panHandlers}>
         <View style={HeaderNotification.modalContent}>
                
          <View style={[YourCart.rewardInfoContainer]}>
          <View style={{marginHorizontal:"auto",paddingTop:10}}>
            <Good/>
            <Text style={[UssdStyles.headerText,{paddingBottom:0}]}>
            Draft Saved Successfully
            </Text>
          </View>
          </View>
           
          <Text style={[SignUpStyles.label,{lineHeight:20,marginVertical:20,textAlign:"center",paddingHorizontal:15}]}>
          come back anytime to finish
          </Text>
          <Button title="Okay" onPress={handleNext} backgroundColor="#DEBC8E" borderWidth={0} />
                    </View>
         </Animated.View>
        </View>
        </Modal>
    );
}

const styles = StyleSheet.create({})

export default DraftItem;

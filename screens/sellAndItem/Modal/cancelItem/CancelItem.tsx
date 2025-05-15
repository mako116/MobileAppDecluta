import Close from '@/assets/images/kyc/close';
import Button from '@/components/Button/button';
import YourCart from '@/styles/Cart/YourCart.styles';
import HeaderNotification from '@/styles/Notification/HomeHeaderNotificationTabs';
import { SignUpStyles } from '@/styles/Signup/signup.style';
import UssdStyles from '@/styles/UssdStyles/Ussdstyles';
import { router } from 'expo-router';
import { goBack } from 'expo-router/build/global-state/routing';
import React, { useRef, useState } from 'react';
import { Animated, Modal, PanResponder, StyleSheet, Text, TouchableOpacity, View } from 'react-native';
import DraftItem from '../DraftItem/DraftItem';

interface ModalProps {
    visible: boolean;
    onClose: () => void;
     }
const CancelItem: React.FC<ModalProps> = ({
    visible,
    onClose,
}) => {
      const translateY = useRef(new Animated.Value(0)).current;
        const [modalVisible, setModalVisible] = useState(false);
    
        const openModal = () => {
          setModalVisible(true);
         };
    
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
      <>
         <Modal visible={visible} animationType="slide" transparent>
        <View style={HeaderNotification.overlay}>
         <Animated.View style={HeaderNotification.modalContentContainerOnes} {...panResponder.panHandlers}>
         <View style={HeaderNotification.modalContent}>
                
          <View style={[YourCart.rewardInfoContainer]}>
          <View style={{marginHorizontal:"auto"}}>
              <Text style={[UssdStyles.headerText,{paddingBottom:0}]}>
            Cancel item Listing?
            </Text>
          </View>
          </View>
           
          <Text style={[SignUpStyles.label,{lineHeight:20,marginVertical:20,textAlign:"center",paddingHorizontal:15}]}>
          You have unsaved changes. Do you want to save as draft or discard?
          </Text>
          <Button title="Save as draft" onPress={openModal} backgroundColor="#DEBC8E" borderWidth={0} />
          <View style={{marginVertical:8}}/>
          <Button title="Cancel" onPress={handleClose} backgroundColor="#fff" borderWidth={1} />
          </View>
         </Animated.View>
        </View>

        </Modal>
         <DraftItem 
          visibles={modalVisible}
          onClose={() => setModalVisible(false)}
          />
              
       </>
    );
}

const styles = StyleSheet.create({})

export default CancelItem;

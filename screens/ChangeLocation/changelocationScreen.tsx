import React, { Dispatch, SetStateAction, useRef, useState } from 'react';
import { Modal, Text, View, TouchableOpacity, FlatList, Image, PanResponder, Animated } from 'react-native';
import { AntDesign, Entypo } from '@expo/vector-icons';
import Button from '@/components/Button/button';
import HalfButton from '@/components/Button/halfButton';
import HeaderNotification from '@/styles/Notification/HomeHeaderNotificationTabs';

interface LocationModalProps {
  modalVisible: boolean;
  setModalVisible: Dispatch<SetStateAction<boolean>>;
  selectedState: string;
  setSelectedState: Dispatch<SetStateAction<string>>;
  currentPopup: number;
  setCurrentPopup: Dispatch<SetStateAction<number>>;
}

const LocationModal: React.FC<LocationModalProps> = ({
  modalVisible,
  setModalVisible,
  selectedState,
  setSelectedState,
  currentPopup,
  setCurrentPopup,
}) => {
  const [stateModalVisible, setStateModalVisible] = useState(false);
  const translateY = useRef(new Animated.Value(0)).current;

  const panResponder = useRef(
    PanResponder.create({
      onMoveShouldSetPanResponder: (_, gestureState) => gestureState.dy > 0,
      onPanResponderMove: Animated.event([null, { dy: translateY }], { useNativeDriver: false }),
      onPanResponderRelease: (_, gestureState) => {
        if (gestureState.dy > 100) {
          handleClose();
        } else {
          Animated.spring(translateY, {
            toValue: 0,
            useNativeDriver: true,
          }).start();
        }
      },
    })
  ).current;

  const states = [
    { label: 'Abia', value: 'abia' },
    { label: 'Adamawa', value: 'adamawa' },
    { label: 'Akwa Ibom', value: 'akwa_ibom' },
    { label: 'Anambra', value: 'anambra' },
    { label: 'Bauchi', value: 'bauchi' },
    { label: 'Bayelsa', value: 'bayelsa' },
    { label: 'Benue', value: 'benue' },
    { label: 'Borno', value: 'borno' },
    { label: 'Cross River', value: 'cross_river' },
    { label: 'Delta', value: 'delta' },
    { label: 'Ebonyi', value: 'ebonyi' },
    { label: 'Edo', value: 'edo' },
    { label: 'Ekiti', value: 'ekiti' },
    { label: 'Enugu', value: 'enugu' },
    { label: 'Gombe', value: 'gombe' },
    { label: 'Imo', value: 'imo' },
    { label: 'Jigawa', value: 'jigawa' },
    { label: 'Kaduna', value: 'kaduna' },
    { label: 'Kano', value: 'kano' },
    { label: 'Katsina', value: 'katsina' },
    { label: 'Kebbi', value: 'kebbi' },
    { label: 'Kogi', value: 'kogi' },
    { label: 'Kwara', value: 'kwara' },
    { label: 'Lagos', value: 'lagos' },
    { label: 'Nasarawa', value: 'nasarawa' },
    { label: 'Niger', value: 'niger' },
    { label: 'Ogun', value: 'ogun' },
    { label: 'Ondo', value: 'ondo' },
    { label: 'Osun', value: 'osun' },
    { label: 'Oyo', value: 'oyo' },
    { label: 'Plateau', value: 'plateau' },
    { label: 'Rivers', value: 'rivers' },
    { label: 'Sokoto', value: 'sokoto' },
    { label: 'Taraba', value: 'taraba' },
    { label: 'Yobe', value: 'yobe' },
    { label: 'Zamfara', value: 'zamfara' },
    { label: 'FCT - Abuja', value: 'fct_abuja' },
  ];

  const handleContinue = () => {
    if (currentPopup < 3) {
      setCurrentPopup(currentPopup + 1);
    } else {
      handleClose();
    }
  };

  const handleCancel = () => {
    handleClose();
  };

  const handleClose = () => {
    setModalVisible(false);
    setCurrentPopup(1);
  };

  const renderStateItem = ({ item }: { item: { label: string; value: string } }) => (
    <TouchableOpacity
      style={HeaderNotification.modalContainer}
      onPress={() => {
        setSelectedState(item.value);
        setStateModalVisible(false);
      }}
    >
      <Text style={HeaderNotification.label}>{item.label}</Text>
    </TouchableOpacity>
  );

  return (
    <Modal animationType="slide" transparent visible={modalVisible}>
      <View style={HeaderNotification.overlay}>
        <Animated.View
          style={[HeaderNotification.modalContentContainerOne]}
          {...panResponder.panHandlers}
          // { transform: [{ translateY }] }
        >
          <TouchableOpacity style={HeaderNotification.draggableBar} />
            {/* Popup 1: Change Location */}
            {currentPopup === 1 && (
              <>
                <View style={HeaderNotification.modalContent}>
                  <View style={HeaderNotification.headerRow}>
                    <View style={{ flex: 1, }} >
                      <Text style={HeaderNotification.modalTitle}>Change Location</Text>
                    </View>
                    <AntDesign
                      onPress={handleClose}
                      name="close"
                      size={24}
                      color="black"
                    />
                  </View>
                  <Text style={HeaderNotification.pg}>
                    Want more options? Browse listings from other states to find the best prices and unique items.
                  </Text>
                  <View style={HeaderNotification.pickerWrapper}>
                    <Text style={HeaderNotification.label}>State</Text>
                    <TouchableOpacity
                      style={HeaderNotification.pickerContainer}
                      onPress={() => setStateModalVisible(true)}
                    >
                      <Text style={HeaderNotification.modalText}>
                        {states.find(state => state.value === selectedState)?.label || 'Select a state'}
                      </Text>
                      <Image source={require('../../assets/images/iconDown.png')} style={{ height: 20, width: 20 }} />

                    </TouchableOpacity>
                  </View>
                  <Button
                    title="Change Location"
                    onPress={handleContinue}
                    backgroundColor="#DEBC8E"
                    borderWidth="1"
                  />
                </View>
              </>
            )}
            {/* Popup 2: Interstate Pickup Warning */}
            {currentPopup === 2 && (
              <>
                <View style={HeaderNotification.modalContentTwo}>
                  <View style={HeaderNotification.headerRow}>
                    <View style={{ flex: 1, flexDirection: 'row', alignItems: 'center', justifyContent: 'center' }}>
                      <Image source={require('../../assets/images/danger.png')} style={HeaderNotification.warningIcon} />
                    </View>
                    <AntDesign
                      onPress={handleClose}
                      name="close"
                      size={20}
                      color="black"
                    />
                  </View>
                  <Text style={HeaderNotification.modalTitle}>Interstate Pickup Warning</Text>
                  <Text style={HeaderNotification.modalText}>
                    You are about to change your default location. Please be aware that purchasing items from other states
                    can present unique challenges. Interstate pickups may incur:
                  </Text>
                  <View style={{ marginVertical: 15 }} >
                    <View style={HeaderNotification.listItem}>
                      <Entypo name="dot-single" size={24} color="black" />
                      <Text style={HeaderNotification.modalText}>Higher logistics costs</Text>
                    </View>
                    <View style={HeaderNotification.listItem}>
                      <Entypo name="dot-single" size={24} color="black" />
                      <Text style={HeaderNotification.modalText}>Longer delivery times</Text>
                    </View>
                  </View>
                  <Text style={HeaderNotification.modalText}>
                    We strongly advise exercising caution when buying items from other regions. Only proceed with
                    cross-state transactions if you fully understand and accept the potential complexities.
                  </Text>
                  <View style={HeaderNotification.modalButtons}>
                    <HalfButton
                      title="Cancel"
                      onPress={handleCancel}
                      backgroundColor="#fff"
                      borderWidth="1"
                      borderColor="#463E31"
                    />
                    <HalfButton
                      title="Continue"
                      onPress={handleContinue}
                      backgroundColor="#DEBC8E"
                      borderWidth="1"
                      borderColor="transparent"
                    />
                  </View>
                </View>
              </>
            )}
            {/* Popup 3: Location Updated */}
            {currentPopup === 3 && (
              <>
                <View style={HeaderNotification.modalContent}>
                  <AntDesign
                    name="checkcircle"
                    size={24}
                    color="#009217"
                    style={HeaderNotification.successIcon}
                  />
                  <Text style={HeaderNotification.modalTitle}>
                    Location Updated Successfully!
                  </Text>
                  <Text style={HeaderNotification.successMessage}>
                    You are now browsing from {selectedState} State.
                  </Text>
                  <Button
                    title="Done"
                    onPress={handleClose}
                    backgroundColor="#DEBC8E"
                    borderWidth="1"
                  />
                </View>
              </>
            )}
        </Animated.View>
        
      </View>

      {/* State Selection Modal */}
      <Modal animationType="slide" transparent visible={stateModalVisible}>
        <View style={HeaderNotification.overlay}>
          <View style={HeaderNotification.modalContentStates}>
            <FlatList
              data={states}
              renderItem={renderStateItem}
              keyExtractor={(item) => item.value}
            />
            <Button
              title="Close"
              onPress={() => setStateModalVisible(false)}
              backgroundColor="#DEBC8E"
              borderWidth="1"
            />
          </View>
        </View>
      </Modal>
    </Modal>
  );
};

export default LocationModal;
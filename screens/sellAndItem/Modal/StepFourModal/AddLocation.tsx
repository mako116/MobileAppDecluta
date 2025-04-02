import React, { Dispatch, SetStateAction, useRef, useState } from 'react';
import {
  Modal,
  Text,
  View,
  TouchableOpacity,
  FlatList,
  Animated,
  PanResponder,
} from 'react-native';
import { AntDesign, Entypo } from '@expo/vector-icons';
import Button from '@/components/Button/button';
import HeaderNotification from '@/styles/Notification/HomeHeaderNotificationTabs';
import YourCart from '@/styles/Cart/YourCart.styles';
import Close from '@/assets/images/kyc/close';
import UssdStyles from '@/styles/UssdStyles/Ussdstyles';
import SellItems from '@/styles/sellItem/Sellitem';

interface LocationOption {
  label: string;
  value: string;
}

interface AddLocationModalProps {
  modalVisibles: boolean;
  setModalVisibles: Dispatch<SetStateAction<boolean>>;
  selectedState: LocationOption | null;
  setSelectedState: Dispatch<SetStateAction<LocationOption | null>>;
  selectedCity: LocationOption | null;
  setSelectedCity: Dispatch<SetStateAction<LocationOption | null>>;
  selectedLGA: LocationOption | null;
  setSelectedLGA: Dispatch<SetStateAction<LocationOption | null>>;
  currentPopup: number;
  setCurrentPopup: Dispatch<SetStateAction<number>>;
}

const AddLocationModal: React.FC<AddLocationModalProps> = ({
  modalVisibles,
  setModalVisibles,
  selectedState,
  setSelectedState,
  selectedCity,
  setSelectedCity,
  selectedLGA,
  setSelectedLGA,
  setCurrentPopup,
}) => {
  const [selectionModalVisibles, setSelectionModalVisibles] = useState(false);
  const [selectionType, setSelectionType] = useState<'state' | 'city' | 'lga'>('state');
  const translateY = useRef(new Animated.Value(0)).current;

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

  const states: LocationOption[] = [
    { label: 'Lagos', value: 'lagos' },
    { label: 'Oyo', value: 'oyo' },
  ];

  const cities: LocationOption[] = [
    { label: 'Ikeja', value: 'ikeja' },
    { label: 'Surulere', value: 'surulere' },
    { label: 'Ibadan', value: 'ibadan' },
  ];

  const lgas: LocationOption[] = [
    { label: 'Ikeja North', value: 'ikeja_north' },
    { label: 'Surulere West', value: 'surulere_west' },
    { label: 'Ibadan South', value: 'ibadan_south' },
  ];

  const handleClose = () => {
    setModalVisibles(false);
    setCurrentPopup(1);
  };

  const openSelectionModal = (type: 'state' | 'city' | 'lga') => {
    setSelectionType(type);
    setSelectionModalVisibles(true);
  };

  const handleSelection = (item: LocationOption) => {
    if (selectionType === 'state') {
      setSelectedState(item);
      setSelectedCity(null);
      setSelectedLGA(null);
    } else if (selectionType === 'city') {
      setSelectedCity(item);
      setSelectedLGA(null);
    } else if (selectionType === 'lga') {
      setSelectedLGA(item);
    }
    setSelectionModalVisibles(false);
  };

  const getSelectionData = () => {
    if (selectionType === 'state') return states;
    if (selectionType === 'city' && selectedState) return cities;
    if (selectionType === 'lga' && selectedCity) return lgas;
    return [];
  };

  return (
    <Modal animationType="slide" transparent visible={modalVisibles}>
      <View style={HeaderNotification.overlay}>
        <Animated.View style={HeaderNotification.modalContentContainerOne} {...panResponder.panHandlers}>
          <View style={HeaderNotification.modalContent}>
            <View style={[YourCart.rewardInfoContainer]}>
            <Text style={UssdStyles.headerText}>item Location</Text>
            <TouchableOpacity onPress={handleClose}>
               <Close/>
            </TouchableOpacity>
            </View>

            <Text style={[SellItems.label,{marginVertical:10}]}>States</Text>
            <TouchableOpacity onPress={() => openSelectionModal('state')} style={[HeaderNotification.pickerContainer,{paddingVertical:20}]}>
              <Text>{selectedState ? selectedState.label : 'Select State'}</Text>
            </TouchableOpacity>
            
            <Text style={[SellItems.label,{marginVertical:10}]}>City</Text>
              <TouchableOpacity onPress={() => openSelectionModal('city')} style={[HeaderNotification.pickerContainer,{paddingVertical:20}]}>
                <Text>{selectedCity ? selectedCity.label : 'Select City'}</Text>
              </TouchableOpacity> 
        
            
              <Text style={[SellItems.label,{marginVertical:10}]}>L.G.A/Region</Text>
              <TouchableOpacity onPress={() => openSelectionModal('lga')} style={[HeaderNotification.pickerContainer,{paddingVertical:20,marginBottom:40}]}>
                <Text>{selectedLGA ? selectedLGA.label : 'Select LGA'}</Text>
              </TouchableOpacity>
            

            <Button title="Done" onPress={handleClose} backgroundColor="#DEBC8E" borderWidth={0} />
          </View>
        </Animated.View>
      </View>

      {/* Selection Modal */}
      <Modal animationType="slide" transparent visible={selectionModalVisibles}>
        <View style={HeaderNotification.overlay}>
          <View style={[HeaderNotification.modalContentStates,{borderRadius:20}]}>
          <Text style={UssdStyles.headerText}>
          {selectionType === 'state'
          ? 'State'
          : selectionType === 'city'
           ? 'City'
          : selectionType === 'lga'
          ? 'LGA'
          : ''}
          </Text>
          <FlatList
              data={getSelectionData()}
              renderItem={({ item }) => (
                <TouchableOpacity
                style={ UssdStyles.CategoryItem}
                onPress={() => handleSelection(item)}>
                  <Text style={HeaderNotification.label}>{item.label}</Text>
                </TouchableOpacity>
              )}
              keyExtractor={(item) => item.value}
            />
            <Button title="Close" onPress={() => setSelectionModalVisibles(false)} backgroundColor="#DEBC8E" borderWidth={0} />
          </View>
        </View>
      </Modal>
    </Modal>
  );
};

export default AddLocationModal;

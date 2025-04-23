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
import Button from '@/components/Button/button';
import HeaderNotification from '@/styles/Notification/HomeHeaderNotificationTabs';
import YourCart from '@/styles/Cart/YourCart.styles';
import Close from '@/assets/images/kyc/close';
import UssdStyles from '@/styles/UssdStyles/Ussdstyles';
import SellItems from '@/styles/sellItem/Sellitem';
import ArrowUpGray from '@/assets/svg/ArrowUpGray';
import ArrowGrayDown from '@/assets/svg/ArrowGrayDown';

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
    const [animation] = useState(new Animated.Value(0));

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
      // const [isOpen, setIsOpen] = useState(false);
        
      const [isStateOpen, setIsStateOpen] = useState(false);
const [isCityOpen, setIsCityOpen] = useState(false);
const [isLGAOpen, setIsLGAOpen] = useState(false);

const toggleDropdown = (type: 'state' | 'city' | 'lga') => {
  if (type === 'state') {
    setIsStateOpen(prev => !prev);
    setIsCityOpen(false);
    setIsLGAOpen(false);
  } else if (type === 'city') {
    setIsCityOpen(prev => !prev);
    setIsStateOpen(false);
    setIsLGAOpen(false);
  } else if (type === 'lga') {
    setIsLGAOpen(prev => !prev);
    setIsStateOpen(false);
    setIsCityOpen(false);
  }
};

      // const toggleDropdown = () => {
      //     if (isOpen) {
      //       Animated.timing(animation, {
      //         toValue: 0,
      //         duration: 300,
      //         useNativeDriver: true,
      //       }).start(() => setIsOpen(false));
      //     } else {
      //       setIsOpen(true);
      //       Animated.timing(animation, {
      //         toValue: 1,
      //         duration: 300,
      //         useNativeDriver: true,
      //       }).start();
      //     }
      //   };
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

            <Text style={[SellItems.label,{marginVertical:10,fontSize:14,}]}>States</Text>
            
            <View >
            <TouchableOpacity 
            onPress={() => 
            {
              toggleDropdown('state');
            openSelectionModal('state')} 
            }
            style={[UssdStyles.dropdown, { paddingVertical: 20, flexDirection: 'row', justifyContent: 'space-between', alignItems: 'center' }]}
            >
              <Text>{selectedState ? selectedState.label : 'Select State'}</Text>
              {isStateOpen  ? <ArrowUpGray /> : <ArrowGrayDown />}
            </TouchableOpacity>
            
            </View>
            
            <Text style={[SellItems.label,{marginVertical:10,fontSize:14}]}>City</Text>
              <TouchableOpacity onPress={() => 
                {
                  toggleDropdown('city');
                openSelectionModal('city')}
                 }
                 style={[UssdStyles.dropdown, { paddingVertical: 20, flexDirection: 'row', justifyContent: 'space-between', alignItems: 'center' }]}
                 >
                <Text>{selectedCity ? selectedCity.label : 'Select City'}</Text>
                {isCityOpen  ? <ArrowUpGray /> : <ArrowGrayDown />}
              </TouchableOpacity> 
        
            
              <Text style={[SellItems.label,{marginVertical:10,fontSize:14}]}>L.G.A/Region</Text>
              <TouchableOpacity onPress={() => 
                {
                  toggleDropdown('lga');
                openSelectionModal('lga')}
               }
               style={[UssdStyles.dropdown, { paddingVertical: 20, flexDirection: 'row', justifyContent: 'space-between', alignItems: 'center',marginBottom:"11%" }]}
               >
                <Text>{selectedLGA ? selectedLGA.label : 'Select LGA'}</Text>
                {isLGAOpen  ? <ArrowUpGray /> : <ArrowGrayDown />}

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

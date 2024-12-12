import React, { Dispatch, SetStateAction } from 'react';
import { Modal, Text, View, StyleSheet } from 'react-native';
import Button from '@/components/Button/button';
import { Picker } from '@react-native-picker/picker';
import HalfButton from '@/components/Button/halfButton';
import { AntDesign, Entypo } from '@expo/vector-icons';

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
  const handleContinue = () => {
    if (currentPopup < 3) {
      setCurrentPopup(currentPopup + 1);
    } else {
      setModalVisible(false);
      setCurrentPopup(1);
    }
  };

  const handleCancel = () => {
    setModalVisible(false);
    setCurrentPopup(1);
  };

  return (
    <Modal animationType="slide" transparent visible={modalVisible}>
      <View style={styles.modalContainer}>
        <View style={styles.modalContent}>
          {currentPopup === 1 && (
            <>
              <View style={{flexDirection:"row",   marginHorizontal:"10%",width:"100%", justifyContent:"space-around"  }}>
              <Text style={styles.modalTitle}>Change Location</Text>
              <AntDesign
              onPress={() => setModalVisible(false)}
              name="close" size={24} color="black" style={{ }} />
              </View>
              <Text style={styles.pg}>
                Want more options? Browse listings from other states to find the best prices and unique items.
              </Text>
              <View style={{ width: '100%', paddingVertical: 10 }}>
                <Text style={{ textAlign: 'left', paddingVertical: 5 }}>State</Text>
                <View style={styles.pickerContainer}>
                  <Picker
                    selectedValue={selectedState}
                    onValueChange={(itemValue) => setSelectedState(itemValue)}
                    style={styles.picker}
                  >
                    <Picker.Item label="Oyo" value="oyo" />
                    <Picker.Item label="Lagos" value="lagos" />
                    <Picker.Item label="Abuja" value="abuja" />
                  </Picker>
                </View>
              </View>
              <Button title="Change Location" onPress={handleContinue} backgroundColor="#DEBC8E" borderWidth="1" />
            </>
          )}
          {currentPopup === 2 && (
            <>
              <View style={{flexDirection:"row",   marginHorizontal:"20%",width:"100%", justifyContent:"space-around" , paddingVertical:10 }}>
              <AntDesign name="warning" style={{fontSize:50}} color="#E42527" />
                <AntDesign
              onPress={() => setModalVisible(false)}
              name="close" size={24} color="black" style={{ }} />
              </View>
              <Text style={styles.modalTitle}>Interstate Pickup Warning</Text>
              <Text style={styles.modalText}>
                You are about to change your default location. Please be aware that purchasing items from other states
                can present unique challenges. Interstate pickups may incur:
              </Text>
              <View style={{ flexDirection: 'row' }}>
                <Entypo name="dot-single" size={24} color="black" />
                <Text>Higher logistics costs</Text>
              </View>
              <View style={{ flexDirection: 'row' }}>
                <Entypo name="dot-single" size={24} color="black" />
                <Text>Longer delivery times</Text>
              </View>
              <Text style={styles.modalText}>
                We strongly advise exercising caution when buying items from other regions. Only proceed with
                cross-state transactions if you fully understand and accept the potential complexities.
              </Text>
              <View style={styles.modalButtons}>
                <HalfButton title="Cancel" onPress={handleCancel} backgroundColor="#fff" borderWidth="1" />
                <HalfButton title="Continue" onPress={handleContinue} backgroundColor="#DEBC8E" borderWidth="1" />
              </View>
            </>
          )}
          {currentPopup === 3 && (
            <>
            <AntDesign name="checkcircle" size={24} color="#009217" style={{margin:"auto",paddingVertical:5}}/>
              <Text style={styles.modalTitle}>Location Updated Successfully!</Text>
              <Text style={{margin:"auto",paddingBottom:15}}>You are now browsing from Lagos State.</Text>
              <Button title="Done" onPress={() => setModalVisible(false)} backgroundColor="#DEBC8E" borderWidth="1" />
            </>
          )}
          {/* <Button title="Close Modal"  backgroundColor="#FF0000" borderWidth="1" /> */}
        </View>
      </View>
    </Modal>
  );
};

const styles = StyleSheet.create({
  modalContainer: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: 'rgba(0, 0, 0, 0.5)',
    paddingHorizontal: 15,
  },
  modalContent: {
    width: '100%',
    padding: 20,
    backgroundColor: 'white',
    borderRadius: 10,
  },
  modalTitle: {
    fontFamily: 'HelveticaNeueLTPro',
    fontSize: 18,
    fontWeight: '700',
    marginBottom: 10,
    textAlign: 'center',
  },
  pg: {
    fontFamily: 'Poppins',
    fontSize: 14,
    fontWeight: '400',
    lineHeight: 19.6,
    marginBottom: 10,
    textAlign: 'left',
    color: '#333333',
  },
  modalText: {
    fontSize: 14,
    lineHeight: 19.6,
    marginBottom: 20,
    fontWeight: '400',
  },
  modalButtons: {
    flexDirection: 'row',
    gap: 10,
    justifyContent: 'space-between',
  },
  pickerContainer: {
    borderWidth: 1,
    borderColor: '#E9E9E9',
    borderRadius: 5,
    marginBottom: 10,
  },
  picker: {
    height: 50,
  },
});

export default LocationModal;

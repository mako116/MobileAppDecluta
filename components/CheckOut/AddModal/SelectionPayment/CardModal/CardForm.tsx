import React, { useState } from 'react';
import { Modal, Text, TextInput, TouchableOpacity, View } from 'react-native';
import Close from '@/assets/images/kyc/close';
import Shield from '@/assets/svg/shield';
import Eye from '@/assets/images/kyc/Eye';
import YourCart from '@/styles/Cart/YourCart.styles';

interface CardDetails {
  cardNumber: string;
  expiryDate: string;
  cvv: string;
  cardPin: string;
}

interface CardModalProps {
  visible: boolean;
  onClose: () => void;
  onSave: (cardDetails: CardDetails) => void;
}

const CardModal = ({ visible, onClose, onSave }: CardModalProps) => {
  const [cardDetails, setCardDetails] = useState<CardDetails>({
    cardNumber: '',
    expiryDate: '',
    cvv: '',
    cardPin: '',
  });
  const [showCardPin, setShowCardPin] = useState<boolean>(false); // State to toggle the visibility of the PIN

  const handleCardInputChange = (name: keyof CardDetails, value: string) => {
    setCardDetails((prevDetails) => ({ ...prevDetails, [name]: value }));
  };

  // Handle CVV to accept only 3 digits
  const handleCvvChange = (value: string) => {
    if (value.length <= 3 && /^[0-9]*$/.test(value)) {
      handleCardInputChange('cvv', value);
    }
  };

  // Format Expiry Date to MM/YYYY
  const handleExpiryDateChange = (value: string) => {
    // Remove any non-numeric characters
    let formattedValue = value.replace(/[^0-9]/g, '');

    // Add a slash after the first 2 digits
    if (formattedValue.length > 2) {
      formattedValue = `${formattedValue.slice(0, 2)}/${formattedValue.slice(2, 6)}`;
    }

    // Limit length to 7 characters (MM/YYYY)
    if (formattedValue.length <= 7) {
      handleCardInputChange('expiryDate', formattedValue);
    }
  };

  // Format card number to show only the first 4 and last 4 digits
  const formatCardNumber = (cardNumber: string) => {
    return cardNumber.replace(/(\d{4})(\d{4})(\d{4})(\d{4})/, '$1 **** **** $4');
  };

  // Check if all inputs are filled
  const isFormValid = Object.values(cardDetails).every((value) => value !== '');

  return (
    <Modal transparent={true} animationType="slide" visible={visible} onRequestClose={onClose}>
      <View style={YourCart.modalContainer}>
        <View style={YourCart.modalContent}>
          <View style={{ justifyContent: 'center', flexDirection: 'row', paddingBottom: 13, paddingTop: 5 , flex:1}}>
            <Text style={YourCart.modalTitle}>Add Card</Text>
            <TouchableOpacity onPress={onClose}>
              <Close />
            </TouchableOpacity>
          </View>

          {/* Card Details Form */}
          <View style={YourCart.inputGroup}>
            <Text style={YourCart.label}>Enter Card Number</Text>
            <View style={YourCart.notificationCont}>
              <TextInput
                style={YourCart.input}
                placeholderTextColor="#a4a4a4"
                placeholder="e.g 1234 1234 1234 1234"
                keyboardType="number-pad"
                value={cardDetails.cardNumber}
                onChangeText={(text) => handleCardInputChange('cardNumber', text)}
              />
            </View>
          </View>

          <View style={YourCart.inputGroup}>
            <Text style={YourCart.label}>Expiry Date</Text>
            <View style={YourCart.notificationCont}>
              <TextInput
                style={YourCart.input}
                placeholderTextColor="#a4a4a4"
                placeholder="e.g 06/2024"
                keyboardType="number-pad"
                value={cardDetails.expiryDate}
                onChangeText={handleExpiryDateChange} // Use the formatted expiry date function
              />
            </View>
          </View>

          <View style={YourCart.inputGroup}>
            <Text style={YourCart.label}>CVV (3 digit code on the back of your card)</Text>
            <View style={YourCart.notificationCont}>
              <TextInput
                style={YourCart.input}
                placeholderTextColor="#a4a4a4"
                placeholder="e.g 123"
                keyboardType="number-pad"
                secureTextEntry={true}
                value={cardDetails.cvv}
                onChangeText={handleCvvChange}
              />
            </View>
          </View>

          <View style={YourCart.inputGroup}>
            <Text style={YourCart.label}>Enter Card PIN</Text>
            <View style={YourCart.notificationCont}>
              <TextInput
                style={[YourCart.input, { flex: 1 }]}
                placeholder="e.g 1111"
                keyboardType="number-pad"
                secureTextEntry={!showCardPin}
                value={cardDetails.cardPin}
                onChangeText={(text) => handleCardInputChange('cardPin', text)}
              />
              <TouchableOpacity onPress={() => setShowCardPin((prev) => !prev)} style={YourCart.eyeIcon}>
                {showCardPin ? <Eye /> : <Eye />}
              </TouchableOpacity>
            </View>
          </View>

          {/* Verify Button */}
          <TouchableOpacity
            onPress={() => {
              onSave(cardDetails); // Save the card details
            }}
            style={[YourCart.bottomButtons, { backgroundColor: isFormValid ? '#DEBC8E' : '#E9E9E9' }]}
            disabled={!isFormValid} // Disable button if form is not valid
          >
            <Text style={[YourCart.buttonText, { color: isFormValid ? '#212121' : '#A4A4A4' }]}>Verify Card</Text>
          </TouchableOpacity>

          <View
            style={{
              paddingTop: 12,
              alignItems: 'center',
              justifyContent: 'center',
              flexDirection: 'row',
              backgroundColor: '#fff',
              opacity: 0.5,
            }}
          >
            <Shield />
            <Text
              style={{
                textAlign: 'center',
                color: '#A4A4A4',
                fontSize: 12,
                fontStyle: 'italic',
                lineHeight: 16.8,
                fontFamily: 'Proxima Nova',
              }}
            >
              This form is encrypted
            </Text>
          </View>
        </View>
      </View>
    </Modal>
  );
};

export default CardModal;

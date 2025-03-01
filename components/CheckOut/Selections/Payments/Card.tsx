import React, { useState } from 'react';
import { Image, StyleSheet, Text, TouchableOpacity, View } from 'react-native';
import YourCart from '@/styles/Cart/YourCart.styles';
import Addcircle from '@/assets/svg/addcircle';
import Arrowleft from '@/assets/svg/arrowleft';
 
import { Fontisto } from '@expo/vector-icons';
import CardModal from '../../AddModal/SelectionPayment/CardModal/CardForm';
import SuccessModal from '../../AddModal/SelectionPayment/CardModal/CardSuccess';

// Define interface for card details
interface CardDetails {
  cardNumber: string;
  expiryDate: string;
  cvv: string;
  cardPin: string;
}

const Card = () => {
    const [modalVisible, setModalVisible] = useState(false); // For showing/hiding the card details modal
    const [successModalVisible, setSuccessModalVisible] = useState(false); // For showing/hiding the success modal
    const [savedCards, setSavedCards] = useState<CardDetails[]>([]); // Store multiple saved card details
    const [isCardSelected, setIsCardSelected] = useState<number | null>(null); // To track which card is selected
  
    const handleSaveCard = (cardDetails: CardDetails) => {
      setSavedCards((prevCards) => [...prevCards, cardDetails]); // Save the new card
      setModalVisible(false); // Close the card details modal
      setSuccessModalVisible(true); // Show the success modal
    };
  
    const handleCardSelect = (index: number) => {
      setIsCardSelected(index); // Toggle the selected state of the card
    };

    // Function to mask card number
   const maskCardNumber = (cardNumber: string) => {
    const firstPart = cardNumber.slice(0, 4); // First 4 digits
    const lastPart = cardNumber.slice(-4); // Last 4 digits
    const maskedPart = '*'.repeat(cardNumber.length - 8); // Masked middle part
    
    // Return masked card number
    return `${firstPart}${maskedPart}${lastPart}`;
  };
  
  
    return (
      <View>
        {/* Main container */}
        <View style={styles.main}>
          {/* Title */}
          <Text style={YourCart.title}>Select Payment Card</Text>
          <Text style={[YourCart.price, { paddingTop: 0 }]}>
            Select a card to pay with or add a new one. Please note that only cards linked to your bank account can be added.
          </Text>
  
          {/* Add card button */}
          <TouchableOpacity style={YourCart.rowSed} onPress={() => setModalVisible(true)}>
            <View style={YourCart.rows}>
              <Addcircle />
              <Text style={YourCart.CardText}>Add new card</Text>
            </View>
            <Arrowleft />
          </TouchableOpacity>
  
          {/* Display Added Cards */}
          {savedCards.length > 0 ? (
            savedCards.map((card, index) => (
              <TouchableOpacity onPress={() => handleCardSelect(index)} key={index} style={YourCart.rowSed}>
                <View  style={YourCart.rows}>
                  <Image
                    source={require('../../../../assets/svg/accessbnk.png')}
                    style={{ width: 20, height: 30 }}
                    resizeMode="cover"
                  />
                  <View>
                    <Text style={YourCart.CardText}>Access Bank</Text>
                    <Text style={YourCart.bonusT}>
                      {maskCardNumber(card.cardNumber)}
                    </Text>
                  </View>
                </View>
                {/* Toggle Radio Button */}
                <View  style={styles.radioContainer}>
                  <Fontisto
                    name={isCardSelected === index ? 'radio-btn-active' : 'radio-btn-passive'}
                    size={18}
                    color={isCardSelected === index ? '#DFBD8F' : '#B5B5B5'} // Active state is yellow, passive is gray
                  />
                </View>
              </TouchableOpacity>
            ))
          ) : (
            <></>
          )}
  
          {/* Action Button */}
          <TouchableOpacity style={YourCart.bottomButton}>
            <Text style={YourCart.buttonText}>Proceed to Payment</Text>
          </TouchableOpacity>
        </View>
  
        {/* Card Modal */}
        <CardModal visible={modalVisible} onClose={() => setModalVisible(false)} onSave={handleSaveCard} />
  
        {/* Success Modal */}
        <SuccessModal visible={successModalVisible} onClose={() => setSuccessModalVisible(false)} />
      </View>
    );
  };
  
  const styles = StyleSheet.create({
    main: {
      borderWidth: 1,
      borderColor: '#E9E9E9',
      paddingVertical: 17,
      paddingHorizontal: 10,
      gap: 7,
      backgroundColor: '#fff',
      borderRadius: 4,
    },
    radioContainer: {
      justifyContent: 'center',
      alignItems: 'center',
    },
    radioButton: {
      width: 20,
      height: 20,
      borderRadius: 10,
      borderWidth: 2,
      borderColor: '#009217', // Green border for the radio button
      backgroundColor: 'transparent',
    },
    selectedRadioButton: {
      backgroundColor: '#009217', // Green color for the selected radio button
    },
  });
export default Card;

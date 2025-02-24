import React, { useEffect, useState } from "react";
import {  Text, TouchableOpacity, View , Modal,
    TextInput,
    FlatList,   Animated,
    ScrollView,} from 'react-native';
import DropdownUssD from '../../AddModal/SelectionPayment/UssDModal/USSDModal';
 import { Ionicons } from '@expo/vector-icons';
import ArrowUpGray from "@/assets/svg/ArrowUpGray";
import ArrowGrayDown from "@/assets/svg/ArrowGrayDown";
import Colon from "@/assets/svg/colon";
import Search from "@/assets/images/kyc/Search";
 import LeftButton from "@/assets/images/cart/arrowLeftMain";
import UssdStyles from "@/styles/UssdStyles/Ussdstyles";
import YourCart from "@/styles/Cart/YourCart.styles";

type Bank = {
    name: string;
    ussd: string;

   };

const banks = [
    { name: "Access Bank", ussd: "*901#" },
    { name: "GTBank", ussd: "*737*1111*0000#" },
    { name: "First Bank", ussd: "*894#" },
    { name: "Zenith Bank", ussd: "*966#" },
    
  ];
const Ussd = () => {

    const [modalVisible, setModalVisible] = useState(false);
    const [selectedBank, setSelectedBank] = useState<Bank | null>(null);
    const [searchQuery, setSearchQuery] = useState("");
    const [dropdownVisible, setDropdownVisible] = useState(false);

    const [isOpen, setIsOpen] = useState(false);
    const [animation] = useState(new Animated.Value(0));
    const [minutes, setMinutes] = useState(4);
    const [seconds, setSeconds] = useState(58);
  
    const filteredBanks = banks.filter((bank) =>
      bank.name.toLowerCase().includes(searchQuery.toLowerCase())
    );
  
    const handleSelectBank = (bank: Bank) => {
        setSelectedBank(bank);
        setModalVisible(false);
      };

      useEffect(() => {
        const timer = setInterval(() => {
          if (seconds > 0) {
            setSeconds((prev) => prev - 1);
          } else if (minutes > 0) {
            setMinutes((prev) => prev - 1);
            setSeconds(59);
          } else {
            setMinutes(4);
            setSeconds(58);
          }
        }, 1000);
    
        return () => clearInterval(timer);
      }, [minutes, seconds]);
    
      const formatDigits = (num: number) => String(num).padStart(2, '0').split('');
    
      const minutesArray = formatDigits(minutes);
      const secondsArray = formatDigits(seconds);
    
      const toggleDropdown = () => {
        if (isOpen) {
          Animated.timing(animation, {
            toValue: 0,
            duration: 300,
            useNativeDriver: true,
          }).start(() => setIsOpen(false));
        } else {
          setIsOpen(true);
          Animated.timing(animation, {
            toValue: 1,
            duration: 300,
            useNativeDriver: true,
          }).start();
        }
      };
    
      const scaleY = animation.interpolate({
        inputRange: [0, 1],
        outputRange: [0, 1],
      });
    
      const renderDigitBoxes = (digits: string[]) =>
        digits.map((digit, index) => (
          <View key={index} style={UssdStyles.digitBox}>
            <Text style={UssdStyles.digitText}>{digit}</Text>
          </View>
        ));
    
    return (
        <View style={UssdStyles.container}>
      <View style={UssdStyles.header}>
        <Text style={[YourCart.title, UssdStyles.title]}>Select Bank</Text>
        <Text style={YourCart.bonusText}>
          Select your bank to initiate USSD payment. Transfer from your own bank account.
        </Text>
      </View>
      {/* Dropdown for USSD Payment */}
      <View style={UssdStyles.dropdown}>
      <TouchableOpacity
        onPress={() => setModalVisible(true)}
        style={{width:"90%"}}
      >
        <Text style={YourCart.title}>
          {selectedBank ? `${selectedBank.name}` : "Select option"}
        </Text>
       
      </TouchableOpacity>

      <TouchableOpacity onPress={toggleDropdown} style={{width:"100%"}}>
       {isOpen ? <ArrowUpGray /> : <ArrowGrayDown />}
      </TouchableOpacity>
      </View>
      {/* <DropdownUssD /> */}
      <Animated.View style={[UssdStyles.dropdowns, { transform: [{ scaleY }] }]}>
      {isOpen && (
  <View style={UssdStyles.dropdownContainer}>
    <ScrollView showsVerticalScrollIndicator={false}>
      {selectedBank && (
        <View style={YourCart.UssdModal}>
          <Text style={YourCart.titles}>
            Next, dial or tap the USSD code below on your phone to complete the payment.
          </Text>
          <View style={YourCart.Rounded}>
            <Text style={YourCart.textcent}>{selectedBank?.ussd}</Text>
          </View>
          <Text style={YourCart.smallTxt}>
            Dial the code and complete payment within the next
          </Text>
          <View style={UssdStyles.timerContainer}>
            <View style={{ flexDirection: 'column' }}>
              <View style={{ flexDirection: 'row' }}>
                {renderDigitBoxes(minutesArray)}
              </View>
              <Text>Minutes</Text>
            </View>
            <View style={UssdStyles.colon}>
              <Colon />
            </View>
            <View style={{ flexDirection: 'column' }}>
              <View style={{ flexDirection: 'row' }}>
                {renderDigitBoxes(secondsArray)}
              </View>
              <Text>Seconds</Text>
            </View>
          </View>
        </View>
      )}
    </ScrollView>
  </View>
     )}

      </Animated.View>
      {/* Modal dropdown */}
      <Modal visible={modalVisible} animationType="slide" transparent>
        <View style={UssdStyles.modalOverlay}>
          <View style={UssdStyles.modalContent}>
             {/* Modal Header */}
            <View style={[YourCart.rewardInfoContainer,{width:"90%"}]}>
              <TouchableOpacity >
               <LeftButton />
               </TouchableOpacity>
             {/* Convert totalAmount to string */}
              <Text style={UssdStyles.headerText}>Select Bank</Text>
            </View>
           <View style={UssdStyles.dropdowned}>
           <TextInput
              style={UssdStyles.searchInput}
              placeholder="Search"
              value={searchQuery}
              onChangeText={setSearchQuery}
            />
            <Search/>
           </View>
             <TouchableOpacity
              style={UssdStyles.dropdown}
              onPress={() => setDropdownVisible(!dropdownVisible)}
            >
             <Text style={[YourCart.bonusText,{color:'#A4A4A4'}]}>
          {selectedBank ? selectedBank.name : "Select option"}
          </Text>
          {dropdownVisible ? <ArrowUpGray /> : <ArrowGrayDown />}
          </TouchableOpacity>

             {/* Dropdown List */}
             {dropdownVisible && (
            <FlatList
              data={filteredBanks}
              keyExtractor={(item) => item.name}
              renderItem={({ item }) => (
                <TouchableOpacity
                  style={UssdStyles.bankItem}
                  onPress={() => handleSelectBank(item)}
                >
                  <Text style={[YourCart.rewardText,{fontWeight:"400",color:"#212121s"}]}>{item.name}</Text>
                 </TouchableOpacity>
              )}
            />
        )}
          
          </View>
        </View>
      </Modal>
    </View>
    );
}

export default Ussd;

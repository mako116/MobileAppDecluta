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
import AddUssdModal from "../../AddModal/SelectionPayment/UssDModal/AddUssdModal";
import ViewUssdDetail from "../../AddModal/SelectionPayment/UssDModal/ViewUssdDetail";
import HeaderWithDesc from "@/UI/Header/HeaderWithDescription";
import DropdownWithSummary from "../../dropdownSummary/ShowSummary";
import CheckSquares from "@/assets/svg/Check square";
import { router } from "expo-router";
import Refresh2 from "@/assets/images/New folder/refresh-2";

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
    // const [dropdownVisible, setDropdownVisible] = useState(false);

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
          const handleBackCheckout = () =>{
            router.push("/(routes)/checkout")
          }
    
    return (
      <View style={{height:"100%",}}>
      <HeaderWithDesc title='Pay with Bank Transfer' paddingTop={50} />
    <ScrollView contentContainerStyle={{flexDirection:"column",justifyContent:"space-between", }}>
      
      <View style={[YourCart.main,{paddingHorizontal:20,marginBottom:"40%"}]}>
      <DropdownWithSummary />

       <View style={UssdStyles.dropdownsd}>
        <Text style={[YourCart.title, UssdStyles.title]}>Select Bank</Text>
        <Text style={YourCart.bonusText}>
          Select your bank to initiate USSD payment. Transfer from your own bank account.
        </Text>
   
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
      </View>
      {/* <DropdownUssD /> */}
      <ViewUssdDetail
      //  isOpen={isOpen}
      scaleY={scaleY}
      selectedBank={selectedBank}
      minutesArray={minutesArray}
     secondsArray={secondsArray}
      renderDigitBoxes={renderDigitBoxes}
      />
 
      {/* Modal Component */}
      <AddUssdModal
        visible={modalVisible}
        onClose={() => setModalVisible(false)}
        banks={banks}
        selectedBank={selectedBank}
        onSelectBank={setSelectedBank}
        searchQuery={searchQuery}
        setSearchQuery={setSearchQuery}
      />
    </View>
    </ScrollView>
    <View style={{paddingHorizontal:20,paddingBottom:30,gap:10 }}>
         {/* Action Button */}
         <TouchableOpacity onPress={handleBackCheckout} style={YourCart.bottomButton}>
          <CheckSquares />
          <Text style={YourCart.buttonText}>Click here after transfer</Text>
        </TouchableOpacity>

 {/* Change payment method */}
      <TouchableOpacity onPress={() => router.push("/(routes)/checkout")} style={{flexDirection:"row",alignItems:"center",justifyContent:"center",gap:5}}>
        <Refresh2 />
        <Text style={YourCart.title}>Change payment method</Text>
      </TouchableOpacity>
      </View>
    </View>
    
    );
}

export default Ussd;

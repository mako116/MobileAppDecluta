import React, { useEffect, useState } from "react";
import { StyleSheet, Text, TouchableOpacity, View , Modal,
    TextInput,
    FlatList,   Animated,
    ScrollView,} from 'react-native';
import DropdownUssD from '../../AddModal/SelectionPayment/UssDModal/USSDModal';
import YourCart from '@/styles/Cart/YourCart.styles';
import { Ionicons } from '@expo/vector-icons';
import ArrowUpGray from "@/assets/svg/ArrowUpGray";
import ArrowGrayDown from "@/assets/svg/ArrowGrayDown";
import Colon from "@/assets/svg/colon";
import Search from "@/assets/images/kyc/Search";
 import BackButton from "@/assets/images/kyc/LeftArrow";
import LeftButton from "@/assets/images/cart/arrowLeftMain";

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
          <View key={index} style={styles.digitBox}>
            <Text style={styles.digitText}>{digit}</Text>
          </View>
        ));
    
    return (
        <View style={styles.container}>
      <View style={styles.header}>
        <Text style={[YourCart.title, styles.title]}>Select Bank</Text>
        <Text style={YourCart.bonusText}>
          Select your bank to initiate USSD payment. Transfer from your own bank account.
        </Text>
      </View>
      {/* Dropdown for USSD Payment */}
      <View style={styles.dropdown}>
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
      <Animated.View style={[styles.dropdowns, { transform: [{ scaleY }] }]}>
      {isOpen && (
  <View style={styles.dropdownContainer}>
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
          <View style={styles.timerContainer}>
            <View style={{ flexDirection: 'column' }}>
              <View style={{ flexDirection: 'row' }}>
                {renderDigitBoxes(minutesArray)}
              </View>
              <Text>Minutes</Text>
            </View>
            <View style={styles.colon}>
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
        <View style={styles.modalOverlay}>
          <View style={styles.modalContent}>
             {/* Modal Header */}
            <View style={[YourCart.rewardInfoContainer,{width:"90%"}]}>
              <TouchableOpacity >
               <LeftButton />
               </TouchableOpacity>
             {/* Convert totalAmount to string */}
              <Text style={styles.headerText}>Select Bank</Text>
            </View>
           <View style={styles.dropdowned}>
           <TextInput
              style={styles.searchInput}
              placeholder="Search"
              value={searchQuery}
              onChangeText={setSearchQuery}
            />
            <Search/>
           </View>
             <TouchableOpacity
              style={styles.dropdown}
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
                  style={styles.bankItem}
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
const styles = StyleSheet.create({
    container: {
      gap: 5,
      paddingBottom: 10,
      paddingHorizontal: 10,
      paddingVertical: 10,
      borderWidth: 1,
      borderColor: '#E9E9E9',
      borderRadius: 4,  
      backgroundColor: '#FFFFFF',  
    },
    headerText: {
        marginHorizontal:"auto",
        fontSize: 19,
       fontWeight: '700',
       color: '#212121',
        marginTop: 13,
       fontFamily:"Helvetica Neue",
       paddingBottom:14,
       lineHeight:26.6
     },
    dropdownButton: {
        width: "100%",
        padding: 10,
        borderWidth: 1,
        borderColor: "#E9E9E9",
        borderRadius: 8,
        backgroundColor: "#f8f8f8",
        alignItems: "center",
      },
      dropdownButtonText: {
        fontSize: 16,
        color: "#333",

      },
    header: {
      paddingBottom: 5,
    },
    title: {
      fontSize: 16,
      // fontWeight: '600',  
      // color: '#333333',  
    },
    dropdown: {
        flexDirection: "row",
        justifyContent: "space-between",
        alignItems: "center",
        padding: 15,
        borderWidth: 1,
        borderColor: "#E9E9E9",
        borderRadius: 6,
        backgroundColor: "#FFFFFF",
      },
      dropdowned: {
        flexDirection: "row",
        justifyContent: "space-between",
        alignItems: "center",
        paddingHorizontal: 15,
        borderWidth: 1,
        borderColor: "#E9E9E9",
        borderRadius: 6,
        backgroundColor: "#FFFFFF",
        marginVertical: 10,
        paddingVertical:3,
      },
      dropdownText: {
        fontSize: 16,
        color: "#333",
      },
      modalOverlay: {
        flex: 1,
        justifyContent: "flex-end",
        alignItems: "center",
        backgroundColor: "rgba(0,0,0,0.5)",
      },
      modalContent: {
        width: "100%",
        backgroundColor: "white",
        borderRadius: 10,
        padding: 20,
        elevation: 5,
      },
      searchInput: {
        // borderWidth: 1,
        borderColor: "#CBD5E0",
        borderRadius: 6,
        padding: 10,
        marginVertical: 5,
      },
      bankItem: {
        flexDirection: "row",
        justifyContent: "space-between",
        paddingVertical: 20,
        paddingHorizontal:10
       
      },
      bankName: {
        fontSize: 16,
        fontWeight: "500",
      },
      ussdCode: {
        fontSize: 14,
        color: "#666",
      },
      closeButton: {
        marginTop: 10,
        padding: 12,
        backgroundColor: "#E53E3E",
        borderRadius: 6,
        alignItems: "center",
      },
      closeText: {
        color: "#FFF",
        fontSize: 16,
        fontWeight: "600",
      },
      button: {
        width: '100%',
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'space-between',
        backgroundColor: '#fff',
        paddingHorizontal: 13,
        paddingVertical: 13,
        borderTopLeftRadius: 4,
        borderTopRightRadius: 4,
        borderColor: '#E9E9E9',
        borderWidth: 1,
      },
      buttonRow: {
        flexDirection: 'row',
        gap: 10,
        alignItems: 'center',
      },
      dropdowns: {
        overflow: 'hidden',
      },
      dropdownContainer: {
        backgroundColor: '#fff',
        width: '100%',
        borderBottomLeftRadius: 4,
        borderBottomRightRadius: 4,
        borderLeftWidth: 1,
        borderRightWidth: 1,
        borderBottomWidth: 1,
        borderColor: '#E9E9E9',
      },
      row: {
        flexDirection: 'row',
        alignItems: 'center',
        gap: 2,
      },
      saveText: {
        color: '#009217',
        fontWeight: '400',
        fontSize: 12,
        lineHeight: 16.8,
        textAlign: 'right',
      },
      timerContainer: {
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'center',
        marginTop: 20,
        padding: 10,
      },
      digitBox: {
        marginHorizontal:6,
        paddingVertical:7,
        paddingHorizontal:15,
         borderWidth: 1,
        borderColor: '#E9E9E9',
        justifyContent: 'center',
        alignItems: 'center',
        borderRadius: 4,
        backgroundColor: '#F5EADC',
       },
      colon: {
       alignItems:"center",
        marginBottom:"10%"
      },
      digitText: {
        fontSize: 22,
        fontWeight: '600',
        color: '#333',
      },
  });
export default Ussd;

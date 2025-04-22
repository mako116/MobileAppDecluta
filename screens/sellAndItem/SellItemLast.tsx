import SellItems from '@/styles/sellItem/Sellitem';
import HeaderWithDesc from '@/UI/Header/HeaderWithDescription';
import React, { useState, useEffect } from 'react';
import { Text, TouchableOpacity, View, ScrollView, StyleSheet, Image } from 'react-native';
import { SignUpStyles } from '@/styles/Signup/signup.style';
import TextAreaField from '@/UI/InputFields/TextAreaInput';
import SelectDropdown from '@/UI/SelectDropdown/SelectDropdown';
import TextInputField from '@/UI/InputFields/TextInputField';
import Disclaimer from './Modal/Disclaimer/Disclaimer';

const SellItemLast = () => {
    const [title, setTitle] = useState('');
    const [description, setDescription] = useState('');
    // const [quantity, setquantity] = useState('');
    const [selectedAvailability, setSelectedAvailability] = useState<string | null>(null);
    const [isButtonEnabled, setIsButtonEnabled] = useState(false);
    const [modalVisible, setModalVisible] = useState(false);

    // Effect to check if any field is filled or selected
    useEffect(() => {
        const shouldEnableButton = title.trim() !== '' || description.trim() !== '' || selectedAvailability !== null;

        if (isButtonEnabled !== shouldEnableButton) {
            setIsButtonEnabled(shouldEnableButton);
        }
    }, [title, description, selectedAvailability, isButtonEnabled]);

    // Convert string to number safely
    const formatToNGN = (value: string) => {
        const number = parseFloat(value.replace(/,/g, ''));
        if (isNaN(number)) return '';
        return new Intl.NumberFormat('en-NG', {
          style: 'currency',
          currency: 'NGN',
          minimumFractionDigits: 0,
        }).format(number);
      };
      
      const openModal = () => {
        setModalVisible(true);
       };
    return (
        <>
            <HeaderWithDesc title={'Sell an item'} subTile='(Step 5/5)' headerSave={isButtonEnabled ? 'Save' : ''} />

            {/* Form ScrollView */}
            <ScrollView contentContainerStyle={SellItems.scrollViewContent}>
                <View style={SellItems.contains}>
                    {/* Item Details Section */}
                    <Text style={[SellItems.label, { marginTop: 5 }]}>Item Pricing</Text>
                    <Text style={[SellItems.label, { marginTop: 10,fontSize:15 }]}>Sale Price</Text>
                    <TextInputField
                        placeholder="0"
                        value={title}
                        symbol="₦"  // Display the ₦ symbol
                        onChangeText={setTitle}
                        placeholderTextColor="gray"
                    />
                </View>

                {/* Description Section */}
                <View style={SellItems.contains}>
                    <Text style={[SellItems.label]}>Discount Price</Text>
                    <TextInputField
                        placeholder= ""
                        symbol="₦"  // Display the ₦ symbol
                        value={description}
                        onChangeText={setDescription}
                        placeholderTextColor="gray"
                    />
                 </View>

                {/* Service Fee */}
                 
                 <Text style={[SellItems.label]}>
                    Service Fee
                 </Text>
                 <View style={{flexDirection:"row",alignItems:"center",marginVertical:10}}>
                 <Text>
                 We take 10% commission on sold items.
                 </Text>
                 <Image source={require("../../assets/images/info-circle.png")} style={{width:16,height:16}} />
                 </View>

                 <View style={styles.container}>
                 <Text style={[SellItems.label,{fontSize:14,lineHeight:30}]}>
                 10% DecluttaKing Service Fee
                </Text> 
                {title.trim() !== '' && (
                 <Text style={[SellItems.subLabal,{fontFamily:"Proxima Nova",}]}>
                {formatToNGN(title)}
                </Text> 
                  )}

                <Text style={[SellItems.label,{fontSize:14,marginTop:14,lineHeight:30}]}>
                 You'll Receive
                </Text> 
                <Text>
                Your estimated payment after our service fee.
                </Text>
                {description.trim() !== '' && (
                 <Text style={[SellItems.subLabal,{fontFamily:"Proxima Nova",}]}>
                     {formatToNGN(description)}
                </Text> 
                  )}
                 </View>
            </ScrollView>

            {/* Buttons at the Bottom */}
            <View style={SellItems.flexDifAbs}>
                <TouchableOpacity
                    style={[SignUpStyles.loginButtoned, { backgroundColor: '#fff', borderWidth: 1, borderColor: "#463E31", width: "100%" }]}
                >
                    <Text style={SignUpStyles.loginText}>Back</Text>
                </TouchableOpacity>

                <TouchableOpacity
                onPress={openModal}
                    style={[SignUpStyles.loginButtoned, !isButtonEnabled && { backgroundColor: '#E9E9E9', width: "100%" }]}
                    disabled={!isButtonEnabled}
                >
                    <Text style={SignUpStyles.loginText}>Next</Text>
                </TouchableOpacity>
            </View>
            <Disclaimer 
             visible={modalVisible}
             onClose={() => setModalVisible(false)}
            /> 
        </>
    );
};

// Styles
const styles = StyleSheet.create({
    scrollViewContent: {
        flexGrow: 1,
        paddingBottom: "60%", // Adds space for the buttons
    },
    buttonContainer: {
        position: 'absolute',
        bottom: 0,
        width: '100%',
        paddingHorizontal: 20,
        paddingBottom: 20,
    },
    container: {
        borderColor:"#E9E9E9",
        backgroundColor: "white",
        borderWidth: 1,
        borderRadius: 5,
        paddingHorizontal: 15,
        paddingVertical:15,
        marginVertical: 5,
    },
});

export default SellItemLast;

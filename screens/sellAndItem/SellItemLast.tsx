import SellItems from '@/styles/sellItem/Sellitem';
import HeaderWithDesc from '@/UI/Header/HeaderWithDescription';
import React, { useState, useEffect } from 'react';
import { Text, TouchableOpacity, View, ScrollView, StyleSheet } from 'react-native';
import { SignUpStyles } from '@/styles/Signup/signup.style';
import TextAreaField from '@/UI/InputFields/TextAreaInput';
import SelectDropdown from '@/UI/SelectDropdown/SelectDropdown';
import TextInputField from '@/UI/InputFields/TextInputField';

const SellItemLast = () => {
    const [title, setTitle] = useState('');
    const [description, setDescription] = useState('');
    const [quantity, setquantity] = useState('');
    const [selectedAvailability, setSelectedAvailability] = useState<string | null>(null);
    const [isButtonEnabled, setIsButtonEnabled] = useState(false);

    // Effect to check if any field is filled or selected
    useEffect(() => {
        const shouldEnableButton = title.trim() !== '' || description.trim() !== '' || selectedAvailability !== null;

        if (isButtonEnabled !== shouldEnableButton) {
            setIsButtonEnabled(shouldEnableButton);
        }
    }, [title, description, selectedAvailability, isButtonEnabled]);

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
                 <Text>
                 We take 10% commission on sold items.
                 </Text>
            </ScrollView>

            {/* Buttons at the Bottom */}
            <View style={SellItems.flexDifAbs}>
                <TouchableOpacity
                    style={[SignUpStyles.loginButtoned, { backgroundColor: '#fff', borderWidth: 1, borderColor: "#463E31", width: "100%" }]}
                >
                    <Text style={SignUpStyles.loginText}>Back</Text>
                </TouchableOpacity>

                <TouchableOpacity
                    style={[SignUpStyles.loginButtoned, !isButtonEnabled && { backgroundColor: '#E9E9E9', width: "100%" }]}
                    disabled={!isButtonEnabled}
                >
                    <Text style={SignUpStyles.loginText}>Next</Text>
                </TouchableOpacity>
            </View>
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
});

export default SellItemLast;

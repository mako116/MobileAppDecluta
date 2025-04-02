import SellItems from '@/styles/sellItem/Sellitem';
import HeaderWithDesc from '@/UI/Header/HeaderWithDescription';
import React, { useState, useEffect } from 'react';
import { Text, TouchableOpacity, View, ScrollView, StyleSheet } from 'react-native';
import { SignUpStyles } from '@/styles/Signup/signup.style';
import TextAreaField from '@/UI/InputFields/TextAreaInput';
import SelectDropdown from '@/UI/SelectDropdown/SelectDropdown';
import TextInputField from '@/UI/InputFields/TextInputField';
import { router } from 'expo-router';

const SellItemSecond = () => {
    const [title, setTitle] = useState('');
    const [description, setDescription] = useState('');
    const [quantity, setQuantity] = useState('');
    const [selectedAvailability, setSelectedAvailability] = useState<string | null>(null);
    const [isButtonEnabled, setIsButtonEnabled] = useState(false);

    // Effect to check if any field is filled or selected
    useEffect(() => {
        setIsButtonEnabled(title.trim() !== '' || description.trim() !== '' || selectedAvailability !== null);
    }, [title, description, selectedAvailability]);

    const handleNext = () => {
        if (isButtonEnabled) {
            router.push("/sellanItem/thirdStep");
        }
    };

    return (
        <>
            <HeaderWithDesc title={'Sell an item'} subTile='(Step 2/5)' headerSave={isButtonEnabled ? 'Save' : ''} />

            {/* Form ScrollView */}
            <ScrollView contentContainerStyle={SellItems.scrollViewContent}>
                <View style={SellItems.contains}>
                    <Text style={[SellItems.label, { marginTop: 5 }]}>Item Details</Text>
                    <Text style={[SellItems.label, { marginTop: 5 }]}>Title</Text>
                    <TextAreaField
                        placeholder="Add a title or name for your item"
                        value={title}
                        onChangeText={setTitle}
                        placeholderTextColor="gray"
                    />
                    <Text style={SellItems.number}>{title.length}/100</Text>
                </View>

                {/* Description Section */}
                <View style={SellItems.contains}>
                    <Text style={[SellItems.label]}>Description</Text>
                    <TextAreaField
                        placeholder="Provide a description of the item"
                        value={description}
                        onChangeText={setDescription}
                        placeholderTextColor="gray"
                    />
                    <Text style={SellItems.number}>{description.length}/100</Text>
                </View>

                {/* Availability Dropdown */}
                <View style={SellItems.contains}>
                    <Text style={[SellItems.label, { marginBottom: 7 }]}>Availability</Text>
                    <SelectDropdown
                        options={[
                            { text: "List Single item", subText: "if you are selling only one of this item" },
                            { text: "List as in stock", subText: "if you are selling more than one item" },
                        ]}
                        onSelect={(selectedOption) => setSelectedAvailability(selectedOption.text)}
                    />
                </View>

                {/* Quantity Section */}
                <View style={SellItems.contains}>
                    <Text style={[SellItems.label]}>Quantity</Text>
                    <TextInputField
                        keyboardType="number-pad"
                        placeholder="Enter item quantity"
                        value={quantity}
                        onChangeText={setQuantity}
                        placeholderTextColor="gray"
                        maxLength={10}
                    />
                </View>
            </ScrollView>

            {/* Buttons at the Bottom */}
            <View style={SellItems.flexDifAbs}>
                <TouchableOpacity
                    style={[SignUpStyles.loginButtoned, { backgroundColor: '#fff', borderWidth: 1, borderColor: "#463E31", width: "48%" }]}
                >
                    <Text style={SignUpStyles.loginText}>Back</Text>
                </TouchableOpacity>

                <TouchableOpacity
                    onPress={handleNext}
                    style={[SignUpStyles.loginButtoned, !isButtonEnabled && { backgroundColor: '#E9E9E9' }]}
                    // disabled={!isButtonEnabled}
                >
                    <Text style={SignUpStyles.loginText}>Next</Text>
                </TouchableOpacity>
            </View>
        </>
    );
};

// Styles
const styles = StyleSheet.create({
    container: {
        flex: 1,
    },
    scrollViewContent: {
        flexGrow: 1,
        paddingBottom: 100, // Adds space for the buttons
    },
    buttonContainer: {
        position: 'absolute',
        bottom: 0,
        flexDirection: 'row',
        justifyContent: 'space-between',
        width: '100%',
        padding: 20,
        backgroundColor: '#fff',
        borderTopWidth: 1,
        borderColor: '#E9E9E9',
    },
});

export default SellItemSecond;

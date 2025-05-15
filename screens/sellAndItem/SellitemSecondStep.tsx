import SellItems from '@/styles/sellItem/Sellitem';
import HeaderWithDesc from '@/UI/Header/HeaderWithDescription';
import React, { useEffect } from 'react';
import { Text, TouchableOpacity, View, ScrollView, StyleSheet, Alert, SafeAreaView } from 'react-native';
import { SignUpStyles } from '@/styles/Signup/signup.style';
import TextAreaField from '@/UI/InputFields/TextAreaInput';
import SelectDropdown from '@/UI/SelectDropdown/SelectDropdown';
import TextInputField from '@/UI/InputFields/TextInputField';
import { router } from 'expo-router';
import { useProductForm } from '@/api/Product/Context/ProductFromContext';

const SellItemSecond = () => {
    const { formData, updateFormData, validateStep, errors } = useProductForm();
    const { title, description, quantity, availability } = formData;

    // Check if form is valid for this step
    const isButtonEnabled = title.trim() !== '' || description.trim() !== '' || availability !== '';

    const handleNext = () => {
        if (validateStep(2)) {
            router.push("/sellanItem/thirdStep");
        } else {
            Alert.alert("Missing Information", "Please complete all required fields");
        }
    };

    const handleBack = () => {
        router.back();
    };

    return (
        <SafeAreaView
            style={
                {
                    backgroundColor: '#F9F9F9',
                    height: '100%',
                }
            }
        >
            <HeaderWithDesc columnLayout={true} paddingTop={50} title={'Sell an item'} subTile='(Step 2/5)' headerSave={isButtonEnabled ? 'Save' : ''} />

            {/* Form ScrollView */}
            <ScrollView contentContainerStyle={SellItems.scrollViewContent}>
                <View style={SellItems.contains}>
                    <Text style={[SellItems.label, { marginTop: 5 }]}>Item Details</Text>
                    <Text style={[SellItems.label, { marginTop: 5 }]}>Title</Text>
                    <TextAreaField
                        placeholder="Add a title or name for your item"
                        value={title}
                        keyboardType='default'
                        onChangeText={(text) => updateFormData('title', text)}
                        placeholderTextColor="gray"
                    />
                    {/* {errors.title && <Text style={{ color: 'red' }}>{errors.title}</Text>} */}
                    <Text style={SellItems.number}>{title.length}/100</Text>
                </View>

                {/* Description Section */}
                <View style={SellItems.contains}>
                    <Text style={[SellItems.label]}>Description</Text>
                    <TextAreaField
                        placeholder="Provide a description of the item"
                        value={description}
                        onChangeText={(text) => updateFormData('description', text)}
                        placeholderTextColor="gray"
                    />
                    {/* {errors.description && <Text style={{ color: 'red' }}>{errors.description}</Text>} */}
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
                        onSelect={(selectedOption) => updateFormData('availability', selectedOption.text)}
                    />
                    {/* {errors.availability && <Text style={{ color: 'red' }}>{errors.availability}</Text>} */}
                </View>

                {/* Quantity Section */}
                <View style={SellItems.contains}>
                    <Text style={[SellItems.label]}>Quantity</Text>
                    <TextInputField
                        keyboardType="number-pad"
                        placeholder="Enter item quantity"
                        value={quantity.toString()}
                        onChangeText={(text) => updateFormData('quantity', parseInt(text) || 1)}
                        placeholderTextColor="gray"
                        maxLength={10}
                    />
                </View>
            </ScrollView>

            {/* Buttons at the Bottom */}
            <View style={[SellItems.flexDifAbs, SellItems.flexDifAb]}>
                <TouchableOpacity
                    onPress={handleBack}
                    style={[SignUpStyles.loginButtoned, { backgroundColor: '#fff', borderWidth: 1, borderColor: "#463E31", width: "48%" }]}
                > 
                    <Text style={SignUpStyles.loginText}>Back</Text>
                </TouchableOpacity>

                <TouchableOpacity
                    onPress={handleNext}
                    style={[SignUpStyles.loginButtoned, !isButtonEnabled && { backgroundColor: '#E9E9E9' }]}
                >
                    <Text style={SignUpStyles.loginText}>Next</Text>
                </TouchableOpacity>
            </View>
        </SafeAreaView>
    );
};

export default SellItemSecond;
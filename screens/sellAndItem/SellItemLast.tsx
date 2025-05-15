import SellItems from '@/styles/sellItem/Sellitem';
import HeaderWithDesc from '@/UI/Header/HeaderWithDescription';
import React, { useState } from 'react';
import { Text, TouchableOpacity, View, ScrollView, StyleSheet, Image, SafeAreaView } from 'react-native';
import { SignUpStyles } from '@/styles/Signup/signup.style';
import TextInputField from '@/UI/InputFields/TextInputField';
import Disclaimer from './Modal/Disclaimer/Disclaimer';
import { router } from 'expo-router';
import { useProductForm } from '@/api/Product/Context/ProductFromContext';

const SellItemLast = () => {
    const { formik, handlePreviousStep, isStepValid } = useProductForm();
    const [modalVisible, setModalVisible] = useState(false);
    
    const isButtonEnabled = isStepValid(5);

    // Convert string to number safely
    const formatToNGN = (value: string | number) => {
        const number = typeof value === 'string' 
            ? parseFloat(value.replace(/,/g, '')) 
            : value;
            
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
    
    const handleBack = () => {
        handlePreviousStep();
        router.back();
    };
    
    const handleSubmit = () => {
        if (isButtonEnabled) {
            openModal();
            // formik.handleSubmit() would be called after confirmation in the modal
        }
    };

    // Calculate service fee (10%)
    const serviceFee = formik.values.price * 0.1;
    // Calculate amount seller receives (90%)
    const sellerReceives = formik.values.price * 0.9;

    return (
        <SafeAreaView
            style={
                {
                    backgroundColor: '#F9F9F9',
                    height: '100%',
                }
            }
        >
            <HeaderWithDesc title={'Sell an item'} columnLayout={true} paddingTop={50} subTile='(Step 5/5)' headerSave={isButtonEnabled ? 'Save' : ''} />

            {/* Form ScrollView */}
            <ScrollView contentContainerStyle={SellItems.scrollViewContent}>
                <View style={SellItems.contains}>
                    {/* Item Details Section */}
                    <Text style={[SellItems.label, { marginTop: 5 }]}>Item Pricing</Text>
                    <Text style={[SellItems.label, { marginTop: 10, fontSize: 15 }]}>Sale Price</Text>
                    <TextInputField
                        placeholder="0"
                        value={formik.values.price.toString()}
                        symbol="₦"  // Display the ₦ symbol
                        onChangeText={(value) => formik.setFieldValue('price', value ? parseFloat(value) : 0)}
                        placeholderTextColor="gray"
                    />
                    {formik.touched.price && formik.errors.price && (
                        <Text style={{ color: 'red' }}>{formik.errors.price}</Text>
                    )}
                </View>

                {/* Description Section */}
                <View style={SellItems.contains}>
                    <Text style={[SellItems.label]}>Discount Price</Text>
                    <TextInputField
                        placeholder=""
                        symbol="₦"  // Display the ₦ symbol
                        value={formik.values.discountPrice.toString()}
                        onChangeText={(value) => formik.setFieldValue('discountPrice', value ? parseFloat(value) : 0)}
                        placeholderTextColor="gray"
                    />
                </View>

                {/* Service Fee */}
                <Text style={[SellItems.label]}>
                    Service Fee
                </Text>
                <View style={{flexDirection: "row", alignItems: "center", marginVertical: 10}}>
                    <Text>
                        We take 10% commission on sold items.
                    </Text>
                    <Image source={require("../../assets/images/info-circle.png")} style={{width: 16, height: 16}} />
                </View>

                <View style={styles.container}>
                    <Text style={[SellItems.label, {fontSize: 14, lineHeight: 30}]}>
                        10% DecluttaKing Service Fee
                    </Text> 
                    {formik.values.price > 0 && (
                        <Text style={[SellItems.subLabal, {fontFamily: "Proxima Nova"}]}>
                            {formatToNGN(serviceFee)}
                        </Text> 
                    )}

                    <Text style={[SellItems.label, {fontSize: 14, marginTop: 14, lineHeight: 30}]}>
                        You'll Receive
                    </Text> 
                    <Text>
                        Your estimated payment after our service fee.
                    </Text>
                    {formik.values.price > 0 && (
                        <Text style={[SellItems.subLabal, {fontFamily: "Proxima Nova"}]}>
                            {formatToNGN(sellerReceives)}
                        </Text> 
                    )}
                </View>
            </ScrollView>

            {/* Buttons at the Bottom */}
            <View style={[SellItems.flexDifAbs, SellItems.flexDifAb]}>
            <TouchableOpacity
                    onPress={handleBack}
                    style={[SignUpStyles.loginButtoned, { backgroundColor: '#fff', borderWidth: 1, borderColor: "#463E31", width: "100%" }]}
                >
                    <Text style={SignUpStyles.loginText}>Back</Text>
                </TouchableOpacity>

                <TouchableOpacity
                    onPress={handleSubmit}
                    style={[SignUpStyles.loginButtoned, !isButtonEnabled && { backgroundColor: '#E9E9E9', width: "100%" }]}
                    disabled={!isButtonEnabled}
                >
                    <Text style={SignUpStyles.loginText}>Next</Text>
                </TouchableOpacity>
            </View>
            
            <Disclaimer 
                visible={modalVisible}
                onClose={() => setModalVisible(false)}
                onConfirm={() => {
                    setModalVisible(false);
                    formik.handleSubmit();
                    // Navigate to success page or review page
                    router.push("/sellanItem/ReviewItem");
                }}
            /> 
        </SafeAreaView>
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
        borderColor: "#E9E9E9",
        backgroundColor: "white",
        borderWidth: 1,
        borderRadius: 5,
        paddingHorizontal: 15,
        paddingVertical: 15,
        marginVertical: 5,
    },
});

export default SellItemLast;
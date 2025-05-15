import SellItems from '@/styles/sellItem/Sellitem';
import HeaderWithDesc from '@/UI/Header/HeaderWithDescription';
import React, { useEffect } from 'react';
import { Text, TouchableOpacity, View, ScrollView, StyleSheet, Image, Alert } from 'react-native';
import { SignUpStyles } from '@/styles/Signup/signup.style';
import activeCheckbox from "../../assets/images/checkbox/Frame 645588 (1).png";
import inactiveCheckbox from "../../assets/images/checkbox/Frame 645588.png";
import { router } from 'expo-router';
import { useProductForm } from '@/api/Product/Context/ProductFromContext';
import { SafeAreaView } from 'react-native';

const SellItemThird = () => {
    const { formData, updateFormData, validateStep, errors } = useProductForm();
    
    const conditions = [
        { id: 1, label: "New", subText: "Never used, still in original packaging." },
        { id: 2, label: "Used Like New", subText: "Gently used, minimal signs of wears, looks and feels like new." },
        { id: 3, label: "Used", subText: "Gently used, some wear and tear" },
        { id: 4, label: "Open Box", subText: "New, opened once, complete with accessories" },
        { id: 5, label: "Refurbished", subText: "Pre-owned, restored to great condition" }
    ];

    // Find the condition ID based on the stored condition string
    const selectedConditionId = formData.condition ? 
        conditions.find(item => item.label === formData.condition)?.id || null : null;

    const isButtonEnabled = formData.condition !== '';

    const handleSelect = (id: number) => {
        const selectedCondition = conditions.find(item => item.id === id);
        if (selectedCondition) {
            updateFormData('condition', selectedCondition.label);
        }
    };

    const handleNext = () => {
        if (validateStep(3)) {
            router.push("/sellanItem/fourStep");
        } else {
            Alert.alert("Missing Information", "Please select a condition for your item");
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
            <HeaderWithDesc title={'Sell an item'} columnLayout={true} paddingTop={50} subTile='(Step 3/5)' headerSave={isButtonEnabled ? 'Save' : ''} />
            <ScrollView contentContainerStyle={SellItems.scrollViewContent}>
                <View style={SellItems.contains}>
                    <Text style={[SellItems.label, { marginTop: 5 }]}>Item Condition</Text>
                    {/* {errors.condition && <Text style={{ color: 'red' }}>{errors.condition}</Text>} */}
                    
                    {conditions.map((item) => (
                        <View key={item.id} style={SellItems.Box}>
                           <TouchableOpacity 
                             style={{flexDirection:"row", justifyContent:"space-between"}} 
                             onPress={() => handleSelect(item.id)}
                           >
                                <View>
                                    <Text style={SellItems.label}>{item.label}</Text>
                                    <Text style={[SellItems.optionSubText, {maxWidth:"90%"}]}>
                                        {item.subText}
                                    </Text>
                                </View>                            
                                <Image 
                                    source={selectedConditionId === item.id ? activeCheckbox : inactiveCheckbox} 
                                    style={styles.checkbox} 
                                />
                            </TouchableOpacity>
                        </View>
                    ))}
                </View>
            </ScrollView>
            <View style={[SellItems.flexDifAbs, SellItems.flexDifAb]}>
                <TouchableOpacity 
                    onPress={handleBack}
                    style={[SignUpStyles.loginButtoned, { backgroundColor: '#fff', borderWidth: 1, borderColor: "#463E31", width: "100%" }]}
                >
                    <Text style={SignUpStyles.loginText}>Back</Text>
                </TouchableOpacity>
                <TouchableOpacity
                    onPress={handleNext}
                    style={[SignUpStyles.loginButtoned, !isButtonEnabled && { backgroundColor: '#E9E9E9', width: "100%" }]}
                    disabled={!isButtonEnabled}
                >
                    <Text style={SignUpStyles.loginText}>Next</Text>
                </TouchableOpacity>
            </View>
        </SafeAreaView>
    );
};

const styles = StyleSheet.create({
    checkbox: {
        width: 24,
        height: 24,
        marginTop: 10,
    },
});

export default SellItemThird;
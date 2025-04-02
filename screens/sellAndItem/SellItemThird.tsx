import SellItems from '@/styles/sellItem/Sellitem';
import HeaderWithDesc from '@/UI/Header/HeaderWithDescription';
import React, { useState, useEffect } from 'react';
import { Text, TouchableOpacity, View, ScrollView, StyleSheet, Image } from 'react-native';
import { SignUpStyles } from '@/styles/Signup/signup.style';
import activeCheckbox from "../../assets/images/checkbox/Frame 645588 (1).png";
import inactiveCheckbox from "../../assets/images/checkbox/Frame 645588.png";
import { router } from 'expo-router';
 
const SellItemThird = () => {
    const [isButtonEnabled, setIsButtonEnabled] = useState(false);
    const [selectedCondition, setSelectedCondition] = useState<number | null>(null);

    const conditions = [
        { id: 1, label: "New", subText: "Never used, still in original packaging." },
        { id: 2, label: "Used Like New", subText: "Gently used, minimal signs of wears, looks and feels like new." },
        { id: 3, label: "Used", subText: "Gently used, some wear and tear" },
        { id: 4, label: "Open Box", subText: "New, opened once, complete with accessories" },
        { id: 5, label: "Refurbished", subText: "Pre-owned, restored to great condition" }
    ];

    useEffect(() => {
        setIsButtonEnabled(selectedCondition !== null);
    }, [selectedCondition]);

    const handleSelect = (id: number) => {
        setSelectedCondition(id);
    };

    const handleNext = () => {
        if (isButtonEnabled) {
            router.push("/sellanItem/fourStep");
        }
    };

    return (
        <>
            <HeaderWithDesc title={'Sell an item'} subTile='(Step 3/5)' headerSave={isButtonEnabled ? 'Save' : ''} />
            <ScrollView contentContainerStyle={SellItems.scrollViewContent}>
                <View style={SellItems.contains}>
                    <Text style={[SellItems.label, { marginTop: 5 }]}>Item Condition</Text>
                    {conditions.map((item) => (
                        <View key={item.id} style={SellItems.Box}>
                           <TouchableOpacity style={{flexDirection:"row",justifyContent:"space-between"}} onPress={() => handleSelect(item.id)}>
                            <View>
                            <Text style={SellItems.label}>{item.label}</Text>
                            <Text style={[SellItems.optionSubText,{maxWidth:"90%"}]}>{item.subText}</Text>
                            </View>                            
                                <Image source={selectedCondition === item.id ? activeCheckbox : inactiveCheckbox} style={styles.checkbox} />
                            </TouchableOpacity>
                        </View>
                    ))}
                </View>
            </ScrollView>
            <View style={SellItems.flexDifAbs}>
                <TouchableOpacity style={[SignUpStyles.loginButtoned, { backgroundColor: '#fff', borderWidth: 1, borderColor: "#463E31", width: "100%" }]}>
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
        </>
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

import SellItems from '@/styles/sellItem/Sellitem';
import HeaderWithDesc from '@/UI/Header/HeaderWithDescription';
import React, { useState, useEffect } from 'react';
import { Text, TouchableOpacity, View, ScrollView, Animated, SafeAreaView } from 'react-native';
import { SignUpStyles } from '@/styles/Signup/signup.style';
import { router } from 'expo-router';
import YourCart from '@/styles/Cart/YourCart.styles';
import UssdStyles from '@/styles/UssdStyles/Ussdstyles';
import ArrowUpGray from '@/assets/svg/ArrowUpGray';
import ArrowGrayDown from '@/assets/svg/ArrowGrayDown';
import AddCategoryModal from './Modal/StepFourModal/AddCategory';
import AddLocationModal from './Modal/StepFourModal/AddLocation';
import { useProductForm } from '@/api/Product/Context/ProductFromContext';

type Category = {
  id: number;
  name: string;
  subcategories?: { id: number; name: string }[];  
};

interface LocationOption {
  label: string;
  value: string;
}

const SellItemFourth = () => { 
  const { formik, handleNextStep, handlePreviousStep, isStepValid } = useProductForm();
  const [modalVisible, setModalVisible] = useState(false);
  const [animation] = useState(new Animated.Value(0));
  const [isOpen, setIsOpen] = useState(false);
  const [locationModalVisible, setLocationModalVisible] = useState(false);
  const [currentPopup, setCurrentPopup] = useState(1);
  
  const isButtonEnabled = isStepValid(4);

  const handleNext = () => {
    if (isButtonEnabled) {
      handleNextStep();
      router.push("/sellanItem/LastStep");
    }
  };

  const handleBack = () => {
    handlePreviousStep();
    router.back();
  };

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
 
  const Categories = [
    { id: 1, name: "All Categories" },
    {
      id: 2,
      name: "Phone & Tablets",
      subcategories: [
        { id: 1, name: "Smartphone" },
        { id: 2, name: "Tablets/iPads" },
        { id: 3, name: "Smart Watches" },
        { id: 4, name: "Feature/Basic Phones" },
        { id: 5, name: "Accessories" },
      ],
    },
    { id: 3, name: "Home & Kitchen" },
    { id: 4, name: "Furniture" },
    { id: 5, name: "Computing" },
    { id: 6, name: "Electronics" },
    { id: 7, name: "Fashion" },
    { id: 8, name: "Solar Energy" },
    { id: 9, name: "Generators" },
  ];

  const openModal = () => {
    setLocationModalVisible(true);
    setCurrentPopup(1);
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
      <HeaderWithDesc title="Sell an item" columnLayout={true} paddingTop={50} subTile="(Step 4/5)" headerSave={isButtonEnabled ? 'Save' : ''} />

      {/* Form ScrollView */}
      <ScrollView contentContainerStyle={SellItems.scrollViewContent}>
        <View style={SellItems.contains}>
          {/* Item Details Section */}
          <Text style={[SellItems.label, { marginVertical: 5 }]}>Category</Text>

          {/* Dropdown for Selecting Category and Subcategory */}
          <View style={[UssdStyles.dropdown, {paddingVertical: 20}]}>
            <TouchableOpacity onPress={() => setModalVisible(true)} style={{ width: "90%" }}>
              <Text style={[YourCart.title, {fontWeight: '400'}]}>
                {formik.values.category 
                  ? `${formik.values.category}${formik.values.subcategory ? ` - ${formik.values.subcategory}` : ''}` 
                  : "No category item selected"}
              </Text>
            </TouchableOpacity>
            
            <TouchableOpacity onPress={toggleDropdown} style={{ width: "100%" }}>
              {isOpen ? <ArrowUpGray /> : <ArrowGrayDown />}
            </TouchableOpacity>
          </View>
          {formik.touched.category && formik.errors.category && (
            <Text style={{ color: 'red' }}>{formik.errors.category}</Text>
          )}

          <Text style={[SellItems.label, { marginVertical: 10 }]}>Location</Text>
          <View style={[UssdStyles.dropdown, {paddingVertical: 20}]}>
            <TouchableOpacity onPress={openModal} style={[{ flexDirection: 'row', alignItems: 'center', justifyContent: "space-between", flex: 1}]}>
              <Text>
                {formik.values.state 
                  ? `${formik.values.lga} - ${formik.values.city} - ${formik.values.state}`
                  : 'Select Location'}             
              </Text>
              <Text style={{ color: 'gray' }}>change</Text>
            </TouchableOpacity>
          </View>
          {(formik.touched.state && formik.errors.state) || 
           (formik.touched.city && formik.errors.city) || 
           (formik.touched.lga && formik.errors.lga) ? (
            <Text style={{ color: 'red' }}>Location details are required</Text>
          ) : null}
        </View>
      </ScrollView>

      {/* Buttons at the Bottom */}
      <View style={[SellItems.flexDifAbs, SellItems.flexDifAb]}>
      <TouchableOpacity
          onPress={handleBack}
          style={[SignUpStyles.loginButtoned, { backgroundColor: '#fff', borderWidth: 1, borderColor: "#463E31", width: "100%" }]}>
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

      {/* Modal for Selecting Category */}
      <AddCategoryModal
        visible={modalVisible}
        onClose={() => setModalVisible(false)}
        Category={Categories}
        onSelectCategory={(category) => {
          formik.setFieldValue('category', category.name);
          formik.setFieldValue('subcategory', '');
        }}
        onSelectSubcategory={(subcategory) => {
          formik.setFieldValue('subcategory', subcategory.name);
          setModalVisible(false); // Close the modal after subcategory selection
        }}
      />

      {/* Modal for Location */}
      <AddLocationModal
        modalVisibles={locationModalVisible}
        setModalVisibles={setLocationModalVisible}
        selectedState={{ 
          label: formik.values.state, 
          value: formik.values.state 
        }}
        // setSelectedState={(state) => {
        //   if (state) formik.setFieldValue('state', state.label);
        // }}
        setSelectedState={(state: LocationOption | null) => {
          if (state) formik.setFieldValue('state', state.label);
        }}
        selectedCity={{ 
          label: formik.values.city, 
          value: formik.values.city 
        }}
        setSelectedCity={(city: LocationOption | null) => {
          if (city) formik.setFieldValue('city', city.label);
        }}
        selectedLGA={{ 
          label: formik.values.lga, 
          value: formik.values.lga 
        }}
        setSelectedLGA={(lga: LocationOption | null) => {
          if (lga) formik.setFieldValue('lga', lga.label);
        }}
        currentPopup={currentPopup}
        setCurrentPopup={setCurrentPopup}
      />
    </SafeAreaView>
  );
};

export default SellItemFourth;
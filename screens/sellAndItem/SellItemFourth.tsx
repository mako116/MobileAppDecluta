import SellItems from '@/styles/sellItem/Sellitem';
import HeaderWithDesc from '@/UI/Header/HeaderWithDescription';
import React, { useState, useEffect } from 'react';
import { Text, TouchableOpacity, View, ScrollView, Animated } from 'react-native';
import { SignUpStyles } from '@/styles/Signup/signup.style';
import { router } from 'expo-router';
import YourCart from '@/styles/Cart/YourCart.styles';
import UssdStyles from '@/styles/UssdStyles/Ussdstyles';
import ArrowUpGray from '@/assets/svg/ArrowUpGray';
import ArrowGrayDown from '@/assets/svg/ArrowGrayDown';
import AddCategoryModal from './Modal/StepFourModal/AddCategory';
import AddLocationModal from './Modal/StepFourModal/AddLocation';
import Homes from '@/styles/Homes/Home.styles';

type Category = {
  id: number;
  name: string;
  subcategories?: { id: number; name: string }[]; // Add this optional property for subcategories
};

interface LocationOption {
    label: string;
    value: string;
  }
  

const SellItemFourth = () => {
    const [modalVisible, setModalVisible] = useState(false);
    const [selectedState, setSelectedState] = useState<LocationOption | null>(null);
    const [selectedCity, setSelectedCity] = useState<LocationOption | null>(null);
    const [selectedLGA, setSelectedLGA] = useState<LocationOption | null>(null);    const [selectedCategory, setSelectedCategory] = useState<Category | null>(null);
    const [selectedSubcategory, setSelectedSubcategory] = useState<{ id: number; name: string } | null>(null);
    const [animation] = useState(new Animated.Value(0));
    const [isOpen, setIsOpen] = useState(false);
    const [isButtonEnabled, setIsButtonEnabled] = useState(false);
    const [locationModalVisible, setLocationModalVisible] = useState(false);
    const [currentPopup, setCurrentPopup] = useState(1);
    const [isOpens, setIsOpens] = useState(false);
  // Effect to check if a category is selected
  useEffect(() => {
    setIsButtonEnabled(selectedCategory?.name.trim() !== '' && selectedState !== null && selectedCity !== null && selectedLGA !== null);
  }, [selectedCategory, selectedCity, selectedLGA, selectedState]);

  const handleNext = () => {
    if (isButtonEnabled) {
      router.push("/sellanItem/LastStep");
    }
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
    <>
      <HeaderWithDesc title="Sell an item" subTile="(Step 4/5)" headerSave={isButtonEnabled ? 'Save' : ''} />

      {/* Form ScrollView */}
      <ScrollView contentContainerStyle={SellItems.scrollViewContent}>
        <View style={SellItems.contains}>
          {/* Item Details Section */}
          <Text style={[SellItems.label, { marginVertical: 5 }]}>Category</Text>

          {/* Dropdown for Selecting Category and Subcategory */}
          <View style={[UssdStyles.dropdown,{paddingVertical:20}]}>
            <TouchableOpacity onPress={() => setModalVisible(true)} style={{ width: "90%" }}>
              <Text style={[YourCart.title,{fontWeight:400}]}>
              {selectedCategory 
                ? `${selectedCategory.name}${selectedSubcategory ? ` - ${selectedSubcategory.name}` : ''}` 
                : "No category item selected"}
              </Text>
            </TouchableOpacity>

            
            <TouchableOpacity onPress={toggleDropdown} style={{ width: "100%" }}>
              {isOpen ? <ArrowUpGray /> : <ArrowGrayDown />}
            </TouchableOpacity>
          </View>

          <Text style={[SellItems.label, { marginVertical: 10 }]}>Location</Text>
          <View style={[UssdStyles.dropdown,{paddingVertical:20}]}>
             <TouchableOpacity onPress={openModal} style={[{ flexDirection: 'row', alignItems: 'center',justifyContent:"space-between",flex:1}]}>
              <Text>
              {selectedState 
              ? `${selectedLGA?.label}- ${selectedCity ? selectedCity.label : 'Select City'} - ${selectedState ? selectedState.label : 'Select State'}`
             : 'Select LGA'}             
             </Text>
             <Text style={{ color: 'gray' }}>change</Text>
           </TouchableOpacity>
           </View>
         </View>
      </ScrollView>

      {/* Buttons at the Bottom */}
      <View style={SellItems.flexDifAbs}>
        <TouchableOpacity
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
          setSelectedCategory(category);
          setSelectedSubcategory(null); // Reset subcategory when selecting a new category
        }}
        onSelectSubcategory={(subcategory) => {
          setSelectedSubcategory(subcategory);
          setModalVisible(false); // Close the modal after subcategory selection
        }}
      />

      {/* Modal for Location */}
      <AddLocationModal
        modalVisibles={locationModalVisible} // Modal visibility state
        setModalVisibles={setLocationModalVisible} // Function to change modal visibility
        selectedState={selectedState} // Selected state
        setSelectedState={setSelectedState} // Function to set the selected state
        selectedCity={selectedCity} // Selected city
        setSelectedCity={setSelectedCity} // Function to set the selected city
        selectedLGA={selectedLGA} // Selected LGA
        setSelectedLGA={setSelectedLGA} // Function to set the selected LGA
        currentPopup={currentPopup} // Current popup state
        setCurrentPopup={setCurrentPopup} // Function to change the current popup state
      />
    </>
  );
};

export default SellItemFourth;

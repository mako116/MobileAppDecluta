import React, { useEffect, useState } from 'react';
import {
  View,
  Text,
  TextInput,
  Image,
  ScrollView,
  TouchableOpacity,
   ActivityIndicator,
} from 'react-native';

import HeaderWithDesc from '@/UI/Header/HeaderWithDescription';
import AddVideo from '../../assets/images/laptop.png';
import { ReviewsStyles } from '@/styles/ReviewItem/Review.styles';
import SellItems from '@/styles/sellItem/Sellitem';
import { SignUpStyles } from '@/styles/Signup/signup.style';
import CancelItem from './Modal/cancelItem/CancelItem';

const ReviewItem = () => {
  const [formData, setFormData] = useState({
    availability: '',
    condition: '',
    description:'',
    category: '',
    title: '',
    location: '',
    price: '',
    salePrice: '',
    discountPrice: '',
  });

  const [editableFields, setEditableFields] = useState({
    availability: false,
    condition: false,
    title:false,
    category: false,
    description:false,
    location: false,
    price: false,
    salePrice: false,
    discountPrice: false,
  });

  const [loading, setLoading] = useState(true);
    const [modalVisible, setModalVisible] = useState(false);

    const openModal = () => {
      setModalVisible(true);
     };

  // This is a dummy feteching make use of it and do yours
  useEffect(() => {
    const fetchDummyData = async () => {
      setLoading(true);
      await new Promise(res => setTimeout(res, 1500));  
      const dummyResponse = {
        availability: 'List as single item',
        description: 'For sale is my used Samsung Galaxy A05 with a 6.7 display, 4GB RAM, and 64GB ROM, running on Android 13. This phone has been well-maintained and is in good condition, with minor signs of wear on the exterior. The screen is scratch-free and the battery life is still strong. I’m upgrading to a new device, so i’m letting this reliable phone go to a new home. Includes original charger and cable. No other accessories included.',
        title:'Samsung Galaxy A05 6.7 4GB RAM/64GB ROM Android 13.',
        condition: 'Used - Like New',
        category: 'Phones & Tablets',
        location: 'Ibadan Southwest',
        price: '39000',
        salePrice: '39000',
        discountPrice: '',
      };
      setFormData(dummyResponse);
      setLoading(false);
    };

    fetchDummyData();
  }, []);

  const formatToNGN = (value: string) => {
    const number = parseFloat(value.replace(/,/g, ''));
    if (isNaN(number)) return '';
    return new Intl.NumberFormat('en-NG', {
      style: 'currency',
      currency: 'NGN',
      minimumFractionDigits: 0,
    }).format(number);
  };

  const handleEditToggle = (field: keyof typeof editableFields) => {
    setEditableFields(prev => ({
      ...prev,
      [field]: !prev[field],
    }));
  };

  const handleInputChange = (field: keyof typeof formData, value: string) => {
    setFormData(prev => ({
      ...prev,
      [field]: value,
    }));
  };

  const renderEditableField = (field: keyof typeof formData, label: string) => (
    <View style={ReviewsStyles.fieldContainer}>
      <View style={ReviewsStyles.fieldHeader}>
        <Text style={[SellItems.label,{fontSize:16}]}>{label}</Text>
        <TouchableOpacity onPress={() => handleEditToggle(field)}>
          <Text style={[SellItems.subLabal,{color:"#7E7E7E"}]}>{editableFields[field] ? 'Cancel' : 'Edit'}</Text>
        </TouchableOpacity>
      </View>

      {editableFields[field] ? (
        <>
          <TextInput
            value={formData[field]}
            onChangeText={text => handleInputChange(field, text)}
            style={ReviewsStyles.input}
            placeholder={`Enter ${label.toLowerCase()}`}
          />
          <TouchableOpacity
            onPress={() => handleEditToggle(field)}
            style={ReviewsStyles.saveButton}
          >
            <Text style={ReviewsStyles.saveButtonText}>Save</Text>
          </TouchableOpacity>
        </>
      ) : (
        <Text style={ReviewsStyles.valueText}>
          {['price', 'salePrice', 'discountPrice'].includes(field)
            ? formatToNGN(formData[field])
            : formData[field]}
        </Text>
      )}
    </View>
  );

  const itemImages = Array.from({ length: 7 }).map((_, i) => ({
    id: i + 1,
    uri: AddVideo,
  }));

  if (loading) {
    return (
      <View style={ReviewsStyles.loaderContainer}>
        <ActivityIndicator size="large" color="#463E31" />
        <Text style={{ marginTop: 10, color: '#666' }}>Loading item details...</Text>
      </View>
    );
  }

  return (
    <>
      <HeaderWithDesc title="Sell an item" headerSave="Save" />

      <ScrollView contentContainerStyle={[SellItems.scrollViewContent,{height:"200%"}]}>
        <View style={SellItems.contains}>
          <Text style={[[SellItems.label,{fontSize:16}],{marginVertical:5}]}>Review Item Details</Text>
          <Text style={SellItems.optionSubText}>
            Please review the item details carefully before publishing to ensure everything is accurate and complete.
          </Text>

          <Text style={[[SellItems.label,{fontSize:16}],{marginVertical:12}]}>Item Media</Text>
          <View style={ReviewsStyles.imageRow}>
            {itemImages.slice(0, 4).map((image, index) => (
              <View key={image.id} style={ReviewsStyles.imageWrapper}>
                <Image source={image.uri} style={ReviewsStyles.image} />
                {index === 3 && itemImages.length > 4 && (
                  <View style={ReviewsStyles.overlay}>
                    <Text style={ReviewsStyles.overlayText}>+{itemImages.length - 4}</Text>
                  </View>
                )}
              </View>
            ))}
          </View>

        

          {/* Editable fields */}
          {renderEditableField('title', 'Title')}
          {renderEditableField('description', 'Description')}
          {renderEditableField('availability', 'Availability')}
          {renderEditableField('condition', 'Condition')}
          {renderEditableField('category', 'Category')}
          {renderEditableField('location', 'Location')}
          {renderEditableField('price', 'Price')}
          {renderEditableField('salePrice', 'Sale Price')}
          {renderEditableField('discountPrice', 'Discount Price')}

          {/* Fee Summary */}
          <Text style={[SellItems.label,{fontSize:16}]}>Service Fee</Text>
          <View style={{flexDirection:"row",alignItems:"center",marginVertical:0}}>
          <Text>
          We take 10% commission on sold items.
          </Text>
           <Image source={require("../../assets/images/info-circle.png")} style={{width:16,height:16}} />
            </View>
          <View style={ReviewsStyles.summaryCard}>
            <Text style={[SellItems.label,{fontSize:16}]}>10% DecluttaKing Service Fee</Text>
            <Text style={SellItems.subLabal}>
              {formatToNGN((parseFloat(formData.price || '0') * 0.1).toFixed(2))}
            </Text>

            <Text style={[[SellItems.label,{fontSize:16}], { marginTop: 16 }]}>You'll Receive</Text>
            <Text style={SellItems.subLabal}>Your estimated payment after our service fee.</Text>
            <Text style={[SellItems.label,{fontSize:16}]}>
              {formatToNGN((parseFloat(formData.price || '0') * 0.9).toFixed(2))}
            </Text>
          </View>
        </View>
      </ScrollView>

      {/* Bottom Buttons */}
      <View style={SellItems.flexDifAbs}>
        <TouchableOpacity
          style={[SignUpStyles.loginButtoned,{ backgroundColor: '#fff', borderWidth: 1, borderColor: "#463E31", width: "100%" }]}>
          <Text style={SignUpStyles.loginText}>Back</Text>
        </TouchableOpacity>

        <TouchableOpacity
          onPress={openModal}
          style={[SignUpStyles.loginButtoned]}
          // disabled={!isButtonEnabled}
        >
          <Text style={SignUpStyles.loginText}>Next</Text>
        </TouchableOpacity>
      </View>

       <CancelItem 
        visible={modalVisible}
         onClose={() => setModalVisible(false)}
        />
    </>
  );
};



export default ReviewItem;

import React, { useState } from 'react';
import {
  View,
  Text,
  TextInput,
  Image,
  ScrollView,
  TouchableOpacity,
  ActivityIndicator,
  SafeAreaView,
  Alert,
} from 'react-native';

import HeaderWithDesc from '@/UI/Header/HeaderWithDescription';
import AddVideo from '../../assets/images/laptop.png';
import { ReviewsStyles } from '@/styles/ReviewItem/Review.styles';
import SellItems from '@/styles/sellItem/Sellitem';
import { SignUpStyles } from '@/styles/Signup/signup.style';
import CancelItem from './Modal/cancelItem/CancelItem';
import { router } from 'expo-router';
import { mapFormToApiRequest, useProductForm } from '@/api/Product/Context/ProductFromContext';
import { createProduct } from '@/api/Product/Hooks/useProduct';
import { RootState } from '@/redux/store';
import { useSelector } from 'react-redux';
import { useAppDispatch } from '@/redux/Redux/hook/hook';

const ReviewItem = () => {
  const { formData, updateFormData } = useProductForm();
  const [loading, setLoading] = useState(false);
  const [modalVisible, setModalVisible] = useState(false);
  const res = useSelector((state: RootState) => state.auth.userData);
  const dispatch = useAppDispatch();

  const [editableFields, setEditableFields] = useState({
    title: false,
    description: false,
    quantity: false,
    availability: false,
    condition: false,
    category: false,
    subcategory: false,
    state: false,
    city: false,
    lga: false,
    price: false,
    discountPrice: false,
  });

  const openModal = () => {
    setModalVisible(true);
  };

  const handleBack = () => {
    router.back();
  };

  const formatToNGN = (value: number) => {
    if (isNaN(value)) return '';
    return new Intl.NumberFormat('en-NG', {
      style: 'currency',
      currency: 'NGN',
      minimumFractionDigits: 0,
    }).format(value);
  };

  const handleEditToggle = (field: keyof typeof editableFields) => {
    setEditableFields(prev => ({
      ...prev,
      [field]: !prev[field],
    }));
  };

  const handleInputChange = (field: keyof typeof formData, value: any) => {
    // For number fields, convert string to number
    if (field === 'price' || field === 'discountPrice' || field === 'quantity') {
      const numValue = parseFloat(value);
      updateFormData(field, isNaN(numValue) ? 0 : numValue);
    } else {
      updateFormData(field, value);
    }
  };

  const renderEditableField = (field: keyof typeof formData, label: string) => (
    <View style={ReviewsStyles.fieldContainer}>
      <View style={ReviewsStyles.fieldHeader}>
        <Text style={[SellItems.label, { fontSize: 16 }]}>{label}</Text>
        <TouchableOpacity onPress={() => handleEditToggle(field as any)}>
          <Text style={[SellItems.subLabal, { color: "#7E7E7E" }]}>
            {editableFields[field as keyof typeof editableFields] ? 'Cancel' : 'Edit'}
          </Text>
        </TouchableOpacity>
      </View>

      {editableFields[field as keyof typeof editableFields] ? (
        <>
          <TextInput
            value={formData[field]?.toString() || ''}
            onChangeText={text => handleInputChange(field, text)}
            style={ReviewsStyles.input}
            placeholder={`Enter ${label.toLowerCase()}`}
            keyboardType={
              field === 'price' || field === 'discountPrice' || field === 'quantity' 
                ? 'numeric' 
                : 'default'
            }
          />
          <TouchableOpacity
            onPress={() => handleEditToggle(field as any)}
            style={ReviewsStyles.saveButton}
          >
            <Text style={ReviewsStyles.saveButtonText}>Save</Text>
          </TouchableOpacity>
        </>
      ) : (
        <Text style={ReviewsStyles.valueText}>
          {field === 'price' || field === 'discountPrice'
            ? formatToNGN(formData[field] as number)
            : formData[field]?.toString() || 'Not specified'}
        </Text>
      )}
    </View>
  );

  // Create an array of image objects from the selectedImages URLs
  const itemImages = formData.selectedImages.map((uri, index) => ({
    id: index + 1,
    uri: uri,
  }));

  // If no images are available, use a placeholder
  if (itemImages.length === 0) {
    itemImages.push({ id: 1, uri: AddVideo });
  }

  // Calculate the location string
  const locationString = `${formData.lga}, ${formData.city}, ${formData.state}`.replace(/^, |, $/g, '');

  // Calculate service fee (10%)
  const serviceFee = formData.price * 0.1;
  const amountReceived = formData.price * 0.9;

  if (loading) {
    return (
      <View style={ReviewsStyles.loaderContainer}>
        <ActivityIndicator size="large" color="#463E31" />
        <Text style={{ marginTop: 10, color: '#666' }}>Loading item details...</Text>
      </View>
    );
  }

  // Function to handle publish action
  const handlePublish = async () => {
    const user = res
    try {
      setLoading(true);
      
      // Map form data to API request format
      const productData = mapFormToApiRequest(formData, user?._id || '');
      
      // Add seller information
      productData.sellerName = user?.firstName || '';
      productData.sellerPhoneNumber = user?.phoneNumber || '';
      productData.sellerAddress = user?.address || '';

          
    // Create FormData object for multipart/form-data request (for file uploads)
    const formDataToSend = new FormData();
    
    // Append all product data as fields
    Object.keys(productData).forEach(key => {
      formDataToSend.append(key, productData[key as keyof typeof productData] as string);
    });
    
    // Append each image file
    await Promise.all(
      formData.selectedImages.map(async (imageUri, index) => {
        // Get filename from URI
        const filename = imageUri.split('/').pop() || `image_${index}.jpg`;
        
        // Extract file extension
        const match = /\.(\w+)$/.exec(filename);
        const type = match ? `image/${match[1]}` : 'image/jpeg';
        
        // Create file object
        const imageFile = {
          uri: imageUri,
          name: filename,
          type: type
        };
        
        const response = await fetch(imageFile.uri);
        const blob = await response.blob();
        formDataToSend.append('productImages', blob, imageFile.name);
      })
    );
    
    // If there's a video, append it as well
    if (formData.selectedVideo) {
      const videoFilename = formData.selectedVideo.split('/').pop() || 'video.mp4';
      const videoType = 'video/mp4'; // Adjust based on your specific video type
      
      const videoFile = {
        uri: formData.selectedVideo,
        name: videoFilename,
        type: videoType
      };
      
      const videoResponse = await fetch(videoFile.uri);
      const videoBlob = await videoResponse.blob();
      formDataToSend.append('productVideo', videoBlob, videoFile.name);
    }
    
    console.log('Sending product data with files');
      
      // Dispatch the createProduct action
      const resultAction = await dispatch(createProduct(productData));
      
      if (createProduct.fulfilled.match(resultAction)) {
        // Success - close modal and navigate
        setModalVisible(false);
        Alert.alert('Success', 'Your item has been published successfully!');
        router.push('/(routes)/sellanItem/itemUnderReview'); // Adjust route as needed
      } else {
        // Handle error
        Alert.alert('Error', resultAction.payload as string || 'Failed to publish your item. Please try again.');
      }
    } catch (error) {
      Alert.alert('Error', 'An unexpected error occurred. Please try again.');
      console.error('Publish error:', error);
    } finally {
      setLoading(false);
    }
  };

  return (
    <SafeAreaView
      style={
          {
            backgroundColor: '#fff',
            height: '100%',
          }
      }
    >
      <HeaderWithDesc title="Sell an item" headerSave="Save" />

      <ScrollView style={[SellItems.scrollViewContent]}>
        <View style={SellItems.contains}>
          <Text style={[[SellItems.label, { fontSize: 16 }], { marginVertical: 5 }]}>Review Item Details</Text>
          <Text style={SellItems.optionSubText}>
            Please review the item details carefully before publishing to ensure everything is accurate and complete.
          </Text>

          <Text style={[[SellItems.label, { fontSize: 16 }], { marginVertical: 12 }]}>Item Media</Text>
          <View style={ReviewsStyles.imageRow}>
            {itemImages.slice(0, 4).map((image, index) => (
              <View key={image.id} style={ReviewsStyles.imageWrapper}>
                {typeof image.uri === 'string' ? (
                  <Image source={{ uri: image.uri }} style={ReviewsStyles.image} />
                ) : (
                  <Image source={image.uri} style={ReviewsStyles.image} />
                )}
                {index === 3 && itemImages.length > 4 && (
                  <View style={ReviewsStyles.overlay}>
                    <Text style={ReviewsStyles.overlayText}>+{itemImages.length - 4}</Text>
                  </View>
                )}
              </View>
            ))}
          </View>

          {/* Display video if available */}
          {/* {formData.selectedVideo && (
            <View style={{ marginTop: 10 }}>
              <Text style={[SellItems.label, { fontSize: 16 }]}>Video</Text>
              <View style={ReviewsStyles.videoWrapper}>
                <Image 
                  source={{ uri: formData.selectedVideo }} 
                  style={ReviewsStyles.videoThumbnail} 
                />
                <View style={ReviewsStyles.playIconContainer}>
                  <Text style={ReviewsStyles.playIcon}>▶</Text>
                </View>
              </View>
            </View>
          )} */}

          {/* Editable fields */}
          {renderEditableField('title', 'Title')}
          {renderEditableField('description', 'Description')}
          {renderEditableField('quantity', 'Quantity')}
          {renderEditableField('availability', 'Availability')}
          {renderEditableField('condition', 'Condition')}
          {renderEditableField('category', 'Category')}
          {renderEditableField('subcategory', 'Subcategory')}

          {/* Location fields */}
          <Text style={[SellItems.label, { fontSize: 16 }]}>Location</Text>
          <Text style={ReviewsStyles.valueText}>{locationString || 'Not specified'}</Text>
          {/* style={ReviewsStyles.locationFields} */}
          <View >
            {renderEditableField('state', 'State')}
            {renderEditableField('city', 'City')}
            {renderEditableField('lga', 'LGA')}
          </View>

          {/* Price fields */}
          {renderEditableField('price', 'Price')}
          {renderEditableField('discountPrice', 'Discount Price')}
        </View>

        <Text style={[SellItems.label]}>Service Fee</Text>
        <View style={{ flexDirection: "row", alignItems: "center", marginVertical: 5 }}>
          <Text>
            We take 10% commission on sold items.
          </Text>
          <Image source={require("../../assets/images/info-circle.png")} style={{ width: 16, height: 16, marginLeft: 5 }} />
        </View>
        {/* Fee Summary */}

        <View style={ReviewsStyles.summaryCard}>
          <Text style={[SellItems.label, { fontSize: 16 }]}>10% DecluttaKing Service Fee</Text>
          <Text style={SellItems.subLabal}>
            {formatToNGN(serviceFee)}
          </Text>

          <Text style={[[SellItems.label, { fontSize: 16 }], { marginTop: 16 }]}>You'll Receive</Text>
          <Text style={SellItems.subLabal}>Your estimated payment after our service fee.</Text>
          <Text style={[SellItems.label, { fontSize: 16 }]}>
            {formatToNGN(amountReceived)}
          </Text>
        </View>
      </ScrollView>



      {/* Bottom Buttons */}
      <View style={SellItems.flexDifAbs}>
        <TouchableOpacity
          onPress={handleBack}
          style={[SignUpStyles.loginButtoned, { backgroundColor: '#fff', borderWidth: 1, borderColor: "#463E31", width: "100%" }]}>
          <Text style={SignUpStyles.loginText}>Back</Text>
        </TouchableOpacity>

        <TouchableOpacity
          onPress={handlePublish}
          style={[SignUpStyles.loginButtoned]}
          disabled={loading}
        >
          {loading ? (
            <ActivityIndicator size="small" color="#fff" />
          ) : (
            <Text style={SignUpStyles.loginText}>Publish</Text>
          )}
        </TouchableOpacity>
      </View>

      <View>
        <CancelItem 
          visible={modalVisible}
          onClose={() => setModalVisible(false)}
        />
      </View>
    </SafeAreaView>
  );
};

export default ReviewItem;
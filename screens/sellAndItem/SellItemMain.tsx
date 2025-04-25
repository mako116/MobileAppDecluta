import SellItems from '@/styles/sellItem/Sellitem';
import HeaderWithDesc from '@/UI/Header/HeaderWithDescription';
import React, { useEffect } from 'react';
import { Alert, Image, SafeAreaView, ScrollView, Text, TouchableOpacity, View } from 'react-native';
import { SignUpStyles } from '@/styles/Signup/signup.style';
import * as ImagePicker from "expo-image-picker";
import { router } from 'expo-router';
import GalleryIcon from '@/assets/svg/GalleryIcon';
import { useProductForm } from '@/api/Product/Context/ProductFromContext';

const SellItemMain = () => {
    const { formData, updateFormData, validateStep, errors } = useProductForm();
    const { selectedImages, selectedVideo } = formData;
    
    // Determine if button should be enabled
    const isButtonEnabled = selectedImages.length > 0 || selectedVideo !== null;

    const pickImages = async () => {
        try {
            // Request permissions first
            const { status } = await ImagePicker.requestMediaLibraryPermissionsAsync();
            
            if (status !== "granted") {
                // If permission is denied, show an alert
                Alert.alert(
                    "Permission Denied",
                    "Sorry, we need camera roll permission to upload images."
                );
                return;
            }
            
            // Launch Expo's image picker
            const result = await ImagePicker.launchImageLibraryAsync({
                mediaTypes: ImagePicker.MediaTypeOptions.Images,
                allowsMultipleSelection: true,
                selectionLimit: 10 - selectedImages.length, // Only allow selecting remaining slots
                quality: 1,
            });
            
            // Check if the user didn't cancel the operation and if there are selected assets
            if (!result.canceled && result.assets && result.assets.length > 0) {
                // Map the selected assets to get their URIs
                const newImages = result.assets.map(asset => asset.uri);
                
                // Update form context with the new images
                updateFormData('selectedImages', [...selectedImages, ...newImages].slice(0, 10));
            }
        } catch (error) {
            console.error("Error picking images:", error);
            Alert.alert("Error", "Failed to pick images. Please try again.");
        }
    };

    const removeImage = (index: number) => {
        const newImages = [...selectedImages];
        newImages.splice(index, 1);
        updateFormData('selectedImages', newImages);
    };

    const pickVideo = async () => {
        try {
            // Request permissions first
            const { status } = await ImagePicker.requestMediaLibraryPermissionsAsync();
            
            if (status !== "granted") {
                Alert.alert(
                    "Permission Denied",
                    "Sorry, we need camera roll permission to upload videos."
                );
                return;
            }
            
            // Launch Expo's image picker for videos
            const result = await ImagePicker.launchImageLibraryAsync({
                mediaTypes: ImagePicker.MediaTypeOptions.Videos,
                allowsMultipleSelection: false,
                quality: 1,
                videoMaxDuration: 60, // 60 seconds max
            });
            
            if (!result.canceled && result.assets && result.assets.length > 0) {
                const asset = result.assets[0];
                
                // Check file size (approx calculation as Expo doesn't provide fileSize directly)
                const fileSize = asset.fileSize;
                if (fileSize && fileSize > 50 * 1024 * 1024) {
                    Alert.alert("File Too Large", "Video must be under 50MB.");
                    return;
                }
                
                // Check duration (if available)
                const duration = asset.duration;
                if (duration && duration > 60) {
                    Alert.alert("Video Too Long", "Video must be under 60 seconds.");
                    return;
                }
                
                updateFormData('selectedVideo', asset.uri);
            }
        } catch (error) {
            console.error("Error picking video:", error);
            Alert.alert("Error", "Failed to pick video. Please try again.");
        }
    };

    const removeVideo = () => {
        updateFormData('selectedVideo', null);
    };

    const handleNext = () => {
        if (validateStep(1)) {
            router.push("/sellanItem/secondStep");
        } else {
            Alert.alert("Required", "Please upload at least one image");
        }
    };

    const headerSave = selectedImages.length > 0 || selectedVideo ? 'Save' : '';

    return (
        <SafeAreaView
            style={
                {
                    backgroundColor: '#fff',
                    height: '100%',
                }
            }
        >
            <HeaderWithDesc title={'Sell an item'} subTile='(Step 1/5)' headerSave={headerSave} />
            <ScrollView contentContainerStyle={SellItems.scrollViewContent}>
                <View
                style={
                    {
                        
                        flex: 1,
                    }
                }>
                    {/* Image Upload Section */}
                <View style={SellItems.contains}>
                    <Text style={SellItems.label}>Choose item Photos</Text>
                    <Text style={SellItems.subLabal}>
                        Photos uploaded: {selectedImages.length}/10   You can upload up to 10 photos of your item
                    </Text>
                    {errors.selectedImages && <Text style={{ color: 'red' }}>{errors.selectedImages}</Text>}
                    
                    {/* Images Grid Section */}
                    <View style={SellItems.imagesContainer}>
                        {/* Add Photo Button */}
                        {selectedImages.length < 10 && (
                            <TouchableOpacity 
                                style={[SellItems.img]} 
                                onPress={pickImages}
                            >
                                <GalleryIcon />
                                <Text style={[SellItems.optionSubText]}>Add photo</Text>
                            </TouchableOpacity>
                        )}
                        
                        {/* Selected Images */}
                        {selectedImages.map((uri, index) => (
                            <View key={index} style={SellItems.imageWrapper}>
                                <Image source={{ uri }} style={SellItems.imageItem} />
                                <TouchableOpacity 
                                    style={SellItems.removeButton}
                                    onPress={() => removeImage(index)}
                                >
                                    <Text style={SellItems.removeButtonText}>✕</Text>
                                </TouchableOpacity>
                            </View>
                        ))}
                    </View>
                </View>

                {/* Video Upload Section */}
                <View style={SellItems.contains}>
                    <Text style={SellItems.label}>Add a video showcasing your item (optional)</Text>
                    <Text style={SellItems.subLabal}>
                        Video uploaded: {selectedVideo ? '1/1' : '0/1'}
                    </Text>
                    <Text style={SellItems.subLabal}>
                        Grab buyer's attention with a video showcasing your item. You can upload only one video up to 60 seconds long and under 50MB
                    </Text>

                    <View style={SellItems.videoContainer}>
                        {/* Show video if selected, otherwise show add button */}
                        {selectedVideo ? (
                            <View style={SellItems.videoWrapper}>
                                {/* Video thumbnail */}
                                <Image 
                                    source={{ uri: selectedVideo }} 
                                    style={SellItems.videoThumbnail}
                                />
                                
                                {/* Play icon overlay */}
                                <View style={SellItems.playIconContainer}>
                                    <Text style={SellItems.playIcon}>▶</Text>
                                </View>
                                
                                {/* Remove button */}
                                <TouchableOpacity 
                                    style={SellItems.removeButton}
                                    onPress={removeVideo}
                                >
                                    <Text style={SellItems.removeButtonText}>✕</Text>
                                </TouchableOpacity>
                            </View>
                        ) : (
                            <TouchableOpacity 
                                style={[SellItems.img]} 
                                onPress={pickVideo}
                            >
                                {/* Use a video icon or customize as needed */}
                                <GalleryIcon />
                                <Text style={[SellItems.optionSubText]}>Add video</Text>
                            </TouchableOpacity>
                        )}
                    </View>
                </View>
                </View>
                
            </ScrollView>

            {/* Show Back and Next Button if media is selected */}
            <View style={SellItems.flexDifAb}>
                {selectedImages.length > 0 || selectedVideo ? (
                    <View style={SellItems.flexDif}>
                        <TouchableOpacity
                            style={[SignUpStyles.loginButtons, { backgroundColor: '#fff', borderWidth: 1, borderColor: "#463E31", flex: 1 }]}
                        >
                            <Text style={[SignUpStyles.loginText]}>Back</Text>
                        </TouchableOpacity>

                        <TouchableOpacity
                            style={[SignUpStyles.loginButtons, { flex: 1 }]}
                            onPress={handleNext}
                        >
                            <Text style={[SignUpStyles.loginText]}>Next</Text>
                        </TouchableOpacity>
                    </View>
                ) : (
                    // Show only Next button if no media selected
                    <TouchableOpacity
                        onPress={handleNext}
                        style={[SignUpStyles.loginButtons, !isButtonEnabled && { backgroundColor: "#E9E9E9" }]}
                        disabled={!isButtonEnabled}
                    >
                        <Text style={[!isButtonEnabled && { color: "#A0A0A0" }, SignUpStyles.loginText]}>
                            Next
                        </Text>
                    </TouchableOpacity>
                )}
            </View>
        </SafeAreaView>
    );
};

export default SellItemMain;
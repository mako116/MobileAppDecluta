import SellItems from '@/styles/sellItem/Sellitem';
import HeaderWithDesc from '@/UI/Header/HeaderWithDescription';
import React, { useState } from 'react';
import { Image, ScrollView, Text, TouchableOpacity, View } from 'react-native';
import addphoto from "../../assets/images/addphoto.png";
import addVideo from "../../assets/images/addVideo.png";
import { SignUpStyles } from '@/styles/Signup/signup.style';
import { launchImageLibrary } from 'react-native-image-picker';
import { router } from 'expo-router';

const SellItemMain = () => {
    const [isButtonEnabled, setIsButtonEnabled] = useState(false);
    const [selectedImages, setSelectedImages] = useState<string[]>([]);
    const [selectedVideo, setSelectedVideo] = useState<string | null>(null);

    const pickImages = () => {
        launchImageLibrary(
            { mediaType: 'photo', selectionLimit: 10 },
            (response) => {
                if (!response.didCancel && response.assets) {
                    const newImages = response.assets.map(asset => asset.uri || '');
                    setSelectedImages([...selectedImages, ...newImages].slice(0, 10));
                    setIsButtonEnabled(true);
                }
            }
        );
    };

    const pickVideo = () => {
        launchImageLibrary(
            { mediaType: 'video', selectionLimit: 1 },
            (response) => {
                if (!response.didCancel && response.assets && response.assets[0].fileSize && response.assets[0].duration) {
                    if (response.assets[0].fileSize > 50 * 1024 * 1024) {
                        alert("Video must be under 50MB.");
                        return;
                    }
                    if (response.assets[0].duration > 60) {
                        alert("Video must be under 60 seconds.");
                        return;
                    }
                    setSelectedVideo(response.assets[0].uri || '');
                    setIsButtonEnabled(true);
                }
            }
        );
    };

    const headerSave = selectedImages.length > 0 || selectedVideo ? 'Save' : '';

    return (
        <>
            <HeaderWithDesc title={'Sell an item'} subTile='(Step 1/5)' headerSave={headerSave} />
            {/* <View style={SellItems.flexRow}> */}
                <ScrollView contentContainerStyle={SellItems.scrollViewContent}>
                    {/* Image Upload Section */}
                    <View style={SellItems.contains}>
                        <Text style={SellItems.label}>Choose item Photos</Text>
                        <Text style={SellItems.subLabal}>
                            Photos uploaded: {selectedImages.length}/10   You can upload up to 10 photos of your item
                        </Text>
                        <TouchableOpacity onPress={pickImages} >
                            <Image source={selectedImages.length > 0 ? { uri: selectedImages[0] } : addphoto} style={SellItems.img} />
                        </TouchableOpacity>
                    </View>

                    {/* Video Upload Section */}
                    <View style={SellItems.contains}>
                        <Text style={SellItems.label}>Add a video showcasing your item (optional)</Text>
                        <Text style={SellItems.subLabal}>
                            Video uploaded: {selectedVideo ? '1/1' : '0/1'}
                        </Text>
                        <Text style={SellItems.subLabal}>
                            Grab buyer’s attention with a video showcasing your item. You can upload only one video up to 60 seconds long and under 50MB
                        </Text>
                        <TouchableOpacity onPress={pickVideo} >
                            <Image source={selectedVideo ? { uri: selectedVideo } : addVideo} style={SellItems.img} />
                        </TouchableOpacity>
                    </View>
                </ScrollView>

                {/* Show Back and Next Button if media is selected */}
               <View style={SellItems.flexDifAb}>
               {selectedImages.length > 0 || selectedVideo ? (
                     <View style={SellItems.flexDif}>
                     <TouchableOpacity
                         style={[SignUpStyles.loginButtons, { backgroundColor: '#fff',borderWidth:1,borderColor:"#463E31",flex:1}]}
                     >
                         <Text style={[SignUpStyles.loginText]}>Back</Text>
                     </TouchableOpacity>
 
                     <TouchableOpacity
                         style={[SignUpStyles.loginButtons, {flex:1 }]}
                     >
                         <Text style={[SignUpStyles.loginText]}>Next</Text>
                     </TouchableOpacity>
                 </View>
                ) : (
                    // Show only Next button if no media selected
                    <TouchableOpacity
                    onPress={()=> router.push("/sellanItem/secondStep")}
                        style={[SignUpStyles.loginButtons, !isButtonEnabled && { backgroundColor: "#E9E9E9" }]}
                        // disabled={!isButtonEnabled}
                    >
                        <Text style={[!isButtonEnabled && { color: "#A0A0A0" }, SignUpStyles.loginText]}>
                            Next
                        </Text>
                    </TouchableOpacity>
                )}
               </View>
            {/* </View> */}
        </>
    );
};

export default SellItemMain;

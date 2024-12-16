import React, { useState } from 'react';
import {
  View,
  Text,
  SafeAreaView,
  Image,
  StatusBar,
  TouchableOpacity,
  ScrollView,
  Modal,
  RefreshControl,
} from 'react-native';
import LocationIcons from '@/screens/icons';
import NotificationsAlert from '@/screens/alerts/NotificationsAlert';
import Banner from '@/screens/BoxBanner/banner/Banner';
import ExploreProducts from '@/screens/Products/ExploreNewFinds/Explore/ExploreProducts';
import Categories from '@/screens/Products/BrowseCategory/Categories/Categories';
import ExploreProducts3 from '@/screens/Products/RecommendProducts/Explore3/ExploreProducts3';
import ProductBanner from '@/screens/Products/ProductBanner/Banner/banner';
import DiscoverProducts from '@/screens/Products/DiscoverProducts/DiscoverProducts/DiscoverProducts';
import Loginbanner from '@/screens/BoxBanner/Loginbanner/Loginbanner';
import ProfileKYc from '@/screens/Kyc/BannerH/ProfileKYc';
import Button from '../Button/button';
import { Picker } from '@react-native-picker/picker';
import { Ionicons, MaterialIcons } from '@expo/vector-icons';
import LocationModal from '@/screens/ChangeLocation/changelocationScreen';
import Homes from '@/styles/Homes/Home.styles';
import { router } from 'expo-router';

export default function HomeScreen() {
  const [modalVisible, setModalVisible] = useState(false);
  const [currentPopup, setCurrentPopup] = useState(1);
  const [selectedState, setSelectedState] = useState('Oyo');
  const [refreshing, setRefreshing] = useState(false);
  const [cartCount, setCartCount] = useState(3); // Example cart count

  const openModal = () => {
    setModalVisible(true);
    setCurrentPopup(1);
  };

  const closeModal = () => {
    setModalVisible(false);
    setCurrentPopup(1);
  };

  const onRefresh = () => {
    setRefreshing(true);
    setTimeout(() => {
      setRefreshing(false);
    }, 2000); // 2-second delay
  };


  return (
    <>
      <StatusBar translucent backgroundColor="transparent" barStyle="dark-content" />
      <SafeAreaView style={Homes.container}>
      <View style={Homes.rowContainer}>
              <View style={Homes.leftItem}>
                <Image source={require('../../assets/images/newimages/Main Logo.png')} style={{width:150,height:30}} />
                <TouchableOpacity onPress={openModal} style={{ flexDirection: 'row', alignItems: 'center' }}>
                  <LocationIcons />
                  <Text>
                    {selectedState} <Text style={{ color: 'gray' }}>(change)</Text>
                  </Text>
                </TouchableOpacity>
              </View>
              <View style={Homes.rightItems}>
                <NotificationsAlert />
              </View>
            </View>
        <ScrollView
          scrollEventThrottle={16}
          refreshControl={
            <RefreshControl refreshing={refreshing} onRefresh={onRefresh} />
          }
        >
          <View style={Homes.content}>
            

            {/* Complete KYC */}
            <View>
              <ProfileKYc />
            </View>

            <View>
              <Banner />
            </View>

            {/* Products */}
            <View>
              <ExploreProducts />
            </View>
            <View>
              <Categories />
            </View>
            <View>
              <ExploreProducts3 />
            </View>
            <View>
              <ProductBanner />
            </View>
            <View>
              <DiscoverProducts />
            </View>
           
          </View>


          {/* Popup Modals */}

          
           {/* Use the modal component */}
      <LocationModal
        modalVisible={modalVisible}
        setModalVisible={setModalVisible}
        selectedState={selectedState}
        setSelectedState={setSelectedState}
        currentPopup={currentPopup}
        setCurrentPopup={setCurrentPopup}
      />
        </ScrollView>
      </SafeAreaView>

      {/* Cart Icon Fixed at Bottom */}
      <TouchableOpacity style={Homes.cartIcon}>
      <Ionicons name="cart-outline" size={24} color="#212121"/>
         <View style={Homes.cartBadge}>
          <Text style={Homes.cartBadgeText}>{cartCount}</Text>
        </View>
      </TouchableOpacity>

      <View>
              <Loginbanner />
            </View>
    </>
  );
}



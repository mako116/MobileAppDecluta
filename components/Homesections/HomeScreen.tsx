import React, { useEffect, useState } from 'react';
import {
  View,
  Text,
  SafeAreaView,
  Image,
  StatusBar,
  TouchableOpacity,
  ScrollView,
  RefreshControl,
} from 'react-native';
import LocationIcons from '@/screens/icons';
import NotificationsAlert from '@/screens/alerts/NotificationsAlert';
import Banner from '@/screens/BoxBanner/banner/Banner';
import Categories from '@/screens/Products/BrowseCategory/Categories/Categories';
import ExploreProducts3 from '@/screens/Products/RecommendProducts/Explore3/ExploreProducts3';
import ProductBanner from '@/screens/Products/ProductBanner/Banner/banner';
import DiscoverProducts from '@/screens/Products/DiscoverProducts/DiscoverProducts/DiscoverProducts';
import Loginbanner from '@/screens/BoxBanner/Loginbanner/Loginbanner';
import ProfileKYc from '@/screens/Kyc/BannerH/ProfileKYc';
import LocationModal from '@/screens/ChangeLocation/changelocationScreen';
import Homes from '@/styles/Homes/Home.styles';
import FloatingCart from '@/screens/FloatingCart/FloatingCart';
import { useSelector } from 'react-redux';
import { RootState } from '@/redux/store';
import AsyncStorage from '@react-native-async-storage/async-storage';
import Button from '../Button/button';
import { logoutUser } from '@/redux/Redux/slice/authSlice';

const HomeScreen: React.FC = () => {
  const [modalVisible, setModalVisible] = useState(false);
  const [currentPopup, setCurrentPopup] = useState(1);
  const [selectedState, setSelectedState] = useState('');
  const [refreshing, setRefreshing] = useState(false);
  const [isLoggedIn, setIsLoggedIn] = useState(false);

  const userData = useSelector((state: RootState) => state.auth.userData);
  
  // Check if user is logged in
  useEffect(() => {
    const checkAuthStatus = async () => {
      try {
        const token = await AsyncStorage.getItem('token');
        console.log('token', token);
        
        setIsLoggedIn(!!token);
        console.log('User logged in:', !!token);
        
      } catch (error) {
        console.error('Error checking auth status:', error);
      }
    };
    
    checkAuthStatus();
  }, []);

  useEffect(() => {
    if (userData) {
      const userState = userData?.state;
      if (userState) {
        setSelectedState(userState);
      } else {
        setSelectedState("Oyo");
      }
    }
  }, [userData]);

  const openModal = () => {
    setModalVisible(true);
    setCurrentPopup(1);
  };

  const onRefresh = () => {
    setRefreshing(true);
    setTimeout(() => {
      setRefreshing(false);
    }, 2000);
  };


  // Add this function to your component
const clearToken = async () => {
  try {
    await AsyncStorage.removeItem('token');
    setIsLoggedIn(false);
    console.log('Token cleared successfully');
  } catch (error) {
    console.error('Error clearing token:', error);
  }
};
{/* Do not remove for testing purpose */}
  
  const handleLogout = async () => {
    logoutUser();
    clearToken();
  }

  return (
    <>
      <StatusBar translucent backgroundColor="transparent" barStyle="dark-content" />
      <SafeAreaView style={Homes.container}>
        {/* Header */}
        <View style={Homes.rowContainer}>
          <View style={Homes.leftItem}>
            <Image
              source={require('../../assets/images/newimages/Main Logo.png')}
              style={{ width: 150, height: 30 }}
            />
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

       

        {/* Content */}
        <ScrollView 
          scrollEventThrottle={16}
          refreshControl={<RefreshControl refreshing={refreshing} onRefresh={onRefresh} />}
        >
          <View style={Homes.content}>
            {/* Do not remove for testing purpose */}

            {/* <Button
              title="Log Out"
              onPress={handleLogout}
              backgroundColor="#DEBC8E"
              borderWidth={0}
            /> */}

            {/* Complete KYC - Only visible when logged in */}
            {isLoggedIn && (
              <View>
                <ProfileKYc />

              </View>
            )}

            {/* Banner - Always visible */}
            <View>
            {/* <Image
              source={require('../../assets/images/dklive/banner.png')}
              // style={{ width: 150, height: 30 }}
            /> */}
              <Banner />
            </View>

            {/* Categories - Always visible */}
            <View>
              <Categories />
            </View>

            {/* Recommended Products - Always visible */}
            <View>
              <ExploreProducts3 />
            </View>

            {/* Product Banner - Always visible */}
            <View>
              <ProductBanner />
            </View>

            {/* Discover Products - Always visible */}
            <View>
              <DiscoverProducts />
            </View>
          </View>

          {/* Location Modal */}
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
      
      {/* Cart Icon Fixed at Bottom - Always visible */}
      <FloatingCart />
      {/* <TouchableOpacity 
  style={{padding: 10, backgroundColor: 'red', margin: 10, borderRadius: 5}}
  onPress={clearToken}
>
  <Text style={{color: 'white'}}>Clear Token</Text>
</TouchableOpacity>  */}

      
      {/* Login Banner - Only visible when NOT logged in */}
      {!isLoggedIn && <Loginbanner />}
    </>
  );
};

export default HomeScreen;
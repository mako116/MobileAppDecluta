import React, { useEffect, useState } from 'react';
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
import LocationModal from '@/screens/ChangeLocation/changelocationScreen';
import Homes from '@/styles/Homes/Home.styles';
import FloatingCart from '@/screens/FloatingCart/FloatingCart';
import { useAuth } from '@/context/AuthContext';
import Button from '../Button/button';

const HomeScreen: React.FC =() => {
  const { getUser, logout } = useAuth();
  const [modalVisible, setModalVisible] = useState(false);
  const [currentPopup, setCurrentPopup] = useState(1);
  const [selectedState, setSelectedState] = useState('');
  const [refreshing, setRefreshing] = useState(false);


  useEffect(() => {
    const getUserData = async () => {
      try {
        const user = await getUser();
        console.log('User data detail:', user?.data);
        const userState = user?.data?.users?.state;

        if (userState) {
          setSelectedState(userState);
        }else(
          setSelectedState('Oyo')
        )
      } catch (error) {
        console.error('Error fetching user data:', error);
        
      }
    };
    getUserData();
  }, [getUser]);

  const openModal = () => {
    setModalVisible(true);
    setCurrentPopup(1);
  };

  


  // const closeModal = () => {
  //   setModalVisible(false);
  //   setCurrentPopup(1);
  // };

  const onRefresh = () => {
    setRefreshing(true);
    setTimeout(() => {
      setRefreshing(false);
    }, 2000); // 2-second delay
  };
  
  {/* Do not remove for testing purpose */}
  
  const handleLogout = async () => {
    await logout();
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

            <Button
              title="Log Out"
              onPress={handleLogout}
              backgroundColor="#DEBC8E"
              borderWidth="1"
            />
            {/* Complete KYC */}
            <View>
              <ProfileKYc />
            </View>

            {/* Banner */}
            <View>
              <Banner />
            </View>

            {/* Explore Products */}
            <View>
              <ExploreProducts />
            </View>

            {/* Categories */}
            <View>
              <Categories />
            </View>

            {/* Recommended Products */}
            <View>
              <ExploreProducts3 />
            </View>

            {/* Product Banner */}
            <View>
              <ProductBanner />
            </View>

            {/* Discover Products */}
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
      {/* Cart Icon Fixed at Bottom */}
      <FloatingCart/>
      
      {/* Login Banner */}
      <Loginbanner />
    </>
  );
}
export default HomeScreen; 
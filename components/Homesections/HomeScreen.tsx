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
import LocationModal from '@/screens/ChangeLocation/changelocationScreen';
import Homes from '@/styles/Homes/Home.styles';
import { Ionicons } from '@expo/vector-icons';
import { useCart } from '@/context/CartContext';
 
export default function HomeScreen() {
  const [modalVisible, setModalVisible] = useState(false);
  const [currentPopup, setCurrentPopup] = useState(1);
  const [selectedState, setSelectedState] = useState('Oyo');
  const [refreshing, setRefreshing] = useState(false);
  const { cart} = useCart();

  const openModal = () => {
    setModalVisible(true);
    setCurrentPopup(1);
  };

  const getCartSummary = () => {
    let totalAmount = 0;
    let uniqueItemCount = cart.length; // Unique items count is the number of items in the cart.
  
    cart.forEach((item) => {
      totalAmount += item.price * item.count;
    });
  
    return { totalAmount, uniqueItemCount };
  };
  
  const {   uniqueItemCount } = getCartSummary();




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

      {/* Login Banner */}
      <View>
        <Loginbanner />
      </View>

      {/* Cart Icon Fixed at Bottom */}
      <TouchableOpacity style={Homes.cartIcon}>
        <Ionicons name="cart-outline" size={24} color="#212121" />
        <View style={Homes.cartBadge}>
          <Text style={Homes.cartBadgeText}>{uniqueItemCount}</Text>
        </View>
      </TouchableOpacity>
    </>
  );
}

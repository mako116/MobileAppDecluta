import NotificationsAlert from '@/screens/alerts/NotificationsAlert';
import React from 'react';
import { View, Text, StyleSheet, SafeAreaView, Image, StatusBar, ImageBackground, TouchableOpacity, ScrollView } from 'react-native';
import SimpleLineIcons from '@expo/vector-icons/SimpleLineIcons';
import LocationIcons from '@/screens/icons';
import Banner from '@/screens/BoxBanner/banner/Banner';
import ExploreProducts from '@/screens/Products/ExploreNewFinds/Explore/ExploreProducts';
import Categories from '@/screens/Products/BrowseCategory/Categories/Categories';
import ExploreProducts3 from '@/screens/Products/RecommendProducts/Explore3/ExploreProducts3';
import ProductBanner from '@/screens/Products/ProductBanner/Banner/banner';
import DiscoverProducts from '@/screens/Products/DiscoverProducts/DiscoverProducts/DiscoverProducts';
import Loginbanner from '@/screens/BoxBanner/Loginbanner/Loginbanner';
 
export default function HomeScreen() {
  return (
    <>
      <StatusBar translucent backgroundColor="transparent" barStyle="dark-content" />
      <SafeAreaView style={styles.container}>
       <ScrollView scrollEventThrottle={16}>
        <View style={styles.content}>
          <View style={styles.rowContainer}>
            <View style={styles.leftItem}>
              <Image
                 source={require('../../assets/images/bolddelclutta.png')}
              />
              <View >
              <TouchableOpacity style={{flexDirection:"row", alignItems:"center"}}>
                <LocationIcons/>
                <Text>oyo <Text style={{color:"gray"}}>(change)</Text></Text>
                </TouchableOpacity>
              </View>
              
            </View>
            <View style={styles.rightItems}>
              <NotificationsAlert/>
            </View>
          </View>
          

      <View>
        <Banner/>
      </View>

      {/* Products */}
      <View>
       <ExploreProducts/>
      </View>
      <View>
       <Categories/>
      </View>
      <View>
       <ExploreProducts3/>
      </View>
      <View>
        <ProductBanner/>
      </View>
      <View>
        <DiscoverProducts/>
      </View>
      <View>
        <Loginbanner/>
      </View>
         </View>
         
         
         </ScrollView>
      </SafeAreaView>
    </>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    paddingTop: 30,
    // paddingBottom: 20,
    backgroundColor: '#F9F9F9',
    borderColor: '#000',
    borderTopWidth: 2,
  },
  content: {
    flex: 1,
    
    paddingVertical:5
  },
  rowContainer: {
    flexDirection: 'row', // Horizontal alignment
    justifyContent: 'space-between', // Space between items
    alignItems: 'center', // Center vertically
    width: '100%', // Full width
    paddingHorizontal: 10,
    paddingVertical:20,
    
  },
  leftItem: {
    flexDirection: 'column', // Stack the image and text vertically
    alignItems: 'flex-start', // Align to start of the view
  },
    
  text: {
    fontSize: 24,
    color: '#ffffff',
  },
  rightItems: {
 
    flexDirection: 'row', // Stack the texts vertically
    alignItems: 'flex-end', // Align texts to the end of the right container
  },
});

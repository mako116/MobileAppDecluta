import { AntDesign, Feather, SimpleLineIcons } from '@expo/vector-icons';
import { router } from 'expo-router';
import React from 'react';
import { Image, ScrollView, StyleSheet, Text, TextInput, TouchableOpacity, View } from 'react-native';
import Explore from './Discover';
import Discover from './Discover';
import LetsIconsFilter from '@/assets/svg/lets-icons_filter';
import HeadBrowse from '@/styles/categories/HeaderBrowse.style';
import Search from '@/assets/images/kyc/Search';
import BackButton from '@/assets/images/kyc/LeftArrow';
 
const HeaderDiscover = () => {
    return (
      <View style={{}}>
      <View style={HeadBrowse.headers}>
        <BackButton />
        <View style={HeadBrowse.searchBar}>
          <TextInput
            style={HeadBrowse.input}
            placeholder="I'm looking for..."
            // value={searchQuery}
            // onChangeText={setSearchQuery}
          />
          <TouchableOpacity 
          // onPress={handleSearch}
           >
            <Search />
          </TouchableOpacity>
        </View>
        <TouchableOpacity style={HeadBrowse.filterButton}>
          <LetsIconsFilter />
        </TouchableOpacity>
      </View>

    <ScrollView style={{ marginBottom:"10%" ,paddingHorizontal:16, paddingVertical:15, }}>
      <Text style={{color:"#212121",fontFamily:"HelveticaNeueLTPro", fontWeight:"700", fontSize:16,lineHeight:22.4}}>Discover Great Offers</Text>
      <Text style={{color:"#212121", fontWeight:"400", fontSize:12,lineHeight:22.4}}>Find fantastic deals on items you love! From discounts on tech and home essentials to special offers across categories, enjoy quality items at unbeatable prices; grab these deals before they’re gone!</Text>
      <Discover/>
    </ScrollView>
  </View>
    );
}

const styles = StyleSheet.create({
  searchBox: { flexDirection: 'row', alignItems: 'center', paddingHorizontal: 10, paddingVertical:20, justifyContent:"space-between" },
  input: { flex: 1,  fontSize: 13 ,  paddingVertical:5,padding:10, },
 
})

export default HeaderDiscover;

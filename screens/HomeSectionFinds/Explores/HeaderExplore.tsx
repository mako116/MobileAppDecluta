import { AntDesign, Feather, SimpleLineIcons } from '@expo/vector-icons';
import { router } from 'expo-router';
import React from 'react';
import { Image, ScrollView, StyleSheet, Text, TextInput, TouchableOpacity, View } from 'react-native';
import Explore from './Explore';
import HeadBrowse from '@/styles/categories/HeaderBrowse.style';
import BackButton from '@/assets/images/kyc/LeftArrow';
import LetsIconsFilter from '@/assets/svg/lets-icons_filter';
import Search from '@/assets/images/kyc/Search';
 
const HeaderExplore = () => {
    return (
    <View style={{}}>
      {/* head search */}
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
      
        {/* Explore Section */}
          <ScrollView style={{ marginBottom:"10%" ,paddingHorizontal:16, paddingVertical:15, }}>
            <Text style={{color:"#212121",fontFamily:"HelveticaNeueLTPro", fontWeight:"700", fontSize:16,lineHeight:22.4}}>Explore New Finds</Text>
            <Text style={{color:"#212121", fontWeight:"400", fontSize:12,lineHeight:22.4}}>
            Discover fresh listings in tech, electronics, home appliances, and more. Our community brings new items every day, giving you endless options to explore. Start browsing and find that perfect item today!
              </Text>
            <Explore/>
          </ScrollView>
        </View>
    );
}

const styles = StyleSheet.create({
    searchBox: { flexDirection: 'row', alignItems: 'center', paddingHorizontal: 10, paddingVertical:20, justifyContent:"space-between" },
    input: { flex: 1,  fontSize: 13 ,  paddingVertical:5,padding:10, },
  
})

export default HeaderExplore;

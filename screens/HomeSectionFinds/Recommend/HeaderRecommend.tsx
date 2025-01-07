import { AntDesign, Feather, SimpleLineIcons } from '@expo/vector-icons';
import { router } from 'expo-router';
import React from 'react';
import { Image, ScrollView, StyleSheet, Text, TextInput, TouchableOpacity, View } from 'react-native';
import Explore from './Recommend';
import Recommend from './Recommend';
import LetsIconsFilter from '@/assets/svg/lets-icons_filter';
import Search from '@/assets/images/kyc/Search';
import HeadBrowse from '@/styles/categories/HeaderBrowse.style';
import BackButton from '@/assets/images/kyc/LeftArrow';
 
const HeaderRecommend
 = () => {
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

      {/* Recommend */}
          <ScrollView style={{ marginBottom:"10%" ,paddingHorizontal:20, paddingVertical:15, }}>
            <Text style={{color:"#212121",fontFamily:"HelveticaNeueLTPro", fontWeight:"700", fontSize:16,lineHeight:22.4}}>See What We Recommend </Text>
            <Text style={{color:"#212121", fontWeight:"400", fontSize:12,lineHeight:22.4}}>From top deals to trending items, our recommendations make it easy to find products that match your taste and interests. Let us guide you to the best picks; explore curated finds that might just be your next favorite.</Text>
            <Recommend/>
          </ScrollView>
        </View>
    );
}

const styles = StyleSheet.create({
    searchBox: { flexDirection: 'row', alignItems: 'center', paddingHorizontal: 10, paddingVertical:20, justifyContent:"space-between" },
    input: { flex: 1,  fontSize: 13 ,  paddingVertical:5,padding:10, },
  
})

export default HeaderRecommend
;

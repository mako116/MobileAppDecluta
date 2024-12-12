import { AntDesign, Feather, SimpleLineIcons } from '@expo/vector-icons';
import { router } from 'expo-router';
import React from 'react';
import { Image, ScrollView, StyleSheet, Text, TextInput, TouchableOpacity, View } from 'react-native';
import Browse from './Browse';
  
const HeaderBrowse = () => {
    return (
        <View style={{}}>
            <View style={{paddingTop:40,backgroundColor:"#fff"}}>
            <View style={styles.searchBox}>
           <View style={{flexDirection:"row",width:"70%",alignItems:"center", gap:20}}>
           <AntDesign onPress={router.back} name="arrowleft" size={24} color="black" />
         <View style={{borderWidth:1, flexDirection:"row", alignItems:"center",borderRadius:7, paddingHorizontal:5,borderColor:"#E9E9E9"}}>
         <TextInput
              style={styles.input}
              placeholder="I'm looking for...."
              placeholderTextColor="#888"
              
            />
            <TouchableOpacity>
              <Feather name="search" size={24} color="#A4A4A4" />
            </TouchableOpacity>
         </View>
          </View>
            <TouchableOpacity>
           <Image  source={require("../../../assets/images/filter.png")} />           
           </TouchableOpacity>
          </View>
            </View>
          <ScrollView style={{ marginBottom:"10%" ,paddingHorizontal:20, paddingVertical:15, }}>
            <Text style={{color:"#212121",fontFamily:"HelveticaNeueLTPro", fontWeight:"700", fontSize:16,lineHeight:22.4}}>Browse our categories</Text>
            <Text style={{color:"#212121", fontWeight:"400", fontSize:12,lineHeight:22.4}}>Find fantastic deals on items you love! From discounts on tech and home essentials to special offers across categories, enjoy quality items at unbeatable prices; grab these deals before they’re gone!</Text>
            <Browse/>
          </ScrollView>
        </View>
    );
}

const styles = StyleSheet.create({
    searchBox: { flexDirection: 'row', alignItems: 'center', paddingHorizontal: 10, paddingVertical:20, justifyContent:"space-between" },
    input: { flex: 1,  fontSize: 13 ,  paddingVertical:5,padding:10, },
  
})

export default HeaderBrowse;

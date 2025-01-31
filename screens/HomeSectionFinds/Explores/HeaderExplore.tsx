import { AntDesign, Feather, SimpleLineIcons } from '@expo/vector-icons';
import { router } from 'expo-router';
import React from 'react';
import { Image, ScrollView, StyleSheet, Text, TextInput, TouchableOpacity, View } from 'react-native';
import Explore from './Explore';
 
const HeaderExplore = () => {
    return (
        <View>
          <View style={{paddingTop:40,backgroundColor:"#fff"}}>
            <View style={styles.searchBox}>
              <AntDesign onPress={router.back} name="arrowleft" size={24} color="black" />

              {/* input field */}
              <View style={{
                  flex: 1,
                  borderWidth:1, 
                  flexDirection:"row", 
                  alignItems:"center",
                  borderRadius:7 ,
                  borderColor:"#E9E9E9",
                  paddingHorizontal: 6,
                }}
              >
                <TextInput
                  style={styles.input}
                  placeholder="I'm looking for...."
                  placeholderTextColor="#888"
                />
                <Feather name="search" size={24} color="#A4A4A4" />
              </View>

              <TouchableOpacity>
                <Image  source={require("../../../assets/images/filter.png")} />           
              </TouchableOpacity>
            </View>
          </View>

          <ScrollView style={{ marginBottom:"10%" ,paddingHorizontal:20, paddingVertical:15, }}>
            <Text style={{color:"#212121",fontFamily:"Helvetica Neue", fontWeight:"700", fontSize:16,lineHeight:22.4, paddingBottom: 10}}>Explore New Finds</Text>
            <Text style={{color:"#212121", fontWeight:"400", fontSize:14,lineHeight:19.6, fontFamily:"Proxima Nova"}}>Discover fresh listings in tech, electronics, home appliances, and more. Our community brings new items every day, giving you endless options to explore. Start browsing and find that perfect item today!</Text>
            <Explore/>
          </ScrollView>
        </View>
    );
}

const styles = StyleSheet.create({
    searchBox: { flexDirection: 'row', alignItems: 'center',paddingHorizontal:18, paddingVertical:20, justifyContent:"space-between", gap: 10 },
    input: { flex: 1, fontSize: 13 ,  paddingVertical:5, },
  
})

export default HeaderExplore;

import { AntDesign, Feather } from '@expo/vector-icons';
import { router } from 'expo-router';
import React from 'react';
import { StyleSheet, TextInput, TouchableOpacity, View } from 'react-native';
import MultipleProd from './MultileProducts';

const HeaderMulti = () => {
    return (
        <View>
            <View style={{paddingTop:40,backgroundColor:"#fff"}}>
            <View style={styles.searchBox}>
            <AntDesign onPress={router.back} name="arrowleft" size={24} color="black" />
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
          <View style={{backgroundColor:"#F9F9F9", height:"100%"}}>
            <MultipleProd/>
          </View>
        </View>
    );
}

const styles = StyleSheet.create({
    searchBox: { flexDirection: 'row', alignItems: 'center', paddingHorizontal: 10, paddingVertical:20 },
    input: { flex: 1, marginHorizontal: 10, fontSize: 13 , borderWidth:1,paddingVertical:5,padding:10, borderColor:"#F1F1F1"},
  
})

export default HeaderMulti;

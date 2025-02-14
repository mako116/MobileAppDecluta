import { AntDesign, Feather, SimpleLineIcons } from '@expo/vector-icons';
import { router } from 'expo-router';
import React from 'react';
import { Image, ScrollView, StyleSheet, Text, TextInput, TouchableOpacity, View } from 'react-native';
import All from './Sections/All';
import NotificationBoard from './NotificationBoard';
 
const HeaderNotification = () => {
  return (
    <View>
      <View style={{paddingTop:40,backgroundColor:"#fff",paddingHorizontal:5}}>
        <View style={styles.searchBox}>
          <View style={{flexDirection:"row",alignItems:"center", gap:20}}>
           <TouchableOpacity onPress={router.back}>
           <Image  source={require('../../assets/images/leftArrow.png')} style={{width:30,height:20}} />         
           </TouchableOpacity>
             <Text style={{fontFamily:"Helvetica Neue", fontWeight:"700", fontSize:16}}>
              Notifications
            </Text>
          </View>
          <TouchableOpacity>
            <Image source={require('../../assets/images/newimages/setting-2.png')} style={{width:24,height:24}} />            
          </TouchableOpacity>
        </View>
      </View>
      <ScrollView style={{ marginBottom:"10%"  }}>
        <NotificationBoard/>
      </ScrollView>
    </View>
  );
}

const styles = StyleSheet.create({
    searchBox: { flexDirection: 'row', alignItems: 'center', paddingHorizontal: 10, paddingVertical:20, justifyContent:"space-between" },
    input: { flex: 1, marginHorizontal: 10, fontSize: 13 , borderWidth:1,paddingVertical:5,padding:10, borderColor:"#F1F1F1"},
  
})

export default HeaderNotification;

import { AntDesign, Feather, SimpleLineIcons } from '@expo/vector-icons';
import { router } from 'expo-router';
import React from 'react';
import { ScrollView, StyleSheet, Text, TextInput, TouchableOpacity, View } from 'react-native';
import All from './Sections/All';
import NotificationBoard from './NotificationBoard';
 
const HeaderNotification = () => {
    return (
        <View>
            <View style={{paddingTop:40,backgroundColor:"#fff"}}>
            <View style={styles.searchBox}>
           <View style={{flexDirection:"row",alignItems:"center", gap:20}}>
           <AntDesign onPress={router.back} name="arrowleft" size={24} color="black" />
            <Text style={{fontFamily:"HelveticaNeueLTPro", fontWeight:"700", fontSize:16}}>
              Notification
            </Text>
           </View>
            <TouchableOpacity>
            <SimpleLineIcons name="settings" size={24} color="black" />
              {/* <Feather name="search" size={24} color="#A4A4A4" /> */}
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

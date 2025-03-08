import BackButton from '@/assets/images/kyc/LeftArrow';
import SignupSvg from '@/assets/svg/signupheader';
import DetailScreen from '@/screens/auth/Detailscreens/DetailsScreen';
import { SignUpStyles } from '@/styles/Signup/signup.style';
import { Entypo, Feather } from '@expo/vector-icons';
import { router } from 'expo-router';
import React from 'react'
import { View, Text, ScrollView, StyleSheet, TextInput, TouchableOpacity, ActivityIndicator, Image, Alert } from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';


export default function SignUp() {
  const handleGoBack = () => {
    router.back();
  };

 

  return (
    <SafeAreaView edges={['bottom']} style = {{flex: 1, backgroundColor: "#F9F9F9"  }}>
      <View style={{ backgroundColor: 'white' }} >
        <View style={[ styles.rowJustified, { marginRight: 20 }]}>
          <TouchableOpacity onPress={handleGoBack}>
            <Feather name="arrow-left" size={24} color="black" />
          </TouchableOpacity>

          <View style= { styles.row } >
            <View style = {[ styles.row, styles.currentStageIcon ]} >
              <Entypo name="check" size={8} color="white" />
            </View>
            <View style = {[ styles.divider, { backgroundColor: '#DEBC8E' } ]} />
            <View style = {[ styles.row, styles.nextStageIcon ]} >
              <Entypo name="check" size={8} color="white" />
            </View>
            <View style = {[ styles.divider, { backgroundColor: '#A4A4A4' } ]} />
            <View style = {[ styles.row, styles.nextStageIcon ]} >
              <Entypo name="check" size={8} color="white" />
            </View>
            <View style = {[ styles.divider, { backgroundColor: '#A4A4A4' } ]} />
            <View style = {[ styles.row, styles.nextStageIcon ]} >
              <Entypo name="check" size={8} color="white" />
            </View>
          </View>

          {/* leave empty */}
          <View>
          </View>

        </View>
      </View>
      <ScrollView scrollEventThrottle={16} >
        <View style={styles.section}>
          <Text style={{color:"#212121", fontWeight:"700", fontSize:23, lineHeight:32.2, fontFamily:"Helvetica Neue"}}>Tell Us About yourself</Text>
        </View>

        <DetailScreen/>
      </ScrollView>
    </SafeAreaView>
  )
}

const styles = StyleSheet.create({
  row: {
    display: "flex",
    flexDirection: 'row',
    alignItems: "center",
    justifyContent: "center"
  },
  rowJustified: {
    display: "flex",
    flexDirection: 'row',
    alignItems: "center",
    justifyContent: "space-between",
    paddingHorizontal: 12,
    paddingTop:60,
    paddingBottom: 20,
  },
  divider: {
    width: 35,
    height: 1,
    marginHorizontal: 3
  },
  currentStageIcon: {
    padding: 4,
    borderRadius: 20,
    backgroundColor: "#DEBC8E"
  },
  passedStageIcon: {
    padding: 4,
    borderRadius: 20,
    backgroundColor: "black"
  },
  nextStageIcon: {
    padding: 2.5,
    borderRadius: 20,
    borderWidth: 2,
    borderColor: "#A4A4A4"
  },
  signs: {
    paddingHorizontal: 12,
    // paddingTop: 60,
    paddingVertical:32,
    paddingTop: 50,
    paddingBottom: 20,
    flexDirection: "row",
    justifyContent:"flex-start",
    alignItems: "center",
    backgroundColor: "#fff",
  },
  containers:{
    paddingHorizontal:10
  },
  texts: {
    fontWeight: "700",
    fontSize: 16,
    lineHeight: 22.4,
    color: "#212121",
    marginLeft: 10,
  },
  contents:{
    paddingVertical:20,
    paddingHorizontal:13
  },
  section:{
    paddingTop:13,
    paddingHorizontal:13
  }
});

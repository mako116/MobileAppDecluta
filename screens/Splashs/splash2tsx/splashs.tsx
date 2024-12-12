import { View, Text, StyleSheet, Image, useWindowDimensions } from 'react-native'
import React, { useEffect } from 'react'
import { useRouter } from 'expo-router'
import LottieView from 'lottie-react-native';

export default function Splashs() {

    const router = useRouter();
     
    useEffect(()=>{
        setTimeout(() => {
            // router.push("/(tabs)/home")
            router.push("/(routes)/welcomebackPIn")
         }, 2000);
    },[])
 
  return (
    <View style={styles.background}>
      {/* <Text style={styles.welcomeText}>splashs</Text> */}
     
    <View style={[StyleSheet.absoluteFillObject, styles.container]}>
    <Image
      source={require('../../../assets/images/decluttaking.png')}
      style={styles.logo}
      />
      {/* loading */}
      
      <Image
      style={{width:280, height:20}}
      source={require('../../../assets/loading/Animation.gif')}/>
      </View>
      <View style={{justifyContent:"center", marginBottom:90, margin:"auto"}}>
      <Text style={{ color:"#fff",fontWeight:"700",textAlign:"center",fontSize:23, lineHeight:32.2, paddingHorizontal:50, marginBottom:10}}>
       Welcome to
       DecluttaKing
       </Text>
       <Text style={{fontSize:14, fontWeight:"400", lineHeight:19.6,textAlign:"center",paddingHorizontal:60, color:"#FFFFFF"}}>Sell and swap your used items in minutes! Happy Declutta-ing!</Text>
      </View>
    </View>
  )
}

const styles = StyleSheet.create({
    background:{
      flex:1,
      backgroundColor:"#463e31",
      justifyContent: "center",
      alignContent:"center",
     },
    welcomeText:{
      textAlign:"center",
      fontSize:40,
      color:"#fff",
      fontWeight:"600"
    },
    container:{
        display:"flex",
        // marginTop:60,
        paddingBottom:10,
        marginLeft:8,
        justifyContent: "center",
        alignItems:"center",
        // zIndex:1,
       },
    logo:{
      // margin:"auto",
      display:"flex",
      justifyContent:"center",
      alignItems:"center"
    },
    
  })
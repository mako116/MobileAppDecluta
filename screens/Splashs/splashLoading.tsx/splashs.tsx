import { View, Text, StyleSheet, Image, useWindowDimensions } from 'react-native'
import React, { useEffect } from 'react'
import { useRouter } from 'expo-router'
import LottieView from 'lottie-react-native';

export default function Splashs() {

    const router = useRouter();
     
    useEffect(()=>{
        setTimeout(() => {
            router.push("/(routes)/welcomebackPIn")
        }, 1500);
    },[])

  return (
    <View style={styles.background}>
      {/* <Text style={styles.welcomeText}>splashs</Text> */}
      <Image
      source={require('../../../assets/images/decluttaking.png')}
      style={styles.logo}
      />
    <View style={[StyleSheet.absoluteFillObject, styles.container]}>

      <Image
      style={{width:280, height:80}}
      source={require('../../../assets/loading/Animation.gif')}/>
      </View>
       
    </View>
  )
}

const styles = StyleSheet.create({
    background:{
      flex:1,
      backgroundColor:"#463e31",
      justifyContent: "center",
      alignContent:"center"
    },
    welcomeText:{
      textAlign:"center",
      fontSize:40,
      color:"#fff",
      fontWeight:"600"
    },
    container:{
        display:"flex",
        marginTop:60,
        paddingTop:10,
        marginLeft:8,
        justifyContent: "center",
        alignItems:"center",
        // zIndex:1,
       },
    logo:{
      margin:"auto",
      display:"flex",
      justifyContent:"center"
    },
    input:{
      height:55,
      marginHorizontal:16,
      borderRadius:8,
      paddingLeft:35,
      fontSize:14,
      backgroundColor:"white",
      color:"#a1a1a1"
    },
    visibleicon:{
      position:"absolute",
      right:30,
      top:15
    },
    icon2:{
      position:"absolute",
      left:24,
      top:17.8,
      marginTop:-2,
    },
    forgotsection:{
      marginHorizontal:16,
      textAlign:"right",
      fontSize:16,
      marginTop:-20,
    },
    signupRedirect:{
      flexDirection:"row",
      marginHorizontal:16,
      justifyContent:"center",
      marginBottom:20,
      marginTop:20
    }
  })
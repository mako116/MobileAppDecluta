import { Feather, Ionicons, MaterialCommunityIcons } from '@expo/vector-icons';
import { router } from 'expo-router';
import React, { useState } from 'react';
import {
  View,
  Text,
  ScrollView,
  SafeAreaView,
  TextInput,
  TouchableOpacity,
  Alert,
  Image,
  ActivityIndicator,
} from 'react-native';
import { Creating } from '@/styles/createPassword/CreatePassword'; // Ensure this path is correct
 

export default function ResetPassword(): JSX.Element {
  const [buttonSpinner, setButtonSpinner] = useState(false);

  const [password, setPassword] = useState('');
  const [confirmPassword, setConfirmPassword] = useState('');
  
  const [showPassword, setShowPassword] = useState(false);
  const [showConfirmPassword, setShowConfirmPassword] = useState(false);
   
  const handlePasswordChange = (text: string) => {
    setPassword(text);
    
  };

  const handleCreateAccount = () => {
    
    router.push('/(routes)/login');
  };
 
  const handleHelp = () =>{
    router.push("/(routes)/need-help")
  }
  return (
    <SafeAreaView>
      <ScrollView scrollEventThrottle={16}>
        <View style={Creating.signs}>
          <Image
            source={require('@/assets/images/Lat.png')}
            style={{
              justifyContent: 'center',
              margin: 'auto',
            }}
          />
        </View>
        <View style={Creating.section}>
          <Text
            style={{
              color: '#212121',
              fontWeight: '700',
              fontSize: 23,
              lineHeight: 32.2,
            }}
          >
            Create Password
          </Text>
        </View>

        <View style={Creating.container}>
          <Text style={{ marginVertical: 5 ,marginLeft:2}}>Enter Password</Text>
          <View
            style={[
              Creating.passwordContainer,
              password ? Creating.focusBorder : undefined, // Avoid using an empty string
            ]}
          >
            <TextInput
              style={Creating.input}
              secureTextEntry={!showPassword}
              value={password}
              onChangeText={handlePasswordChange}
              placeholder="Enter password"
            />
            <TouchableOpacity onPress={() => setShowPassword(!showPassword)}>
              <Feather
                name={showPassword ? 'eye' : 'eye-off'}
                size={20}
                color="gray"
              />
            </TouchableOpacity>
          </View>

          <Text style={{ marginTop: 15 ,marginLeft:2}}>Confirm Password</Text>
          <View
            style={[
              Creating.passwordContainer,
              confirmPassword ? Creating.focusBorder : undefined, // Avoid using an empty string
            ]}
          >
            <TextInput
              style={Creating.input}
              secureTextEntry={!showConfirmPassword}
              value={confirmPassword}
              onChangeText={setConfirmPassword}
              placeholder="Confirm password"
            />
            <TouchableOpacity
              onPress={() => setShowConfirmPassword(!showConfirmPassword)}
            >
              <Feather
                name={showConfirmPassword ? 'eye' : 'eye-off'}
                size={20}
                color="gray"
              />
            </TouchableOpacity>
          </View>

          <Text
            style={{
              marginTop: 10,
              fontSize: 14,
              fontWeight: '700',
              lineHeight: 19.6,
              color: '#212121',
            }}
          >
            PASSWORD REQUIREMENTS
          </Text>
           
          <View>
          <TouchableOpacity
  style={[
    Creating.createAccountButton,
    (buttonSpinner) && Creating.disabledButton,
  ]}
  onPress={() => {
    setButtonSpinner(true); // Start spinner
    setTimeout(() => {
      try {
        handleCreateAccount(); // Attempt to create the account after delay
      } catch (error) {
      } finally {
        setButtonSpinner(false); // Stop spinner after 2 seconds
      }
    }, 1000); // 2-second delay
  }}
  disabled={ buttonSpinner} // Disable when processing
>
  {buttonSpinner ? (
    <ActivityIndicator size="small" color="#000" />
  ) : (
    <Text
      style={[
        Creating.buttonText,
        (buttonSpinner) && Creating.disabledButton,{fontWeight:"400"}
      ]}
    >
      Confirm
    </Text>
  )}
</TouchableOpacity>
          </View>
          <View style={{flexDirection:"row", justifyContent: "center",marginTop:"80%"}}>
          <MaterialCommunityIcons name="message-question" size={24} color="#DEBC8E" />
          <Text>Need help?</Text>
          <TouchableOpacity onPress={handleHelp}>
            <Text style={{color:"#DEBC8E"}}> Click Here</Text>
          </TouchableOpacity>
        </View>
          
        </View>
      </ScrollView>
    </SafeAreaView>
  );
}



import { Feather, MaterialCommunityIcons, AntDesign } from '@expo/vector-icons';
import { router } from 'expo-router';
import React, { useState } from 'react';
import {
  View,
  Text,
  ScrollView,
  SafeAreaView,
  TextInput,
  TouchableOpacity,
  Image,
  ActivityIndicator,
} from 'react-native';
import { NotificationBanner } from '../../../../NotifyAlert/NotificationsALert'; 
// Ensure the correct path
import { Creating } from '@/styles/createPassword/CreatePassword'; 

export default function ResetPassword(): JSX.Element {
  const [buttonSpinner, setButtonSpinner] = useState(false);
  const [password, setPassword] = useState('');
  const [confirmPassword, setConfirmPassword] = useState('');
  const [showPassword, setShowPassword] = useState(false);
  const [showConfirmPassword, setShowConfirmPassword] = useState(false);
  const [notificationVisible, setNotificationVisible] = useState(false);

  const handlePasswordChange = (text: string) => {
    setPassword(text);
  };

  const handleCreateAccount = () => {
    setButtonSpinner(true); // Start spinner

    setTimeout(() => {
      setButtonSpinner(false); // Stop spinner after 1 second

      // Show notification
      setNotificationVisible(true);

      // Navigate to login after 3 seconds
      setTimeout(() => {
        router.push('/(routes)/login');
      }, 3000);
    }, 1000); // Delay for spinner
  };

  const handleHelp = () => {
    router.push('/(routes)/need-help');
  };

  return (
    <SafeAreaView>
      <ScrollView scrollEventThrottle={16}>
        {/* Notification Banner */}


        
        <NotificationBanner
  message="Password reset successfully"
  visible={notificationVisible}
  onDismiss={() => setNotificationVisible(false)}
/>

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
            Reset Password
          </Text>
        </View>

        <View style={Creating.container}>
          <Text style={{ marginVertical: 5, marginLeft: 2 }}>Enter Password</Text>
          <View
            style={[
              Creating.passwordContainer,
              password ? Creating.focusBorder : undefined,
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

          <Text style={{ marginTop: 15, marginLeft: 2 }}>Confirm Password</Text>
          <View
            style={[
              Creating.passwordContainer,
              confirmPassword ? Creating.focusBorder : undefined,
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

          
 
          <View>
            <TouchableOpacity
              style={[
                Creating.createAccountButton,
                buttonSpinner && Creating.disabledButton,
              ]}
              onPress={handleCreateAccount}
              disabled={buttonSpinner} // Disable button while processing
            >
              {buttonSpinner ? (
                <ActivityIndicator size="small" color="#000" />
              ) : (
                <Text
                  style={[
                    Creating.buttonText,
                    buttonSpinner && Creating.disabledButton,
                    { fontWeight: '400' },
                  ]}
                >
                  Confirm
                </Text>
              )}
            </TouchableOpacity>
          </View>
          <View style={{ flexDirection: 'row', justifyContent: 'center', marginTop: '80%' }}>
            <MaterialCommunityIcons name="message-question" size={24} color="#DEBC8E" />
            <Text>Need help?</Text>
            <TouchableOpacity onPress={handleHelp}>
              <Text style={{ color: '#DEBC8E' }}> Click Here</Text>
            </TouchableOpacity>
          </View>
        </View>
      </ScrollView>
    </SafeAreaView>
  );
}

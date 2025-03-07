import { Feather, MaterialCommunityIcons, AntDesign, Entypo } from '@expo/vector-icons';
import { router } from 'expo-router';
import React, { useState } from 'react';
import {
  View,
  Text,
  ScrollView,
  TextInput,
  TouchableOpacity,
  Image,
  ActivityIndicator,
} from 'react-native';
import { NotificationBanner } from '../../../../NotifyAlert/NotificationsALert'; 
// Ensure the correct path
import { Creating } from '@/styles/createPassword/CreatePassword'; 
import { SafeAreaView } from 'react-native-safe-area-context';
import TextInputField from '@/UI/InputFields/TextInputField';

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

  const handleGoBack = () => {
    router.back();
  };
  const handleHelp = () => {
    router.push('/(routes)/need-help');
  };

  return (
    <SafeAreaView edges={['bottom']} style = {{ flex: 1, backgroundColor: "#F9F9F9" }} >

      <View style={[ Creating.rowJustified, { backgroundColor: "#fff" }]}>
        <TouchableOpacity onPress={handleGoBack}>
          <Image source={require("../../../../assets/images/leftArrow.png")} style={{ height: 20, width: 30 }} />
        </TouchableOpacity>

        <View style= { Creating.row } >
          <View style = {[ Creating.row, Creating.passedStageIcon ]} >
            <Entypo name="check" size={8} color="white" />
          </View>
          <View style = { Creating.divider } ></View>
          <View style = {[ Creating.row, Creating.currentStageIcon ]} >
            <Entypo name="check" size={8} color="white" />
          </View>
        </View>

        {/* leave empty */}
        <View style={{ marginLeft: 30 }} >
        </View>

      </View>

      <ScrollView>
        
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
          <TextInputField
            placeholder="Enter new password"
            value={password}
            onChangeText={setPassword}
            keyboardType="default"
            maxLength={11}
            secureTextEntry={true}
            icon={<AntDesign name="lock" size={20} color="gray" />}
          />

          <Text style={{ marginTop: 15, marginLeft: 2 }}>Confirm Password</Text>
          <TextInputField
            placeholder="Confirm new Password"
            value={confirmPassword}
            onChangeText={setConfirmPassword}
            keyboardType="default"
            maxLength={11}
            secureTextEntry={true}
            icon={<AntDesign name="lock" size={20} color="gray" />}
          />

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
        </View>
      </ScrollView>
     
      <View style={{ flexDirection: 'row', justifyContent: 'center', marginTop: '80%' }}>
        <MaterialCommunityIcons name="message-question" size={24} color="#DEBC8E" />
        <Text>Need help?</Text>
        <TouchableOpacity onPress={handleHelp}>
          <Text style={{ color: '#DEBC8E' }}> Click Here</Text>
        </TouchableOpacity>
      </View>
      
      {/* Notification Banner */}
      <NotificationBanner
        message="Password reset successfully"
        visible={notificationVisible}
        onDismiss={() => setNotificationVisible(false)}
      />
    </SafeAreaView>
  );
}

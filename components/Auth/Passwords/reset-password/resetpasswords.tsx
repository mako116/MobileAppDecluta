import { MaterialCommunityIcons, AntDesign, Entypo } from '@expo/vector-icons';
import { router } from 'expo-router';
import React, { useState, useEffect } from 'react';
import {
  View,
  Text,
  ScrollView,
  TouchableOpacity,
  Image,
  ActivityIndicator,
} from 'react-native';
import { NotificationBanner } from '../../../../NotifyAlert/NotificationsALert';
import { Creating } from '@/styles/createPassword/CreatePassword'; 
import { SafeAreaView } from 'react-native-safe-area-context';
import TextInputField from '@/UI/InputFields/TextInputField';
import { useDispatch, useSelector } from 'react-redux';
import { resetPassword } from '@/redux/Redux/slice/authSlice';
import { AppDispatch, RootState } from '@/redux/store';
import AsyncStorage from '@react-native-async-storage/async-storage';

export default function ResetPassword(): JSX.Element {
  const [buttonSpinner, setButtonSpinner] = useState(false);
  const [password, setPassword] = useState('');
  const [confirmPassword, setConfirmPassword] = useState('');
  const [error, setError] = useState('');
  const [notificationVisible, setNotificationVisible] = useState(false);
  const [userEmail, setUserEmail] = useState<string | null>(null);
  
  const dispatch = useDispatch<AppDispatch>();
  const { email } = useSelector((state: RootState) => state.auth);

  useEffect(() => {
    const getEmailFromStorage = async () => {
      if (email) {
        setUserEmail(email);
      } else {
        try {
          const storedEmail = await AsyncStorage.getItem('userEmail');
          if (storedEmail) {
            setUserEmail(storedEmail);
          }
        } catch (err) {
          console.error('Failed to retrieve email from storage:', err);
        }
      }
    };
    
    getEmailFromStorage();
  }, [email]);

  const handleSubmit = async () => {
    // Password validation
    if (!password) {
      setError('Password is required');
      return;
    }

    if (password.length < 8) {
      setError('Password must be at least 8 characters long');
      return;
    }

    if (password !== confirmPassword) {
      setError('Passwords do not match');
      return;
    }

    if (!userEmail && !email) {
      setError('Email not found. Please restart the password recovery process.');
      return;
    }

    setButtonSpinner(true);
    try {
      await dispatch(resetPassword({ 
        password, 
        confirmPassword 
      })).unwrap();
      // Navigation is handled in the resetPassword thunk
      setNotificationVisible(true);
    } catch (err) {
      setError(err as string || 'Failed to reset password');
    } finally {
      setButtonSpinner(false);
    }
  };

  const handleGoBack = () => {
    router.back();
  };
  
  const handleHelp = () => {
    router.push('/(routes)/need-help');
  };

  return (
    <SafeAreaView edges={['bottom']} style={{ flex: 1, backgroundColor: "#F9F9F9" }}>
      <View style={[Creating.rowJustified, { backgroundColor: "#fff" }]}>
        <TouchableOpacity onPress={handleGoBack}>
          <Image source={require("../../../../assets/images/leftArrow.png")} style={{ height: 20, width: 30 }} />
        </TouchableOpacity>

        <View style={Creating.row}>
          <View style={[Creating.row, Creating.passedStageIcon]}>
            <Entypo name="check" size={8} color="white" />
          </View>
          <View style={Creating.divider}></View>
          <View style={[Creating.row, Creating.passedStageIcon]}>
            <Entypo name="check" size={8} color="white" />
          </View>
          <View style={Creating.divider}></View>
          <View style={[Creating.row, Creating.currentStageIcon]}>
            <Entypo name="check" size={8} color="white" />
          </View>
        </View>

        {/* leave empty */}
        <View style={{ marginLeft: 30 }}></View>
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
          {userEmail && (
            <Text style={{ color: '#666', marginTop: 5 }}>
              Creating new password for {userEmail}
            </Text>
          )}
        </View>

        <View style={Creating.container}>
          <Text style={{ marginVertical: 5, marginLeft: 2 }}>Enter Password</Text>
          <TextInputField
            placeholder="Enter new password"
            value={password}
            onChangeText={(text) => {
              setPassword(text);
              setError('');
            }}
            keyboardType="default"
            maxLength={20}
            secureTextEntry={true}
            icon={<AntDesign name="lock" size={20} color="gray" />}
          />

          <Text style={{ marginTop: 15, marginLeft: 2 }}>Confirm Password</Text>
          <TextInputField
            placeholder="Confirm new Password"
            value={confirmPassword}
            onChangeText={(text) => {
              setConfirmPassword(text);
              setError('');
            }}
            keyboardType="default"
            maxLength={20}
            secureTextEntry={true}
            icon={<AntDesign name="lock" size={20} color="gray" />}
          />

          {error ? (
            <Text style={{ color: 'red', marginTop: 5 }}>{error}</Text>
          ) : null}

          <View>
            <TouchableOpacity
              style={[
                Creating.createAccountButton,
                buttonSpinner && Creating.disabledButton,
              ]}
              onPress={handleSubmit}
              disabled={buttonSpinner}
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
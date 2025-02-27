import React, { useRef, useState } from 'react';
import {
  StyleSheet,
  Text,
  TextInput,
  View,
  TouchableOpacity,
  ScrollView,
  ActivityIndicator,
  Alert,
} from 'react-native';
import KycSignup from '@/styles/Kyc/signup.styles';
import Eye from '@/assets/images/kyc/Eye';
import { useAuth } from '@/context/AuthContext';

const SetUpPin = () => {
  const { addTransactionPin } = useAuth();
  const [pin, setPin] = useState<string[]>(Array(4).fill(''));
  const [confirmPin, setConfirmPin] = useState<string[]>(Array(4).fill(''));

  const [isPinVisible, setIsPinVisible] = useState(false);
  const [isConfirmPinVisible, setIsConfirmPinVisible] = useState(false);

  const pinRefs = useRef<TextInput[]>([]);
  const confirmPinRefs = useRef<TextInput[]>([]);
  const [buttonSpinner, setButtonSpinner] = useState(false);

  
  const togglePinVisibility = () => setIsPinVisible(!isPinVisible);
  const toggleConfirmPinVisibility = () => setIsConfirmPinVisible(!isConfirmPinVisible);

  const handleVerify = async () => {
    try {
      setButtonSpinner(true);
      await addTransactionPin( pin.join(''), confirmPin.join('') )
      console.log( "pin details", pin.join(''), confirmPin.join('') )
    } catch (err) {
      Alert.alert('Set Pin Failed');
    } finally {
      setButtonSpinner(false);
    }
  };

  const handlePinChange = (
    text: string,
    index: number,
    type: 'pin' | 'confirmPin'
  ) => {
    const updatedPin = type === 'pin' ? [...pin] : [...confirmPin];
    updatedPin[index] = text;

    if (type === 'pin') setPin(updatedPin);
    else setConfirmPin(updatedPin);

    if (text && index < 3) {
      const refs = type === 'pin' ? pinRefs : confirmPinRefs;
      refs.current[index + 1]?.focus();
    }
  };

  const handleKeyPress = (
    e: any,
    index: number,
    type: 'pin' | 'confirmPin'
  ) => {
    if (e.nativeEvent.key === 'Backspace' && index > 0) {
      const refs = type === 'pin' ? pinRefs : confirmPinRefs;
      refs.current[index - 1]?.focus();
    }
  };

  const renderPinInputs = (pinType: 'pin' | 'confirmPin') => {
    const pinArray = pinType === 'pin' ? pin : confirmPin;
    const refs = pinType === 'pin' ? pinRefs : confirmPinRefs;
    const isVisible = pinType === 'pin' ? isPinVisible : isConfirmPinVisible;

    return Array.from({ length: 4 }, (_, index) => (
      <TextInput
        key={index}
        ref={(el) => {
          if (refs.current) refs.current[index] = el!;
        }}
        value={pinArray[index]}
        onChangeText={(text) => handlePinChange(text, index, pinType)}
        onKeyPress={(e) => handleKeyPress(e, index, pinType)}
        keyboardType="numeric"
        maxLength={1}
        secureTextEntry={!isVisible} // Hide or show text based on visibility state

        style={styles.otpBox}
      />
    ));
  };

  return (
    <View style={KycSignup.container}>
      <ScrollView>
        <View>
          <Text style={[KycSignup.resider, { fontSize: 23 }]}>Set Your Transaction PIN</Text>
          <Text style={KycSignup.texts}>
            Your transaction PIN is a special 4-digit code that allows you to log in and withdraw funds from your wallet on DecluttaKing.
          </Text>
          <View>
            <Text style={[KycSignup.label, { marginLeft: 5 }]}>Enter PIN</Text>
            <View style={styles.inputContainer}>
              {renderPinInputs('pin')}
              <TouchableOpacity onPress={togglePinVisibility}>
                <View style={styles.eyeIcon}>
                  {isPinVisible ? (
                    <Eye  />
                  ) : (
                    <Eye />
                  )}
                </View>
              </TouchableOpacity>
            </View>
          </View>

          <View>
            <Text style={[KycSignup.label, { marginLeft: 5 }]}>Confirm PIN</Text>
            <View style={styles.inputContainer}>
              {renderPinInputs('confirmPin')}
              <TouchableOpacity onPress={toggleConfirmPinVisibility}>
                <View style={styles.eyeIcon}>{isConfirmPinVisible ? <Eye /> : <Eye />}</View>
              </TouchableOpacity>
            </View>
          </View>
        </View>
      </ScrollView>

      <TouchableOpacity
        onPress={handleVerify}
        style={[KycSignup.button, { marginBottom: '10%' }]}
      >
        {buttonSpinner ? (
          <ActivityIndicator size="small" color="white" />
        ) : (
          <Text style={[KycSignup.buttonText]}>Create Transaction PIN</Text>
        )}
      </TouchableOpacity>
    </View>
  );
};

const styles = StyleSheet.create({
  inputContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    marginBottom: 15,
  },
  otpBox: {
    paddingVertical: 10,
    paddingHorizontal: 13,
    borderWidth: 1,
    borderColor: '#E9E9E9',
    textAlign: 'center',
    fontSize: 24,
    marginHorizontal: 5,
    borderRadius: 5,
    backgroundColor: '#fff',
  },
  eyeIcon: {
    width: 24,
    height: 24,
    marginLeft: 10,
  },
});

export default SetUpPin;

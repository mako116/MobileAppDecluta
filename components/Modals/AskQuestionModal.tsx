import { View, Text, Modal, StyleSheet, TouchableOpacity, TextInput, Alert } from 'react-native'
import Checkbox from 'expo-checkbox';
import React, { useState } from 'react'
import Kyc from '@/styles/Kyc/Kyc.styles';
import Close from '@/assets/images/kyc/close';
import TextInputField from '@/UI/InputFields/TextInputField';
import Button from '../Button/button';
import { useSelector } from 'react-redux';
import { RootState } from '@/redux/store';
import { router } from 'expo-router';
import { createProductQuestion } from '@/api/Product/Hooks/useProduct';
import { useAppDispatch } from '@/redux/Redux/hook/hook';


interface AskQuestionProps {
  isQuestion: boolean;
  toggleMod: () => void;
}

const AskQuestionModal: React.FC<AskQuestionProps> = ({ isQuestion, toggleMod }) => {
  const res = useSelector((state: RootState) => state.auth.userData);
  const [isChecked, setChecked] = useState(false);
  const [inputText, setInputText] = useState("");
  const [inputAdditionalText, setInputAdditionalText] = useState("");
  const [loading, setLoading] = useState(false);
  const dispatch = useAppDispatch();

  // Determine if button should be disabled
  const isButtonDisabled = inputText.trim().length === 0 || !isChecked;

  const handleQuestionPublish = async () => {
    const user = res;
    console.log('user', user?._id);
    try {
      setLoading(true);
      
      const productData = {
        productId: '680c8be14fdf4c53ab74bd6e',
        createdBy: user?._id || '',
        question: inputText.trim(),
      };
      
      const resultAction = await dispatch(createProductQuestion(productData));
      
      if (createProductQuestion.fulfilled.match(resultAction)) {
        Alert.alert('Success', 'Your question has been submitted!');
        setInputText('');
        setInputAdditionalText('');
        setChecked(false);
        toggleMod();
      } else {
        Alert.alert('Error', resultAction.payload as string || 'Failed to submit your question. Please try again.');
      }
    } catch (error) {
      Alert.alert('Error', 'An unexpected error occurred. Please try again.');
      console.error('Publish error:', error);
    } finally {
      setLoading(false);
    }
  };
  

  return (
    <Modal
      visible={isQuestion}
      animationType="slide"
      transparent={true}
      onRequestClose={toggleMod}
    >
      <View style={Kyc.modalContainer}>
        <View style={Kyc.modalContent}>
          <View style={Kyc.header} >
            <Text style={Kyc.label}>Ask a question</Text>
            <TouchableOpacity onPress={toggleMod}>
              <Close />
            </TouchableOpacity>
          </View>

          <View style={{ marginBottom: 30 }} >
            <Text style={{ color: "#212121", fontFamily: " Proxima Nova ", fontSize: 14, paddingBottom: 5 }} >
              Question
              <Text style={{ color: "#A4A4A4", fontFamily: " Helvetica Neue ", fontSize: 14 }}>(required)</Text>
            </Text>
            <TextInputField
              multiline
              height={80}
              maxLength={115}
              value={inputText}
              onChangeText={setInputText}
            />
            <View style={{ flexDirection: "row", alignItems: "center", justifyContent: "flex-end" }}>
              <Text style={{ color: "#A4A4A4", fontFamily: " Helvetica Neue ", fontSize: 14 }}>
                {inputText.length}/115
              </Text>
            </View>
          </View>

          <View>
            <Text style={{ color: "#212121", fontFamily: " Proxima Nova ", fontSize: 14, paddingBottom: 5 }} >
              Add additional details
              <Text style={{ color: "#A4A4A4", fontFamily: " Helvetica Neue ", fontSize: 14 }}>(optional)</Text>
            </Text>
            <TextInputField
              multiline
              height={122}
              maxLength={850}
              value={inputAdditionalText}
              onChangeText={setInputAdditionalText}
            />
            <View style={{ flexDirection: "row", alignItems: "center", justifyContent: "flex-end" }}>
              <Text style={{ color: "#A4A4A4", fontFamily: " Helvetica Neue ", fontSize: 14 }}>
                {inputAdditionalText.length}/850
              </Text>
            </View>
          </View>

          <View style={styles.row}>
            <Checkbox 
              style={styles.checkbox} 
              value={isChecked} 
              onValueChange={setChecked}
              color={"#DEBC8E"}
            />
            <Text style={{ color: "#212121", fontFamily: " Proxima ", fontSize: 13, marginRight: 2  }}>
              By submitting, I agree to DecluttaKing's
            </Text>
            <Text style={{ color: "#212121", fontFamily: " Helvetica ", fontSize: 12, textDecorationLine: 'underline' }}>
              Community Guidelines.
            </Text>
          </View>

          <Button
            title="Submit Question"
            backgroundColor="#DEBC8E"
            borderWidth={0}
            onPress={handleQuestionPublish}
            disabled={isButtonDisabled || loading} // Pass disabled prop
          />
        </View>
      </View>
    </Modal>
  )
}


export default AskQuestionModal

const styles = StyleSheet.create({
  row: {
    flexDirection: 'row',
    alignItems: "center",
    marginVertical: 20
  },
  checkbox: {
    borderRadius: 5,
    color: 'black',
    borderWidth: 1,
    marginRight: 5,
  },
});
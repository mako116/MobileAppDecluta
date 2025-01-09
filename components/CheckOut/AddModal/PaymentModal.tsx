// import React, { useState } from 'react';
// import {
//   Modal,
//   View,
//   Text,
//   StyleSheet,
//   TouchableOpacity,
//   ScrollView,
//   TextInput,
// } from 'react-native';
// import Close from '@/assets/images/kyc/close';
// import { SignUpStyles } from '@/styles/Signup/signup.style';
// import YourCart from '@/styles/Cart/YourCart.styles';

// interface AddModalProps {
//     modalProceed: boolean;
//   toggleModal: () => void;
// }

// const modalOptions = [
//   {
//     title: "Add Money",
//     clos: <Close />,
//   },
// ];

// const Paymentmodal: React.FC<AddModalProps> = ({ modalProceed, toggleModal }) => {
//   const [amount, setAmount] = useState('');
 

//   const formatPrice = (price: string): string => {
//     // Remove any non-numeric characters except the period
//     const numericValue = price.replace(/[^0-9]/g, '');

//     if (!numericValue) return ''; // Return empty if no valid number is present

//     const parsedValue = parseInt(numericValue, 0);
//     if (isNaN(parsedValue)) return '';

//     return `₦ ${parsedValue.toLocaleString('en-NG')}`;
//   };

//   const handleChange = (text: string) => {
//     const formatted = formatPrice(text);
//     setAmount(formatted);
//   };

//   return (
//     <Modal
//       animationType="slide"
//       transparent={true}
//       visible={modalProceed}
//       onRequestClose={toggleModal}
//     >
//       <View style={styles.modalOverlay}>
//         <View style={styles.modalContainer}>
//           <ScrollView
//             showsVerticalScrollIndicator={false}
//             contentContainerStyle={styles.scrollViewContent}
//           >
//             {/* Modal Header */}
//             <View style={styles.header}>
//               <Text style={styles.headerText}>{modalOptions[0].title}</Text>
//               <TouchableOpacity onPress={toggleModal} style={styles.closeButton}>
//                 {modalOptions[0].clos}
//               </TouchableOpacity>
//             </View>

//             {/* Amount Input */}
//             <Text style={styles.label}>Amount</Text>
//             <View style={[SignUpStyles.row, SignUpStyles.inputContainerStyles]}>
//               <TextInput
//                 style={[
//                   SignUpStyles.inputs,
                   
//                 ]}
//                 keyboardType="phone-pad"
//                 placeholder="Enter amount"
//                 placeholderTextColor="gray"
//                 value={amount}
//                 onChangeText={handleChange} // Wire the input handler here
//               />
//             </View>
//             <Text style={styles.description}>
//               Add <Text style={{fontSize:14}}>₦175,000.00</Text> to your wallet to cover your order total.
//             </Text>

//             <TouchableOpacity
//           style={YourCart.bottomButton}
//         //   onPress={ProceedAdd}
//           // disabled={cart.length === 0}
//         >
//            <Text style={YourCart.buttonText}>Continue</Text>
//         </TouchableOpacity>
//           </ScrollView>
//         </View>
//       </View>
        
       
//     </Modal>
//   );
// };

// const styles = StyleSheet.create({
//   modalOverlay: {
//     flex: 1,
//     backgroundColor: 'rgba(0, 0, 0, 0.6)',
//     justifyContent: 'flex-end',
//   },
//   modalContainer: {
//     backgroundColor: 'white',
//     borderTopLeftRadius: 16,
//     borderTopRightRadius: 16,
//     paddingHorizontal: 15,
//     paddingVertical: 15,
//     maxHeight: '90%',
//   },
//   header: {
//     flexDirection: 'row',
//     justifyContent: 'space-between',
//     alignItems: 'center',
//     marginBottom: 10,
//     paddingHorizontal: 40,
//   },
//   headerText: {
//     fontSize: 19,
//     fontWeight: '700',
//     color: '#212121',
//     margin:"auto",
//     marginTop: 13,
//     fontFamily:"Helvetica Neue",
//     paddingBottom:14,
//     lineHeight:26.6
//   },
//   closeButton: {
//     position: 'absolute',
//     top: 0,
//     right: 0,
//   },
//   scrollViewContent: {
//     paddingBottom: 20,
//   },
//   label: {
//     fontSize: 14,
//     fontWeight: '700',
//     marginBottom: 5,
//     fontFamily:"Helvetica Neue",
//     color: '#212121',
//     // paddingBottom:14,
//     lineHeight:19.6
//   },
//   description: {
//     fontSize: 12,
//     color: '#A4A4A4',
//     lineHeight: 16.8,
//     marginVertical: 10,
//     fontFamily:"Proxima Nova"
//   },
// });

// export default Paymentmodal;

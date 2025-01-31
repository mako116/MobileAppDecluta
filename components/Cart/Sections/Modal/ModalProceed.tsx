import React from 'react';
import {
  Modal,
  View,
  Text,
  StyleSheet,
  TouchableOpacity,
  ScrollView,
} from 'react-native';
import Close from '@/assets/images/kyc/close';
import YourCart from '@/styles/Cart/YourCart.styles';

interface MoreModalProps {
  modalProceed: boolean;
  toggleModal: () => void;
}

const modalOptions = [
  {
    title: "FAQs About DecluttaKing’s Escrow Process",
    clos: <Close />,
  },
  {
    label: "1. What is an escrow service?",
    description:
      "An escrow service is a secure payment method where funds are held by a trusted third party (DecluttaKing) until both the buyer and seller have fulfilled their respective obligations. This ensures that the buyer receives the item as described and the seller receives their payment.",
  },
  {
    label: "3. Why should I use escrow for my transactions?",
    description:
      "Using escrow provides an additional layer of security for both buyers and sellers. Buyers are assured that their payment won't be released until they receive the item in the expected condition, while sellers are protected from potential non-payment issues.",
  },
  {
    label: "4. How long are funds held in escrow?",
    description:
      "Funds are typically held in escrow for up to 48 hours after the buyer and seller agree on a pickup arrangement. During this time, the buyer should inspect the item and either release the funds to the seller or raise a dispute if there are any issues.",
  },
  {
    label: "5. What happens if I forget to release the funds?",
    description:
      "If the transaction is not completed within 48 hours of meeting the seller and picking up the item, the order will be automatically canceled. This encourages timely completion of transactions.",
  },
  {
    label: "6. Can I cancel a transaction while the funds are in escrow?",
    description:
      "Yes, you can cancel a transaction while the funds are in escrow if there are legitimate reasons such as receiving a damaged or incorrect item. You will need to initiate a dispute through the DecluttaKing platform, and our support team will assist in resolving the issue.",
  },
  {
    label: "7. What should I do if there is a problem with the item I received?",
    description:
      "If there is an issue with the item you received, you should not release the funds. Instead, you should open a dispute within the DecluttaKing app and provide details about the problem. Our support team will work with both parties to resolve the issue.",
  },
  {
    label: "8. How do I open a dispute?",
    description:
      "To open a dispute, go to the transaction details screen for the item in question and click on the “Open Dispute” button. You will be prompted to provide details about the issue, and our support team will get in touch with you to assist with the resolution.",
  },
  {
    label: "9. Can the seller also open a dispute?",
    description:
      "Yes, sellers can open a dispute if there are issues from their side, such as the buyer not picking up the item or claiming a problem that doesn’t exist. The process is similar to the buyer's, and both parties will be able to present their case to our support team.",
  },
  {
    label: "10. Is there a fee for using the escrow service?",
    description:
      "DecluttaKing charges a small fee for the escrow service, which is included in the transaction costs. This fee helps cover the costs of securely managing the escrow process and providing support for disputes.",
  },
  {
    label: "11. How will I know when to release the funds?",
    description:
      "After picking up the item, you should inspect it to ensure it meets the description provided by the seller. If everything is satisfactory, you can go to the transaction details screen and click on the “Release Funds” button. You will also receive a reminder notification to release the funds.",
  },
  {
    label: "12. What happens if the buyer doesn't pick up the item?",
    description:
      "If the buyer fails to pick up the item within the agreed time frame, the seller should try to contact the buyer via in-app chat, audio, or video call to reschedule the pickup. If the buyer still does not pick up the item or if there are other issues, the seller can open a dispute. The funds will remain in escrow until the issue is resolved. If the transaction is not completed within 48 hours, the order will be automatically canceled.",
  },
  {
    label: "13. How secure is the escrow service?",
    description:
      "Our escrow service is highly secure, with funds held in a separate, protected account until the transaction is complete. All transactions are encrypted, and we have robust measures in place to prevent fraud and unauthorized access.",
  },
  {
    label: "14. Will I receive a notification when the funds are released?",
    description:
      "Yes, you will receive a notification both when you release the funds manually and when the system automatically releases them after 48 hours.",
  },
  {
    label: "15. Can I change the release time from 48 hours to a different period?",
    description:
      "Currently, the default release time is set to 48 hours to ensure prompt completion of transactions. However, if you need more time due to exceptional circumstances, please contact our support team for assistance.",
  },
];

const ModalProceed: React.FC<MoreModalProps> = ({ modalProceed, toggleModal }) => {
  return (
    <Modal
      animationType="slide"
      transparent={true}
      visible={modalProceed}
      onRequestClose={toggleModal}
    >
      <View style={styles.modalOverlay} >
        <View style={styles.modalContainer}>
        <ScrollView 
        showsVerticalScrollIndicator={false}
        contentContainerStyle={styles.scrollViewContent}>

          {/* Modal Header */}
          <View style={styles.header}>
            <Text style={styles.headerText}>{modalOptions[0].title}</Text>
            <TouchableOpacity onPress={toggleModal} style={styles.closeButton}>
              {modalOptions[0].clos}
            </TouchableOpacity>
          </View>

          {/* Modal Content */}
            {modalOptions.slice(1).map((option, index) => (
              <View key={index} style={styles.optionContainer}>
                <Text style={YourCart.title}>{option.label}</Text>
                <Text style={YourCart.bonusText}>{option.description}</Text>
              </View>
            ))}
          </ScrollView>
        </View>
      </View>
    </Modal>
  );
};

const styles = StyleSheet.create({
  modalOverlay: {
    flex: 1,
    backgroundColor: 'rgba(0, 0, 0, 0.6)',
    justifyContent: 'flex-end',
  },
  modalContainer: {
    backgroundColor: 'white',
    borderTopLeftRadius: 16,
    borderTopRightRadius: 16,
    paddingHorizontal: 15,
    paddingVertical: 15,
    maxHeight: '90%',
  },
  header: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    marginBottom: 10,
    paddingHorizontal:40
  },
  headerText: {
    fontSize: 18,
    fontWeight: '700',
    color: '#212121',
    textAlign: 'center',
     marginTop:13,
    margin:"auto"
  },
  closeButton: {
    position: 'absolute',
    top: 0,
    right: 0,
  },
  scrollViewContent: {
    paddingBottom: 20,
  },
  optionContainer: {
    marginBottom: 15,
    // paddingVertical: 10,
  
  },
  optionLabel: {
    fontSize: 16,
    fontWeight: '600',
    color: '#212121',
    marginBottom: 5,
  },
  optionDescription: {
    fontSize: 14,
    color: '#606060',
    lineHeight: 20,
  },
});

export default ModalProceed;

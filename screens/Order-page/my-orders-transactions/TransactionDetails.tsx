import React from 'react';
import {
  View,
  Text,
  StyleSheet,
  ScrollView,
  Image,
  TouchableOpacity,
  SafeAreaView,
} from 'react-native';
import { useCart } from '@/context/CartContext';
import YourCart from '@/styles/Cart/YourCart.styles';
import HeaderWithDesc from '@/UI/Header/HeaderWithDescription';
import { router } from 'expo-router';
import RightArrow from '@/assets/images/kyc/rightarrow';
import SummaryText from '@/UI/TextBetweenwithIcon/TextBetweenwithIcon';

// Sample order data (replace with actual API or context data)
const ORDER = {
   price: 75000,
   Type: 'item purchase',
  orderId: '12345-1djdhsjs',
  amount: '20000',
  pickupDeadline: 'Jun 31st 2024',
  WalletBallance: 'Wallet Ballance',
  imageStatus: 'Completed', // could be: 'loading' | 'Completed' | 'cancelled' | 'error'
};

const STATUS_ICONS: Record<string, any> = {
  loading: require('@/assets/images/New folder/more-circle.png'),
  Completed: require('@/assets/images/New folder/green.png'),
  cancelled: require('@/assets/images/New folder/bad.png'),
  error: require('@/assets/images/New folder/failed.png'),
};

const TransactionDetails = () => {
  const { cart } = useCart();

  const totalAmount = cart.reduce(
    (sum, item) => sum + item.price * item.count,
    0
  );

  const formatPrice = (amount: number): string => {
    return `₦ ${amount.toLocaleString('en-NG')}`;
  };

  const handleGoToCheckout = () => {
    router.push('/(routes)/checkout');
  };

  const handleViewHistory = () => {
    router.push('/(routes)/order/order-transactions');
  };

  return (
    <SafeAreaView style={styles.safeArea}>
      <HeaderWithDesc title="Transaction Details" Receipt paddingTop={50} />
      <ScrollView contentContainerStyle={styles.scrollContent}>
        {/* Status and Item Display */}
        <View style={[YourCart.rowed, styles.statusRow]}>
          <Image
            source={STATUS_ICONS[ORDER.imageStatus] || STATUS_ICONS.error}
            style={styles.statusImage}
          />
          <View>
            <Text style={styles.itemName}>{ORDER.imageStatus}</Text>
            <Text style={styles.itemPrice}>-{formatPrice(ORDER.price)}</Text>
          </View>
        </View>

        {/* Order Summary */}
        <View style={[YourCart.main, styles.summaryContainer]}>
          <Text style={styles.sectionTitle}>Transaction Details</Text>
          <View style={styles.summaryBox}>
          <SummaryText
            label="Transaction ID"
              value={ORDER.orderId}
            icon={require('@/assets/images/New folder/document-copy.png')}/>

            {/* <SummaryRow label="Transaction ID" value={ORDER.orderId}  /> */}
            <SummaryRow label="Transaction Type" value={ORDER.Type} />
            <SummaryRow label="Transaction Amount" value={ORDER.amount} />
            <SummaryRow label="Fee" value={ORDER.amount} />
            <SummaryRow label="Payment Method" value={ORDER.WalletBallance} />
            <SummaryRow label="Transaction Date" value={ORDER.pickupDeadline} />

          </View>

          {/* Transaction History Link */}
          <TouchableOpacity style={styles.historyLink} onPress={handleViewHistory}>
            <Text style={styles.historyText}>View transaction history</Text>
            <RightArrow width={10} height={10} color="#212121" strokeWidth="2.5" />
          </TouchableOpacity>
        </View>
      </ScrollView>
    </SafeAreaView>
  );
};

// 🧩 Reusable Summary Row Component
const SummaryRow = ({ label, value }: { label: string; value: string }) => (
  <View style={styles.summaryRow}>
    <Text style={styles.label}>{label}</Text>
    <Text style={styles.value}>{value}</Text>
  </View>
);

// 🎨 Styles
const styles = StyleSheet.create({
  safeArea: {
    // flex: 1,
    // backgroundColor: '#fff',
  },
  scrollContent: {
    padding: 20,
    paddingBottom: 40,
  },
  statusRow: {
    gap: 10,
    alignItems: 'center',
    marginBottom: 20,
  },
  statusImage: {
    width: 64,
    height: 64,
  },
  itemName: {
    fontSize: 15,
    fontWeight: '500',
    color: '#212121',
  },
  itemPrice: {
    fontSize: 18,
    fontWeight: '700',
    color: '#212121',
  },
  summaryContainer: {
    paddingHorizontal: 0,
  },
  sectionTitle: {
    fontSize: 16,
    fontWeight: '600',
    marginBottom: 10,
    color: '#212121',
  },
  summaryBox: {
    backgroundColor: '#fff',
    borderRadius: 8,
    padding: 12,
  },
  summaryRow: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    marginVertical: 6,
  },
  label: {
    fontSize: 14,
    color: '#7E7E7E',
    fontWeight: '400',
  },
  value: {
    fontSize: 14,
    fontWeight: '500',
    color: '#212121',
  },
  historyLink: {
    flexDirection: 'row',
    gap: 5,
    alignItems: 'center',
    justifyContent: 'center',
    marginTop: 16,
    borderTopWidth: 1,
    borderColor: '#E9E9E9',
    paddingTop: 12,
  },
  historyText: {
    fontSize: 14,
    fontWeight: '500',
    color: '#212121',
  },
});

export default TransactionDetails;

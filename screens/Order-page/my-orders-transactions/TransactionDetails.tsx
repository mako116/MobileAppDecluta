import React, { useState } from 'react';
import {
  View,
  Text,
  ScrollView,
  Image,
  SafeAreaView,
} from 'react-native';
import { router } from 'expo-router';

// UI Components
import HeaderWithDesc from '@/UI/Header/HeaderWithDescription';
import SummaryText from '@/UI/TextBetweenwithIcon/TextBetweenwithIcon';

// Styles
import TransactionDetailsStyles from '@/styles/TransactionDetails/TransactionDetails.styles';
import YourCart from '@/styles/Cart/YourCart.styles';

// Sub Components
import TransactionOrderDetails from './subBoxes/orderDetails';
import TransactionOrderActions from './subBoxes/OtherActions';
import SubOrderDetails from './subBoxes/SubOrderDetails';
import SubOtherActions from './subBoxes/SubOtherActions';

// Constants & Types
type Notification = {
  id: string;
  orderId: string;
  title: string;
  description: string;
  image: any;
  statusLabel: string;
  location: string;
  billNumber: string;
};

const STATUS_ICONS: Record<string, any> = {
  pending: require('@/assets/images/New folder/more-circle.png'),
  Completed: require('@/assets/images/New folder/green.png'),
  cancelled: require('@/assets/images/New folder/bad.png'),
  error: require('@/assets/images/New folder/failed.png'),
};

const ORDER = {
  price: 75000,
  Type: 'Item Purchase',
  orderId: '12345-1djdhsjs',
  amount: '20000',
  pickupDeadline: 'Jun 31st 2024',
  WalletBallance: 'Wallet Balance',
  imageStatus: 'pending', //change this to any of these  pending | Completed | cancelled | error
};

const TransactionDetailsStylesDetails = () => {
//   const [notifications] = useState<Notification[]>([]);

  const formatPrice = (amount: number): string =>
    `₦ ${Number(amount).toLocaleString('en-NG')}`;

  const isSuccess = ORDER.imageStatus === 'Completed' || ORDER.imageStatus === 'pending';
  const isFailed = ORDER.imageStatus === 'cancelled' || ORDER.imageStatus === 'error';

  const renderStatusIcon = () => (
    <Image
      source={STATUS_ICONS[ORDER.imageStatus] || STATUS_ICONS.error}
      style={TransactionDetailsStyles.statusImage}
      resizeMode="contain"
    />
  );

  const renderSummarySection = () => (
    <View style={[TransactionDetailsStyles.summaryBox, { flexDirection: 'row', alignItems: 'center', gap: 7 }]}>
      <Image
        source={require('@/assets/images/New folder/info-circle.png')}
        style={[TransactionDetailsStyles.statusImage, { width: 19, height: 19 }]}
        resizeMode="contain"
      />
      <Text style={TransactionDetailsStyles.itemName}>
        Payment for <Text style={{ fontWeight: '700' }}>Order #{ORDER.orderId}</Text>
      </Text>
    </View>
  );

  return (
    <SafeAreaView style={TransactionDetailsStyles.safeArea}>
      <HeaderWithDesc title="Transaction Details" Receipt paddingTop={50} />
      <ScrollView contentContainerStyle={TransactionDetailsStyles.scrollContent}>

        {/* Status Display */}
        <View style={[YourCart.rowed, TransactionDetailsStyles.statusRow]}>
          {renderStatusIcon()}
          <View>
            <Text style={[TransactionDetailsStyles.itemName,
                 ORDER.imageStatus === 'cancelled' || ORDER.imageStatus === 'error'
                 ? { color: '#E42527' }
                 : null
            ]}>{ORDER.imageStatus}</Text>
            <Text style={TransactionDetailsStyles.itemPrice}>-{formatPrice(ORDER.price)}</Text>
          </View>
        </View>

        {/* Transaction Summary Section */}
        <View style={[YourCart.main, TransactionDetailsStyles.summaryContainer]}>
          {renderSummarySection()}

          <Text style={[TransactionDetailsStyles.itemPrice, { marginVertical: 8, fontSize: 14 }]}>
            Transaction Details
          </Text>

          <View style={TransactionDetailsStyles.summaryBox}>
            <SummaryText
              label="Transaction ID"
              value={ORDER.orderId}
              icon={require('@/assets/images/New folder/document-copy.png')}
            />
            <SummaryText label="Transaction Type" value={ORDER.Type} />
            <SummaryText label="Transaction Amount" value={formatPrice(Number(ORDER.amount))} />
            <SummaryText label="Fee" value="₦0" />
            <SummaryText label="Payment Method" value={ORDER.WalletBallance} />
            <SummaryText label="Transaction Date" value={ORDER.pickupDeadline} />
          </View>

          {/* Conditional Sections */}
          {isSuccess && (
            <>
              <TransactionOrderDetails />
              <TransactionOrderActions />
            </>
          )}

          {isFailed && (
            <>
              <SubOrderDetails />
              <SubOtherActions />
            </>
          )}
        </View>
      </ScrollView>
    </SafeAreaView>
  );
};

export default TransactionDetailsStylesDetails;

import React from 'react';
import { StyleSheet, View, Image } from 'react-native';
import { Ionicons, MaterialCommunityIcons, FontAwesome5 } from '@expo/vector-icons';

interface TransactionIconProps {
  transaction: {
    type: string;
    status: string;
    image?: string;
  };
}

const TransactionIcon: React.FC<TransactionIconProps> = ({ transaction }) => {
  const { type, status } = transaction;

  const getIconColor = () => {
    if (status === 'failed') return '#EF4444';
    switch (type) {
      case 'purchase': return '#9333EA'; // Purple
      case 'sale': return '#9333EA'; // Purple
      case 'topup': return '#10B981'; // Green
      case 'withdrawal': return '#EF4444'; // Red
      case 'cashback': return '#10B981'; // Green
      case 'referral': return '#F59E0B'; // Yellow
      case 'reward': return '#F59E0B'; // Yellow
      default: return '#6B7280'; // Gray
    }
  };

  if ((type === 'purchase' || type === 'sale') && transaction.image) {
    return (
      <View style={[styles.iconContainer, { backgroundColor: '#F3F4F6' }]}>
        <Image source={{ uri: transaction.image }} style={styles.itemImage} />
      </View>
    );
  }

  const renderIcon = () => {
    switch (type) {
      case 'topup':
        return <MaterialCommunityIcons name="wallet-plus" size={24} color={getIconColor()} />;
      case 'withdrawal':
        return <MaterialCommunityIcons name="wallet-outline" size={24} color={getIconColor()} />;
      case 'cashback':
        return <MaterialCommunityIcons name="cash-refund" size={24} color={getIconColor()} />;
      case 'referral':
        return <MaterialCommunityIcons name="account-multiple" size={24} color={getIconColor()} />;
      case 'reward':
        return <FontAwesome5 name="gift" size={20} color={getIconColor()} />;
      default:
        return <Ionicons name="receipt-outline" size={24} color={getIconColor()} />;
    }
  };

  return (
    <View style={styles.iconContainer}>
      {renderIcon()}
    </View>
  );
};

const styles = StyleSheet.create({
  iconContainer: {
    width: 48,
    height: 48,
    borderRadius: 8,
    alignItems: 'center',
    justifyContent: 'center',
    marginRight: 12,
  },
  itemImage: {
    width: 40,
    height: 40,
    borderRadius: 6,
  },
});

export default TransactionIcon;
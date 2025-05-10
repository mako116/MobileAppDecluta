import React from 'react';
import { StyleSheet, View, Text, TouchableOpacity } from 'react-native';
import { Feather } from '@expo/vector-icons';
import TransactionIcon from './TransactionIcon';

interface TransactionCardProps {
  transaction: {
    id: string;
    title: string;
    subtitle: string;
    amount: string;
    isCredit: boolean;
    status: string;
    prevBalance: string;
    type: string;
  };
}

const TransactionCard: React.FC<TransactionCardProps> = ({ transaction }) => {
  return (
    <View>
      <TouchableOpacity style={styles.transactionItem}>
        <TransactionIcon transaction={transaction} />
        
        <View style={styles.transactionDetails}>
          <View>
            <Text style={styles.transactionTitle}>{transaction.title}</Text>
            <Text style={styles.transactionSubtitle}>{transaction.subtitle}</Text>
          </View>
          
          <View style={styles.transactionAmountContainer}>
            <Text style={[
              styles.transactionAmount, 
              transaction.isCredit ? styles.creditAmount : styles.debitAmount
            ]}>
              {transaction.isCredit ? '+ ' : '- '}{transaction.amount}
            </Text>
            <Text style={[
              styles.transactionStatus,
              transaction.status === 'success' ? styles.successStatus : 
              transaction.status === 'failed' ? styles.failedStatus : styles.pendingStatus
            ]}>
              {transaction.status.charAt(0).toUpperCase() + transaction.status.slice(1)}
            </Text>
          </View>
        </View>
      </TouchableOpacity>
      
      <TouchableOpacity style={styles.balanceContainer}>
        <View style={styles.balanceDetails}>
          <Text style={styles.balanceText}>Prev. Balance: {transaction.prevBalance}</Text>
          <Text style={styles.transactionType}>
            {transaction.type.charAt(0).toUpperCase() + transaction.type.slice(1)}
          </Text>
        </View>
        <Feather name="chevron-right" size={20} color="#6B7280" />
      </TouchableOpacity>
    </View>
  );
};

const styles = StyleSheet.create({
  transactionItem: {
    flexDirection: 'row',
    alignItems: 'center',
    paddingHorizontal: 16,
    paddingVertical: 12,
    backgroundColor: '#FFFFFF',
  },
  transactionDetails: {
    flex: 1,
    flexDirection: 'row',
    justifyContent: 'space-between',
  },
  transactionTitle: {
    fontSize: 16,
    fontWeight: '500',
    color: '#1F2937',
    marginBottom: 2,
  },
  transactionSubtitle: {
    fontSize: 14,
    color: '#6B7280',
  },
  transactionAmountContainer: {
    alignItems: 'flex-end',
  },
  transactionAmount: {
    fontSize: 16,
    fontWeight: '600',
    marginBottom: 2,
  },
  creditAmount: {
    color: '#10B981',
  },
  debitAmount: {
    color: '#EF4444',
  },
  transactionStatus: {
    fontSize: 12,
    fontWeight: '500',
  },
  successStatus: {
    color: '#10B981',
  },
  failedStatus: {
    color: '#EF4444',
  },
  pendingStatus: {
    color: '#F59E0B',
  },
  balanceContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    paddingHorizontal: 16,
    paddingVertical: 10,
    backgroundColor: '#F9FAFB',
    borderTopWidth: 1,
    borderTopColor: '#E5E7EB',
  },
  balanceDetails: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  balanceText: {
    fontSize: 14,
    color: '#6B7280',
  },
  transactionType: {
    fontSize: 14,
    color: '#6B7280',
    marginLeft: 8,
    paddingLeft: 8,
    borderLeftWidth: 1,
    borderLeftColor: '#D1D5DB',
  },
});

export default TransactionCard;
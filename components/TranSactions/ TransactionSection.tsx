import React from 'react';
import { StyleSheet, View, Text } from 'react-native';
import TransactionCard from './TransactionCard';

interface TransactionSectionProps {
  date: string;
  transactions: Array<{
    id: string;
    title: string;
    subtitle: string;
    amount: string;
    isCredit: boolean;
    status: string;
    prevBalance: string;
    type: string;
    image?: string;
  }>;
}

const TransactionSection: React.FC<TransactionSectionProps> = ({ date, transactions }) => (
  <View style={styles.sectionContainer}>
    <Text style={styles.sectionTitle}>{date}</Text>
    {transactions.map(transaction => (
      <TransactionCard key={transaction.id} transaction={transaction} />
    ))}
  </View>
);

const styles = StyleSheet.create({
  sectionContainer: {
    marginBottom: 16,
    borderWidth:1,
    
  },
  sectionTitle: {
    fontSize: 16,
    fontWeight: '600',
    color: '#1F2937',
    paddingHorizontal: 16,
    paddingVertical: 8,
    backgroundColor: '#F9FAFB',
  },
});

export default TransactionSection;
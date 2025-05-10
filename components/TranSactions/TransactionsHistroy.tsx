

import React, { useState } from 'react';
import { StyleSheet, SafeAreaView, StatusBar, FlatList, View, Text } from 'react-native';
import Header from './TransactionHeader';
import FilterTabs from './Tabs';
import TransactionSection from './ TransactionSection';


const TRANSACTIONS = [
  {
    id: '1',
    date: 'Today',
    type: 'purchase',
    title: 'Item Purchased',
    subtitle: 'You purchased Samsung...',
    amount: '₦75,000.00',
    isCredit: false,
    status: 'success',
    prevBalance: '₦75,000.00',
    image: "require('./assets/phone-image.png')",
  },
  {
    id: '2',
    date: 'Today',
    type: 'sale',
    title: 'Item Sold',
    subtitle: 'You sold Single Seater...',
    amount: '₦25,000.00',
    isCredit: true,
    status: 'success',
    prevBalance: '₦50,000.00',
    image: "require('./assets/phone-image.png')",
  },
  {
    id: '3',
    date: 'Yesterday',
    type: 'topup',
    title: 'Add Money',
    subtitle: 'Wallet Top-up via Bank Transfer',
    amount: '₦25,000.00',
    isCredit: true,
    status: 'success',
    prevBalance: '₦25,000.00',
  },
  {
    id: '4',
    date: 'Yesterday',
    type: 'withdrawal',
    title: 'Cash Withdrawal',
    subtitle: 'You withdrew cash from wallet',
    amount: '₦15,000.00',
    isCredit: false,
    status: 'failed',
    prevBalance: '₦40,000.00',
  },
  {
    id: '5',
    date: '25-06-2024',
    type: 'cashback',
    title: 'Cashback',
    subtitle: 'You received a cashback reward!',
    amount: '₦2,000.00',
    isCredit: true,
    status: 'pending',
    prevBalance: '₦38,000.00',
  },
  {
    id: '6',
    date: '24-06-2024',
    type: 'referral',
    title: 'Referral Bonus',
    subtitle: 'You earned a bonus for referring a friend',
    amount: '₦1,000.00',
    isCredit: true,
    status: 'pending',
    prevBalance: '₦37,000.00',
  },
  {
    id: '7',
    date: '23-06-2024',
    type: 'reward',
    title: 'Reward Point Converted',
    subtitle: 'You converted your reward points to cash',
    amount: '₦7,000.00',
    isCredit: true,
    status: 'success',
    prevBalance: '₦30,000.00',
  },
];

const EmptyState = () => (
  <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>
    <Text style={{ fontSize: 20, fontWeight: 'bold' }}>No transactions found</Text>
  </View>
);

const groupTransactionsByDate = (transactions, filterType = null) => {
  const filteredTransactions = filterType && filterType !== 'all' ? 
    transactions.filter(t => t.type === filterType) : 
    transactions;
  
  const groups = {};
  
  filteredTransactions.forEach(transaction => {
    if (!groups[transaction.date]) {
      groups[transaction.date] = [];
    }
    groups[transaction.date].push(transaction);
  });
  
  return Object.entries(groups).map(([date, transactions]) => ({
    date,
    data: transactions,
  }));
};

const countTransactionsByType = (transactions) => {
  const counts = { all: transactions.length };
  transactions.forEach(transaction => {
    if (!counts[transaction.type]) {
      counts[transaction.type] = 0;
    }
    counts[transaction.type]++;
  });
  return counts;
};

const TransactionHistorys = () => {
  const [activeFilter, setActiveFilter] = useState('all');
  const transactionCounts = countTransactionsByType(TRANSACTIONS);
  const groupedTransactions = groupTransactionsByDate(TRANSACTIONS, activeFilter);
  
  return (
    <SafeAreaView style={styles.container}>
      <StatusBar barStyle="dark-content" backgroundColor="#FFFFFF" />
      
      <Header />
      
      <FilterTabs 
        activeFilter={activeFilter} 
        setActiveFilter={setActiveFilter} 
        transactionCounts={transactionCounts} 
      />
      
      <FlatList
        data={groupedTransactions}
        renderItem={({ item }) => (
          <TransactionSection date={item.date} transactions={item.data} />
        )}
        keyExtractor={item => item.date}
        showsVerticalScrollIndicator={false}
        ListEmptyComponent={<EmptyState />}
      />
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#F9FAFB',
  },
});

export default TransactionHistorys;
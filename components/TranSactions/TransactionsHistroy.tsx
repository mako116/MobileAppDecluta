import React, { useState } from 'react';
import {
  StyleSheet,
  View,
  Text,
  ScrollView,
  TouchableOpacity,
  SafeAreaView,
  StatusBar,
  Image
} from 'react-native';
import { FontAwesome } from '@expo/vector-icons';


type TransactionType = 'Purchase' | 'Sale' | 'Top-up' | 'Withdrawal' | 'Cashback' | 'Reward';


interface Transaction {
  id: string;
  date: string;
  type: TransactionType;
  title: string;
  description: string;
  amount: number;
  isCredit: boolean;
  status: 'Success' | 'Failed' | 'Pending';
  prevBalance: number;
  imageUrl?: string; 
}

const TransactionHistory: React.FC = () => {
  const [selectedTab, setSelectedTab] = useState<string>('All');

  // Sample transaction data
  const transactions: Transaction[] = [
    {
      id: '1',
      date: 'Today',
      type: 'Purchase',
      title: 'Item Purchased',
      description: 'You purchased Samsung...',
      amount: 75000,
      isCredit: false,
      status: 'Success',
      prevBalance: 75000,
      imageUrl: 'https://i.pinimg.com/736x/43/68/7d/43687d75c48437abfaf573318fe6f5e1.jpg' 
    },
    {
      id: '2',
      date: 'Today',
      type: 'Sale',
      title: 'Item Sold',
      description: 'You sold your Single Seater...',
      amount: 25000,
      isCredit: true,
      status: 'Success',
      prevBalance: 50000,
      imageUrl: 'https://i.pinimg.com/736x/43/68/7d/43687d75c48437abfaf573318fe6f5e1.jpg' 
    },
    {
      id: '3',
      date: 'Yesterday',
      type: 'Top-up',
      title: 'Add Money',
      description: 'Wallet Top-up via Bank Transfer',
      amount: 25000,
      isCredit: true,
      status: 'Success',
      prevBalance: 25000
    },
    {
      id: '4',
      date: 'Yesterday',
      type: 'Withdrawal',
      title: 'Cash Withdrawal',
      description: 'You withdrew cash from wallet',
      amount: 15000,
      isCredit: false,
      status: 'Failed',
      prevBalance: 40000
    },
    {
      id: '5',
      date: '25-05-2024',
      type: 'Cashback',
      title: 'Cashback',
      description: 'You received a cashback reward',
      amount: 2000,
      isCredit: true,
      status: 'Success',
      prevBalance: 38000
    },
    {
      id: '6',
      date: '24-05-2024',
      type: 'Reward',
      title: 'Referral Bonus',
      description: 'You earned a bonus for referring a friend',
      amount: 10000,
      isCredit: true,
      status: 'Pending',
      prevBalance: 37000
    },
    {
      id: '7',
      date: '23-05-2024',
      type: 'Reward',
      title: 'Reward Point Converted',
      description: 'You converted your reward points to cash!',
      amount: 7000,
      isCredit: true,
      status: 'Success',
      prevBalance: 30000
    },
  ];


  const filteredTransactions = selectedTab === 'All'
    ? transactions
    : transactions.filter(transaction => transaction.type === selectedTab);

  // Group transactions by date
  const groupTransactionsByDate = () => {
    const grouped: { [key: string]: Transaction[] } = {};

    filteredTransactions.forEach(transaction => {
      const dateStr = transaction.date;

      if (!grouped[dateStr]) {
        grouped[dateStr] = [];
      }

      grouped[dateStr].push(transaction);
    });

    return grouped;
  };

  const renderTransactionIcon = (transaction: Transaction) => {
    // For Purchase and Sale, show image if available
    if ((transaction.type === 'Purchase' || transaction.type === 'Sale') && transaction.imageUrl) {
      return (
        <Image
          source={{ uri: transaction.imageUrl }}
          style={styles.transactionImage}
          resizeMode="cover"
        />
      );
    }


    const iconImageMap = {
      'Top-up': require('../../assets/images/transactions/add.png'),
      'Withdrawal': require('../../assets/images/transactions/withdraw.png'),
      'Cashback': require('../../assets/images/transactions/add.png'),
      'Reward': require('../../assets/images/transactions/reward.png'),
    };

    // Return the appropriate image for the transaction type
    return (
      <Image
        source={iconImageMap[transaction.type]}
        style={styles.transactionIconImage}
        resizeMode="contain"
      />
    );
  };

  const formatCurrency = (amount: number) => {
    return `₦${amount.toLocaleString()}.00`;
  };

 
  const renderTabs = () => {
    const tabs = ['All', 'Purchase', 'Sale', 'Top-up', 'Withdrawal'];

    return (
      <View style={styles.tabsWrapper}>
        <ScrollView
          horizontal
          showsHorizontalScrollIndicator={false}
          style={styles.tabContainer}
          contentContainerStyle={styles.tabContentContainer}
        >
          {tabs.map((tab, index) => {
            const count = tab === 'All'
              ? transactions.length
              : transactions.filter(transaction => transaction.type === tab).length;

            return (
              <TouchableOpacity
                key={index}
                style={[
                  styles.tab,
                  selectedTab === tab && styles.activeTab
                ]}
                onPress={() => setSelectedTab(tab)}
              >
                {count > 0 && (
                  <View style={styles.tabBadge}>
                    <Text style={styles.tabBadgeText}>{count}</Text>
                  </View>
                )}
                <Text style={[
                  styles.tabText,
                  selectedTab === tab && styles.activeTabText
                ]}>
                  {tab}
                </Text>
              </TouchableOpacity>
            );
          })}
        </ScrollView>
      </View>
    );
  };

  const getStatusColor = (status: string) => {
    switch (status) {
      case 'Success':
        return '#22c55e';
      case 'Failed':
        return '#ef4444';
      default:
        return '#f59e0b';
    }
  };


  const renderTransactions = () => {
    const groupedTransactions = groupTransactionsByDate();

    return Object.keys(groupedTransactions).map((dateStr, index) => (
      <View key={index} style={styles.dateSection}>
        <Text style={styles.dateHeader}>{dateStr}</Text>

        {groupedTransactions[dateStr].map((transaction, tIndex) => (
          <View key={tIndex} style={styles.transactionContainer}>
            <View style={styles.transactionCard}>
              <View style={styles.transactionCardHeader}>
                <View style={styles.transactionIconAndTitle}>
                  <View style={styles.iconContainer}>
                    {renderTransactionIcon(transaction)}
                  </View>

                  <View style={styles.titleDescContainer}>
                    <Text style={styles.transactionTitle}>{transaction.title}</Text>
                    <Text style={styles.transactionDescription}>{transaction.description}</Text>
                  </View>
                </View>

                <View style={styles.amountAndStatus}>
                  <Text style={[
                    styles.transactionAmount
                  ]}>
                    {transaction.isCredit ? '+' : '-'} {formatCurrency(transaction.amount)}
                  </Text>
                  <Text style={[
                    styles.transactionStatus,
                    { color: getStatusColor(transaction.status) }
                  ]}>
                    {transaction.status}
                  </Text>
                </View>
              </View>
            </View>

            <View style={styles.balanceRow}>
              <View style={{ flexDirection: 'row', alignItems: 'center' }}>

              <Text style={styles.balanceText}>Prev. Balance: {formatCurrency(transaction.prevBalance)}</Text>
              <View style={
                styles.typeIndicator
              }>
                <Text style={styles.typeText}>
                  {transaction.type}
                </Text>
              </View>
                </View>
              <View style={styles.detailsContainer}>

                <FontAwesome name="chevron-right" size={10} color="#333" style={styles.chevronIcon} />
              </View>
            </View>
          </View>
        ))}
      </View>
    ));
  };

  return (
    <SafeAreaView style={styles.container}>
      <StatusBar barStyle="dark-content" backgroundColor="#fff" />

      {renderTabs()}

      <ScrollView
        style={styles.scrollContainer}
        showsVerticalScrollIndicator={false}
      >
        {renderTransactions()}
      </ScrollView>
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#f5f5f5',
  },
  tabsWrapper: {
    paddingTop: 10,
  },
  tabContainer: {
    flexDirection: 'row',
  },
  tabContentContainer: {
    paddingHorizontal: 10,
    paddingBottom: 5,
  },
  scrollContainer: {
    flex: 1,
    padding: 10,
  },
  tab: {
    paddingHorizontal: 20,
    paddingVertical: 10,
    marginRight: 8,
    backgroundColor: '#fff',
    borderRadius: 4,
    alignItems: 'center',
    justifyContent: 'center',
    minWidth: 80,
    borderWidth: 1,
    borderColor: '#e0e0e0',
    position: 'relative',
  },
  activeTab: {
    backgroundColor: '#f0d6aa',
    borderColor: '#f0d6aa',
  },
  tabText: {
    fontSize: 14,
    fontFamily:"ProximaNovaR",
    color: '#333',
  },
  activeTabText: {
    color: '#333',
    fontWeight: '600',
  },
  tabBadge: {
    backgroundColor: '#ef4444',
    borderRadius: 10,
    width: 18,
    height: 18,
    alignItems: 'center',
    justifyContent: 'center',
    position: 'absolute',
    top: -8,
    right: -8,
    zIndex: 1,
  },
  tabBadgeText: {
    color: '#fff',
    fontSize: 10,
    fontFamily:"HelveticaNeueBold",
  },
  dateSection: {
    marginBottom: 10,
  },
  dateHeader: {
    paddingHorizontal: 5,
    paddingVertical: 10,
    fontFamily:"ProximaNovaR",
    color: '#333',
    fontSize: 16,
  },
  transactionContainer: {
    marginBottom: 10,
  },
  transactionCard: {
    backgroundColor: '#fff',
    paddingVertical: 15,
    paddingHorizontal: 15,
    borderTopLeftRadius: 8,
    borderTopRightRadius: 8,
    borderWidth: 1,
    borderColor: '#eaeaea',
    borderBottomWidth: 0,
  },
  transactionCardHeader: {
    flexDirection: 'row',
    justifyContent: 'space-between',
  },
  transactionIconAndTitle: {
    flexDirection: 'row',
    alignItems: 'center',
    flex: 1,
  },
  iconContainer: {
    width: 42,
    height: 42,
    borderRadius: 8,
    justifyContent: 'center',
    alignItems: 'center',
    marginRight: 12,
  },
  transactionImage: {
    width: 42,
    height: 42,
    borderRadius: 8,
    marginRight: 12,
  },
  transactionIconImage: {
    width: 36,
    height: 36,
    borderRadius: 8,
  },
  titleDescContainer: {
    flex: 1,
  },
  amountAndStatus: {
    alignItems: 'flex-end',
  },
  transactionTitle: {
    fontFamily:"HelveticaNeueBold",
    fontSize: 15,
    marginBottom: 3,
    color: '#333',
  },
  transactionDescription: {
    color: '#666',
    fontSize: 13,
    fontFamily:"ProximaNovaR",
  },
  transactionAmount: {
     fontFamily:"ProximaNovaR",
    color:"#333",
    fontSize: 15,
    marginBottom: 3,
  },
  transactionStatus: {
    fontSize: 12,
    fontWeight: '500',
    fontFamily:"ProximaNovaR",
  },
  balanceRow: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    paddingHorizontal: 15,
    paddingVertical: 10,
    backgroundColor: '#fff',
    borderBottomLeftRadius: 8,
    borderBottomRightRadius: 8,
    borderWidth: 1,
    borderColor: '#eaeaea',
    borderTopWidth: 1,
    borderTopColor: '#f0f0f0',
    alignItems: 'center',
  },
  balanceText: {
    color: '#666',
    fontSize: 13,
    fontFamily:"ProximaNovaR"
  },
  detailsContainer: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  typeIndicator: {
    paddingHorizontal: 10,
    paddingVertical: 5,
    borderRadius: 4,
    marginLeft: 10,
    backgroundColor:"#f5eadc",
     fontFamily:"ProximaNovaR",
  },
  typeText: {
    fontSize: 12,
 fontFamily:"ProximaNovaR"
  },
  chevronIcon: {
    marginLeft: 5,
  },
});

export default TransactionHistory;
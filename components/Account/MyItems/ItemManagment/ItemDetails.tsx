import React from 'react';
import { StyleSheet, View, ScrollView, SafeAreaView, Text } from 'react-native';
import { useLocalSearchParams } from 'expo-router';

import StatusBadge from './ItemBadge';
import ItemOverview from './ItemOverview';

import { Item, ItemStatus } from './item';
import ItemHeader from '@/UI/Header/ItemHeader';
import ItemBtn from './ItemBtn';

import { useRouter } from 'expo-router';


  const items: Item[] = [
    {
      id: '1',
      title: 'Samsung Galaxy A0...',
      price: 75000,
      currency: '₦',
      condition: 'Used',
      status: 'active',
      image: 'https://i.pinimg.com/736x/e8/28/de/e828deef8257790cfb5ea7963f3d2ef7.jpg',
      quantity: 1,
      dateAdded: '23-06-2024',
      itemNumber: '0123456789',
      category: 'Mobile Phones',
    },
    {
      id: '2',
      title: 'Oraimo Earpod 10',
      price: 20000,
      currency: '₦',
      condition: 'Used',
      status: 'inactive',
      image: 'https://i.pinimg.com/736x/06/d8/1e/06d81e396dd0cca272b7f3d7c90a68e4.jpg',
      quantity: 1,
      dateAdded: '22-06-2024',
      itemNumber: '0123456790',
      category: 'Electronics',
    },
    {
      id: '3',
      title: 'Apple Iphone XR',
      price: 250000,
      currency: '₦',
      condition: 'Used Like New',
      status: 'pending',
      image: 'https://i.pinimg.com/736x/42/17/18/4217180ddbe91686f92ee7c71c2bfa98.jpg',
      quantity: 1,
      dateAdded: '21-06-2024',
      itemNumber: '0123456791',
      category: 'Mobile Phones',
    },
    {
      id: '4',
      title: 'LG Home Theatre',
      price: 180000,
      currency: '₦',
      condition: 'New',
      status: 'sold',
      image: 'https://i.pinimg.com/736x/f7/cb/98/f7cb98099f150fe3398895c35b344da3.jpg',
      quantity: 1,
      dateAdded: '20-06-2024',
      dateSold: '25-06-2024',
      itemNumber: '0123456792',
      category: 'Electronics',
      buyer: 'John D.',
    },
    {
      id: '5',
      title: 'HP Spectre 360',
      price: 755000,
      currency: '₦',
      condition: 'Refurbished',
      status: 'pending',
      image: 'https://i.pinimg.com/736x/49/a5/23/49a52381639c73ca79afe01a2593aff1.jpg',
      quantity: 1,
      dateAdded: '19-06-2024',
      itemNumber: '0123456793',
      category: 'Computers',
    },
    {
      id: '6',
      title: 'Single Seater Chair',
      price: 25000,
      currency: '₦',
      condition: 'Used',
      status: 'rejected',
      image: 'https://i.pinimg.com/736x/ad/9c/ca/ad9ccab0661519c68b9768ffe77aa389.jpg',
      quantity: 1,
      dateAdded: '18-06-2024',
      itemNumber: '0123456794',
      category: 'Furniture',
    },
  ];

export default function ItemDetailScreen() {
  const { id } = useLocalSearchParams<{ id: string }>();
  
  const router = useRouter();

  const item: Item = items.find(item => item.id === id) || items[0];

  const renderStatusContent = () => {
    switch (item.status) {
      case 'active':
        return (
          <View>
            <Text style={styles.statusDescription}>
              Your item is currently active on Decluttering and getting visibility. Engage with interested buyers by
              answering their questions as they come.
            </Text>
            <View style={styles.actionLink}>
              <Text style={styles.actionLinkText}>View Item & Respond to Questions →</Text>
            </View>
          </View>
        );
      case 'inactive':
        return (
          <View>

          <Text style={styles.statusDescription}>
            Your item is currently inactive and hidden from potential buyers. To make it visible and available for
            purchase, set the status to Active. If the item is no longer available, consider deleting it.
          </Text>

          </View>
        );
      case 'rejected':
        return (
          <View >
            <Text style={styles.statusDescription}>
              This item has been rejected and is not visible to buyers. Reason:
            </Text>
            <Text style={styles.rejectionReason}>Description mismatch: The item description does not accurately match the item.</Text>
            <Text style={styles.rejectionReason}>Image issue: Item image does not clearly show the item.</Text>
            
            <View style={styles.relistContainer}>
              <Text style={styles.relistTitle}>To review and relist:</Text>
              <View style={styles.relistSteps}>
                <Text style={styles.relistStep}>• Edit item</Text>
                <Text style={styles.relistStep}>• Update description to match item</Text>
                <Text style={styles.relistStep}>• Set status to 'Active' to relist</Text>
              </View>
            </View>
          </View>
        );
      case 'sold':
        return (
          <View>
            <Text style={styles.statusDescription}>
              Your item has been successfully sold! We're thrilled that the buyer has completed the payment process.
            </Text>
            <View style={styles.nextActionsContainer}>
              <Text style={styles.nextActionsTitle}>Next Actions</Text>
            
            </View>
          </View>
        );
      case 'pending':
        return (
          <Text style={styles.statusDescription}>
            Thank you for submitting your item. Our team is currently reviewing it to ensure compliance with Decluttering's community guidelines. We'll notify you via email once approved or if further action is required.
          </Text>
        );
      default:
        return null;
    }
  };



  const renderActionButtons = () => {
    // Don't show any buttons for sold items
    if (item.status === 'sold') {
      return null;
    }
    
    return (
      <View style={{ marginBottom: 16 }}>
        {/* Show Edit Item button for all non-sold items */}
        <ItemBtn 
          title="Edit Item" 
          icon="edit" 
          onPress={() =>   router.push("/(routes)/Account/MyItem/EditItem")} 
        />
        
        {/* Only show Update Status button if item is not pending or rejected */}
        {(item.status !== 'pending' && item.status !== 'rejected') && (
          <ItemBtn 
            title="Update Status" 
            icon="sliders" 
            onPress={() => console.log('Update Status pressed')} 
          />
        )}
      </View>
    );
  };

  return (
    <SafeAreaView style={styles.container}>
      <ItemHeader title={item.title} showBack showMenu={item.status !== 'rejected' && item.status !== 'sold'}    showNotification = {true}
  showCart = {true} />
      <ScrollView style={styles.scrollView}>
        <View style={styles.content}>
          <View style={{backgroundColor: '#fff', padding: 16, borderRadius: 8, marginBottom: 16}}>
            
          <StatusBadge status={item.status} large />
          {renderStatusContent()}
          </View>

          <View style={styles.actionsContainer}>
     
          </View>


<View style={{ marginBottom: 16}}>

{renderActionButtons()}
</View>

     

          <ItemOverview item={item} />
        </View>
      </ScrollView>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#F2F2F7',
  },
  scrollView: {
    flex: 1,
  },
  content: {
    padding: 16,
  },
  statusDescription: {
    fontSize: 14,
    color: '#333',
    lineHeight: 20,


  
  },
  actionLink: {
    marginBottom: 16,
  },
  actionLinkText: {
    fontSize: 14,
    color: '#007AFF',
    fontWeight: '500',
  },
  actionsContainer: {
    marginBottom: 16,
  },
  rejectionReason: {
    fontSize: 14,
 
  },
  relistContainer: {
    marginTop: 12,
  },
  relistTitle: {
    fontSize: 14,
    fontWeight: '600',
    marginBottom: 8,
  },
  relistSteps: {
    marginLeft: 8,
  },
  relistStep: {
    fontSize: 14,
    marginBottom: 4,
  },
  nextActionsContainer: {
    marginTop: 16,
  },
  nextActionsTitle: {
    fontSize: 16,
    fontWeight: '600',
    marginBottom: 8,
  },
  socialButtonsContainer: {
    flexDirection: 'row',
    justifyContent: 'center',
    marginVertical: 8,
  },
});
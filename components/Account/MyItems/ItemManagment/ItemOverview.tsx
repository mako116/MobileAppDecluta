import React from 'react';
import { StyleSheet, View, Text, Image } from 'react-native';
import { Item } from './item';

interface ItemOverviewProps {
  item: Item;
}

const ItemOverview: React.FC<ItemOverviewProps> = ({ item }) => {
  return (
    <View>

      <Text style={styles.sectionTitle}>Item Overview</Text>
    <View style={styles.container}>
      <View style={styles.itemContainer}>
        <Image source={{ uri: item.image }} style={styles.image} />
        <View style={styles.detailsContainer}>
          <Text style={styles.title} numberOfLines={2}>
            {item.title}
          </Text>
          <View style={styles.priceContainer}>
            <Text style={styles.price}>
              {item.currency}{item.price.toLocaleString()}
            </Text>
          </View>
          <View style={styles.quantityContainer}>
            <Text style={styles.quantity}>{item.quantity}</Text>
          </View>
        </View>
      </View>
      <View style={styles.infoGrid}>
        <InfoRow label="Date Added" value={item.dateAdded} />
        {item.dateSold && <InfoRow label="Date Sold" value={item.dateSold} />}
        <InfoRow label="Item Number" value={item.itemNumber} />
        <InfoRow label="Category" value={item.category} />
        <InfoRow label="Condition" value={item.condition} />
        <InfoRow label="Status" value={item.status.charAt(0).toUpperCase() + item.status.slice(1)} />
        {item.buyer && <InfoRow label="Buyer" value={item.buyer} />}
      </View>
    </View>
    </View>
  );
};

interface InfoRowProps {
  label: string;
  value: string;
}

const InfoRow: React.FC<InfoRowProps> = ({ label, value }) => {
  return (
    <View style={styles.infoRow}>
      <Text style={styles.infoLabel}>{label}</Text>
      <Text style={styles.infoValue}>{value}</Text>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    backgroundColor: 'white',
    padding: 16,
    marginBottom: 16,
    borderRadius: 8,
  },
  sectionTitle: {
    fontSize: 18,
    fontWeight: 'bold',
    marginBottom: 12,
  },
  itemContainer: {
    flexDirection: 'row',
    marginBottom: 16,
  },
  image: {
    width: 80,
    height: 80,
    borderRadius: 4,
    backgroundColor: '#F2F2F7',
  },
  detailsContainer: {
    flex: 1,
    marginLeft: 12,
  },
  title: {
    fontSize: 16,
    fontWeight: '500',
    marginBottom: 4,
  },
  priceContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    marginBottom: 4,
  },
  price: {
    fontSize: 14,
    color: '#666',
  },
  quantityContainer: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  quantity: {
    fontSize: 14,
    color: '#666',
  },
  infoGrid: {
    borderTopWidth: 1,
    borderTopColor: '#F2F2F7',
    paddingTop: 12,
  },
  infoRow: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    paddingVertical: 6,
  },
  infoLabel: {
    fontSize: 14,
    color: '#666',
  },
  infoValue: {
    fontSize: 14,
    fontWeight: '500',
  },
});

export default ItemOverview;
import React from 'react';
import { FlatList, Image, StyleSheet, Text, View } from 'react-native';
import { useLocalSearchParams } from 'expo-router';
import Category from '@/screens/Products/Rending/category';

// Define the type for items
type Item = {
  id: number;
  imageUrl: any; // Adjust type if using specific image types
  name: string;
  title: string;
  locations: string;
};

const MultipleProd: React.FC = () => {
  // Parse the local search params and type them
  const { iphones } = useLocalSearchParams<{ iphones: string }>();
  
  // Safely parse JSON if 'iphones' exists
  const iphoneItems: Item[] = iphones ? JSON.parse(iphones) : [];

  return (
    <FlatList
      data={iphoneItems}
      keyExtractor={(item) => item.id.toString()}
      renderItem={({ item }) => (
        <View style={styles.itemContainer}>
            <View style={{ marginBottom: 0 }}>
          <Category
              imageUrl={item.imageUrl}
              name={item.name}
              title={item.title}
              locations={item.locations} timeAgo={'1min'}          />
        </View>
         </View>
      )}
    //   onEndReached={loadMoreCategories}
      onEndReachedThreshold={0.5}
    //   ListFooterComponent={renderFooter}
      numColumns={2} // Automatically handle two-column layout
      columnWrapperStyle={{ justifyContent: 'space-between', marginBottom: 10 ,}} // Add spacing between rows
      contentContainerStyle={{  gap: 10 , marginBottom: "0%" ,}}
    />
  );
};

const styles = StyleSheet.create({
  itemContainer: {
    flexDirection: 'row',
    padding: 10,
 
    flex:1,
   },
  itemImage: {
    width: 60,
    height: 50,
    marginRight: 10,
    borderRadius: 5,
  },
  itemName: {
    fontSize: 16,
    fontWeight: 'bold',
    color: '#333',
  },
  itemPrice: {
    fontSize: 14,
    color: '#666',
  },
  itemLocation: {
    fontSize: 12,
    color: '#999',
  },
});

export default MultipleProd;

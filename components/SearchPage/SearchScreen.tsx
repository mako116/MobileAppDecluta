import React, { useState } from 'react';
import {
  FlatList,
  Image,
  ScrollView,
  StyleSheet,
  Text,
  TextInput,
  TouchableOpacity,
  View,
} from 'react-native';
import { router } from 'expo-router';
import { AntDesign, Feather } from '@expo/vector-icons';
import SearchFilter from './SearchFilter';
import SearchProduct from './SearchProducts/SearchProducts';

type Item = {
  id: number;
  imageUrl: any; // Use proper image type if known
  name: string;
  title: string;
  locations: string;
};

const SearchScreen: React.FC = () => {
  const [searchText, setSearchText] = useState<string>('');

  const items: Item[] = [
    {
      id: 1,
      imageUrl: require('../../assets/images/meduimphone.png'),
      name: 'Apple iPhone XR',
      title: '₦250,000',
      locations: 'Agbowo UI, Ibadan',
    },
    {
      id: 2,
      imageUrl: require('../../assets/images/smallphone.png'),
      name: 'iphones XXR',
      title: '₦200,000',
      locations: 'Bodija, Ibadan',
    },
    {
      id: 3,
      imageUrl: require('../../assets/images/meduimphone.png'),
      name: 'Apple iPhone 12',
      title: '₦350,000',
      locations: 'Ring Road, Ibadan',
    },
  ];

  const filteredItems = items.filter((item) =>
    item.name.toLowerCase().includes(searchText.toLowerCase())
  );

  const iphoneItems = items.filter((item) =>
    item.name.toLowerCase().includes("iphones")
  );

  const handleItemClick = (item: Item): void => {
    router.push({
      pathname: '/product-details',
      params: {
        name: item.name,
        imageUrl: item.imageUrl,
        title: item.title,
        locations: item.locations,
      },
    });
  };

  const handleIphonesClick = (): void => {
    router.push({
      pathname: '/multiple-products',
      params: { iphones: JSON.stringify(iphoneItems) ,
        // iphone: JSON.stringify(iphoneItems)
      },
    });
  };

  const renderListHeader = (): React.ReactElement | null =>
    iphoneItems.length > 1 ? (
      <TouchableOpacity style={styles.resultItem} onPress={handleIphonesClick}>
        <Text style={styles.resultText}>View All iPhones</Text>
        <Feather name="arrow-up-left" size={20} color="#A4A4A4" />
      </TouchableOpacity>
    ) : null;
    

  return (
    <View>
      <View style={[styles.container, { backgroundColor: '#fff' }]}>
        <View style={{ flexDirection: 'row', alignItems: 'center' }}>
          <View style={styles.searchBox}>
            <AntDesign onPress={router.back} name="arrowleft" size={24} color="black" />
            <TextInput
              style={styles.input}
              placeholder="I'm looking for...."
              placeholderTextColor="#888"
              value={searchText}
              onChangeText={(text) => setSearchText(text)}
            />
            <TouchableOpacity>
              <Feather name="search" size={24} color="#A4A4A4" />
            </TouchableOpacity>
          </View>
        </View>
      </View>
      {searchText === '' ? (
        <View>
          <SearchFilter />
        </View>
      ) : (
        <FlatList
          data={filteredItems}
          keyExtractor={(item) => item.id.toString()}
          renderItem={({ item }) => (
            <TouchableOpacity onPress={() => handleItemClick(item)}>
              <View style={styles.resultItem}>
                <View style={styles.itemDetails}>
                  {/* <Image source={item.imageUrl} style={styles.itemImage} /> */}
                  <View>
                    <Text style={styles.resultText}>{item.name}</Text>
                    {/* <Text style={styles.resultSubtitle}>{item.title}</Text> */}
                    {/* <Text style={styles.resultSubtitle}>{item.locations}</Text> */}
                  </View>
                </View>
                <Feather name="arrow-up-left" size={20} color="#A4A4A4" />
              </View>
            </TouchableOpacity>
          )}
          ListHeaderComponent={renderListHeader()}
          ListEmptyComponent={
        <ScrollView>
       <View style={{width:"100%", justifyContent:"center", alignItems:"center", marginBottom:"50%"}}>
         <Image source={require('../../assets/images/notsearch.png')} style={{}} />
             <Text style={styles.noResultText}>
             Oops, we couldn’t find what you’re looking for.
             Explore our recommendations of refine your search!
               {/* "{searchText}" */}
               </Text>

               <View style={{marginTop:"10%"}}>
                <Text style={{marginBottom:"3%", fontWeight:"500"}}>Explore These Instead</Text>
                <SearchProduct/>
               </View>
               
       </View>
       </ScrollView>
          }
        />
      )}
    </View>
  );
};

const styles = StyleSheet.create({
  container: { paddingVertical: '2%', paddingTop: 45 },
  searchBox: { flexDirection: 'row', alignItems: 'center', paddingHorizontal: 10 },
  input: { flex: 1, marginHorizontal: 10, fontSize: 16 },
  resultItem: { flexDirection: 'row', justifyContent: 'space-between', padding: 14 , borderWidth:1, borderColor:"#EAEAEA"},
  itemDetails: { flexDirection: 'row', alignItems: 'center' },
  itemImage: { width: 50, height: 50, marginRight: 10 },
  resultText: { fontSize: 16, fontWeight: 'bold' },
  resultSubtitle: { fontSize: 14, color: '#666' },
  iphonesButton: {
    padding: 15,
    // backgroundColor: '#007BFF',
    borderRadius: 5,
    margin: 10,
    alignItems: 'center',
  },
  iphonesButtonText: {
    color: '#fff',
    fontSize: 16,
    fontWeight: 'bold',
  },
  noResultText: { textAlign: 'center', marginTop: 20, fontSize: 16 },
});

export default SearchScreen;

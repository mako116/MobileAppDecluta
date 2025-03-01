import React, { useState } from 'react';
import {
  FlatList,
  Image,
  ScrollView,
  Text,
  TextInput,
  TouchableOpacity,
  View,
} from 'react-native';
import { router } from 'expo-router';
import { Feather } from '@expo/vector-icons';
import SearchFilter from './SearchFilter';
import SearchProduct from './SearchProducts/SearchProducts';
import { SafeAreaView } from 'react-native-safe-area-context';
import SearchScreeStyles from '@/styles/searchStyles/inputStyles';
import Search from '@/assets/images/kyc/Search';
import Closecross from '@/assets/svg/closecross';
import BackButton2 from '@/assets/images/kyc/LeftArrow2';

type Item = {
  imageUrl: any; // Use proper image type if known
  name: string;
  title: string;
  locations: string;
};

const SearchScreen: React.FC = () => {
  const [searchText, setSearchText] = useState<string>('');

  const handleGoBack = () => {
    router.back();
  };

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
    // Assuming you have a way to fetch iPhone items
    const iphoneItems: Item[] = []; // Replace with actual fetching logic
    router.push({
      pathname: '/multiple-products',
      params: { iphones: JSON.stringify(iphoneItems) },
    });
  };

  const renderListHeader = (): React.ReactElement | null => {
    // Assuming you have a way to fetch iPhone items
    const iphoneItems: Item[] = []; // Replace with actual fetching logic
    return iphoneItems.length > 1 ? (
      <TouchableOpacity style={SearchScreeStyles.resultItem} onPress={handleIphonesClick}>
        <Text style={SearchScreeStyles.resultText}>View All iPhones</Text>
        <Feather name="arrow-up-left" size={20} color="#A4A4A4" />
      </TouchableOpacity>
    ) : null;
  };

  const searchResults = [
    { text: searchText, category: 'Phones & Tablets' },
    { text: searchText, category: 'Electronics' },
    { text: searchText, category: 'Laptops & Computers' },
  ];

  const clearInput = () => {
    setSearchText('');
  };

  return (
    <SafeAreaView edges={['bottom']} style={{ backgroundColor: "#F9F9F9" }}>
      <View style={[SearchScreeStyles.container]}>
        <View style={{ flexDirection: 'row', alignItems: 'center' }}>
          <View style={SearchScreeStyles.searchBox}>
            <TouchableOpacity onPress={handleGoBack}>
            <BackButton2 />
              {/* <Image source={require("../../assets/images/leftArrow.png")} style={{ width: 25, height: 20 }} /> */}
            </TouchableOpacity>
            <View style={SearchScreeStyles.inputContainer}>
              <TextInput
                style={SearchScreeStyles.input}
                placeholder="I'm looking for...."
                placeholderTextColor="#888"
                value={searchText}
                onChangeText={(text) => setSearchText(text)}
              />
              {searchText !== '' && (
                <TouchableOpacity onPress={clearInput}>
                  <Closecross/>
                 </TouchableOpacity>
              )}
            </View>
            <TouchableOpacity>
            <Search/>
            </TouchableOpacity>
          </View>
        </View>
      </View>
      {searchText === '' ? (
        <View>
          <SearchFilter />
        </View>
      ) : (
        <View>
          <TouchableOpacity onPress={() => handleItemClick({ imageUrl: '', name: searchText, title: '', locations: '' })} style={SearchScreeStyles.resultItem}>
            <Text style={SearchScreeStyles.resultText}>
              {searchText}
            </Text>
          </TouchableOpacity>
          <FlatList
            data={searchResults}
            keyExtractor={(item, index) => index.toString()}
            renderItem={({ item }) => (
              <TouchableOpacity onPress={() => handleItemClick({imageUrl: '', name: searchText, title: '', locations: '' })}>
                <View style={SearchScreeStyles.resultItem}>
                  <View style={SearchScreeStyles.itemDetails}>
                    <View>
                      <Text style={SearchScreeStyles.resultText}>
                        {item.text} <Text style={SearchScreeStyles.resultCategoryText}>in {item.category}</Text>
                      </Text>
                    </View>
                  </View>
                  <Image source={require('../../assets/images/sendArrow.png')} style={{ height: 18, width: 18 }} />
                </View>
              </TouchableOpacity>
            )}
            ListHeaderComponent={renderListHeader()}
            ListEmptyComponent={
              <ScrollView>
                <View style={{ width: "100%", justifyContent: "center", alignItems: "center", marginBottom: "50%" }}>
                  <Image source={require('../../assets/images/notsearch.png')} style={{}} />
                  <Text style={SearchScreeStyles.noResultText}>
                    Oops, we couldn’t find what you’re looking for.
                    Explore our recommendations or refine your search!
                  </Text>
                  <View style={{ marginTop: "10%" }}>
                    <Text style={{ marginBottom: "3%", fontWeight: "500" }}>Explore These Instead</Text>
                    <SearchProduct />
                  </View>
                </View>
              </ScrollView>
            }
          />
        </View>
      )}
    </SafeAreaView>
  );
};

export default SearchScreen;
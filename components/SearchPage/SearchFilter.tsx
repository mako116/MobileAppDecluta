 import React from 'react';
import { Image, ScrollView, Text, TouchableOpacity, View } from 'react-native';
import SearchProduct from './SearchProducts/SearchProducts';
import SearchCategoryStyles from '@/styles/searchStyles/searchCategoryStyles';
import Emojione from '@/assets/svg/emojione';

interface Item {
  id: number;
  title: string;
}

const SearchFilter: React.FC = () => {
  const trendingItems: Item[] = [
    { id: 1, title: 'iPhone' },
    { id: 2, title: 'HP Laptop' },
    { id: 3, title: 'Generator' },
    { id: 4, title: 'Samsung' },
    { id: 5, title: 'EarPods' },
    { id: 6, title: 'Solar inventer' },
  ];

  const discoverItems: Item[] = [
    { id: 7, title: 'AirPods' },
    { id: 8, title: 'Uk Used phone' },
    { id: 9, title: 'Redmi' },
    { id: 10, title: '7 seater' },
    { id: 11, title: 'Gas cylinder' },
    { id: 12, title: '4000w Blender' },
  ];

  const renderItems = (items: Item[]) => (
    <View style={SearchCategoryStyles.gridContainer}>
      {items.map((item) => (
        <View key={item.id} style={SearchCategoryStyles.gridItem}>
          <TouchableOpacity>
            <Text style={SearchCategoryStyles.title}>{item.title}</Text>
          </TouchableOpacity>
        </View>
      ))}
    </View>
  );

  return (
    <ScrollView  >
    <View style={{ paddingHorizontal: 15, paddingVertical:3 }}>
      <View style={SearchCategoryStyles.header}>
        <Image source={require('../../assets/images/noto_fire.png')} style={{ height: 16, width: 16 }} />
        <Text style={SearchCategoryStyles.headerText}>Trending..</Text>
      </View>

      {renderItems(trendingItems)}

      <View style={SearchCategoryStyles.header}>
        <Image source={require('../../assets/images/cool.png')} style={{ height: 16, width: 16 }} />
        <Text style={SearchCategoryStyles.headerText}>Discover more</Text>
      </View>

      {renderItems(discoverItems)}

      <View style={SearchCategoryStyles.header}>
        <Emojione/>
         <Text style={SearchCategoryStyles.headerText}>You may also like...</Text>
      </View>

      {/* {renderItems(discoverItems)} */}
    </View>
   <View>
   <SearchProduct/>
   </View>
    </ScrollView>
  );
};


export default SearchFilter;

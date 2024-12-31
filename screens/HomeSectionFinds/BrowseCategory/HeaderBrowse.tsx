import React, { useState, useEffect } from 'react';
import {
  ScrollView,
   Text,
  TextInput,
  TouchableOpacity,
  View,
  Image,
} from 'react-native';
import { Href, router } from 'expo-router'; // Ensure you have expo-router installed
import BackButton from '@/assets/images/kyc/LeftArrow';
import LetsIconsFilter from '@/assets/svg/lets-icons_filter';
import Search from '@/assets/images/kyc/Search';
import RightArrow from '@/assets/images/kyc/rightarrow';
import HeadBrowse from '@/styles/categories/HeaderBrowse.style';

interface Category {
  id: string;
  name: string;
  img: any;
  para: string;
  Link: Href<string | object>;
}

const HeaderBrowse = () => {
  const categories: Category[] = [
    {
      id: '1',
      name: 'Phones & Tablets',
      img: require('../../../assets/svg/phone.png'),
      para: 'Apple, Samsung, Tecno, Infinix, Itel...',
      Link: '/(routes)/Categories/phone-tablets',
    },
    {
      id: '2',
      name: 'Home & Kitchen',
      img: require('../../../assets/images/categories/kitchen.png'),
      para: 'Washing Machines, Fans, Irons, ACs...',
      Link: '/(routes)/Categories/phone-tablets',
    },
    {
      id: '3',
      name: 'Furniture',
      img: require('../../../assets/images/categories/funitures.png'),
      para: 'Tables, Chairs, TV Stands & Mounts...',
      Link: '/(routes)/Categories/phone-tablets',
    },
    {
      id: '4',
      name: 'Computing',
      img: require('../../../assets/images/categories/laptops.png'),
      para: 'Laptops, Desktops, Monitors...',
      Link: '/(routes)/Categories/phone-tablets',
    },
    {
      id: '5',
      name: 'Electronics',
      img: require('../../../assets/images/categories/computin.png'),
      para: 'Cameras, TV & DVDs, Audio...',
      Link: '/(routes)/Categories/phone-tablets',
    },
    {
      id: '6',
      name: 'Fashion',
      img: require('../../../assets/images/categories/wardrops.png'),
      para: 'Bags, Shoes, Watches, Wedding...',
      Link: '/(routes)/Categories/phone-tablets',
    },
    {
      id: '7',
      name: 'Solar Energy',
      img: require('../../../assets/images/categories/solarEne.png'),
      para: 'Solar Systems, Batteries, Panels...',
      Link: '/(routes)/Categories/phone-tablets',
    },
    {
      id: '8',
      name: 'Generators',
      img: require('../../../assets/images/categories/gen.png'),
      para: 'Portable Generators, Industrial Gen...',
      Link: '/(routes)/Categories/phone-tablets',
    },
  ];

  const [searchQuery, setSearchQuery] = useState<string>('');
  const [filteredCategories, setFilteredCategories] = useState<Category[]>(categories);

  // Reset categories when the input is cleared
  useEffect(() => {
    if (searchQuery.trim() === '') {
      setFilteredCategories(categories);
    }
  }, [searchQuery]);


 
  const handleSearch = () => {
    if (searchQuery.trim() === '') {
      setFilteredCategories(categories);
    } else {
      const filtered = categories.filter((category) =>
        category.name.toLowerCase().includes(searchQuery.toLowerCase())
      );
      setFilteredCategories(filtered);
    }
  };

  return (
    <View style={HeadBrowse.container}>
      {/* Header Section */}
      <View style={HeadBrowse.header}>
        <BackButton />
        <View style={HeadBrowse.searchBar}>
          <TextInput
            style={HeadBrowse.input}
            placeholder="Search in Phones & Tablets"
            value={searchQuery}
            onChangeText={setSearchQuery}
          />
          <TouchableOpacity onPress={handleSearch} >
            <Search />
          </TouchableOpacity>
        </View>
        <TouchableOpacity style={HeadBrowse.filterButton}>
          <LetsIconsFilter />
        </TouchableOpacity>
      </View>

      {/* Categories Section */}
      <ScrollView showsVerticalScrollIndicator={false} style={HeadBrowse.categoryScroll}>
        {filteredCategories.length > 0 ? (
          filteredCategories.map((item) => (
            <TouchableOpacity
            key={item.id}
            style={HeadBrowse.categoryBox}
            onPress={() => {
              try {
                router.push(item.Link);
                console.log('Navigating to:', item.Link);
              } catch (error) {
                console.error('Navigation error:', error);
              }
            }}
            
            >
              <View style={{ flexDirection: 'row', alignItems: 'center' }}>
                <Image
                  source={item.img}
                  style={HeadBrowse.categoryImage}
                  // defaultSource={require('../../../assets/images/default-category.png')} // Default fallback image
                />
                <View>
                  <Text style={HeadBrowse.categoryText}>{item.name}</Text>
                  <Text style={HeadBrowse.categoryP}>{item.para}</Text>
                </View>
              </View>
              <RightArrow />
            </TouchableOpacity>
          ))
        ) : (
          <Text style={HeadBrowse.noResultsText}>
            No categories found. Try searching for something else.
          </Text>
        )}
      </ScrollView>
    </View>
  );
};



export default HeaderBrowse;

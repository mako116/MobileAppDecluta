import React, { useState, useEffect } from 'react';
import {
  ScrollView,
   Text,
  TextInput,
  TouchableOpacity,
  View,
  Image,
} from 'react-native';
import { Href, router } from 'expo-router';
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

const SubCategories = () => {
  const categories: Category[] = [
    {
      id: '1',
      name: 'Smartphones',
      img: require('../../../../assets/images/categories/sub/Frame 646237.png'),
      para: 'Iphone 16, Samsung S24, Tecno...',
      Link: '/(routes)/Categories/phone-tablets/Sub-category/smartphones',
    },
    {
      id: '2',
      name: 'Tablets/iPads',
      img: require('../../../../assets/images/categories/sub/Frame 646237 (1).png'),
      para: 'Apple, Samsung, Tecno, Infinix, Itel...',
      Link: '/(routes)/Categories/phone-tablets',
    },
    {
      id: '3',
      name: 'Smart Watches',
      img: require('../../../../assets/images/categories/sub/Frame 646237 (2).png'),
      para: 'Samsung, Apple, Oraimo, Xiaomi...',
      Link: '/(routes)/Categories/phone-tablets',
    },
    {
      id: '4',
      name: 'Feature/Basic Phones',
      img: require('../../../../assets/images/categories/sub/Frame 646237 (3).png'),
      para: 'Itel, Tecno, Nokia, Bontel...',
      Link: '/(routes)/Categories/phone-tablets',
    },
    {
      id: '5',
      name: 'Accessories',
      img: require('../../../../assets/images/categories/sub/Frame 646237 (4).png'),
      para: 'Power Banks, Ear Buds, Headpho...',
      Link: '/(routes)/Categories/phone-tablets',
    },
  ];

  const [searchQuery, setSearchQuery] = useState<string>('');
  const [filteredCategories, setFilteredCategories] = useState<Category[]>(categories);

  // Filter categories when the search icon is clicked
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

  // Reset categories when the input is cleared
  useEffect(() => {
    if (searchQuery.trim() === '') {
      setFilteredCategories(categories);
    }
  }, [searchQuery]);

  return (
    <View style={HeadBrowse.container}>
      {/* Header Section */}
      <View style={HeadBrowse.header}>
        <BackButton />
        <View style={HeadBrowse.searchBar}>
          <TextInput
            style={HeadBrowse.input}
            placeholder="Search Phone & Tablets"
            value={searchQuery}
            onChangeText={setSearchQuery}
          />
          <TouchableOpacity onPress={handleSearch}>
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

 

export default SubCategories;

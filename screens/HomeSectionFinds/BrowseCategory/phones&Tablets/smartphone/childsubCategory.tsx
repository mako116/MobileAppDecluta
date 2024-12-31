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

const SmartChildCategory = () => {
  const categories: Category[] = [
    {
      id: '1',
      name: 'Apple',
      img: require('../../../../../assets/images/categories/sub/child/apple.png'),
      para: 'iPhone 16, iPhone 15, iPhone 14...',
      Link: '/(routes)/Categories/phone-tablets',
    },
    {
      id: '2',
      name: 'Samsung',
      img: require('../../../../../assets/images/categories/sub/child/sam.png'),
      para: 'Galaxy S24 Ultra, Z Fold6, Galaxy...',
      Link: '/(routes)/Categories/phone-tablets',
    },
    {
      id: '3',
      name: 'Tecno',
      img: require('../../../../../assets/images/categories/sub/child/tec.png'),
      para: 'Camon 30, Spark 30, Pova 6, Pop 6...',
      Link: '/(routes)/Categories/phone-tablets',
    },
    {
      id: '4',
      name: 'Infinix',
      img: require('../../../../../assets/images/categories/sub/child/infi.png'),
      para: 'Zero Ultra, GT 20 Pro, Note 40...',
      Link: '/(routes)/Categories/phone-tablets',
    },
    {
      id: '5',
      name: 'Xiaomi',
      img: require('../../../../../assets/images/categories/sub/child/xia.png'),
      para: '12S Ultra, Redmi 14 Pro, Redmi A3...',
      Link: '/(routes)/Categories/phone-tablets',
    },
    {
        id: '6',
        name: 'Itel',
        img: require('../../../../../assets/images/categories/sub/child/itel.png'),
        para: 'A23 Pro, Vision 2, A47, P65...',
        Link: '/(routes)/Categories/phone-tablets',
      },
      {
        id: '7',
        name: 'Google',
        img: require('../../../../../assets/images/categories/sub/child/goog.png'),
        para: 'Pixel 9, Pixel 9 Pro, and Pixel 9 Pro...',
        Link: '/(routes)/Categories/phone-tablets',
      },
      {
        id: '8',
        name: 'Huawei',
        img: require('../../../../../assets/images/categories/sub/child/hua.png'),
        para: 'P40 Pro, Honor X60i, Mate X3...',
        Link: '/(routes)/Categories/phone-tablets',
      },
      {
        id: '9',
        name: 'Others',
        img: require('../../../../../assets/images/categories/sub/child/others.png'),
        para: 'Gionee, Vivo, Oppo, ZTE',
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
            placeholder="Search smartphones"
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
      <ScrollView
      
      showsVerticalScrollIndicator={false}
    style={HeadBrowse.categoryScroll}
    keyboardShouldPersistTaps="handled"
      >
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

 

export default SmartChildCategory;

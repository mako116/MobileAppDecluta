import React, { useEffect, useRef, useState } from 'react';
import { FlatList, StyleSheet, TextInput, TouchableOpacity, View, Text, Animated, ScrollView } from 'react-native';
import { useRouter } from 'expo-router';
import LottieView from 'lottie-react-native';

// Components and Assets
import BackButton from '@/assets/images/kyc/LeftArrow';
import Search from '@/assets/images/kyc/Search';
import LetsIconsFilter from '@/assets/svg/lets-icons_filter';
import Category from '@/screens/Products/Rending/category';
import HeadBrowse from '@/styles/categories/HeaderBrowse.style';
import SmallArrowDown from '@/assets/images/categories/sub/child/smallArrowDown';
import Sorting from '@/assets/images/categories/sub/child/sorting';
import BackButton2 from '@/assets/images/kyc/LeftArrow2';

interface CategoryItem {
  id: number;
  imageUrl: any;
  name: string;
  title: string;
  locations: string;
  timeAgo: string;
  specific?: any;
  Link: string;
}

const Apples = () => {
  const router = useRouter();
  const [visibleCategories, setVisibleCategories] = useState<number>(4);
  const [isLoading, setIsLoading] = useState<boolean>(false);
  const [searchQuery, setSearchQuery] = useState<string>('');
  const [filteredCategories, setFilteredCategories] = useState<CategoryItem[]>([]);
 
  const categories: CategoryItem[] = [
    { id: 1, imageUrl: require('../../../../../../assets/images/categories/sub/child/image 26.png'), name: 'Apple iPhone XR', title: '250,000', locations: 'Agbowo UI, Ibadan', timeAgo: '2 wks ago', specific: require('../../../../../../assets/images/newimages/play.png'), Link: '/(routes)/Categories/phone-tablets/Sub-category/apple' },
    { id: 2, imageUrl: require('../../../../../../assets/images/categories/sub/child/image 26.png'), name: 'HP Spectre 360', title: '755,000', locations: 'Lagos, Nigeria', timeAgo: '1 wk ago', Link: '/(routes)/Categories/phone-tablets/apple' },
    { id: 3, imageUrl: require('../../../../../../assets/images/categories/sub/child/image 26.png'), name: 'Apple iPhone 11', title: '350,000', locations: 'Ibadan, Nigeria', timeAgo: '2 hrs ago', specific: require('../../../../../../assets/images/newimages/play.png'), Link: '/(routes)/Categories/phone-tablets/apple' },
    { id: 4, imageUrl: require('../../../../../../assets/images/categories/sub/child/image 26.png'), name: 'Apple iPhone XR', title: '250,000', locations: 'Agbowo UI, Ibadan', timeAgo: '2 wks ago', specific: require('../../../../../../assets/images/newimages/play.png'), Link: '/(routes)/Categories/phone-tablets/Sub-category/apple' },
    { id: 5, imageUrl: require('../../../../../../assets/images/categories/sub/child/image 26.png'), name: 'Apple iPhone XR', title: '250,000', locations: 'Agbowo UI, Ibadan', timeAgo: '2 wks ago', specific: require('../../../../../../assets/images/newimages/play.png'), Link: '/(routes)/Categories/phone-tablets/Sub-category/apple' },
    { id: 6, imageUrl: require('../../../../../../assets/images/categories/sub/child/image 26.png'), name: 'Apple iPhone XR', title: '250,000', locations: 'Agbowo UI, Ibadan', timeAgo: '2 wks ago', specific: require('../../../../../../assets/images/newimages/play.png'), Link: '/(routes)/Categories/phone-tablets/Sub-category/apple' },
    { id: 7, imageUrl: require('../../../../../../assets/images/categories/sub/child/image 26.png'), name: 'Apple iPhone XR', title: '250,000', locations: 'Agbowo UI, Ibadan', timeAgo: '2 wks ago', specific: require('../../../../../../assets/images/newimages/play.png'), Link: '/(routes)/Categories/phone-tablets/Sub-category/apple' },
    { id: 8, imageUrl: require('../../../../../../assets/images/categories/sub/child/image 26.png'), name: 'Apple iPhone XR', title: '250,000', locations: 'Agbowo UI, Ibadan', timeAgo: '2 wks ago', specific: require('../../../../../../assets/images/newimages/play.png'), Link: '/(routes)/Categories/phone-tablets/Sub-category/apple' },
    { id: 9, imageUrl: require('../../../../../../assets/images/categories/sub/child/image 26.png'), name: 'Apple iPhone XR', title: '250,000', locations: 'Agbowo UI, Ibadan', timeAgo: '2 wks ago', specific: require('../../../../../../assets/images/newimages/play.png'), Link: '/(routes)/Categories/phone-tablets/Sub-category/apple' },
    { id: 10, imageUrl: require('../../../../../../assets/images/categories/sub/child/image 26.png'), name: 'Apple iPhone XR', title: '250,000', locations: 'Agbowo UI, Ibadan', timeAgo: '2 wks ago', specific: require('../../../../../../assets/images/newimages/play.png'), Link: '/(routes)/Categories/phone-tablets/Sub-category/apple' },
    { id: 11, imageUrl: require('../../../../../../assets/images/categories/sub/child/image 26.png'), name: 'Apple iPhone XR', title: '250,000', locations: 'Agbowo UI, Ibadan', timeAgo: '2 wks ago', specific: require('../../../../../../assets/images/newimages/play.png'), Link: '/(routes)/Categories/phone-tablets/Sub-category/apple' },

    // Add more items here...
  ];

  const scrollY = useRef(new Animated.Value(0)).current;

  const headerHeight = scrollY.interpolate({
    inputRange: [0, 150], // Adjust range for when the header should disappear
    outputRange: [1, 0], // Fully visible to fully hidden
    extrapolate: "clamp", // Prevent values outside the range
  });


  // Filter categories when the search icon is clicked
  // const handleSearch = () => {
  //   if (searchQuery.trim() === '') {
  //     setFilteredCategories(categories);
  //   } else {
  //     const filtered = categories.filter((category) =>
  //       category.name.toLowerCase().includes(searchQuery.toLowerCase())
  //     );
  //     setFilteredCategories(filtered);
  //   }
  // };
  // Reset categories when the input is cleared
  useEffect(() => {
    if (searchQuery.trim() === '') {
      setFilteredCategories(categories);
    }
  }, [searchQuery]);

  const loadMoreCategories = () => {
    if (visibleCategories >= categories.length || isLoading) return;

    setIsLoading(true);
    setTimeout(() => {
      setVisibleCategories((prev) => Math.min(prev + 4, categories.length));
      setIsLoading(false);
    }, 1500);
  };

  const [isFilterDropdownOpen, setIsFilterDropdownOpen] = useState(false);
  const [isSortingDropdownOpen, setIsSortingDropdownOpen] = useState(false);

  const toggleFilterDropdown = () => {
    setIsFilterDropdownOpen(!isFilterDropdownOpen);
    setIsSortingDropdownOpen(false); // Close sorting dropdown if open
  };

  const toggleSortingDropdown = () => {
    setIsSortingDropdownOpen(!isSortingDropdownOpen);
    setIsFilterDropdownOpen(false); // Close filter dropdown if open
  };

  const renderFooter = () => {
    if (!isLoading) return null;
    return (
      <View style={styles.lottieContainer}>
        <LottieView
          source={{ uri: 'https://lottie.host/21a8a60c-9138-4223-bd08-116521b66149/6WwzwgIlXf.lottie' }}
          autoPlay
          loop
          style={{ width: 22, height: 22 }}
        />
      </View>
    );
  };

  return (
    <View style={styles.container}>
      {/* Header Section */}
     <View>
      <View style={[HeadBrowse.header,{marginBottom:0}]}>
        <TouchableOpacity onPress={() => router.back()}>
          <BackButton />
        </TouchableOpacity>
        <View style={HeadBrowse.searchBar}>
          <TextInput
            style={HeadBrowse.input}
            placeholder="Search in Apple Smartphones"
            value={searchQuery}
            onChangeText={setSearchQuery}
            accessibilityLabel="Search bar"
          />
         
        </View>
        <TouchableOpacity 
        // onPress={handleSearch}
        style={{paddingLeft:10}}  accessibilityLabel="Search button">
            <Search />
        </TouchableOpacity>
      </View>
       <View style={{flexDirection:"row",zIndex:1000, alignItems:"center",justifyContent:"space-between", backgroundColor:"#fff", paddingHorizontal:"2%",paddingVertical:"1%", borderTopWidth:1,borderColor:"#E9E9E9", marginTop:-4,}}>
      {/* Filter Button */}
      <TouchableOpacity
        style={[HeadBrowse.filterButton, { flexDirection: 'row', alignItems: 'center', gap: 13 }]}
        onPress={toggleFilterDropdown}
        accessibilityLabel="Filter button"
      >
        <LetsIconsFilter />
        <Text>Filter</Text>
        <SmallArrowDown />
      </TouchableOpacity>

      {isFilterDropdownOpen && (
        <View style={HeadBrowse.dropdown}>
          <Text style={HeadBrowse.dropdownItem}>Option 1</Text>
          <Text style={HeadBrowse.dropdownItem}>Option 2</Text>
          <Text style={HeadBrowse.dropdownItem}>Option 3</Text>
        </View>
      )}

      <View style={HeadBrowse.divider} />

      {/* Sorting Button */}
      <TouchableOpacity
        style={[HeadBrowse.filterButton, { flexDirection: 'row', alignItems: 'center', gap: 15 }]}
        onPress={toggleSortingDropdown}
        accessibilityLabel="Sorting button"
      >
        <Sorting />
        <Text>Default Sorting</Text>
        <SmallArrowDown />
      </TouchableOpacity>

      {isSortingDropdownOpen && (
        <View style={HeadBrowse.dropdown2}>
          <Text style={HeadBrowse.dropdownItem}>Sort by Name</Text>
          <Text style={HeadBrowse.dropdownItem}>Sort by Date</Text>
          <Text style={HeadBrowse.dropdownItem}>Sort by Price</Text>
        </View>
      )}
    </View>
    </View>
      {/* Categories List */}
      <ScrollView>
           <Text style={HeadBrowse.texts}>Apple Smartphones</Text>
              <Text style={HeadBrowse.subTexts}>Shop new & used iPhone 8-16 models on DecluttaKing. Get unbeatable deals from verified sellers, competitive prices, secure transactions & hassle-free pickup.</Text>
           <FlatList
              data={categories.slice(0, visibleCategories)} // Slice the data to display based on visibleCategories
              keyExtractor={(item) => item.id.toString()}
              renderItem={({ item }) => (
                <View style={{ marginBottom: 15 }}>
                  <Category
                    imageUrl={item.imageUrl}
                    name={item.name}
                    title={item.title}
                    locations={item.locations} 
                    timeAgo={item.timeAgo}  
                    specific={item.specific}          
                    />
                </View>
              )}
              onEndReached={loadMoreCategories} // Trigger load more when scrolled to the end
              onEndReachedThreshold={0.5}
              ListFooterComponent={renderFooter} // Footer with loading animation
              numColumns={2} // Automatically handle two-column layout
              contentContainerStyle={styles.listContainer}
              columnWrapperStyle={styles.columnWrapper}
              // columnWrapperStyle={{ justifyContent: 'space-between', marginBottom: 0 }} // Add spacing between rows
              // contentContainerStyle={{ paddingTop: 10, gap: 10, marginBottom: '70%' }}
            />
       </ScrollView>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#f8f8f8',
  },
  lottieContainer: {
    alignItems: 'center',
    marginVertical: 20,
  },
  listContainer: {
    paddingHorizontal: 10,
    paddingTop: 10,
    marginBottom:"20%"
  },
 
 
 
  columnWrapper: {
    justifyContent: 'space-between',
    gap: 15,
  },
});

export default Apples;

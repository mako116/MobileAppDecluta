import { Text, Image, StyleSheet, View, ScrollView, TouchableOpacity, Animated, LayoutChangeEvent } from "react-native"
import React, { useRef, useState } from 'react';
import { router, useLocalSearchParams } from 'expo-router';
import ProductHeader from "@/UI/Header/ProductScreenHeader";
import { SafeAreaView } from "react-native-safe-area-context";
import ConditionIcon from "@/assets/svg/ConditionIcon";
import PinLocation from "@/assets/svg/PinLocationIcon";
import StockProgressBar from "@/UI/ProgressBar/ProductQuantityPrgressBar";
import ShoppoingCart from "@/assets/svg/ShoppingCart";
import FireIcon from "@/assets/svg/FireIcon";
import BuyAndAddToCart from "../BuyAndAddToCart/BuyAndAddToCartComponent";
import { MaterialIcons } from "@expo/vector-icons";
import ShieldTick from "@/assets/svg/shieldTick";
import DotIcon from "@/assets/svg/DotIcon";
import AboutItems from "@/components/ProductComponents/AboutItems";
import ItemDescription from "@/components/ProductComponents/ItemDescription";
import QuestionsAndAnswer from "@/components/ProductComponents/QuestionsAndAnswer";
import Button from "@/components/Button/button";
import SellerProfileCard from "@/components/ProductComponents/SellerProfileCard";
import SellerReviews from "@/components/ProductComponents/SellerReviews";
import ExploreProducts3 from "../RecommendProducts/Explore3/ExploreProducts3";
import Recommend from "@/screens/HomeSectionFinds/Recommend/Recommend";
import FixedBuyAndAddToCart from "@/components/ProductComponents/FixedBuyAndAddToCart";
import MessageQuestion from "@/assets/svg/MessageQuestion";

const ProductDetailsScreen = () => {
  const { id, imageUrl, name, title, locations, condition, timeAgo } = useLocalSearchParams();

  // States
  const scrollY = useRef(new Animated.Value(0)).current;
  const [showFixedCart, setShowFixedCart] = useState(false);
  const buyAndAddToCartRef = useRef<View | null>(null);

  const handleScroll = Animated.event(
      [{ nativeEvent: { contentOffset: { y: scrollY } } }],
      { useNativeDriver: false }
  );

  const handleLayout = (event: LayoutChangeEvent) => {
      const { y } = event.nativeEvent.layout;
      scrollY.addListener(({ value }) => {
          if (value > y) {
              setShowFixedCart(true);
          } else {
              setShowFixedCart(false);
          }
      });
  };
  const handleAskAQuestion = () => {
    try {
        
    } catch (error) {
        
    }
  }

    return (
      <SafeAreaView style={styles.container}>
        <ProductHeader />
        <Animated.ScrollView
            scrollEventThrottle={16}
            onScroll={handleScroll}
            style={{backgroundColor: '#F9F9F9'}}
        >
            <View style={{ backgroundColor: 'white', paddingHorizontal: 16, paddingTop: 30 }} >
                <ScrollView
                    horizontal
                    
                >
                    <View style={[ styles.imageContainer ]} >
                        <Image source={Number(imageUrl)} style={styles.image} />
                    </View>
                    <View style={[ styles.imageContainer ]} >
                        <Image source={Number(imageUrl)} style={styles.image} />
                    </View>
                </ScrollView>
                <ScrollView
                    horizontal
                >

                </ScrollView>
            </View>
            <View style={{ paddingHorizontal: 16, paddingTop: 15 }}>
                <Text style={styles.productName}>{name}</Text>
                <View style={[ styles.row, { gap: 10 } ]} >
                    <PinLocation />
                    <Text style={styles.location}>{locations}</Text>
                    <Text style={styles.timeAgo}>{timeAgo}</Text>
                </View>
                
                <View style={[ styles.row, { gap: 10 } ]}>
                    <ConditionIcon />
                    <Text style={styles.location}>
                        {condition}
                    </Text>
                </View>
                <View style={[ styles.row, { gap: 10 } ]} >
                    <Image source={require('../../../assets/images/naira.png')} style={{ height: 24, width: 24 }} />
                    <Text style={styles.title}>{title}.00</Text>
                    <Image source={require('../../../assets/images/DiscountImage.png')} style={{ height: 25, width: 60 }} />
                </View>
                
                <View>
                    <StockProgressBar stock={1} maxStock={10} />
                </View>

                <View style={[ styles.row, { backgroundColor: '#F5EADC', borderRadius: 6, padding: 14, gap: 5 } ]} >
                    <ShoppoingCart />
                    <Text
                        style={{ 
                            fontFamily: 'Proxima Nova',
                            fontWeight: 400,
                            fontSize: 16,
                            color: '#212121'
                        }}
                    >
                        <Text style={{ 
                            fontFamily: 'Helvetica Neue',
                            fontWeight: 700,
                            fontSize: 16,
                            color: '#212121'
                         }}>10 </Text> 
                        others have added this item to cart. Hurry!
                    </Text>
                </View>

                <View style={[ styles.row, { backgroundColor: '#F5EADC', borderRadius: 6, padding: 14, gap: 5, marginTop: 10 } ]} >
                    <FireIcon />
                    <Text
                        style={{ 
                            fontFamily: 'Proxima Nova',
                            fontWeight: 400,
                            fontSize: 16,
                            color: '#212121'
                        }}
                    >
                        <Text style={{ 
                            fontFamily: 'Helvetica Neue',
                            fontWeight: 700,
                            fontSize: 16,
                            color: '#212121'
                        }}>20 </Text> 
                        people are eyeing this item right now.
                    </Text>
                </View>

                <View ref={buyAndAddToCartRef} onLayout={handleLayout}>
                    <BuyAndAddToCart />
                </View>
                
                <TouchableOpacity
                    style={[ styles.beforebuyingAndSecurity ]}
                >
                    <View style={{ flexDirection: "row", alignItems: 'flex-start', gap: 10 }} >
                        <Image 
                            source={require('../../../assets/images/info-circle.png')}
                            style={{ width: 20, height: 20 }}
                        />
                        <View>
                            <Text style={[ styles.beforebuyingAndSecurityTitleText ]} >Before buying this item</Text>
                            <Text style={[ styles.beforebuyingAndSecuritySubTitleText ]} >Read this!</Text>
                        </View>
                    </View>
                    
                    <View>
                        <MaterialIcons name="arrow-forward-ios" size={14} color="black" />
                    </View>
                </TouchableOpacity>
                
                <TouchableOpacity
                    style={[ styles.beforebuyingAndSecurity ]}
                >
                    <View style={{ flexDirection: "row", alignItems: 'flex-start', gap: 10 }} >
                        <ShieldTick />
                        <View>
                            <Text style={[ styles.beforebuyingAndSecurityTitleText ]} >DecluttaKing shopping security</Text>

                            <View style={{ flexDirection: "column", gap: 10, marginTop: 10 }} >
                                <View style={{ flexDirection: "row", alignItems: "center", gap: 5 }} >
                                    <DotIcon /> 
                                    <Text style={[ styles.beforebuyingAndSecuritySubTitleText ]} >
                                        Safe Payment options
                                    </Text>
                                </View>

                                <View style={{ flexDirection: "row", alignItems: "center", gap: 5 }} >
                                    <DotIcon /> 
                                    <Text style={[ styles.beforebuyingAndSecuritySubTitleText ]} >
                                        24/7 Customer support
                                    </Text>
                                </View>

                                <View style={{ flexDirection: "row", alignItems: "center", gap: 5 }} >
                                    <DotIcon /> 
                                    <Text style={[ styles.beforebuyingAndSecuritySubTitleText ]} >
                                        Purchase protection
                                    </Text>
                                </View>
                            </View>
                            
                        </View>
                    </View>
                    
                    <View>
                        <MaterialIcons name="arrow-forward-ios" size={14} color="black" />
                    </View>
                </TouchableOpacity>

                <AboutItems 
                    condition="Used"
                    itemNumber={1234567890}
                    category="Mobile Phones"
                    subCategory="Samsung"
                />

                <ItemDescription
                    description="Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aliquam fermentum felis sit amet tortor pharetra commodo. Praesent eleifend diam ut est pretium eleifend."
                />

                <QuestionsAndAnswer />

                <Button 
                    title="Show more questions"
                    backgroundColor="#DEBC8E"
                    borderWidth={0}
                    onPress={handleAskAQuestion}
                />
                <SellerProfileCard />

                <SellerReviews />
                <View 
                    style={{
                    flexDirection:"row", 
                    alignItems:"center", 
                    justifyContent:"space-between",
                    marginTop:20,
                    marginBottom:10,
                    }}
                >
                    <Text style={{fontWeight:"700",fontSize:17,lineHeight:22.4, fontFamily:"Helvetica Neue"}}>Recommended Items</Text>
                    <TouchableOpacity 
                        onPress={()=> router.push("/(routes)/HomesectionViewAll/Recommend")} 
                        style={{
                            flexDirection:"row",
                            gap:10,
                            alignItems:"center", 
                            paddingRight:0
                        }}>
                        <Text 
                        style={{
                            fontWeight:"400",
                            fontSize:17,
                            lineHeight:22.4, 
                            fontFamily:"Proxima Nova", 
                            color:"#212121"
                        }}>
                            View All
                        </Text>
                        
                        <Image source={require('../../../assets/images/newimages/Vector.png')} style={{width:6,height:11}} />
                    </TouchableOpacity>
                </View>

                <Recommend />
            </View>
        </Animated.ScrollView>
        
        {/* Fixed BuyAndAddToCart when scrolled out */}
        {showFixedCart && (
            <View style={{ backgroundColor: 'white' }} >
                <FixedBuyAndAddToCart />
                <View style={[ styles.row , {justifyContent: 'center', gap: 5, marginTop: 10 }]} >
                    <MessageQuestion />
                    <Text>
                        Ask a question
                    </Text>
                </View>
            </View>
        )}
      </SafeAreaView>
    );
}

export default ProductDetailsScreen;

const styles = StyleSheet.create({
    row: {
        flexDirection: 'row',
        alignItems: 'center',
        marginTop: 5
    },
    container: {
      flex: 1,
      backgroundColor: '#FFFFFF',
    },
    imageContainer: {
        borderWidth: 1,
        borderColor: '#E9E9E9',
        borderRadius: 6,
        padding: 20,
        marginBottom: 10,
        marginRight: 20
    },
    image: {
      width: 300,
      height: 300,
    },
    title: {
      fontSize: 26,
      fontWeight: 700,
      fontFamily: 'Helvetica Neue',
    },
    productName: {
      fontSize: 22,
      marginVertical: 5,
      fontWeight: 700,
      fontFamily: 'Helvetica Neue',
      color: '#212121'
    },
    location: {
      fontSize: 16,
      color: '#212121',
      fontFamily: 'Proxima Nova',
      fontWeight: 400
    },
    timeAgo: {
      fontSize: 14,
      fontWeight: 400,
      color: '#212121',
      backgroundColor: '#F5EADC',
      paddingHorizontal: 10,
      paddingVertical: 5,
      borderRadius: 6

    },
    beforebuyingAndSecurity: {
        flexDirection: 'row',
        alignItems: 'flex-start',
        justifyContent: 'space-between',
        borderWidth: 1,
        borderColor: '#E9E9E9',
        borderRadius: 6,
        padding: 20,
        marginTop: 20,
        backgroundColor: 'white'
    },
    beforebuyingAndSecurityTitleText: {
        fontSize: 16,
        marginBottom: 5,
        fontWeight: 700,
        fontFamily: 'Helvetica Neue',
        color: '#212121' 
    },
    beforebuyingAndSecuritySubTitleText: {
        fontSize: 16,
        fontWeight: 400,
        fontFamily: 'Proxima Nova',
        color: '#474747' 
    }
  });
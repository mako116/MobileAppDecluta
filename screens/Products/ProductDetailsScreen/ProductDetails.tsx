import { Text, Image, StyleSheet, View, ScrollView, TouchableOpacity } from "react-native"
import React from 'react';
import { useLocalSearchParams } from 'expo-router';
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
import SearchQuestionAndAnswers from "@/components/ProductComponents/SearchQuestionAndAnswers";
import Button from "@/components/Button/button";
import MessageQuestion from "@/assets/svg/MessageQuestion";

const ProductDetailsScreen = () => {
  const { id, imageUrl, name, title, locations, condition, timeAgo } = useLocalSearchParams();
  const handleAskAQuestion = () => {
    try {
        
    } catch (error) {
        
    }
  }

    return (
      <SafeAreaView edges={[ 'bottom' ]} style={styles.container}>
        <ProductHeader />
        <ScrollView
            scrollEventThrottle={16}
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
                
                <SearchQuestionAndAnswers />

                {/* Questions and answer section */}
                <View style={{ marginVertical: 20 }} >
                    <Button 
                        title="Ask a question"
                        backgroundColor="#DEBC8E"
                        borderWidth={0}
                        onPress={handleAskAQuestion}
                        icon={<MessageQuestion />}
                    />
                </View>

                <Button 
                    title="Show more questions"
                    backgroundColor="#DEBC8E"
                    borderWidth={0}
                    onPress={handleAskAQuestion}
                />
            </View>
        </ScrollView>

        <View>
            <BuyAndAddToCart />
        </View>
        
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
      backgroundColor: '#F9F9F9'
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
import { Text, Image, StyleSheet, View, ScrollView } from "react-native"
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

const ProductDetailsScreen = () => {
  const { id, imageUrl, name, title, locations, condition, timeAgo } = useLocalSearchParams();

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
  });
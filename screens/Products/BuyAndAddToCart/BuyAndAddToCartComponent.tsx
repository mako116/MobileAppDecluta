import Button from "@/components/Button/button";
import QuantitySelector from "@/UI/QuantitySelector/QuantitySelector";
import { View } from "react-native";
import { useDispatch } from 'react-redux';
import { addItemToCart } from "@/redux/Redux/slice/cartSlice";
import { useState, useEffect } from 'react';
import { useLocalSearchParams } from 'expo-router';
import { Alert } from 'react-native';

const BuyAndAddToCart: React.FC = () => {
    console.log("BuyAndAddToCart component rendered");
    const dispatch = useDispatch();
    const [quantity, setQuantity] = useState(1);
    const { id } = useLocalSearchParams();
    
    useEffect(() => {
        console.log("BuyAndAddToCart - Product ID from params:", id);
        if (!id) {
            console.warn("No product ID found in URL params");
        }
    }, [id]);

    const updateQuantity = (value: number) => {
        console.log("Quantity updated to:", value);
        setQuantity(value);
    };

    const handleAddToCart = async () => {
        try {
            console.log("Add to cart clicked for product:", id, "with quantity:", quantity);
            
            if (!id || typeof id !== 'string') {
                console.error("Product ID is missing or invalid:", id);
                Alert.alert('Error', 'Product ID is missing');
                return;
            }
            
            console.log("Dispatching addItemToCart action");
            await dispatch(addItemToCart({
                productId: id,
                quantity
            }));
            
            console.log("Item successfully added to cart");
            Alert.alert('Success', 'Item added to cart successfully');
        } catch (error) {
            console.error('Add to cart error:', error);
            Alert.alert('Error', 'Failed to add item to cart');
        }
    };

    const handleBuyNow = async () => {
        try {
            console.log("Buy Now clicked for product:", id, "with quantity:", quantity);
            
            if (!id || typeof id !== 'string') {
                console.error("Product ID is missing or invalid:", id);
                Alert.alert('Error', 'Product ID is missing');
                return;
            }
            
            // First add to cart then navigate to checkout
            console.log("Dispatching addItemToCart action before checkout");
            await dispatch(addItemToCart({
                productId: id,
                quantity
            }));
            
            console.log("Item added to cart, should navigate to checkout");
            // Navigate to checkout screen
            // router.push('/(routes)/checkout');
        } catch (error) {
            console.error('Buy now error:', error);
            Alert.alert('Error', 'Failed to process purchase');
        }
    };

    return(
        <View
            style={{
                paddingTop: 20
            }}
        >
            <View style={{ flexDirection: 'row', alignItems: 'center', gap: 10, marginBottom: 10 }} >
                <QuantitySelector 
                    productId={id as string}
                    initialQuantity={quantity}
                    onQuantityChange={updateQuantity}
                />
                <View style = {{ flex: 1 }} >
                    <Button 
                        title="Add to Cart"
                        onPress={handleAddToCart}
                        backgroundColor = ''
                        borderWidth = {2}
                    />
                </View>
            </View>
            
            <Button 
                title="Buy it Now"
                onPress={handleBuyNow}
                backgroundColor = '#DEBC8E'
                borderWidth = {2}
                borderColor = 'black'
            />
        </View>
    );
};

export default BuyAndAddToCart;
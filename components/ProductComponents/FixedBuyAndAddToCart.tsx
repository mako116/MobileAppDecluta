import Button from "@/components/Button/button";
import QuantitySelector from "@/UI/QuantitySelector/QuantitySelector";
import { View } from "react-native";
import { useDispatch } from 'react-redux';
import { addItemToCart } from "@/redux/Redux/slice/cartSlice";
import { useState, useEffect } from 'react';
import { useLocalSearchParams } from 'expo-router';
import { Alert } from 'react-native';

const FixedBuyAndAddToCart: React.FC = () => {
    console.log("FixedBuyAndAddToCart component rendered");
    const dispatch = useDispatch();
    const [quantity, setQuantity] = useState(1);
    const { id } = useLocalSearchParams();
    
    useEffect(() => {
        console.log("FixedBuyAndAddToCart - Product ID from params:", id);
        if (!id) {
            console.warn("No product ID found in URL params in fixed component");
        }
    }, [id]);

    const updateQuantity = (value: number) => {
        console.log("Fixed component - Quantity updated to:", value);
        setQuantity(value);
    };
    const handleAddToCart = async () => {
        try {
            console.log("Fixed component - Add to cart clicked for product:", id, "with quantity:", quantity);
            
            if (!id || typeof id !== 'string') {
                console.error("Fixed component - Product ID is missing or invalid:", id);
                Alert.alert('Error', 'Product ID is missing');
                return;
            }
            
            console.log("Fixed component - Dispatching addItemToCart action with payload:", {
                productId: id,
                quantity
            });
            
            await dispatch(addItemToCart({
                productId: id,
                quantity
            }));
            
            console.log("Fixed component - Item successfully added to cart");
            Alert.alert('Success', 'Item added to cart successfully');
        } catch (error) {
            console.error('Fixed component - Add to cart error:', error);
            Alert.alert('Error', 'Failed to add item to cart');
        }
    };
    const handleBuyNow = async () => {
        try {
            console.log("Fixed component - Buy Now clicked for product:", id, "with quantity:", quantity);
            
            if (!id || typeof id !== 'string') {
                console.error("Fixed component - Product ID is missing or invalid:", id);
                Alert.alert('Error', 'Product ID is missing');
                return;
            }
            
            // First add to cart then navigate to checkout
            console.log("Fixed component - Dispatching addItemToCart action before checkout");
            await dispatch(addItemToCart({
                productId: id,
                quantity
            }));
            
            console.log("Fixed component - Item added to cart, should navigate to checkout");
            // Navigate to checkout screen
            // router.push('/(routes)/checkout');
        } catch (error) {
            console.error('Fixed component - Buy now error:', error);
            Alert.alert('Error', 'Failed to process purchase');
        }
    };

    return(
        <View
            style={{
                paddingTop: 20,
                paddingHorizontal: 15
            }}
        >
            <View style={{ flexDirection: 'row', alignItems: 'center', justifyContent: 'space-between', gap: 10, marginBottom: 10 }} >
                <QuantitySelector 
                    padding={10}
                    paddingHorizontal={10}
                    productId={id as string}
                    initialQuantity={quantity}
                    onQuantityChange={updateQuantity}
                />
                
                <Button 
                    title="Add to Cart"
                    onPress={handleAddToCart}
                    backgroundColor = ''
                    borderWidth = {2}
                    padding={13}
                    flex={true}
                />
                <Button 
                    title="Buy it Now"
                    onPress={handleBuyNow}
                    backgroundColor = '#DEBC8E'
                    borderWidth = {2}
                    borderColor = 'black'
                    padding={10}
                    flex={true}
                />
            </View>
        </View>
    );
};

export default FixedBuyAndAddToCart;
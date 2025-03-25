import Button from "@/components/Button/button";
import QuantitySelector from "@/UI/QuantitySelector/QuantitySelector";
import { View } from "react-native"

const FixedBuyAndAddToCart: React.FC = () => {
    const handlePurchase = async () => {
        try {
            
        } catch (error) {
            
        }
    }
    return(
        <View
            style={{
                paddingTop: 20,
                paddingHorizontal: 15
            }}
        >
            <View style={{ flexDirection: 'row', alignItems: 'center', justifyContent: 'space-between', gap: 10, marginBottom: 10 }} >
                <QuantitySelector padding={10} paddingHorizontal={10} />
                
                <Button title="Add to Cart" onPress={handlePurchase} backgroundColor = '' borderWidth = {2} padding={13} flex={true} />

                <Button title="Buy it Now" onPress={handlePurchase} backgroundColor = '#DEBC8E' borderWidth = {2} borderColor = 'black' padding={10} flex={true} />
            </View>
        </View>
    )
}

export default FixedBuyAndAddToCart;
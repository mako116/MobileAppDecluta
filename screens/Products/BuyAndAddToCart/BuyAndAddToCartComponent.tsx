import Button from "@/components/Button/button";
import QuantitySelector from "@/UI/QuantitySelector/QuantitySelector";
import { View } from "react-native"

const BuyAndAddToCart: React.FC = () => {
    const handlePurchase = async () => {
        try {
            
        } catch (error) {
            
        }
    }
    return(
        <View
            style={{
                paddingTop: 20
            }}
        >
            <View style={{ flexDirection: 'row', alignItems: 'center', gap: 10, marginBottom: 10 }} >
                <QuantitySelector />
                <View style = {{ flex: 1 }} >
                    <Button title="Add to Cart" onPress={handlePurchase} backgroundColor = '' borderWidth = {2} />
                </View>
            </View>
            
            <Button title="Buy it Now" onPress={handlePurchase} backgroundColor = '#DEBC8E' borderWidth = {2} borderColor = 'black' />
        </View>
    )
}

export default BuyAndAddToCart;
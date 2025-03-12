import React, { useState } from "react";
import { View, Text, TouchableOpacity, StyleSheet } from "react-native";

const QuantitySelector: React.FC = () => {
  const [quantity, setQuantity] = useState(1);

  const increaseQuantity = () => setQuantity(prev => prev + 1);
  const decreaseQuantity = () => setQuantity(prev => (prev > 1 ? prev - 1 : prev));

  return (
    <View style={styles.container}>
      <TouchableOpacity onPress={decreaseQuantity}>
        <Text style={styles.symbol}>−</Text>
      </TouchableOpacity>

      <Text style={styles.quantity}>{quantity}</Text>

      <TouchableOpacity onPress={increaseQuantity}>
        <Text style={styles.symbol}>+</Text>
      </TouchableOpacity>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "space-between",
    borderWidth: 1,
    borderColor: "#E0E0E0",
    borderRadius: 6,
    padding: 15,
    gap: 15
  },
  symbol: {
    fontSize: 22,
    fontWeight: 400,
  },
  quantity: {
    fontSize: 18,
    fontWeight: "500",
  },
});

export default QuantitySelector;

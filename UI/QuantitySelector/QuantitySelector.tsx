import React, { useState, useEffect } from "react";
import { View, Text, TouchableOpacity, StyleSheet } from "react-native";
import { useDispatch } from "react-redux";
import { updateItemQuantity } from "@/redux/Redux/slice/cartSlice";

interface QuantitySelectorProps {
  padding?: number;
  paddingHorizontal?: number;
  productId: string;
  initialQuantity?: number;
  onQuantityChange?: (quantity: number) => void;
}

export default function QuantitySelector({
  padding,
  paddingHorizontal,
  productId,
  initialQuantity = 1,
  onQuantityChange,
}: QuantitySelectorProps) {
  console.log("QuantitySelector rendered with productId:", productId, "initialQuantity:", initialQuantity);
  const [quantity, setQuantity] = useState(initialQuantity);
  const dispatch = useDispatch();

  useEffect(() => {
    console.log("QuantitySelector useEffect - initialQuantity changed:", initialQuantity);
    if (initialQuantity !== quantity) {
      setQuantity(initialQuantity);
    }
  }, [initialQuantity]);

  const increaseQuantity = () => {
    try {
      console.log("Increasing quantity for productId:", productId, "current quantity:", quantity);
      const newQuantity = quantity + 1;
      setQuantity(newQuantity);

      // Update in Redux and backend
      console.log("Dispatching updateItemQuantity with increment action");
      dispatch(updateItemQuantity({
        productId,
        actionType: "increment"
      }));

      // Notify parent component if needed
      if (onQuantityChange) {
        console.log("Notifying parent of quantity change:", newQuantity);
        onQuantityChange(newQuantity);
      }
    } catch (error) {
      console.error("Error in increaseQuantity:", error);
    }
  };

  const decreaseQuantity = () => {
    try {
      console.log("Decreasing quantity for productId:", productId, "current quantity:", quantity);
      if (quantity > 1) {
        const newQuantity = quantity - 1;
        setQuantity(newQuantity);

        // Update in Redux and backend
        console.log("Dispatching updateItemQuantity with decrement action");
        dispatch(updateItemQuantity({
          productId,
          actionType: "decrement"
        }));

        // Notify parent component if needed
        if (onQuantityChange) {
          console.log("Notifying parent of quantity change:", newQuantity);
          onQuantityChange(newQuantity);
        }
      } else {
        console.log("Cannot decrease quantity below 1");
      }
    } catch (error) {
      console.error("Error in decreaseQuantity:", error);
    }
  };

  return (
    <View
      style={[
        styles.container,
        {
          paddingVertical: padding ? 12 : 20,
          paddingHorizontal: paddingHorizontal ? 20 : 16,
        },
      ]}
    >
      <TouchableOpacity onPress={decreaseQuantity}>
        <Text style={styles.symbol}>−</Text>
      </TouchableOpacity>

      <Text style={styles.quantity}>{quantity}</Text>

      <TouchableOpacity onPress={increaseQuantity}>
        <Text style={styles.symbol}>+</Text>
      </TouchableOpacity>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "space-between",
    borderWidth: 1,
    borderColor: "#E0E0E0",
    borderRadius: 6,
    gap: 15,
  },
  symbol: {
    fontSize: 22,
    fontWeight: "400",
  },
  quantity: {
    fontSize: 18,
    fontWeight: "500",
  },
});
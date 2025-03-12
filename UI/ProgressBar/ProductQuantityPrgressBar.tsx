import React from "react";
import { View, Text, StyleSheet } from "react-native";

interface StockProgressBarProps {
  stock: number;
  maxStock: number;
}

const StockProgressBar: React.FC<StockProgressBarProps> = ({ stock, maxStock }) => {
  const progress = stock / maxStock; // Calculate progress percentage
  const progressColor = stock >= 5 ? "#009217" : "#D32F2F"; // Change color based on stock

  return (
    <View style={styles.container}>
      <Text style={styles.text}>Only {stock} item{stock > 1 ? "s" : ""} left in stock</Text>
      <View style={styles.progressBar}>
        <View style={[styles.progress, { width: `${progress * 100}%`, backgroundColor: progressColor }]} />
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    width: "100%",
    marginVertical: 16,
  },
  text: {
    fontSize: 16,
    fontWeight: "400",
    marginBottom: 6,
    fontFamily: 'Proxima Nova'
  },
  progressBar: {
    height: 10,
    backgroundColor: "#EAEAEA", // Light gray background
    borderRadius: 5,
    overflow: "hidden",
  },
  progress: {
    height: "100%",
    borderRadius: 5,
  },
});

export default StockProgressBar;

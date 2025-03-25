import React, { useState } from "react";
import { View, Image, TouchableOpacity, Modal, Text, StyleSheet, ScrollView } from "react-native";

const ImageGrid = ({ images }: { images: any[] }) => {
  const [modalVisible, setModalVisible] = useState(false);

  return (
    <View>
      <View style={styles.imageRow}>
        {images.slice(0, 3).map((image, index) => (
          <TouchableOpacity
            key={index}
            onPress={() => index === 2 && images.length > 3 ? setModalVisible(true) : null}
           
          >
            <Image source={image} style={styles.image} />
            {index === 2 && images.length > 3 && (
              <View style={styles.overlay}>
                <Text style={styles.overlayText}>+{images.length - 3}</Text>
              </View>
            )}
          </TouchableOpacity>
        ))}
      </View>

      {/* Modal to show all images */}
      <Modal visible={modalVisible} transparent animationType="slide">
        <View style={styles.modalContainer}>
          <TouchableOpacity onPress={() => setModalVisible(false)} style={styles.closeButton}>
            <Text style={styles.closeText}>Close</Text>
          </TouchableOpacity>
          <ScrollView>
            {images.map((image, index) => (
              <Image key={index} source={image} style={styles.modalImage} />
            ))}
          </ScrollView>
        </View>
      </Modal>
    </View>
  );
};

const styles = StyleSheet.create({
  imageRow: {
    flexDirection: "row",
    justifyContent: "space-between",
    marginVertical: 10,
  },
  image: {
    width: 110,
    height: 108,
    borderRadius: 10,
  },
  overlay: {
    ...StyleSheet.absoluteFillObject,
    backgroundColor: "rgba(0, 0, 0, 0.5)",
    justifyContent: "center",
    alignItems: "center",
    borderRadius: 10,
  },
  overlayText: {
    color: "white",
    fontSize: 20,
    fontWeight: "bold",
  },
  modalContainer: {
    flex: 1,
    backgroundColor: "white",
    padding: 20,
    alignItems: "center",
  },
  closeButton: {
    padding: 10,
    backgroundColor: "red",
    borderRadius: 5,
    marginBottom: 10,
  },
  closeText: {
    fontSize: 18,
    color: "white",
  },
  modalImage: {
    width: 300,
    height: 300,
    marginBottom: 10,
    borderRadius: 10,
  },
});

export default ImageGrid;

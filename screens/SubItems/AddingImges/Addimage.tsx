// import React, { useState } from 'react';
// import {
//   View,
//   Text,
//   TouchableOpacity,
//   StyleSheet,
//   Image,
//   Alert,
// } from 'react-native';
// import { launchImageLibrary, Asset, ImageLibraryOptions } from "react-native-image-picker";

// const ImageUploader: React.FC = () => {
//   const [selectedImages, setSelectedImages] = useState<Asset[]>([]);

//   const handleFilePicker = async () => {
    
//   };

//   const removeImage = (uri: string) => {
//     setSelectedImages((prev) => prev.filter((image) => image.uri !== uri));
//   };

//   return (
//     <View style={styles.container}>
//       <Text style={styles.label}>Upload a photo (Optional)</Text>
//       <Text style={styles.subtitle}>Not more than 3</Text>

//       {/* Image Previews */}
//       <View style={styles.imagePreviewContainer}>
//         {selectedImages.map((image, index) => (
//           <View key={index} style={styles.imageWrapper}>
//             <Image source={{ uri: image.uri }} style={styles.image} />
//             <TouchableOpacity
//               style={styles.removeButton}
//               onPress={() => removeImage(image.uri!)}
//             >
//               <Text style={styles.removeButtonText}>X</Text>
//             </TouchableOpacity>
//           </View>
//         ))}
//       </View>

//       {/* Add File Button */}
//       <TouchableOpacity style={styles.addFileButton} onPress={handleFilePicker}>
//         <Text style={styles.addFileText}>Add File</Text>
//       </TouchableOpacity>
//     </View>
//   );
// };

// const styles = StyleSheet.create({
//   container: { padding: 20 },
//   label: { fontWeight: '400', fontSize: 14, color: '#212121' },
//   subtitle: { color: '#A4A4A4', fontStyle: 'italic', fontSize: 13 },
//   imagePreviewContainer: {
//     flexDirection: 'row',
//     flexWrap: 'wrap',
//     marginVertical: 10,
//   },
//   imageWrapper: { position: 'relative', margin: 5 },
//   image: { width: 70, height: 70, borderRadius: 5 },
//   removeButton: {
//     position: 'absolute',
//     top: -5,
//     right: -5,
//     backgroundColor: 'red',
//     borderRadius: 10,
//     padding: 5,
//   },
//   removeButtonText: { color: 'white', fontWeight: 'bold', fontSize: 12 },
//   addFileButton: {
//     backgroundColor: 'white',
//     borderWidth: 1,
//     borderColor: '#E9E9E9',
//     alignItems: 'center',
//     justifyContent: 'center',
//     width: 70,
//     height: 70,
//     borderRadius: 5,
//     marginVertical: 10,
//   },
//   addFileText: { fontWeight: '400', fontSize: 12 },
// });

// export default ImageUploader;

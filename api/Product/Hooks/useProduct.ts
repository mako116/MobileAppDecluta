import { createAsyncThunk } from '@reduxjs/toolkit';
import axios from 'axios';
import { setProducts, setSelectedProduct } from '../Actions/selectedProductSlice';
import AsyncStorage from '@react-native-async-storage/async-storage';

const EXPO_PUBLIC_API_KEY = process.env.EXPO_PUBLIC_API_KEY;

interface CreateProductState {
    createdBy: string;
    price: number;
    productTitle: string;
    productImages: string[];
    video: string | null;
    availability: string;
    productDescription: string;
    productQuantity: number;
    productCondition: string;
    productCategory: string;
    productSubCategory: string;
    location: string;
    sellerName: string;
    sellerPhoneNumber: string;
    sellerAddress: string;
}

interface CreateProductQuestionState {
    productId: string;
    question: string;
}
export const createProduct = createAsyncThunk(
    'product/create',
    async (data: CreateProductState, { rejectWithValue, dispatch }) => {
        const token = await AsyncStorage.getItem('token');
        try {
            // Create a FormData object
            const formData = new FormData();
            
            // Append all non-file data as fields
            formData.append('createdBy', data.createdBy);
            formData.append('price', data.price.toString());
            formData.append('productTitle', data.productTitle);
            formData.append('productDescription', data.productDescription);
            formData.append('productQuantity', data.productQuantity.toString());
            formData.append('productCondition', data.productCondition);
            formData.append('productCategory', data.productCategory);
            formData.append('productSubCategory', data.productSubCategory);
            formData.append('location', data.location);
            formData.append('sellerName', data.sellerName);
            formData.append('sellerPhoneNumber', data.sellerPhoneNumber);
            formData.append('sellerAddress', data.sellerAddress);
            formData.append('availability', data.availability);
            
            // Append each image as a file
            for (let i = 0; i < data.productImages.length; i++) {
                // Get filename from URI
                const uri = data.productImages[i];
                const filename = uri.split('/').pop() || `image_${i}.jpg`;
                
                // Get file type from extension
                const match = /\.(\w+)$/.exec(filename);
                const type = match ? `image/${match[1]}` : 'image/jpeg';
                
                // Create file object
                const fileObj = {
                    uri: uri,
                    name: filename,
                    type: type
                };
                
                // Append to FormData with the field name expected by the backend
                formData.append('productImages', fileObj as any);
            }
            
            // Handle video if available
            if (data.video) {
                const videoUri = data.video;
                const videoName = videoUri.split('/').pop() || 'video.mp4';
                const videoType = 'video/mp4'; // Adjust based on your specific video type
                
                const videoObj = {
                    uri: videoUri,
                    name: videoName,
                    type: videoType
                };
                
                formData.append('productVideo', videoObj as any);
            }
            
            console.log('Sending form data:', formData);
            
            const response = await axios.post(
                `${EXPO_PUBLIC_API_KEY}/api/v1/products/create`,
                formData,
                {
                    headers: {
                        'Content-Type': 'multipart/form-data',
                        'Authorization': `Bearer ${token}`,
                    },
                }
            );
            
            console.log('Product creation response:', response.data);

            if (response?.data?.newProduct?._id) {
                // Dispatch the selected product to the store
                dispatch(
                    setSelectedProduct({
                        _id: response.data.newProduct._id,
                        productTitle: response.data.newProduct.productTitle,
                        createdBy: response.data.newProduct.createdBy,
                        price: response.data.newProduct.price,
                        productDescription: response.data.newProduct.productDescription,
                        productQuantity: response.data.newProduct.productQuantity,
                        productCondition: response.data.newProduct.productCondition,
                        productCategory: response.data.newProduct.productCategory,
                        productSubCategory: response.data.newProduct.productSubCategory,
                        location: response.data.newProduct.location,
                        sellerName: response.data.newProduct.sellerName,
                        sellerPhoneNumber: response.data.newProduct.sellerPhoneNumber,
                        sellerAddress: response.data.newProduct.sellerAddress
                    })
                );

                return {
                    productId: response.data.newProduct._id,
                    productTitle: response.data.newProduct.productTitle,
                };
            } else {
                return rejectWithValue('Product creation failed: No product ID in response');
            }
        } catch (error: any) {
            console.error('Product creation error:', error);
            return rejectWithValue(error.response?.data?.message || 'Product creation failed');
        }
    }
);
export const createProductQuestion = createAsyncThunk(
    'product/createQuestion',
    async (data: CreateProductQuestionState, { rejectWithValue }) => {
        try {
            const token = await AsyncStorage.getItem('token');
            const response = await axios.post(
                `${EXPO_PUBLIC_API_KEY}/api/v1/products/question/create`,
                data,
                {
                    headers: {
                        'Content-Type': 'application/json',
                        'Authorization': `Bearer ${token}`,
                    },
                }
            );

            return response.data;
        } catch (error: any) {
            console.error('Product question creation error:', error);
            return rejectWithValue(error.response?.data?.message || 'Product question creation failed');
        }
    }
)

export const getProducts = createAsyncThunk(
    'product/getProducts',
    async (_, { rejectWithValue, dispatch }) => {
        const PAGE_SIZE = 1;
        const ITEMS = 3
        try {
            const token = await AsyncStorage.getItem('token');
            const response = await axios.get(
                `${EXPO_PUBLIC_API_KEY}/api/v1/products?page=${PAGE_SIZE}&limit=${ITEMS}`,
                {
                    headers: {
                        'Content-Type': 'application/json',
                        'Authorization': `Bearer ${token}`,
                    },
                }
            );
            dispatch(setProducts(response.data.products));
            

            return response.data;
        } catch (error: any) {
            console.error('Get products error:', error);
            return rejectWithValue(error.response?.data?.message || 'Failed to fetch products');
        }
    }
)

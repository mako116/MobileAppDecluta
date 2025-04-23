import { createAsyncThunk } from '@reduxjs/toolkit';
import axios from 'axios';
import { setSelectedProduct } from '../Actions/selectedProductSlice';

const EXPO_PUBLIC_API_KEY = process.env.EXPO_PUBLIC_API_KEY;

interface CreateProductState {
    createdBy: string;
    price: number;
    productTitle: string;
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
        try {
            const response = await axios.post(`${EXPO_PUBLIC_API_KEY}/api/v1/products/create`, data);

            if (response?.data && response?.data._id) {
                // Dispatch the selected product to the store
                dispatch(
                    setSelectedProduct({
                        _id: response.data._id,
                        productTitle: response.data.productTitle,
                        createdBy: '',
                        price: 0,
                        productDescription: '',
                        productQuantity: 0,
                        productCondition: '',
                        productCategory: '',
                        productSubCategory: '',
                        loaction: '',
                        sellerName: '',
                        sellerPhoneNumber: '',
                        sellerAddress: ''
                    })
                );

                return {
                    productId: response.data._id,
                    productTitle: response.data.productTitle,
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
            const response = await axios.post(`${EXPO_PUBLIC_API_KEY}/api/v1/products/question/create`, data);

            return response.data;
        } catch (error: any) {
            console.error('Product question creation error:', error);
            return rejectWithValue(error.response?.data?.message || 'Product question creation failed');
        }
    }
)

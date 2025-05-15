// src/redux/features/cart/cartSlice.ts
import { createSlice, createAsyncThunk } from '@reduxjs/toolkit';
import AsyncStorage from '@react-native-async-storage/async-storage';
import axios from 'axios';

// Define the cart item type
interface CartItem {
  productId: string;
  quantity: number;
  name?: string;
  price?: number;
  imageUrl?: string;
}

// Define the cart state type
interface CartState {
  items: CartItem[];
  loading: boolean;
  error: string | null;
  totalItems: number;
  totalPrice: number;
}

const initialState: CartState = {
  items: [],
  loading: false,
  error: null,
  totalItems: 0,
  totalPrice: 0
};

const EXPO_PUBLIC_API_KEY = process.env.EXPO_PUBLIC_API_KEY;

// Async thunks for cart actions
export const fetchCart = createAsyncThunk(
  'cart/fetchCart',
  async (_, { rejectWithValue }) => {
    try {
      const token = await AsyncStorage.getItem('token');
      const userId = await AsyncStorage.getItem('userId');
      
      if (!token) {
        console.log('Fetch cart error: No token found');
        return rejectWithValue('No token found');
      }
      
      if (!userId) {
        console.log('Fetch cart error: No user ID found');
        return rejectWithValue('No user ID found');
      }

      console.log(`Fetching cart for user ${userId}`);
      const response = await axios.get(`${EXPO_PUBLIC_API_KEY}/api/v1/cart/${userId}`, {
        
        headers: {
          Authorization: `Bearer ${token}`,
        },
      });
      console.log('Cart fetch successful:', response.data);

      console.log('Cart fetch successful:', response.data);
      return response.data;
    } catch (error: any) {
      console.error('Fetch cart error:', error);
      console.error('Error details:', {
        message: error.message,
        status: error.response?.status,
        responseData: error.response?.data,
        stack: error.stack
      });
      return rejectWithValue(error.response?.data?.message || 'Failed to fetch cart');
    }
  }
);

export const addItemToCart = createAsyncThunk(
    'cart/addItem',
    async ({ productId, quantity = 1 }: { productId: string; quantity?: number }, { rejectWithValue }) => {
      try {
        const token = await AsyncStorage.getItem('token');
        const userId = await AsyncStorage.getItem('userId');
        
        if (!token) {
          console.log('Add to cart error: No token found');
          return rejectWithValue('No token found');
        }
        
        if (!userId) {
          console.log('Add to cart error: No user ID found');
          return rejectWithValue('No user ID found');
        }
  
        console.log(`Adding item ${productId} to cart for user ${userId} with quantity ${quantity}`);
        console.log('Request payload:', { productId, quantity }); // Log the exact payload being sent
        
        const response = await axios.post(
          `${EXPO_PUBLIC_API_KEY}/api/v1/cart/add-item/${userId}`,
          { productId, quantity },
          {
            headers: {
              Authorization: `Bearer ${token}`,
              'Content-Type': 'application/json'
            },
          }
        );
  
        console.log('Add to cart successful:', response.data);
        return response.data;
      } catch (error: any) {
        console.error('Add to cart error:', error);
        console.error('Error details:', {
          message: error.message,
          status: error.response?.status,
          responseData: error.response?.data,
          stack: error.stack
        });
        
        // If the error is due to a 400 response with specific error info, log it clearly
        if (error.response && error.response.status === 400) {
          console.error('API validation error:', error.response.data);
        }
        
        return rejectWithValue(error.response?.data?.message || 'Failed to add item to cart');
      }
    }
  );
  

export const removeItemFromCart = createAsyncThunk(
  'cart/removeItem',
  async (productId: string, { rejectWithValue }) => {
    try {
      const token = await AsyncStorage.getItem('token');
      const userId = await AsyncStorage.getItem('userId');
      
      if (!token) {
        console.log('Remove from cart error: No token found');
        return rejectWithValue('No token found');
      }
      
      if (!userId) {
        console.log('Remove from cart error: No user ID found');
        return rejectWithValue('No user ID found');
      }

      console.log(`Removing item ${productId} from cart for user ${userId}`);
      const response = await axios.delete(
        `${EXPO_PUBLIC_API_KEY}/api/v1/cart/remove-item/${userId}`,
        {
          headers: {
            Authorization: `Bearer ${token}`,
            'Content-Type': 'application/json'
          },
          data: { productId }
        }
      );

      console.log('Remove from cart successful:', response.data);
      return { productId, ...response.data };
    } catch (error: any) {
      console.error('Remove from cart error:', error);
      console.error('Error details:', {
        message: error.message,
        status: error.response?.status,
        responseData: error.response?.data,
        stack: error.stack
      });
      return rejectWithValue(error.response?.data?.message || 'Failed to remove item from cart');
    }
  }
);

export const updateItemQuantity = createAsyncThunk(
  'cart/updateQuantity',
  async ({ productId, actionType }: { productId: string; actionType: 'increment' | 'decrement' }, { rejectWithValue }) => {
    try {
      const token = await AsyncStorage.getItem('token');
      const userId = await AsyncStorage.getItem('userId');
      
      if (!token) {
        console.log('Update quantity error: No token found');
        return rejectWithValue('No token found');
      }
      
      if (!userId) {
        console.log('Update quantity error: No user ID found');
        return rejectWithValue('No user ID found');
      }

      console.log(`Updating quantity for item ${productId} in cart for user ${userId}, action: ${actionType}`);
      const response = await axios.patch(
        `${EXPO_PUBLIC_API_KEY}/api/v1/cart/update-item-quantity/${userId}`,
        { productId, actionType },
        {
          headers: {
            Authorization: `Bearer ${token}`,
            'Content-Type': 'application/json'
          },
        }
      );

      console.log('Update quantity successful:', response.data);
      return { productId, actionType, ...response.data };
    } catch (error: any) {
      console.error('Update quantity error:', error);
      console.error('Error details:', {
        message: error.message,
        status: error.response?.status,
        responseData: error.response?.data,
        stack: error.stack
      });
      return rejectWithValue(error.response?.data?.message || 'Failed to update quantity');
    }
  }
);

export const clearCart = createAsyncThunk(
  'cart/clear',
  async (_, { rejectWithValue }) => {
    try {
      const token = await AsyncStorage.getItem('token');
      const userId = await AsyncStorage.getItem('userId');
      
      if (!token) {
        console.log('Clear cart error: No token found');
        return rejectWithValue('No token found');
      }
      
      if (!userId) {
        console.log('Clear cart error: No user ID found');
        return rejectWithValue('No user ID found');
      }

      console.log(`Clearing cart for user ${userId}`);
      const response = await axios.delete(
        `${EXPO_PUBLIC_API_KEY}/api/v1/cart/clear/${userId}`,
        {
          headers: {
            Authorization: `Bearer ${token}`,
          }
        }
      );

      console.log('Clear cart successful:', response.data);
      return response.data;
    } catch (error: any) {
      console.error('Clear cart error:', error);
      console.error('Error details:', {
        message: error.message,
        status: error.response?.status,
        responseData: error.response?.data,
        stack: error.stack
      });
      return rejectWithValue(error.response?.data?.message || 'Failed to clear cart');
    }
  }
);

// Helper function to calculate totals
const calculateTotals = (items: CartItem[]) => {
  return items.reduce(
    (acc, item) => {
      acc.totalItems += item.quantity;
      acc.totalPrice += (item.price || 0) * item.quantity;
      return acc;
    },
    { totalItems: 0, totalPrice: 0 }
  );
};

// Create the cart slice
const cartSlice = createSlice({
  name: 'cart',
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    // Fetch cart
    builder.addCase(fetchCart.pending, (state) => {
      console.log('fetchCart: pending');
      state.loading = true;
      state.error = null;
    });
    builder.addCase(fetchCart.fulfilled, (state, action) => {
      console.log('fetchCart: fulfilled', action.payload);
      state.loading = false;
      state.items = action.payload.items || [];
      const { totalItems, totalPrice } = calculateTotals(state.items);
      state.totalItems = totalItems;
      state.totalPrice = totalPrice;
    });
    builder.addCase(fetchCart.rejected, (state, action) => {
      console.log('fetchCart: rejected', action.payload);
      state.loading = false;
      state.error = action.payload as string;
    });

    // Add item to cart
    builder.addCase(addItemToCart.pending, (state) => {
      console.log('addItemToCart: pending');
      state.loading = true;
      state.error = null;
    });
    builder.addCase(addItemToCart.fulfilled, (state, action) => {
      console.log('addItemToCart: fulfilled', action.payload);
      state.loading = false;
      
      const { item, cart } = action.payload;
      
      // If the backend returns the entire updated cart
      if (cart && Array.isArray(cart.items)) {
        state.items = cart.items;
      } 
      // If only the added item is returned
      else if (item) {
        const existingItem = state.items.find(i => i.productId === item.productId);
        if (existingItem) {
          existingItem.quantity += item.quantity;
        } else {
          state.items.push(item);
        }
      }
      
      const { totalItems, totalPrice } = calculateTotals(state.items);
      state.totalItems = totalItems;
      state.totalPrice = totalPrice;
    });
    builder.addCase(addItemToCart.rejected, (state, action) => {
      console.log('addItemToCart: rejected', action.payload);
      state.loading = false;
      state.error = action.payload as string;
    });

    // Remove item from cart
    builder.addCase(removeItemFromCart.pending, (state) => {
      console.log('removeItemFromCart: pending');
      state.loading = true;
      state.error = null;
    });
    builder.addCase(removeItemFromCart.fulfilled, (state, action) => {
      console.log('removeItemFromCart: fulfilled', action.payload);
      state.loading = false;
      
      // Remove the item from the cart
      state.items = state.items.filter(item => item.productId !== action.payload.productId);
      
      const { totalItems, totalPrice } = calculateTotals(state.items);
      state.totalItems = totalItems;
      state.totalPrice = totalPrice;
    });
    builder.addCase(removeItemFromCart.rejected, (state, action) => {
      console.log('removeItemFromCart: rejected', action.payload);
      state.loading = false;
      state.error = action.payload as string;
    });

    // Update item quantity
    builder.addCase(updateItemQuantity.pending, (state) => {
      console.log('updateItemQuantity: pending');
      state.loading = true;
      state.error = null;
    });
    builder.addCase(updateItemQuantity.fulfilled, (state, action) => {
      console.log('updateItemQuantity: fulfilled', action.payload);
      state.loading = false;
      
      const { productId, actionType } = action.payload;
      const item = state.items.find(item => item.productId === productId);
      
      if (item) {
        if (actionType === "increment") {
          item.quantity += 1;
        } else if (actionType === "decrement") {
          item.quantity = Math.max(1, item.quantity - 1);
        }
      }
      
      const { totalItems, totalPrice } = calculateTotals(state.items);
      state.totalItems = totalItems;
      state.totalPrice = totalPrice;
    });
    builder.addCase(updateItemQuantity.rejected, (state, action) => {
      console.log('updateItemQuantity: rejected', action.payload);
      state.loading = false;
      state.error = action.payload as string;
    });

    // Clear cart
    builder.addCase(clearCart.pending, (state) => {
      console.log('clearCart: pending');
      state.loading = true;
      state.error = null;
    });
    builder.addCase(clearCart.fulfilled, (state) => {
      console.log('clearCart: fulfilled');
      state.loading = false;
      state.items = [];
      state.totalItems = 0;
      state.totalPrice = 0;
    });
    builder.addCase(clearCart.rejected, (state, action) => {
      console.log('clearCart: rejected', action.payload);
      state.loading = false;
      state.error = action.payload as string;
    });
  },
});

export default cartSlice.reducer;
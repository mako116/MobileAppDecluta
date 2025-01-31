 
import axios from "axios";
// EXPO_PUBLIC_API_KEY = process.env.EXPO_PUBLIC_API_KEY;
const EXPO_PUBLIC_API_KEY = process.env.EXPO_PUBLIC_API_KEY; // Replace with your API URL

// API call to fetch the cart items
export const fetchCartItems = async () => {
  try {
    const response = await axios.get(`${EXPO_PUBLIC_API_KEY}/items`);
    return response.data;
  } catch (error) {
    throw new Error("Error fetching cart items");
  }
};

// API call to add item to cart
export const addItemToCart = async (item: any) => {
  try {
    const response = await axios.post(`${EXPO_PUBLIC_API_KEY}/add`, item);
    return response.data;
  } catch (error) {
    throw new Error("Error adding item to cart");
  }
};

// API call to remove item from cart
export const removeItemFromCart = async (id: string) => {
  try {
    const response = await axios.delete(`${EXPO_PUBLIC_API_KEY}/remove/${id}`);
    return response.data;
  } catch (error) {
    throw new Error("Error removing item from cart");
  }
};

// API call to update item count
export const updateItemCount = async (id: string, count: number) => {
  try {
    const response = await axios.put(`${EXPO_PUBLIC_API_KEY}/update/${id}`, { count });
    return response.data;
  } catch (error) {
    throw new Error("Error updating item count");
  }
};

// API call to apply coupon
export const applyCoupon = async (couponCode: string) => {
  try {
    const response = await axios.post(`${EXPO_PUBLIC_API_KEY}/applyCoupon`, { couponCode });
    return response.data;
  } catch (error) {
    throw new Error("Error applying coupon");
  }
};

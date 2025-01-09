import React, { createContext, useState, useContext, useEffect, ReactNode } from "react";
import { fetchCartItems, addItemToCart, removeItemFromCart, updateItemCount, applyCoupon } from "../Cart/CartApi";

interface CartItem {
  id: string;
  name: string;
  count: number;
  price: number;
  totalPrice: number;
}

interface CartContextType {
  cart: CartItem[];
  addToCart: (item: CartItem) => void;
  removeFromCart: (id: string) => void;
  increaseCount: (id: string) => void;
  decreaseCount: (id: string) => void;
  applyCoupon: (couponCode: string) => void;
  checkoutPrice: number;
}

// Add the type for children prop
interface CartProviderProps {
  children: ReactNode;
}

const CartContext = createContext<CartContextType | undefined>(undefined);

export const CartProvider: React.FC<CartProviderProps> = ({ children }) => {
  const [cart, setCart] = useState<CartItem[]>([]);
  const [checkoutPrice, setCheckoutPrice] = useState<number>(0);

  // Fetch cart items on initial load
  useEffect(() => {
    const loadCart = async () => {
      try {
        const data = await fetchCartItems();
        setCart(data.items); // assuming the response structure
        calculateCheckoutPrice(data.items);
      } catch (error) {
        console.error("Error loading cart:", error);
      }
    };

    loadCart();
  }, []);

  // Calculate total price
  const calculateCheckoutPrice = (cartItems: CartItem[]) => {
    const total = cartItems.reduce((total, item) => total + item.totalPrice, 0);
    setCheckoutPrice(total);
  };

  const addToCart = async (item: CartItem) => {
    try {
      const updatedCart = await addItemToCart(item);
      setCart(updatedCart.items); // assuming the response structure
      calculateCheckoutPrice(updatedCart.items);
    } catch (error) {
      console.error("Error adding item to cart:", error);
    }
  };

  const removeFromCart = async (id: string) => {
    try {
      const updatedCart = await removeItemFromCart(id);
      setCart(updatedCart.items); // assuming the response structure
      calculateCheckoutPrice(updatedCart.items);
    } catch (error) {
      console.error("Error removing item from cart:", error);
    }
  };

  const increaseCount = async (id: string) => {
    try {
      const updatedCart = await updateItemCount(id, 1); // Increment by 1
      setCart(updatedCart.items); // assuming the response structure
      calculateCheckoutPrice(updatedCart.items);
    } catch (error) {
      console.error("Error increasing item count:", error);
    }
  };

  const decreaseCount = async (id: string) => {
    try {
      const updatedCart = await updateItemCount(id, -1); // Decrement by 1
      setCart(updatedCart.items); // assuming the response structure
      calculateCheckoutPrice(updatedCart.items);
    } catch (error) {
      console.error("Error decreasing item count:", error);
    }
  };

  const applyCouponCode = async (couponCode: string) => {
    try {
      const result = await applyCoupon(couponCode);
      setCheckoutPrice(result.newTotal); // assuming the response structure
    } catch (error) {
      console.error("Error applying coupon:", error);
    }
  };

  return (
    <CartContext.Provider
      value={{
        cart,
        addToCart,
        removeFromCart,
        increaseCount,
        decreaseCount,
        applyCoupon: applyCouponCode,
        checkoutPrice,
      }}
    >
      {children}
    </CartContext.Provider>
  );
};

export const useCart = (): CartContextType => {
  const context = useContext(CartContext);
  if (!context) {
    throw new Error("useCart must be used within a CartProvider");
  }
  return context;
};

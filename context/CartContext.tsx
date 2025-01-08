import React, { createContext, useState, ReactNode, useContext } from "react";

// Define types for CartItem and CartContext
interface CartItem {
  id: string;
  name: string;
  count: number;
  price: number;
  image: any;
  used: string;
  description: string;
  location: string;
  totalPrice: number;
  rewardPrice: number;
  checkout: number;
  isAvailable: boolean;  // New property to track availability
}


interface CartContextType {
  cart: CartItem[];
  increaseCount: (id: string) => void;
  decreaseCount: (id: string) => void;
  removeFromCart: (id: string) => void;
  addToCart: (item: CartItem) => void;
  applyRewardsBonus: (apply: boolean) => void; 
  checkoutPrice: number; // Added this to track the checkout price
}

// Create the context
const CartContext = createContext<CartContextType | undefined>(undefined);

// Define CartProvider with children prop
interface CartProviderProps {
  children: ReactNode;
}

export const CartProvider: React.FC<CartProviderProps> = ({ children }) => {
  const [cart, setCart] = useState<CartItem[]>([]);
  const [isBonusApplied, setIsBonusApplied] = useState<boolean>(false);

  // Calculate total checkout price based on whether reward bonus is applied
  const getCheckoutPrice = () => {
    const totalCartPrice = cart.reduce((total, item) => total + item.totalPrice, 0);
    if (isBonusApplied) {
      const bonus = 500; // ₦500.00 rewards bonus
      const adjustedTotal = Math.max(totalCartPrice - bonus, 0); // Prevent negative total
      return adjustedTotal;
    }
    return totalCartPrice;
  };

   

  const addToCart = (item: CartItem) => {
    setCart((prevCart) => {
      const itemIndex = prevCart.findIndex((cartItem) => cartItem.id === item.id);
      if (itemIndex === -1) {
        return [...prevCart, { ...item, count: 1, totalPrice: item.price, checkout: item.price }];
      } else {
        const updatedCart = [...prevCart];
        // updatedCart[itemIndex].count += 1;
        updatedCart[itemIndex].totalPrice = updatedCart[itemIndex].count * item.price;
        return updatedCart;
      }
    });
  };

  const increaseCount = (id: string) => {
    setCart((prevCart) =>
      prevCart.map((item) =>
        item.id === id
          ? { ...item, count: item.count + 1, totalPrice: (item.count + 1) * item.price }
          : item
      )
    );
  };

  const decreaseCount = (id: string) => {
    setCart((prevCart) =>
      prevCart.map((item) =>
        item.id === id
          ? { ...item, count: Math.max(item.count - 1, 1), totalPrice: Math.max(item.count - 1, 1) * item.price }
          : item
      )
    );
  };

  const removeFromCart = (id: string) => {
    setCart((prevCart) => prevCart.filter((item) => item.id !== id));
  };

  const applyRewardsBonus = (apply: boolean) => {
    setIsBonusApplied(apply);
    setCart((prevCart) => {
      const totalCartPrice = prevCart.reduce((total, item) => total + item.totalPrice, 0);
      const bonus = 500; // ₦500.00 rewards bonus
      const adjustedTotal = apply ? Math.max(totalCartPrice - bonus, 0) : totalCartPrice;
      return prevCart.map((item) => ({
        ...item,
        rewardPrice: apply ? bonus : 0, // Apply or remove reward price
        checkout: apply
          ? (item.totalPrice / totalCartPrice) * adjustedTotal // Adjust checkout price based on reward
          : item.totalPrice, // Reset to original price if reward is removed
      }));
    });
  };
  


  return (
    <CartContext.Provider
      value={{
        cart,
        increaseCount,
        decreaseCount,
        removeFromCart,
        addToCart,
        applyRewardsBonus: applyRewardsBonus,
        checkoutPrice: getCheckoutPrice(),
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

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
  isAvailable: boolean;
}

interface CartContextType {
  cart: CartItem[];
  increaseCount: (id: string) => void;
  decreaseCount: (id: string) => void;
  removeFromCart: (id: string) => void;
  addToCart: (item: CartItem) => void;
  toggleWelcomeBonus: () => void;
  toggleRewardBonus: () => void;
  isWelcomeBonusApplied: boolean;
  isRewardBonusApplied: boolean;
  totalPriceWithBonuses: number;
  checkoutPrice: number;
}

// Create the context
const CartContext = createContext<CartContextType | undefined>(undefined);

interface CartProviderProps {
  children: ReactNode;
}

export const CartProvider: React.FC<CartProviderProps> = ({ children }) => {
  const [cart, setCart] = useState<CartItem[]>([]);
  const [isWelcomeBonusApplied, setIsWelcomeBonusApplied] = useState<boolean>(false);
  const [isRewardBonusApplied, setIsRewardBonusApplied] = useState<boolean>(false);

  // Calculate the total checkout price considering both bonuses
  const getCheckoutPrice = () => {
    const totalCartPrice = cart.reduce((total, item) => total + item.totalPrice, 0);
    let adjustedTotal = totalCartPrice;

    // Apply welcome bonus if it's enabled
    if (isWelcomeBonusApplied) {
      const welcomeBonus = 500; // ₦500.00 welcome bonus
      adjustedTotal = Math.max(adjustedTotal - welcomeBonus, 0); // Prevent negative total
    }

    // Apply reward bonus if it's enabled
    if (isRewardBonusApplied) {
      const rewardBonus = 300; // ₦300.00 reward bonus
      adjustedTotal = Math.max(adjustedTotal - rewardBonus, 0); // Prevent negative total
    }

    return adjustedTotal;
  };

  const addToCart = (item: CartItem) => {
    setCart((prevCart) => {
      const itemIndex = prevCart.findIndex((cartItem) => cartItem.id === item.id);
      if (itemIndex === -1) {
        return [...prevCart, { ...item, count: 1, totalPrice: item.price }];
      } else {
        const updatedCart = [...prevCart];
        // updatedCart[itemIndex].count += 1;
        updatedCart[itemIndex].totalPrice = updatedCart[itemIndex].count * updatedCart[itemIndex].price;
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

  // Toggle for applying the welcome bonus
  const toggleWelcomeBonus = () => {
    setIsWelcomeBonusApplied((prev) => !prev);
  };

  // Toggle for applying the reward bonus
  const toggleRewardBonus = () => {
    setIsRewardBonusApplied((prev) => !prev);
  };

  return (
    <CartContext.Provider
      value={{
        cart,
        increaseCount,
        decreaseCount,
        removeFromCart,
        addToCart,
        toggleWelcomeBonus,
        toggleRewardBonus,
        isWelcomeBonusApplied,
        isRewardBonusApplied,
        totalPriceWithBonuses: getCheckoutPrice(),
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

import React, { createContext, useContext, useState, ReactNode } from 'react';

// Define the Offer type
interface Offer {
  title: ReactNode;
  expiryDate: ReactNode;
  id: number;
  Discount: string;
  description: string;
  numberOfOffers: number;
}

// Define the OfferContext properties
interface OfferContextProps {
  offers: Offer[];
  addOffer: (offer: Offer) => void;
  removeOffer: (id: number) => void;
  clearOffers: () => void;
}

// Create the context
const OfferContext = createContext<OfferContextProps | undefined>(undefined);

// Create the OfferProvider
export const OfferProvider: React.FC<{ children: React.ReactNode }> = ({ children }) => {
  // Sample offers for demonstration
  const initialOffers: Offer[] = [
    {
      id: 1,
      Discount: "Get 2% cashback!",
      title: "WELCOME",
      description: "Earn 2% of your first purchase back as cash, on us!",
      expiryDate: "Aug 10 2024",
      numberOfOffers: 10,
    },
    {
      id: 2,
      Discount: "Get ₦500 cashback!", 
      title: "BUYER’S BLAST",
      description: "Spend ₦20,000 or more and get ₦500 cashback! Limited time only, so shop now and save!",
      expiryDate: "Nov 10 2024",
      numberOfOffers: 20,
    },
  ];

  const [offers, setOffers] = useState<Offer[]>(initialOffers);

  // Add an offer
  const addOffer = (offer: Offer) => {
    setOffers((prev) => [...prev, offer]);
  };

  // Remove an offer by ID
  const removeOffer = (id: number) => {
    setOffers((prev) => prev.filter((offer) => offer.id !== id));
  };

  // Clear all offers
  const clearOffers = () => {
    setOffers([]);
  };

  return (
    <OfferContext.Provider value={{ offers, addOffer, removeOffer, clearOffers }}>
      {children}
    </OfferContext.Provider>
  );
};

// Hook to use the Offer context
export const useOffer = () => {
  const context = useContext(OfferContext);
  if (!context) {
    throw new Error('useOffer must be used within an OfferProvider');
  }
  return context;
};

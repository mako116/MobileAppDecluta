import { createSlice, PayloadAction } from "@reduxjs/toolkit";

interface Item {
    _id: string;
    createdBy: string;
    price: number;
    productTitle: string;
    productDescription: string;
    productQuantity: number;
    productCondition: string;
    productCategory: string;
    productSubCategory: string;
    loaction: string;
    sellerName: string;
    sellerPhoneNumber: string;
    sellerAddress: string;
}

const selectedProductSlice = createSlice({
    name: "selectedProduct",
    initialState: null as Item | null,
    reducers: {
        setSelectedProduct: (_state, action: PayloadAction<Item>) => {
          return action.payload;
        },
        clearSelectedProduct: () => null,
    
        // Optional: If you want to "edit" the selected product
        editProduct: (state, action: PayloadAction<Partial<Item>>) => {
          if (state) {
            return { ...state, ...action.payload };
          }
          return state;
        },
    
        // Optional: If you want to "delete" the selected product by ID
        deleteProduct: (state, action: PayloadAction<string>) => {
          if (state && state._id === action.payload) {
            return null;
          }
          return state;
        },
      },
});

export const {
    setSelectedProduct,
    deleteProduct,
    clearSelectedProduct,
    editProduct
} = selectedProductSlice.actions;

export default selectedProductSlice.reducer;

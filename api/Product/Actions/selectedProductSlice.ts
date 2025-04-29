import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import persistReducer from "redux-persist/es/persistReducer";

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
  location: string;
  sellerName: string;
  sellerPhoneNumber: string;
  sellerAddress: string;
}

interface ProductState {
  products: Item[];
  selectedProduct: Item | null;
}

const initialState: ProductState = {
  products: [],
  selectedProduct: null,
};

const persistConfig = {
  key: "productState",
  storage: require("redux-persist/lib/storage").default,
};

const productSlice = createSlice({
  name: "product",
  initialState,
  reducers: {
    // List actions
    setProducts: (state, action: PayloadAction<Item[]>) => {
      state.products = action.payload;
    },
    clearProducts: (state) => {
      state.products = [];
    },

    // Selected product actions
    setSelectedProduct: (state, action: PayloadAction<Item>) => {
      state.selectedProduct = action.payload;
    },
    clearSelectedProduct: (state) => {
      state.selectedProduct = null;
    },
    editSelectedProduct: (state, action: PayloadAction<Partial<Item>>) => {
      if (state.selectedProduct) {
        state.selectedProduct = { ...state.selectedProduct, ...action.payload };
      }
    },
    deleteSelectedProduct: (state, action: PayloadAction<string>) => {
      if (state.selectedProduct && state.selectedProduct._id === action.payload) {
        state.selectedProduct = null;
      }
    },
  },
});

export const {
  setProducts,
  clearProducts,
  setSelectedProduct,
  clearSelectedProduct,
  editSelectedProduct,
  deleteSelectedProduct,
} = productSlice.actions;

export default persistReducer(persistConfig, productSlice.reducer);

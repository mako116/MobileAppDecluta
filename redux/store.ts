import { configureStore } from '@reduxjs/toolkit';
import { persistStore, persistReducer } from 'redux-persist';
import AsyncStorage from '@react-native-async-storage/async-storage';
import authReducer from '../redux/slices/AuthSlice';
import productReducer from '../api/Product/Actions/selectedProductSlice';
import { combineReducers } from 'redux';

const persistConfig = {
  key: 'root',
  storage: AsyncStorage,
  whitelist: ['auth'], // Persist only the auth slice
};

const rootReducer = combineReducers({
  auth: persistReducer(persistConfig, authReducer),
  products: persistReducer(persistConfig, productReducer)
});

export const store = configureStore({
  reducer: rootReducer,
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware({
      serializableCheck: false, // Needed for redux-persist
    }),
});

export const persistor = persistStore(store);
export type RootState = ReturnType<typeof store.getState> & {

  products: {

    products: any[]; // Replace `any[]` with the actual type of your product array

  };

};
export type AppDispatch = typeof store.dispatch;

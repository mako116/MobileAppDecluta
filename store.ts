// import { configureStore } from "@reduxjs/toolkit";
// import { combineReducers } from "redux";
// import { persistStore, persistReducer } from "redux-persist";
// import storage from "redux-persist/lib/storage";
// // import { FLUSH, REHYDRATE, PAUSE, PERSIST, PURGE, REGISTER } from 'redux-persist/es/constants';
// import { PERSIST } from 'redux-persist/es/constants';

// import authSlice from './components/Auth/Actions/authSlice'



// // Create the root reducer
// const rootReducer = combineReducers({
//   auth: authSlice,
// });

// // Create the persist config
// const persistConfig = {
//   key: "root",
//   storage,
// };

// // Create the persisted reducer
// const persistedReducer = persistReducer(persistConfig, rootReducer);

// const middleware = (getDefaultMiddleware: any) => ({
//   ...getDefaultMiddleware,
//   serializableCheck: {
//     // ignoredActions: [FLUSH, REHYDRATE, PAUSE, PERSIST, PURGE, REGISTER], // Ignore specific Redux Persist actions
//     ignoredActions: [ PERSIST], // Ignore specific Redux Persist actions
//   },
// });

// // Create the store
// const store = configureStore({
//   reducer: persistedReducer,
//   middleware,
// });

// // Create the persisted store
// const persistor = persistStore(store);

// export type RootState = ReturnType<typeof store.getState>;

// export { store, persistor };

import { configureStore } from '@reduxjs/toolkit';
import { persistStore, persistReducer, PERSIST } from 'redux-persist';
import storage from '@react-native-async-storage/async-storage';
import { combineReducers } from "redux";
import authSlice from './components/Auth/Actions/authSlice'

const persistConfig = {
  key: 'root',
  storage,
};

const rootReducer = combineReducers({
  auth: authSlice,
});

const persistedReducer = persistReducer(persistConfig, rootReducer);

const middleware = (getDefaultMiddleware: any) => 
  getDefaultMiddleware({
    serializableCheck: {
      ignoredActions: [PERSIST], // Ignore specific Redux Persist actions
    },
  });

const store = configureStore({
  reducer: persistedReducer,
  middleware,
});

const persistor = persistStore(store);

export type RootState = ReturnType<typeof store.getState>;

export { store, persistor };

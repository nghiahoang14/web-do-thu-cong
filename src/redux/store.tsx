import { configureStore } from '@reduxjs/toolkit';
import { combineReducers } from 'redux';
import { persistStore, persistReducer } from 'redux-persist';
import authReducer from './authSlice';
import storage from 'redux-persist/lib/storage'; // dùng localStorage

import cartReducer from './cartSlice';

// Combine reducer
const rootReducer = combineReducers({
  cart: cartReducer,
  auth: authReducer,
});

// Config persist
const persistConfig = {
  key: 'root',
  storage,
  whitelist: ['cart'], // chỉ lưu cart
};

// Tạo persisted reducer
const persistedReducer = persistReducer(persistConfig, rootReducer);

// Tạo store
export const store = configureStore({
  reducer: persistedReducer,
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware({
      serializableCheck: false, // tránh lỗi khi xử lý các object không tuần tự hóa được
    }),
});

// Persistor
export const persistor = persistStore(store);

// Types
export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;

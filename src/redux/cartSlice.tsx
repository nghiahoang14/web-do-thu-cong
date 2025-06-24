import { createSlice, PayloadAction } from '@reduxjs/toolkit';
import { Product } from '@/app/components/Client/Products/ProductList';

interface CartItem extends Product {
  quantity: number;
}

interface CartState {
  items: CartItem[];
  userId: string | null;
}

const initialState: CartState = {
  items: [],
  userId: null,
};

export const cartSlice = createSlice({
  name: 'cart',
  initialState,
  reducers: {
    setUserId: (state, action: PayloadAction<string>) => {
      if (state.userId !== action.payload) {
     
      }
      state.userId = action.payload;
    },
    fetchCartFromServer: (state, action: PayloadAction<CartItem[]>) => {
       console.log("📦 Payload to Redux:", action.payload);
      state.items = action.payload;
    },
    addToCart: (state, action: PayloadAction<Product>) => {
      const product = action.payload;

      // ✅ Đảm bảo state.items tồn tại
      if (!Array.isArray(state.items)) {
        state.items = [];
      }

      const existingItem = state.items.find(item => item._id === product._id);

      if (existingItem) {
        existingItem.quantity += 1;
      } else {
        state.items.push({ ...product, quantity: product.quantity || 1 });
      }
    },
    removeFromCart: (state, action: PayloadAction<string>) => {
      state.items = state.items.filter(item => item._id !== action.payload);
    },
    clearCart: (state) => {
      state.items = [];
    },
    decreaseQuantity: (state, action: PayloadAction<string>) => {
      const item = state.items.find((item) => item._id === action.payload);
      if (item && item.quantity && item.quantity > 1) {
        item.quantity -= 1;
      }
    }
  }
});

export const {
  addToCart,
  removeFromCart,
  clearCart,
  decreaseQuantity,
  setUserId,
  fetchCartFromServer
} = cartSlice.actions;

export default cartSlice.reducer;

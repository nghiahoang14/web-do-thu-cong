import { createSlice, PayloadAction } from '@reduxjs/toolkit';

export interface CartItem {
  _id: string;
  title: string;
  price: number;
  description?: string;
  category?: string;
  image?: string;
  stock?: number;
  rating?: { rate: number; count: number };
  status?: 'active' | 'inactive' | 'out_of_stock';
  deleted?: boolean;
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

    setUserId: (state, action: PayloadAction<string | null>) => {
      state.userId = action.payload;
    },

   
    fetchCartFromServer: (state, action: PayloadAction<CartItem[]>) => {
      state.items = action.payload;
    },

    addToCart: (state, action: PayloadAction<CartItem>) => {
      const product = action.payload;
      const existingItem = state.items.find(i => i._id === product._id);

      if (existingItem) {
        existingItem.quantity += product.quantity || 1;
      } else {
        state.items.push({ ...product, quantity: product.quantity || 1 });
      }
    },

    removeFromCart: (state, action: PayloadAction<string>) => {
      state.items = state.items.filter(i => i._id !== action.payload);
    },

  
    clearCart: state => {
      state.items = [];
    },

    
    decreaseQuantity: (state, action: PayloadAction<string>) => {
      const item = state.items.find(i => i._id === action.payload);
      if (item && item.quantity > 1) {
        item.quantity -= 1;
      }
    },
  },
});


export const {
  addToCart,
  removeFromCart,
  clearCart,
  decreaseQuantity,
  setUserId,
  fetchCartFromServer,
} = cartSlice.actions;

export default cartSlice.reducer;

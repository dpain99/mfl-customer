import { createSlice, PayloadAction } from "@reduxjs/toolkit";

export interface ProductInfo {
  img: any;
  title: string;
  price: number;
  quantity: number;
  slug: string;
}

interface CartState {
  isOpen: boolean;
  infoProduct: ProductInfo[] | null;
}

const initialState: CartState = {
  isOpen: false,
  infoProduct: null,
};

const showCartSlice = createSlice({
  name: "cart",
  initialState,
  reducers: {
    openCart: (state) => {
      state.isOpen = true;
    },
    closeCart: (state) => {
      state.isOpen = false;
    },
    setProductInfo: (state, action: PayloadAction<ProductInfo[]>) => {
      state.infoProduct = action.payload;
    },
    clearProductInfo: (state) => {
      state.infoProduct = null;
    },
  },
});

export const { openCart, closeCart, setProductInfo, clearProductInfo } =
  showCartSlice.actions;
export default showCartSlice.reducer;

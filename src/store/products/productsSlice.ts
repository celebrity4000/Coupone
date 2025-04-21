import { createSlice, PayloadAction } from "@reduxjs/toolkit";

interface Product {
  id: string;
  headerImage: string;
  discountPercentage: number;
  couponPrice: number;
}

interface ProductsState {
  products: Product[];
  error: string | null;
}
const initialState: ProductsState = {
  products: [],
  error: null,
};

const productsSlice = createSlice({
  name: "products",
  initialState,
  reducers: {
    addProduct(state, action: PayloadAction<Product>) {
      state.products.push(action.payload);
    },
    removeProduct(state, action: PayloadAction<string>) {
      state.products = state.products.filter(
        (product) => product.id !== action.payload
      );
    },
  },
});

export const { addProduct, removeProduct } = productsSlice.actions;
export default productsSlice.reducer;

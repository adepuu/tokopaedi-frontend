import {
  ActionReducerMapBuilder,
  createAsyncThunk,
  createSlice
} from "@reduxjs/toolkit";
import axios from "axios";
import {Product} from "../../types/product";

export const fetchProducts = createAsyncThunk("products/fetchProducts", async () => {
  const { data, status } = await axios.get("http://localhost:8080/products");
  if (status !== 200) {
    throw new Error("Failed to fetch products");
  }
  return data as Product[];
});

interface ProductState {
  items: Product[];
  status: "idle" | "loading" | "succeeded" | "failed";
  error: string | null | undefined;
}

const initialState: ProductState = {
  items: [],
  status: "idle",
  error: null,
};

const productSlice = createSlice({
  name: "products",
  initialState,
  reducers: {},
  extraReducers: (builder: ActionReducerMapBuilder<ProductState>) => {
    builder.addCase(fetchProducts.pending, (state) => {
      state.status = "loading";
    }).addCase(fetchProducts.fulfilled, (state, action) => {
      state.status = "succeeded";
      state.items = action.payload;
    }).addCase(fetchProducts.rejected, (state, action) => {
      state.status = "failed";
      state.error = action.error.message;
    });
  }
});

export default productSlice.reducer;
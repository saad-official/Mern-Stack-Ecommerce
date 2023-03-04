import { createSlice } from "@reduxjs/toolkit";
const productSlice = createSlice({
  name: "product",
  initialState: {
    products: [],
    isFetching: false,
    isError: false,
  },
  reducers: {
    // get Product
    getProductStart: (state) => {
      state.isFetching = true;
      state.isError = false;
    },
    getProductSuccess: (state, action) => {
      state.isFetching = false;
      state.products = action.payload;
      // console.log('t',state.products);
    },
    getProductFailure: (state) => {
      state.isFetching = false;
      state.isError = true;
    },

    // Product Delete
    deleteProductStart: (state) => {
      state.isFetching = true;
      state.isError = false;
    },
    deleteProductSuccess: (state, action) => {
  
      state.isFetching = false;
      console.log('s',state.products);
        state.products.slice(
            state.products.findIndex((item) => item._id === action.payload),
            1
      );
    },
    deleteProductFailure: (state) => {
      state.isFetching = false;
      state.isError = true;
    },

    // Update Product 
    updateProductStart: (state) => {
      state.isFetching = true;
      state.isError = false;
    },
    updateProductSuccess: (state, action) => {
  
      state.isFetching = false;
      state.products[
        state.products.findIndex((item) => item._id === action.payload.id)
      ] = action.payload.product;
    },
    updateProductFailure: (state) => {
      state.isFetching = false;
      state.isError = true;
    },

    // Add Product
    addProductStart: (state) => {
      state.isFetching = true;
      state.isError = false;
    },
    addProductSuccess: (state, action) => {
      state.isFetching = false;
      state.products.push(action.payload);
    },
    addProductFailure: (state) => {
      state.isFetching = false;
      state.isError = true;
    },

  },
});



export const { getProductStart, getProductSuccess, getProductFailure, deleteProductStart, deleteProductSuccess, deleteProductFailure, updateProductStart, updateProductSuccess, updateProductFailure, addProductStart, addProductSuccess, addProductFailure } =
  productSlice.actions;
export default productSlice.reducer;

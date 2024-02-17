import { publicRequest, userRequest } from "../requestMethods";
import {
  deleteProductFailure,
  deleteProductStart,
  deleteProductSuccess,
  getProductFailure,
  getProductStart,
  getProductSuccess,
  updateProductFailure,
  updateProductStart,
  updateProductSuccess,
  addProductFailure,
  addProductStart,
  addProductSuccess,
} from "./productRedux";
import {
  getUserFailure,
  getUserStart,
  getUserSuccess,
  loginFailure,
  loginStart,
  loginSuccess,
} from "./userRedux";

export const login = async (dispatch, user) => {
  dispatch(loginStart());
  try {
    const res = await publicRequest.post("/auth/login", user);
    console.log(res);
    window.location.reload();
    dispatch(loginSuccess(res.data));
  } catch (error) {
    console.log(error);
    alert("Something Went Wrong");
    dispatch(loginFailure());
  }
};

export const getProducts = async (dispatch) => {
  dispatch(getProductStart());

  try {
    const res = await publicRequest.get("/products");
    dispatch(getProductSuccess(res.data));
    console.log(res.data);
  } catch (error) {
    dispatch(getProductFailure());
  }
};

export const deleteProduct = async (id, dispatch) => {
  dispatch(deleteProductStart());

  try {
    // const res = await userRequest.delete(`/products/${id}`);
    dispatch(deleteProductSuccess(id));
    // console.log(res.data);
  } catch (error) {
    dispatch(deleteProductFailure());
  }
};

export const updateProduct = async (id, product, dispatch) => {
  dispatch(updateProductStart());

  try {
    // update
    const res = await userRequest.put(`/products/${id}`, product);
    dispatch(updateProductSuccess(id, product));
    console.log(res.data);
  } catch (error) {
    dispatch(updateProductFailure());
  }
};

export const addProduct = async (product, dispatch) => {
  dispatch(addProductStart());
  try {
    // Add
    const res = await userRequest.post("/products", product);
    dispatch(addProductSuccess(res.data));
  } catch (error) {
    dispatch(addProductFailure());
  }
};

// Users
export const getUsers = async (dispatch) => {
  dispatch(getUserStart());
  try {
    const res = await userRequest.get("/users");
    console.log(res);
    dispatch(getUserSuccess(res.data));
  } catch (error) {
    dispatch(getUserFailure());
  }
};

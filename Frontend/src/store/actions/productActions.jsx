import axios from "../../api/axiosconfig";
import { loadproduct } from "../../store/reducers/productSlice";

export const asyncLoadProducts = () => async (dispatch, getState) => {
  try {
    const { data } = await axios.get("/products");
    dispatch(loadproduct(data));
  } catch (error) {
    console.error(error);
  }
};

export const asyncCreateProduct = (products) => async (dispatch, getState) => {
  try {
    await axios.post("/products", products);
    dispatch(asyncLoadProducts());
  } catch (error) {
    console.error(error);
  }
};

export const asyncUpdateProduct =
  (id, products) => async (dispatch, getState) => {
    try {
      await axios.patch(`/products/${id}`, products);
      dispatch(asyncLoadProducts());
    } catch (error) {
      console.error(error);
    }
  };

export const asyncDeleteProduct = (id) => async (dispatch) => {
  try {
    await axios.delete(`/products/${id}`);
    dispatch(asyncLoadProducts());
  } catch (error) {
    console.error(error);
  }
};


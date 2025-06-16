import axios from "../api/axiosconfig";
import { loaduser ,removeuser } from "../store/reducers/userSlice";

export const asyncgetusers = () => async (dispatch, getState) => {
  try {
    console.log("current state >>>>>", getState());
    const res = await axios.get("/users");
    dispatch(loaduser(res.data));
  } catch (err) {
    console.error("Error fetching products:", err);
    throw err;
  }
};


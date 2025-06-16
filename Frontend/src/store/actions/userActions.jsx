import axios from "../../api/axiosconfig";
import { loaduser, removeuser } from "../../store/reducers/userSlice.jsx";

export const asyncRegisterUser = (user) => async (dispatch, getState) => {
  try {
    const res = await axios.post("/users", user);
    console.log("Register Response:", res.data);
  } catch (error) {
    console.error("Error registering user:", error);
  }
};

export const asyncLoginUser = (user) => async (dispatch, getState) => {
  try {
    const res = await axios.get(
      `/users?email=${user.email}&password=${user.password}`
    );
    console.log("Login Response:", res.data);

    if (res.data.length > 0) {
      localStorage.setItem("user", JSON.stringify(res.data[0]));
      dispatch(loaduser(res.data[0]));
    } else {
      console.warn("Invalid credentials: user not found");
    }
  } catch (error) {
    console.error("Error during login:", error);
  }
};

export const asyncLogoutUser = () => async (dispatch, getState) => {
  try {
    localStorage.removeItem("user");
    dispatch(removeuser());
    console.log("User logged out!");
  } catch (error) {
    console.error("Error during logout:", error);
  }
};

export const asyncCurrentUser = () => async (dispatch, getState) => {
  try {
    const userStr = localStorage.getItem("user");

    if (!userStr || userStr === "undefined") {
      console.log("user not logged in!");
      return;
    }

    const user = JSON.parse(userStr);
    dispatch(loaduser(user));
  } catch (error) {
    console.error("Error loading current user:", error);
  }
};

export const asyncUpdateUser = (id, user) => async (dispatch, getState) => {
  try {
    const { data } = await axios.patch("/users/" + id, user);
    localStorage.setItem("user", JSON.stringify(data));
    dispatch(asyncCurrentUser());
  } catch (error) {
    console.log(error);
  }
};

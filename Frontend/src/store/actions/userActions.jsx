import axios from "../../api/axiosconfig";
import { loaduser, removeuser } from "../reducers/userSlice";

// 🟢 Load current user from localStorage (only if valid)
export const asynccurrentuser = () => async (dispatch, getState) => {
    try {
        const userRaw = localStorage.getItem("user");

        if (userRaw && userRaw !== "undefined") {
            const user = JSON.parse(userRaw);
            if (user) dispatch(loaduser(user));
        } else {
            localStorage.removeItem("user"); // Clean if bad data
        }
    } catch (error) {
        console.log("Error parsing user from localStorage:", error);
        localStorage.removeItem("user");
    }
};

// 🔴 Logout: remove user from localStorage and redux
export const asynclogoutuser = () => async (dispatch) => {
    try {
        localStorage.removeItem("user");
        dispatch(removeuser());
    } catch (error) {
        console.log("Logout error:", error);
    }
};

// 🔵 Login: validate credentials, save user to localStorage
export const asyncloginuser = (user) => async (dispatch) => {
    try {
        const { data } = await axios.get(
            `/users?email=${user.email}&password=${user.password}`
        );

        if (data.length === 0) {
            console.log("❌ Invalid credentials. User not found.");
            return;
        }

        localStorage.setItem("user", JSON.stringify(data[0]));
        dispatch(loaduser(data[0]));
    } catch (error) {
        console.log("Login error:", error);
    }
};

// 🟡 Register: post new user to DB
export const asyncregisteruser = (user) => async () => {
    try {
        const res = await axios.post("/users", user);
        console.log("User registered ✅", res);
    } catch (error) {
        console.log("Register error:", error);
    }
};

// 🟣 Update user data in DB + localStorage
export const asyncupdateuser = (id, user) => async (dispatch) => {
    try {
        const { data } = await axios.patch("/users/" + id, user);
        localStorage.setItem("user", JSON.stringify(data));
        dispatch(asynccurrentuser());
    } catch (error) {
        console.log("Update user error:", error);
    }
};

// 🔵 Delete user account
export const asyncdeleteuser = (id) => async (dispatch) => {
    try {
        await axios.delete("/users/" + id);
        dispatch(asynclogoutuser());
    } catch (error) {
        console.log("Delete user error:", error);
    }
};

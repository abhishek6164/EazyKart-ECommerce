import React from "react";
import { NavLink, useNavigate } from "react-router-dom";
import { useSelector, useDispatch } from "react-redux";
import { asyncLogoutUser } from "../store/actions/userActions";

const Nav = () => {
  const user = useSelector((state) => state.userReducer.user); // 🧠 Important fix!
  const navigate = useNavigate();
  const dispatch = useDispatch();

  const LogoutHandler = () => {
    dispatch(asyncLogoutUser());
    navigate("/login");
    console.log("User logged out!");
  };

  const navLinkStyles = ({ isActive }) =>
    `px-4 py-2 rounded-xl text-sm font-medium transition hover:bg-white/10 ${
      isActive ? "bg-white/10 text-pink-400" : "text-white/80"
    }`;

  return (
    <nav className="w-full bg-white/5 backdrop-blur-lg shadow-md fixed top-0 left-0 z-50 py-4 px-6 flex justify-between items-center">
      <div className="text-white text-lg font-bold tracking-wide">🛍️ EazyKart</div>

      <div className="flex gap-4 items-center">
        <NavLink to="/" className={navLinkStyles}>
          Home
        </NavLink>
        <NavLink to="/products" className={navLinkStyles}>
          Products
        </NavLink>

        {/* 👉 Create Product - sirf jab Admin ho */}
        {user?.isAdmin && (
          <NavLink to="/admin/create-product" className={navLinkStyles}>
            + Create Product
          </NavLink>
        )}

        {/* 👉 Logout if logged in, else Login */}
        {user ? (
          <button
            onClick={LogoutHandler}
            className="px-4 py-2 bg-gradient-to-r from-purple-500 to-pink-500 text-white rounded-xl font-semibold hover:scale-105 transition-transform"
          >
            Logout
          </button>
        ) : (
          <NavLink to="/login" className={navLinkStyles}>
            Login
          </NavLink>
        )}
      </div>
    </nav>
  );
};

export default Nav;

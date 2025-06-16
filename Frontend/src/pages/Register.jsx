import React from "react";
import { useForm } from "react-hook-form";
import { nanoid } from "nanoid";
import { Link, useNavigate } from "react-router-dom";
import { asyncRegisterUser } from "../store/actions/userActions";
import { useDispatch } from "react-redux";

const Register = () => {
  const { register, handleSubmit } = useForm();
  const navigate = useNavigate();
  const dispatch = useDispatch();

  const RegisterHandler = (user) => {
    user.id = nanoid();
    user.isAdmin = false;
    user.cart = []
    dispatch(asyncRegisterUser(user));
    navigate("/login");
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-[#0f0c29] via-[#302b63] to-[#24243e] flex items-center justify-center px-4 py-10">
      <form
        onSubmit={handleSubmit(RegisterHandler)}
        className="w-full max-w-md bg-white/10 backdrop-blur-xl p-10 rounded-3xl shadow-[0_0_30px_#a855f7aa] text-white border border-white/10"
      >
        <div className="text-center mb-8">
          <h2 className="text-3xl font-extrabold bg-gradient-to-r from-purple-400 via-pink-500 to-red-500 bg-clip-text text-transparent">
            📝 Create Your Account
          </h2>
          <p className="text-sm text-white/70">
            Let’s get you started with a new journey.
          </p>
        </div>

        <div className="space-y-6">
          <input
            {...register("username")}
            type="text"
            placeholder="Choose a username"
            className="w-full px-5 py-3 rounded-xl bg-white/10 border border-white/20 text-white placeholder-white/50 focus:outline-none focus:ring-2 focus:ring-purple-400"
          />

          <input
            {...register("email")}
            type="email"
            placeholder="Enter your email"
            className="w-full px-5 py-3 rounded-xl bg-white/10 border border-white/20 text-white placeholder-white/50 focus:outline-none focus:ring-2 focus:ring-purple-400"
          />

          <input
            {...register("password")}
            type="password"
            placeholder="Create a password"
            className="w-full px-5 py-3 rounded-xl bg-white/10 border border-white/20 text-white placeholder-white/50 focus:outline-none focus:ring-2 focus:ring-purple-400"
          />

          <button
            type="submit"
            className="w-full bg-gradient-to-r from-purple-500 to-pink-500 py-3 rounded-xl font-bold text-white hover:scale-105 transition-transform shadow-md"
          >
            🚀 Register
          </button>
        </div>

        <p className="text-center text-white/60 text-sm mt-6">
          Already have an account?{' '}
          <Link to="/login" className="text-cyan-300 hover:underline">
            Login Here
          </Link>
        </p>
      </form>
    </div>
  );
};

export default Register;

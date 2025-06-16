import { useForm } from "react-hook-form";
import { nanoid } from "nanoid";
import { Link, useNavigate } from "react-router-dom";
import { asyncregisteruser } from "../store/actions/userActions";
import { useDispatch } from "react-redux";

const Register = () => {
  const { register, reset, handleSubmit } = useForm();
  const navigate = useNavigate();
  const dispatch = useDispatch();

  const RegisterHandler = (user) => {
    user.id = nanoid();
    user.isAdmin = false;
    user.cart = [];
    dispatch(asyncregisteruser(user));
    navigate("/login");
  };

  return (
    <div className="min-h-screen flex items-center justify-center bg-[#EAEFEF] px-4">
      <form
        onSubmit={handleSubmit(RegisterHandler)}
        className="w-full max-w-lg bg-white rounded-3xl shadow-xl p-8 space-y-6"
      >
        <h2 className="text-3xl font-bold text-[#333446] text-center mb-4">Create Your Account</h2>

        <input
          {...register("username")}
          className="w-full px-4 py-3 rounded-lg bg-[#EAEFEF] text-[#333446] placeholder-[#7F8CAA] focus:outline-none focus:ring-2 focus:ring-[#B8CFCE] transition"
          type="text"
          placeholder="john-doe"
        />

        <input
          {...register("email")}
          className="w-full px-4 py-3 rounded-lg bg-[#EAEFEF] text-[#333446] placeholder-[#7F8CAA] focus:outline-none focus:ring-2 focus:ring-[#B8CFCE] transition"
          type="email"
          placeholder="john@doe.com"
        />

        <input
          {...register("password")}
          className="w-full px-4 py-3 rounded-lg bg-[#EAEFEF] text-[#333446] placeholder-[#7F8CAA] focus:outline-none focus:ring-2 focus:ring-[#B8CFCE] transition"
          type="password"
          placeholder="********"
        />

        <button
          type="submit"
          className="w-full py-3 rounded-xl bg-[#B8CFCE] text-[#333446] font-semibold hover:bg-[#7F8CAA] hover:text-white transition-all duration-300"
        >
          Register
        </button>

        <p className="text-center text-[#7F8CAA] text-sm">
          Already have an account?{" "}
          <Link to="/login" className="text-[#333446] font-semibold hover:underline">
            Login
          </Link>
        </p>
      </form>
    </div>
  );
};

export default Register;

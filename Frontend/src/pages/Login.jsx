import { useForm } from "react-hook-form";
import { Link, useNavigate } from "react-router-dom";
import { useDispatch } from "react-redux";
import { asyncloginuser } from "../store/actions/userActions";

const Login = () => {
  const { register, handleSubmit } = useForm();
  const navigate = useNavigate();
  const dispatch = useDispatch();

  const LoginHandler = (user) => {
    dispatch(asyncloginuser(user));
    navigate("/");
  };

  return (
    <div className="min-h-screen w-full flex items-center justify-center px-4 py-10 bg-[#e8efef]">
      <form
        onSubmit={handleSubmit(LoginHandler)}
        className="w-full max-w-md p-8 rounded-xl shadow-xl border border-[#B8CFCE] bg-[#EAEFEF]"
      >
        <h2 className="text-3xl font-bold text-center mb-6 text-[#333446]">
          Welcome Back 👋
        </h2>

        <div className="mb-4">
          <label className="block text-sm font-medium mb-1 text-[#7F8CAA]">
            Email
          </label>
          <input
            {...register("email")}
            type="email"
            placeholder="john@doe.com"
            className="w-full px-4 py-2 bg-[#B8CFCE] text-[#333446] placeholder-[#7F8CAA] rounded-md border border-[#7F8CAA] focus:outline-none focus:ring-2 focus:ring-[#7F8CAA] transition-all duration-200"
          />
        </div>

        <div className="mb-6">
          <label className="block text-sm font-medium mb-1 text-[#7F8CAA]">
            Password
          </label>
          <input
            {...register("password")}
            type="password"
            placeholder="********"
            className="w-full px-4 py-2 bg-[#B8CFCE] text-[#333446] placeholder-[#7F8CAA] rounded-md border border-[#7F8CAA] focus:outline-none focus:ring-2 focus:ring-[#7F8CAA] transition-all duration-200"
          />
        </div>

        <button
          type="submit"
          className="w-full bg-[#333446] text-[#EAEFEF] font-semibold py-2 rounded-md hover:bg-[#7F8CAA] hover:text-[#333446] transition duration-300"
        >
          Login
        </button>

        <p className="text-sm text-center mt-4 text-[#7F8CAA]">
          Don&apos;t have an account?{" "}
          <Link
            to="/register"
            className="text-[#333446] font-medium hover:underline hover:text-[#7F8CAA] transition"
          >
            Register
          </Link>
        </p>
      </form>
    </div>
  );
};

export default Login;

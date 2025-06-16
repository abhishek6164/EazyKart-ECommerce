import { Link } from "react-router-dom";
import { useForm } from "react-hook-form";
import { useDispatch } from "react-redux";
import { useNavigate } from "react-router-dom";
import { asyncLoginUser } from "../store/actions/userActions";

const Login = () => {
  const { register, handleSubmit } = useForm();
  const dispatch = useDispatch();
  const navigate = useNavigate();

  const LoginHandler = (user) => {
    dispatch(asyncLoginUser(user));
    navigate("/products");
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-[#0f0c29] via-[#302b63] to-[#24243e] flex items-center justify-center px-4 py-10">
      <form
        onSubmit={handleSubmit(LoginHandler)}
        className="w-full max-w-md bg-white/10 backdrop-blur-xl p-10 rounded-3xl shadow-[0_0_30px_#38bdf866] text-white border border-white/10"
      >
        <div className="text-center mb-8">
          <h2 className="text-3xl font-extrabold bg-gradient-to-r from-purple-400 via-pink-500 to-red-500 bg-clip-text text-transparent">
            🔐 Welcome Back!
          </h2>
          <p className="text-sm text-white/70">
            Please enter your credentials to sign in.
          </p>
        </div>

        <div className="space-y-6">
          <input
            {...register("email")}
            type="email"
            placeholder="Enter your email"
            className="w-full px-5 py-3 rounded-xl bg-white/10 border border-white/20 text-white placeholder-white/50 focus:outline-none focus:ring-2 focus:ring-pink-400"
          />

          <input
            {...register("password")}
            type="password"
            placeholder="Enter your password"
            className="w-full px-5 py-3 rounded-xl bg-white/10 border border-white/20 text-white placeholder-white/50 focus:outline-none focus:ring-2 focus:ring-pink-400"
          />

          <button
            type="submit"
            className="w-full bg-gradient-to-r from-pink-500 to-purple-600 py-3 rounded-xl font-bold text-white hover:scale-105 transition-transform shadow-md"
          >
            🚀 Login
          </button>
        </div>

        <p className="text-center text-white/60 text-sm mt-6">
          Don’t have an account?{' '}
          <Link to="/register" className="text-cyan-300 hover:underline">
            Sign Up Here
          </Link>
        </p>
      </form>
    </div>
  );
};

export default Login;

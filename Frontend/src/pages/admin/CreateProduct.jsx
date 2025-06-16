import { Link } from "react-router-dom";
import { useForm } from "react-hook-form";
import { nanoid } from "nanoid";
import { asyncRegisterUser } from "../../store/actions/userActions";
import { useDispatch } from "react-redux";
import { useNavigate } from "react-router-dom";
import { asyncCreateProduct } from "../../store/actions/productActions";

const CreateProduct = () => {
  const { register, handleSubmit } = useForm();
  const navigate = useNavigate();
  const dispatch = useDispatch();

  const CreateProductHandler = (product) => {
    product.id = nanoid();
    dispatch(asyncCreateProduct(product));
    navigate('/products');
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-[#0f2027] via-[#203a43] to-[#2c5364] flex items-center justify-center px-4 py-28">
      <form
        onSubmit={handleSubmit(CreateProductHandler)}
        className="w-full max-w-lg bg-white/10 backdrop-blur-xl p-10 rounded-3xl shadow-2xl text-white border border-white/20"
      >
        <div className="text-center mb-8">
          <h2 className="text-3xl font-extrabold bg-gradient-to-r from-purple-400 via-pink-500 to-red-400 bg-clip-text text-transparent">
            🚀 Create New Product
          </h2>
          <p className="text-sm text-white/60">Add your masterpiece to the collection</p>
        </div>

        <div className="space-y-5">
          <input
            {...register("title")}
            type="text"
            placeholder="Product Title"
            className="w-full px-4 py-3 rounded-xl bg-white/10 border border-white/30 text-white placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-pink-400"
          />

          <input
            {...register("price")}
            type="number"
            placeholder="Price (₹)"
            className="w-full px-4 py-3 rounded-xl bg-white/10 border border-white/30 text-white placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-pink-400"
          />

          <textarea
            {...register("description")}
            placeholder="Product Description"
            rows={3}
            className="w-full px-4 py-3 rounded-xl bg-white/10 border border-white/30 text-white placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-pink-400 resize-none"
          />

          <input
            {...register("image")}
            type="text"
            placeholder="Image URL"
            className="w-full px-4 py-3 rounded-xl bg-white/10 border border-white/30 text-white placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-pink-400"
          />

          <input
            {...register("category")}
            type="text"
            placeholder="Category"
            className="w-full px-4 py-3 rounded-xl bg-white/10 border border-white/30 text-white placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-pink-400"
          />
        </div>

        <button
          type="submit"
          className="mt-6 w-full bg-gradient-to-r from-purple-600 via-pink-500 to-red-400 py-3 rounded-xl font-bold text-white hover:scale-105 transition-transform shadow-lg"
        >
          🎨 Create Product
        </button>
      </form>
    </div>
  );
};

export default CreateProduct;

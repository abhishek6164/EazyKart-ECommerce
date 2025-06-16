import { useParams } from "react-router-dom";
import { useSelector, useDispatch } from "react-redux";
import { useForm } from "react-hook-form";
import { useEffect } from "react";
import {
  asyncUpdateProduct,
  asyncDeleteProduct,
} from "../../store/actions/productActions";
import { useNavigate } from "react-router-dom";

const ProductDetails = () => {
  const { id } = useParams();
  const dispatch = useDispatch();
  const navigator = useNavigate();

  const {
    productsReducer: { products },
    userReducer: { user },
  } = useSelector((state) => state);

  const product = products?.find((product) => product.id === id);

  const { register, handleSubmit, reset } = useForm({
    defaultValues: {
      title: "",
      price: "",
      description: "",
      image: "",
      category: "",
    },
  });

  useEffect(() => {
    if (product) {
      reset({
        title: product.name,
        price: product.price,
        description: product.description,
        image: product.image,
        category: product.category,
      });
    }
  }, [product, reset]);

  const UpdateProductHandler = (data) => {
    dispatch(asyncUpdateProduct(id, data));
  };

  const DeleteHandler = () => {
    dispatch(asyncDeleteProduct(id));
    alert("Product Deleted Successfully ✅");
    navigator("/products");
  };

  if (!product) {
    return (
      <div className="min-h-screen flex items-center justify-center bg-gradient-to-br from-gray-900 to-gray-800 text-white">
        <p className="text-xl font-medium animate-pulse text-gray-400">
          Loading product details...
        </p>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-gradient-to-tr from-[#0f0c29] via-[#302b63] to-[#24243e] text-white py-28 px-4">
      
      <div className="text-center mb-12">
        <h1 className="text-sm font-light text-white/70 uppercase tracking-widest">
          You're viewing
        </h1>
        <h2 className="text-4xl md:text-5xl font-extrabold bg-gradient-to-r from-pink-500 to-purple-500 bg-clip-text text-transparent">
          Product Details
        </h2>
      </div>

      <div className="max-w-6xl mx-auto grid md:grid-cols-2 gap-10 bg-white/10 p-8 rounded-3xl shadow-2xl backdrop-blur-lg border border-white/10">
        <img
          src={product.image}
          alt={product.name}
          className="rounded-2xl object-cover w-full h-96 shadow-lg border border-white/20"
        />
        <div className="space-y-4">
          <h1 className="text-4xl font-bold text-transparent bg-gradient-to-r from-cyan-400 to-blue-500 bg-clip-text">
            {product.name}
          </h1>
          <p className="text-white/80 text-base">{product.description}</p>
          <p className="text-3xl font-extrabold text-pink-400">
            ₹{product.price}
          </p>
          <div className="flex flex-wrap gap-3 text-sm text-white/70">
            <span>Category: {product.category}</span>
            <span>Rating: {product.rating?.rate || 0} ⭐</span>
            <span>Reviews: {product.rating?.count || 0}</span>
            <span>Stock: {product.stock || "N/A"} items</span>
          </div>
          <button className="mt-4 bg-gradient-to-r from-blue-600 to-cyan-400 text-white py-2 px-6 rounded-lg font-bold hover:scale-105 transition-transform shadow-md">
            🛒 Add to Cart
          </button>
        </div>
      </div>

      {user && user.isAdmin && (
        <form
          onSubmit={handleSubmit(UpdateProductHandler)}
          className="max-w-3xl mx-auto mt-14 bg-white/10 p-10 rounded-3xl shadow-xl space-y-6 border border-white/10 backdrop-blur-lg"
        >
          <h2 className="text-3xl font-bold text-center text-transparent bg-gradient-to-r from-purple-400 to-pink-500 bg-clip-text">
            ✍️ Update Product Details
          </h2>

          <div className="space-y-6">
            {["title", "price", "description", "image", "category"].map(
              (field, i) => (
                <div key={i}>
                  <label className="block mb-1 text-white/70 capitalize">
                    {field === "image" ? "Image URL" : field}
                  </label>
                  {field === "description" ? (
                    <textarea
                      {...register(field)}
                      rows={3}
                      placeholder={`Enter ${field}...`}
                      className="w-full p-3 rounded-xl bg-white/10 border border-white/20 text-white placeholder:text-white/50 focus:outline-none focus:ring-2 focus:ring-pink-400"
                    />
                  ) : (
                    <input
                      {...register(field)}
                      type={field === "price" ? "number" : "text"}
                      placeholder={`Enter ${field}...`}
                      className="w-full p-3 rounded-xl bg-white/10 border border-white/20 text-white placeholder:text-white/50 focus:outline-none focus:ring-2 focus:ring-pink-400"
                    />
                  )}
                </div>
              )
            )}
          </div>

          <button
            type="submit"
            className="w-full bg-gradient-to-r from-green-400 to-blue-500 py-3 rounded-xl font-bold text-white hover:scale-105 transition-transform shadow-md"
          >
            🚀 Update Product
          </button>
          <button
            onClick={DeleteHandler}
            type="button"
            className="w-full bg-gradient-to-r from-red-500 to-pink-500 py-3 rounded-xl font-bold text-white hover:scale-105 transition-transform shadow-md"
          >
            🗑️ Delete Product
          </button>
        </form>
      )}
    </div>
  );
};

export default ProductDetails;

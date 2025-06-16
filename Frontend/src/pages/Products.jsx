import { useDispatch, useSelector } from "react-redux";
import { Link } from "react-router-dom";
import { asyncUpdateUser } from "../store/actions/userActions";
const Products = () => {
  const dispatch = useDispatch();
  const {
    userReducer: { user },
    productsReducer: { products },
  } = useSelector((state) => state);

  const AddtoCartHandler = (id) => {
    if (!user || !user.cart) {
      console.warn("User not found or cart not initialized 🚨");
      return;
    }

    const updatedCart = [...user.cart]; // safe clone
    const itemIndex = updatedCart.findIndex((item) => item.productId === id);

    if (itemIndex === -1) {
      updatedCart.push({ productId: id, quantity: 1 });
    } else {
      updatedCart[itemIndex] = {
        ...updatedCart[itemIndex],
        quantity: updatedCart[itemIndex].quantity + 1,
      };
    }

    const updatedUser = { ...user, cart: updatedCart };
    dispatch(asyncUpdateUser(user.id, updatedUser));
  };

  const renderProducts = () => {
    return (
      <div className="grid gap-10 grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4">
        {products.map((product) => (
          <div
            key={product.id}
            className="bg-white/5 border border-white/10 rounded-3xl p-6 shadow-[0_0_20px_#9333ea44] hover:shadow-[0_0_40px_#d946ef55] hover:scale-[1.03] transition duration-300 backdrop-blur-lg"
          >
            <img
              src={product.image}
              alt={product.name}
              className="h-52 w-full object-cover rounded-2xl mb-4 border border-white/20"
            />
            <h2 className="text-xl font-bold text-white mb-1">
              {product.name}
            </h2>
            <p className="text-sm text-white/60 mb-3">
              {product.description.slice(0, 60)}...
            </p>
            <p className="text-lg font-semibold text-pink-400 mb-1">
              ₹{product.price}
            </p>

            <p className="text-xs text-white/40 mb-4">
              Category: {product.category}
            </p>

            <button
              onClick={() => AddtoCartHandler(product.id)}
              className="w-full bg-gradient-to-r from-purple-500 to-pink-500 text-white py-2 rounded-xl font-semibold hover:scale-105 transition-transform"
            >
              Add to Cart 🛒
            </button>
            <Link
              to={`/product/${product.id}`}
              className="block text-center text-cyan-300 mt-2 text-sm hover:underline"
            >
              View Details
            </Link>
          </div>
        ))}
      </div>
    );
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-[#0f0c29] via-[#302b63] to-[#24243e] text-white py-28 px-6 md:px-14 lg:px-20">
      <h1 className="text-4xl md:text-5xl font-extrabold mb-12 text-center bg-gradient-to-r from-pink-500 to-purple-500 bg-clip-text text-transparent">
        ✨ Explore Our Exclusive Products
      </h1>

      {products?.length > 0 ? (
        renderProducts()
      ) : (
        <div className="text-center text-white/70 text-lg animate-pulse">
          ⏳ Loading Products...
        </div>
      )}
    </div>
  );
};

export default Products;

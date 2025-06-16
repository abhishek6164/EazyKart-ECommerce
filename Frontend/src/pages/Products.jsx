import { useDispatch, useSelector } from "react-redux";
import { Link } from "react-router-dom";
import { asyncupdateuser } from "../store/actions/userActions";

const Products = () => {
  const dispatch = useDispatch();
  const users = useSelector((state) => state.userReducer.users);
  const products = useSelector((state) => state.productReducer.products);

  const AddtoCartHandler = (product) => {
    if (!users || !users.cart) {
      alert("Please login first to add items to cart.");
      return;
    }

    const copyuser = { ...users, cart: [...users.cart] };
    const x = copyuser.cart.findIndex((c) => c?.product?.id === product.id);

    if (x === -1) {
      copyuser.cart.push({ product, quantity: 1 });
    } else {
      copyuser.cart[x] = {
        product,
        quantity: copyuser.cart[x].quantity + 1,
      };
    }

    dispatch(asyncupdateuser(copyuser.id, copyuser));
  };

  const renderProduct = products.map((product) => (
    <div
      key={product.id}
      className="w-full sm:w-[48%] lg:w-[30%] bg-white rounded-2xl border border-[#d4dddd] shadow-[0_6px_16px_rgba(0,0,0,0.06)] p-4 mb-6 mx-2 flex flex-col justify-between transition-transform hover:scale-[1.025] hover:shadow-[0_10px_24px_rgba(0,0,0,0.1)] duration-300"
    >
      <img
        src={product.image}
        alt={product.title}
        className="w-full h-60 object-contain rounded-xl mb-4 bg-[#f3f5f5] p-4"
      />

      <h1 className="text-lg font-bold text-[#333446] mb-2 line-clamp-2">
        {product.title}
      </h1>
      <p className="text-sm text-[#7F8CAA] mb-3 line-clamp-3">
        {product.description.slice(0, 100)}...
      </p>

      <div className="flex items-center justify-between mt-auto">
        <p className="text-lg font-bold text-[#2e2f3e]">₹{product.price}</p>
        <button
          onClick={() => AddtoCartHandler(product)}
          disabled={!users}
          className={`bg-[#7F8CAA] hover:bg-[#333446] text-white px-4 py-2 rounded-full transition-all duration-300 font-medium ${
            !users ? "opacity-50 cursor-not-allowed" : ""
          }`}
        >
          Add to Cart
        </button>
      </div>

      <Link
        to={`/product/${product.id}`}
        className="text-xs mt-3 text-center text-[#7F8CAA] hover:text-[#333446] transition underline decoration-dotted underline-offset-4"
      >
        🔍 More Info
      </Link>
    </div>
  ));

  return products.length > 0 ? (
    <div className="bg-[#EAEFEF] min-h-screen px-4 py-8 flex flex-wrap justify-center">
      {renderProduct}
    </div>
  ) : (
    <div className="text-[#333446] text-xl font-medium text-center mt-10">
      Loading products...
    </div>
  );
};

export default Products;

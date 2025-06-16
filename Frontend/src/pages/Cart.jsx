import { useDispatch, useSelector } from "react-redux";
import { asyncupdateuser } from "../store/actions/userActions";

const Cart = () => {
  const dispatch = useDispatch();
  const users = useSelector((state) => state.userReducer.users);

  const IncreaseQuantityHandler = (index, product) => {
    const copyuser = { ...users, cart: [...users.cart] };

    copyuser.cart[index] = {
      ...copyuser.cart[index],
      quantity: copyuser.cart[index].quantity + 1,
    };

    dispatch(asyncupdateuser(copyuser.id, copyuser));
  };

  const DecreaseQuantityHandler = (index, product) => {
    const copyuser = { ...users, cart: [...users.cart] };

    if (users.cart[index].quantity > 1) {
      copyuser.cart[index] = {
        ...copyuser.cart[index],
        quantity: copyuser.cart[index].quantity - 1,
      };
    } else {
      copyuser.cart.splice(index, 1);
    }

    dispatch(asyncupdateuser(copyuser.id, copyuser));
  };

  const cartItems = users?.cart
    ?.filter((c) => c?.product)
    .map((c, index) => (
      <li
        key={c?.product?.id || index}
        className="flex flex-col sm:flex-row items-center justify-between gap-4 bg-[#B8CFCE] text-[#333446] p-4 rounded-lg shadow-md mb-6"
      >
        <img
          className="w-28 h-28 object-cover rounded-md shadow-sm"
          src={c?.product?.image}
          alt={c?.product?.title || "Product"}
        />

        <div className="flex-1 text-center sm:text-left">
          <h3 className="text-lg font-semibold">{c?.product?.title}</h3>
          <p className="text-[#7F8CAA] mt-1">₹{c?.product?.price}</p>
        </div>

        <div className="flex items-center gap-3">
          <button
            onClick={() => DecreaseQuantityHandler(index, c)}
            className="px-3 py-1 bg-[#7F8CAA] text-white rounded hover:bg-[#333446] transition"
          >
            −
          </button>
          <span className="px-3 py-1 bg-[#EAEFEF] rounded text-[#333446] font-semibold">
            {c.quantity}
          </span>
          <button
            onClick={() => IncreaseQuantityHandler(index, c)}
            className="px-3 py-1 bg-[#7F8CAA] text-white rounded hover:bg-[#333446] transition"
          >
            +
          </button>
        </div>
      </li>
    ));

  return (
    <div className="min-h-screen bg-[#EAEFEF] px-4 py-10 text-[#333446]">
      <div className="max-w-4xl mx-auto">
        <h2 className="text-3xl font-bold mb-8 text-center text-[#333446]">
          🛒 Your Cart
        </h2>
        {cartItems?.length > 0 ? (
          <ul>{cartItems}</ul>
        ) : (
          <p className="text-center text-[#7F8CAA]">Cart is empty... ☹️</p>
        )}
      </div>
    </div>
  );
};

export default Cart;

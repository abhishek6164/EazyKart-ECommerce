import { lazy } from "react";
import { useDispatch } from "react-redux";
import { useSelector } from "react-redux";
import { asyncupdateuser } from "../store/actions/userActions";
import InfiniteScroll from "react-infinite-scroll-component";
import useInfiniteProducts from "../utils/useInfiniteProducts";
const ProductTemplate = lazy(() => import("../components/ProductTemplate"));
const Products = () => {

  const dispatch = useDispatch();
  const users = useSelector((state) => state.userReducer.users);
  const { products, hasMore, fetchProducts } = useInfiniteProducts();
  // const products = useSelector((state) => state.productReducer.products); // ✅
  // const [hasMore, setHasMore] = useState(true);

  // const fetchProducts = async () => {
  //   try {
  //     const { data } = await axios.get(
  //       `http://localhost:3000/products?_limit=6&_start=${products.length}`
  //     );
  //     console.log("Fetched data:", data);

  //     let newProducts = [];
  //     if (Array.isArray(data)) {
  //       newProducts = data;
  //     } else if (data?.products && Array.isArray(data.products)) {
  //       newProducts = data.products;
  //     } else {
  //       console.error("❌ Unexpected data structure:", data);
  //       setHasMore(false);
  //       return;
  //     }

  //     // ✅ Use correct payload while dispatching
  //     dispatch(loadlazyproduct(newProducts));

  //     if (newProducts.length < 6) {
  //       setHasMore(false);
  //     }
  //   } catch (error) {
  //     console.error("Error fetching products:", error);
  //     setHasMore(false);
  //   }
  // };

  const AddToCartHandler = (product) => {
    if (!users || !users.cart) {
      alert("Please login first to add items to cart.");
      return;
    }

    const copyUser = { ...users, cart: [...users.cart] };
    const index = copyUser.cart.findIndex((c) => c?.product?.id === product.id);

    if (index === -1) {
      copyUser.cart.push({ product, quantity: 1 });
    } else {
      copyUser.cart[index] = {
        product,
        quantity: copyUser.cart[index].quantity + 1,
      };
    }

    dispatch(asyncupdateuser(copyUser.id, copyUser));
  };


  const renderProduct = Array.isArray(products)
    ? products.map((product, index) => (
      <ProductTemplate
        key={product.id}
        product={product}
        index={index}
        users={users}
        AddToCartHandler={AddToCartHandler}
      />

    ))
    : null;

  return (
    <div className="bg-[#EAEFEF] min-h-screen px-4 py-8 flex flex-wrap justify-center">
      <InfiniteScroll
        dataLength={products.length}
        next={fetchProducts}
        hasMore={hasMore}
        loader={
          <h4 className="text-center text-[#333446]">
            Loading more products...
          </h4>
        }
        endMessage={
          <p className="text-center text-[#333446]">
            <b>Yay! You have seen it all</b>
          </p>
        }
        scrollThreshold="100%"
        className="w-full flex flex-wrap justify-center"
      >
        {renderProduct}
      </InfiniteScroll>
    </div>
  );
};

export default Products;

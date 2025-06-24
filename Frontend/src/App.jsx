import { useEffect } from "react";
import Nav from "./components/Nav";
import Mainroutes from "./routes/Mainroutes";
import { asynccurrentuser } from "./store/actions/userActions";
import { useDispatch, useSelector } from "react-redux";
// import { asyncloadproducts } from "./store/actions/productActions";
import Footer from "./pages/Footer";

const App = () => {
  const dispatch = useDispatch();
  const { users } = useSelector((state) => state.userReducer);
  const { products } = useSelector((state) => state.productReducer);
  useEffect(() => {
    !users && dispatch(asynccurrentuser());
  }, [users]);
  // useEffect(() => {
  //   products.length == 0 && dispatch(asyncloadproducts());
  // }, [products]);

  return (
    <div className="w-screen min-h-screen bg-[#EAEFEF] text-[#333446] font-sans flex flex-col">
      {/* Navbar */}
      <div className="shadow-md bg-white sticky top-0 z-50">
        <Nav />
      </div>

      {/* Main Content */}
      <main className="flex-1 px-4 md:px-10 py-6 bg-[#EAEFEF] overflow-y-auto">
        <div className="max-w-7xl mx-auto">
          <Mainroutes />
        </div>
      </main>

      <Footer />

      {/* Footer (Optional Future) */}
      {/* <footer className="bg-[#333446] text-[#B8CFCE] text-center py-4">
                © 2025 Crafted with ❤️ by Abhishek
            </footer> */}
    </div>
  );
};

export default App;

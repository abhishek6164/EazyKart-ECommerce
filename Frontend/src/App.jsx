import Nav from "./components/Nav";
import Mainroutes from "./routes/Mainroutes";
import Footer from "./pages/Footer"; // 👈 Import Footer

import { useEffect } from "react";
import { useDispatch } from "react-redux";
import { asyncCurrentUser } from "./store/actions/userActions";
import { asyncLoadProducts } from "./store/actions/productActions";

const App = () => {
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(asyncCurrentUser());
    dispatch(asyncLoadProducts());
  }, []);

  return (
    <div className="overflow-auto w-screen min-h-screen bg-gray-900 text-white flex flex-col">
      <Nav />
      <main className="flex-grow px-[10%]">
        <Mainroutes />
      </main>
      <Footer />
    </div>
  );
};

export default App;

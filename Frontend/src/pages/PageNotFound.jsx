import { Link } from "react-router-dom";
import { PiWarningOctagonDuotone } from "react-icons/pi";

const PageNotFound = () => {
  return (
    <div className="min-h-screen bg-[#EAEFEF] flex flex-col items-center justify-center px-4 text-center">
      <PiWarningOctagonDuotone size={100} className="text-[#B8CFCE] mb-4" />
      <h1 className="text-6xl font-bold text-[#333446] mb-2">404</h1>
      <h2 className="text-2xl font-semibold text-[#7F8CAA] mb-6">Page Not Found</h2>
      <p className="text-[#7F8CAA] mb-8 max-w-md">
        Oops! The page you're looking for doesn't exist or has been moved.
      </p>
      <Link
        to="/"
        className="px-6 py-3 bg-[#B8CFCE] text-[#333446] rounded-full font-semibold hover:bg-[#7F8CAA] hover:text-white transition"
      >
        Go Home 🏡
      </Link>
    </div>
  );
};

export default PageNotFound;

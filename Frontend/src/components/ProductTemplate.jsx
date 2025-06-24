import React from "react";
import { motion } from "framer-motion";
import { Link } from "react-router-dom";

const ProductTemplate = ({ product, index, users, AddToCartHandler }) => {
  return (
    <motion.div
      initial={{ opacity: 0, y: 30 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.4, delay: index * 0.05 }}
      className="w-full sm:w-[48%] lg:w-[30%] bg-white rounded-2xl border border-[#d4dddd] shadow-[0_6px_16px_rgba(0,0,0,0.06)] p-4 mb-6 mx-2 flex flex-col justify-between transition-transform hover:scale-[1.025] hover:shadow-[0_10px_24px_rgba(0,0,0,0.1)] duration-300"
    >
      <img
        src={product.image || product.images?.[0] || "/placeholder.png"}
        alt={product.title}
        className="w-full h-60 object-contain rounded-xl mb-4 bg-[#f3f5f5] p-4"
      />

      <h1 className="text-lg font-bold text-[#333446] mb-2 line-clamp-2">
        {product.title}
      </h1>
      <p className="text-sm text-[#7F8CAA] mb-3 line-clamp-3">
        {product.description?.slice(0, 100)}...
      </p>

      <div className="flex items-center justify-between mt-auto">
        <p className="text-lg font-bold text-[#2e2f3e]">₹{product.price}</p>
        <button
          onClick={() => AddToCartHandler(product)}
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
    </motion.div>
  );
};

export default ProductTemplate;

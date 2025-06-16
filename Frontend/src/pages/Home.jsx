import React from "react";
import { Link } from "react-router-dom";

const Home = () => {

  return (
    <div className="min-h-screen bg-gradient-to-br from-[#0f0c29] via-[#302b63] to-[#24243e] px-6 md:px-14 lg:px-20 text-white">
      {/* Hero Section */}
      <section className="min-h-[80vh] flex flex-col-reverse md:flex-row items-center justify-between gap-10 mt-16">
        <div className="md:w-1/2 text-center md:text-left">
          <h1 className="text-4xl md:text-6xl font-extrabold leading-tight bg-gradient-to-r from-purple-400 via-pink-500 to-red-500 bg-clip-text text-transparent">
            Discover Your Style 💫
          </h1>
          <p className="text-white/70 text-lg mt-4">
            Premium Products. Unique Designs. Affordable Prices. All in One Place.
          </p>
          <Link to="/products">
            <button className="mt-6 px-6 py-3 rounded-full bg-gradient-to-r from-cyan-400 to-blue-500 font-semibold hover:scale-105 transition">
              Start Shopping
            </button>
          </Link>
        </div>

        <div className="md:w-1/2">
          <img
            src="/girl.png"
            alt="Shopping hi abhishek"
            className="w-full max-w-md mx-auto animate-float"
          />
        </div>
      </section>

      {/* Categories */}
      <section className="mt-20">
        <h2 className="text-3xl font-bold text-center mb-10">Shop by Category 🛍️</h2>
        <div className="grid grid-cols-2 md:grid-cols-4 gap-6 text-center text-white/90">
          {["T-Shirts", "Hoodies", "Caps", "Accessories"].map((cat, i) => (
            <div
              key={i}
              className="bg-white/10 p-6 rounded-2xl hover:scale-105 hover:shadow-xl transition backdrop-blur-md"
            >
              <img
                src={`/assets/${cat.toLowerCase()}.png`}
                alt={cat}
                className="h-20 mx-auto mb-3"
              />
              <p className="font-semibold">{cat}</p>
            </div>
          ))}
        </div>
      </section>

      {/* Featured Products Preview */}
      <section className="mt-20">
        <h2 className="text-3xl font-bold text-center mb-10">🔥 Trending Now</h2>
        <div className="grid gap-8 grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4">
          {/* Sample cards or product preview here */}
          <div className="bg-white/10 p-4 rounded-xl text-center">Coming Soon...</div>
        </div>
        <div className="text-center mt-6">
          <Link
            to="/products"
            className="text-pink-400 underline text-lg font-semibold"
          >
            View All Products →
          </Link>
        </div>
      </section>

      {/* Testimonials */}
      <section className="mt-20">
        <h2 className="text-3xl font-bold text-center mb-10">
          What Our Customers Say 💬
        </h2>
        <div className="flex flex-col md:flex-row justify-center gap-6 text-white/80">
          {[1, 2, 3].map((id) => (
            <div
              key={id}
              className="bg-white/5 border border-white/10 p-6 rounded-xl max-w-sm"
            >
              <p>“Amazing quality! Loved the packaging too ❤️”</p>
              <p className="mt-3 font-semibold text-pink-300">
                — Happy Shopper
              </p>
            </div>
          ))}
        </div>
      </section>

      {/* Newsletter */}
      <section className="mt-24 bg-white/10 backdrop-blur-md p-10 rounded-3xl text-center">
        <h3 className="text-2xl font-bold mb-4">Stay in the Loop 📬</h3>
        <p className="text-white/70 mb-6">
          Get exclusive deals and latest drops in your inbox.
        </p>
        <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
          <input
            type="email"
            placeholder="Your email address"
            className="px-4 py-3 rounded-xl w-full sm:w-1/2 text-black"
          />
          <button className="bg-gradient-to-r from-purple-500 to-pink-500 text-white px-6 py-3 rounded-xl font-semibold">
            Subscribe
          </button>
        </div>
      </section>
    </div>
  );
};

export default Home;

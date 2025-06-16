import React from "react";
import { Link } from "react-router-dom";

const Home = () => {
  return (
    <div className="min-h-screen bg-[#e8efef] text-[#333446] font-sans px-6 md:px-14 lg:px-20">
      {/* Hero Section */}
      <section className="min-h-[80vh] flex flex-col-reverse md:flex-row items-center justify-between gap-10 mt-16">
        <div className="md:w-1/2 text-center md:text-left">
          <h1 className="text-4xl md:text-6xl font-extrabold leading-tight text-[#333446] drop-shadow-lg">
            Discover Your Style 💫
          </h1>
          <p className="text-[#7F8CAA] text-lg mt-4 font-medium">
            Premium Products. Unique Designs. Affordable Prices. All in One
            Place.
          </p>
          <Link to="/products">
            <button className="mt-6 px-6 py-3 rounded-full bg-[#B8CFCE] text-[#333446] font-semibold shadow-md hover:bg-[#EAEFEF] hover:text-[#333446] hover:scale-105 transition-all duration-300">
              Start Shopping
            </button>
          </Link>
        </div>

        <div className="md:w-1/2">
          <div className="">
            <img
              src="/girl.png"
              alt="Shopping Girl"
              className="w-full max-w-md mx-auto rounded-3xl  animate-float"
            />
          </div>
        </div>
      </section>

      {/* Categories */}
      <section className="mt-20">
        <h2 className="text-3xl font-bold text-center mb-10 text-[#333446]">
          Shop by Category 🛍️
        </h2>
        <div className="grid grid-cols-2 md:grid-cols-4 gap-6 text-center">
          {["T-Shirts", "Hoodies", "Caps", "Accessories"].map((cat, i) => (
            <div
              key={i}
              className="bg-[#7F8CAA]/10 p-6 rounded-2xl hover:scale-105 hover:shadow-[0_8px_20px_rgba(184,207,206,0.3)] transition duration-300 backdrop-blur-md"
            >
              <picture>
                <source
                  srcSet={`/assets/${cat.toLowerCase()}.webp`}
                  type="image/webp"
                />
                <source
                  srcSet={`/assets/${cat.toLowerCase()}.png`}
                  type="image/png"
                />
                <source
                  srcSet={`/assets/${cat.toLowerCase()}.jpg`}
                  type="image/jpeg"
                />
                <img
                  src={`/assets/${cat.toLowerCase()}.jpg`}
                  alt={cat}
                  className="h-20 mx-auto mb-3"
                />
              </picture>

              <p className="font-semibold text-[#333446]">{cat}</p>
            </div>
          ))}
        </div>
      </section>

      {/* Trending Products */}
      <section className="mt-20">
        <h2 className="text-3xl font-bold text-center mb-10 text-[#333446]">
          🔥 Trending Now
        </h2>
        <div className="grid gap-8 grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4">
          <div className="bg-[#7F8CAA]/10 p-6 rounded-xl text-center text-[#333446] shadow-inner border border-[#7F8CAA]/30">
            Coming Soon...
          </div>
        </div>
        <div className="text-center mt-6">
          <Link
            to="/products"
            className="text-[#7F8CAA] underline text-lg font-semibold hover:text-[#333446] transition"
          >
            View All Products →
          </Link>
        </div>
      </section>

      {/* Testimonials */}
      <section className="mt-20">
        <h2 className="text-3xl font-bold text-center mb-10 text-[#333446]">
          What Our Customers Say 💬
        </h2>
        <div className="flex flex-col md:flex-row justify-center gap-6">
          {[1, 2, 3].map((id) => (
            <div
              key={id}
              className="bg-[#EAEFEF]/50 border border-[#B8CFCE]/40 p-6 rounded-xl max-w-sm text-[#333446] hover:shadow-xl transition"
            >
              <p>“Amazing quality! Loved the packaging too ❤️”</p>
              <p className="mt-3 font-semibold text-[#7F8CAA]">
                — Happy Shopper
              </p>
            </div>
          ))}
        </div>
      </section>

      {/* Newsletter */}
      <section className="mt-24 bg-[#7F8CAA]/10 backdrop-blur-lg p-10 rounded-3xl text-center shadow-inner">
        <h3 className="text-2xl font-bold mb-4 text-[#333446]">
          Stay in the Loop 📬
        </h3>
        <p className="text-[#7F8CAA] mb-6">
          Get exclusive deals and latest drops in your inbox.
        </p>
        <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
          <input
            type="email"
            placeholder="Your email address"
            className="px-4 py-3 rounded-xl w-full sm:w-1/2 text-[#333446] bg-[#EAEFEF] outline-none focus:ring-2 focus:ring-[#B8CFCE] transition"
          />
          <button className="bg-[#B8CFCE] text-[#333446] px-6 py-3 rounded-xl font-semibold hover:bg-[#EAEFEF] transition-all">
            Subscribe
          </button>
        </div>
      </section>
    </div>
  );
};

export default Home;

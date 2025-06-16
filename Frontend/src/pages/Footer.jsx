const Footer = () => {
  return (
    <footer className="bg-[#0B1220] text-white py-10 px-6 md:px-14 lg:px-24">
      <div className="max-w-screen-xl mx-auto grid gap-10 md:grid-cols-3">
        <div>
          <h2 className="text-2xl font-bold text-pink-500 mb-4">ShopVerse</h2>
          <p className="text-sm text-white/60">
            Your ultimate destination for quality products and seamless shopping
            experience.
          </p>
        </div>

        <div>
          <h3 className="text-xl font-semibold text-white mb-4">Quick Links</h3>
          <ul className="space-y-2 text-sm text-white/70">
            <li>
              <a href="/products" className="hover:underline">Products</a>
            </li>
            <li>
              <a href="/login" className="hover:underline">Login</a>
            </li>
            <li>
              <a href="/register" className="hover:underline">Register</a>
            </li>
            <li>
              <a href="/admin/create-product" className="hover:underline">Create Product</a>
            </li>
          </ul>
        </div>

        <div>
          <h3 className="text-xl font-semibold text-white mb-4">Connect With Us</h3>
          <div className="flex gap-4 text-white/70 text-lg">
            <a href="#" className="hover:text-pink-400">Instagram</a>
            <a href="#" className="hover:text-pink-400">Twitter</a>
            <a href="#" className="hover:text-pink-400">Facebook</a>
          </div>
        </div>
      </div>

      <div className="mt-10 border-t border-white/20 pt-6 text-center text-sm text-white/50">
        &copy; {new Date().getFullYear()} ShopVerse. All rights reserved.
      </div>
    </footer>
  );
};

export default Footer;

const Footer = () => {
  return (
    <footer className="bg-[#333446] text-[#EAEFEF] py-10 px-6 md:px-14 lg:px-24 shadow-inner">
      <div className="max-w-screen-xl mx-auto grid gap-10 md:grid-cols-3">
        {/* Brand Info */}
        <div>
          <h2 className="text-2xl font-bold text-[#B8CFCE] mb-4 tracking-wide">
            EazyKart
          </h2>
          <p className="text-sm text-[#7F8CAA]">
            Your ultimate destination for quality products and a seamless shopping experience.
          </p>
        </div>

        {/* Quick Links */}
        <div>
          <h3 className="text-xl font-semibold text-[#EAEFEF] mb-4">Quick Links</h3>
          <ul className="space-y-2 text-sm">
            <li>
              <a href="/products" className="hover:text-[#B8CFCE] transition-all">Products</a>
            </li>
            <li>
              <a href="/login" className="hover:text-[#B8CFCE] transition-all">Login</a>
            </li>
            <li>
              <a href="/register" className="hover:text-[#B8CFCE] transition-all">Register</a>
            </li>
            <li>
              <a href="/admin/create-product" className="hover:text-[#B8CFCE] transition-all">Create Product</a>
            </li>
          </ul>
        </div>

        {/* Social Media */}
        <div>
          <h3 className="text-xl font-semibold text-[#EAEFEF] mb-4">Connect With Us</h3>
          <div className="flex flex-wrap gap-4 text-sm">
            <a href="#" className="hover:text-[#B8CFCE] transition">Instagram</a>
            <a href="#" className="hover:text-[#B8CFCE] transition">Twitter</a>
            <a href="#" className="hover:text-[#B8CFCE] transition">Facebook</a>
          </div>
        </div>
      </div>

      <div className="mt-10 border-t border-[#7F8CAA]/40 pt-6 text-center text-xs text-[#7F8CAA]">
        &copy; {new Date().getFullYear()} <span className="font-semibold text-[#B8CFCE]">EazyKart</span>. All rights reserved.
      </div>
    </footer>
  );
};

export default Footer;

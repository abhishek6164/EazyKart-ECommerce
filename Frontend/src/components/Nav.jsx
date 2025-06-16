import { useSelector } from "react-redux";
import { NavLink } from "react-router-dom";
import { useState } from "react";

const Nav = () => {
    const user = useSelector((state) => state.userReducer.users);
    const [isMenuOpen, setIsMenuOpen] = useState(false);

    const navLinkClass = ({ isActive }) =>
        `relative px-3 py-2 text-sm font-medium text-gray-800 transition-all duration-200 hover:text-blue-600 
         after:content-[''] after:block after:h-[2px] after:bg-blue-600 after:scale-x-0 after:transition-transform after:duration-300 after:origin-left hover:after:scale-x-100 
         ${isActive ? 'text-blue-600 after:scale-x-100' : ''}`;

    const mobileNavLinkClass = ({ isActive }) =>
        `block px-4 py-2 rounded text-sm font-medium 
         ${isActive ? 'bg-blue-600 text-white' : 'text-gray-700 hover:bg-gray-100'}`;

    return (
        <nav className="sticky top-0 z-50 backdrop-blur bg-white/80 shadow-md">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                <div className="flex justify-between items-center h-16">
                    {/* Logo or Brand */}
                    <div className="flex-shrink-0 text-xl font-bold text-blue-700">
                        MyStore
                    </div>

                    {/* Desktop Menu */}
                    <div className="hidden md:flex items-center space-x-6">
                        <NavLink to="/" className={navLinkClass}>
                            Home
                        </NavLink>
                        {user ? (
                            <>
                                {user?.isAdmin && (
                                    <NavLink to="/admin/create-product" className={navLinkClass}>
                                        Create Product
                                    </NavLink>
                                )}
                                <NavLink to="/admin/user-profile" className={navLinkClass}>
                                    Settings
                                </NavLink>
                                <NavLink to="/cart" className={navLinkClass}>
                                    Cart 🛒
                                </NavLink>
                            </>
                        ) : (
                            <NavLink to="/login" className={navLinkClass}>
                                Login
                            </NavLink>
                        )}
                    </div>

                    {/* Mobile Menu Button */}
                    <div className="md:hidden flex items-center">
                        <button
                            onClick={() => setIsMenuOpen(!isMenuOpen)}
                            className="text-gray-800 focus:outline-none"
                        >
                            <svg
                                className="h-6 w-6"
                                fill="none"
                                stroke="currentColor"
                                viewBox="0 0 24 24"
                                xmlns="http://www.w3.org/2000/svg"
                            >
                                <path
                                    strokeLinecap="round"
                                    strokeLinejoin="round"
                                    strokeWidth={2}
                                    d={isMenuOpen ? "M6 18L18 6M6 6l12 12" : "M4 6h16M4 12h16M4 18h16"}
                                />
                            </svg>
                        </button>
                    </div>
                </div>

                {/* Mobile Menu */}
                {isMenuOpen && (
                    <div className="md:hidden mt-2 border-t border-gray-200">
                        <div className="py-3 space-y-1">
                            <NavLink to="/" className={mobileNavLinkClass}>
                                Home
                            </NavLink>
                            {user ? (
                                <>
                                    {user?.isAdmin && (
                                        <NavLink to="/admin/create-product" className={mobileNavLinkClass}>
                                            Create Product
                                        </NavLink>
                                    )}
                                    <NavLink to="/admin/user-profile" className={mobileNavLinkClass}>
                                        Settings
                                    </NavLink>
                                    <NavLink to="/cart" className={mobileNavLinkClass}>
                                        Cart 🛒
                                    </NavLink>
                                </>
                            ) : (
                                <NavLink to="/login" className={mobileNavLinkClass}>
                                    Login
                                </NavLink>
                            )}
                        </div>
                    </div>
                )}
            </div>
        </nav>
    );
};

export default Nav;

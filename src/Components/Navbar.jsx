import { useState } from "react";
import { FiMenu, FiX, FiSearch, FiShoppingCart, FiUser } from "react-icons/fi";
import { useContext } from "react";
import { ProductContext } from "../Context/ProductContext";
import { Link } from "react-router-dom";

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);
  const { cartItems } = useContext(ProductContext);

  return (
    <>
      <header className="bg-gray-900 text-white">
        <div className="container mx-auto flex items-center justify-between px-6 py-3">
          <p className="text-sm">🚚 Free Shipping on Orders Above $50</p>

          <div className="flex items-center gap-4 text-sm">
            <a href="#" className="hover:text-yellow-400">
              Track Order
            </a>
            <a href="#" className="hover:text-yellow-400">
              Help
            </a>
          </div>
        </div>
      </header>
      <nav className="bg-white shadow-md sticky top-0 z-50">
        <div className="max-w-7xl mx-auto px-4">
          <div className="flex items-center justify-between h-16">
            {/* Logo */}
            <h1 className="text-2xl font-bold text-[#40352A]">ShopEase</h1>

            {/* Desktop Menu */}
            <ul className="hidden md:flex items-center gap-8 font-medium">
              <li>
                <a href="/" className="hover:text-indigo-600">
                  Home
                </a>
              </li>
              <li>
                <a href="/" className="hover:text-indigo-600">
                  Shop
                </a>
              </li>
              <li>
                <a href="/" className="hover:text-indigo-600">
                  Categories
                </a>
              </li>
              <li>
                <a href="/" className="hover:text-indigo-600">
                  About
                </a>
              </li>
              <li>
                <a href="/" className="hover:text-indigo-600">
                  Contact
                </a>
              </li>
            </ul>

            {/* Right Icons */}
            <div className="hidden md:flex items-center gap-5">
              <FiSearch size={22} className="cursor-pointer" />
              <Link to="/cart" className="relative cursor-pointer">
                <FiShoppingCart size={22} />
                <span className="absolute -top-2 -right-2 bg-red-500 text-white text-xs h-5 w-5 rounded-full flex items-center justify-center">
                  {cartItems.length}
                </span>
              </Link>
              <FiUser size={22} className="cursor-pointer" />
            </div>

            {/* Mobile Menu Button */}
            <button className="md:hidden" onClick={() => setIsOpen(!isOpen)}>
              {isOpen ? <FiX size={28} /> : <FiMenu size={28} />}
            </button>
          </div>

          {/* Mobile Menu */}
          <div
            className={`md:hidden overflow-hidden transition-all duration-300 ${
              isOpen ? "max-h-96 py-4" : "max-h-0"
            }`}
          >
            <ul className="flex flex-col gap-4 font-medium">
              <li>
                <a href="/">Home</a>
              </li>
              <li>
                <a href="/">Shop</a>
              </li>
              <li>
                <a href="/">Categories</a>
              </li>
              <li>
                <a href="/">About</a>
              </li>
              <li>
                <a href="/">Contact</a>
              </li>
            </ul>

            <div className="flex gap-5 mt-5 border-t pt-4">
              <FiSearch size={22} />
              <FiShoppingCart size={22} />
              <FiUser size={22} />
            </div>
          </div>
        </div>
      </nav>
    </>
  );
}

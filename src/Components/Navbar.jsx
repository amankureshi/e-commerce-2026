import { useState, useContext } from "react";
import { FiMenu, FiX, FiSearch, FiShoppingCart, FiUser } from "react-icons/fi";
import { NavLink } from "react-router-dom";
import { ProductContext } from "../Context/ProductContext";

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);
  const { cartItems } = useContext(ProductContext);

  const navLinkStyle = ({ isActive }) =>
    isActive
      ? "text-indigo-600 font-semibold"
      : "hover:text-indigo-600 transition";

  return (
    <>
      {/* Top Header */}
      <header className="bg-gray-900 text-white">
        <div className="container mx-auto flex items-center justify-between px-6 py-3">
          <p className="text-sm">🚚 Free Shipping on Orders Above $50</p>

          <div className="flex items-center gap-4 text-sm">
            <NavLink to="/track-order" className="hover:text-yellow-400">
              Track Order
            </NavLink>

            <NavLink to="/help" className="hover:text-yellow-400">
              Help
            </NavLink>
          </div>
        </div>
      </header>

      {/* Navbar */}
      <nav className="bg-white shadow-md sticky top-0 z-50">
        <div className="max-w-7xl mx-auto px-4">
          <div className="flex items-center justify-between h-16">
            {/* Logo */}
            <NavLink to="/" className="text-2xl font-bold text-[#40352A]">
              ShopEase
            </NavLink>

            {/* <------ Desktop Menu ------->*/}
            <ul className="hidden md:flex items-center gap-8 font-medium">
              <li>
                <NavLink to="/" className={navLinkStyle}>
                  Home
                </NavLink>
              </li>

              <li>
                <NavLink to="/shop" className={navLinkStyle}>
                  Shop
                </NavLink>
              </li>

              <li>
                <NavLink to="/categories" className={navLinkStyle}>
                  Categories
                </NavLink>
              </li>

              <li>
                <NavLink to="/about" className={navLinkStyle}>
                  About
                </NavLink>
              </li>

              <li>
                <NavLink to="/contact" className={navLinkStyle}>
                  Contact
                </NavLink>
              </li>
            </ul>

            {/*<------ Right Icons ------>*/}
            <div className="hidden md:flex items-center gap-5">
              <FiSearch
                size={22}
                className="cursor-pointer hover:text-indigo-600"
              />

              <NavLink to="/cart" className="relative">
                <FiShoppingCart
                  size={22}
                  className="cursor-pointer hover:text-indigo-600"
                />

                <span className="absolute -top-2 -right-2 bg-red-500 text-white text-xs h-5 w-5 rounded-full flex items-center justify-center">
                  {cartItems.length}
                </span>
              </NavLink>

              <NavLink to="/profile">
                <FiUser
                  size={22}
                  className="cursor-pointer hover:text-indigo-600"
                />
              </NavLink>
            </div>

            {/*<------ Mobile Menu Button ------>*/}
            <button className="md:hidden" onClick={() => setIsOpen(!isOpen)}>
              {isOpen ? <FiX size={28} /> : <FiMenu size={28} />}
            </button>
          </div>

          {/*<------ Mobile Menu ------>*/}
          <div
            className={`md:hidden overflow-hidden transition-all duration-300 ${
              isOpen ? "max-h-96 py-4" : "max-h-0"
            }`}
          >
            <ul className="flex flex-col gap-4 font-medium">
              <li>
                <NavLink
                  to="/"
                  className={navLinkStyle}
                  onClick={() => setIsOpen(false)}
                >
                  Home
                </NavLink>
              </li>

              <li>
                <NavLink
                  to="/shop"
                  className={navLinkStyle}
                  onClick={() => setIsOpen(false)}
                >
                  Shop
                </NavLink>
              </li>

              <li>
                <NavLink
                  to="/categories"
                  className={navLinkStyle}
                  onClick={() => setIsOpen(false)}
                >
                  Categories
                </NavLink>
              </li>

              <li>
                <NavLink
                  to="/about"
                  className={navLinkStyle}
                  onClick={() => setIsOpen(false)}
                >
                  About
                </NavLink>
              </li>

              <li>
                <NavLink
                  to="/contact"
                  className={navLinkStyle}
                  onClick={() => setIsOpen(false)}
                >
                  Contact
                </NavLink>
              </li>
            </ul>

            {/*<------ Mobile Icons ------>*/}
            <div className="flex gap-5 mt-5 border-t pt-4">
              <FiSearch
                size={22}
                className="cursor-pointer hover:text-indigo-600"
              />

              <NavLink to="/cart" onClick={() => setIsOpen(false)}>
                <div className="relative">
                  <FiShoppingCart
                    size={22}
                    className="cursor-pointer hover:text-indigo-600"
                  />

                  <span className="absolute -top-2 -right-2 bg-red-500 text-white text-xs h-5 w-5 rounded-full flex items-center justify-center">
                    {cartItems.length}
                  </span>
                </div>
              </NavLink>

              <NavLink to="/profile" onClick={() => setIsOpen(false)}>
                <FiUser
                  size={22}
                  className="cursor-pointer hover:text-indigo-600"
                />
              </NavLink>
            </div>
          </div>
        </div>
      </nav>
    </>
  );
}

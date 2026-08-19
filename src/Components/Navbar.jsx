import React, { useState } from "react";
import { Link, NavLink } from "react-router-dom";

const Navbar = () => {
  const [menuOpen, setMenuOpen] = useState(false);

  const navLinks = [
    { name: "Home", path: "/" },
    { name: "About", path: "/about" },
    { name: "Products", path: "/products" },
    { name: "Contact", path: "/contact" },
  ];

  return (
    <header className="sticky top-0 z-50 border-b border-slate-100 bg-white/90 backdrop-blur-xl">
      <nav className="mx-auto flex h-20 max-w-7xl items-center justify-between px-5 sm:px-8 lg:px-10 xl:px-12">

        {/* ================= LOGO ================= */}
        <Link
          to="/"
          onClick={() => setMenuOpen(false)}
          className="group flex items-center gap-2"
        >
          <div className="flex h-10 w-10 items-center justify-center rounded-xl bg-slate-900 text-lg font-black text-white shadow-lg shadow-slate-900/20 transition-all duration-300 group-hover:rotate-[-5deg] group-hover:bg-blue-700">
            A
          </div>

          <div className="leading-none">
            <span className="block text-lg font-extrabold tracking-tight text-slate-900">
              AUREX
            </span>

            <span className="text-[9px] font-medium uppercase tracking-[0.25em] text-slate-400">
              Store
            </span>
          </div>
        </Link>

        {/* ================= DESKTOP MENU ================= */}
        <div className="hidden items-center gap-9 lg:flex">
          {navLinks.map((link) => (
            <NavLink
              key={link.name}
              to={link.path}
              className={({ isActive }) =>
                `relative py-2 text-sm font-medium transition-colors duration-300 ${isActive
                  ? "text-slate-900"
                  : "text-slate-500 hover:text-slate-900"
                }`
              }
            >
              {({ isActive }) => (
                <>
                  {link.name}

                  <span
                    className={`absolute bottom-0 left-0 h-0.5 rounded-full bg-blue-600 transition-all duration-300 ${isActive ? "w-full" : "w-0"
                      }`}
                  />
                </>
              )}
            </NavLink>
          ))}
        </div>

        {/* ================= RIGHT ACTIONS ================= */}
        <div className="hidden items-center gap-2 sm:flex">

          {/* Search */}
          <button
            aria-label="Search"
            className="flex h-10 w-10 items-center justify-center rounded-xl text-slate-600 transition-all duration-300 hover:bg-slate-100 hover:text-slate-900"
          >
            <svg
              className="h-5 w-5"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
              strokeWidth="1.8"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="m21 21-4.35-4.35m2.1-5.4a7.5 7.5 0 1 1-15 0 7.5 7.5 0 0 1 15 0Z"
              />
            </svg>
          </button>

          {/* Account */}
          <button
            aria-label="Account"
            className="flex h-10 w-10 items-center justify-center rounded-xl text-slate-600 transition-all duration-300 hover:bg-slate-100 hover:text-slate-900"
          >
            <svg
              className="h-5 w-5"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
              strokeWidth="1.8"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="M18 20a6 6 0 0 0-12 0"
              />

              <circle cx="12" cy="8" r="4" />
            </svg>
          </button>

          {/* Cart */}
          <Link
            to="/cart"
            aria-label="Shopping cart"
            className="relative flex h-10 w-10 items-center justify-center rounded-xl text-slate-600 transition-all duration-300 hover:bg-slate-100 hover:text-slate-900"
          >
            <svg
              className="h-5 w-5"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
              strokeWidth="1.8"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="M3 4h2l2.4 11.2a2 2 0 0 0 2 1.6h7.8a2 2 0 0 0 1.9-1.4L21 8H6"
              />

              <circle cx="10" cy="20" r="1" />
              <circle cx="18" cy="20" r="1" />
            </svg>

            {/* Cart Count */}
            <span className="absolute right-0 top-0 flex h-4 min-w-4 items-center justify-center rounded-full bg-[#f3dfda] px-1 text-[9px] font-bold text-black">
              2
            </span>
          </Link>

          {/* Shop Button */}
          <Link
            to="/products"
            className="ml-2 rounded-xl bg-slate-900 px-5 py-2.5 text-sm font-semibold text-white shadow-md shadow-slate-900/10 transition-all duration-300 hover:-translate-y-0.5 hover:bg-blue-700 hover:shadow-lg"
          >
            Shop Now
          </Link>
        </div>

        {/* ================= MOBILE MENU BUTTON ================= */}
        <button
          onClick={() => setMenuOpen(!menuOpen)}
          aria-label="Toggle menu"
          className="flex h-10 w-10 items-center justify-center rounded-xl text-slate-700 transition-colors hover:bg-slate-100 sm:hidden"
        >
          {menuOpen ? (
            <svg
              className="h-6 w-6"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
              strokeWidth="2"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="M6 6l12 12M18 6 6 18"
              />
            </svg>
          ) : (
            <svg
              className="h-6 w-6"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
              strokeWidth="2"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="M4 7h16M4 12h16M4 17h16"
              />
            </svg>
          )}
        </button>
      </nav>

      {/* ================= MOBILE MENU ================= */}
      <div
        className={`overflow-hidden border-t border-slate-100 bg-white transition-all duration-300 sm:hidden ${menuOpen ? "max-h-[500px] opacity-100" : "max-h-0 opacity-0"
          }`}
      >
        <div className="mx-auto max-w-7xl px-5 py-5">

          {/* Menu Links */}
          <div className="flex flex-col">
            {navLinks.map((link) => (
              <NavLink
                key={link.name}
                to={link.path}
                onClick={() => setMenuOpen(false)}
                className={({ isActive }) =>
                  `border-b border-slate-100 py-3.5 text-sm font-medium ${isActive
                    ? "text-blue-600"
                    : "text-slate-600 hover:text-slate-900"
                  }`
                }
              >
                {link.name}
              </NavLink>
            ))}
          </div>

          {/* Mobile Actions */}
          <div className="mt-5 grid grid-cols-2 gap-3">
            <button className="flex items-center justify-center gap-2 rounded-xl border border-slate-200 py-3 text-sm font-medium text-slate-700 transition hover:bg-slate-50">
              <svg
                className="h-4 w-4"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
                strokeWidth="1.8"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="m21 21-4.35-4.35m2.1-5.4a7.5 7.5 0 1 1-15 0 7.5 7.5 0 0 1 15 0Z"
                />
              </svg>
              Search
            </button>

            <Link
              to="/cart"
              onClick={() => setMenuOpen(false)}
              className="flex items-center justify-center gap-2 rounded-xl border border-slate-200 py-3 text-sm font-medium text-slate-700 transition hover:bg-slate-50"
            >
              Cart
              <span className="rounded-full bg-pink-300 px-1.5 py-0.5 text-[10px] font-bold text-white">
                2
              </span>
            </Link>
          </div>

          {/* Mobile Shop Button */}
          <Link
            to="/products"
            onClick={() => setMenuOpen(false)}
            className="mt-3 flex items-center justify-center rounded-xl bg-slate-900 py-3 text-sm font-semibold text-white transition hover:bg-blue-700"
          >
            Shop Now
          </Link>
        </div>
      </div>
    </header>
  );
};

export default Navbar;
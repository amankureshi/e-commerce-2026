// Header.jsx
import HeroImage from "../assets/images/header_image.png";
import React from "react";

const Header = () => {
  return (
    <section className="relative min-h-[calc(100vh-80px)] overflow-hidden bg-[#f8fafc]">
      {/* Background Decorative Elements */}
      <div className="pointer-events-none absolute -left-40 top-20 h-80 w-80 rounded-full bg-blue-100/50 blur-3xl" />
      <div className="pointer-events-none absolute -right-40 bottom-0 h-96 w-96 rounded-full bg-indigo-100/60 blur-3xl" />

      <div className="relative mx-auto flex min-h-[calc(100vh-80px)] max-w-7xl items-center px-5 py-12 sm:px-8 lg:px-10 xl:px-12">
        <div className="grid w-full items-center gap-12 lg:grid-cols-2 lg:gap-16">

          {/* ================= LEFT CONTENT ================= */}
          <div className="max-w-2xl text-center lg:text-left">

            {/* Small Badge */}
            <div className="mb-6 inline-flex items-center gap-2 rounded-full border border-blue-100 bg-white px-4 py-2 text-sm font-medium text-slate-600 shadow-sm">
              <span className="flex h-2 w-2 rounded-full bg-blue-600" />
              New Collection 2026
            </div>

            {/* Heading */}
            <h1 className="text-4xl font-extrabold leading-[1.08] tracking-tight text-[#101828] sm:text-5xl md:text-6xl xl:text-7xl">
              Discover
              <span className="block bg-gradient-to-r from-[#E0BDB6] via-pink-400 to-pink-600 bg-clip-text text-transparent">
                Products You'll Love
              </span>
            </h1>

            {/* Description */}
            <p className="mx-auto mt-6 max-w-xl text-base leading-7 text-slate-600 sm:text-lg lg:mx-0">
              Shop a carefully selected collection of fashion, lifestyle,
              electronics, and everyday essentials — all in one place,
              delivered right to your doorstep.
            </p>

            {/* CTA Buttons */}
            <div className="mt-8 flex flex-col items-center gap-4 sm:flex-row lg:justify-start">
              <a
                href="/products"
                className="group flex w-full items-center justify-center gap-2 rounded-xl bg-slate-900 px-7 py-3.5 text-sm font-semibold text-white shadow-lg shadow-slate-900/20 transition-all duration-300 hover:-translate-y-1 hover:bg-[#E0BDB6] hover:shadow-xl hover:shadow-pink-300/20 sm:w-auto"
              >
                Shop Now
                <svg
                  className="h-4 w-4 transition-transform duration-300 group-hover:translate-x-1"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                  strokeWidth="2"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    d="M13 7l5 5m0 0l-5 5m5-5H6"
                  />
                </svg>
              </a>

              <a
                href="/collections"
                className="flex w-full items-center justify-center rounded-xl border border-slate-200 bg-white px-7 py-3.5 text-sm font-semibold text-slate-700 shadow-sm transition-all duration-300 hover:-translate-y-1 hover:border-slate-300 hover:bg-slate-50 hover:shadow-md sm:w-auto"
              >
                Explore Collection
              </a>
            </div>

            {/* Trust Indicators */}
            <div className="mt-10 flex flex-wrap items-center justify-center gap-x-7 gap-y-4 text-sm text-slate-500 lg:justify-start">
              <div className="flex items-center gap-2">
                <span className="flex h-7 w-7 items-center justify-center rounded-full bg-emerald-100 text-emerald-600">
                  ✓
                </span>
                Secure Payment
              </div>

              <div className="flex items-center gap-2">
                <span className="flex h-7 w-7 items-center justify-center rounded-full bg-blue-100 text-blue-600">
                  ✓
                </span>
                Fast Delivery
              </div>

              <div className="flex items-center gap-2">
                <span className="flex h-7 w-7 items-center justify-center rounded-full bg-violet-100 text-violet-600">
                  ✓
                </span>
                Easy Returns
              </div>
            </div>
          </div>

          {/* ================= RIGHT PRODUCT SHOWCASE ================= */}
          <div className="relative mx-auto w-full max-w-xl">

            {/* Main Glow */}
            <div className="absolute left-1/2 top-1/2 h-[70%] w-[70%] -translate-x-1/2 -translate-y-1/2  bg-blue-200/40 blur-3xl" />

            {/* Decorative Circle */}
            <div className="absolute left-1/2 top-1/2 h-[82%] w-[82%] -translate-x-1/2 -translate-y-1/2   bg-gradient-to-br from-white/80 to-blue-50/50" />

            {/* Main Product Card */}
            <div className="relative z-10 mx-auto aspect-square max-w-[480px] overflow-hidden rounded-[2rem]  bg-gradient-to-br from-slate-100 via-white to-blue-50 shadow-2xl shadow-slate-300/50 transition-transform duration-500 hover:scale-[1.015]">

              {/* Product Image */}
              <img
                src={HeroImage}
                alt="Featured product"
                className="h-full w-full object-cover transition-transform duration-700 hover:scale-105"
              />

              {/* Image Overlay */}
              <div className="absolute inset-0 bg-gradient-to-t from-slate-900/30 via-transparent to-transparent" />

              {/* Discount Badge */}
              <div className="absolute left-5 top-5 rounded-full bg-red-500 px-4 py-2 text-xs font-bold text-white shadow-lg">
                30% OFF
              </div>

              {/* Product Info Bottom */}
              <div className="absolute bottom-5 left-5 right-5 rounded-2xl border border-white/40 bg-white/90 p-4 shadow-xl backdrop-blur-md">
                <div className="flex items-center justify-between gap-4">
                  <div>
                    <p className="text-xs font-medium text-slate-500">
                      Trending Now
                    </p>

                    <h3 className="mt-1 text-base font-bold text-slate-900 sm:text-lg">
                      Premium Lifestyle Collection
                    </h3>
                  </div>

                  <div className="text-right">
                    <p className="text-xs text-slate-400 line-through">
                      $149
                    </p>
                    <p className="text-lg font-extrabold text-slate-900">
                      $104
                    </p>
                  </div>
                </div>
              </div>
            </div>

            {/* ================= FLOATING RATING CARD ================= */}
            <div className="absolute -left-2 top-12 z-20 hidden rounded-2xl border border-white/80 bg-white/95 p-3 shadow-xl backdrop-blur-md sm:block md:-left-5">
              <div className="flex items-center gap-3">
                <div className="flex h-10 w-10 items-center justify-center rounded-xl bg-amber-50 text-lg">
                  ★
                </div>

                <div>
                  <p className="text-sm font-bold text-slate-900">4.9/5</p>
                  <p className="text-xs text-slate-500">2,400+ Reviews</p>
                </div>
              </div>
            </div>

            {/* ================= FLOATING DELIVERY CARD ================= */}
            <div className="absolute -right-2 top-1/2 z-20 hidden -translate-y-1/2 rounded-2xl border border-white/80 bg-white/95 p-3 shadow-xl backdrop-blur-md sm:block md:-right-5">
              <div className="flex items-center gap-3">
                <div className="flex h-10 w-10 items-center justify-center rounded-xl bg-emerald-50 text-emerald-600">
                  <svg
                    className="h-5 w-5"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                    strokeWidth="2"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      d="M5 12h14M12 5l7 7-7 7"
                    />
                  </svg>
                </div>

                <div>
                  <p className="text-sm font-bold text-slate-900">
                    Free Delivery
                  </p>
                  <p className="text-xs text-slate-500">On orders $50+</p>
                </div>
              </div>
            </div>

            {/* ================= SMALL DECORATIVE DOTS ================= */}
            <div className="absolute -right-1 top-8 h-4 w-4 rounded-full bg-[#E0BDB6] shadow-lg shadow-blue-500/30 sm:right-5" />

            <div className="absolute -bottom-2 left-10 h-3 w-3 rounded-full bg-[#E0BDB6] shadow-lg shadow-indigo-500/30" />

            <div className="absolute bottom-20 right-0 h-5 w-5 rounded-full border-4 border-white bg-violet-400 shadow-lg sm:-right-3" />
          </div>
        </div>
      </div>
    </section>
  );
};

export default Header;
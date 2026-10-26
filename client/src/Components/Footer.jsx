import React from "react";
import {
    FaFacebookF,
    FaInstagram,
    FaTwitter,
    FaYoutube,
    FaMapMarkerAlt,
    FaPhoneAlt,
    FaEnvelope,
    FaArrowRight,
} from "react-icons/fa";

const Footer = () => {
    return (
        <footer className="bg-[#101828] text-white">

            {/* ================= NEWSLETTER ================= */}
            <div className="border-b border-white/10">
                <div className="mx-auto flex max-w-7xl flex-col gap-6 px-4 py-10 sm:px-6 lg:flex-row lg:items-center lg:justify-between lg:px-8">

                    <div>
                        <p className="mb-2 text-xs font-semibold uppercase tracking-[0.2em] text-[#E0BDB6]">
                            Stay Updated
                        </p>

                        <h2 className="text-2xl font-bold sm:text-3xl">
                            Subscribe to our newsletter
                        </h2>

                        <p className="mt-2 max-w-lg text-sm leading-6 text-slate-400">
                            Get the latest products, exclusive offers and updates directly
                            in your inbox.
                        </p>
                    </div>

                    <div className="flex w-full max-w-md">
                        <input
                            type="email"
                            placeholder="Enter your email"
                            className="min-w-0 flex-1 rounded-l-xl border border-white/10 bg-white/5 px-4 py-3 text-sm text-white outline-none placeholder:text-slate-500 focus:border-[#E0BDB6]"
                        />

                        <button
                            type="button"
                            className="flex items-center gap-2 rounded-r-xl bg-[#E0BDB6] px-5 py-3 text-sm font-semibold text-[#101828] transition-all duration-300 hover:bg-pink-400"
                        >
                            Subscribe
                            <FaArrowRight className="text-xs" />
                        </button>
                    </div>

                </div>
            </div>

            {/* ================= MAIN FOOTER ================= */}
            <div className="mx-auto max-w-7xl px-4 py-12 sm:px-6 lg:px-8">

                <div className="grid grid-cols-1 gap-10 sm:grid-cols-2 lg:grid-cols-4">

                    {/* BRAND */}
                    <div>
                        <h2 className="text-2xl font-bold">
                            Shop<span className="text-[#E0BDB6]">Nest</span>
                        </h2>

                        <p className="mt-4 max-w-sm text-sm leading-7 text-slate-400">
                            Your trusted destination for quality products at great prices.
                            We make shopping simple, convenient and enjoyable.
                        </p>

                        {/* Social Icons */}
                        <div className="mt-6 flex gap-3">

                            <a
                                href="#"
                                className="flex h-10 w-10 items-center justify-center rounded-full bg-white/5 text-slate-300 transition-all duration-300 hover:-translate-y-1 hover:bg-[#E0BDB6] hover:text-[#101828]"
                            >
                                <FaFacebookF />
                            </a>

                            <a
                                href="#"
                                className="flex h-10 w-10 items-center justify-center rounded-full bg-white/5 text-slate-300 transition-all duration-300 hover:-translate-y-1 hover:bg-[#E0BDB6] hover:text-[#101828]"
                            >
                                <FaInstagram />
                            </a>

                            <a
                                href="#"
                                className="flex h-10 w-10 items-center justify-center rounded-full bg-white/5 text-slate-300 transition-all duration-300 hover:-translate-y-1 hover:bg-[#E0BDB6] hover:text-[#101828]"
                            >
                                <FaTwitter />
                            </a>

                            <a
                                href="#"
                                className="flex h-10 w-10 items-center justify-center rounded-full bg-white/5 text-slate-300 transition-all duration-300 hover:-translate-y-1 hover:bg-[#E0BDB6] hover:text-[#101828]"
                            >
                                <FaYoutube />
                            </a>

                        </div>
                    </div>

                    {/* QUICK LINKS */}
                    <div>
                        <h3 className="mb-5 text-sm font-semibold uppercase tracking-wider text-white">
                            Quick Links
                        </h3>

                        <ul className="space-y-3 text-sm text-slate-400">
                            <li>
                                <a href="/" className="transition hover:text-[#E0BDB6]">
                                    Home
                                </a>
                            </li>

                            <li>
                                <a href="/products" className="transition hover:text-[#E0BDB6]">
                                    Products
                                </a>
                            </li>

                            <li>
                                <a href="/about" className="transition hover:text-[#E0BDB6]">
                                    About Us
                                </a>
                            </li>

                            <li>
                                <a href="/contact" className="transition hover:text-[#E0BDB6]">
                                    Contact
                                </a>
                            </li>

                            <li>
                                <a href="/cart" className="transition hover:text-[#E0BDB6]">
                                    Shopping Cart
                                </a>
                            </li>
                        </ul>
                    </div>

                    {/* CUSTOMER CARE */}
                    <div>
                        <h3 className="mb-5 text-sm font-semibold uppercase tracking-wider text-white">
                            Customer Care
                        </h3>

                        <ul className="space-y-3 text-sm text-slate-400">
                            <li>
                                <a href="#" className="transition hover:text-[#E0BDB6]">
                                    Shipping & Delivery
                                </a>
                            </li>

                            <li>
                                <a href="#" className="transition hover:text-[#E0BDB6]">
                                    Returns & Refunds
                                </a>
                            </li>

                            <li>
                                <a href="#" className="transition hover:text-[#E0BDB6]">
                                    Privacy Policy
                                </a>
                            </li>

                            <li>
                                <a href="#" className="transition hover:text-[#E0BDB6]">
                                    Terms & Conditions
                                </a>
                            </li>

                            <li>
                                <a href="#" className="transition hover:text-[#E0BDB6]">
                                    FAQs
                                </a>
                            </li>
                        </ul>
                    </div>

                    {/* CONTACT */}
                    <div>
                        <h3 className="mb-5 text-sm font-semibold uppercase tracking-wider text-white">
                            Contact Us
                        </h3>

                        <div className="space-y-4 text-sm text-slate-400">

                            <div className="flex items-start gap-3">
                                <FaMapMarkerAlt className="mt-1 shrink-0 text-[#E0BDB6]" />
                                <p>
                                    123 Market Street,
                                    <br />
                                    Ahmedabad, Gujarat
                                </p>
                            </div>

                            <div className="flex items-center gap-3">
                                <FaPhoneAlt className="shrink-0 text-[#E0BDB6]" />
                                <span>+91 12345 67890</span>
                            </div>

                            <div className="flex items-center gap-3">
                                <FaEnvelope className="shrink-0 text-[#E0BDB6]" />
                                <span>support@shopnest.com</span>
                            </div>

                        </div>
                    </div>

                </div>
            </div>

            {/* ================= BOTTOM ================= */}
            <div className="border-t border-white/10">
                <div className="mx-auto flex max-w-7xl flex-col gap-3 px-4 py-5 text-center text-xs text-slate-500 sm:px-6 md:flex-row md:items-center md:justify-between lg:px-8">

                    <p>
                        © {new Date().getFullYear()} ShopNest. All rights reserved.
                    </p>

                    <p>
                        Made with{" "}
                        <span className="font-semibold text-[#E0BDB6]">♥</span>{" "}
                        for a better shopping experience.
                    </p>

                </div>
            </div>

        </footer>
    );
};

export default Footer;

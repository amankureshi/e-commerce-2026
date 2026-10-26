
import { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import {
    FaEnvelope,
    FaLock,
    FaEye,
    FaEyeSlash,
    FaSignInAlt,
} from "react-icons/fa";

const Login = () => {
    const navigate = useNavigate();

    const [showPassword, setShowPassword] = useState(false);

    const [formData, setFormData] = useState({
        email: "",
        password: "",
    });

    const handleChange = (e) => {
        const { name, value } = e.target;

        setFormData((prev) => ({
            ...prev,
            [name]: value,
        }));
    };

    const handleSubmit = (e) => {
        e.preventDefault();

        console.log("Login Data:", formData);

        // Abhi demo ke liye
        // Login ke baad checkout par bhej sakte ho
        navigate("/cart");
    };

    return (
        <main className="min-h-screen bg-[#f8f7f4]">

            <div className="mx-auto grid min-h-screen w-full max-w-7xl lg:grid-cols-2">

                {/* ================= LEFT SIDE ================= */}
                <div className="relative hidden overflow-hidden bg-[#1D2434] lg:flex lg:items-center">

                    {/* Decorative circles */}
                    <div className="absolute -right-24 -top-24 h-80 w-80 rounded-full bg-[#E0BDB7]/20 blur-3xl" />

                    <div className="absolute -bottom-32 -left-24 h-96 w-96 rounded-full bg-[#E0BDB7]/10 blur-3xl" />

                    <div className="relative z-10 px-12 xl:px-20">

                        {/* Logo */}
                        <div className="mb-12">
                            <h2 className="text-2xl font-bold tracking-tight text-white">
                                Your<span className="text-[#E0BDB7]">Store</span>
                            </h2>
                        </div>

                        <p className="text-xs font-semibold uppercase tracking-[0.25em] text-[#E0BDB7]">
                            Welcome Back
                        </p>

                        <h1 className="mt-4 text-4xl font-bold leading-tight text-white xl:text-5xl">
                            Good To See
                            <span className="block text-[#E0BDB7]">
                                You Again.
                            </span>
                        </h1>

                        <p className="mt-6 max-w-md text-sm leading-7 text-slate-300">
                            Sign in to continue shopping, manage your orders and discover
                            products picked just for you.
                        </p>

                        {/* Features */}
                        <div className="mt-10 space-y-4">

                            <div className="flex items-center gap-3">
                                <div className="flex h-9 w-9 items-center justify-center rounded-full bg-[#E0BDB7] text-sm font-bold text-[#1D2434]">
                                    ✓
                                </div>

                                <p className="text-sm text-slate-200">
                                    Access your saved products
                                </p>
                            </div>

                            <div className="flex items-center gap-3">
                                <div className="flex h-9 w-9 items-center justify-center rounded-full bg-[#E0BDB7] text-sm font-bold text-[#1D2434]">
                                    ✓
                                </div>

                                <p className="text-sm text-slate-200">
                                    Track your recent orders
                                </p>
                            </div>

                            <div className="flex items-center gap-3">
                                <div className="flex h-9 w-9 items-center justify-center rounded-full bg-[#E0BDB7] text-sm font-bold text-[#1D2434]">
                                    ✓
                                </div>

                                <p className="text-sm text-slate-200">
                                    Enjoy a faster checkout
                                </p>
                            </div>

                        </div>
                    </div>
                </div>

                {/* ================= RIGHT SIDE ================= */}
                <div className="flex items-center justify-center px-4 py-10 sm:px-6 lg:px-10 xl:px-16">

                    <div className="w-full max-w-md">

                        {/* Mobile Logo */}
                        <div className="mb-8 text-center lg:hidden">
                            <h2 className="text-2xl font-bold text-[#1D2434]">
                                Your<span className="text-[#E0BDB7]">Store</span>
                            </h2>
                        </div>

                        {/* Heading */}
                        <div className="mb-8">

                            <p className="text-xs font-semibold uppercase tracking-[0.2em] text-[#E0BDB7]">
                                Welcome Back
                            </p>

                            <h2 className="mt-2 text-3xl font-bold text-[#1D2434] sm:text-4xl">
                                Sign In
                            </h2>

                            <p className="mt-2 text-sm text-slate-500">
                                Enter your details to access your account.
                            </p>

                        </div>

                        {/* ================= FORM ================= */}
                        <form onSubmit={handleSubmit} className="space-y-5">

                            {/* Email */}
                            <div>
                                <label
                                    htmlFor="email"
                                    className="mb-2 block text-sm font-semibold text-[#1D2434]"
                                >
                                    Email Address
                                </label>

                                <div className="relative">

                                    <FaEnvelope className="absolute left-4 top-1/2 -translate-y-1/2 text-sm text-slate-400" />

                                    <input
                                        id="email"
                                        name="email"
                                        type="email"
                                        value={formData.email}
                                        onChange={handleChange}
                                        placeholder="Enter your email"
                                        required
                                        className="
                      w-full
                      rounded-xl
                      border
                      border-slate-200
                      bg-white
                      py-3.5
                      pl-11
                      pr-4
                      text-sm
                      text-[#1D2434]
                      outline-none
                      transition-all
                      placeholder:text-slate-400
                      focus:border-[#E0BDB7]
                      focus:ring-2
                      focus:ring-[#E0BDB7]/30
                    "
                                    />

                                </div>
                            </div>

                            {/* Password */}
                            <div>
                                <div className="mb-2 flex items-center justify-between">

                                    <label
                                        htmlFor="password"
                                        className="block text-sm font-semibold text-[#1D2434]"
                                    >
                                        Password
                                    </label>

                                    <button
                                        type="button"
                                        className="text-xs font-semibold text-slate-400 transition-colors hover:text-[#1D2434]"
                                    >
                                        Forgot Password?
                                    </button>

                                </div>

                                <div className="relative">

                                    <FaLock className="absolute left-4 top-1/2 -translate-y-1/2 text-sm text-slate-400" />

                                    <input
                                        id="password"
                                        name="password"
                                        type={showPassword ? "text" : "password"}
                                        value={formData.password}
                                        onChange={handleChange}
                                        placeholder="Enter your password"
                                        required
                                        className="
                      w-full
                      rounded-xl
                      border
                      border-slate-200
                      bg-white
                      py-3.5
                      pl-11
                      pr-12
                      text-sm
                      text-[#1D2434]
                      outline-none
                      transition-all
                      placeholder:text-slate-400
                      focus:border-[#E0BDB7]
                      focus:ring-2
                      focus:ring-[#E0BDB7]/30
                    "
                                    />

                                    <button
                                        type="button"
                                        onClick={() => setShowPassword(!showPassword)}
                                        className="absolute right-4 top-1/2 -translate-y-1/2 text-sm text-slate-400 transition-colors hover:text-[#1D2434]"
                                    >
                                        {showPassword ? <FaEyeSlash /> : <FaEye />}
                                    </button>

                                </div>
                            </div>

                            {/* Remember Me */}
                            <div className="flex items-center gap-2">

                                <input
                                    id="remember"
                                    type="checkbox"
                                    className="h-4 w-4 accent-[#1D2434]"
                                />

                                <label
                                    htmlFor="remember"
                                    className="text-xs text-slate-500"
                                >
                                    Remember me
                                </label>

                            </div>

                            {/* Submit */}
                            <button
                                type="submit"
                                className="
                  flex
                  w-full
                  items-center
                  justify-center
                  gap-2
                  rounded-xl
                  bg-[#1D2434]
                  px-6
                  py-3.5
                  text-sm
                  font-bold
                  text-white
                  transition-all
                  duration-300
                  hover:-translate-y-0.5
                  hover:bg-[#E0BDB7]
                  hover:text-[#1D2434]
                  hover:shadow-lg
                "
                            >
                                <FaSignInAlt className="text-sm" />
                                Sign In
                            </button>

                        </form>

                        {/* Divider */}
                        <div className="my-7 flex items-center gap-3">
                            <div className="h-px flex-1 bg-slate-200" />

                            <span className="text-xs text-slate-400">
                                OR
                            </span>

                            <div className="h-px flex-1 bg-slate-200" />
                        </div>

                        {/* Signup */}
                        <p className="text-center text-sm text-slate-500">
                            Don't have an account?{" "}
                            <Link
                                to="/signup"
                                className="font-bold text-[#1D2434] transition-colors hover:text-[#E0BDB7]"
                            >
                                Create Account
                            </Link>
                        </p>

                    </div>
                </div>
            </div>
        </main>
    );
};

export default Login;

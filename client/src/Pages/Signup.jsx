
import { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import {
    FaUser,
    FaEnvelope,
    FaLock,
    FaEye,
    FaEyeSlash,
    FaUserPlus,
} from "react-icons/fa";
import { useAuth } from "../Context/AuthContext";

const Signup = () => {
    const [showPassword, setShowPassword] = useState(false);
    const [showConfirmPassword, setShowConfirmPassword] = useState(false);

    const [formData, setFormData] = useState({
        name: "",
        email: "",
        password: "",
        confirmPassword: "",
    });

    const [error, setError] = useState("");
    const [loading, setLoading] = useState(false);

    const { register } = useAuth();
    const navigate = useNavigate();

    const handleChange = (e) => {
        const { name, value } = e.target;

        setFormData((prev) => ({
            ...prev,
            [name]: value,
        }));

        if (error) setError("");
    };

    const handleSubmit = async (e) => {
        e.preventDefault();
        setError("");

        if (formData.password !== formData.confirmPassword) {
            setError("Passwords do not match!");
            return;
        }

        try {
            setLoading(true);

            await register(
                formData.name,
                formData.email,
                formData.password
            );

            navigate("/");
        } catch (err) {
            setError(
                err.response?.data?.message ||
                err.message ||
                "Something went wrong. Please try again."
            );
        } finally {
            setLoading(false);
        }
    };

    return (
        <main className="min-h-screen bg-[#f8f7f4]">
            <div className="mx-auto grid min-h-screen w-full max-w-7xl lg:grid-cols-2">

                {/* LEFT SIDE */}
                <div className="relative hidden overflow-hidden bg-[#1D2434] lg:flex lg:items-center">
                    <div className="absolute -right-24 -top-24 h-80 w-80 rounded-full bg-[#E0BDB7]/20 blur-3xl" />
                    <div className="absolute -bottom-32 -left-24 h-96 w-96 rounded-full bg-[#E0BDB7]/10 blur-3xl" />

                    <div className="relative z-10 px-12 xl:px-20">
                        <div className="mb-12">
                            <h2 className="text-2xl font-bold tracking-tight text-white">
                                Your<span className="text-[#E0BDB7]">Store</span>
                            </h2>
                        </div>

                        <p className="text-xs font-semibold uppercase tracking-[0.25em] text-[#E0BDB7]">
                            Join Our Community
                        </p>

                        <h1 className="mt-4 text-4xl font-bold leading-tight text-white xl:text-5xl">
                            Create Your
                            <span className="block text-[#E0BDB7]">
                                Shopping Account.
                            </span>
                        </h1>

                        <p className="mt-6 max-w-md text-sm leading-7 text-slate-300">
                            Create an account and enjoy a faster checkout,
                            track your orders, save your favorite products
                            and discover something you'll love.
                        </p>

                        <div className="mt-10 space-y-4">
                            {[
                                "Faster and easier checkout",
                                "Track your orders easily",
                                "Save your favorite products",
                            ].map((benefit) => (
                                <div key={benefit} className="flex items-center gap-3">
                                    <div className="flex h-9 w-9 items-center justify-center rounded-full bg-[#E0BDB7] text-[#1D2434]">
                                        ✓
                                    </div>
                                    <p className="text-sm text-slate-200">
                                        {benefit}
                                    </p>
                                </div>
                            ))}
                        </div>
                    </div>
                </div>

                {/* RIGHT SIDE */}
                <div className="flex items-center justify-center px-4 py-10 sm:px-6 lg:px-10 xl:px-16">
                    <div className="w-full max-w-md">

                        {/* MOBILE LOGO */}
                        <div className="mb-8 text-center lg:hidden">
                            <h2 className="text-2xl font-bold text-[#1D2434]">
                                Your<span className="text-[#E0BDB7]">Store</span>
                            </h2>
                        </div>

                        {/* HEADING */}
                        <div className="mb-7">
                            <p className="text-xs font-semibold uppercase tracking-[0.2em] text-[#E0BDB7]">
                                Get Started
                            </p>

                            <h2 className="mt-2 text-3xl font-bold text-[#1D2434] sm:text-4xl">
                                Create Account
                            </h2>

                            <p className="mt-2 text-sm text-slate-500">
                                Sign up to start your shopping journey.
                            </p>
                        </div>

                        {/* FORM */}
                        <form onSubmit={handleSubmit} className="space-y-4">

                            {error && (
                                <div
                                    role="alert"
                                    className="rounded-xl border border-red-200 bg-red-50 px-4 py-3 text-sm text-red-600"
                                >
                                    {error}
                                </div>
                            )}

                            {/* FULL NAME */}
                            <div>
                                <label htmlFor="name" className="mb-2 block text-sm font-semibold text-[#1D2434]">
                                    Full Name
                                </label>

                                <div className="relative">
                                    <FaUser className="absolute left-4 top-1/2 -translate-y-1/2 text-sm text-slate-400" />

                                    <input
                                        id="name"
                                        name="name"
                                        type="text"
                                        autoComplete="name"
                                        value={formData.name}
                                        onChange={handleChange}
                                        placeholder="Enter your full name"
                                        required
                                        className="w-full rounded-xl border border-slate-200 bg-white py-3.5 pl-11 pr-4 text-sm text-[#1D2434] outline-none transition-all placeholder:text-slate-400 focus:border-[#E0BDB7] focus:ring-2 focus:ring-[#E0BDB7]/30"
                                    />
                                </div>
                            </div>

                            {/* EMAIL */}
                            <div>
                                <label htmlFor="email" className="mb-2 block text-sm font-semibold text-[#1D2434]">
                                    Email Address
                                </label>

                                <div className="relative">
                                    <FaEnvelope className="absolute left-4 top-1/2 -translate-y-1/2 text-sm text-slate-400" />

                                    <input
                                        id="email"
                                        name="email"
                                        type="email"
                                        autoComplete="email"
                                        value={formData.email}
                                        onChange={handleChange}
                                        placeholder="Enter your email"
                                        required
                                        className="w-full rounded-xl border border-slate-200 bg-white py-3.5 pl-11 pr-4 text-sm text-[#1D2434] outline-none transition-all placeholder:text-slate-400 focus:border-[#E0BDB7] focus:ring-2 focus:ring-[#E0BDB7]/30"
                                    />
                                </div>
                            </div>

                            {/* PASSWORD */}
                            <div>
                                <label htmlFor="password" className="mb-2 block text-sm font-semibold text-[#1D2434]">
                                    Password
                                </label>

                                <div className="relative">
                                    <FaLock className="absolute left-4 top-1/2 -translate-y-1/2 text-sm text-slate-400" />

                                    <input
                                        id="password"
                                        name="password"
                                        type={showPassword ? "text" : "password"}
                                        autoComplete="new-password"
                                        value={formData.password}
                                        onChange={handleChange}
                                        placeholder="Create a password"
                                        required
                                        minLength={6}
                                        className="w-full rounded-xl border border-slate-200 bg-white py-3.5 pl-11 pr-12 text-sm text-[#1D2434] outline-none transition-all placeholder:text-slate-400 focus:border-[#E0BDB7] focus:ring-2 focus:ring-[#E0BDB7]/30"
                                    />

                                    <button
                                        type="button"
                                        onClick={() => setShowPassword((prev) => !prev)}
                                        aria-label={showPassword ? "Hide password" : "Show password"}
                                        className="absolute right-4 top-1/2 -translate-y-1/2 text-sm text-slate-400 hover:text-[#1D2434]"
                                    >
                                        {showPassword ? <FaEyeSlash /> : <FaEye />}
                                    </button>
                                </div>

                                <p className="mt-1.5 text-[11px] text-slate-400">
                                    Password must be at least 6 characters.
                                </p>
                            </div>

                            {/* CONFIRM PASSWORD */}
                            <div>
                                <label htmlFor="confirmPassword" className="mb-2 block text-sm font-semibold text-[#1D2434]">
                                    Confirm Password
                                </label>

                                <div className="relative">
                                    <FaLock className="absolute left-4 top-1/2 -translate-y-1/2 text-sm text-slate-400" />

                                    <input
                                        id="confirmPassword"
                                        name="confirmPassword"
                                        type={showConfirmPassword ? "text" : "password"}
                                        autoComplete="new-password"
                                        value={formData.confirmPassword}
                                        onChange={handleChange}
                                        placeholder="Confirm your password"
                                        required
                                        minLength={6}
                                        className="w-full rounded-xl border border-slate-200 bg-white py-3.5 pl-11 pr-12 text-sm text-[#1D2434] outline-none transition-all placeholder:text-slate-400 focus:border-[#E0BDB7] focus:ring-2 focus:ring-[#E0BDB7]/30"
                                    />

                                    <button
                                        type="button"
                                        onClick={() => setShowConfirmPassword((prev) => !prev)}
                                        aria-label={showConfirmPassword ? "Hide confirm password" : "Show confirm password"}
                                        className="absolute right-4 top-1/2 -translate-y-1/2 text-sm text-slate-400 hover:text-[#1D2434]"
                                    >
                                        {showConfirmPassword ? <FaEyeSlash /> : <FaEye />}
                                    </button>
                                </div>
                            </div>

                            {/* TERMS */}
                            <div className="flex items-start gap-2 pt-1">
                                <input
                                    id="terms"
                                    type="checkbox"
                                    required
                                    className="mt-1 h-4 w-4 accent-[#1D2434]"
                                />

                                <label htmlFor="terms" className="text-xs leading-5 text-slate-500">
                                    I agree to the{" "}
                                    <span className="font-semibold text-[#1D2434]">
                                        Terms &amp; Conditions
                                    </span>{" "}
                                    and Privacy Policy.
                                </label>
                            </div>

                            {/* SUBMIT */}
                            <button
                                type="submit"
                                disabled={loading}
                                className="flex w-full items-center justify-center gap-2 rounded-xl bg-[#1D2434] px-6 py-3.5 text-sm font-bold text-white transition-all duration-300 hover:-translate-y-0.5 hover:bg-[#E0BDB7] hover:text-[#1D2434] hover:shadow-lg disabled:cursor-not-allowed disabled:opacity-60"
                            >
                                <FaUserPlus className="text-sm" />
                                {loading ? "Creating Account..." : "Create Account"}
                            </button>
                        </form>

                        {/* LOGIN LINK */}
                        <p className="mt-6 text-center text-sm text-slate-500">
                            Already have an account?{" "}
                            <Link
                                to="/login"
                                className="font-bold text-[#1D2434] transition-colors hover:text-[#E0BDB7]"
                            >
                                Sign In
                            </Link>
                        </p>
                    </div>
                </div>
            </div>
        </main>
    );
};

export default Signup;

import { useContext } from "react";
import { FaSearch, FaSlidersH } from "react-icons/fa";
import Product from "../Components/Product";
import { ProductContext } from "../Context/ProductContext";

const ProductPage = () => {
    const { products } = useContext(ProductContext);

    return (
        <section className="min-h-screen bg-white py-12 sm:py-16 lg:py-20">
            <div className="mx-auto w-full max-w-7xl px-4 sm:px-6 lg:px-8">

                {/* ================= HEADER ================= */}
                <div className="mb-10 text-center">
                    <p className="mb-2 text-xs font-semibold uppercase tracking-[0.2em] text-blue-600">
                        Our Products
                    </p>

                    <h1 className="text-3xl font-bold tracking-tight text-slate-900 sm:text-4xl lg:text-5xl">
                        Explore Our Products
                    </h1>

                    <p className="mx-auto mt-3 max-w-2xl text-sm leading-6 text-slate-500 sm:text-base">
                        Discover quality products at great prices, carefully selected
                        for your everyday needs.
                    </p>

                    <div className="mx-auto mt-4 h-[2px] w-20 rounded-full bg-slate-900" />
                </div>

                {/* ================= SEARCH / FILTER ================= */}
                <div className="mb-8 flex flex-col gap-4 sm:flex-row sm:items-center sm:justify-between">

                    <div className="relative w-full sm:max-w-sm">
                        <FaSearch className="absolute left-4 top-1/2 -translate-y-1/2 text-sm text-slate-400" />

                        <input
                            type="text"
                            placeholder="Search products..."
                            className="w-full rounded-xl border border-slate-200 bg-slate-50 py-3 pl-10 pr-4 text-sm text-slate-700 outline-none transition focus:border-blue-500 focus:bg-white"
                        />
                    </div>

                    <button
                        type="button"
                        className="flex items-center justify-center gap-2 rounded-xl border border-slate-200 bg-white px-5 py-3 text-sm font-semibold text-slate-700 transition hover:border-blue-500 hover:text-blue-600"
                    >
                        <FaSlidersH className="text-xs" />
                        Filter Products
                    </button>
                </div>

                {/* ================= PRODUCTS ================= */}
                {products?.length > 0 ? (
                    <div className="grid grid-cols-1 gap-5 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4">
                        {products.map((product) => (
                            <Product
                                key={product.id}
                                product={product}
                            />
                        ))}
                    </div>
                ) : (
                    <div className="py-20 text-center">
                        <h2 className="text-xl font-bold text-slate-800">
                            No Products Found
                        </h2>

                        <p className="mt-2 text-sm text-slate-500">
                            Please try again later.
                        </p>
                    </div>
                )}
            </div>
        </section>
    );
};

export default ProductPage;

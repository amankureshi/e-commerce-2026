import { useContext } from "react";
import { ProductContext } from "../Context/ProductContext";
import Product from "../Components/Product";

const ProductPage = () => {
    const { products } = useContext(ProductContext);

    return (
        <section className="min-h-screen bg-white py-12 sm:py-16 lg:py-20">
            <div className="mx-auto w-full max-w-7xl px-4 sm:px-6 lg:px-8">

                {/* Header */}
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

                {/* Products */}
                {products.length > 0 ? (
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
                            Loading Products...
                        </h2>

                        <p className="mt-2 text-sm text-slate-500">
                            Please wait while products are loading.
                        </p>
                    </div>
                )}
            </div>
        </section>
    );
};

export default ProductPage;

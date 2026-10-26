import React, { useContext } from "react";
import { ProductContext } from "../Context/ProductContext";
import Product from "../Components/Product";

const Shop = () => {
  const { products } = useContext(ProductContext);

  return (
    <section
      id="shop"
      className="bg-[#f8f7f4] py-14 sm:py-16"
    >
      <div className="mx-auto w-full max-w-7xl px-4 sm:px-6 lg:px-8 xl:px-10">

        {/* Header */}
        <div className="mb-8">
          <p className="mb-2 text-xs font-semibold uppercase tracking-[0.2em] text-blue-600">
            Our Collection
          </p>

          <h3 className="text-3xl font-bold tracking-tight text-slate-900 sm:text-4xl">
            Our Products
          </h3>

          <div className="mt-3 h-[2px] w-24 rounded-full bg-slate-900" />
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
          <div className="py-16 text-center">
            <p className="text-lg font-semibold text-slate-700">
              Loading products...
            </p>
          </div>
        )}

      </div>
    </section>
  );
};

export default Shop;


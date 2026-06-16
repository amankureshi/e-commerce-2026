import React, { useContext } from "react";
import { ProductContext } from "./ProductContext";
import Product from "./Product";
const Shop = () => {
  // const { products } = useContext(ProductContext);
  // console.log(products);
  const products = useContext(ProductContext);
  console.log(products);

  const filterProducts = products.filter((item) => {
    return (
      item.category === "men's clothing" || item.category === "women's clothing"
    );
  });

  console.log(filterProducts);

  return (
    <section id="shop" className="max-padd-container py-2 bg-[#f8f7f4]">
      <h3 className="text-4xl font-bold">Our Product</h3>
      <hr className="h-[2px] md:w-1/2 max-w-96 bg-gradient-to-l from-transparent via-black to-black mb-24 border-none rounded " />
      <div
        className="grid
  grid-cols-2
  sm:grid-cols-3
  md:grid-cols-4
  lg:grid-cols-5
  gap-5"
      >
        {filterProducts.map((product) => (
          <Product key={product.id} product={product} />
        ))}
      </div>
    </section>
  );
};

export default Shop;

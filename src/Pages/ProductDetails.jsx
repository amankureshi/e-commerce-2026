import React, { useContext } from "react";
import { useParams } from "react-router-dom";
import { ProductContext } from "../Context/ProductContext";
import { FaStar } from "react-icons/fa";
import { useNavigate } from "react-router-dom";

const ProductDetails = () => {
  const { products, addToCart } = useContext(ProductContext);
  const { id } = useParams();
  const navigate = useNavigate();

  const product = products.find((item) => item.id === Number(id));
  if (!product) {
    return (
      <div className="flex justify-center items-center h-screen">
        <h2 className="text-xl font-semibold">Loading...</h2>
      </div>
    );
  }

  return (
    <div className="max-w-6xl mx-auto px-6 py-10">
      <div className="grid md:grid-cols-2 gap-10 bg-white shadow-lg rounded-2xl p-8">
        {/* Product Image */}
        <div className="flex items-center justify-center border rounded-xl p-8">
          <img
            src={product.image}
            alt={product.title}
            className="h-80 object-contain"
          />
        </div>

        {/* Product Info */}
        <div className="flex flex-col justify-center">
          {/* Category */}
          <span className="text-sm uppercase text-gray-400 tracking-wider">
            {product.category}
          </span>

          {/* Title */}
          <h1 className="text-3xl font-bold text-gray-800 mt-2">
            {product.title}
          </h1>

          {/* Rating */}
          <div className="flex items-center gap-2 mt-4">
            <FaStar className="text-yellow-500" />
            <span className="font-semibold">{product.rating?.rate}</span>
            <span className="text-gray-500">
              ({product.rating?.count} Reviews)
            </span>
          </div>

          {/* Price */}
          <h2 className="text-4xl font-bold text-red-400 mt-6">
            ${product.price}
          </h2>

          {/* Description */}
          <p className="text-gray-600 leading-7 mt-6">{product.description}</p>

          {/* Buttons */}
          <div className="flex gap-4 mt-8">
            <button
              onClick={() => addToCart(product)}
              className="bg-[#f58a7b] text-white px-6 py-3 rounded-lg hover:bg-[#ee7563] transition"
            >
              Add to Cart
            </button>

            <button
              onClick={() => navigate("/checkout")}
              className="border border-[#f58a7b] text-[#f58a7b] px-6 py-3 rounded-lg hover:bg-[#f58a7b] hover:text-white transition"
            >
              Buy Now
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ProductDetails;

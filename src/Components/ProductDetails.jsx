import React, { useContext } from "react";
import { useParams } from "react-router-dom";
import { ProductContext } from "./ProductContext";

const ProductDetails = () => {
  const products = useContext(ProductContext);
  const { id } = useParams();

  const product = products.find((item) => item.id === Number(id));
  if (!product) {
    return <h2>Loading...</h2>;
  }
  return (
    <div>
      <h1>{product.title}</h1>
    </div>
  );
};

export default ProductDetails;

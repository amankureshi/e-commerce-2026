import React, { createContext, useEffect, useState } from "react";

export const ProductContext = createContext();

const ProductProvider = ({ children }) => {
  const [products, setProduct] = useState([]);
  const [cartItems, setCartItems] = useState([]);

  useEffect(() => {
    const fetchProducts = async () => {
      const response = await fetch("https://fakestoreapi.com/products");
      const data = await response.json();
      // console.log(data);
      setProduct(data);
    };
    fetchProducts();
  }, []);

  // Add to cart
  const addToCart = (product) => {
    const exitstingItem = cartItems.find((item) => item.id === product.id);
    if (exitstingItem) {
      setCartItems(
        cartItems.map((item) =>
          item.id === product.id
            ? { ...item, quantity: item.quantity + 1 }
            : item,
        ),
      );
    } else {
      setCartItems([
        ...cartItems,
        {
          ...product,
          quantity: 1,
        },
      ]);
    }
  };
  const increaseQuantity = (id) => {
    setCartItems(
      cartItems.map((item) =>
        item.id === id ? { ...item, quantity: item.quantity + 1 } : item,
      ),
    );
  };
  const decreaseQuantity = (id) => {
    setCartItems(
      cartItems
        .map((item) =>
          item.id === id ? { ...item, quantity: item.quantity - 1 } : item,
        )
        .filter((item) => item.quantity > 0),
    );
  };
  const removeItem = (id) => {
    setCartItems(cartItems.filter((item) => item.id !== id));
  };
  return (
    <div>
      <ProductContext.Provider
        value={{
          products,
          cartItems,
          addToCart,
          increaseQuantity,
          decreaseQuantity,
          removeItem,
        }}
      >
        {children}
      </ProductContext.Provider>
    </div>
  );
};

export default ProductProvider;

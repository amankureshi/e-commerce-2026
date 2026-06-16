import React from "react";

export const ProductContext = createContext();

const ProductProvider = ({ children }) => {
  const [products, setProduct] = useState([]);
  useEffect(() => {
    const fetchProducts = async () => {
      const response = await fetch("https://fakestoreapi.com/products");
      const data = await response.json();
    };
  }, []);
  return (
    <div>
      <ProductContext.Provider>{children}</ProductContext.Provider>
    </div>
  );
};

export default ProductProvider;

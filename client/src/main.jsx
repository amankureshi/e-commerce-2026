import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import "./index.css";
import App from "./App.jsx";
import ProductProvider from "./Context/ProductContext.jsx";
import { BrowserRouter } from "react-router-dom";
import { AuthProvider } from "./Context/AuthContext.jsx";
import { CartProvider } from "./Context/CartContext.jsx";

createRoot(document.getElementById("root")).render(
  <BrowserRouter>
    {/* <StrictMode> */}
    <AuthProvider>
      <CartProvider>
        <ProductProvider>
          <App />
        </ProductProvider>
      </CartProvider>
    </AuthProvider>
  </BrowserRouter>
  // </StrictMode >
);

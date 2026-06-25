import { useState } from "react";
import reactLogo from "./assets/react.svg";
import viteLogo from "./assets/vite.svg";
import heroImg from "./assets/hero.png";
import "./App.css";
import Navbar from "./Components/Navbar";
import Header from "./Components/Header";
import Shop from "./Pages/Shop";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import ProductDetails from "./Pages/ProductDetails";
import Cart from "./Pages/Cart";
function App() {
  const [count, setCount] = useState(0);

  return (
    <>
      <Navbar />
      <Routes>
        <Route
          path="/"
          element={
            <>
              <Header />
              <Shop />
            </>
          }
        />
        <Route path="/cart" element={<Cart />} />
        <Route path="/product/:id" element={<ProductDetails />} />{" "}
      </Routes>
    </>
  );
}

export default App;

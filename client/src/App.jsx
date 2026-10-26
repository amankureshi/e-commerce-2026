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
import FreeShipping from "./Pages/WhyChooseUs";
import AboutPage from "./Components/AboutPage";
import ProductPage from "./Pages/ProductPage";
import Contact from "./Pages/Contact";
import Signup from "./Pages/Signup";
import Login from "./Pages/Login";
import Footer from "./Components/Footer";
import ProtectedRoute from "./Components/ProtectedRoute";
import Checkout from "./Pages/Checkout";

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
              <FreeShipping />

            </>
          }
        />
        <Route path="/about" element={<AboutPage />} />
        <Route path="/products" element={<ProductPage />} />
        <Route path="/contact" element={<Contact />} />
        <Route path="/cart" element={<ProtectedRoute><Cart /></ProtectedRoute>} />
        <Route path="/checkout" element={<ProtectedRoute><Checkout /></ProtectedRoute>} />
        <Route path="/product/:id" element={<ProductDetails />} />
        <Route path="/signup" element={<Signup />} />
        <Route path="/login" element={<Login />} />
      </Routes>
      <Footer />
    </>
  );
}

export default App;

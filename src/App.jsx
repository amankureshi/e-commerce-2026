import { useState } from "react";
import reactLogo from "./assets/react.svg";
import viteLogo from "./assets/vite.svg";
import heroImg from "./assets/hero.png";
import "./App.css";
import Navbar from "./Components/Navbar";
import Header from "./Components/Header";
import Shop from "./Components/Shop";
import { BrowserRouter } from "react-router-dom";

function App() {
  const [count, setCount] = useState(0);

  return (
    <div>
      <BrowserRouter>
        <Navbar />
        <Header />
        <Shop />
      </BrowserRouter>
    </div>
  );
}

export default App;

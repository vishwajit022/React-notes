import { Routes, Route } from "react-router-dom";
import Home from "./Home";
import About from "./About";
import Cart from "./Cart";

function Routing() {
  return (
    <div>
      <Routes>
        <Route path="/about" element={<About />} />
        <Route path="/" element={<Home />} />
        <Route path="/cart" element={<Cart />} />
      </Routes>
    </div>
  );
}

export default Routing;

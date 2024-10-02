import { BrowserRouter, Route, Routes } from "react-router-dom";
import HomeP from "../pages/Homepage";
import Shop from "../pages/Shop";
import CartN from "../pages/cart";
import Checkout from "../components/Checkout";
import Order from "../pages/Order";
import { useState } from "react";
import Login from "../components/Login";
import Signup from "../components/signup";
import Seearch from "../pages/search";

const RoutesS = () => {
  const [fororder, setfororder] = useState(null);
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/home" element={<HomeP />} />
        <Route path="/" element={<HomeP />} />
        <Route path="/shop" element={<Shop />} />

        <Route path="/cart" element={<CartN />} />
        <Route
          path="/checkout"
          element={<Checkout setfororder={setfororder} />}
        />
        <Route path="/order" element={<Order fororder={fororder} />} />
        <Route path="/login" element={<Login />} />
        <Route path="/signup" element={<Signup />} />
        <Route path="/search" element={<Seearch />} />
      </Routes>
    </BrowserRouter>
  );
};
export default RoutesS;

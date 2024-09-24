import { BrowserRouter, Route, Routes } from "react-router-dom";
import HomeP from "../pages/Homepage";
import Shop from "../pages/Shop";
import CartN from "../pages/cart";
import Checkout from "../components/Checkout";

const RoutesS = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/home" element={<HomeP />} />
        <Route path="/" element={<HomeP />} />
        <Route path="/shop" element={<Shop />} />

        <Route path="/cart" element={<CartN />} />
        <Route path="/checkout" element={<Checkout />} />
      </Routes>
    </BrowserRouter>
  );
};
export default RoutesS;

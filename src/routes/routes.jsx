import { BrowserRouter, Route, Routes } from "react-router-dom";
import HomeP from "../pages/Homepage";
import Shop from "../pages/Shop";
import CartN from "../pages/cart";

const RoutesS = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/home" element={<HomeP />} />
        <Route path="/" element={<HomeP />} />
        <Route path="/shop" element={<Shop />} />

        <Route path="/cart" element={<CartN />} />
      </Routes>
    </BrowserRouter>
  );
};
export default RoutesS;

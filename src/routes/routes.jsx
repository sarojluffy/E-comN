import { BrowserRouter, Route, Routes } from "react-router-dom";
import HomeP from "../pages/Homepage";
import Shop from "../pages/Shop";

const RoutesS = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/home" element={<HomeP />} />
        <Route path="/" element={<HomeP />} />
        <Route path="/shop" element={<Shop />} />
      </Routes>
    </BrowserRouter>
  );
};
export default RoutesS;

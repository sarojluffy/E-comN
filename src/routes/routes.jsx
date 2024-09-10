import { BrowserRouter, Route, Routes } from "react-router-dom";
import HomeP from "../pages/Homepage";

const RoutesS = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/home" element={<HomeP />} />
        <Route path="/" element={<HomeP />} />
      </Routes>
    </BrowserRouter>
  );
};
export default RoutesS;

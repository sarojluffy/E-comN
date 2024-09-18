import { mockData } from "../components/subcomponents/categories";
import { useDispatch } from "react-redux";
import { useSelector } from "react-redux";
import { useEffect } from "react";
import { setproducts } from "../redux/slices/slice1";
import Itemsprops from "../components/propsComponent/itemsprops";
import Footer from "../components/footer";

const Shop = () => {
  const dispatch = useDispatch();
  const selector = useSelector((state) => {
    return state.product.products;
  });

  useEffect(() => {
    dispatch(setproducts(mockData));
  }, []);

  return (
    <>
      <h1 className="text-5xl">
        {" "}
        <center className="font-bold mt-8">SHOP</center>
      </h1>
      <Itemsprops propsent={selector} />
      <Footer />
    </>
  );
};

export default Shop;

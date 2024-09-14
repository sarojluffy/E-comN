import { mockData } from "./subcomponents/categories";
import { useDispatch } from "react-redux";
import { useSelector } from "react-redux";
import { useEffect } from "react";
import { setproducts } from "../redux/slices/slice1";
import Itemsprops from "./propsComponent/itemsprops";

const Items = () => {
  const dispatch = useDispatch();
  const selector = useSelector((state) => {
    return state.product.products;
  });

  useEffect(() => {
    dispatch(setproducts(mockData));
  }, []);

  return (
    <>
      {selector.map((abc) => (
        <>
          <Itemsprops propsent={abc} />
        </>
      ))}
    </>
  );
};

export default Items;

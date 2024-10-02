import React from "react";
import { useSelector } from "react-redux";

const Seearch = () => {
  const selector = useSelector((state) => state.product.searchitems);
  console.log(selector);
  return <div></div>;
};

export default Seearch;

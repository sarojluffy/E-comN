import React from "react";
import { useSelector } from "react-redux";

const Seearch = () => {
  const searchItems = useSelector((state) => state.product.searchitems); // Get filtered items

  return (
    <>
      {searchItems.map((abc) => {
        return <>{abc.name}</>;
      })}
    </>
  );
};

export default Seearch;

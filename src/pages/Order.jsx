import { useSelector } from "react-redux";

const Order = ({ fororder }) => {
  const selector = useSelector((state) => {
    return state.cart.totalprice;
  });

  const selector2 = useSelector((state) => {
    return state.cart.products;
  });
  console.log(selector2);
  return (
    <>
      {fororder.address}

      {fororder.city}
      {fororder.zip}
      <br />
      {selector}

      {selector2.map((abc) => (
        <>
          <div> {abc.name}</div>
          <div> {abc.totalprice}</div>
          <div> {abc.quantity}</div>
        </>
      ))}
    </>
  );
};

export default Order;

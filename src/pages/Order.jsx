import { useSelector } from "react-redux";
import Navbarr from "../components/navbar";
import { useNavigate } from "react-router-dom";

const Order = ({ fororder }) => {
  const selector = useSelector((state) => {
    return state.cart.totalprice;
  });

  const selector2 = useSelector((state) => {
    return state.cart.products;
  });
  console.log(selector2);

  const navigate = useNavigate();
  return (
    <>
      <Navbarr />

      <div className="container mx-auto">
        <div className="">
          <h1 className="font-semibold text-4xl text-slate-600">
            Thankyou for your order!
          </h1>
          <p className="mt-5">
            Your order has been placed successfully , you will receive an email
            confirmation shortly
          </p>
        </div>
        <div className="bg-gray-100 rounded-lg p-4 mt-5">
          <h1 className="font-semibold text-lg">Order summary </h1>{" "}
          <p>Order Number :123456</p>
          <h3 className="mt-4 font-semibold mb-2">Shipping information</h3>
          <div>
            {fororder.address} <br />
            {fororder.city},{fororder.zip}
            <br />
          </div>
          <div>
            <h3 className="font-semibold mt-4">Items ordered</h3>
            <div>
              {selector2.map((abc) => {
                return (
                  <>
                    <div className="flex justify-between mt-1">
                      <div>
                        {abc.name} (x{abc.quantity})
                      </div>
                      <div>${abc.totalprice.toFixed(2)}</div>
                    </div>
                  </>
                );
              })}
              <div className="flex justify-between mt-5">
                <p className="font-semibold">total Price:</p>
                <p className="font-semibold">${selector.toFixed(2)}</p>
              </div>
            </div>
          </div>
        </div>
        <div className="space-x-3 mt-4">
          <button
            className="text-white py-2 px-4"
            style={{ background: "#1A9147" }} .
          >
            track Order
          </button>
          <button
            className="bg-red-600 text-white py-2 px-4"
            onClick={() => navigate("/shop")}
          >
            Continue Shopping
          </button>
        </div>
      </div>
    </>
  );
};

export default Order;

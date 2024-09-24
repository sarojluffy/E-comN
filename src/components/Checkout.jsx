import Navbarr from "./navbar";
import Footer from "./footer";
import { FaChevronDown, FaChevronUp } from "react-icons/fa";
import { useState } from "react";

const Checkout = () => {
  const [billing, setbilling] = useState(false);
  const [shipping, setshipping] = useState(false);

  const [paymenttoogle, setpaymenttoogle] = useState(false);
  const [payment, setpayment] = useState("");
  return (
    <>
      <div>
        <Navbarr />

        <div className="grid grid-cols-12 my-8">
          <div className="left col-start-2 col-end-9">
            <h1 className="mb-5 text-2xl font-bold">CHECKOUT </h1>
            <div className="border border-gray-200  py-3 px-2 my-2">
              <div
                className="flex justify-between mb-2 font-semibold"
                onClick={() => {
                  setbilling(!billing);
                }}
              >
                <p>Billing information</p>
                {billing ? (
                  <>
                    <FaChevronUp />
                  </>
                ) : (
                  <>
                    <FaChevronDown />
                  </>
                )}
              </div>

              {billing ? (
                <>
                  <div>
                    <div>
                      <label className="block text-gray-700">Name</label>

                      <input
                        type="text"
                        className="w-full border   p-2 "
                        placeholder="Enter Name"
                      ></input>
                    </div>
                    <div>
                      <p>Email</p>
                      <input
                        type="email"
                        className="container mx-auto outline-none border border-gray-300 rounded-sm p-2 "
                        placeholder="Enter Email"
                      ></input>
                    </div>
                    <div>
                      <p>Phone</p>
                      <input
                        type="text"
                        className="container mx-auto outline-none border border-gray-300 rounded-sm p-2 "
                        placeholder="Enter Phone"
                      ></input>
                    </div>
                  </div>
                </>
              ) : (
                <></>
              )}
            </div>
            <div className="border border-gray-200  py-3 px-2 my-2">
              <div
                className="flex justify-between mb-2 font-semibold"
                onClick={() => {
                  setshipping(!shipping);
                }}
              >
                <p>Shipping information</p>
                {shipping ? (
                  <>
                    <FaChevronUp />
                  </>
                ) : (
                  <>
                    <FaChevronDown />
                  </>
                )}
              </div>

              {shipping ? (
                <>
                  <div>
                    <div>
                      <label className="block text-gray-700">Address</label>

                      <input
                        type="text"
                        className="w-full border   p-2 "
                        placeholder="Enter Address"
                      ></input>
                    </div>
                    <div>
                      <p>City</p>
                      <input
                        type="email"
                        className="container mx-auto outline-none border border-gray-300 rounded-sm p-2 "
                        placeholder="Enter City"
                      ></input>
                    </div>
                    <div>
                      <p>Zip Code</p>
                      <input
                        type="text"
                        className="container mx-auto outline-none border border-gray-300 rounded-sm p-2 "
                        placeholder="Enter Zip code"
                      ></input>
                    </div>
                  </div>
                </>
              ) : (
                <></>
              )}
            </div>

            <div className="border border-gray-200  py-3 px-2">
              <div
                className="flex justify-between"
                onClick={() => {
                  setpaymenttoogle(!paymenttoogle);
                }}
              >
                <p className="font-semibold">payment method</p>

                {paymenttoogle ? <FaChevronUp /> : <FaChevronDown />}
              </div>

              {paymenttoogle ? (
                <>
                  <div className="my-2">
                    <div className="my-2 space-x-1">
                      <input
                        type="radio"
                        id="pod"
                        name="payment"
                        value="pod"
                        onChange={() => setpayment("pod")}
                      />
                      <label htmlFor="pod">Cash on delivery</label>
                    </div>

                    <div className=" space-x-1">
                      <input
                        type="radio"
                        name="payment"
                        value="dc"
                        onChange={() => setpayment("dc")}
                      />

                      <label>Debit card</label>
                    </div>
                  </div>
                  <div>
                    {payment === "dc" ? (
                      <>
                        <div className="bg-gray-100 p-3 mt-5 rounded-lg">
                          <h3 className="font-semibold text-xl mb-3">
                            Debit card information
                          </h3>
                          <div className="mb-3">
                            <label
                              htmlFor=""
                              className="font-semibold text-sm border"
                            >
                              Card number
                            </label>
                            <input
                              type="text"
                              className="block w-full mt-2 p-2"
                              placeholder="Enter Card Number"
                            ></input>
                          </div>
                          <div className="mb-3">
                            <label
                              htmlFor=""
                              className="font-semibold text-sm "
                            >
                              Card Holder Name
                            </label>
                            <input
                              type="text"
                              className="block w-full mt-2 p-2"
                              placeholder="Enter card holder name "
                            ></input>
                          </div>

                          <div className="flex justify-between">
                            <div className="w-1/2 ">
                              <label
                                htmlFor=""
                                className="font-semibold text-sm  "
                              >
                                Expire Date
                              </label>
                              <input
                                type="text"
                                className="block w-full mt-2 p-2"
                                placeholder="MM/YY"
                              ></input>
                            </div>
                            <div className="w-1/2 ml-2">
                              <label
                                htmlFor=""
                                className="font-semibold text-sm "
                              >
                                CVV
                              </label>
                              <input
                                type="text"
                                className="block w-full mt-2 p-2"
                                placeholder="CVV"
                              ></input>
                            </div>
                          </div>
                        </div>
                      </>
                    ) : (
                      <></>
                    )}
                  </div>
                </>
              ) : (
                <></>
              )}
            </div>
          </div>
        </div>
      </div>

      {/* <div className="fixed w-full bottom-0"> */}
      <Footer />
      {/* </div> */}
    </>
  );
};

export default Checkout;

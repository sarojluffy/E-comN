import Footer from "../components/footer";
import Navbarr from "../components/navbar";
import { useSelector } from "react-redux";
import { RiDeleteBin6Fill } from "react-icons/ri";
import { useDispatch } from "react-redux";
import { addcount, deletecart, subcount } from "../redux/slices/cartslice";
import { Link } from "react-router-dom";

const CartN = () => {
  const select = useSelector((state) => {
    return state.cart.products;
  });
  const select2 = useSelector((state) => {
    return state.cart.totalprice;
  });
  const select3 = useSelector((state) => {
    return state.cart.totalquantity;
  });

  const dispatch = useDispatch();

  const countadd = (v) => {
    dispatch(addcount(v));
  };
  const countsub = (sub) => {
    dispatch(subcount(sub));
  };

  //   const dsiplaytotal = select.products.find((abc) => abc.id === item.id);
  return (
    <>
      <Navbarr />

      {select.length > 0 ? (
        <>
          {" "}
          <div className="grid grid-cols-12 my-8">
            <div className="left col-start-2 col-end-9">
              <h1 className="mb-5 text-2xl font-bold">SHOPPING CART </h1>
              <div className="">
                {select.map((abc) => {
                  return (
                    <>
                      <div className="grid grid-cols-6 space-x-4 justify-center items-center border border-slate-200 border-l-0 border-r-0 my-5 py-4 px-4 rounded-lg">
                        <img
                          src={abc.image}
                          className="h-12 w-12 rounded-lg"
                        ></img>
                        <p> {abc.name}</p>
                        <p>$ {abc.price.toFixed(2)}</p>
                        <div className="flex   justify-center items-center">
                          <button
                            className="border border-slate-300 px-3 bg-slate-200 cursor-pointer"
                            onClick={() => {
                              countsub(abc);
                            }}
                          >
                            -
                          </button>

                          <span className=" px-3">{abc.quantity}</span>
                          <button
                            className="border border-slate-300 px-3 bg-slate-200 cursor-pointer"
                            onClick={() => {
                              countadd(abc);
                            }}
                          >
                            +
                          </button>
                        </div>
                        <div className="pl-7">${abc.totalprice.toFixed(2)}</div>
                        <RiDeleteBin6Fill
                          className="text-red-600"
                          onClick={() => dispatch(deletecart(abc))}
                        />
                      </div>
                    </>
                  );
                })}
              </div>

              <div>
                {" "}
                <div>{select2.toFixed(2)}</div>
              </div>
            </div>
            <div className="right col-span-3 container p-5 border border-1 shadow-md m-10">
              <div>
                <h3 className="font-semibold ">CART TOTALS</h3>

                <div className="flex justify-between my-3 text-xs">
                  <span className="">TOTAL ITEMS</span>
                  <span>{select3}</span>
                </div>
              </div>

              <hr />
              <div className="py-2">
                <p>Shipping:</p>
                <p>shipping to:</p>
                <button className="text-blue-500"> Change address</button>
              </div>
              <hr />
              <div className="flex justify-between py-4">
                <div>Total price</div>
                <div>${select2.toFixed(2)}</div>
              </div>
              <button className="bg-red-600 text-white container mx-auto py-1">
                Proceed to Checkout{" "}
              </button>
            </div>
          </div>
        </>
      ) : (
        <>
          <div className="relative">
            <Link to="/shop">
              <img
                src="../../public/images/noitems.jpg"
                alt=""
                className="container mx-auto w-[30%] py-8"
              ></img>
            </Link>

            <Link to="/shop">
              <div className="text-xl border border-slate-300 bg-gray-200  container mx-auto rounded-xl flex justify-center items-center w-96 mb-5">
                <p className="">No items ! click to add</p>
              </div>
            </Link>
          </div>
        </>
      )}

      <Footer />
    </>
  );
};

export default CartN;

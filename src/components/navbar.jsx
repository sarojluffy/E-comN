import { IoIosSearch } from "react-icons/io";
import { FaShoppingCart } from "react-icons/fa";
import { CiUser } from "react-icons/ci";
import { Link, useNavigate } from "react-router-dom";
import { useSelector } from "react-redux";
import { useState } from "react";
import Login from "./Login";
import Signup from "./signup";

const Navbarr = () => {
  const select = useSelector((state) => {
    return state.cart.totalquantity;
  });

  const navigate = useNavigate();

  const [Loginn, setloginn] = useState(false);
  const [signUp, setsignUp] = useState(false);
  return (
    <>
      <nav className="pt-6 border-b-2 pb-8 shadow-md ">
        <div className="flex justify-center items-center mt-">
          <Link to="/">
            <div className="left text-2xl font-bold cursor-pointer">eSHOP</div>
          </Link>
          <div className="middle mx-8  border-2 py-2 rounded-md">
            <form className="flex ">
              <input
                type="text "
                placeholder="search product "
                className=" w-[600px] outline-none  hover:placeholder:text-red-500  hover:placeholder:translate-x-5 hover:placeholder:scale-150"
              ></input>
              <IoIosSearch style={{ color: "red" }} className="size-6" />
            </form>
          </div>
          <div className="right flex items-center justify-center space-x-3 ">
            <Link to="/cart">
              <div className="cursor-pointer relative ">
                <FaShoppingCart />

                {select > 0 ? (
                  <>
                    {" "}
                    <div className="absolute  -top-3 -right-3 bg-red-500 rounded-full h-4 w-4 flex items-center justify-center text-white text-xs">
                      {select}
                    </div>
                  </>
                ) : (
                  <></>
                )}
              </div>
            </Link>

            <div className="cursor-pointer">
              <CiUser
                onClick={() => {
                  setloginn(true);
                }}
              />
            </div>
          </div>
        </div>
        <div className="mt-10 flex justify-center items-center space-x-7 font-semibold ">
          <Link to="/">
            <div className="hover:scale-150 hover:ease-in-out transition hover:underline cursor-pointer">
              Home
            </div>
          </Link>
          <Link to="/shop">
            <div className="hover:scale-150 hover:ease-in-out transition hover:underline cursor-pointer">
              Shop
            </div>
          </Link>
          <Link>
            <div className="hover:scale-150 hover:ease-in-out transition hover:underline cursor-pointer ">
              Contact
            </div>
          </Link>
          <Link>
            <div className="hover:scale-150 hover:ease-in-out transition hover:underline cursor-pointer">
              About
            </div>
          </Link>
        </div>
      </nav>

      {Loginn ? (
        <>
          <Login prop={setloginn} prop2={setsignUp} />
        </>
      ) : (
        <></>
      )}

      {signUp ? (
        <>
          <Signup prop={setloginn} prop2={setsignUp} />
        </>
      ) : (
        <></>
      )}
    </>
  );
};

export default Navbarr;

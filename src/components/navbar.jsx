import { IoIosSearch } from "react-icons/io";
import { FaShoppingCart } from "react-icons/fa";
import { CiUser } from "react-icons/ci";
import { Link } from "react-router-dom";

const Navbarr = () => {
  return (
    <>
      <nav className="pt-6 border-b-2 pb-8 shadow-md">
        <div className="flex justify-center items-center mt-">
          <div className="left text-2xl font-bold cursor-pointer">eSHOP</div>
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
          <div className="right flex items-center justify-center space-x-3">
            <div className="cursor-pointer">
              <FaShoppingCart />
            </div>
            <div className="cursor-pointer">
              <CiUser />
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
    </>
  );
};

export default Navbarr;

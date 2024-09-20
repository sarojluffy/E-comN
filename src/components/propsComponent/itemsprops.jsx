import { FaStar } from "react-icons/fa";
import { useDispatch } from "react-redux";
import { addtocart } from "../../redux/slices/cartslice";
const Itemsprops = (prop) => {
  const a = prop.propsent;
  console.log(a);

  const dispatch = useDispatch();

  const cba = (ab) => {
    dispatch(addtocart(ab));
  };

  return (
    <>
      <div className="grid grid-cols-5 container mx-auto gap-14  my-28 ">
        {a.map((abc) => {
          return (
            <>
              <div className="border border-slate-400 relative rounded-lg hover:transition-all hover:ease-in-out hover:scale-105 hover:duration-300 ">
                <img src={abc.image} className="rounded-t-lg h-48 w-full"></img>

                <h2 className="font-bold px-4 ">{abc.name}</h2>
                <p className="px-4 text-slate-400">{abc.price}</p>
                <div className="flex p-4">
                  <FaStar className="text-yellow-500 cursor-pointer" />
                  <FaStar className="text-yellow-500" />
                  <FaStar className="text-yellow-500" />
                  <FaStar className="text-yellow-500" />
                </div>

                <div
                  className=" bg-red-500 text-white h-7 w-7  bottom-4 right-2 absolute rounded-full flex justify-center items-center   cursor-pointer group hover:w-28 hover:transition-all hover:ease-in-out duration-100 "
                  onClick={() => {
                    cba(abc);
                  }}
                >
                  <span className="group-hover:hidden">+</span>
                  <span className=" hidden group-hover:block   ">
                    Add to cart
                  </span>
                </div>
              </div>
            </>
          );
        })}
      </div>
    </>
  );
};

export default Itemsprops;

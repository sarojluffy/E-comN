import { Categories } from "./subcomponents/categories";

const Content = () => {
  return (
    <>
      <div className="flex justify-center space-x-5 mt-5">
        <div className="w-[15rem]">
          <div
            className="text-white p-2 text-sm font-semibold"
            style={{ background: "#DB2727" }}
          >
            SHOP BY CATEGORIES
          </div>

          <div className="p-2 bg-sarojgrey">
            {Categories.map((abc, i) => (
              <div key={i} className="flex items-center p-1 space-x-1">
                <div className="w-2 h-2 rounded-full border border-sarojred"></div>

                <div>{abc}</div>
              </div>
            ))}
          </div>
        </div>
        <div className="relative ">
          <div>
            <img
              src="../../public/images/shopping.png "
              className="w-[800px] brightness-75 h-[390px]"
            ></img>
          </div>
          <div className="absolute top-24 left-16">
            <p className="text-gray-200">Saroj | eSHOP</p>
            <h1 className="font-bold text-2xl text-white">WELCOME TO E-SHOP</h1>
            <h3 className="font-semibold text-white">MILLIONS + PRODUCTS</h3>
            <button className="bg-sarojred px-5 py-2 text-xs text-white antialiased rounded-md">
              SHOP NOW
            </button>
          </div>
        </div>
      </div>
    </>
  );
};

export default Content;

import { useState } from "react";

const SaveCancel = ({ props, props3 }) => {
  console.log(props3);

  const [xyz, setxyz] = useState();
  return (
    <>
      <div className="bg-white rounded-lg mx-2 p-3 shadow-lg">
        <div className="m-4 text-pretty text-lg font-bold  mt-2">
          Change Shipping Address
        </div>
        <div className="container mx-auto  w-full">
          <input
            type="text"
            placeholder="Enter new address"
            onChange={(e) => setxyz(e.target.value)}
            className="border p-2 container mx-auto mb-4 border-1 border-gray-200 focus:border-blue-500 my-2  rounded outline-none"
          ></input>
          <div className="flex justify-end mb-2">
            <button
              className="cursor-pointer bg-blue-500 text-white py-2 px-4 rounded mr-2"
              onClick={() => {
                props3(xyz);
                props();
              }}
            >
              Save
            </button>
            <button
              onClick={() => props()}
              className="cursor-pointer bg-gray-500 text-white py-2 px-4 rounded"
            >
              Cancel
            </button>
          </div>
        </div>
      </div>
    </>
  );
};

export default SaveCancel;

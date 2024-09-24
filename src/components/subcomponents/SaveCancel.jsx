import { useState } from "react";

const SaveCancel = ({ props, props3 }) => {
  console.log(props3);

  const [xyz, setxyz] = useState();
  return (
    <>
      <div>
        <div className="m-4 text-pretty text-sm font-semibold">
          Change Shipping Address
        </div>
        <div className="container mx-auto border border-1 w-full">
          <input
            type="text"
            onChange={(e) => setxyz(e.target.value)}
            className="border p-2 w-full mb-4"
          ></input>
          <div className="flex justify-end">
            <button
              className="cursor-pointer bg-gray-500 text-white py-2 px-4 rounded mr-2"
              onClick={() => {
                props3(xyz);
                props();
              }}
            >
              Save
            </button>
            <button
              onClick={() => props()}
              className="cursor-pointer bg-blue-500 text-white py-2 px-4 rounded"
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

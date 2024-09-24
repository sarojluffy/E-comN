import { useState } from "react";

const SaveCancel = ({ props, props3 }) => {
  console.log(props3);

  const [xyz, setxyz] = useState();
  return (
    <>
      <div className="container mx-auto border border-1 w-full">
        <input type="text" onChange={(e) => setxyz(e.target.value)}></input>
        <div
          className="cursor-pointer"
          onClick={() => {
            props3(xyz);
            props();
          }}
        >
          Save
        </div>
        <div onClick={() => props()} className="cursor-pointer">
          Cancel
        </div>
      </div>
    </>
  );
};

export default SaveCancel;

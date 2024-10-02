import React from "react";

const Signup = ({ prop, prop2 }) => {
  const xyz = () => {
    prop(true);
    prop2(false);
  };

  const close = (e) => {
    if (e.target.id === "abc") {
      prop2(false);
    }
  };
  return (
    <div>
      <form>
        <div
          id="abc"
          onClick={close}
          className="inset-0 fixed bg-opacity-75 bg-gray-800 z-10 flex justify-center items-center"
        >
          <div className="w-[25%]">
            <div className="bg-white rounded-lg p-4 ">
              <h1 className="text-xl font-bold">Sign up</h1>
              <div className="mt-3">
                <label htmlFor="name" className="text-slate-600">
                  Name
                </label>
                <input
                  type="text"
                  className="block p-1 border border-slate-400 w-full rounded-sm"
                  placeholder="Enter Name"
                ></input>
              </div>
              <div className="mt-3">
                <label htmlFor="Email" className="text-slate-600">
                  Email
                </label>
                <input
                  type="email"
                  className="block p-1 border border-slate-400 w-full rounded-sm"
                  placeholder="Enter mail"
                ></input>
              </div>
              <div className="mt-3">
                <label htmlFor="password" className="text-slate-600">
                  Password
                </label>
                <input
                  type="password"
                  className="block p-1 border border-slate-400 w-full rounded-sm"
                  placeholder="Enter password"
                ></input>
              </div>
              <button className="text-white bg-red-600 w-full mt-3 py-1 rounded-sm">
                Sign Up
              </button>
              <div className="mt-4 text-center">
                <p>
                  Already have an account?{" "}
                  <button className=" text-red-600" onClick={xyz}>
                    Login
                  </button>
                </p>
              </div>
            </div>
          </div>
        </div>
      </form>
    </div>
  );
};

export default Signup;

const Login = ({ prop, prop2 }) => {
  const close = (e) => {
    if (e.target.id === "abc") {
      prop(false);
    }
  };
  const xyz = () => {
    prop(false);
    prop2(true);
  };
  return (
    <>
      <div
        className="flex  justify-center items-center inset-0 fixed bg-opacity-75 bg-gray-800 z-10 "
        id="abc"
        onClick={close}
      >
        <div className=" w-[25%] bg-white  px-4 rounded-lg">
          <div className="mt-4">
            <h1 className="text-xl font-bold">Login</h1>

            <form>
              <div className="mt-3">
                <label htmlFor="Email">Email</label>
                <input
                  type="email"
                  className="block border w-full p-1 outline-none rounded-md border-slate-400 "
                  placeholder="Enter Email "
                ></input>
              </div>

              <div className="mt-3">
                <label htmlFor="Password">Password</label>

                <input
                  type="password"
                  className="block border w-full p-1 outline-none rounded-md border-slate-400 "
                  placeholder="Enter Password"
                ></input>
              </div>

              <div className="flex justify-between my-3">
                <div className=" flex ">
                  <input type="checkbox" className="form-checkbox" />

                  <p className="mx-1">Remember me</p>
                </div>
                <button className="text-red-600 "> Forgot password ?</button>
              </div>

              <div>
                <button
                  type="submit"
                  className="bg-red-600 text-white w-full py-1 rounded-sm"
                >
                  Login
                </button>
              </div>

              <div className="text-center m-4">
                <p>
                  Don't have an account?{" "}
                  <button className="text-red-800" onClick={xyz}>
                    Sign Up
                  </button>
                </p>
              </div>
            </form>
          </div>
        </div>
      </div>
    </>
  );
};

export default Login;

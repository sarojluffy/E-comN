const Login = ({ prop }) => {
  const close = (e) => {
    if (e.target.id === "abc") {
      prop(false);
    }
  };

  return (
    <>
      <div
        className="flex  justify-center items-center inset-0 fixed bg-opacity-75 bg-gray-800 z-10"
        id="abc"
        onClick={close}
      >
        <div className="container mx-auto ">
          <div>
            <h1>Login</h1>
            <div>
              <label htmlFor="Email">Email</label>
              <input type="email"></input>
            </div>

            <div>
              <label htmlFor="Password">Password</label>

              <input type="password"></input>
            </div>

            <div className="flex justify-between">
              <div></div>
              <div></div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Login;

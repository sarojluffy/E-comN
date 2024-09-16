// const Genn = () => {
//   return (
//     <>
//       <div>
//         <div src="../../public/images/men.jpg" alt=""></div>
//         <div src="../../public/images/women.jpg!d" alt=""></div>
//         <div src="../../public/images/children.jpeg" alt=""></div>
//       </div>
//     </>
//   );
// };

// export default Genn;

const Genn = () => {
  return (
    <>
      <div className="container w-[80%] mx-auto grid grid-cols-3 gap-7 w-max-7xl">
        <div className="w-96 h-60  relative rounded-lg transition hover:scale-105 duration-200 hover:ease-in-out ">
          <img
            src="../../public/images/men.jpg"
            className="h-full w-full rounded-lg"
            alt=""
          ></img>
          <div className="absolute top-20 left-12">
            <h2 className="text-2xl font-bold">Men</h2>
            <p className="text-slate-500">View all</p>
          </div>
        </div>
        <div className="w-96 h-60 relative rounded-lg transition hover:scale-105 duration-200 hover:ease-in-out">
          <img
            src="../../public/images/wom.webp"
            className="h-full w-full rounded-lg"
            alt=""
          ></img>
          <div className="absolute top-20 left-12">
            <h2 className="text-2xl font-bold">Women</h2>
            <p className="text-slate-500">View all</p>
          </div>
        </div>
        <div className="w-96 h-60 relative rounded-lg transition hover:scale-105 duration-200 hover:ease-in-out">
          <img
            src="../../public/images/chi.webp"
            className="h-[100%] w-[100%] rounded-lg"
            alt=""
          ></img>
          <div className="absolute top-20 left-12">
            <h2 className="text-2xl font-bold">Children</h2>
            <p className="text-slate-500">View all</p>
          </div>
        </div>
      </div>
    </>
  );
};

export default Genn;

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
      <div className="container mx-auto grid grid-cols-3 gap-14">
        <div className="w-96 h-60">
          <img
            src="../../public/images/men.jpg"
            className="h-full w-full"
            alt=""
          ></img>
        </div>
        <div className="w-96 h-60">
          <img
            src="../../public/images/women.jpg!d"
            className="h-full w-full"
            alt=""
          ></img>
        </div>
        <div className="w-96 h-60">
          <img
            src="../../public/images/children.jpeg"
            className="h-full w-full"
            alt=""
          ></img>
        </div>
      </div>
    </>
  );
};

export default Genn;

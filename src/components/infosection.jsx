import InfoS from "./subcomponents/infoS";
const Infosection = () => {
  return (
    <>
      <div className="grid grid-cols-5 gap-4 container mx-auto mb-11">
        {InfoS.map((abc, i) => (
          <div
            key={i}
            className="border-2  mt-14 py-5 rounded-lg shadow-md transition hover:scale-105 hover:ase-in-out cursor-pointer duration-200"
          >
            <div className=" container mx-auto w-6">{abc.logo}</div>
            <div>
              <h2 className="font-semibold text-lg text-center my-2 mx-2">
                {abc.title}
              </h2>
            </div>
            <div className="text-slate-500 text-center mx-2">{abc.desc}</div>
          </div>
        ))}
      </div>
    </>
  );
};

export default Infosection;

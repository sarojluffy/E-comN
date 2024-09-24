import SaveCancel from "./subcomponents/SaveCancel";

const Modal = ({ props, props2, props3 }) => {
  if (!props) return null; // Check the `isVisible` prop specifically

  const handleonclose = (e) => {
    if (e.target.id === "a") {
      props2();
    }
  };
  console.log(props3);

  return (
    <>
      <div
        id="a"
        className="inset-0 fixed  bg-opacity-75 bg-gray-800  flex justify-center items-center"
        onClick={handleonclose}
      >
        <div className="w-[30%]">
          <SaveCancel props={props2} props3={props3} />
        </div>
        <div>{props3}</div>
      </div>
      <p onClick={props2} className="absolute top-0 right-0 cursor-pointer">
        X
      </p>
    </>
  );
};

export default Modal;

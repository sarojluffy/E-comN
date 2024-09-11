import { FaShippingFast } from "react-icons/fa";
import { FaHeadset } from "react-icons/fa";
import { FaMoneyBillWave } from "react-icons/fa";
import { FaLock } from "react-icons/fa";
import { FaTag } from "react-icons/fa6";

const InfoS = [
  {
    logo: <FaShippingFast className="text-red-600 size-6" />,
    title: "Free Shipping",
    desc: "Get your orders delivered with no extra cost",
  },
  {
    logo: <FaHeadset className="text-red-600 size-6" />,
    title: "Support 24/7",
    desc: "We are here to assist you anytime",
  },
  {
    logo: <FaMoneyBillWave className="text-red-600 size-6" />,
    title: "100% money back",
    desc: "Full refund if you are not satisfied",
  },
  {
    logo: <FaLock className="text-red-600 size-6" />,
    title: "Payment secure",
    desc: "Your payment information is safe with us ",
  },
  {
    logo: <FaTag className="text-red-600 size-6" />,
    title: "Discount",
    desc: "Enjoy the best prices on our products",
  },
];

export default InfoS;

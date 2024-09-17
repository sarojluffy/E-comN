import { FaFacebook, FaInstagram, FaTwitter, FaLinkedin } from "react-icons/fa";

import { Link } from "react-router-dom";

const Footer = () => {
  return (
    <div className="w-full " style={{ background: "#1C2530" }}>
      <div className="grid grid-cols-3   px-4 py-5 text-white container mx-auto">
        <div>
          <div className="flex flex-col container mx-auto text-wrap">
            <h1 className="font-bold ">e-Shop</h1>
            <p className="my-4">
              Lorem ipsum dolor sit amet consectetur, adipisicing elit.
              Necessitatibus ipsum quod similique inventore accusamus maxime?
              Distinctio dolor expedita ea repellat corporis, iure laborum esse
              non sequi laudantium dolorum, nulla facilis!
            </p>
          </div>
        </div>

        <div className="middle flex flex-col justify-center items-center">
          <div>
            <h1 className="font-bold">Quick Links</h1>

            <div className="my-4">
              <Link>
                <div className="hover:underline hover:transition hover:ease-in-out ">
                  Home
                </div>
              </Link>
              <Link>
                <div>Shop </div>
              </Link>
              <Link>
                <div>About us </div>
              </Link>
              <Link>
                <div>Contact us</div>
              </Link>
            </div>
          </div>
        </div>
        <div className="right flex flex-col items-center">
          <div>
            <div className="">
              <h1 className="font-bold">Follow us</h1>
              <div className="flex gap-3 my-4">
                <FaFacebook />

                <FaTwitter />
                <FaLinkedin />
                <FaInstagram />
              </div>
            </div>
            <form>
              <input
                type="email"
                className="py-[6px] px-1 border-[1px] border-gray-600 rounded-l-lg"
                style={{ background: "#1C2530" }}
                placeholder="Your mail"
              ></input>
              <button className="bg-red-500 text-sm py-[6px] px-4 rounded-r-lg border-gray-400 border-2">
                Subscribe
              </button>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Footer;

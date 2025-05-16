import React, { useEffect, useContext ,useState} from "react";
import "../index.css";
import logo from "../assets/svg.png";
import { Productdata } from "../Context";
import { Link } from "react-router-dom";
const Navbar = () => {
  console.log("Hello Navbar************");

  const { toggleCart, toggleSidebar, cart } = useContext(Productdata);
  // stick to bottom navabr code : fixed bottom-0 z-50 shadow-lg bg-white w-full
  const [isSticky, setIsSticky] = useState(false);

   useEffect(() => {
     const handleScroll = () => {
       setIsSticky(window.scrollY > 150); // adjust scroll threshold
     };

     window.addEventListener("scroll", handleScroll);
     return () => window.removeEventListener("scroll", handleScroll);
   }, []);
  return (
    <nav className={`shadow-lg bg-white transition-all duration-500 ease-in-out ${
        isSticky ? `sticky top-0 z-50 opacity-1` : "relative"
      }`}>
      <div className="container mx-auto flex items-center justify-between py-3 px-6">
        <div className="w-44 animate__animated animate__fadeInLeft">
          <img src={logo} alt="LOGO" className="" />
        </div>
        <div className="nav-link-buttons-wrapper flex gap-4 animate__animated animate__fadeInRight">
          <ul className="hidden md:flex space-x-8 text-gray-600 items-center">
            <li className="text-customgrayprimary transition duration-300 hover:text-customgreen">
              <Link to={"/shop"}>Shops</Link>
            </li>
            <li className="text-customgrayprimary">
              <a
                href="#link2"
                className="hover:text-customgreen transition duration-300"
              >
                Offers
              </a>
            </li>
            <li className="text-customgrayprimary">
              <a
                href="#link3"
                className="hover:text-customgreen transition duration-300"
              >
                Contact
              </a>
            </li>
            <li className="text-customgrayprimary">
              <a
                href="#link4"
                className="hover:text-customgreen transition duration-300"
              >
                Pages
              </a>
            </li>
          </ul>

          <div className="hidden md:flex items-center space-x-4">
            <button className="px-4 py-2 bg-customgreen hover:bg-customdarkgreen text-white rounded">
              Join
            </button>
            <button
              onClick={() => {
                toggleCart();
              }}
              className="relative text-white bg-customgreen hover:bg-customdarkgreen rounded flex py-2 px-4 items-center justify-center gap-x-3"
            >
              <svg
                width="14"
                height="16"
                className="shrink-0"
                viewBox="0 0 12.686 16"
              >
                <g transform="translate(-27.023 -2)">
                  <g transform="translate(27.023 5.156)">
                    <g>
                      <path
                        d="M65.7,111.043l-.714-9A1.125,1.125,0,0,0,63.871,101H62.459V103.1a.469.469,0,1,1-.937,0V101H57.211V103.1a.469.469,0,1,1-.937,0V101H54.862a1.125,1.125,0,0,0-1.117,1.033l-.715,9.006a2.605,2.605,0,0,0,2.6,2.8H63.1a2.605,2.605,0,0,0,2.6-2.806Zm-4.224-4.585-2.424,2.424a.468.468,0,0,1-.663,0l-1.136-1.136a.469.469,0,0,1,.663-.663l.8.8,2.092-2.092a.469.469,0,1,1,.663.663Z"
                        transform="translate(-53.023 -101.005)"
                        fill="currentColor"
                      ></path>
                    </g>
                  </g>
                  <g transform="translate(30.274 2)">
                    <g>
                      <path
                        d="M160.132,0a3.1,3.1,0,0,0-3.093,3.093v.063h.937V3.093a2.155,2.155,0,1,1,4.311,0v.063h.937V3.093A3.1,3.1,0,0,0,160.132,0Z"
                        transform="translate(-157.039)"
                        fill="currentColor"
                      ></path>
                    </g>
                  </g>
                </g>
              </svg>
              <span>Cart</span>
              {cart.length > 0 ? (
                <div className="absolute -top-2 -right-2 mt-0.5 p-[2px] bg-gradient-to-r from-white to-customgreen rounded-full">
                  <span className="block rounded-full py-1 px-1.5 text-[10px] font-semibold leading-none bg-white text-customgreen">
                    {cart.length}
                  </span>
                </div>
              ) : null}
            </button>
          </div>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;

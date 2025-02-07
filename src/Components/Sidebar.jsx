import React from "react";
import { Productdata } from "../Context";
import { useContext } from "react";
function Sidebar() {
  const { isSidebarOpen, toggleSidebar, toggleCart, isCartOpen } =
    useContext(Productdata);
  return (
    <aside>
      <div
        className={`fixed top-0 w-64 h-full bg-white shadow-lg z-50 flex flex-col p-6 transition-all duration-300 ${
          isSidebarOpen ? "left-0 opacity-100" : "-left-96 opacity-0"
        }`}
      >
        {/* Close Button */}
        <button
          class="flex self-end h-7 w-7 items-center justify-center rounded-full bg-gray-100 transition-all duration-200 hover:bg-customgreen hover:text-white focus:bg-customgreen"
          onClick={() => {
            toggleSidebar();
          }}
        >
          <span class="sr-only">close</span>
          <svg
            class="h-3 w-3"
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 20 20"
            fill="currentColor"
          >
            <path
              fill-rule="evenodd"
              d="M4.293 4.293a1 1 0 011.414 0L10 8.586l4.293-4.293a1 1 0 111.414 1.414L11.414 10l4.293 4.293a1 1 0 01-1.414 1.414L10 11.414l-4.293 4.293a1 1 0 01-1.414-1.414L8.586 10 4.293 5.707a1 1 0 010-1.414z"
              clip-rule="evenodd"
            ></path>
          </svg>
        </button>

        {/* Sidebar Links */}
        <ul className="mt-8 space-y-4 text-gray-600">
          <li>
            <a href="#link1" className="hover:text-gray-900">
              Shops
            </a>
          </li>
          <li>
            <a href="#link2" className="hover:text-gray-900">
              Offers
            </a>
          </li>
          <li>
            <a href="#link3" className="hover:text-gray-900">
              Contact
            </a>
          </li>
          <li>
            <a href="#link4" className="hover:text-gray-900">
              CheckOut
            </a>
          </li>
        </ul>

        {/* Sidebar Buttons */}
        <div className="mt-8 space-y-4">
          <button className="w-full px-4 py-2 bg-customgreen text-white rounded ">
            Join Now
          </button>
          <button
            onClick={() => {
              toggleSidebar();
              toggleCart();
            }}
            className="flex justify-center items-center gap-x-2 w-full px-4 py-2 bg-customgreen text-white rounded "
          >
            <svg
              width="14"
              height="16"
              class="shrink-0"
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
          </button>
        </div>
      </div>
      <div
        onClick={toggleSidebar}
        className="hidden w-full h-[100vh] fixed top-0 left-0 bg-black opacity-40 z-40"
      ></div>
    </aside>
  );
}

export default Sidebar;

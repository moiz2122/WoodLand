import React from "react";
import { ToastContainer, toast } from "react-toastify";
import { useContext } from "react";
import "../toast.css";
import { Productdata } from "../Context";
function ProductCard() {
  const { productsArray, allCategories, setItems, ItemsData, AddtoCart, cart } =
    useContext(Productdata);
  const topRight = () => {
    toast.success("Product Added", {
      position: "top-right",
      pauseOnHover: false,
      autoClose: 2000,
      style: { backgroundColor: "white", color: "#019376" },
    });
  };
  return (
    <div className="px-4 Producst-Cards-container w-full grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 xl:grid-cols-[repeat(auto-fill,minmax(250px,1fr))] gap-4">
      {productsArray.map((produtdetals) => {
        const { id, name, categery, url, price } = produtdetals;
        return (
          <div className="Producst-Card flex flex-col bg-white justify-center items-center rounded-md overflow-hidden border border-border-200 bg-light transition-shadow duration-200 hover:shadow-sm pb-6">
            <div className="relative w-auto rounded-md flex justify-center items-center">
              <img
                loading="lazy"
                src={url}
                alt="Product image"
                className="rounded-md object-contain inset-0 text-transparent"
              />
              {id % 2 !== 0 ? (
                <div className="absolute top-3 right-3 rounded-full bg-yellow-500 px-1.5 text-xs font-semibold leading-6 text-white sm:px-2 md:top-4 md:px-2.5">
                  11%
                </div>
              ) : (
                ""
              )}
            </div>
            <div className="price-container flex flex-col items-center justify-center">
              <h3 className="truncate text-sm font-medium text-customgrayprimary">
                {name}
              </h3>
            </div>
            <div className="discounted-tag self-start pl-4 text-xs italic text-opacity-75 mt-2">
              {id % 2 !== 0 ? (
                <del className="text-customlightgray">$16.00</del>
              ) : (
                ""
              )}
              {id % 2 == 0 ? <del className="text-transparent">dummy</del> : ""}
            </div>
            <div className="price-cart-btn-container flex items-center w-full justify-between px-4">
              <p className="text-md font-semibold text-customgreen">${price}</p>
              <button
                onClick={() => {
                  AddtoCart(produtdetals);
                  topRight();
                }}
                className="flex items-center justify-center rounded-full text-customgreen gap-x-2 border-2 bg-light px-3 py-2 text-sm font-semibold transition-colors duration-300 hover:border-transparent hover:bg-customgreen hover:text-white"
              >
                <svg
                  class="h-4 w-4 ltr:mr-2.5 rtl:ml-2.5"
                  viewBox="0 0 14.4 12"
                >
                  <g transform="translate(-288 -413.89)">
                    <path
                      fill="currentColor"
                      d="M298.7,418.289l-2.906-4.148a.835.835,0,0,0-.528-.251.607.607,0,0,0-.529.251l-2.905,4.148h-3.17a.609.609,0,0,0-.661.625v.191l1.651,5.84a1.336,1.336,0,0,0,1.255.945h8.588a1.261,1.261,0,0,0,1.254-.945l1.651-5.84v-.191a.609.609,0,0,0-.661-.625Zm-5.419,0,1.984-2.767,1.98,2.767Zm1.984,5.024a1.258,1.258,0,1,1,1.319-1.258,1.3,1.3,0,0,1-1.319,1.258Zm0,0"
                    ></path>
                  </g>
                </svg>
                <span>Cart</span>
              </button>
            </div>
          </div>
        );
      })}
      <ToastContainer />
    </div>
  );
}

export default ProductCard;

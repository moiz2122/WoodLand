import React, { useEffect, useState } from "react";
import { ToastContainer, toast } from "react-toastify";
import { useContext } from "react";
import "../toast.css";
import { Productdata } from "../Context";
function ProductCard() {
  console.log("buggggggggggg");

  const { productsArray, allCategories, setItems, ItemsData, AddtoCart, cart } =
    useContext(Productdata);
  const [loading, setloading] = useState(false);
  useEffect(() => {
    setloading(false);
    setTimeout(() => {
      setloading(true);
    }, 1000);
  }, productsArray);

  const topRight = (val) => {
    toast.success(val, {
      position: "top-right",
      pauseOnHover: false,
      autoClose: 1000,
      style: { backgroundColor: "white", color: "#019376" },
    });
  };
  return (
    <div className="px-4 Producst-Cards-container w-full grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 xl:grid-cols-[repeat(auto-fill,minmax(250px,1fr))] gap-4">
      {loading
        ? productsArray.map((produtdetals) => {
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
                  {id % 2 == 0 ? (
                    <del className="text-transparent">dummy</del>
                  ) : (
                    ""
                  )}
                </div>
                <div className="price-cart-btn-container flex items-center w-full justify-between px-4">
                  <p className="text-md font-semibold text-customgreen">
                    ${price}
                  </p>
                  <button
                    onClick={() => {
                      const alreadyInCart = cart.some(
                        (item) => item.id === produtdetals.id
                      );
                      if (!alreadyInCart) {
                        AddtoCart(produtdetals);
                        topRight("Product added to cart!");
                      }
                      else{
                        topRight("Product is already in the cart.");
                      }
                    }}
                    className="flex items-center justify-center rounded-full text-customgreen gap-x-2 border-2 bg-light px-3 py-2 text-sm font-semibold transition-colors duration-300 hover:border-transparent hover:bg-customgreen hover:text-white"
                  >
                    <svg
                      className="h-4 w-4 ltr:mr-2.5 rtl:ml-2.5"
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
          })
        : productsArray.map(() => {
            return (
              <div
                role="status"
                className="max-w-sm p-4 border border-gray-200 rounded-sm shadow-sm animate-pulse md:p-6 dark:border-gray-700 bg-white"
              >
                <div className="flex items-center justify-center h-48 mb-4 bg-gray-300 rounded-sm dark:bg-gray-700">
                  <svg
                    className="w-10 h-10 text-gray-200 dark:text-gray-600"
                    aria-hidden="true"
                    xmlns="http://www.w3.org/2000/svg"
                    fill="currentColor"
                    viewBox="0 0 16 20"
                  >
                    <path d="M14.066 0H7v5a2 2 0 0 1-2 2H0v11a1.97 1.97 0 0 0 1.934 2h12.132A1.97 1.97 0 0 0 16 18V2a1.97 1.97 0 0 0-1.934-2ZM10.5 6a1.5 1.5 0 1 1 0 2.999A1.5 1.5 0 0 1 10.5 6Zm2.221 10.515a1 1 0 0 1-.858.485h-8a1 1 0 0 1-.9-1.43L5.6 10.039a.978.978 0 0 1 .936-.57 1 1 0 0 1 .9.632l1.181 2.981.541-1a.945.945 0 0 1 .883-.522 1 1 0 0 1 .879.529l1.832 3.438a1 1 0 0 1-.031.988Z" />
                    <path d="M5 5V.13a2.96 2.96 0 0 0-1.293.749L.879 3.707A2.98 2.98 0 0 0 .13 5H5Z" />
                  </svg>
                </div>
                <div className="h-2.5 bg-gray-200 rounded-full dark:bg-gray-700 w-48 mb-4"></div>
                <div className="h-2 bg-gray-200 rounded-full dark:bg-gray-700 mb-2.5"></div>
                <div className="h-2 bg-gray-200 rounded-full dark:bg-gray-700 mb-2.5"></div>
                <div className="h-2 bg-gray-200 rounded-full dark:bg-gray-700"></div>
                <div className="flex items-center mt-4">
                  <svg
                    className="w-10 h-10 me-3 text-gray-200 dark:text-gray-700"
                    aria-hidden="true"
                    xmlns="http://www.w3.org/2000/svg"
                    fill="currentColor"
                    viewBox="0 0 20 20"
                  >
                    <path d="M10 0a10 10 0 1 0 10 10A10.011 10.011 0 0 0 10 0Zm0 5a3 3 0 1 1 0 6 3 3 0 0 1 0-6Zm0 13a8.949 8.949 0 0 1-4.951-1.488A3.987 3.987 0 0 1 9 13h2a3.987 3.987 0 0 1 3.951 3.512A8.949 8.949 0 0 1 10 18Z" />
                  </svg>
                  <div>
                    <div className="h-2.5 bg-gray-200 rounded-full dark:bg-gray-700 w-32 mb-2"></div>
                    <div className="w-48 h-2 bg-gray-200 rounded-full dark:bg-gray-700"></div>
                  </div>
                </div>
                <span className="sr-only">Loading...</span>
              </div>
            );
          })}
      <ToastContainer />
    </div>
  );
}

export default ProductCard;

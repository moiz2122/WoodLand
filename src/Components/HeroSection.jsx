import React from "react";
import Slider from "react-slick";
import bannerOne from "../assets/picbazarBanner_1.jpg";
import bannerTwo from "../assets/picbazarBanner_2.jpg";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import { useContext, useState } from "react";
import { Productdata } from "../Context";
import { CssSyntaxError } from "postcss";
function HeroSection() {
  const [searchValue, setsearchValue] = useState("");
  const {
    productsArray,
    allCategories,
    setItems,
    ItemsData,
    FilterProducts,
    SearchingByName,
  } = useContext(Productdata);
  const settings = {
    dots: true,
    fade: true,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
    waitForAnimate: true,
  };

  return (
    <div className="slider-container relative h-[80vh]">
      <Slider {...settings} className="h-[80vh]">
        <div className="relative h-full">
          <img src={bannerOne} className="h-[80vh] object-cover" />{" "}
          <div
            className="absolute inset-0 mt-8 flex w-full flex-col items-center justify-center p-5 text-center md:px-20 lg:space-y-10"
            bis_skin_checked={1}
          >
            <h1 className="text-customgrayprimary text-2xl font-bold tracking-tight lg:text-4xl xl:text-5xl">
              Groceries Delivered in 90 Minute
            </h1>
            <p className="text-sm text-heading lg:text-base xl:text-lg">
              Get your healthy foods &amp; snacks delivered at your doorsteps
              all day everyday
            </p>
            <div className="w-full max-w-3xl" bis_skin_checked={1}>
              <form
                className="w-full"
                onSubmit={(e) => {
                  e.preventDefault();
                }}
              >
                <div
                  className="relative flex rounded md:rounded-lg h-14 shadow-900"
                  bis_skin_checked={1}
                >
                  <label htmlFor="search" className="sr-only">
                    search
                  </label>
                  <input
                    id="search"
                    type="text"
                    autoComplete="off"
                    className="search item-center flex h-full w-full appearance-none overflow-hidden truncate rounded-lg text-sm text-heading placeholder-gray-500 transition duration-300 ease-in-out focus:outline-0 focus:ring-0 bg-light ltr:pl-6 rtl:pr-6 ltr:pr-14 rtl:pl-14 ltr:rounded-tr-none rtl:rounded-tl-none ltr:rounded-br-none rtl:rounded-bl-none  border ltr:border-r-0 rtl:border-l-0 border-transparent focus:border-accent"
                    name="search"
                    placeholder="Search your products from here"
                    value={searchValue}
                    onChange={(e) => {
                      setsearchValue(e.target.value);
                      SearchingByName(searchValue);
                    }}
                  />
                  <button
                    onClick={() => {
                      SearchingByName(searchValue);
                      console.log("Helooooooooooooooooooooo");
                    }}
                    className="bg-customgreen flex h-full min-w-[143px] items-center justify-center rounded-lg bg-accent px-8 font-semibold text-white transition-colors duration-200 hover:bg-accent-hover focus:bg-accent-hover focus:outline-0 ltr:rounded-tl-none ltr:rounded-bl-none rtl:rounded-tr-none rtl:rounded-br-none"
                  >
                    <svg
                      viewBox="0 0 17.048 18"
                      className="h-4 w-4 ltr:mr-2.5 rtl:ml-2.5"
                    >
                      <path
                        d="M380.321,383.992l3.225,3.218c.167.167.341.329.5.506a.894.894,0,1,1-1.286,1.238c-1.087-1.067-2.179-2.131-3.227-3.236a.924.924,0,0,0-1.325-.222,7.509,7.509,0,1,1-3.3-14.207,7.532,7.532,0,0,1,6,11.936C380.736,383.462,380.552,383.685,380.321,383.992Zm-5.537.521a5.707,5.707,0,1,0-5.675-5.72A5.675,5.675,0,0,0,374.784,384.513Z"
                        transform="translate(-367.297 -371.285)"
                        fill="currentColor"
                      />
                    </svg>
                    Search
                  </button>
                </div>
              </form>
            </div>
          </div>
        </div>
        <div className="relative h-full">
          <img src={bannerTwo} className="h-[80vh] object-cover" />{" "}
        </div>
      </Slider>
    </div>
  );
}

export default HeroSection;

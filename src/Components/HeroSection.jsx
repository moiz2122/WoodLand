import React from "react";
import Slider from "react-slick";
import bannerOne from "../assets/picbazarBanner_1.jpg";
import bannerTwo from "../assets/picbazarBanner_2.jpg";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
function HeroSection() {
  const settings = {
    dots: true,
    fade: true,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
    waitForAnimate: false,
  };

  return (
    <div className="slider-container relative h-[80vh]">
      <Slider {...settings} className="h-[80vh]">
        <div className="relative h-full">
          <img src={bannerOne} className="h-[80vh] object-cover" />{" "}
          {/* <div className="absolute inset-0 flex items-center justify-center text-center text-white">
            <div className="p-8 rounded-md">
              <h1 className="text-4xl font-bold text-black mb-4">
                Welcome to Our Store
              </h1>
              <p className="text-lg mb-4 text-black">
                Find the best products tailored just for you!
              </p>
              <input
                type="text"
                placeholder="Search for products..."
                className="w-full px-4 py-2 rounded-md border border-gray-300 text-black"
              />
            </div>
          </div> */}
        </div>
        <div className="relative h-full">
          <img src={bannerTwo} className="h-[80vh] object-cover" />{" "}
        </div>
      </Slider>
    </div>
  );
}

export default HeroSection;

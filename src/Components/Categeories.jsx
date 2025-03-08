import React from "react";
import { useState } from "react";
import { useContext } from "react";
import { Productdata } from "../Context";
function Categeories() {
  const { productsArray, allCategories, setItems, ItemsData, FilterProducts } =
    useContext(Productdata);
  return (
    <div
      className={`categerises-Section-container col-span-10 lg:col-span-3 grid grid-cols-4 sm:grid-cols-4 md:grid-cols-4 lg:grid-cols-2 xl:grid-cols-2 h-32 gap-4 px-6 `}
    >
      {allCategories.map((data) => {
        return (
          <div
            onClick={() => {
              FilterProducts(data);
            }}
            className={`categery-contaier bg-white text-center rounded bg-light sagap-y-2 lg:py-8 flex flex-col items-center justify-center cursor-pointer border-2 border-border-100 xl:border-transparent`}
          >
            <p>
              {data == "Beds" ? (
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="60"
                  height="60"
                  viewBox="0 0 60 60"
                  fill="currentColor"
                  className="w-10 h-10"
                >
                  <path
                    id="Bed"
                    d="M228.5,466.75V455.5A7.5,7.5,0,0,0,221,448H191a7.5,7.5,0,0,0-7.5,7.5v11.25L176,491.125v11.25a1.874,1.874,0,0,0,1.875,1.875h3.75V508H183.5v-3.75h45V508h1.875v-3.75h3.75A1.874,1.874,0,0,0,236,502.375v-11.25ZM185.375,455.5A5.632,5.632,0,0,1,191,449.875h30a5.632,5.632,0,0,1,5.625,5.625v11.1q-.938-.072-1.875-.137V463a3.75,3.75,0,0,0-3.75-3.75h-9.375a3.75,3.75,0,0,0-3.75,3.75v2.824c-.625,0-1.25-.009-1.875-.009s-1.25,0-1.875.009V463a3.75,3.75,0,0,0-3.75-3.75H191a3.75,3.75,0,0,0-3.75,3.75v3.467q-.938.065-1.875.137Zm37.5,10.84q-6.557-.409-13.125-.5V463a1.877,1.877,0,0,1,1.875-1.875H221A1.877,1.877,0,0,1,222.875,463Zm-33.75,0V463A1.877,1.877,0,0,1,191,461.125h9.375A1.877,1.877,0,0,1,202.25,463v2.843Q195.684,465.933,189.125,466.34Zm-4.207,2.176c6.992-.549,14.077-.827,21.082-.827s14.09.277,21.082.827l6.331,20.576c-9.1-.517-18.313-.779-27.413-.779s-18.308.262-27.413.779Zm49.207,33.859h-56.25v-11.36q14.05-.823,28.125-.827t28.125.827Z"
                    transform="translate(-176 -448)"
                    fill="#212121"
                  ></path>
                </svg>
              ) : null}
              {data === "Sofa" ? (
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="66.782"
                  height="48"
                  viewBox="0 0 66.782 48"
                  fill="currentColor"
                  className="w-10 h-10"
                >
                  <path
                    id="Sofa"
                    d="M100.643,196.523h-.116a6.04,6.04,0,0,0-2.092.375v-4.549A8.348,8.348,0,0,0,90.087,184H56.7a8.348,8.348,0,0,0-8.348,8.348v4.532a6.258,6.258,0,0,0-2.087-.358c-.133,0-.266,0-.4.013a6.261,6.261,0,0,0-1.687,12.151v21.227A2.086,2.086,0,0,0,46.261,232h4.174a2.086,2.086,0,0,0,2.087-2.087H94.261A2.086,2.086,0,0,0,96.348,232h4.174a2.086,2.086,0,0,0,2.087-2.087V208.686a6.261,6.261,0,0,0-1.966-12.163Zm-50.208,33.39H46.261V208.686a2.086,2.086,0,0,0-1.391-1.967,4.154,4.154,0,0,1-2.778-4.151,4.211,4.211,0,0,1,3.9-3.951c.09-.005.181-.008.27-.008a4.178,4.178,0,0,1,4.174,4.174Zm43.826-2.087H52.522v-6.261H94.261Zm-41.739-8.348v-6.261H70.261a2.089,2.089,0,0,1,2.087,2.087v4.174Zm41.739,0H74.435V215.3a2.089,2.089,0,0,1,2.087-2.087H94.261Zm0-16.555v8.207H76.522a4.161,4.161,0,0,0-3.13,1.419,4.161,4.161,0,0,0-3.13-1.419H52.522v-8.348a6.245,6.245,0,0,0-2.087-4.665v-5.769a6.269,6.269,0,0,1,6.261-6.261H90.087a6.269,6.269,0,0,1,6.261,6.261v5.831A6.467,6.467,0,0,0,94.261,202.923Zm7.652,3.8a2.086,2.086,0,0,0-1.391,1.967v21.227H96.348v-26.99a4.306,4.306,0,0,1,4.179-4.315h.076a4.174,4.174,0,0,1,1.31,8.109Z"
                    transform="translate(-40 -184)"
                    fill="currentColor"
                  ></path>
                </svg>
              ) : null}
              {data === "Table" ? (
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="60"
                  height="48.75"
                  viewBox="0 0 60 48.75"
                  fill="currentColor"
                  className="w-10 h-10"
                >
                  <path
                    id="Center_table"
                    data-name="Center table"
                    d="M226.757,591.945A98.842,98.842,0,0,0,206,590a98.842,98.842,0,0,0-20.757,1.945C179.11,593.33,176,595.2,176,597.5s3.11,4.17,9.243,5.555a93.868,93.868,0,0,0,17.945,1.915v4.724a4.674,4.674,0,0,0,0,7.487v8.444h-1.875a4.7,4.7,0,0,0-4.594,3.75h-1.031A4.693,4.693,0,0,0,191,634.063v3.75a.938.938,0,0,0,.938.938h3.75a.938.938,0,0,0,.938-.937V635h.938a4.7,4.7,0,0,0,4.594-3.75h1.031v.938a2.813,2.813,0,0,0,5.625,0v-.937h1.031a4.7,4.7,0,0,0,4.594,3.75h.938v2.813a.938.938,0,0,0,.938.938h3.75a.938.938,0,0,0,.938-.937v-3.75a4.693,4.693,0,0,0-4.687-4.687h-1.031a4.7,4.7,0,0,0-4.594-3.75h-1.875v-8.444a4.674,4.674,0,0,0,0-7.487V604.97a93.877,93.877,0,0,0,17.945-1.915C232.89,601.67,236,599.8,236,597.5S232.89,593.33,226.757,591.945Zm-23.57,37.43h-1.875a.938.938,0,0,0-.937.938,2.816,2.816,0,0,1-2.812,2.813h-1.875a.938.938,0,0,0-.937.938v2.813h-1.875v-2.812a2.816,2.816,0,0,1,2.813-2.812h1.875a.938.938,0,0,0,.938-.937,2.816,2.816,0,0,1,2.813-2.812h1.875Zm7.5-1.875a2.816,2.816,0,0,1,2.813,2.813.938.938,0,0,0,.938.938h1.875a2.816,2.816,0,0,1,2.813,2.813v2.813H217.25v-2.812a.938.938,0,0,0-.937-.937h-1.875a2.816,2.816,0,0,1-2.812-2.812.938.938,0,0,0-.937-.937h-1.875V627.5Zm-3-11.817-.747.562v15.942a.938.938,0,0,1-1.875,0V616.245l-.747-.562a2.8,2.8,0,0,1,0-4.491l.747-.562V605h1.875v5.63l.747.562a2.8,2.8,0,0,1,0,4.491Zm18.659-14.457a96.9,96.9,0,0,1-20.344,1.9,96.9,96.9,0,0,1-20.344-1.9c-6.143-1.387-7.781-2.994-7.781-3.726s1.639-2.339,7.781-3.726a96.9,96.9,0,0,1,20.344-1.9,96.9,96.9,0,0,1,20.344,1.9c6.143,1.387,7.781,2.994,7.781,3.726S232.486,599.839,226.344,601.226Z"
                    transform="translate(-176 -590)"
                    fill="currentColor"
                  ></path>
                </svg>
              ) : null}
              {data == "Chairs" ? (
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="40.4"
                  height="62"
                  viewBox="0 0 40.4 62"
                  fill="currentColor"
                  className="w-10 h-10"
                >
                  <g id="Chair" transform="translate(-312 -308)">
                    <circle
                      id="Ellipse_111"
                      data-name="Ellipse 111"
                      cx="0.6"
                      cy="0.6"
                      r="0.6"
                      transform="translate(322 314.4)"
                      strokeWidth="2"
                      stroke="#212121"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      fill="none"
                    ></circle>
                    <circle
                      id="Ellipse_112"
                      data-name="Ellipse 112"
                      cx="0.6"
                      cy="0.6"
                      r="0.6"
                      transform="translate(341.2 314.4)"
                      strokeWidth="2"
                      stroke="#212121"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      fill="none"
                    ></circle>
                    <circle
                      id="Ellipse_113"
                      data-name="Ellipse 113"
                      cx="0.6"
                      cy="0.6"
                      r="0.6"
                      transform="translate(331.6 314.4)"
                      strokeWidth="2"
                      stroke="#212121"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      fill="none"
                    ></circle>
                    <circle
                      id="Ellipse_114"
                      data-name="Ellipse 114"
                      cx="0.6"
                      cy="0.6"
                      r="0.6"
                      transform="translate(322 324)"
                      strokeWidth="2"
                      stroke="#212121"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      fill="none"
                    ></circle>
                    <circle
                      id="Ellipse_115"
                      data-name="Ellipse 115"
                      cx="0.6"
                      cy="0.6"
                      r="0.6"
                      transform="translate(341.2 324)"
                      strokeWidth="2"
                      stroke="#212121"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      fill="none"
                    ></circle>
                    <circle
                      id="Ellipse_116"
                      data-name="Ellipse 116"
                      cx="0.6"
                      cy="0.6"
                      r="0.6"
                      transform="translate(331.6 324)"
                      strokeWidth="2"
                      stroke="#212121"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      fill="none"
                    ></circle>
                    <circle
                      id="Ellipse_117"
                      data-name="Ellipse 117"
                      cx="0.6"
                      cy="0.6"
                      r="0.6"
                      transform="translate(322 333.6)"
                      strokeWidth="2"
                      stroke="#212121"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      fill="none"
                    ></circle>
                    <circle
                      id="Ellipse_118"
                      data-name="Ellipse 118"
                      cx="0.6"
                      cy="0.6"
                      r="0.6"
                      transform="translate(341.2 333.6)"
                      strokeWidth="2"
                      stroke="#212121"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      fill="none"
                    ></circle>
                    <circle
                      id="Ellipse_119"
                      data-name="Ellipse 119"
                      cx="0.6"
                      cy="0.6"
                      r="0.6"
                      transform="translate(331.6 333.6)"
                      strokeWidth="2"
                      stroke="#212121"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      fill="none"
                    ></circle>
                    <path
                      id="Path_17427"
                      data-name="Path 17427"
                      d="M351.4,339.8H313v-2.4a2.4,2.4,0,0,1,2.4-2.4H349a2.4,2.4,0,0,1,2.4,2.4Z"
                      transform="translate(0 5.2)"
                      fill="none"
                      stroke="#212121"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth="2"
                    ></path>
                    <line
                      id="Line_7"
                      data-name="Line 7"
                      y1="24"
                      transform="translate(315.4 345)"
                      fill="none"
                      stroke="#212121"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth="2"
                    ></line>
                    <line
                      id="Line_8"
                      data-name="Line 8"
                      y2="24"
                      transform="translate(349 345)"
                      fill="none"
                      stroke="#212121"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth="2"
                    ></line>
                    <path
                      id="Path_17428"
                      data-name="Path 17428"
                      d="M348.6,340.2H315V313.8a4.8,4.8,0,0,1,4.8-4.8h24a4.8,4.8,0,0,1,4.8,4.8Z"
                      transform="translate(0.4 0)"
                      fill="none"
                      stroke="#212121"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth="2"
                    ></path>
                  </g>
                </svg>
              ) : null}
            </p>
            <p className="text-sm font-semibold text-customgrayprimary">
              {data}
            </p>
          </div>
        );
      })}
    </div>
  );
}

export default Categeories;

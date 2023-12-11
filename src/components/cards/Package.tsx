import React, { useContext, useEffect, useState } from "react";
import { ThemeContext } from "../../themes/ThemeProvider";
import { useDynamicTextColor } from "../../themes/DynamicTextColor";
import { Package } from "../../modal/Section";
import { FaChevronCircleRight } from "react-icons/fa";

export default function PackageCard(packageDetail: Package) {
  const { theme } = useContext(ThemeContext);
  const textColor = useDynamicTextColor(theme.colors.secondary || "");
  const [offset, setOffset] = useState(0);
  const percentage = 75;

  useEffect(() => {
    const progressOffset = 251.2 - (251.2 * percentage) / 100;
    setOffset(progressOffset);
  }, [percentage]);

  return (
    <div
      className={`bg-${theme.colors.primary} relative bg-stone-200 rounded-lg`}
    >
      <a
        key={packageDetail.id}
        href={packageDetail.href}
        className="group hover:shadow-2xl hover:scale-105 transition-all transform duration-500 shadow-xl rounded-xl"
      >
        <div className="w-full aspect-w-1 aspect-h-1 relative  rounded-t-lg rounded-b-none overflow-hidden xl:aspect-w-7 xl:aspect-h-8">
          <img
            src={packageDetail.imageSrc}
            alt={packageDetail.imageAlt}
            className="w-full h-[18rem] rounded-t-lg rounded-b-none object-center object-cover group-hover:opacity-75"
          />

          <p
            className={` pr-2 bottom-0  text-white bg-yellow-600 rounded-tr-lg p-2 truncate absolute  text-left pl-3 text-[1rem] font-semibold  text-${textColor}`}
          >
            {packageDetail.destination}
          </p>
        </div>
        <div className="pl-3 pr-3">
          <h3
            className={`mt-3 text-[1.4rem] truncate leading-8 text-left font-bold text-${textColor}`}
          >
            {packageDetail.name}
          </h3>
          <p
            className={`mt-1 pb-1 text-left text-base font-normal line-clamp-2 text-slate-700`}
          >
            {packageDetail.description}
          </p>
          <div className="flex flex-row items-center">

          <div className=" mt-5 basis-2/4">
            <h6 className="text-slate-600 text-sm font-medium">Activities:</h6>
            <div className="inline-grid">
              <button className="bg-amber-600 text-left rounded-md p-1 text-white font-medium mt-1 text-xs ">
                Treking and walking
              </button>
              <button className="bg-amber-600 text-left rounded-md p-1 text-white font-medium mt-1 text-xs ">
                Guided treks and walks
              </button>
              <button className="bg-lime-600 text-left rounded-md p-1 text-white font-medium mt-1 text-xs ">
                In comfort adventures
              </button>
            </div>
          </div>
          <div className="w-20 h-20 relative basis-2/4">
            <p className="text-center  text-slate-600 text-sm font-medium mb-1">Difficulty :</p>
            <svg className="w-full h-full" viewBox="0 0 100 100">
              <circle
                cx="50"
                cy="50"
                r="45"
                fill="none"
                stroke="#d2d6dc"
                strokeWidth="10"
              />
              <circle
                cx="50"
                cy="50"
                r="45"
                fill="none"
                stroke="#6ee7b7"
                strokeWidth="10"
                strokeDasharray="251.2"
                strokeDashoffset={offset}
                strokeLinecap="round"
                transform="rotate(-90 50 50)"
              />
              <text
                x="50%"
                y="50%"
                dominantBaseline="middle"
                textAnchor="middle"
                className="text-lg font-bold"
              >
                {percentage}%
              </text>
            </svg>
          </div>
          </div>
          <div className="flex flex-row mt-4">

          <div className=" basis-2/4">
            <h6 className="text-gray-500 text-sm font-medium">From:</h6>
            <p className="text-base font-semibold text-stone-700">
              {" "}
              {packageDetail.price}
            </p>
          </div>
          <div className=" mb-3  basis-2/4">
            <h6 className="text-center pl-3 text-gray-500 text-sm font-medium">Duration:</h6>
            <p className="text-right text-base font-semibold text-stone-700">
              {" "}
              {packageDetail.duration}
            </p>
          </div>
          
          </div>
          <button className="bg-lime-500 mb-4  flex justify-center hover:opacity-80 items-center rounded-lg text-white font-normal text-lg px-4 py-2">
            <span className="mr-2">View Trek</span> <FaChevronCircleRight />
          </button>
        </div>
        <div className="flex bg-zinc-400 rounded-b-lg justify-center p-2">
          <div className="flex items-center">
            <svg
              className="w-6 h-6 text-yellow-300 ms-1"
              aria-hidden="true"
              xmlns="http://www.w3.org/2000/svg"
              fill="currentColor"
              viewBox="0 0 22 20"
            >
              <path d="M20.924 7.625a1.523 1.523 0 0 0-1.238-1.044l-5.051-.734-2.259-4.577a1.534 1.534 0 0 0-2.752 0L7.365 5.847l-5.051.734A1.535 1.535 0 0 0 1.463 9.2l3.656 3.563-.863 5.031a1.532 1.532 0 0 0 2.226 1.616L11 17.033l4.518 2.375a1.534 1.534 0 0 0 2.226-1.617l-.863-5.03L20.537 9.2a1.523 1.523 0 0 0 .387-1.575Z" />
            </svg>
            <svg
              className="w-6 h-6 text-yellow-300 ms-1"
              aria-hidden="true"
              xmlns="http://www.w3.org/2000/svg"
              fill="currentColor"
              viewBox="0 0 22 20"
            >
              <path d="M20.924 7.625a1.523 1.523 0 0 0-1.238-1.044l-5.051-.734-2.259-4.577a1.534 1.534 0 0 0-2.752 0L7.365 5.847l-5.051.734A1.535 1.535 0 0 0 1.463 9.2l3.656 3.563-.863 5.031a1.532 1.532 0 0 0 2.226 1.616L11 17.033l4.518 2.375a1.534 1.534 0 0 0 2.226-1.617l-.863-5.03L20.537 9.2a1.523 1.523 0 0 0 .387-1.575Z" />
            </svg>
            <svg
              className="w-6 h-6 text-yellow-300 ms-1"
              aria-hidden="true"
              xmlns="http://www.w3.org/2000/svg"
              fill="currentColor"
              viewBox="0 0 22 20"
            >
              <path d="M20.924 7.625a1.523 1.523 0 0 0-1.238-1.044l-5.051-.734-2.259-4.577a1.534 1.534 0 0 0-2.752 0L7.365 5.847l-5.051.734A1.535 1.535 0 0 0 1.463 9.2l3.656 3.563-.863 5.031a1.532 1.532 0 0 0 2.226 1.616L11 17.033l4.518 2.375a1.534 1.534 0 0 0 2.226-1.617l-.863-5.03L20.537 9.2a1.523 1.523 0 0 0 .387-1.575Z" />
            </svg>
            <svg
              className="w-6 h-6 text-yellow-300 ms-1"
              aria-hidden="true"
              xmlns="http://www.w3.org/2000/svg"
              fill="currentColor"
              viewBox="0 0 22 20"
            >
              <path d="M20.924 7.625a1.523 1.523 0 0 0-1.238-1.044l-5.051-.734-2.259-4.577a1.534 1.534 0 0 0-2.752 0L7.365 5.847l-5.051.734A1.535 1.535 0 0 0 1.463 9.2l3.656 3.563-.863 5.031a1.532 1.532 0 0 0 2.226 1.616L11 17.033l4.518 2.375a1.534 1.534 0 0 0 2.226-1.617l-.863-5.03L20.537 9.2a1.523 1.523 0 0 0 .387-1.575Z" />
            </svg>
            <svg
              className="w-6 h-6 ms-1 text-gray-300 dark:text-gray-500"
              aria-hidden="true"
              xmlns="http://www.w3.org/2000/svg"
              fill="currentColor"
              viewBox="0 0 22 20"
            >
              <path d="M20.924 7.625a1.523 1.523 0 0 0-1.238-1.044l-5.051-.734-2.259-4.577a1.534 1.534 0 0 0-2.752 0L7.365 5.847l-5.051.734A1.535 1.535 0 0 0 1.463 9.2l3.656 3.563-.863 5.031a1.532 1.532 0 0 0 2.226 1.616L11 17.033l4.518 2.375a1.534 1.534 0 0 0 2.226-1.617l-.863-5.03L20.537 9.2a1.523 1.523 0 0 0 .387-1.575Z" />
            </svg>
          </div>
        </div>
      </a>
    </div>
  );
}

import React, { useContext } from "react";
import { ThemeContext } from "../../themes/ThemeProvider";
import { useDynamicTextColor } from "../../themes/DynamicTextColor";
import { Package } from "../../modal/Section";
import { FaChevronCircleRight } from "react-icons/fa";

export default function PackageCard(packageDetail: Package) {
  const { theme } = useContext(ThemeContext);
  const textColor = useDynamicTextColor(theme.colors.secondary || "");

  return (
    <div
      className={`bg-${theme.colors.primary} relative border bg-stone-200 border-gray-300 rounded-lg`}
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
        <div className=" mt-5">
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
        <div className="mt-3">
          <h6 className="text-gray-500 text-sm font-medium">From:</h6>
          <p className="text-lg font-semibold text-stone-700">
            {" "}
            {packageDetail.price}
          </p>
        </div>
        <div className=" mb-3 mt-2">
          <h6 className="text-gray-500 text-sm font-medium">Duration:</h6>
          <p className="text-lg font-semibold text-stone-700">
            {" "}
            {packageDetail.duration}
          </p>
        </div>
        <button className="bg-lime-500 mb-5 flex justify-center hover:opacity-80 items-center rounded-lg text-white font-normal text-lg px-4 py-2"><span className="mr-2">View Trek</span> <FaChevronCircleRight /></button>
        </div>
      </a>
    </div>
  );
}

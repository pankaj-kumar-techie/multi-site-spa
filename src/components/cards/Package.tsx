import React, { useContext } from "react";
import { ThemeContext } from "../../themes/ThemeProvider";
import { useDynamicTextColor } from "../../themes/DynamicTextColor";
import { Package } from "../../modal/Section";

export default function PackageCard(packageDetail: Package) {
  const { theme } = useContext(ThemeContext);
  const textColor = useDynamicTextColor(theme.colors.secondary || "");

  return (
    <div className={`bg-${theme.colors.secondary} rounded-lg`}>
      <a
        key={packageDetail.id}
        href={packageDetail.href}
        className="group hover:shadow-2xl hover:scale-105 transition-all transform duration-500 shadow-xl rounded-xl"
      >
        <div className="w-full aspect-w-1 aspect-h-1 bg-gray-200 rounded-t-lg rounded-b-none overflow-hidden xl:aspect-w-7 xl:aspect-h-8">
          <img
            src={packageDetail.imageSrc}
            alt={packageDetail.imageAlt}
            className="w-full h-[18rem] rounded-t-lg rounded-b-none object-center object-cover group-hover:opacity-75"
          />
        </div>
        <h3
          className={`mt-3 pr-2 text-[1.3rem] truncate leading-8 pl-3 text-left font-semibold ${textColor}`}
        >
          {packageDetail.name}
        </h3>
        <p
          className={`mt-1 pb-1 pr-2 text-left pl-3 text-[1rem] font-medium truncate text-gray-900 ${textColor}`}
        >
          {packageDetail.description}
        </p>
        <div className="flex justify-between items-center  text-[.9rem] font-normal text-gray-900">
          <p className={`pl-3 text-[1rem] font-normal truncate  ${textColor}`}>
            {" "}
            {packageDetail.price}
          </p>
          <p
            className={`mt-1 pb-1 pr-2 truncate text-left pl-3 text-[1rem] font-normal  text-gray-900 ${textColor}`}
          >
            {packageDetail.destination}
          </p>
        </div>
        <p
          className={`pb-3 pr-2 pl-3 text-[.9rem] font-normal  text-gray-900 ${textColor}`}
        >
          {" "}
          {packageDetail.duration}
        </p>
      </a>
    </div>
  );
}

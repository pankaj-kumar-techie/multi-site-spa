import React, { useContext, useEffect } from "react";
import { ThemeContext } from "../../../themes/ThemeProvider";
import { useDynamicTextColor } from "../../../themes/DynamicTextColor";
import { Package } from "../../../modal/Section";
import { FaLocationDot } from "react-icons/fa6";

export default function SecondPackageCard(packageDetail: Package) {
  const { theme } = useContext(ThemeContext);
  const textColor = useDynamicTextColor(theme.colors.secondary || "");

  useEffect(() => {});

  return (
    <div className={`bg-${theme.colors.primary} relative rounded-lg overflow-hidden`}>
      <div className="relative mb-12">
        <div className="overflow-hidden rounded-[10px]">
          <img src={packageDetail.imageSrc} alt={packageDetail.name} className="w-full" />
        </div>
        <div className={`relative z-10 mx-7 -mt-20 rounded-lg bg-white dark:bg-dark-2 py-[34px] px-3 text-center shadow-portfolio dark:shadow-box-dark`}>
          <div className="flex justify-center items-center ">
            <FaLocationDot className={`text-lg ${textColor}`} />
            <span className={`${textColor} block text-sm font-medium ml-2`}>
              {packageDetail.destination}
            </span>
          </div>
          <h3 className="mt-3 mb-4 text-lg truncate font-bold">
            {packageDetail.name}
          </h3>
          {/* <p className="text-sm max-w-full whitespace-normal mb-4">
            {packageDetail.description}
          </p> */}
          <div className="flex items-center justify-center space-x-4 mb-4">
            {packageDetail.altitude && (
              <div className="text-gray-500 px-2 py-1 rounded-md text-xs font-medium">
                Altitude: {packageDetail.altitude}
              </div>
            )}
            {packageDetail.season && (
              <div className="text-gray-500 px-2 py-1 rounded-md text-xs font-medium">
                Season: {packageDetail.season}
              </div>
            )}
          </div>
          <a
            href={packageDetail.href}
            className={`text-body-color dark:text-dark-6 hover:border-primary hover:bg-primary inline-block rounded-md border border-stroke dark:border-dark-3 py-[10px] px-7 text-sm font-medium transition hover:border-black`}
          >
            {"View Details"}
          </a>
        </div>
      </div>
    </div>
  );
}

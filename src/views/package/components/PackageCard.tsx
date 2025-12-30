import React, { useEffect, useState } from "react";
import { Package } from "../../../modal/Section";
import calculateDifficultyPercentage from "../../../utils/difficultyCalculator";
import BaseCard from "../../../components/common/BaseCard";

export default function PackageCard(packageDetail: Package) {
  const [offset, setOffset] = useState(0);
  const [percentage, setPercentage] = useState(0);

  useEffect(() => {
    const calculatedPercentage = calculateDifficultyPercentage(packageDetail.difficulty);
    setPercentage(calculatedPercentage);
    // Animation for the progress ring
    const strokeDashoffset = 251.2 - (251.2 * calculatedPercentage) / 100;
    setOffset(strokeDashoffset);
  }, [packageDetail.difficulty]);

  return (
    <BaseCard
      variant="elevated"
      hoverEffect="zoom"
      padding="none"
      className="group h-full flex flex-col overflow-hidden"
    >
      <a href={packageDetail.href} className="flex flex-col h-full">
        {/* Image Section */}
        <div className="relative aspect-[4/3] overflow-hidden">
          <img
            src={packageDetail.imageSrc}
            alt={packageDetail.imageAlt || packageDetail.name}
            className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
          />
          <div className="absolute bottom-0 left-0 bg-primary-600 px-4 py-2 rounded-tr-xl">
            <span className="text-white text-sm font-bold uppercase tracking-wider">
              {packageDetail.destination}
            </span>
          </div>
        </div>

        {/* Content Section */}
        <div className="p-6 flex flex-col flex-grow">
          <h3 className="text-xl font-bold text-slate-900 mb-2 truncate group-hover:text-primary-600 transition-colors">
            {packageDetail.name}
          </h3>
          <p className="text-slate-600 text-sm line-clamp-2 mb-6">
            {packageDetail.description}
          </p>

          <div className="mt-auto flex items-end justify-between">
            <div className="space-y-3">
              <div>
                <p className="text-xs text-slate-400 font-medium uppercase tracking-tighter mb-1">Starting From</p>
                <p className="text-lg font-extrabold text-primary-600">{packageDetail.price}</p>
              </div>
              <div className="flex items-center gap-2">
                <span className="text-xs font-semibold text-slate-500 bg-slate-100 px-2 py-1 rounded-md">
                  {packageDetail.duration}
                </span>
              </div>
            </div>

            {/* Difficulty Indicator */}
            <div className="relative w-16 h-16">
              <svg className="w-full h-full -rotate-90" viewBox="0 0 100 100">
                <circle
                  cx="50"
                  cy="50"
                  r="40"
                  fill="none"
                  stroke="#e2e8f0"
                  strokeWidth="8"
                />
                <circle
                  cx="50"
                  cy="50"
                  r="40"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="8"
                  strokeDasharray="251.2"
                  strokeDashoffset={offset}
                  strokeLinecap="round"
                  className="text-primary-600 transition-all duration-1000 ease-out"
                />
              </svg>
              <div className="absolute inset-0 flex items-center justify-center">
                <span className="text-xs font-bold text-slate-700">{percentage}%</span>
              </div>
              <p className="absolute -top-1 left-1/2 -translate-x-1/2 whitespace-nowrap text-[8px] font-bold text-slate-400 uppercase tracking-widest">
                Difficulty
              </p>
            </div>
          </div>
        </div>
      </a>
    </BaseCard>
  );
}

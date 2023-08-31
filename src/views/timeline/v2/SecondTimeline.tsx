import React, { useContext, useEffect, useState } from "react";
import { ThemeContext } from "../../../themes/ThemeProvider";
import SectionShimmer from "../../../components/common/shimmer/SectionShimmer";

export default function SecondTimeline(props: { data: any }) {
  const { theme } = useContext(ThemeContext);
  const [timelineData, setTimelineData] = useState<any>([]);

  useEffect(() => {
    setTimelineData(props.data);
  }, [props.data]);

  if (!timelineData.timelineData) {
    return <SectionShimmer title={timelineData.title} />;
  }

  return (
    <section className={`${theme.background.secondary} py-20`}>
      <div className="min-h-screen bg-fixed bg-blend-screen py-6 flex flex-col justify-center ">
        <div className="py-3 sm:max-w-xl sm:mx-auto w-full px-2 sm:px-0 backdrop-blur-md-">
          <div className="relative text-gray-700 antialiased text-sm font-semibold">
            {timelineData.timelineData.map((item: any, index: number) => (
              <div
                key={index}
                className={`mt-6 sm:mt-0 sm:mb-12 ${index % 2 === 0 ? "flex-row-reverse" : ""
                  }`}
              >
                <div className="flex justify-end w-full mx-auto items-center">
                  <div className={`w-full sm:w-1/2 sm:${index % 2 === 0 ? "pl" : "pr"}-8`}>
                    <div className="block p-6 rounded-lg shadow-lg bg-gray-100">
                      <div className="flex justify-between mb-4">
                        <h1 className="text-base text-base-600 font-semibold tracking-wide uppercase">
                          {item.title}
                        </h1>
                      </div>
                      <p className="text-gray-700 mb-6">{item.description}</p>
                      <div className="flex justify-between mb-4">
                        <a
                          href={item.companyLink}
                          className="font-medium text-purple-600 hover:text-purple-700 focus:text-purple-800 duration-300 transition ease-in-out text-sm"
                        >
                          {item.company}
                        </a>
                        <span className="font-medium text-purple-600">
                          {item.duration}
                        </span>
                      </div>
                    </div>
                  </div>
                  <div
                    className={`rounded-full bg-blue-500 border-white border-4 w-8 h-8 absolute left-1/2 -translate-y-4 sm:translate-y-0 transform -translate-x-1/2 flex items-center justify-center ${index % 2 === 0 ? "right-1/2" : "left-1/2"
                      }`}
                  >
                    <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" />
                    </svg>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}

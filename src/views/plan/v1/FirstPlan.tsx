import React, { useEffect, useState } from "react";
import { Plan } from "../../../modal/Section";
const cols = [
  {
    title: "Basic",
    users: 6,
    price: 10,
    skills: [
      " Customized Itineraries",
      "Exclusive Accommodations",
      " Adventure Activities",
      "Gastronomic Delights",
    ],
  },
  {
    title: "Summit",
    users: 4,
    price: 40,
    skills:[
        " Customized Itineraries",
        "Exclusive Accommodations",
        " Adventure Activities",
        "Gastronomic Delights",
      ],
  },
  {
    title: "Extreme",
    users: 6,
    price: 10,
    skills:[
        " Customized Itineraries",
        "Exclusive Accommodations",
        " Adventure Activities",
        "Gastronomic Delights",
      ],
  },
];
export default function FirstPlan(props: { data: any }) {
  const [planList, setPlanList] = useState<any>({
    title: "",
    description: "",
    plans: [],
  });

  useEffect(() => {
    setPlanList(props.data);
  }, [props.data]);

  return (
    <section className="flex items-center bg-white lg:h-screen font-poppins dark:bg-gray-900 ">
      <div className="justify-center flex-1 max-w-6xl px-4 py-4 mx-auto lg:py-0 md:px-6">
        <h2 className="mb-4 text-3xl font-bold text-center text-gray-800 md:text-5xl dark:text-gray-400">
          {planList.title} <span className="text-teal-400"></span>
        </h2>
        <p className="mb-6 text-lg font-base text-center text-black md:text-xl dark:text-gray-400">
          {planList.description}
        </p>
        <div className="flex flex-wrap justify-center pt-8 -mx-3">
          {planList.plans.map((item:Plan) => (
            <div
              key={item.id}
              className="w-full px-3 mb-14 lg:px-2 md:w-1/2 lg:w-1/3  "
            >
              <div className="flex flex-col border-4 hover:bg-cyan-100 border-teal-600 shadow-md rounded-[50px] dark:border-gray-800 dark:bg-gray-800 bg-gray-50">
                <div className="relative flex justify-center">
                  <div className=" top-0 z-10 flex items-center justify-center mt-5 ">
                    <h2 className="px-8 py-2 text-xl font-semibold tracking-wide text-center hover:bg-orange-400 text-gray-200 bg-cyan-800 rounded-full lg:text-xl dark:bg-gray-700 dark:text-gray-300">
                      {item.title}
                    </h2>
                  </div>
                </div>
                <div className="flex items-center justify-between px-4 pb-2 border-b border-cyan-300 dark:border-gray-600 pt-7">
                  <div className="flex items-center dark:text-gray-400">
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      width="16"
                      height="16"
                      fill="currentColor"
                      className="w-6 h-6 mr-2 text-cyan-700 dark:text-gray-400 bi bi-people-fill"
                      viewBox="0 0 16 16"
                    >
                      <path d="M7 14s-1 0-1-1 1-4 5-4 5 3 5 4-1 1-1 1H7zm4-6a3 3 0 1 0 0-6 3 3 0 0 0 0 6z"></path>
                      <path
                        fill-rule="evenodd"
                        d="M5.216 14A2.238 2.238 0 0 1 5 13c0-1.355.68-2.75 1.936-3.72A6.325 6.325 0 0 0 5 9c-4 0-5 3-5 4s1 1 1 1h4.216z"
                      ></path>
                      <path d="M4.5 8a2.5 2.5 0 1 0 0-5 2.5 2.5 0 0 0 0 5z"></path>
                    </svg>
                    <span className="mr-2 text-2xl font-semibold">
                      {item.id}{" "}
                    </span>
                    Trek
                  </div>
                  <div className="text-2xl font-bold dark:text-gray-300">
                    <div className="">
                      <span className="text-2xl font-medium text-gray-700 dark:text-gray-300">
                      {item.price}
                      </span>
                    </div>
                  </div>
                </div>
                <div className="self-center py-2 ">
                  <p className="flex items-center mb-3 font-medium text-gray-500 dark:text-gray-400">
                    {item.description}
                  </p>
                </div>
                <div className="p-4">
                  <a href="#" className="inline-block w-full py-2 font-medium text-center text-cyan-600 border border-cyan-600 rounded-full hover:bg-cyan-700 hover:text-gray-200 dark:border-gray-500 dark:hover:bg-gray-900 dark:hover:border-gray-900 dark:hover:text-gray-300 dark:text-gray-400" >
                    Buy Now{" "}
                  </a>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};


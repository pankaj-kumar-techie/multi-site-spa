import React from "react";
const data = [
  {
    img: "https://lockyourtrip.com/blogs/wp-content/uploads/2023/05/THE-MOST-BEAUTIFUL-SNOWFALL-PLACES-TO-VISIT-IN-HIMACHAL-PRADESH.webp",
    alt: "Camping",
    title: "Camping",
  },
  {
    img: "https://lockyourtrip.com/blogs/wp-content/uploads/2023/05/THE-MOST-BEAUTIFUL-SNOWFALL-PLACES-TO-VISIT-IN-HIMACHAL-PRADESH.webp",
    alt: "Trekking",
    title: "Trekking",
  },
  {
    img: "https://www.tourmyindia.com/blog//wp-content/uploads/2021/11/Spiti-Valley-Snowfall-Tourist-Place-in-Himachal.jpg",
    alt: "4*4 Expedition",
    title: "4*4 Expedition",
  },
  {
    img: "https://discoverkullumanali.in/wp-content/uploads/2019/02/Manali-after-snowfall-on-Friday-discover-kullu-manali-1040x530.jpg",
    alt: "Skiing",
    title: "Skiing",
  },
];
const ThirdHeroBanner = (props: { data: any }) => {
  return (
    <>
      <section className="bg-white dark:bg-gray-900">
        <div className="grid max-w-screen-xl px-4 py-8 mx-auto lg:gap-8 xl:gap-0 lg:pb-16 lg:grid-cols-12">
          <div className="mr-auto place-self-center lg:col-span-7">
            <span className="inline-flex text-lg items-center justify-center px-5 py-2 mb-2  font-medium text-center text-white rounded-lg bg-teal-500 hover:bg-primary-800 focus:ring-4 focus:ring-primary-300 dark:focus:ring-primary-900">
              Adventure & Expedition
            </span>
            <h1 className="max-w-2xl mb-4 text-4xl font-extrabold tracking-tight leading-none md:text-5xl xl:text-5xl dark:text-white">
              THE WORLD IS WAITING{" "}
              <span className="text-teal-500 text-6xl">FOR YOU.</span>
            </h1>
            <p className="max-w-2xl mb-6 font-normal text-black lg:mb-8 md:text-lg lg:text-xl dark:text-gray-400">
              Pahari Yatri: Your ticket to Himalayan adventures. We prioritize
              safety, sustainability, and personalized experiences. Join us to
              explore the hidden treasures of the Himalayas in a remarkable and
              sustainable way
            </p>
            <a
              href="#"
              className="inline-flex items-center justify-center px-10 py-3  text-base font-medium text-center text-white rounded-lg bg-orange-400 hover:bg-primary-800 focus:ring-4 focus:ring-primary-300 dark:focus:ring-primary-900"
            >
              LET'S GET STARTED
              <svg
                className="w-5 h-5 ml-2 -mr-1"
                fill="currentColor"
                viewBox="0 0 20 20"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  fill-rule="evenodd"
                  d="M10.293 3.293a1 1 0 011.414 0l6 6a1 1 0 010 1.414l-6 6a1 1 0 01-1.414-1.414L14.586 11H3a1 1 0 110-2h11.586l-4.293-4.293a1 1 0 010-1.414z"
                  clip-rule="evenodd"
                ></path>
              </svg>
            </a>
          </div>
          <div className="hidden relative lg:mt-0 lg:col-span-5 lg:flex">
            <img
              src="https://i.pinimg.com/736x/63/27/9d/63279d93bdd63862256bb4c7e500e10b.jpg"
              alt="mockup"
              className="z-10 rounded-full bg-orange-400 p-5"
            />
            <div className="absolute z-0 right-30 bg-teal-500 w-[370px] top-24 left-[270px] h-[488px] rounded-tr-3xl inset-0 flex items-center justify-center"></div>
          </div>
        </div>
      </section>
      <section className="flex items-center py-20 bg-white lg:h-screen dark:bg-gray-800">
        <div className="px-4 mx-auto max-w-7xl">
          <div className="grid mx-5 grid-cols-1 gap-0 lg:gap-0 sm:gap-4 sm:grid-cols-2 lg:grid-cols-2 mb-10">
            <div className="">
              <h1 className="text-6xl font-bold">Popular</h1>
              <span className="text-6xl font-bold text-teal-500">
                Activities.
              </span>
            </div>
            <div className="">
              <h3 className="text-lg font-bold">Explore & Adventure</h3>
              <p className="text-lg">
                Our activities like camping, trekking, skiing, and 4x4
                expeditions.
              </p>
            </div>
          </div>

          <div className="grid grid-cols-1 gap-4 lg:gap-6 sm:gap-4 sm:grid-cols-2 lg:grid-cols-4">
            {data &&
              data.map((item, index) => (
                <div key={index} className="relative">
                  <img
                    className="object-cover w-52 mx-auto transition-all rounded-[3rem] border-[10px] border-teal-400 h-52"
                    src={item.img}
                    alt={item.alt}
                  />
                  <button className="bg-teal-400 rounded-lg text-white font-bold h-12 w-32 absolute bottom-[30px] left-[60px]">
                    {item.title}
                  </button>
                </div>
              ))}
          </div>
        </div>
      </section>
    </>
  );
};

export default ThirdHeroBanner;

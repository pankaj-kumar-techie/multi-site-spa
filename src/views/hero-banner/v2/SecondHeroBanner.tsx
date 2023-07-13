import {useContext, useEffect, useState} from "react";
import {ThemeContext} from "../../../themes/ThemeProvider";

export default function SecondHeroBanner(props: { data: any }) {
  const { theme } = useContext(ThemeContext);
  const [bannerData, setBannerData] = useState<any>([]);


  useEffect(() => {
    setBannerData(props.data);
  }, [props.data]);

  return (
    <section className={theme.colors.primary}>
      <div className="container max-w-7xl mx-auto p-4 sm:p-6 lg:p-8 bg-white dark:bg-gray-800">
        <div className="flex flex-wrap -mx-8">
          {bannerData.map((slide: any) => (
            <div key={slide.id} className="w-full lg:w-1/2 px-8">
              <div className="mb-12 lg:mb-0 pb-12 lg:pb-0 border-b lg:border-b-0">
                <h2 className="mb-4 text-3xl lg:text-4xl font-bold font-heading dark:text-white">
                  {slide.title}
                </h2>
                <p className="mb-8 leading-loose text-gray-500 dark:text-gray-30">
                  {slide.description}
                </p>
                <div className="w-full md:w-1/3">
                  <button type="button" className={theme.colors.secondary}>
                    Learn More
                  </button>
                </div>
              </div>
            </div>
          ))}
          <div className="w-full lg:w-1/2 px-8">
            <img
              src="https://source.unsplash.com/600x600/?travel"
              alt="Travel"
              className="object-cover rounded-lg shadow-md"
            />
          </div>
        </div>
      </div>
    </section>
  );
}

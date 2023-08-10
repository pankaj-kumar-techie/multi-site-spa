import React, { useContext, useEffect, useState } from "react";
import TitleCover from "../../../components/common/title-cover/TitleCover";
import { ThemeContext } from "../../../themes/ThemeProvider";
import SectionShimmer from "../../../components/common/shimmer/SectionShimmer";

export default function FirstHeroBanner(props: { data: any }) {
  const { theme } = useContext(ThemeContext);

  const [bannerData, setBannerData] = useState<any>({
    title: "",
    description: "",
    images: [],
  });

  useEffect(() => {
    setBannerData(props.data);
  }, [props.data]);

  if (!bannerData.title) {
    return <SectionShimmer title={"Hero Banner"}></SectionShimmer>;
  }

  return (
    <section className={`${theme.background.backgroundColor} bg-cover bg-no-repeat min-h-screen flex flex-col justify-center`}
      style={{ backgroundImage: `url(${props?.data?.images?.[0]?.imageSrc || "https://images.unsplash.com/photo-1688413708929-8b2d281803df?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2070&q=80"})` }}
    >
      <div className="py-12 flex flex-col  justify-center items-center">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-right">
            <TitleCover title={bannerData.title} subtitle={bannerData.subTitle} titleColor="text-white"
              subtitleColor="text-white" titleSize="lg:text-6xl text-4xl font-bold font-raleway md:text-5xl mt-32"
              subtitleSize="mt-3 max-w-md mx-auto text-2xl md:text-3xl md:max-w-3xl"></TitleCover>

            <div className={"mt-10 sm:flex justify-center"}>
              <div className={"flex items-center justify-center border border-transparent text-base font-medium rounded-md text-white md:text-lg"}>
                <a
                  href="/echo"
                  className="w-[250px] flex items-center justify-center px-8 py-3 border border-transparent text-base font-medium rounded-md text-white bg-purssian-blue hover:bg-indigo-700 md:py-4 md:text-lg md:px-10"
                >
                  Get started
                </a>
              </div>
              <div className={"mt-3 sm:w-[250px] rounded-md flex justify-center content-center sm:mt-0 sm:ml-3"}>
                <a href="/echo" className={"w-[250px] flex items-center justify-center px-8 py-3 border border-transparent text-base font-medium rounded-md text-indigo-700 bg-white hover:text-white hover:from-pink-500 hover:bg-custom-blue md:py-4 md:text-lg md:px-10"}>
                  Learn more
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

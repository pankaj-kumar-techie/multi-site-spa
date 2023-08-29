import React, { useContext, useEffect, useState } from "react";
import TitleCover from "../../../components/common/title-cover/TitleCover";
import { ThemeContext } from "../../../themes/ThemeProvider";
import SectionShimmer from "../../../components/common/shimmer/SectionShimmer";
import ImageCarousel from "../../../components/ImageCarousel"; // Adjust the import path

export default function FirstHeroBanner(props: { data: any }) {
  const { theme } = useContext(ThemeContext);

  const [bannerData, setBannerData] = useState<any>({
    title: "",
    subTitle: "",
    description: "",
    images: [],
    videoSrc: "",
    backgroundColor: "",
  });

  useEffect(() => {
    setBannerData(props.data);
  }, [props.data]);

  if (!bannerData.title) {
    return <SectionShimmer title={"Hero Banner"} />;
  }

  const renderBackgroundContent = () => {
    if (bannerData.videoSrc) {
      return (
        <video autoPlay loop muted className="w-full h-full object-cover absolute inset-0">
          <source src={bannerData.videoSrc} type="video/mp4" />
          Your browser does not support the video tag.
        </video>
      );
    } else if (bannerData.images.length > 1) {
      return (
        <div className="w-full h-full absolute inset-0">
          <ImageCarousel images={bannerData.images} />
        </div>
      );
    } else if (bannerData.images.length === 1) {
      return (
        <div
          className="w-full h-full absolute inset-0"
          style={{
            backgroundImage: `url(${bannerData.images[0].imageSrc})`,
            backgroundSize: "cover",
            backgroundPosition: "center",
          }}
        />
      );
    } else if (bannerData.backgroundColor) {
      return (
        <div className="w-full h-full absolute inset-0" style={{ backgroundColor: bannerData.backgroundColor }} />
      );
    }

    return null;
  };

  return (
    <section className={`${theme.background.backgroundColorPrimary} min-h-screen flex flex-col justify-center relative`}>
      {renderBackgroundContent()}
      <div className="py-12 flex flex-col justify-center items-center text-center relative z-1">
        <TitleCover
          title={bannerData.title}
          subtitle={bannerData.subTitle}
          paragraph={bannerData.description}
          titleColor={theme.typography.firstFontColor}
          subtitleColor={theme.typography.firstFontColor}
          paragraphColor={theme.typography.firstFontColor}
          titleSize="lg:text-6xl text-4xl font-bold font-raleway md:text-5xl mt-32"
          subtitleSize="mt-3 max-w-md mx-auto text-2xl md:text-3xl md:max-w-3xl"
        />
        <div className={"mt-10 sm:flex justify-center"}>
          {/* Your action buttons */}
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
    </section>
  );
}

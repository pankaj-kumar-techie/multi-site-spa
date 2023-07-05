import React, { useEffect, useState } from "react";
import SectionStyle from "../../../modal/SectionStyle";

const styles: { [key: string]: SectionStyle } = {
  CLASSIC: {
    imageWrapper: "",
    bodyWrapper: "",
    aboutImage: "",
    aboutImageWrapper: "",
    section: "bg-cover bg-no-repeat min-h-screen flex flex-col justify-center",
    title: "lg:text-6xl font-raleway md:text-5xl mt-32 text-2.5rem font-bold text-white text-center",
    subTitle: "mt-3 max-w-md mx-auto text-3xl text-white lg:text-1.5rem sm:text-4xl md:mt-5 md:text-1.5rem md:max-w-3xl text-center",
    buttonWrapper: "mt-10 sm:flex justify-center",
    button: "flex items-center justify-center border border-transparent text-base font-medium rounded-md text-white md:text-lg",
    buttonSecondary: "mt-3 sm:w-[250px] rounded-md flex justify-center content-center sm:mt-0 sm:ml-3",
    buttonSecondaryLink: "w-[250px] flex items-center justify-center px-8 py-3 border border-transparent text-base font-medium rounded-md text-indigo-700 bg-white hover:text-white hover:from-pink-500 hover:bg-custom-blue md:py-4 md:text-lg md:px-10",
  },
  MODERN: {
    imageWrapper: "",
    bodyWrapper: "",
    aboutImage: "",
    aboutImageWrapper: "",
    section: "bg-cover bg-no-repeat min-h-screen flex flex-col justify-center",
    title: "lg:text-6xl font-raleway md:text-5xl mt-32 text-2.5rem font-bold text-white text-center",
    subTitle: "mt-3 max-w-md mx-auto text-3xl text-white lg:text-1.5rem sm:text-4xl md:mt-5 md:text-1.5rem md:max-w-3xl text-center",
    buttonWrapper: "mt-10 sm:flex justify-center",
    button: "flex items-center justify-center border border-transparent text-base font-medium rounded-md text-white md:text-lg",
    buttonSecondary: "mt-3 sm:w-[250px] rounded-md flex justify-center content-center sm:mt-0 sm:ml-3",
    buttonSecondaryLink: "w-[250px] flex items-center justify-center px-8 py-3 border border-transparent text-base font-medium rounded-md text-indigo-700 bg-white hover:text-white hover:from-pink-500 hover:bg-custom-blue md:py-4 md:text-lg md:px-10",
  },
};
export default function FirstHeroBanner(props: { data: any }) {

  const [bannerData, setBannerData] = useState<any>({
    title: "",
    description: "",
    images: [],
  });
  const [bannerTheme, setBannerTheme] = useState<string>("CLASSIC");
  const selectedStyle: SectionStyle = styles[bannerTheme] || styles.CLASSIC;
   
  useEffect(() => {
    setBannerData(props.data);
    setBannerTheme(props.data.style || "CLASSIC");
  }, [props.data]);
  

  return (
        <section className={selectedStyle.section} 
        style={{ backgroundImage: `url(${props?.data?.images?.[0]?.imageSrc|| "https://images.unsplash.com/photo-1688413708929-8b2d281803df?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2070&q=80"})` }}
        >
      <div className="py-12 flex flex-col  justify-center items-center">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-right">
            <h1 className={selectedStyle.title}>{bannerData.title}</h1>
            <p className={selectedStyle.subTitle}>{bannerData.subTitle}</p>

            <div className={selectedStyle.buttonWrapper}>
              <div className={selectedStyle.button}>
                <a
                  href="/echo"
                  className="w-[250px] flex items-center justify-center px-8 py-3 border border-transparent text-base font-medium rounded-md text-white bg-purssian-blue hover:bg-indigo-700 md:py-4 md:text-lg md:px-10"
                >
                  Get started
                </a>
              </div>
              <div className={selectedStyle.buttonSecondary}>
                <a href="/echo" className={selectedStyle.buttonSecondaryLink}>
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

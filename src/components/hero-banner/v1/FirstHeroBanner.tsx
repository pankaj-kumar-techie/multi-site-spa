import React, { useEffect, useState } from "react";

const styles1 = {
  section: "bg-hero-v1-img  bg-cover bg-no-repeat min-h-screen flex flex-col justify-center",
  title:
    "lg:text-[6rem] font-raleway md:text-[5rem]  mt-32 text-[2.5rem] font-bold text-white text-center",
  subTitle:
    "mt-3 max-w-md  mx-auto text-3xl text-white lg:text-[1.5rem]  sm:text-4xl md:mt-5 md:text-[1.5rem] md:max-w-3xl text-center",
  buttonWrapper: "mt-10 sm:flex justify-center",
  button:
    "  flex items-center justify-center   border border-transparent text-base font-medium rounded-md text-white   md:text-lg ",
  buttonSecondary: "mt-3  sm:w-[250px] rounded-md  flex justify-center content-center sm:mt-0  sm:ml-3",
  buttonSecondaryLink:
    "w-[250px] flex  items-center justify-center px-8 py-3 border border-transparent text-base font-medium rounded-md text-indigo-700 bg-white hover:text-white hover:from-pink-500 hover:bg-custom-blue md:py-4 md:text-lg md:px-10",
};

const styles2 = {
  section: "bg-gray-100 min-h-screen flex flex-col justify-center",
  title: "text-4xl font-bold text-gray-800 text-center",
  subTitle:
    "mt-3 max-w-md mx-auto text-lg text-gray-600 sm:text-xl md:mt-5 md:text-2xl md:max-w-3xl text-center",
  buttonWrapper: "mt-10 flex justify-center",
  button:
    "px-4 py-2 border border-transparent text-base font-medium rounded-md text-white bg-indigo-600 hover:bg-indigo-700 md:text-lg md:px-6",
  buttonSecondary: "mt-3 rounded-md shadow sm:mt-0 sm:ml-3",
  buttonSecondaryLink:
    "px-8 py-3 border border-transparent text-base font-medium rounded-md text-indigo-700 bg-white hover:text-white hover:bg-indigo-700 md:py-4 md:text-lg md:px-10",
};
export default function FirstHeroBanner(props: { data: any }) {
  const [bannerData, setBannerData] = useState<any>([]);
  const [bannerTheme, setBannerTheme] = useState<string>("");
  const styles =
    {
      Theme1: styles1,
      Theme2: styles2,
    }[bannerTheme] || styles1;
  useEffect(() => {
    setBannerData(props.data);
    setBannerTheme(props.data.theme || "Theme1");
  }, [props.data]);

  return (
    <section className={styles.section}>
      <div className="py-12 flex flex-col  justify-center items-center">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-right">
            <h1 className={styles.title}>{bannerData.title}</h1>
            <p className={styles.subTitle}>{bannerData.subTitle}</p>

            <div className={styles.buttonWrapper}>
              <div className={styles.button}>
                <a
                  href="/echo"
                  className="w-[250px] flex items-center justify-center px-8 py-3 border border-transparent text-base font-medium rounded-md text-white bg-purssian-blue hover:bg-indigo-700 md:py-4 md:text-lg md:px-10"
                >
                  Get started
                </a>
              </div>
              <div className={styles.buttonSecondary}>
                <a href="/echo" className={styles.buttonSecondaryLink}>
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

import React, { useEffect, useState } from "react";

const styles1 = {
  section: `bg-cover bg-no-repeat min-h-screen flex flex-col justify-center`,
  title:
    "lg:text-[6rem] font-raleway md:text-[5rem]  mt-32 text-[2.5rem] font-bold text-white text-center",
  subTitle:
    "mt-3 max-w-md  mx-auto text-3xl text-white lg:text-[1.5rem]  sm:text-4xl md:mt-5 md:text-[1.5rem] md:max-w-3xl text-center",
  imageBg:"https://plus.unsplash.com/premium_photo-1674086970773-726e445f5802?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1172&q=80",
  buttonWrapper: "mt-10 sm:flex justify-center",
  button:
    "  flex items-center justify-center   border border-transparent text-base font-medium rounded-md text-white   md:text-lg ",
  buttonSecondary: "mt-3  sm:w-[250px] rounded-md  flex justify-center content-center sm:mt-0  sm:ml-3",
  buttonSecondaryLink:
    "w-[250px] flex  items-center justify-center px-8 py-3 border border-transparent text-base font-medium rounded-md text-indigo-700 bg-white hover:text-white hover:from-pink-500 hover:bg-custom-blue md:py-4 md:text-lg md:px-10",
};

const styles2 = {
  section: "bg-cover bg-no-repeat min-h-screen flex flex-col justify-center",
  title:
    "lg:text-[6rem] font-raleway md:text-[5rem]  mt-32 text-[2.5rem] font-bold text-white text-center",
  subTitle:
    "mt-3 max-w-md  mx-auto text-3xl text-white lg:text-[1.5rem]  sm:text-4xl md:mt-5 md:text-[1.5rem] md:max-w-3xl text-center",
    imageBg:"https://plus.unsplash.com/premium_photo-1674086970773-726e445f5802?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1172&q=80",

    buttonWrapper: "mt-10 sm:flex justify-center",
    button:
      "  flex items-center justify-center   border border-transparent text-base font-medium rounded-md text-white   md:text-lg ",
    buttonSecondary: "mt-3  sm:w-[250px] rounded-md  flex justify-center content-center sm:mt-0  sm:ml-3",
    buttonSecondaryLink:
      "w-[250px] flex  items-center justify-center px-8 py-3 border border-transparent text-base font-medium rounded-md text-indigo-700 bg-white hover:text-white hover:from-pink-500 hover:bg-custom-blue md:py-4 md:text-lg md:px-10",
};
export default function FirstHeroBanner(props: { data: any }) {
  const [bannerData, setBannerData] = useState<any>({
    title: "",
    description: "",
    images: [],
  });
  const [bannerTheme, setBannerTheme] = useState<string>("");
  const styles =
    {
      CLASSIC: styles1,
      MODERN: styles2,
    }[bannerTheme] || styles1;
  useEffect(() => {
    setBannerData(props.data);
    setBannerTheme(props.data.style || "CLASSIC");
  }, [props.data]);
  

  return (
        <section className={styles.section} 
        style={{ backgroundImage: `url(${bannerData.images?.[0]?.imageSrc || styles.imageBg})` }}
        >
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

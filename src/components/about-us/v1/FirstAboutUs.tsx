import React, { useEffect, useState } from "react";

export default function FirstAboutUs(props: { data: any }) {
  const [aboutData, setAboutData] = useState<any>([]);
  const styles1 = {
    section: "text-gray-600 body-font",
    backgroundColor: "bg-purssian-blue",
    title:
      "text-3xl font-extrabold text-center mt-10 text-white sm:text-4xl mb-6",
    subTitle: "text-white text-lg mb-6",
    imageWrapper: "hidden",
    bodyWrapper: "sm:w-1/2 sm:pl-16",
    aboutImage:
      "https://www.gotahoenorth.com/wp-content/uploads/2014/12/mainphoto-640x440.jpg",
    aboutImageWrapper: "w-full h-full rounded-lg shadow-lg object-cover",
  };

  const styles2 = {
    section: "text-gray-600 body-font  relative overflow-hidden",
    backgroundColor: "bg-gray-900",
    title: "text-3xl font-extrabold text-white sm:text-4xl mb-6",
    subTitle: "text-white text-lg mb-6",
    imageWrapper:
      "absolute top-[-550px] z-0    left-[50%] h-[1500px] translate-x-[-50%]",
    bodyWrapper: "sm:w-1/2 z-[9] sm:pl-16",
    aboutImage:
      "	https://stackoverflow.co/img/product/home/bg-header-mobile.png",
    aboutImageWrapper: "w-80 z-50 h-80 rounded-full object-cover",
  };
  const [bannerTheme, setBannerTheme] = useState<string>("");

  const styles =
    {
      Theme1: styles1,
      Theme2: styles2,
    }[bannerTheme] || styles1;

  useEffect(() => {
    setAboutData(props.data);
    setBannerTheme(props.data.theme || "Theme1");
  }, [props.data]);

  return (
    <section className={styles.section}>
      <div className={styles.backgroundColor}>
        <img
          className={styles.imageWrapper}
          src="	https://www.jetbrains.com/company/parts/about-page/svg/about_beam.svg"
          alt=""
        />
        <div className="max-w-7xl mx-auto py-16 px-4 sm:py-24 sm:px-6 lg:px-8 flex flex-col-reverse sm:flex-row">
          <div className="sm:w-1/2 flex justify-center">
            <img
              src={styles.aboutImage}
              alt="About Us"
              className={styles.aboutImageWrapper}
            />
          </div>
          <div className={styles.bodyWrapper}>
            <h2 className={styles.title}>{aboutData.title}</h2>
            <p className={styles.subTitle}>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
              eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut
              enim ad minim veniam, quis nostrud exercitation ullamco laboris
              nisi ut aliquip ex ea commodo consequat.
            </p>
            <p className={styles.subTitle}>
              Hotel ut nisl quam nestibulum ac quam nec odio elementum sceisue
              the aucan ligula. Orci varius natoque penatibus et magnis dis
              parturient monte nascete ridiculus mus nellentesque habitant
              morbine.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}

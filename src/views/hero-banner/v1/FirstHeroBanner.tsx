import React, { useContext, useEffect, useState } from "react";
import TitleCover from "../../../components/common/title-cover/TitleCover";
import SectionShimmer from "../../../components/common/shimmer/SectionShimmer";
import { useDynamicTextColor } from "../../../themes/DynamicTextColor";
import Button from "../../../components/common/button/Button";
import Form from "../../../components/common/dynamic-form/DynamicForm";
import { ThemeContext } from "../../../themes/ThemeProvider";
import Modal from "../../../components/common/model/Modal";

export default function FirstHeroBanner(props: { data: any }) {
  const { theme } = useContext(ThemeContext);
  const textColor = useDynamicTextColor(theme.colors.primary || "");
  const [isModalOpen, setIsModalOpen] = useState(false);
  const bannerData = props.data.bannerData?.[0];


  useEffect(() => {
    // No need to set bannerData again, it's already initialized with props.data
  }, [props.data]);

  if (!bannerData.title) {
    return <SectionShimmer title="Hero Banner v1" />;
  }

  const openModal = () => {
    setIsModalOpen(true);
  };

  const closeModal = () => {
    setIsModalOpen(false);
  };

  const renderBackgroundContent = () => {
    if (bannerData.videoSrc) {
      return (
        <video autoPlay loop muted className="w-full h-full object-cover absolute inset-0">
          <source src={bannerData.videoSrc} type="video/mp4" />
          Your browser does not support the video tag.
        </video>
      );
    } else if (bannerData.image) {
      return (
        <div
          className="w-full h-full absolute inset-0"
          style={{
            backgroundImage: `url(${bannerData.image.imageSrc})`,
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
    <section className={`bg-${theme.colors.primary} min-h-screen flex flex-col justify-center relative`}>
      {renderBackgroundContent()}
      <div className="py-12 flex flex-col justify-center items-center text-center relative z-1">
        <TitleCover
          title={bannerData.title}
          subtitle={bannerData.subTitle}
          paragraph={bannerData.description}
          titleColor={textColor}
          subtitleColor={textColor}
          paragraphColor={textColor}
          titleSize="lg:text-6xl text-4xl font-bold font-raleway md:text-5xl mt-32"
          subtitleSize="mt-3 max-w-md mx-auto text-2xl md:text-3xl md:max-w-3xl"
        />

        {bannerData.modalProps && bannerData.modalProps.isOpen && (
          <div className="mt-10 sm:flex justify-center">
            <div className="flex items-center justify-center border border-transparent text-base font-medium rounded-md text-white md:text-lg">
              <Button
                label="Get started"
                color={`w-[250px] flex items-center justify-center px-8 py-3 border border-transparent text-base font-medium rounded-md text-white ${theme.buttons.primary} md:py-4 md:text-lg md:px-10`}
                width="150"
                action={openModal}
              />
            </div>
            <div className="mt-3 sm:w-[250px] rounded-md flex justify-center content-center sm:mt-0 sm:ml-3">
              <Button
                label="Learn More"
                color={`w-[250px] flex items-center justify-center px-8 py-3 border border-transparent text-base font-medium rounded-md text-white ${theme.buttons.secondary} md:py-4 md:text-lg md:px-10`}
                width="150"

              />
            </div>

          </div>
        )}

        <Modal isOpen={isModalOpen} onClose={closeModal} title={bannerData.modalProps ? bannerData.modalProps.title : ""}>
          {bannerData.modalProps.formFields && bannerData.modalProps.formFields.length > 0 ? (
            <Form fields={bannerData.modalProps.formFields} onSubmit={(data: Record<string, any>) => {
              throw new Error("Function not implemented.");
            }} />
          ) : null}
        </Modal>
      </div>
    </section>
  );
}

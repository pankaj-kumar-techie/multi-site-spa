import React, { useContext, useEffect, useState } from "react";
import Button from "../../../components/common/button/Button";
import TitleCover from "../../../components/common/title-cover/TitleCover";
import ContactUs from "../ContactUs";
import { ThemeContext } from "../../../themes/ThemeProvider";
import SectionShimmer from "../../../components/common/shimmer/SectionShimmer";
import Form from "../../../components/Form";
import { useDynamicTextColor } from "../../../themes/DynamicTextColor"; // Import the hook

export default function SecondContactUs(props: { data: any }) {
    const { theme } = useContext(ThemeContext);
    const textColor = useDynamicTextColor(theme.colors.primary || ""); // Use the hook for text color
    const [contactUsData, setContactUsData] = useState<any>({
        title: "",
        description: "",
        contactUs: ContactUs,
    });

    useEffect(() => {
        setContactUsData(props.data);
    }, [props.data]);

    if (!contactUsData.title) {
        return <SectionShimmer title={"Contact Us"}></SectionShimmer>;
    }
    const handleFormSubmit = (formData: Record<string, any>) => {
        // Handle form submission logic here
        // You can replace setStatus('success') with actual submission code
    };

    return (
        <section className={`bg-${theme.colors.primary} "mb-32 text-gray-800`}>
            <div className="flex justify-center">
                <TitleCover title={contactUsData?.title} titleColor={`${textColor}`}></TitleCover> {/* Use dynamic text color */}
            </div>

            <div className="flex flex-wrap">
                <div className="grow-0 shrink-0 basis-auto mb-12 lg:mb-0 w-full lg:w-5/12 px-3 lg:px-6">
                    <Form fields={contactUsData.contactUs.formFields} theme={theme} onSubmit={handleFormSubmit}></Form>
                </div>
                <div className="grow-0 shrink-0 basis-auto w-full lg:w-7/12">
                    <div className="flex flex-wrap">
                        <div className="mb-12 grow-0 shrink-0 basis-auto w-full lg:w-6/12 px-3 lg:px-6">
                            <div className="flex items-start">
                                <div className="shrink-0">
                                    <div
                                        className={`p-4 bg-${theme.colors.primary} rounded-md shadow-md w-14 h-14 flex items-center justify-center`}>
                                        <svg aria-hidden="true" focusable="false" data-prefix="fas"
                                            data-icon="headset" className={`w-5 ${textColor}`} // Use dynamic text color
                                            role="img" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512">
                                            <path fill="currentColor"
                                                d="M192 208c0-17.67-14.33-32-32-32h-16c-35.35 0-64 28.65-64 64v48c0 35.35 28.65 64 64 64h16c17.67 0 32-14.33 32-32V208zm176 144c35.35 0 64-28.65 64-64v-48c0-35.35-28.65-64-64-64h-16c-17.67 0-32 14.33-32 32v112c0 17.67 14.33 32 32 32h16zM256 0C113.18 0 4.58 118.83 0 256v16c0 8.84 7.16 16 16 16h16c8.84 0 16-7.16 16-16v-16c0-114.69 93.31-208 208-208s208 93.31 208 208h-.12c.08 2.43.12 165.72.12 165.72 0 23.35-18.93 42.28-42.28 42.28H320c0-26.51-21.49-48-48-48h-32c-26.51 0-48 21.49-48 48s21.49 48 48 48h181.72c49.86 0 90.28-40.42 90.28-90.28V256C507.42 118.83 398.82 0 256 0z">
                                            </path>
                                        </svg>
                                    </div>
                                </div>
                                <div className="grow ml-6">
                                    <p className={`font-bold mb-1 ${textColor}`}>{contactUsData.contactUs.name?? "Sales Consultant"}</p> {/* Use dynamic text color */}
                                    <p className={`${textColor}`}>{contactUsData.contactUs.email ?? ""}</p> {/* Use dynamic text color */}
                                    <p className={`${textColor}`}>{contactUsData.contactUs.phone}</p> {/* Use dynamic text color */}
                                </div>
                            </div>
                        </div>
                        <div className="mb-12 grow-0 shrink-0 basis-auto w-full lg:w-6/12 px-3 lg:px-6">
                            <div className="flex items-start">
                                <div className="shrink-0">
                                <div
                                        className={`p-4 bg-${theme.colors.primary} rounded-md shadow-md w-14 h-14 flex items-center justify-center`}>
                                        <svg aria-hidden="true" focusable="false" data-prefix="fas"
                                            data-icon="headset" className={`w-5 ${textColor}`} // Use dynamic text color
                                            role="img" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512">
                                            <path fill="currentColor"
                                                d="M192 208c0-17.67-14.33-32-32-32h-16c-35.35 0-64 28.65-64 64v48c0 35.35 28.65 64 64 64h16c17.67 0 32-14.33 32-32V208zm176 144c35.35 0 64-28.65 64-64v-48c0-35.35-28.65-64-64-64h-16c-17.67 0-32 14.33-32 32v112c0 17.67 14.33 32 32 32h16zM256 0C113.18 0 4.58 118.83 0 256v16c0 8.84 7.16 16 16 16h16c8.84 0 16-7.16 16-16v-16c0-114.69 93.31-208 208-208s208 93.31 208 208h-.12c.08 2.43.12 165.72.12 165.72 0 23.35-18.93 42.28-42.28 42.28H320c0-26.51-21.49-48-48-48h-32c-26.51 0-48 21.49-48 48s21.49 48 48 48h181.72c49.86 0 90.28-40.42 90.28-90.28V256C507.42 118.83 398.82 0 256 0z">
                                            </path>
                                        </svg>
                                    </div>
                                </div>
                                <div className="grow ml-6">
                                <p className={`font-bold mb-1 ${textColor}`}>{contactUsData.contactUs.name2 ?? "Sales Consultant"}</p>
                                    <p className={`${textColor}`}>{contactUsData.contactUs.email2 ?? "info@loonds.com"}</p> {/* Use dynamic text color */}
                                    <p className={`${textColor}`}>{contactUsData.contactUs.phone2?? "+1 234-567-89"}</p> {/* Use dynamic text color */}
                                </div>
                            </div>
                        </div>
                        <div className="mb-12 grow-0 shrink-0 basis-auto w-full lg:w-6/12 px-3 lg:px-6">
                            <div className="flex align-end">
                                <div className="shrink-0">
                                <div
                                        className={`p-4 bg-${theme.colors.primary} rounded-md shadow-md w-14 h-14 flex items-center justify-center`}>
                                        <svg aria-hidden="true" focusable="false" data-prefix="fas"
                                            data-icon="headset" className={`w-5 ${textColor}`} // Use dynamic text color
                                            role="img" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512">
                                            <path fill="currentColor"
                                                d="M192 208c0-17.67-14.33-32-32-32h-16c-35.35 0-64 28.65-64 64v48c0 35.35 28.65 64 64 64h16c17.67 0 32-14.33 32-32V208zm176 144c35.35 0 64-28.65 64-64v-48c0-35.35-28.65-64-64-64h-16c-17.67 0-32 14.33-32 32v112c0 17.67 14.33 32 32 32h16zM256 0C113.18 0 4.58 118.83 0 256v16c0 8.84 7.16 16 16 16h16c8.84 0 16-7.16 16-16v-16c0-114.69 93.31-208 208-208s208 93.31 208 208h-.12c.08 2.43.12 165.72.12 165.72 0 23.35-18.93 42.28-42.28 42.28H320c0-26.51-21.49-48-48-48h-32c-26.51 0-48 21.49-48 48s21.49 48 48 48h181.72c49.86 0 90.28-40.42 90.28-90.28V256C507.42 118.83 398.82 0 256 0z">
                                            </path>
                                        </svg>
                                    </div>
                                </div>
                                <div className="grow ml-6">
                                <p className={`font-bold mb-1 ${textColor}`}>{contactUsData.contactUs.name3 ?? "Sales Consultant"}</p>
                                    <p className={`${textColor}`}>{contactUsData.contactUs.email3 ?? "info@loonds.com"}</p> {/* Use dynamic text color */}
                                    <p className={`${textColor}`}>{contactUsData.contactUs.phone3}</p> {/* Use dynamic text color */}
                                </div>
                            </div>
                        </div>
                        <div className="mb-12 grow-0 shrink-0 basis-auto w-full lg:w-6/12 px-3 lg:px-6">
                            <div className="flex align-start">
                                <div className="shrink-0">
                                <div
                                        className={`p-4 bg-${theme.colors.primary} rounded-md shadow-md w-14 h-14 flex items-center justify-center`}>
                                        <svg aria-hidden="true" focusable="false" data-prefix="fas"
                                            data-icon="headset" className={`w-5 ${textColor}`} // Use dynamic text color
                                            role="img" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512">
                                            <path fill="currentColor"
                                                d="M192 208c0-17.67-14.33-32-32-32h-16c-35.35 0-64 28.65-64 64v48c0 35.35 28.65 64 64 64h16c17.67 0 32-14.33 32-32V208zm176 144c35.35 0 64-28.65 64-64v-48c0-35.35-28.65-64-64-64h-16c-17.67 0-32 14.33-32 32v112c0 17.67 14.33 32 32 32h16zM256 0C113.18 0 4.58 118.83 0 256v16c0 8.84 7.16 16 16 16h16c8.84 0 16-7.16 16-16v-16c0-114.69 93.31-208 208-208s208 93.31 208 208h-.12c.08 2.43.12 165.72.12 165.72 0 23.35-18.93 42.28-42.28 42.28H320c0-26.51-21.49-48-48-48h-32c-26.51 0-48 21.49-48 48s21.49 48 48 48h181.72c49.86 0 90.28-40.42 90.28-90.28V256C507.42 118.83 398.82 0 256 0z">
                                            </path>
                                        </svg>
                                    </div>
                                </div>
                                <div className="grow ml-6">
                                <p className={`font-bold mb-1 ${textColor}`}>{contactUsData.contactUs.name4 ?? "Sales Consultant"}</p>
                                    <p className={`${textColor}`}>{contactUsData.contactUs.email4}</p> {/* Use dynamic text color */}
                                    <p className={`${textColor}`}>{contactUsData.contactUs.phon4}</p> {/* Use dynamic text color */}
                                </div>
                            </div>
                        </div>
                        <div className="mb-12 grow-0 shrink-0 basis-auto w-full lg:w-6/12 px-3 lg:px-6">
                            <div className="flex items-start">
                                <div className="shrink-0">
                                <div
                                        className={`p-4 bg-${theme.colors.primary} rounded-md shadow-md w-14 h-14 flex items-center justify-center`}>
                                        <svg aria-hidden="true" focusable="false" data-prefix="fas"
                                            data-icon="headset" className={`w-5 ${textColor}`} // Use dynamic text color
                                            role="img" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512">
                                            <path fill="currentColor"
                                                d="M192 208c0-17.67-14.33-32-32-32h-16c-35.35 0-64 28.65-64 64v48c0 35.35 28.65 64 64 64h16c17.67 0 32-14.33 32-32V208zm176 144c35.35 0 64-28.65 64-64v-48c0-35.35-28.65-64-64-64h-16c-17.67 0-32 14.33-32 32v112c0 17.67 14.33 32 32 32h16zM256 0C113.18 0 4.58 118.83 0 256v16c0 8.84 7.16 16 16 16h16c8.84 0 16-7.16 16-16v-16c0-114.69 93.31-208 208-208s208 93.31 208 208h-.12c.08 2.43.12 165.72.12 165.72 0 23.35-18.93 42.28-42.28 42.28H320c0-26.51-21.49-48-48-48h-32c-26.51 0-48 21.49-48 48s21.49 48 48 48h181.72c49.86 0 90.28-40.42 90.28-90.28V256C507.42 118.83 398.82 0 256 0z">
                                            </path>
                                        </svg>
                                    </div>
                                </div>
                                <div className="grow ml-6">
                                <p className={`font-bold mb-1 ${textColor}`}>{contactUsData.contactUs.name5 ?? "Sales Consultant"}</p>
                                    <p className={`${textColor}`}>{contactUsData.contactUs.email5 ?? ""}</p> {/* Use dynamic text color */}
                                    <p className={`${textColor}`}>{contactUsData.contactUs.phone5}</p> {/* Use dynamic text color */}
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
}

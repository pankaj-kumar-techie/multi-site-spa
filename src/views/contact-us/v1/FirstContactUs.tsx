import React, { useContext, useEffect, useState } from 'react';
import { FaMobile } from 'react-icons/fa';
import { GrLocation, GrMail } from 'react-icons/gr';
import Form from '../../../components/common/dynamic-form/DynamicForm';
import SectionShimmer from '../../../components/common/shimmer/SectionShimmer';
import TitleCover from "../../../components/common/title-cover/TitleCover";
import { ThemeContext } from "../../../themes/ThemeProvider";
import ContactUs from '../ContactUs';
import { useDynamicTextColor } from "../../../themes/DynamicTextColor"; // Import the hook

function FirstContactUs(props: { data: any }) {
    const { theme } = useContext(ThemeContext);
    const textColor = useDynamicTextColor(theme.colors.primary || ""); // Use the hook for text color
    const [status, setStatus] = useState('');
    const [contactUsData, setContactUsData] = useState<any>({
        title: "",
        description: "",
        contactUs: ContactUs,
    });
    
    useEffect(() => {
        setContactUsData(props.data);
    }, [props.data]);

    if (!contactUsData.title) {
        return <SectionShimmer title={"Get In Touch"}></SectionShimmer>;
    }

    const handleSubmit = async (formData: Record<string, any>): Promise<void> => {
        // Your Google Apps Script API endpoint
        const apiEndpoint = 'https://script.google.com/macros/s/AKfycbxet4_DbNUoWfaiVO7LVk0Ru7f1EnavvFxgOFghxba_tpqHzepIhc9zZbD6he4YsClM/exec';

        try {
            const response = await fetch(apiEndpoint, {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json',
                },
                body: JSON.stringify(formData),
                mode: 'cors',
            });

            if (response.ok) {
                console.log('Data successfully sent to the API');
                // Optionally, reset the form after successful submission
                // setFormData({
                //     name: '',
                //     // email: '',
                //     // checkInDate: '',
                //     // checkOutDate: '',
                // });
            } else {
                console.error('Failed to send data to the API');
            }
        } catch (error) {
            console.error('Error sending data to the API:', error);
        }
    };


    return (
        <section className={`bg-${theme.colors.primary} md:py-16 py-8`}>
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                    <div className="space-y-4">
                        <TitleCover title={contactUsData.title} textAlign={"left"} titleColor={`${textColor}`} // Use dynamic text color
                            subtitle={contactUsData.subTitle} subtitleColor={`${textColor}`} paragraphColor={`${textColor}`} fontFamily={theme.typography.fontFamily}></TitleCover>
                        <div className="flex items-center space-x-2">
                            <GrLocation></GrLocation>
                            <p className={`${textColor}`}>{contactUsData.contactUs.address}</p> {/* Use dynamic text color */}
                        </div>
                        <div className="flex items-center space-x-2">
                            <GrMail></GrMail>
                            <p className={`${textColor}`}>{contactUsData.contactUs.email}</p> {/* Use dynamic text color */}
                        </div>
                        <div className="flex items-center space-x-2">
                            <FaMobile></FaMobile>
                            <p className={`${textColor}`}>{contactUsData.contactUs.phone}</p> {/* Use dynamic text color */}
                        </div>
                        <div className="aspect-w-10  aspect-h-9">
                        </div>
                    </div>
                    {status === 'success' ? (
                        <p className={`text-green-500 font-bold text-center`}>
                            Thank you for contacting us!
                        </p>
                    ) : (
                        <Form fields={contactUsData.contactUs.formFields} onSubmit={handleSubmit}></Form>
                    )}
                </div>
            </div>
        </section>
    );
}

export default FirstContactUs;

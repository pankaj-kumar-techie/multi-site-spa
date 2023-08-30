import { useContext, useEffect, useState } from 'react';
import { FaMobile } from 'react-icons/fa';
import { GrLocation, GrMail } from 'react-icons/gr';
import Form from '../../../components/Form';
import SectionShimmer from '../../../components/common/shimmer/SectionShimmer';
import TitleCover from "../../../components/common/title-cover/TitleCover";
import { ThemeContext } from "../../../themes/ThemeProvider";
import ContactUs from '../ContactUs';

function FirstContactUs(props: { data: any }) {
    const { theme } = useContext(ThemeContext);
    const [status, setStatus] = useState('');
    const [contactUsData, setContactUsData] = useState<any>({
        title: "",
        description: "",
        contactUs: ContactUs,
    })
    useEffect(() => {
        setContactUsData(props.data);
    }, [props.data])
    if (!contactUsData.title) {
        return <SectionShimmer title={"Get In Touch"}></SectionShimmer>;
    }

    const handleFormSubmit = (formData: Record<string, any>) => {
        // Handle form submission logic here
        // You can replace setStatus('success') with actual submission code
        setStatus('success');
    };

    return (
        <section className={`${theme.background.backgroundColorSecondary} md:py-16 py-8`}>
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                    <div className="space-y-4">
                        <TitleCover title={contactUsData.title} textAlign={"left"} titleColor={`${theme.typography.firstFontColor}`}
                            subtitle={contactUsData.subTitle} subtitleColor={theme.typography.firstFontColor} paragraphColor={theme.typography.firstFontColor} fontFamily={theme.typography.fontFamily}></TitleCover>
                        <div className="flex items-center space-x-2">
                            <GrLocation></GrLocation>
                            <p className={theme.typography.firstFontColor}>{contactUsData.contactUs.address}</p>
                        </div>
                        <div className="flex items-center space-x-2">
                            <GrMail></GrMail>
                            <p className={theme.typography.firstFontColor}>{contactUsData.contactUs.email}</p>
                        </div>
                        <div className="flex items-center space-x-2">
                            <FaMobile></FaMobile>
                            <p className={theme.typography.firstFontColor}>{contactUsData.contactUs.phone}</p>
                        </div>
                        <div className="aspect-w-10  aspect-h-9">
                        </div>
                    </div>
                    {status === 'success' ? (
                        <p className="text-green-500 font-bold text-center">
                            Thank you for contacting us!
                        </p>
                    ) : (
                        <Form fields={contactUsData.contactUs.formFields} theme={theme} onSubmit={handleFormSubmit}></Form>
                    )}
                </div>
            </div>
        </section>
    );
}

export default FirstContactUs;

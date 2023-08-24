import { useContext, useEffect, useState } from 'react';
import TitleCover from "../../../components/common/title-cover/TitleCover";
import { ThemeContext } from "../../../themes/ThemeProvider";
import SectionShimmer from '../../../components/common/shimmer/SectionShimmer';
import FloatingButton from '../../../components/common/button/FloatingButton';

function ContactUs(props: { data: any }) {
    const { theme } = useContext(ThemeContext);
    const [name, setName] = useState('');
    const [mobile, setMobile] = useState('');
    const [selectedService, setSelectedService] = useState('');
    const [selectedArea, setSelectedArea] = useState('');
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
    function handleSubmit(event: { preventDefault: () => void; }) {
        event.preventDefault();
        // replace this with your own code to submit the form
        // and handle the response
        setStatus('success');
    }
    return (
        <section className={`${theme.background.backgroundColorSecondary} md:py-16 py-8`}>
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                    <div className="space-y-4">
                        <TitleCover title={contactUsData.title} textAlign={"left"} titleColor={`${theme.typography.firstFontColor}`}
                            subtitle={contactUsData.subTitle} subtitleColor={theme.typography.firstFontColor} paragraphColor={theme.typography.firstFontColor} fontFamily={theme.typography.fontFamily}></TitleCover>
                        <div className="flex items-center space-x-2">
                            <div className="w-6 h-6 bg-custom-brown rounded-full"></div>
                            <p className={theme.typography.firstFontColor}>{contactUsData.contactUs.address}</p>
                        </div>
                        <div className="flex items-center space-x-2">
                            <div className="w-6 h-6 bg-custom-brown rounded-full"></div>
                            <p className={theme.typography.firstFontColor}>{contactUsData.contactUs.email}</p>
                        </div>
                        <div className="flex items-center space-x-2">
                            <div className="w-6 h-6 bg-custom-brown rounded-full"></div>
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
                        <form onSubmit={handleSubmit} className="grid grid-cols-1 gap-6">
                            <label className="block text-sm">
                                <span className={`${theme.typography.firstFontColor} font-bold`}>Name</span>
                                <input
                                    type="text"
                                    name="name"
                                    id="name"
                                    className="mt-1 block w-full rounded-md border-none bg-gray-100 h-12 px-3 shadow-sm focus:ring focus:ring-indigo-500 focus:ring-opacity-50"
                                    required
                                    value={name}
                                    onChange={(event) => setName(event.target.value)}
                                />
                            </label>
                            <label className="block text-sm">
                                <span className={`${theme.typography.firstFontColor} font-bold`}>Mobile</span>
                                <input
                                    type="tel"
                                    name="mobile"
                                    id="mobile"
                                    className="mt-1 block w-full rounded-md border-none bg-gray-100 h-12 px-3 shadow-sm focus:ring focus:ring-indigo-500 focus:ring-opacity-50"
                                    required
                                    value={mobile}
                                    onChange={(event) => setMobile(event.target.value)}
                                />
                            </label>
                            <label className="block text-sm">
                                <span className={`${theme.typography.firstFontColor} font-bold`}>Services</span>
                                <select
                                    value={selectedService}
                                    onChange={(event) => setSelectedService(event.target.value)}
                                    className="mt-1 block w-full rounded-md border-none bg-gray-100 h-12 px-3 shadow-sm focus:ring focus:ring-indigo-500 focus:ring-opacity-50"
                                    required
                                >
                                    <option value="">Select a service</option>
                                    <option value="acp_installation">ACP & HPL Installation</option>
                                    <option value="wooden_flooring">Wooden Flooring</option>
                                    <option value="ceiling_design">Ceiling Design</option>
                                    <option value="ceiling_design">Glass Solutions</option>
                                    <option value="roof_solution">Roof Solutions</option>
                                    <option value="other">Other</option>
                                    {/* Add more service options as needed */}
                                </select>
                            </label>
                            <label className="block text-sm">
                                <span className={`${theme.typography.firstFontColor} font-bold`}>Area</span>
                                <select
                                    value={selectedArea}
                                    onChange={(event) => setSelectedArea(event.target.value)}
                                    className="mt-1 block w-full rounded-md border-none bg-gray-100 h-12 px-3 shadow-sm focus:ring focus:ring-indigo-500 focus:ring-opacity-50"
                                    required
                                >
                                    <option value="">Select an area in sqf</option>
                                    <option value="500">0 to 500 sqf</option>
                                    <option value="1000">500 to 1000 sqf</option>
                                    <option value="3000">1000 to 3000 sqf</option>
                                    <option value="5000">3000+ sqf</option>
                                    {/* Add more service options as needed */}
                                </select>
                            </label>
                            <button
                                type="submit"
                                className={`mt-4 w-full inline-flex items-center justify-center px-6 py-3 border border-transparent rounded-md shadow-sm text-base font-medium ${theme.typography.secondFontColor} ${theme.colors.primary} hover:${theme.colors.secondary} focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500`}
                            >
                                Call me Back
                            </button>
                        </form>
                    )}
                </div>
            </div>
            <FloatingButton phoneNumber={contactUsData.contactUs.phone}></FloatingButton>
        </section>
    );
}

export default ContactUs;

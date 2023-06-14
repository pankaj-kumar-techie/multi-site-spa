import {useEffect, useState} from 'react';

function ContactUs(props: { data: any }) {
    const [name, setName] = useState('');
    const [email, setEmail] = useState('');
    const [message, setMessage] = useState('');
    const [status, setStatus] = useState('');


    const styles1 = {
        section: "bg-purssian-blue py-16",
        backgroundColor: "",
        title: " text-2xl text-white font-bold text-gray-800",
        subTitle: "text-white",
        imageWrapper: "hidden",
        bodyWrapper: "sm:w-1/2 sm:pl-16",
    };
    const styles2 = {
        section: "bg-white py-16",
        backgroundColor: "bg-orange-200",
        title: "text-3xl font-extrabold text-white sm:text-4xl mb-6",
        subTitle: "text-gray-600 text-lg mb-6",
        imageWrapper: "hidden",
        bodyWrapper: "sm:w-1/2 sm:pl-16",
        aboutImage: "https://stackoverflow.co/img/product/teams/teams-integrations-spot.svg",
        aboutImageWrapper: "w-80 h-80  object-cover",
    };
    const [contactUsTheme, setContactUsTheme] = useState<string>("")
    const [contactUsData, setContactUsData] = useState<any>([])


    const styles = {
        CLASSIC: styles1,
        MODERN: styles2,
    }[contactUsTheme] || styles1;

    useEffect(() => {
        setContactUsData(props.data);
        setContactUsTheme(props.data.theme || "CLASSIC")
    }, [props.data])


    function handleSubmit(event: { preventDefault: () => void; }) {
        event.preventDefault();
        // replace this with your own code to submit the form
        // and handle the response
        setStatus('success');
    }

    return (
        <section className={styles.section}>
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                    <div className="space-y-4">
                        <h2 className={styles.title}>{contactUsData.title}</h2>
                        <p className={styles.subTitle}>
                            {contactUsData.subTitle}
                        </p>
                        <div className="flex items-center space-x-2">
                            <div className="w-6 h-6 bg-custom-brown rounded-full"></div>
                            <p className="text-white">123 Main Street, Anytown, USA</p>
                        </div>
                        <div className="flex items-center space-x-2">
                            <div className="w-6 h-6 bg-custom-brown rounded-full"></div>
                            <p className="text-white">+1 (123) 456-7890</p>
                        </div>

                        <div className="aspect-w-10  aspect-h-9">
                            <iframe
                                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3423.559228068603!2d76.97553947481546!3d30.898989177580027!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x390f8960d33fe8a3%3A0xdd505cd5ef7d9c!2sGayatri%20Lodge%20Hotel%20in%20Kasauli!5e0!3m2!1sen!2sin!4v1686425200960!5m2!1sen!2sin"
                                className='w-full mt-10 rounded-md h-full'></iframe>
                        </div>

                    </div>
                    {status === 'success' ? (
                        <p className="text-green-500 font-bold text-center">
                            Thank you for contacting us!
                        </p>
                    ) : (
                        <form onSubmit={handleSubmit} className="grid grid-cols-1 gap-6">
                            <label className="block text-sm">
                                <span className="text-white font-bold">Name</span>
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
                                <span className="text-white font-bold">Email</span>
                                <input
                                    type="email"
                                    name="email"
                                    id="email"
                                    className="mt-1 block w-full rounded-md border-none bg-gray-100 h-12 px-3 shadow-sm focus:ring focus:ring-indigo-500 focus:ring-opacity-50"
                                    required
                                    value={email}
                                    onChange={(event) => setEmail(event.target.value)}
                                />
                            </label>
                            <label className="block text-sm">
                                <span className="text-white font-bold">Message</span>
                                <textarea
                                    name="message"
                                    id="message"
                                    className="mt-1 block w-full rounded-md border-none bg-gray-100 h-40 px-3 py-2 shadow-sm focus:ring focus:ring-indigo-500 focus:ring-opacity-50"
                                    required
                                    value={message}
                                    onChange={(event) => setMessage(event.target.value)}
                                ></textarea>
                            </label>
                            <button
                                type="submit"
                                className="mt-4 w-full inline-flex items-center justify-center px-6 py-3 border border-transparent rounded-md shadow-sm text-base font-medium text-white bg-custom-blue hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500"
                            >
                                Send Message
                            </button>
                        </form>

                    )}
                </div>
            </div>
        </section>

    );
}

export default ContactUs;

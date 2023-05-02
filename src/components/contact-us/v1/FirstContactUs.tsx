import { useState } from 'react';

function ContactUs(props:{data:any}) {
    const [name, setName] = useState('');
    const [email, setEmail] = useState('');
    const [message, setMessage] = useState('');
    const [status, setStatus] = useState('');

    function handleSubmit(event: { preventDefault: () => void; }) {
        event.preventDefault();
        // replace this with your own code to submit the form
        // and handle the response
        setStatus('success');
    }

    return (
        <section className="bg-white py-16">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                    <div className="space-y-4">
                        <h2 className="text-2xl font-bold text-gray-800">Contact Us</h2>
                        <p className="text-gray-600">
                            Have a question or need help planning your trip? Contact us using the information below or
                            fill out the form and we'll get back to you as soon as possible.
                        </p>
                        <div className="flex items-center space-x-2">
                            <div className="w-6 h-6 bg-gray-600 rounded-full"></div>
                            <p className="text-gray-600">123 Main Street, Anytown, USA</p>
                        </div>
                        <div className="flex items-center space-x-2">
                            <div className="w-6 h-6 bg-gray-600 rounded-full"></div>
                            <p className="text-gray-600">+1 (123) 456-7890</p>
                        </div>
                    </div>
                    {status === 'success' ? (
                        <p className="text-green-500 font-bold text-center">
                            Thank you for contacting us!
                        </p>
                    ) : (
                        <form onSubmit={handleSubmit} className="grid grid-cols-1 gap-6">
                            <label className="block text-sm">
                                <span className="text-gray-700 font-bold">Name</span>
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
                                <span className="text-gray-700 font-bold">Email</span>
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
                                <span className="text-gray-700 font-bold">Message</span>
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
                                className="mt-4 w-full inline-flex items-center justify-center px-6 py-3 border border-transparent rounded-md shadow-sm text-base font-medium text-white bg-indigo-600 hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500"
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

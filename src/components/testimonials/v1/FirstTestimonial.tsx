import React, {useEffect, useState} from "react";

export default function FirstTestimonial(props: { data: any }) {
    const [serviceData, setServiceData] = useState<any>([])

    useEffect(() => {
        setServiceData(props.data);
    }, [props.data])
    const testimonials = [
        {
            id: 1,
            name: "John Doe",
            testimonial:
                "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed ac magna sit amet risus tristique interdum, at vel velit in hac habitasse platea dictumst.",
        },
        {
            id: 2,
            name: "Jane Smith",
            testimonial:
                "Praesent placerat enim ut ex tincidunt vehicula. Fusce sit amet dui tellus. Morbi sagittis, quam nec venenatis lobortis, mi risus tempus nulla, sed porttitor est nibh at nulla.",
        },
        {
            id: 3,
            name: "Bob Johnson",
            testimonial:
                "Ut posuere, ex a fringilla hendrerit, nulla metus gravida mi, in hendrerit quam odio sed est. Vestibulum nec finibus nisi. Aliquam et ipsum nulla.",
        },
    ];

    return (
        <>
        <section className="bg-gray-200 py-20">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                <div className="text-center">
                    <h2 className="text-3xl font-bold text-gray-800">Testimonials</h2>
                    <p className="mt-2 text-xl text-gray-600">
                        See what our customers are saying about us {serviceData.title}
                    </p>
                </div>
                <div className="mt-20">
                    <div className="max-w-md mx-auto grid gap-5 lg:grid-cols-3 lg:max-w-none">
                        {testimonials.map((testimonial) => (
                            <div key={testimonial.id} className="rounded-lg shadow-lg overflow-hidden">
                                <div className="px-6 py-8 bg-white sm:p-10 sm:pb-6">
                                    <div className="flex items-center mb-4">
                                        {/*<FaQuoteLeft className="text-3xl text-gray-800 mr-4" />*/}
                                        <h3 className="text-lg font-bold text-gray-800">{testimonial.name}</h3>
                                    </div>
                                    <p className="text-gray-700 text-base">{testimonial.testimonial}</p>
                                </div>
                            </div>
                        ))}
                    </div>
                </div>
            </div>
        </section>
        </>

    );
};

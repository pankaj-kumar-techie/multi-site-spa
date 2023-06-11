import React, {useEffect, useState} from "react";
import TestimonialCard from "../../../components/cards/TestimonialCard";

export default function FirstTestimonial(props: { data: any }) {
    const [serviceData, setServiceData] = useState<any>([])

    useEffect(() => {
        setServiceData(props.data);
    }, [props.data])
    const testimonials = [
        {
            id: 1,
            name: "John Doe",
            designation: "Graphic Designer",
            imageSrc: "https://mdbcdn.b-cdn.net/img/Photos/Avatars/img%20(2).jpg",
            imageAlt: "Graphic Designer",
            testimonial:
                "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed ac magna sit amet risus tristique interdum, at vel velit in hac habitasse platea dictumst.",
        },
        {
            id: 2,
            name: "John Doe",
            designation: "John Doe",
            imageSrc: "https://mdbcdn.b-cdn.net/img/Photos/Avatars/img%20(1).jpg",
            imageAlt: "John Doe",
            testimonial:
                "Praesent placerat enim ut ex tincidunt vehicula. Fusce sit amet dui tellus. Morbi sagittis, quam nec venenatis lobortis, mi risus tempus nulla, sed porttitor est nibh at nulla.",
        },
        {
            id: 3,
            name: "John Doe",
            designation: "John Doe",
            imageSrc: "https://mdbcdn.b-cdn.net/img/Photos/Avatars/img%20(9).jpg",
            imageAlt: "John Doe",
            testimonial:
                "Ut posuere, ex a fringilla hendrerit, nulla metus gravida mi, in hendrerit quam odio sed est. Vestibulum nec finibus nisi. Aliquam et ipsum nulla.",
        },
    ];

    return (
        <>
            <section className="mb-32 text-center bg-custom-brown">
                <div className="container  pb-12 pt-20  my-24 mx-auto md:px-6">
                    <h2 className="mb-12 text-3xl font-bold">Testimonials</h2>

                    <div className="grid gap-x-6 md:grid-cols-3 lg:gap-x-12">
                        {testimonials.map((testimonial) => (
                            <TestimonialCard id={testimonial.id} name={testimonial.name}
                                             designation={testimonial.designation} testimonial={testimonial.testimonial}
                                             imageSrc={testimonial.imageSrc}
                                             imageAlt={testimonial.imageAlt}></TestimonialCard>
                        ))}
                        {/*<div className="mb-0 lg:px-2 md:px-0 px-12">*/}
                        {/*  <div className="mb-6 flex justify-center">*/}
                        {/*    <img src="https://mdbcdn.b-cdn.net/img/Photos/Avatars/img%20(9).jpg"*/}
                        {/*      className="w-32 rounded-full shadow-lg dark:shadow-black/20  transform*/}
                        {/*                                  transition duration-1000 hover:scale-125" />*/}
                        {/*  </div>*/}
                        {/*  <h5 className="mb-2 text-lg font-bold">John Smith</h5>*/}
                        {/*  <h6 className="mb-4 font-medium text-primary dark:text-primary-400">*/}
                        {/*    Marketing Specialist*/}
                        {/*  </h6>*/}
                        {/*  <p className="mb-4">*/}
                        {/*    At vero eos et accusamus et iusto odio dignissimos ducimus qui*/}
                        {/*    blanditiis praesentium voluptatum deleniti atque corrupti.*/}
                        {/*   */}
                        {/*  </p>*/}
                        {/*  */}
                        {/*</div>*/}
                    </div>
                </div>
            </section>
        </>

    );
};

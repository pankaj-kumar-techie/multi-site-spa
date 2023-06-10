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
        <section className="bg-gray-200 hidden py-20">
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
  <section className="mb-32 text-center bg-custom-brown">
        <div className="container  pb-12 pt-20  my-24 mx-auto md:px-6">
    <h2 className="mb-12 text-3xl font-bold">Testimonials</h2>

    <div className="grid gap-x-6 md:grid-cols-3 lg:gap-x-12">
      <div className="mb-12 px-12 lg:px-2 md:px-0 md:mb-0">
        <div className="mb-6 flex justify-center">
          <img src="https://mdbcdn.b-cdn.net/img/Photos/Avatars/img%20(1).jpg"
            className="w-32 rounded-full shadow-lg dark:shadow-black/20  transform
            transition duration-1000 hover:scale-125" />
        </div>
        <h5 className="mb-2 text-lg font-bold">Maria Smantha</h5>
        <h6 className="mb-4 font-medium text-primary dark:text-primary-400">
          Web Developer
        </h6>
        <p className="mb-4">
          Lorem ipsum dolor sit amet, consectetur adipisicing elit. Quod eos
          id officiis hic tenetur quae quaerat ad velit ab hic.
         
        </p>
        
      </div>
      <div className="mb-12 px-12 lg:px-2 md:px-0 md:mb-0">
        <div className="mb-6 flex justify-center">
          <img src="https://mdbcdn.b-cdn.net/img/Photos/Avatars/img%20(2).jpg"
            className="w-32 rounded-full shadow-lg dark:shadow-black/20  transform
            transition duration-1000 hover:scale-125" />
        </div>
        <h5 className="mb-2 text-lg font-bold">Lisa Cudrow</h5>
        <h6 className="mb-4 font-medium text-primary dark:text-primary-400">
          Graphic Designer
        </h6>
        <p className="mb-4">
          Ut enim ad minima veniam, quis nostrum exercitationem ullam
          corporis suscipit laboriosam, nisi ut aliquid commodi.
          
        </p>
       
      </div>
      <div className="mb-0 lg:px-2 md:px-0 px-12">
        <div className="mb-6 flex justify-center">
          <img src="https://mdbcdn.b-cdn.net/img/Photos/Avatars/img%20(9).jpg"
            className="w-32 rounded-full shadow-lg dark:shadow-black/20  transform
                                        transition duration-1000 hover:scale-125" />
        </div>
        <h5 className="mb-2 text-lg font-bold">John Smith</h5>
        <h6 className="mb-4 font-medium text-primary dark:text-primary-400">
          Marketing Specialist
        </h6>
        <p className="mb-4">
          At vero eos et accusamus et iusto odio dignissimos ducimus qui
          blanditiis praesentium voluptatum deleniti atque corrupti.
         
        </p>
        
      </div>
    </div>
</div>
  </section>
        </>

    );
};

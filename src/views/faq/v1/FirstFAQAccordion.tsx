import React, { useState } from 'react';

const FirstFAQAccordion = (props: { data: any }) => {
    const [activeIndex, setActiveIndex] = useState<number | null>(null);

    const faqs = [
        {
            question: 'Q.What are the check-in and check-out timings at Gayatri Lodge?',
            answer: 'Ans:The standard check-in time at Gayatri Lodge is 2:00 PM, and the check-out time is 12:00 PM (noon). However, early check-in or late check-out requests can be accommodated based on availability and may be subject to additional charges.',
        },
        {
            question: 'Q.What amenities are provided at Gayatri Lodge?',
            answer: 'Ans:Gayatri Lodge offers a range of amenities to make your stay comfortable. Some of the amenities include clean and well-furnished rooms, air conditioning, television, attached bathroom with hot water facility, room service, Wi-Fi access, and complimentary toiletries.',
        },
        {
            question: 'Q.Is there parking available at Gayatri Lodge?',
            answer: 'Ans:Yes, Gayatri Lodge provides parking facilities for guests. You can safely park your vehicle during your stay at the lodge. However, parking availability may be limited, so its advisable to inform the lodge in advance if you require parking.',
        },
        {
            question: 'Q.Are meals included in the room rates at Gayatri Lodge?',
            answer: 'Ans:"Yes, Gayatri Lodge provides meals as part of the room rates. Guests can enjoy delicious meals at the in-house restaurant or avail themselves of the dining options available in close proximity to the lodge. The meals offered cater to various preferences and cuisines, ensuring a satisfying dining experience for guests."',
        },
        {
            question: 'Q.Does Gayatri Lodge have a cancellation policy?',
            answer: 'Ans:Yes, Gayatri Lodge has a cancellation policy in place. The specific details may vary depending on the booking channel and the type of reservation made. Its advisable to review the cancellation policy at the time of booking or contact the lodge directly for more information.',
        },
        // Add more FAQs as needed
    ];

    const toggleAccordion = (index: number) => {
        if (activeIndex === index) {
            setActiveIndex(null);
        } else {
            setActiveIndex(index);
        }
    };

    return (
        <section className=' pt-10 pb-10 bg-faq-img  '>
            <div className='container mx-auto px-4'>

            <div>
                <h2 className="text-2xl text-white text-center text-[3rem]  font-bold mb-12">Frequently Asked Questions</h2>
            </div>
            <div className="w-full  ">
                {faqs.map((faq, index) => (
                    <div
                        key={index}
                        className="border rounded bg-white shadow mb-4"
                    >
                        <button
                            className="w-full flex items-center justify-between px-4 py-3 focus:outline-none"
                            onClick={() => toggleAccordion(index)}
                        >
                            <h3 className="text-lg font-medium">{faq.question}</h3>
                            <svg
                                className={`w-5 h-5 transition-transform ${
                                    activeIndex === index ? 'transform rotate-180' : ''
                                }`}
                                viewBox="0 0 24 24"
                            >
                                <path
                                    fill="currentColor"
                                    d="M7 10l5 5 5-5z"
                                />
                            </svg>
                        </button>
                        {activeIndex === index && (
                            <div className="px-4 py-3">
                                <p>{faq.answer}</p>
                            </div>
                        )}
                    </div>
                ))}
            </div>
            </div>
        </section>
    );
};

export default FirstFAQAccordion;

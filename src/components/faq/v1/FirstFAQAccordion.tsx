import React, { useState } from 'react';

const FirstFAQAccordion = (props: { data: any }) => {
    const [activeIndex, setActiveIndex] = useState<number | null>(null);

    const faqs = [
        {
            question: 'Question 1',
            answer: 'Answer 1',
        },
        {
            question: 'Question 2',
            answer: 'Answer 2',
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
        <section>
            <div>
                <h2 className="text-2xl font-bold mb-4">Frequently Asked Questions</h2>
            </div>
            <div className="w-full">
                {faqs.map((faq, index) => (
                    <div
                        key={index}
                        className="border rounded shadow mb-4"
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
        </section>
    );
};

export default FirstFAQAccordion;

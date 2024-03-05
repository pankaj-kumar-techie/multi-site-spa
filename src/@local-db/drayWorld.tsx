import React from "react";
import { PluginConfig } from "../modal/PluginConfig";
import { Section } from "../modal/Section";

export const drayWorldLogisticTheme: any = {
    name: "default"
}

export const drayWorldLogistic: Section[] = [
    {
        id: "69e7ed7e-889d-41c0-a1d9-62bd150401e2",
        name: "Header",
        version: "v2",
        style: "MODERN",
        path: "index",
        data: {
            type: "Header",
            id: "001",
            title: "Dray World Logistics",
            subTitle: "Your Reliable Logistics Partner",
            description: "We Deliver Excellence",
            version: "v2",
            style: "MODERN",
            logo:
            {
                id: '1',
                imageSrc: 'https://i.pinimg.com/736x/2f/f4/ef/2ff4efe94f4689f517db0de91eb03d5a.jpg',
                imageAlt: 'Desk with leather desk pad, walnut desk organizer, wireless keyboard and mouse, and porcelain mug.',
            },
            menu: [
                {
                    id: "string",
                    label: "Home",
                    url: 'hero',
                },
                {
                    id: "2",
                    label: "About Us",
                    url: 'about-us',
                },
                {
                    id: "3",
                    label: "Service",
                    url: 'service',
                },
                {
                    id: "4",
                    label: "Contact Us",
                    url: 'contact-us',
                }
            ],

            contactUs: {
                address: "",
                email: "info@drayworldlogistics.com",
                phone: "123-456-7890",
            },
        },
    },
    {
        id: "69e7ed7e-889d-41c0-a1d9-62bd150401e2",
        name: "Hero Banner",
        version: "v1",
        style: "CLASSIC",
        path: "index",
        data: {
            type: "HeroBanner",
            id: "002",
            title: "Logistics Solutions",
            subTitle: "Your Cargo, Our Priority",
            description: "Efficient, Secure, and Reliable",
            version: "v2",
            style: "CLASSIC",
            bannerData: [
                {
                    title: "Logistics Solutions",
                    subTitle: "Your Cargo, Our Priority",
                    description: "Efficient, Secure, and Reliable",
                    image:
                    {
                        id: '1',
                        imageSrc: 'https://images.unsplash.com/photo-1473445730015-841f29a9490b?auto=format&fit=crop&q=80&w=2070&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
                        imageAlt: 'Desk with leather desk pad, walnut desk organizer, wireless keyboard and mouse, and porcelain mug.',
                    },
                    modalProps: {
                        isOpen: false,
                        // onClose: () => void,
                        title: 'string',
                    }
                }
            ],
        },
    },
    {
        id: "143d8df3-49c7-4370-9e0e-0c5ef7a46f6b",
        name: "About Us",
        version: "v1",
        style: "CLASSIC",
        path: "index",
        data: {
            type: "AboutUs",
            id: "003",
            title: "About Dray World Logistics",
            subTitle: "Your Trusted Logistics Partner",
            description: "At Dray World Logistics, we are dedicated to providing specialized logistics services that ensure the secure and efficient transportation of your cargo. With years of experience and a commitment to excellence, we are your reliable logistics partner.",
            version: "v1",
            style: "CLASSIC",
            images: [
                {
                    id: '1',
                    imageSrc: 'https://images.unsplash.com/photo-1521737604893-d14cc237f11d?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1784&q=80',
                    imageAlt: 'Desk with leather desk pad, walnut desk organizer, wireless keyboard and mouse, and porcelain mug.',
                },
            ],
        },
    },
    {
        id: "Service",
        name: "Service",
        version: "v1",
        style: "CLASSIC",
        path: "index",
        data: {
            type: "Service",
            id: "k",
            title: "Our Logistics Services",
            subTitle: "Efficient Cargo Transportation",
            description: "Explore our comprehensive logistics services that ensure the secure and timely transportation of your cargo. Your logistics needs, our expertise.",
            version: "v2",
            style: "CLASSIC",
            services: [
                {
                    id: 1,
                    title: 'Freight Forwarding',
                    body: 'Efficient cargo forwarding services tailored to your specific needs.',
                    imageSrc: '',
                    imageAlt: 'Freight Forwarding Icon',
                },
                {
                    id: 2,
                    title: 'Warehousing',
                    body: 'Safe and secure warehousing solutions for your goods.',
                    imageSrc: '',
                    imageAlt: 'Warehousing Icon',
                },
                {
                    id: 3,
                    title: 'Customs Clearance',
                    body: 'Expert customs clearance services to streamline international shipments.',
                    imageSrc: '',
                    imageAlt: 'Customs Clearance Icon',
                },
                {
                    id: 4,
                    title: 'Last-Mile Delivery',
                    body: 'Efficient last-mile delivery services for a seamless customer experience.',
                    imageSrc: '',
                    imageAlt: 'Last-Mile Delivery Icon',
                },
            ],
        },
    },
    {
        id: "69e7ed7e-889d-41c0-a1d9-62bd150401e2",
        name: "Hero Banner",
        version: "v1",
        style: "CLASSIC",
        path: "index",
        data: {
            type: "HeroBanner",
            id: "002",
            title: "Logistics Solutions",
            subTitle: "Your Cargo, Our Priority",
            description: "",
            version: "v2",
            style: "CLASSIC",
            bannerData: [
                {
                    title: "Logistics Solutions",
                    subTitle: "Your Cargo, Our Priority",
                    description: "Efficient, Secure, and Reliable",
                    image:
                    {
                        id: '1',
                        imageSrc: 'https://images.unsplash.com/photo-1614124760016-5fe39bdf27db?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2071&q=80',
                        imageAlt: 'Desk with leather desk pad, walnut desk organizer, wireless keyboard and mouse, and porcelain mug.',
                    },
                    modalProps: {
                        isOpen: false,
                        // onClose: () => void,
                        title: 'string',
                    }
                }
            ],
        },
    },

    {
        id: "143d8df3-49c7-4370-9e0e-0c5ef7a46f6b",
        name: "Testimonials",
        version: "v1",
        style: "CLASSIC",
        path: "index",
        data: {
            type: "Testimonial",
            id: "k",
            title: "Testimonials",
            subTitle: "What Our Clients Say",
            description: "Read what our satisfied clients have to say about our logistics services.",
            version: "v1",
            style: "CLASSIC",
            testimonials: [
                {
                    id: "1",
                    name: "John Doe",
                    designation: "Client",
                    imageSrc: "https://mdbcdn.b-cdn.net/img/Photos/Avatars/img%20(2).jpg",
                    imageAlt: "John Doe",
                    testimonial:
                        "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed ac magna sit amet risus tristique interdum, at vel velit in hac habitasse platea dictumst.",
                },
                {
                    id: "2",
                    name: "Jane Smith",
                    designation: "Business Owner",
                    imageSrc: "https://mdbcdn.b-cdn.net/img/Photos/Avatars/img%20(1).jpg",
                    imageAlt: "Jane Smith",
                    testimonial:
                        "Praesent placerat enim ut ex tincidunt vehicula. Fusce sit amet dui tellus. Morbi sagittis, quam nec venenatis lobortis, mi risus tempus nulla, sed porttitor est nibh at nulla.",
                },
                {
                    id: "3",
                    name: "David Johnson",
                    designation: "CEO",
                    imageSrc: "https://mdbcdn.b-cdn.net/img/Photos/Avatars/img%20(9).jpg",
                    imageAlt: "David Johnson",
                    testimonial:
                        "Ut posuere, ex a fringilla hendrerit, nulla metus gravida mi, in hendrerit quam odio sed est. Vestibulum nec finibus nisi. Aliquam et ipsum nulla.",
                },
                {
                    id: "4",
                    name: "Sarah Wilson",
                    designation: "Logistics Manager",
                    imageSrc: "https://mdbcdn.b-cdn.net/img/Photos/Avatars/img%20(9).jpg",
                    imageAlt: "Sarah Wilson",
                    testimonial:
                        "Ut posuere, ex a fringilla hendrerit, nulla metus gravida mi, in hendrerit quam odio sed est. Vestibulum nec finibus nisi. Aliquam et ipsum nulla.",
                },
            ],
        },
    },
    {
        id: "143d8df3-49c7-4370-9e0e-0c5ef7a46f6b",
        name: "Blog",
        version: "v1",
        style: "CLASSIC",
        path: "index",
        data: {
            type: "Blog",
            id: "k",
            title: "Explore Our Blog",
            subTitle: "Stay Informed and Inspired",
            description: "Discover insightful articles and stay updated with the latest trends and news in the logistics industry.",
            version: "v1",
            style: "CLASSIC",
            blogs: [
                {
                    id: "1",
                    title: "Strategic Logistics Partner: DRAY World's Tailored Solutions",
                    description: "Partner with DRAY World for strategic logistics solutions. Embrace tailored services designed to meet your unique business requirements.",
                    descriptionContext: "Discover serenity and unmatched comfort at Gayatri Lodge, nestled in the heart of Kasauli.",
                    imageSrc: "https://images.unsplash.com/photo-1565793298595-6a879b1d9492?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2071&q=80",
                    imageAlt: 'Gayatri Lodge Kasauli',
                },
                {
                    id: "2",
                    title: "Efficient Logistics: Streamlining Operations with DRAY World",
                    description: "Explore the efficiency of logistics operations with DRAY World. Discover how we streamline processes and ensure seamless transportation.",
                    descriptionContext: "Experience unparalleled luxury at Gayatri Lodge Hotel, where opulence meets elegance. Indulge in lavish accommodations, impeccable services, and breathtaking views.",
                    imageSrc: "https://images.unsplash.com/photo-1587293852726-70cdb56c2866?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2072&q=80",
                    imageAlt: 'Luxury Hotel',
                },
                {
                    id: "3",
                    title: "Optimizing Supply Chains: DRAY World's Logistics Excellence",
                    description: "Experience logistics excellence with DRAY World. Learn how we optimize supply chains, delivering unparalleled efficiency and reliability.",
                    descriptionContext: "At Gayatri Lodge, we extend heartfelt welcomes and make you feel like family. Discover the warmth of personalized hospitality that turns your stay into cherished memories.",
                    imageSrc: "https://images.unsplash.com/photo-1606964212858-c215029db704?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2070&q=80",
                    imageAlt: 'Homestay Welcome',
                },
                {
                    id: "4",
                    title: "Reliable Transportation Solutions: DRAY World's Commitment",
                    description: "Experience reliable transportation solutions with DRAY World. Our commitment ensures your goods reach their destination safely and on time.",
                    descriptionContext: "At Gayatri Lodge, we extend heartfelt welcomes and make you feel like family. Discover the warmth of personalized hospitality that turns your stay into cherished memories.",
                    imageSrc: "https://images.unsplash.com/photo-1598193957011-39b9f2916992?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2069&q=80",
                    imageAlt: 'Warm Hospitality',
                },
            ],
        },
    },


    {
        id: "143d8df3-49c7-4370-9e0e-0c5ef7a46f6b",
        name: "Contact Us",
        version: "v2",
        style: "CLASSIC",
        path: "index",
        data: {
            type: "ContactUs",
            id: "k",
            title: "Get In Touch",
            subTitle: "Let's Discuss Your Logistics Needs",
            description: "Reach out to us for inquiries and collaboration. Experience reliable logistics services that ensure your cargo reaches its destination safely and on time. Let's make your logistics journey hassle-free.",
            version: "v2",
            style: "CLASSIC",
            contactUs: {
                address: "9 Nom Crescent Unit 2 \n Markham, Om L3S 2B3, CA",
                name: "Technical support",
                email: "Ops@dray-world.com",
                phone: "+1 548-488-1984",
                name2: "Sales questions",
                email2: "Paul@dray-world.com",
                phone2: "+1 825-824-0911",
                name3: "Logistics Sales Specialist",
                email3: "Eddie@dray-world.com",
                phone3: "+1 902-263-0009",
                name4: "Logistics Solutions Expert",
                email4: "rexmartin@dray-world.com",
                phone4: "+1 778-907-1984",
                name5: "Sales Consultant",
                email5: "david@dray-world.com",
                phone5: "+1 506-306-0926",
                formFields: [
                    { name: 'name', label: 'Name', type: 'text', required: true },
                    { name: 'email', label: 'Email', type: 'email', required: true },
                    { name: 'message', label: 'Message', type: 'textarea', required: true },
                ]
            },
        },
    },
    {
        id: "143d8df3-c7-4370-9e0e-0c5ef7a46f6b",
        name: "ContactUs",
        version: "v1",
        style: "CLASSIC",
        path: "index",
        data: {
            type: "TermsAndConditions",
            id: "k",
            title: "Disclaimer",
            subTitle: "Coming Soon",
            description: "By providing my phone number to “Dray World Logistics”, I agree and acknowledge that “Dray World Logistics” may send text messages to my wireless phone number for any purpose. Message and data rates may apply. Message frequency will vary, and you will be able to Opt-out by replying “STOP”. For more information on how your data will be handled, please see our privacy policy below:",
            version: "v2",
            style: "CLASSIC",
        },
    },
    {
        id: "143d8df3-49c7-4370-9e0e-0c5ef7a46f6b",
        name: "ContactUs",
        version: "v1",
        style: "CLASSIC",
        path: "index",
        data: {
            type: "TermsAndConditions",
            id: "k",
            title: "Privacy Policy",
            subTitle: "Coming Soon",
            description: "No mobile information will be shared with third parties/affiliates for marketing/promotional purposes. All the above categories exclude text messaging originator opt-in data and consent; this information will not be shared with any third parties.",
            version: "v2",
            style: "CLASSIC",
            // termAndCondition: [
            //     {
            //         id: "1",
            //         title: 'Q.What are the check-in and check-out timings at Gayatri Lodge?',
            //         description: 'Ans:The standard check-in time at Gayatri Lodge is 2:00 PM, and the check-out time is 12:00 PM (noon). However, early check-in or late check-out requests can be accommodated based on availability and may be subject to additional charges.',
            //         descriptionContext: 'Ans:The standard check-in time at Gayatri Lodge is 2:00 PM, and the check-out time is 12:00 PM (noon). However, early check-in or late check-out requests can be accommodated based on availability and may be subject to additional charges.',
            //     },
            //     {
            //         id: "2",
            //         title: 'Q.What are the check-in and check-out timings at Gayatri Lodge?',
            //         description: 'Ans:The standard check-in time at Gayatri Lodge is 2:00 PM, and the check-out time is 12:00 PM (noon). However, early check-in or late check-out requests can be accommodated based on availability and may be subject to additional charges.',
            //         descriptionContext: 'Ans:The standard check-in time at Gayatri Lodge is 2:00 PM, and the check-out time is 12:00 PM (noon). However, early check-in or late check-out requests can be accommodated based on availability and may be subject to additional charges.',
            //     },
            //     {
            //         id: "3",
            //         title: 'Q.What are the check-in and check-out timings at Gayatri Lodge?',
            //         description: 'Ans:The standard check-in time at Gayatri Lodge is 2:00 PM, and the check-out time is 12:00 PM (noon). However, early check-in or late check-out requests can be accommodated based on availability and may be subject to additional charges.',
            //         descriptionContext: 'Ans:The standard check-in time at Gayatri Lodge is 2:00 PM, and the check-out time is 12:00 PM (noon). However, early check-in or late check-out requests can be accommodated based on availability and may be subject to additional charges.',
            //     },
            // ],
        },
    },

    {
        id: "143d8d",
        name: "Footer",
        version: "v2",
        style: "CLASSIC",
        path: "index",
        data: {
            type: "Footer",
            id: "k",
            title: "Hero Banner!",
            subTitle: "Hero Banner Sub Title is here",
            description: "Hero Banner Paragraph is here",
            version: "v1",
            style: "CLASSIC",
            footer: {
                socialLink: [{
                    id: "1",
                    name: 'facebook',
                    className: "",
                    link: "https://www.facebook.com/fb.pahariyatri",
                },
                {
                    id: "2",
                    name: 'instagram',
                    className: "",
                    link: "https://www.instagram.com/pahariyatri/",
                },
                {
                    id: "3",
                    name: 'linkedin',
                    className: "",
                    link: "https://www.linkedin.com/company/pahari-yatri/",
                }, {
                    id: "4",
                    name: 'pinterest',
                    className: "",
                    link: "https://in.pinterest.com/pin_pahariyatri",
                },],
                copyright: "Dray World Logistic",
            },
        },
    },
    // {
    //     id: "143d8df3-49c7-4370-9e0e-0c5ef7a46f6b",
    //     name: "ContactUs",
    //     version: "v1",
    //     style: "CLASSIC",
    //     path: "index",
    //     data: {
    //         type: "ComingSoon",
    //         id: "k",
    //         title: "Dray World Logistics",
    //         subTitle: "Coming Soon",
    //         description: "Dray World Logistics is on the verge of transforming the way goods move across the globe. With a relentless commitment to innovation, efficiency, and customer satisfaction, we are poised to redefine the logistics landscape.",
    //         version: "v2",
    //         style: "CLASSIC",
    //     },
    // },
];

export const drayWorldLogisticSeo: any = {
    title: "Reliable Logistics Services | Dray World Logistics",
    description: "Dray World Logistics provides efficient and secure logistics services. We specialize in freight forwarding, warehousing, customs clearance, and last-mile delivery.",
    keywords: "Logistics, Freight Forwarding, Warehousing, Customs Clearance, Last-Mile Delivery, Cargo Transportation, Reliable Logistics",
    tags: "Logistics Services, Freight Forwarding, Warehousing Solutions, Customs Clearance, Last-Mile Delivery, Cargo Transportation, Reliable Logistics",
    author: "Your Name",
    imageUrl: "https://example.com/og-image.jpg",
    siteUrl: "https://dray-world.com",
};

export const drayWorldLogisticPlugin: PluginConfig[] = [
    {
        name: "FloatingButton",
        isActive: false,
        data: {
            "mobile": "5484881984",
            "text": ""
        },
    }
]

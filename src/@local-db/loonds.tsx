import { Section } from "../modal/Section";

export const loondsTheme: any = {
    name: "default"
}

export const loonds: Section[] = [
    {
        id: "69e7ed7e-889d-41c0-a1d9-62bd150401e2",
        name: "Header",
        version: "v2",
        style: "MODERN",
        path: "index",
        data: {
            type: "Header",
            id: "001",
            title: "Archdy - Your Trusted Architecture Firm",
            subTitle: "Designing Dreams into Reality",
            description: "Archdy is your premier destination for innovative architecture, interior design, and landscape solutions. Explore our portfolio and contact us today for expert consultation.",
            version: "v2",
            style: "MODERN",
            logo:
            {
                id: '1',
                imageSrc: 'https://i.pinimg.com/564x/42/1d/c1/421dc1bea91d21aaa0678bdeae4d3d05.jpg',
                imageAlt: 'Architectural design concepts.',
            },
            menu: [
                {
                    id: "menu-1",
                    label: "Home",
                    url: "/home",
                }, {
                    id: "menu-2",
                    label: "About Us",
                    url: "/about-us",
                }, {
                    id: "menu-3",
                    label: "Our Portfolio",
                    url: "/portfolio",
                }, {
                    id: "menu-4",
                    label: "Contact us",
                    url: "/contact-us",
                },
            ],
            contactUs: {
                address: "",
                email: "contact@archdy.com",
                phone: "+91 1234567890",
            },
        },
    },
    {
        id: "69e7ed7e-889d-41c0-a1d9-62bd150401e2",
        name: "Hero banner",
        version: "v1",
        style: "CLASSIC",
        path: "index",
        data: {
            type: "HeroBanner",
            id: "002",
            title: "Empower Your Business with Innovative Software Solutions",
            subTitle: "Driving Digital Transformation",
            description: "Unlock the full potential of your business with our cutting-edge software development services. From concept to deployment, we bring your ideas to life with expertise and innovation.",
            version: "v2",
            style: "CLASSIC",
            bannerData: [
                {
                    title: "Your Trusted Technology Partner",
                    subTitle: "Building Tomorrow's Solutions Today",
                    description: "We are committed to delivering top-notch software solutions tailored to meet your unique business needs. Explore our capabilities and partner with us for success.",
                    image: {
                        id: '1',
                        imageSrc: 'https://images.unsplash.com/photo-1550439062-609e1531270e?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
                        imageAlt: 'Innovative Software Development',
                    },
                    modalProps: {
                        isOpen: true,
                        // onClose: () => void,
                        title: 'Unlocking Innovation in Every Line of Code',
                    }
                },
            ],
        },
    },
    {
        id: "143d8df3-49c7-4370-9e0e-0c5ef7a46f6b",
        name: "Portfolio",
        version: "v1",
        style: "CLASSIC",
        path: "index",
        data: {
            type: "Portfolio",
            id: "k",
            title: "Our Portfolio",
            subTitle: "Hero Banner Sub Title is here",
            description: "Hero Banner Paragraph is here",
            version: "v1",
            style: "CLASSIC",
            portfolios: [
                {
                    id: 1,
                    name: '3D Desk and Office',
                    description: 'Work from home accessories',
                    imageSrc: 'https://images.unsplash.com/photo-1661867011861-671e1cd85cc2?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1931&q=80',
                    imageAlt: 'Desk with leather desk pad, walnut desk organizer, wireless keyboard and mouse, and porcelain mug.',
                    href: '#',
                },
                {
                    id: 2,
                    name: 'Kitchen',
                    description: 'Journals and note-taking',
                    imageSrc: 'https://images.unsplash.com/photo-1588854337221-4cf9fa96059c?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2070&q=80',
                    imageAlt: 'Wood table with porcelain mug, leather journal, brass pen, leather key ring, and a houseplant.',
                    href: '#',
                },
                {
                    id: 3,
                    name: 'Bedroom',
                    description: 'Journals and note-taking',
                    imageSrc: 'https://images.unsplash.com/photo-1578683010236-d716f9a3f461?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2070&q=80',
                    imageAlt: 'Wood table with porcelain mug, leather journal, brass pen, leather key ring, and a houseplant.',
                    href: '#',
                },
                {
                    id: 4,
                    name: 'Self-Improvement',
                    description: 'Journals and note-taking',
                    imageSrc: 'https://images.unsplash.com/photo-1565183928294-7063f23ce0f8?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2070&q=80',
                    imageAlt: 'Wood table with porcelain mug, leather journal, brass pen, leather key ring, and a houseplant.',
                    href: '#',
                },
                {
                    id: 5,
                    name: 'Travel',
                    description: 'Daily commute essentials',
                    imageSrc: 'https://plus.unsplash.com/premium_photo-1670168995865-3a515cf74ffd?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2070&q=80',
                    imageAlt: 'Collection of four insulated travel bottles on wooden shelf.',
                    href: '#',
                },
                {
                    id: 5,
                    name: 'Office and conference hall',
                    description: 'Daily commute essentials',
                    imageSrc: 'https://images.unsplash.com/photo-1643199121319-b3b5695e4acb?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2070&q=80',
                    imageAlt: 'Collection of four insulated travel bottles on wooden shelf.',
                    href: '#',
                },
            ],
        },
    },
    {
        id: "143d8df3-49c7-4370-9e0e-0c5ef7a46f6b",
        name: "Services",
        version: "v1",
        style: "CLASSIC",
        path: "index",
        data: {
            type: "Service",
            id: "k",
            title: "Our Services - Architectural Excellence",
            subTitle: "Turning Ideas into Structures",
            description: "Explore our comprehensive architectural, interior, and landscape design services. Transform your spaces with Archdy's expertise in residential and commercial projects.",
            version: "v1",
            style: "CLASSIC",
            services: [
                {
                    id: 1,
                    title: 'Architecture & Design',
                    body: 'Innovative architectural design that captures your vision and exceeds your expectations.',
                    imageSrc: 'https://i.pinimg.com/564x/42/1d/c1/421dc1bea91d21aaa0678bdeae4d3d05.jpg',
                    imageAlt: 'Architecture icon',
                },
                {
                    id: 2,
                    title: 'Interior Design',
                    body: 'Creating stunning interior spaces that harmonize aesthetics and functionality.',
                    imageSrc: 'https://i.pinimg.com/564x/42/1d/c1/421dc1bea91d21aaa0678bdeae4d3d05.jpg',
                    imageAlt: 'Interior design icon',
                },
                {
                    id: 3,
                    title: 'Landscape Design',
                    body: 'Transforming outdoor spaces into captivating and serene environments.',
                    imageSrc: 'https://i.pinimg.com/564x/42/1d/c1/421dc1bea91d21aaa0678bdeae4d3d05.jpg',
                    imageAlt: 'Landscape design icon',
                },
                {
                    id: 4,
                    title: 'Turnkey Solutions',
                    body: 'Complete project management, from concept to construction, for hassle-free execution.',
                    imageSrc: 'https://i.pinimg.com/564x/42/1d/c1/421dc1bea91d21aaa0678bdeae4d3d05.jpg',
                    imageAlt: 'Turnkey solutions icon',
                },
                {
                    id: 5,
                    title: '3D Design & Consultancy',
                    body: 'Visualize your project with 3D design and benefit from expert architectural consultancy.',
                    imageSrc: 'https://i.pinimg.com/564x/42/1d/c1/421dc1bea91d21aaa0678bdeae4d3d05.jpg',
                    imageAlt: '3D design icon',
                },
            ],
        },
    },
    {
        id: "143d8df3-49c7-4370-9e0e-0c5ef7a46f6b",
        name: "Service",
        version: "v2",
        style: "CLASSIC",
        path: "index",
        data: {
            type: "Testimonial",
            id: "k",
            title: "Testimonials",
            subTitle: "Hero Banner Sub Title is here",
            description: "Hero Banner Paragraph is here",
            version: "v1",
            style: "CLASSIC",
            testimonials: [
                {
                    id: "1",
                    name: "John Doe",
                    designation: "Graphic Designer",
                    imageSrc: "https://mdbcdn.b-cdn.net/img/Photos/Avatars/img%20(2).jpg",
                    imageAlt: "Graphic Designer",
                    testimonial:
                        "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed ac magna sit amet risus tristique interdum, at vel velit in hac habitasse platea dictumst.",
                },
                {
                    id: "2",
                    name: "John Doe",
                    designation: "John Doe",
                    imageSrc: "https://mdbcdn.b-cdn.net/img/Photos/Avatars/img%20(1).jpg",
                    imageAlt: "John Doe",
                    testimonial:
                        "Praesent placerat enim ut ex tincidunt vehicula. Fusce sit amet dui tellus. Morbi sagittis, quam nec venenatis lobortis, mi risus tempus nulla, sed porttitor est nibh at nulla.",
                },
                {
                    id: "3",
                    name: "John Doe",
                    designation: "John Doe",
                    imageSrc: "https://mdbcdn.b-cdn.net/img/Photos/Avatars/img%20(9).jpg",
                    imageAlt: "John Doe",
                    testimonial:
                        "Ut posuere, ex a fringilla hendrerit, nulla metus gravida mi, in hendrerit quam odio sed est. Vestibulum nec finibus nisi. Aliquam et ipsum nulla.",
                }, {
                    id: "4",
                    name: "John Doe",
                    designation: "John Doe",
                    imageSrc: "https://mdbcdn.b-cdn.net/img/Photos/Avatars/img%20(9).jpg",
                    imageAlt: "John Doe",
                    testimonial:
                        "Ut posuere, ex a fringilla hendrerit, nulla metus gravida mi, in hendrerit quam odio sed est. Vestibulum nec finibus nisi. Aliquam et ipsum nulla.",
                },
            ],
        },
    },
    {
        id: "69e7ed7e-889d-41c0-a1d9-62bd150401e2",
        name: "Hero banner",
        version: "v1",
        style: "CLASSIC",
        path: "index",
        data: {
            type: "HeroBanner",
            id: "002",
            title: "3D design",
            subTitle: "",
            description: "",
            version: "v2",
            style: "CLASSIC",
            bannerData: [
                {
                    title: "Archdy - Your Trusted Architecture Firm",
                    subTitle: "Designing Dreams into Reality",
                    description: "Archdy is your premier destination for innovative architecture, interior design, and landscape solutions. Explore our portfolio and contact us today for expert consultation.",
                    image:
                    {
                        id: '1',
                        imageSrc: 'https://images.unsplash.com/photo-1662092560486-ff770cb64ba7?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1932&q=80',
                        imageAlt: 'Architectural design concepts.',
                    },
                    modalProps: {
                        isOpen: false,
                        // onClose: () => void,
                        title: 'Title is here ',
                    }
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
            title: "Our Recent Blogs",
            subTitle: "Stay Inspired and Informed",
            description: "Explore our latest travel articles, tips, and stories to fuel your wanderlust.",
            version: "v1",
            style: "CLASSIC",
            blogs: [
                {
                    id: "2",
                    title: "Great Lakes Trek",
                    description: 'Explore the pristine alpine lakes of the Kashmir region, including Vishansar Lake, Gadsar Lake, and Nundkol Lake.',
                    descriptionContext: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed nonummy tincidunt ut lacreet dolore magna aliguam erat volutpat.",
                    imageSrc: "https://images.unsplash.com/photo-1526772662000-3f88f10405ff?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1pYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1074&q=80",
                    imageAlt: 'Tall slender porcelain bottle with natural clay textured body and cork stopper.',
                },
                {
                    id: "3",
                    title: "Sandakphu Trek",
                    description: 'Trek to the highest point in West Bengal, Sandakphu, and witness panoramic views of the Himalayas, including the majestic Kanchenjunga.',
                    descriptionContext: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed nonummy tincidunt ut lacreet dolore magna aliguam erat volutpat.",
                    imageSrc: "https://images.unsplash.com/photo-1523341139367-9de570b874ed?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1pYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto.format&fit=crop&w=1170&q=80",
                    imageAlt: 'Tall slender porcelain bottle with natural clay textured body and cork stopper.',
                },
                {
                    id: "4",
                    title: "Hampta Pass Trek",
                    description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit.",
                    descriptionContext: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed nonummy tincidunt ut lacreet dolore magna aliguam erat volutpat.",
                    imageSrc: "https://images.unsplash.com/photo-1520982184827-6950930eaf2b?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1pYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1170&q=80",
                    imageAlt: 'Tall slender porcelain bottle with natural clay textured body and cork stopper.',
                },
                {
                    id: "5",
                    title: "Winter Wonderland in Shimla, Kasol, and Tosh",
                    description: 'Embrace the magic of winter in the serene Himalayan landscapes of Shimla, Kasol, and Tosh. These charming destinations come alive with snowfall, creating a picturesque winter wonderland.',
                    descriptionContext: "Explore our blog to plan your winter adventure in these enchanting destinations.",
                    imageSrc: "https://images.unsplash.com/photo-1575370378730-4e9d0acd572a?auto=format&fit=crop&q=80&w=1776&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
                    imageAlt: 'Image Alt Text Here',
                },
                {
                    id: "6",
                    title: "Kasauli Winter Chill",
                    description: 'Kasauli, a tranquil hill station in Himachal Pradesh, beckons winter enthusiasts with its crisp mountain air and peaceful ambiance. Escape the urban hustle and experience a serene winter retreat in Kasauli.',
                    descriptionContext: "Read our blog for a peaceful winter getaway in Kasauli.",
                    imageSrc: "https://images.unsplash.com/photo-1551582045-6ec9c11d8697?auto=format&fit=crop&q=80&w=1965&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
                    imageAlt: 'Image Alt Text Here',
                },
                {
                    id: "7",
                    title: "Chail Winter Forest Retreat",
                    description: 'Escape to Chail for an enchanting winter forest retreat. Nestled amidst pine and deodar forests, Chail offers a tranquil and snowy escape that s perfect for nature lovers.',
                    descriptionContext: "Discover the beauty of a winter forest retreat in Chail through our blog.",
                    imageSrc: "https://images.unsplash.com/photo-1676712754009-e62b85811f01?auto=format&fit=crop&q=80&w=2070&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
                    imageAlt: 'Image Alt Text Here',
                },
                {
                    id: "8",
                    title: "Manali Snow Adventure",
                    description: 'Manali, a perennial favorite, becomes a hub for winter adventurers during the snowy season. Embark on a thrilling winter journey in the heart of Himachal Pradesh.',
                    descriptionContext: "Plan your adventure in Manali's snow-covered paradise with our blog.",
                    imageSrc: "https://images.unsplash.com/photo-1679407985739-b6df6dcf2e44?auto=format&fit=crop&q=80&w=2070&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
                    imageAlt: 'Image Alt Text Here',
                },
            ],

        },
    },
    {
        id: "143d8df3-49c7-4370-9e0e-0c5ef7a46f6b",
        name: "Faq",
        version: "v1",
        style: "CLASSIC",
        path: "index",
        data: {
            type: "FAQ",
            id: "k",
            title: "FAQ",
            subTitle: "Hero Banner Sub Title is here",
            description: "Hero Banner Paragraph is here",
            version: "v1",
            style: "CLASSIC",
            "faqs": [
                {
                    "id": 1,
                    "question": "Q. What is Pahari Yatri's mission?",
                    "answer": "A. Our mission at Pahari Yatri is to provide exhilarating trekking and mountaineering experiences that connect individuals with the breathtaking beauty of North India and beyond. We are passionate about promoting sustainable tourism practices and curating personalized adventures for our clients."
                },
                {
                    "id": 2,
                    "question": "Q. What types of travel experiences does Pahari Yatri offer?",
                    "answer": "A. Pahari Yatri specializes in adventure travel. Our offerings include thrilling adventure expeditions, camping in picturesque landscapes, adventure tours that combine activities and cultural immersions, and opportunities for cultural immersion in local traditions."
                },
                {
                    "id": 3,
                    "question": "Q. How can I book a trip with Pahari Yatri?",
                    "answer": "A. Booking a trip with Pahari Yatri is easy. You can explore our travel packages on our website, select the one that suits your preferences, and follow the booking instructions. Our team is also available to assist you if you have any questions or need personalized recommendations."
                },
                {
                    "id": 4,
                    "question": "Q. Is safety a priority at Pahari Yatri?",
                    "answer": "A. Absolutely! Your safety is our top priority. We adhere to rigorous safety protocols and provide expert guidance to ensure secure and enriching experiences for all our travelers. Our experienced guides and staff are trained to handle various situations and prioritize your well-being."
                },
                {
                    "id": 5,
                    "question": "Q. What sets Pahari Yatri apart from other travel companies?",
                    "answer": "A. Pahari Yatri stands out for its unique blend of cutting-edge technology and a deep love for adventure. We offer personalized adventures that cater to your preferences, and our commitment to sustainability ensures that your travel has a positive impact on the environment and local communities."
                },
                // Add more FAQs as needed
            ]

        },
    },
    {
        id: "143d8df3-49c7-4370-9e0e-0c5ef7a46f6b",
        name: "ContactUs",
        version: "v2",
        style: "CLASSIC",
        path: "index",
        data: {
            type: "ContactUs",
            id: "k",
            title: "Get In Touch",
            subTitle: "Hero Banner Sub Title is here",
            description: "Hero Banner Paragraph is here",
            version: "v2",
            style: "CLASSIC",
            contactUs: {
                address: "Himachal Pradesh",
                email: "pahariyatri@gmail.com",
                phone: "+91 9569576707",
                formFields: [
                    { name: 'name', label: 'Name', type: 'text', required: true },
                    { name: 'mobile', label: 'Mobile', type: 'tel', required: true },
                ]
            },
        },
    },
    {
        id: "143d8df3-49c7-4370-9e0e-0c5ef7a46f6b",
        name: "Footer",
        version: "v1",
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
        },
    },
];

export const loondsSeo: any = {
    title: "Pahari Yatri - Adventure Trekking and Mountaineering Experiences",
    description: "Pahari Yatri offers exceptional trekking and mountaineering experiences, connecting adventure seekers with nature, culture, and their adventurous spirit.",
    keywords: "adventure travel, trekking experiences, mountaineering expeditions, camping, adventure tours, wildlife safaris, cultural immersion, sustainable travel",
    tags: "adventure travel, trekking, mountaineering, camping, adventure tours, wildlife safaris, photography expeditions, cultural immersion, sustainable travel",
    author: "Pankaj Kumar",
    imageUrl: "https://example.com/og-image.jpg",
    siteUrl: "https://www.pahariyatri.com",
};
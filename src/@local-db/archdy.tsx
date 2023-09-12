import { PluginConfig } from "../modal/PluginConfig";
import { Section } from "../modal/Section";

export const archdyTheme: any = {
    name: "sunset"
}

export const archdy: Section[] = [
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
            title: "Archdy - Your Trusted Architecture Firm",
            subTitle: "Designing Dreams into Reality",
            description: "Archdy is your premier destination for innovative architecture, interior design, and landscape solutions. Explore our portfolio and contact us today for expert consultation.",
            version: "v2",
            style: "CLASSIC",
            images: [
                {
                    id: '1',
                    imageSrc: 'https://images.unsplash.com/photo-1644057501622-dfa7dd26dbfb?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1981&q=80',
                    imageAlt: 'Architectural design concepts.',
                },
            ],
        },
    },
    {
        id: "143d8df3-49c7-4370-9e0e-0c5ef7a46f6b",
        name: "About-Us",
        version: "v1",
        style: "CLASSIC",
        path: "index",
        data: {
            type: "AboutUs",
            id: "003",
            title: "About Archdy - Your Architecture Partner",
            subTitle: "Blending Creativity with Excellence",
            description: "Archdy is dedicated to providing specialized expertise in architectural, interior, and landscape design. Serving residential and commercial clients in Himachal Pradesh and beyond.",
            version: "v1",
            style: "CLASSIC",
            images: [
                {
                    id: '1',
                    imageSrc: 'https://images.unsplash.com/photo-1600585154340-be6161a56a0c?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2070&q=80',
                    imageAlt: 'Architectural designs.',
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
        name: "Gallery",
        version: "v1",
        style: "MODERN",
        path: "index",
        data: {
            type: "Gallery",
            id: "004",
            title: "Our Gallery",
            subTitle: "A Glimpse of Our Work",
            description: "Immerse yourself in the visuals of our projects. Browse through our gallery showcasing our exceptional designs that transform spaces into captivating works of art.",
            version: "v1",
            style: "MODERN",
            images: [
                {
                    id: '1',
                    imageSrc: 'https://images.unsplash.com/photo-1639628739781-98290977fa82?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1974&q=80',
                    imageAlt: 'Desk with leather desk pad, walnut desk organizer, wireless keyboard and mouse, and porcelain mug.',
                },
                {
                    id: '2',
                    imageSrc: 'https://images.unsplash.com/photo-1503174971373-b1f69850bded?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1826&q=80',
                    imageAlt: 'Desk with leather desk pad, walnut desk organizer, wireless keyboard and mouse, and porcelain mug.',
                },
                {
                    id: '3',
                    imageSrc: 'https://images.unsplash.com/photo-1615874694520-474822394e73?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1780&q=80',
                    imageAlt: 'Desk with leather desk pad, walnut desk organizer, wireless keyboard and mouse, and porcelain mug.',
                },
                {
                    id: '4',
                    imageSrc: 'https://images.unsplash.com/photo-1643526399974-7de62b65a6f8?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2042&q=80',
                    imageAlt: 'Desk with leather desk pad, walnut desk organizer, wireless keyboard and mouse, and porcelain mug.',
                },
                {
                    id: '6',
                    imageSrc: 'https://plus.unsplash.com/premium_photo-1661963965286-45dc339e23fd?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1882&q=80',
                    imageAlt: 'Desk with leather desk pad, walnut desk organizer, wireless keyboard and mouse, and porcelain mug.',
                }, {
                    id: '7',
                    imageSrc: 'https://images.unsplash.com/photo-1578683010236-d716f9a3f461?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2070&q=80',
                    imageAlt: 'Desk with leather desk pad, walnut desk organizer, wireless keyboard and mouse, and porcelain mug.',
                }, {
                    id: '8',
                    imageSrc: 'https://i.pinimg.com/564x/b2/57/05/b25705d40142307cd68a4928a8862e2f.jpg',
                    imageAlt: 'Desk with leather desk pad, walnut desk organizer, wireless keyboard and mouse, and porcelain mug.',
                }, {
                    id: '9',
                    imageSrc: 'https://images.unsplash.com/photo-1591204154525-f7ae12d8572f?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2070&q=80',
                    imageAlt: 'Desk with leather desk pad, walnut desk organizer, wireless keyboard and mouse, and porcelain mug.',
                },
            ],
        },
    },
    {
        id: "143d8df3-49c7-4370-9e0e-0c5ef7a46f6b",
        name: "Service",
        version: "v1",
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
            images: [
                {
                    id: '1',
                    imageSrc: 'https://images.unsplash.com/photo-1662092560486-ff770cb64ba7?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1932&q=80',
                    imageAlt: 'Architectural design concepts.',
                },
            ],
        },
    },
    {
        id: "143d8df3-49c7-4370-9e0e-0c5ef7a46f6b",
        name: "Contact Us",
        version: "v1",
        style: "CLASSIC",
        path: "index",
        data: {
            type: "ContactUs",
            id: "k",
            title: "Get In Touch",
            subTitle: "Let's Create Together",
            description: " Reach out to us for inquiries and collaboration. Experience personalized design solutions that elevate your spaces. Let's make your vision a reality.",
            version: "v1",
            style: "CLASSIC",
            contactUs: {
                address: "Hamirpur, Himachal Pradesh, India",
                email: "ar.avineshsharma@gmail.com",
                phone: "+91 8580676232",
                formFields: [
                    { name: 'name', label: 'Name', type: 'text', required: true },
                    { name: 'mobile', label: 'Mobile', type: 'tel', required: true },
                    {
                        name: 'servicesInterested',
                        label: 'Services Interested In',
                        type: 'checkbox',
                        required: true,
                        options: [
                            { label: 'Architecture & Design', value: 'acp_installation' },
                            { label: 'Interior Design', value: 'wooden_flooring' },
                            { label: 'Landscape Design', value: 'glass_solutions' },
                            { label: 'Turnkey Solutions', value: 'ceiling_design' },
                            { label: '3D Design & Consultancy', value: 'roof_solution' },
                            { label: 'Others', value: 'others' },
                        ],
                    },
                    { name: 'text', label: 'Massage', type: 'textarea', required: false },
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

export const archdySeo: any = {
    title: "Top Quality Interior & Exterior Design Services in North India | North Vibe Design",
    description: "Elevate your spaces with exceptional craftsmanship and creative designs. We specialize in ACP installation, glass solutions, wooden flooring, and ceiling designs. Catering to residential and commercial clients in Himachal Pradesh and North India.",
    keywords: "Interior design, exterior design, ACP installation, glass solutions, wooden flooring, ceiling designs, residential services, commercial services, remodeling, real estate, architecture, hospitality, landscape architects, Himachal Pradesh, North India.",
    tags: "Interior Design, Exterior Design, ACP Installation, Glass Solutions, Wooden Flooring, Ceiling Designs, Residential Services, Commercial Services, Remodeling, Real Estate, Architecture, Hospitality, Landscape Architects, Himachal Pradesh, North India.",
    author: "Pankaj Kumar",
    imageUrl: "https://example.com/og-image.jpg",
    siteUrl: "https://www.pahariyatri.com",
};

export const archdyPlugin: PluginConfig[] = [
    {
        name: "FloatingButton",
        isActive: true,
        data: {
            "mobile": "8580676232",
            "text": "Hello, I'm interested in your architectural, interior, and landscape design services. Can you provide more information?"
        },
    }
]

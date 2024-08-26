import { Section } from "../modal/Section";

export const foregrowsolutionsTheme: any = {
    name: "default"
}

export const foregrowsolutions: Section[] = [
    {
        id: "69e7ed7e-889d-41c0-a1d9-62bd150401e2",
        name: "Header",
        version: "v2",
        style: "MODERN",
        path: "index",
        data: {
            type: "Header",
            id: "001",
            title: "ForeGrow Solutions - Your Trusted Technology Partner",
            subTitle: "Driving Innovation, Delivering Excellence",
            description: "ForeGrow Solutions is your go-to partner for cutting-edge software development, cloud solutions, and digital transformation services. Discover our expertise and get in touch for a tailored consultation.",
            version: "v2",
            style: "MODERN",
            logo: {
                id: '1',
                imageSrc: 'https://i.pinimg.com/564x/42/1d/c1/421dc1bea91d21aaa0678bdeae4d3d05.jpg',
                imageAlt: 'ForeGrow Solutions logo',
            },
            menu: [
                {
                    id: "menu-1",
                    label: "Home",
                    url: "/home",
                },
                {
                    id: "menu-2",
                    label: "About Us",
                    url: "/about-us",
                },
                {
                    id: "menu-3",
                    label: "Services",
                    url: "/services",
                },
                {
                    id: "menu-4",
                    label: "Our Portfolio",
                    url: "/portfolio",
                },
                {
                    id: "menu-5",
                    label: "Contact Us",
                    url: "/contact-us",
                },
            ],
            contactUs: {
                address: "123 Innovation Street, Tech City, 456789",
                email: "contact@foregrowsolutions.com",
                phone: "+91 9876543210",
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
            title: "Empower Your Business with ForeGrow Solutions",
            subTitle: "Innovative Software, Reliable Results",
            description: "Unlock the full potential of your business with our cutting-edge software development services. From concept to deployment, we bring your ideas to life with expertise and innovation.",
            version: "v2",
            style: "CLASSIC",
            bannerData: [
                {
                    title: "Your Technology Partner for Success",
                    subTitle: "Building the Future, One Solution at a Time",
                    description: "We are dedicated to delivering top-notch software solutions tailored to meet your unique business needs. Explore our services and partner with us for a brighter tomorrow.",
                    image: {
                        id: '1',
                        imageSrc: 'https://images.unsplash.com/photo-1550439062-609e1531270e?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
                        imageAlt: 'Innovative Software Development',
                    },
                    modalProps: {
                        isOpen: true,
                        title: 'Unlocking Innovation in Every Line of Code',
                    }
                },
            ],
        },
    },
    {
        id: "143d8df3-49c7-4370-9e0e-0c5ef7a46f6b",
        name: "About Us",
        version: "v1",
        style: "MODERN",
        path: "index",
        data: {
            type: "AboutUs",
            id: "003",
            title: "About ForeGrow Solutions",
            subTitle: "Innovating the Future of Technology",
            description: "At ForeGrow Solutions, we are a dynamic and forward-thinking technology group specializing in delivering innovative software solutions tailored to meet the unique needs of businesses across various industries. Our mission is to empower organizations through cutting-edge technology and unparalleled expertise, ensuring they stay ahead in a rapidly evolving digital landscape. From custom software development and web applications to mobile solutions and cloud integration, we offer a comprehensive suite of services designed to drive efficiency and growth. Our dedicated team of professionals is committed to providing exceptional support and strategic insights to help our clients achieve their goals. Choose ForeGrow Solutions for your technology needs, and let's shape the future together.",
            version: "v1",
            style: "MODERN",
            images: [
                {
                    id: "1",
                    imageSrc: "https://images.unsplash.com/photo-1523908511403-7fc7b25592f4?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
                    imageAlt: "Team Collaboration",
                }
            ]
        }
    },
    {
        "id": "143d8df3-49c7-4370-9e0e-0c5ef7a46f6b",
        "name": "Software Development Portfolio",
        "version": "v1",
        "style": "MODERN",
        "path": "index",
        "data": {
            "type": "Portfolio",
            "id": "k",
            "title": "Our Software Development Portfolio",
            "subTitle": "Innovative Solutions for Your Business",
            "description": "At our software development company, we specialize in creating cutting-edge solutions that empower businesses and enhance user experiences.",
            "version": "v1",
            "style": "MODERN",
            "portfolios": [
                {
                    "id": 1,
                    "name": "Spring Boot Microservices",
                    "description": "Building scalable and resilient microservices using Spring Boot",
                    "imageSrc": "https://images.unsplash.com/photo-1453928582365-b6ad33cbcf64?q=80&w=2073&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
                    "imageAlt": "Java Spring Boot Microservices Architecture",
                    "href": "#",
                },
                {
                    "id": 2,
                    "name": "Angular Web Applications",
                    "description": "Creating dynamic and responsive web applications with Angular",
                    "imageSrc": "https://images.unsplash.com/photo-1426024120108-99cc76989c71?q=80&w=2074&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
                    "imageAlt": "Angular Web Application Development",
                    "href": "#",
                },
                {
                    "id": 3,
                    "name": "React Frontend Solutions",
                    "description": "Crafting interactive and modern user interfaces with React",
                    "imageSrc": "https://images.unsplash.com/photo-1416339442236-8ceb164046f8?q=80&w=2003&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
                    "imageAlt": "React Frontend Development",
                    "href": "#",
                },
                {
                    "id": 4,
                    "name": "Laravel Backend Solutions",
                    "description": "Building robust backend systems with Laravel framework",
                    "imageSrc": "https://images.unsplash.com/photo-1607799279861-4dd421887fb3?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
                    "imageAlt": "Laravel Backend Development",
                    "href": "#",
                },
                {
                    "id": 5,
                    "name": "Cloud Services with AWS",
                    "description": "Harnessing the power of AWS for scalable and secure cloud solutions",
                    "imageSrc": "https://plus.unsplash.com/premium_photo-1670168995865-3a515cf74ffd?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2070&q=80",
                    "imageAlt": "AWS Cloud Services",
                    "href": "#",
                },
                {
                    "id": 6,
                    "name": "UI/UX Design",
                    "description": "Optimizing office spaces with technology-driven solutions",
                    "imageSrc": "https://images.unsplash.com/photo-1634245482394-1bcf5ccffcc0?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
                    "imageAlt": "Smart Office Solutions",
                    "href": "#",
                }
            ]
        }
    },
    {
        "id": "143d8df3-49c7-4370-9e0e-0c5ef7a46f6b",
        "name": "Services",
        "version": "v1",
        "style": "MODERN",
        "path": "index",
        "data": {
            "type": "Service",
            "id": "k",
            "title": "Our Software Development Services",
            "subTitle": "Innovative Solutions for Your Digital Success",
            "description": "Empower your business with our comprehensive software development services. We specialize in creating cutting-edge solutions that cater to your unique needs, ensuring a seamless digital experience.",
            "version": "v1",
            "style": "MODERN",
            "services": [
                {
                    "id": 1,
                    "title": "Custom Software Development",
                    "body": "Tailor-made software solutions crafted to meet the specific requirements of your business, ensuring optimal performance and efficiency.",
                    "imageSrc": "https://example.com/custom-development-icon.jpg",
                    "imageAlt": "Custom Software Development Icon",
                },
                {
                    "id": 2,
                    "title": "Web Application Development",
                    "body": "Build robust and scalable web applications using the latest technologies, providing a seamless user experience across devices.",
                    "imageSrc": "https://example.com/web-app-development-icon.jpg",
                    "imageAlt": "Web Application Development Icon",
                },
                {
                    "id": 3,
                    "title": "Mobile App Development",
                    "body": "Create engaging and user-friendly mobile applications for iOS and Android platforms, reaching your audience wherever they are.",
                    "imageSrc": "https://example.com/mobile-app-development-icon.jpg",
                    "imageAlt": "Mobile App Development Icon",
                },
                {
                    "id": 4,
                    "title": "Cloud Solutions with AWS",
                    "body": "Harness the power of AWS cloud services for scalable, secure, and flexible cloud solutions, ensuring your business stays ahead in the digital era.",
                    "imageSrc": "https://example.com/aws-cloud-solutions-icon.jpg",
                    "imageAlt": "Cloud Solutions with AWS Icon",
                },
                {
                    "id": 5,
                    "title": "UI/UX Design",
                    "body": "Craft visually appealing and intuitive user interfaces, enhancing user satisfaction and creating a positive brand perception.",
                    "imageSrc": "https://example.com/ui-ux-design-icon.jpg",
                    "imageAlt": "UI/UX Design Icon",
                }
            ]
        }
    },
    {
        "id": "143d8df3-49c7-4370-9e0e-0c5ef7a46f6b",
        "name": "Service",
        "version": "v2",
        "style": "MODERN",
        "path": "index",
        "data": {
            "type": "Testimonial",
            "id": "k",
            "title": "Client Testimonials",
            "subTitle": "Our Clients Speak",
            "description": "See what our clients have to say about their experiences working with us.",
            "version": "v2",
            "style": "MODERN",
            "testimonials": [
                {
                    "id": "1",
                    "name": "Alexandra Rodriguez",
                    "designation": "CEO, Tech Innovators",
                    "imageSrc": "https://images.unsplash.com/photo-1494790108377-be9c29b29330?q=80&w=1887&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
                    "imageAlt": "Alexandra Rodriguez, CEO",
                    "testimonial": "Working with this software development team was a game-changer for our business. Their innovative solutions and dedication to excellence truly exceeded our expectations. We look forward to future collaborations."
                },
                {
                    "id": "2",
                    "name": "Michael Chen",
                    "designation": "CTO, Data Dynamics",
                    "imageSrc": "https://images.unsplash.com/photo-1500648767791-00dcc994a43e?q=80&w=1887&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
                    "imageAlt": "Michael Chen, CTO",
                    "testimonial": "I've been consistently impressed with the professionalism and technical expertise of this team. They delivered a complex project ahead of schedule and ensured that every aspect met our high standards. Highly recommend their services."
                },
                {
                    "id": "3",
                    "name": "Emily Thompson",
                    "designation": "COO, E-Commerce Solutions",
                    "imageSrc": "https://images.unsplash.com/photo-1555168945-6c11dbe1bb67?q=80&w=1950&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
                    "imageAlt": "Emily Thompson, COO",
                    "testimonial": "The collaboration with this software company has been exceptional. Their communication, attention to detail, and ability to adapt to changing requirements make them stand out. A reliable partner for any software development needs."
                },
                {
                    "id": "4",
                    "name": "Christopher Davis",
                    "designation": "Founder, StartTech Ventures",
                    "imageSrc": "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?q=80&w=1887&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
                    "imageAlt": "Christopher Davis, Founder",
                    "testimonial": "Choosing this software development team was one of the best decisions for our startup. They brought our vision to life with a scalable and efficient solution. Their commitment to client success is evident in every interaction."
                }
            ]
        }
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
                    title: "Elevate Your Business with Intelligent Software Solutions",
                    subTitle: "Leading the Digital Revolution",
                    description: "Embark on a journey of transformation with our advanced software development services. From concept to execution, we create intelligent solutions that propel your business into the future.",
                    image:
                    {
                        id: '1',
                        imageSrc: 'https://images.unsplash.com/photo-1510519138101-570d1dca3d66?q=80&w=2047&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
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
    // {
    //     "id": "143d8df3-49c7-4370-9e0e-0c5ef7a46f6b",
    //     "name": "Our-Team",
    //     "version": "v1",
    //     "style": "MODERN",
    //     "path": "index",
    //     "data": {
    //         "type": "OurTeam",
    //         "id": "k",
    //         "title": "Meet Our Team",
    //         "subTitle": "Passionate Professionals Driving Innovation",
    //         "description": "At [Your Company Name], our team is composed of passionate professionals who are at the forefront of driving innovation in the tech industry. We believe in collaboration, creativity, and a shared commitment to delivering exceptional software solutions. Get to know the individuals who make our company thrive.",
    //         "version": "v1",
    //         "style": "MODERN",
    //         "ourTeam": [
    //             {
    //                 "id": 1,
    //                 "name": "John Smith",
    //                 "role": "Frontend Developer",
    //                 "description": "Passionate about creating seamless user interfaces and enhancing user experiences.",
    //                 "imageSrc": "https://thumbs.dreamstime.com/b/flat-male-avatar-image-beard-hairstyle-businessman-profile-icon-vector-179285629.jpg",
    //                 "imageAlt": "John Smith, Frontend Developer"
    //             },
    //             {
    //                 "id": 2,
    //                 "name": "Alice Johnson",
    //                 "role": "Backend Developer",
    //                 "description": "Dedicated to building robust and scalable server-side applications for optimal performance.",
    //                 "imageSrc": "https://static.vecteezy.com/system/resources/previews/002/002/403/original/man-with-beard-avatar-character-isolated-icon-free-vector.jpg",
    //                 "imageAlt": "Alice Johnson, Backend Developer"
    //             },
    //             {
    //                 "id": 3,
    //                 "name": "Eva Rodriguez",
    //                 "role": "Business Analyst",
    //                 "description": "Analyzing and understanding client needs to translate them into effective software solutions.",
    //                 "imageSrc": "https://images.unsplash.com/photo-1522075469751-3a6694fb2f61?q=80&w=1780&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    //                 "imageAlt": "Eva Rodriguez, Business Analyst"
    //             },
    //             {
    //                 "id": 4,
    //                 "name": "David Chen",
    //                 "role": "Fullstack Developer",
    //                 "description": "Versatile developer with expertise in both frontend and backend technologies.",
    //                 "imageSrc": "https://images.unsplash.com/photo-1511367461989-f85a21fda167?q=80&w=1931&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    //                 "imageAlt": "David Chen, Fullstack Developer"
    //             },
    //             {
    //                 "id": 5,
    //                 "name": "Alice",
    //                 "role": "UI/UX Engineer",
    //                 "description": "Crafting visually appealing and user-friendly designs to enhance overall user satisfaction.",
    //                 "imageSrc": "https://static.vecteezy.com/system/resources/previews/002/002/403/original/man-with-beard-avatar-character-isolated-icon-free-vector.jpg",
    //                 "imageAlt": "Rahul, UI/UX Engineer"
    //             }
    //         ]
    //     }
    // },
    {
        "id": "143d8df3-49c7-4370-9e0e-0c5ef7a46f6b",
        "name": "Blog",
        "version": "v1",
        "style": "MODERN",
        "path": "index",
        "data": {
            "type": "Blog",
            "id": "k",
            "title": "Exploring Cutting-Edge Technologies",
            "subTitle": "Stay Informed and Innovate with Our Latest Insights",
            "description": "Dive into our blog to discover the latest trends and insights in microservices, Spring Boot, Laravel, React, Angular, and Flutter development. Empower your projects with the right technologies!",
            "version": "v1",
            "style": "MODERN",
            "blogs": [
                {
                    "id": "2",
                    "title": "Microservices Architecture: Revolutionizing Software Development",
                    "description": "Explore the benefits and challenges of adopting a microservices architecture for scalable and efficient software development.",
                    "descriptionContext": "Discover how microservices can revolutionize the way you build and deploy software solutions.",
                    "imageSrc": "https://images.unsplash.com/photo-1626942589313-7b5c0fe3f5b4?q=80&w=1974&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
                    "imageAlt": "Image Alt Text Here"
                },
                {
                    "id": "3",
                    "title": "Mastering Spring Boot for Robust Java Applications",
                    "description": "Enhance your Java development skills by mastering the powerful and efficient Spring Boot framework.",
                    "descriptionContext": "Learn how to build robust and scalable Java applications with Spring Boot's innovative features.",
                    "imageSrc": "https://images.unsplash.com/photo-1504805572947-34fad45aed93?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1pYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto.format&fit=crop&w=1170&q=80",
                    "imageAlt": "Image Alt Text Here"
                },
                {
                    "id": "4",
                    "title": "Laravel: Crafting Elegant PHP Applications",
                    "description": "Discover the elegance and simplicity of Laravel for PHP development. Build modern and feature-rich applications with ease.",
                    "descriptionContext": "Explore Laravel's features and best practices for creating elegant and maintainable PHP applications.",
                    "imageSrc": "https://images.unsplash.com/photo-1523341139367-9de570b874ed?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1pYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1170&q=80",
                    "imageAlt": "Image Alt Text Here"
                },
                {
                    "id": "5",
                    "title": "Building Dynamic Web Apps with React and Angular",
                    "description": "Explore the world of React and Angular to build dynamic and interactive web applications that provide a seamless user experience.",
                    "descriptionContext": "Learn best practices for developing modern web applications with React and Angular frameworks.",
                    "imageSrc": "https://images.unsplash.com/photo-1575370378730-4e9d0acd572a?auto=format&fit=crop&q=80&w=1776&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
                    "imageAlt": "Image Alt Text Here"
                },
                {
                    "id": "6",
                    "title": "Flutter: Cross-Platform App Development Simplified",
                    "description": "Delve into the world of Flutter for building beautiful and natively compiled applications for mobile, web, and desktop from a single codebase.",
                    "descriptionContext": "Discover the power of Flutter in simplifying cross-platform app development and creating stunning user interfaces.",
                    "imageSrc": "https://images.unsplash.com/photo-1551582045-6ec9c11d8697?auto=format&fit=crop&q=80&w=1965&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
                    "imageAlt": "Image Alt Text Here"
                }
            ]
        }
    },
    {
        "id": "143d8df3-49c7-4370-9e0e-0c5ef7a46f6b",
        "name": "FAQ",
        "version": "v1",
        "style": "MODERN",
        "path": "index",
        "data": {
            "type": "FAQ",
            "id": "k",
            "title": "Frequently Asked Questions",
            "subTitle": "Have Questions? We Have Answers!",
            "description": "Explore our frequently asked questions to gain insights into our software development services. If you don't find what you're looking for, feel free to contact us directly.",
            "version": "v1",
            "style": "MODERN",
            "faqs": [
                {
                    "id": 1,
                    "question": "What technologies does your software development company specialize in?",
                    "answer": "We specialize in a range of cutting-edge technologies including Microservices, Spring Boot, Laravel, React, Angular, and Flutter. Our expertise allows us to deliver robust and scalable solutions tailored to your business needs."
                },
                {
                    "id": 2,
                    "question": "How can I initiate a software development project with your company?",
                    "answer": "Initiating a project with us is straightforward. Reach out to our team, discuss your project requirements, and we'll guide you through the process, from ideation to deployment. Our goal is to make the development journey seamless for you."
                },
                {
                    "id": 3,
                    "question": "What sets your software development services apart?",
                    "answer": "Our software development services stand out for their innovation, reliability, and a client-centric approach. We leverage the latest technologies to deliver solutions that not only meet but exceed our clients' expectations. Your success is our priority."
                },
                {
                    "id": 4,
                    "question": "Can you handle both front-end and back-end development?",
                    "answer": "Absolutely! Our team is equipped to handle both front-end and back-end development. Whether it's creating a user-friendly interface or ensuring the seamless functioning of your application, we've got you covered."
                },
                {
                    "id": 5,
                    "question": "How do you ensure the security of the software solutions you develop?",
                    "answer": "Security is a top priority for us. We follow industry best practices, conduct regular security audits, and implement robust measures to safeguard your software solutions against potential threats. Your data's security is non-negotiable."
                },
                // Add more FAQs as needed
            ]
        }
    },
    {
        id: "143d8df3-49c7-4370-9e0e-0c5ef7a46f6b",
        name: "ContactUs",
        version: "v1",
        style: "CLASSIC",
        path: "index",
        data: {
            type: "ContactUs",
            id: "k",
            title: "Get in Touch with Us",
            subTitle: "We'd Love to Hear from You!",
            description: "Reach out to us for any inquiries, feedback, or assistance. Our team is here to help you.",
            version: "v1",
            style: "CLASSIC",
            contactUs: {
                address: "H.no 221, Posh City, Sector 91, Landran, S.A.S.nagar Mohali, Punjab , India, 140307",
                email: "info@foregrowsolutions.com",
                phone: "+91 000000000",
                formFields: [
                    { name: 'name', label: 'Name', type: 'text', required: true },
                    { name: 'mobile', label: 'Mobile', type: 'tel', required: true },
                    { name: 'mobile', label: 'Message', type: 'textarea', required: true },
                ]
            },
        },
    },
    {
        id: "143d8df3-49c7-4370-9e0e-0c5ef7a46f6b",
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
                copyright: "foregrow Solutions",
            },
        },
    },
];

export const foregrowsolutionsSeo: any = {
    title: "Foregrow Solutions - Innovative Software Development & Cloud Expertise",
    description: "Foregrow Solutions empowers businesses with advanced software development services, specializing in frontend and backend technologies, cloud solutions (AWS, Azure, Google Cloud), and modern frameworks like .NET, Java, Node.js, React, Angular, and Next.js.",
    keywords: "software development, cloud solutions, frontend, backend, AWS, Azure, Google Cloud, .NET, Java, Node.js, React, Angular, Next.js, SQL, NoSQL, innovative solutions, digital transformation",
    tags: "software development, cloud computing, AWS, Azure, Google Cloud, frontend technologies, backend technologies, .NET, Java, Node.js, React, Angular, Next.js, SQL, NoSQL, modern business solutions",
    author: "Foregrow Solutions Team",
    imageUrl: "https://example.com/foregrow-og-image.jpg",
    siteUrl: "https://www.foregrowsolutions.com",
};
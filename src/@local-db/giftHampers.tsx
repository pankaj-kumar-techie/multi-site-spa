import { Section } from "../modal/Section";

export const gifthampersTheme: any = {
    name: "minimalist"
}

export const gifthampers: Section[] = [
    {
        id: "69e7ed7e-889d-41c0-a1d9-62bd150401e2",
        name: "Header",
        version: "v2",
        style: "MODERN",
        path: "index",
        data: {
            type: "Header",
            id: "001",
            title: "Customized Gift Hampers",
            subTitle: "For Every Occasion",
            description: "Explore our unique, handcrafted gift hampers tailored to enhance your special moments and celebrations. Perfect for birthdays, anniversaries, weddings, and more.",
            version: "v2",
            style: "MODERN",
            logo: {
                id: '1',
                imageSrc: 'https://example.com/logo.jpg',
                imageAlt: 'Customized Gift Hampers Logo',
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
                    label: "Our Hampers",
                    url: "/hampers",
                }, {
                    id: "menu-4",
                    label: "Contact Us",
                    url: "/contact-us",
                },
            ],
            contactUs: {
                address: "",
                email: "contact@gifthampers.com",
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
            title: "Customized Gift Hampers for Every Occasion",
            subTitle: "Perfectly Crafted with Love",
            description: "Discover the joy of giving with our personalized gift hampers, designed to make every occasion memorable. Celebrate with our unique selections!",
            version: "v2",
            style: "CLASSIC",
            bannerData: [
                {
                    title: "Your Perfect Gift Awaits",
                    subTitle: "Tailored Just for You",
                    description: "We specialize in creating beautiful and unique gift hampers that cater to your specific needs. Explore our collection today!",
                    image: {
                        id: '1',
                        imageSrc: 'https://img.freepik.com/free-psd/black-friday-promotion-design-isolated_23-2150883222.jpg?t=st=1724185699~exp=1724189299~hmac=4b35386f354906c1664495467bf362a59121b9ce7fba63b5f0dc0a09cf589bf1&w=996',
                        imageAlt: 'Beautiful Gift Hampers',
                    },
                    modalProps: {
                        isOpen: true,
                        title: 'Creating Joyful Moments',
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
            title: "About Customized Gift Hampers",
            subTitle: "Crafting Joy, One Hamper at a Time",
            description: "At Customized Gift Hampers, we believe that every gift tells a story. Our mission is to provide high-quality, handcrafted hampers that cater to the unique preferences of our customers. Whether it's a birthday, wedding, or any special occasion, we are here to help you celebrate in style.\n\nWe take pride in curating each hamper with love and attention to detail, selecting the finest products that reflect your sentiments and the essence of the occasion. Our hampers are not just gifts; they are a collection of memories, thoughtfully designed to bring smiles to your loved ones.\n\nOur team of skilled artisans collaborates closely with you to understand your vision, ensuring that every hamper is a true representation of your thoughtfulness. From gourmet treats and luxurious spa items to personalized keepsakes, we offer a diverse range of options to create a one-of-a-kind gift.\n\nAt Customized Gift Hampers, we are committed to sustainability, sourcing our materials ethically and using eco-friendly packaging to minimize our environmental impact. Join us in celebrating life’s special moments with hampers that leave a lasting impression and create unforgettable experiences.",
            version: "v1",
            style: "MODERN",
            images: [
                {
                    id: "1",
                    imageSrc: "https://namhyafoods.com/cdn/shop/files/7_0fa411a7-6034-4184-8e60-cc0d8216ec85.jpg?v=1698733099&width=1445",
                    imageAlt: "Handcrafted Gift Hampers",
                }
            ]
        }
    },
    {
        id: "143d8df3-49c7-4370-9e0e-0c5ef7a46f6b",
        name: "Hampers Portfolio",
        version: "v1",
        style: "MODERN",
        path: "index",
        data: {
            type: "Portfolio",
            id: "k",
            title: "Our Customized Hampers",
            subTitle: "Unique Selections for Every Occasion",
            description: "Explore our diverse range of handcrafted gift hampers, each designed to bring joy and create lasting memories.",
            version: "v1",
            style: "MODERN",
            portfolios: [
                {
                    id: 1,
                    name: "Birthday Bliss",
                    description: "A delightful hamper filled with sweet treats and birthday surprises.",
                    imageSrc: "https://cdnjs.angroos.com/wp-content/uploads/2021/07/003-10.jpg",
                    imageAlt: "Birthday Gift Hamper",
                    href: "#",
                },
                {
                    id: 2,
                    name: "Wedding Wishes",
                    description: "Celebrate love with our elegant wedding gift hamper.",
                    imageSrc: "https://corporates.giftsbyrashi.com/wp-content/uploads/2021/12/couple-gift-hamper-scaled-1-scaled.jpg",
                    imageAlt: "Wedding Gift Hamper",
                    href: "#",
                },
                {
                    id: 3,
                    name: "Anniversary Love",
                    description: "Show your affection with a romantic anniversary hamper.",
                    imageSrc: "https://cdnjs.angroos.com/wp-content/uploads/2021/07/001-127-scaled-scaled.jpg",
                    imageAlt: "Anniversary Gift Hamper",
                    href: "#",
                },
                {
                    id: 4,
                    name: "Festive Cheer",
                    description: "Bring joy to the festivities with our specially curated festive hampers.",
                    imageSrc: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQwZUZWlUeecP7MNJp7OmqU3KFdBKbIJJTSFA&s",
                    imageAlt: "Festive Gift Hamper",
                    href: "#",
                },
                {
                    id: 5,
                    name: "Corporate Gifts",
                    description: "Impress your clients with our professional corporate gift hampers.",
                    imageSrc: "https://m.media-amazon.com/images/I/71bN9TetSoL._AC_UF1000,1000_QL80_.jpg",
                    imageAlt: "Corporate Gift Hamper",
                    href: "#",
                },
                {
                    id: 6,
                    name: "Thank You Hampers",
                    description: "Express your gratitude with our thoughtful thank you hampers.",
                    imageSrc: "https://i.etsystatic.com/17680936/r/il/c6b09b/3511212560/il_570xN.3511212560_m44q.jpg",
                    imageAlt: "Thank You Gift Hamper",
                    href: "#",
                }
            ]
        }
    },
    {
        id: "143d8df3-49c7-4370-9e0e-0c5ef7a46f6b",
        name: "Services",
        version: "v1",
        style: "MODERN",
        path: "index",
        data: {
            type: "Service",
            id: "k",
            title: "Our Gifting Services",
            subTitle: "Personalized Touch for Every Occasion",
            description: "Our services include custom hamper design, delivery, and corporate gifting solutions. We ensure a seamless experience from selection to delivery.",
            version: "v1",
            style: "MODERN",
            services: [
                {
                    id: 1,
                    title: "Custom Hamper Design",
                    body: "We create personalized hampers tailored to your specifications, ensuring a unique gifting experience.",
                    imageSrc: "https://cdn-icons-png.flaticon.com/512/3778/3778557.png",
                    imageAlt: "Custom Hamper Design Icon",
                },
                {
                    id: 2,
                    title: "Corporate Gifting Solutions",
                    body: "Impress your clients and employees with our tailored corporate gift hampers.",
                    imageSrc: "https://img.freepik.com/premium-vector/gift-box-icon-vector-logo-template_917138-1378.jpg",
                    imageAlt: "Corporate Gifting Icon",
                },
                {
                    id: 3,
                    title: "Delivery Services",
                    body: "We offer reliable delivery options to ensure your hampers arrive on time and in perfect condition.",
                    imageSrc: "https://static.vecteezy.com/system/resources/previews/033/261/921/original/delivery-service-icon-express-delivery-truck-icon-illustration-vector.jpg",
                    imageAlt: "Delivery Services Icon",
                }
            ]
        }
    },
    {
        id: "143d8df3-49c7-4370-9e0e-0c5ef7a46f6b",
        name: "Testimonials",
        version: "v1",
        style: "MODERN",
        path: "index",
        data: {
            type: "Testimonial",
            id: "k",
            title: "Client Testimonials",
            subTitle: "What Our Customers Say",
            description: "Discover how our customized gift hampers have brought joy to our customers.",
            version: "v1",
            style: "MODERN",
            testimonials: [
                {
                    id: "1",
                    name: "Anjali Mehta",
                    designation: "Happy Customer",
                    imageSrc: "https://images.unsplash.com/photo-1507043902064-56a98c85c8c5?q=80&w=1887&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
                    imageAlt: "Anjali Mehta, Happy Customer",
                    testimonial: "The gift hamper I ordered was beyond my expectations! It was beautifully presented and included all my favorite treats. Thank you for making my birthday special!"
                },
                {
                    id: "2",
                    name: "Rahul Sharma",
                    designation: "Corporate Client",
                    imageSrc: "https://images.unsplash.com/photo-1512810882130-5cf5d5a5e1e2?q=80&w=1887&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
                    imageAlt: "Rahul Sharma, Corporate Client",
                    testimonial: "We ordered customized gift hampers for our employees and clients, and the feedback was phenomenal. Exceptional quality and service!"
                },
                {
                    id: "3",
                    name: "Priya Singh",
                    designation: "Grateful Customer",
                    imageSrc: "https://images.unsplash.com/photo-1522199713115-0f5456d4d123?q=80&w=1887&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
                    imageAlt: "Priya Singh, Grateful Customer",
                    testimonial: "I was thrilled with the anniversary hamper I received! It was filled with lovely items that made my day extra special."
                }
            ]
        }
    },
    {
        "id": "143d8df3-49c7-4370-9e0e-0c5ef7a46f6b",
        "name": "Blog",
        "version": "v1",
        "style": "MODERN",
        "path": "index",
        "data": {
            "type": "Blog",
            "id": "k",
            "title": "The Art of Gift Giving",
            "subTitle": "Inspiring Ideas for Personalized Gifting",
            "description": "Dive into our blog to explore tips, trends, and creative ideas for gift giving. Discover how to make your gifts memorable with our customized hampers!",
            "version": "v1",
            "style": "MODERN",
            "blogs": [
                {
                    "id": "1",
                    "title": "The Benefits of Personalized Gifts",
                    "description": "Explore why personalized gifts make a lasting impression and how they can strengthen relationships.",
                    "descriptionContext": "Learn how a thoughtful, customized gift can create unforgettable moments.",
                    "imageSrc": "https://d3edcl142d7grd.cloudfront.net/flowers-n-gifts/vendordata/product/special-gift-hamper-for-birthday-with-photo-frame-mug-chocolates1.jpg",
                    "imageAlt": "Personalized Gift"
                },
                {
                    "id": "2",
                    "title": "Creative Ideas for Customized Gift Hampers",
                    "description": "Discover innovative ideas to create unique and memorable gift hampers for any occasion.",
                    "descriptionContext": "Get inspired with themes and items that will delight your loved ones.",
                    "imageSrc": "https://giftsbyrashi.com/wp-content/uploads/2022/06/Unique-Gift-Hamper-for-Brother1.jpeg",
                    "imageAlt": "Creative Gift Hampers"
                },
                {
                    "id": "3",
                    "title": "The Perfect Gift for Every Occasion",
                    "description": "Learn how to choose the right gift hamper for birthdays, weddings, and holidays.",
                    "descriptionContext": "Navigate the world of gifting with confidence and find the perfect match for your loved ones.",
                    "imageSrc": "https://i0.wp.com/thegifttree.in/gifthampers/wp-content/uploads/2023/04/TGT-WT-101-1copy-scaled-1.webp?fit=1024%2C1024&ssl=1",
                    "imageAlt": "Gift for Every Occasion"
                },
                {
                    "id": "4",
                    "title": "Sustainable Gifting: Eco-Friendly Options",
                    "description": "Explore how to create eco-friendly gift hampers that are kind to the planet.",
                    "descriptionContext": "Learn about sustainable practices and products that make gifting more responsible.",
                    "imageSrc": "https://thebamboobae.com/cdn/shop/products/39-2.jpg?v=1663762056&width=1445",
                    "imageAlt": "Eco-Friendly Gifts"
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
            "description": "Explore our frequently asked questions to gain insights into our customized gift hampers. If you don't find what you're looking for, feel free to contact us directly.",
            "version": "v1",
            "style": "MODERN",
            "faqs": [
                {
                    "id": 1,
                    "question": "What types of occasions can I order a customized gift hamper for?",
                    "answer": "Our customized gift hampers are perfect for a variety of occasions, including birthdays, weddings, anniversaries, holidays, and corporate events. Whatever the celebration, we have a hamper to suit your needs."
                },
                {
                    "id": 2,
                    "question": "Can I personalize the items in my gift hamper?",
                    "answer": "Absolutely! We encourage personalization to make your gift extra special. You can choose specific items or themes based on the recipient's preferences."
                },
                {
                    "id": 3,
                    "question": "How do I place an order for a customized gift hamper?",
                    "answer": "Placing an order is easy! Simply visit our website, select your desired hamper options, and follow the checkout process. If you have special requests, you can contact our customer service team for assistance."
                },
                {
                    "id": 4,
                    "question": "What is the delivery process for the gift hampers?",
                    "answer": "We offer reliable delivery services to ensure your gift hampers arrive on time. You can select a delivery date during checkout, and we’ll handle the rest!"
                },
                {
                    "id": 5,
                    "question": "Do you offer corporate gifting options?",
                    "answer": "Yes, we provide customized hampers for corporate gifting. Whether it's for employee appreciation, client gifts, or promotional events, we can create hampers that reflect your brand."
                },
                // Add more FAQs as needed
            ]
        }
    },
    {
        id: "143d8df3-49c7-4370-9e0e-0c5ef7a46f6b",
        name: "Contact Us",
        version: "v1",
        style: "MODERN",
        path: "index",
        data: {
            type: "Contact",
            id: "k",
            title: "Get in Touch",
            subTitle: "We'd Love to Hear from You!",
            description: "Have questions or need assistance? Reach out to us, and we will get back to you as soon as possible.",
            version: "v1",
            style: "MODERN",
            contactUs: {
                address: "Himachal Pradesh",
                email: "pahariyatri@gmail.com",
                phone: "+91 9569576707",
                formFields: [
                    { name: 'name', label: 'Name', type: 'text', required: true },
                    { name: 'mobile', label: 'Mobile', type: 'tel', required: true },
                ]
            },
        }
    }
];

export const loondsSeo: any = {
    title: "Loonds - Innovative Software Solutions for Modern Businesses",
    description: "Empower your business with Loonds' cutting-edge software development services. We specialize in delivering innovative solutions, from microservices and Spring Boot to Laravel, React, Angular, and Flutter.",
    keywords: "software development, innovative solutions, microservices, Spring Boot, Laravel, React, Angular, Flutter, technology services, digital transformation",
    tags: "software development, microservices, Spring Boot, Laravel, React, Angular, Flutter, technology solutions, digital innovation, modern business",
    author: "Your Name",
    imageUrl: "https://example.com/og-image.jpg",
    siteUrl: "https://www.loonds.com",
};
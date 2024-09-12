import { PluginConfig } from "../modal/PluginConfig";
import { Section } from "../modal/Section";

export const kalaByHimaniTheme: any = {
    name: "transparent"
}

export const kalaByHimani: Section[] = [
    {
        id: "69e7ed7e-889d-41c0-a1d9-62bd150401e2",
        name: "Header",
        version: "v3",
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
                imageSrc: 'https://i.pinimg.com/736x/eb/ae/bd/ebaebdb67546e8f9bc2c1a6b34844c9a.jpg',
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
                email: "contact@kalaByHimani.com",
                phone: "+91 1234567890",
            },
        },
    },
    {
        id: "69e7ed7e-889d-41c0-a1d9-62bd150401e2",
        name: "Hero banner",
        version: "v3",
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
                    subTitle: "Perfectly Crafted with Love",
                    description: "We specialize in creating beautiful and unique gift hampers that cater to your specific needs. Explore our collection today!",
                    image: {
                        id: '1',
                        // imageSrc: 'https://i.pinimg.com/736x/eb/ae/bd/ebaebdb67546e8f9bc2c1a6b34844c9a.jpg',
                        imageSrc: "https://i.pinimg.com/736x/e0/63/29/e063299149106740aee5b9f0c1791a8d.jpg",
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
            title: "About Kala by Himani",
            subTitle: "Crafting Personalized Gifts with Love",
            description: "At Kala by Himani, we believe every gift tells a unique story. Our mission is to create high-quality, handcrafted gift hampers tailored to your individual tastes and special occasions. We celebrate life’s moments with personalized gifts that reflect love and thoughtfulness.\n\nOur skilled artisans collaborate with you to design hampers filled with delightful treats, custom cards, and meaningful keepsakes, ensuring each creation embodies your sentiments. Committed to sustainability, we source materials ethically and use eco-friendly packaging. Join us in crafting unforgettable experiences with our exquisite gift hampers.",
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
        name: "Diwali Gifts",
        version: "v1",
        style: "CLASSIC",
        path: "index",
        data: {
            type: "Product",
            id: "k",
            title: "Diwali Gifts!",
            subTitle: "Personalized Gift Hampers for Diwali Celebrations",
            description: "Celebrate the festival of lights with our exquisite range of handcrafted gift hampers. Each hamper is thoughtfully designed to bring joy and warmth to your loved ones, making your Diwali celebrations even more special.",
            version: "v1",
            style: "CLASSIC",
            products: [
                {
                    id: 1,
                    name: 'Diwali Delight Hamper',
                    href: '#',
                    description: 'A beautiful assortment of traditional sweets, decorative Diyas, and personalized notes, perfect for sharing love during Diwali.',
                    imageSrc: "https://example.com/path/to/diwali-delight-hamper.jpg", // Update with the actual image URL
                    imageAlt: 'Diwali Delight Hamper with sweets and Diyas.',
                },
                {
                    id: 2,
                    name: 'Festive Treats Hamper',
                    href: '#',
                    description: 'Indulge in a luxurious selection of gourmet treats, aromatic candles, and handcrafted cards to brighten up your festivities.',
                    imageSrc: "https://example.com/path/to/festive-treats-hamper.jpg", // Update with the actual image URL
                    imageAlt: 'Festive Treats Hamper with gourmet snacks and candles.',
                },
                {
                    id: 3,
                    name: 'Sweets & Lights Hamper',
                    href: '#',
                    description: 'This hamper combines the sweetness of traditional Indian sweets with the warmth of decorative lights, ideal for any Diwali gathering.',
                    imageSrc: "https://example.com/path/to/sweets-lights-hamper.jpg", // Update with the actual image URL
                    imageAlt: 'Sweets & Lights Hamper with sweets and decorative lights.',
                },
                // Add more Diwali-themed products as needed
            ],
        },
    },
    {
        id: "143d8df34370-9e0e-0c5ef7a46f6b",
        name: "Hampers Portfolio",
        version: "v1",
        style: "MODERN",
        path: "index",
        data: {
            type: "Portfolio",
            id: "k",
            title: "Our Customized Hampers",
            subTitle: "",
            description: "Explore our diverse range of handcrafted gift hampers, each designed to bring joy and create lasting memories. Perfect for every celebration, our hampers are crafted with love and thoughtfulness.",
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
            subTitle: "",
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
        version: "v2",
        style: "MODERN",
        path: "index",
        data: {
            type: "Testimonial",
            id: "k",
            title: "Client Testimonials",
            subTitle: "",
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
                },
                {
                    "id": "5",
                    "title": "Trendy Gift Hampers for 2024",
                    "description": "Stay ahead of the curve with the latest trends in gift hampers for 2024.",
                    "descriptionContext": "Discover the most sought-after themes and items to include in your hampers this year.",
                    "imageSrc": "https://images.unsplash.com/photo-1580279691283-54b7bce1fba4?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=MnwzNjUyOXwwfDF8c2VhcmNofDd8fGdpZnR8ZW58MHx8fHwxNjA2OTI2NjA0&ixlib=rb-1.2.1&q=80&w=1080",
                    "imageAlt": "Trendy Gift Hampers"
                },
                {
                    "id": "6",
                    "title": "Tips for Curating the Perfect Gift Hamper",
                    "description": "Learn essential tips for selecting the best items to include in your customized gift hampers.",
                    "descriptionContext": "From themes to personal touches, discover how to make your hampers stand out.",
                    "imageSrc": "https://images.unsplash.com/photo-1579408527232-bb5020b659c3?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=MnwzNjUyOXwwfDF8c2VhcmNofDl8fGdpZnR8ZW58MHx8fHwxNjA2OTI2NzE1&ixlib=rb-1.2.1&q=80&w=1080",
                    "imageAlt": "Curating Gift Hampers"
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

export const kalaByHimaniContactUs: Section[] = [
    {
        id: "69e7ed7e-889d-41c0-a1d9-62bd150401e2",
        name: "Header",
        version: "v3",
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
                imageSrc: 'https://i.pinimg.com/736x/eb/ae/bd/ebaebdb67546e8f9bc2c1a6b34844c9a.jpg',
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
                email: "contact@kalaByHimani.com",
                phone: "+91 1234567890",
            },
        },
    },
    {
        id: "69e7ed7e-889d-41c0-a1d9-62bd150401e2",
        name: "Hero banner",
        version: "v3",
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
                    subTitle: "Perfectly Crafted with Love",
                    description: "We specialize in creating beautiful and unique gift hampers that cater to your specific needs. Explore our collection today!",
                    image: {
                        id: '1',
                        // imageSrc: 'https://i.pinimg.com/736x/eb/ae/bd/ebaebdb67546e8f9bc2c1a6b34844c9a.jpg',
                        imageSrc: "https://i.pinimg.com/736x/e0/63/29/e063299149106740aee5b9f0c1791a8d.jpg",
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
            title: "About Kala by Himani",
            subTitle: "Crafting Personalized Gifts with Love",
            description: "At Kala by Himani, we believe every gift tells a unique story. Our mission is to create high-quality, handcrafted gift hampers tailored to your individual tastes and special occasions. We celebrate life’s moments with personalized gifts that reflect love and thoughtfulness.\n\nOur skilled artisans collaborate with you to design hampers filled with delightful treats, custom cards, and meaningful keepsakes, ensuring each creation embodies your sentiments. Committed to sustainability, we source materials ethically and use eco-friendly packaging. Join us in crafting unforgettable experiences with our exquisite gift hampers.",
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

export const kalaByHimaniAboutUs: Section[] = [
    {
        id: "69e7ed7e-889d-41c0-a1d9-62bd150401e2",
        name: "Header",
        version: "v3",
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
                imageSrc: 'https://i.pinimg.com/736x/eb/ae/bd/ebaebdb67546e8f9bc2c1a6b34844c9a.jpg',
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
                email: "contact@kalaByHimani.com",
                phone: "+91 1234567890",
            },
        },
    },
    {
        id: "69e7ed7e-889d-41c0-a1d9-62bd150401e2",
        name: "Hero banner",
        version: "v3",
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
                    subTitle: "Perfectly Crafted with Love",
                    description: "We specialize in creating beautiful and unique gift hampers that cater to your specific needs. Explore our collection today!",
                    image: {
                        id: '1',
                        // imageSrc: 'https://i.pinimg.com/736x/eb/ae/bd/ebaebdb67546e8f9bc2c1a6b34844c9a.jpg',
                        imageSrc: "https://i.pinimg.com/736x/e0/63/29/e063299149106740aee5b9f0c1791a8d.jpg",
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
            title: "About Kala by Himani",
            subTitle: "Crafting Personalized Gifts with Love",
            description: "At Kala by Himani, we believe every gift tells a unique story. Our mission is to create high-quality, handcrafted gift hampers tailored to your individual tastes and special occasions. We celebrate life’s moments with personalized gifts that reflect love and thoughtfulness.\n\nOur skilled artisans collaborate with you to design hampers filled with delightful treats, custom cards, and meaningful keepsakes, ensuring each creation embodies your sentiments. Committed to sustainability, we source materials ethically and use eco-friendly packaging. Join us in crafting unforgettable experiences with our exquisite gift hampers.",
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
   
];

export const kalaByHimaniSeo: any = {
    title: "KBH - Personalized Gift Hampers for Every Occasion",
    description: "Explore our handcrafted gift hampers and custom cards at Kala by Himani. Perfect for birthdays, weddings, anniversaries, and festivals, each gift is tailored to create unforgettable memories for your loved ones.",
    keywords: "personalized gift hampers, custom cards, handmade gifts, birthday gifts, wedding gifts, anniversary gifts, festival gifts, unique gifting solutions, eco-friendly gifts, quilling cards, scrapbooks, bespoke gifting",
    tags: "personalized gifts, handmade hampers, unique gifts, special occasions, eco-friendly gifting, custom cards, memorable gifts, gifting solutions, Kala by Himani, quilling art",
    author: "Himani",
    imageUrl: "https://example.com/og-image.jpg",
    siteUrl: "https://www.kalabyhimani.com", // Ensure this matches your actual website URL
};


export const kalaByHimaniPlugin: PluginConfig[] = [
    {
        name: "FloatingButton",
        isActive: true,
        data: {
            mobile: "8699094033",
            text: "Hello Himani! 🎁 I’m interested in your gift hampers. Can you share more details? Thanks! 😊",
        },
    }
];

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
                imageSrc: 'https://i.pinimg.com/736x/e0/63/29/e063299149106740aee5b9f0c1791a8d.jpg',
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
                    url: "/products",
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
                    title: "Customised Gift Hampers For You",
                    subTitle: "Beautifully Curated Gift Hampers.",
                    description: "Our gifting experience for customers is easy, enjoyable, and hassle-free because all gift items are curated and presented in aesthetic hampers that are ready for shipping.",
                    buttonLevel: 'View Collection',
                    buttonLink: "#portfolio",
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
                    imageSrc: "https://i.pinimg.com/originals/88/17/ec/8817ec1d3067563082291428c2769212.jpg",
                    imageAlt: "Himani Sharma",
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
                    name: 'Exquisite Diwali Gift Hamper',
                    href: 'https://forms.gle/6nc85WLhJhwZzges6',
                    description: 'Celebrate the festival of lights with our Exquisite Diwali Gift Hamper! This beautifully curated hamper includes premium dry fruits, handmade cookies, rich chocolates, and a personalized greeting card. Perfect for sharing joy and gratitude with family and friends during Diwali.',
                    imageSrc: "https://i.pinimg.com/736x/56/fb/fa/56fbfaa7c218b6c1332d2d6080b322c2.jpg",
                    imageAlt: 'Exquisite Diwali Gift Hamper',
                },
                {
                    id: 2,
                    name: 'Traditional Diwali Celebration Hamper',
                    href: 'https://forms.gle/6nc85WLhJhwZzges6',
                    description: 'Embrace the spirit of Diwali with our Traditional Diwali Celebration Hamper! This vibrant set includes aromatic candles, colorful diyas, festive sweets, and a personalized greeting card, making it a delightful gift for loved ones.',
                    imageSrc: "https://i.pinimg.com/564x/09/81/db/0981dbae56244769205c547559170364.jpg", // Update with the actual image URL
                    imageAlt: 'Traditional Diwali Celebration Hamper',
                },
                {
                    id: 3,
                    name: ' Diwali Corporate Gift Hamper',
                    href: 'https://forms.gle/6nc85WLhJhwZzges6',
                    description: 'Impress your clients and colleagues with our  Diwali Corporate Gift Hamper. This premium hamper features gourmet treats, elegant packaging, and a custom greeting card, making it the perfect gesture of appreciation during the festive season.',
                    imageSrc: "https://i.pinimg.com/564x/2d/ab/f2/2dabf233f485dc40520d87ce1319c441.jpg", // Update with the actual image URL
                    imageAlt: ' Diwali Corporate Gift Hamper',
                },
                // Add more Diwali-themed products as needed
            ],
        },
    },
    {
        id: "143d8df34370-9e0e-0c5ef7a46f6b",
        name: "Hampers Portfolio",
        version: "v3",
        style: "MODERN",
        path: "index",
        data: {
            type: "Product",
            id: "k",
            title: "Celebrate with Customized Hampers",
            subTitle: "",
            description: "Discover our festive hampers for Karvachauth, Diwali, Bhai Dooj, Christmas, and New Year. Each carefully curated gift from Kala By Himani tells a story, combining handmade elegance with personalization for every celebration.",
            version: "v1",
            style: "MODERN",
            products: [
                {
                    id: 1,
                    name: "Karvachauth Sargi Hamper",
                    description: "Delight your Mother-in-law or Daughter-in-law with a beautifully curated Karvachauth hamper. This festive collection includes customized baskets, dry fruits, and decorative items to celebrate the occasion.",
                    imageSrc: "https://i.pinimg.com/564x/9c/42/3e/9c423e1bd35ffac57010479a13c237a5.jpg",
                    imageAlt: "Karvachauth Sargi Hamper",
                    href: "https://forms.gle/6nc85WLhJhwZzges6",
                    price: '₹1,400',
                },
                {
                    id: 2,
                    name: "Diwali Delight Hamper",
                    description: "Surprise the bride-to-be with a beautifully curated wedding hamper. This elegant collection includes handmade jhumkas, perfume, and an evil eye wind chime, designed to wish her love and happiness.",
                    imageSrc: "https://corporates.giftsbyrashi.com/wp-content/uploads/2021/12/couple-gift-hamper-scaled-1-scaled.jpg",
                    imageAlt: "Diwali Delight Hamper",
                    href: "https://forms.gle/6nc85WLhJhwZzges6",
                    price: '₹999',
                },
                {
                    id: 3,
                    name: "Bhai Dooj Special Hamper",
                    description: "Description: Strengthen the bond with your brother this Bhai Dooj with a personalized hamper filled with love and treats.",
                    imageSrc: "https://i.pinimg.com/564x/2d/40/4c/2d404ca39850f798c7aedbfbaa546c0f.jpg",
                    imageAlt: "Bhai Dooj Special Hamper",
                    href: "https://forms.gle/6nc85WLhJhwZzges6",
                    price: '₹799',
                },
                {
                    id: 4,
                    name: "Christmas Cheer Hamper",
                    description: "Share the joy of Christmas with our festive hamper, filled with delightful treats for family and friends. ",
                    imageSrc: "https://i.pinimg.com/564x/6b/31/ef/6b31efc43b20c96c95465aa5ddb89d97.jpg",
                    imageAlt: "Christmas Cheer Hamper",
                    href: "https://forms.gle/6nc85WLhJhwZzges6",
                    price: '₹3,500',
                },
                {
                    id: 5,
                    name: "New Year Celebration Hamper",
                    description: "Welcome the New Year with a bang! Our festive hamper is designed to kickstart your celebrations.",
                    imageSrc: "https://i.pinimg.com/564x/34/5b/87/345b879451f2b11586e331d0716c0f27.jpg",
                    imageAlt: "New Year Celebration Hamper",
                    href: "https://forms.gle/6nc85WLhJhwZzges6",
                    price: '₹2,200',
                },
            ]
        }
    },
    {
        id: "143d8df34370-9e0e-0c5ef7a46f6b",
        name: "Hampers Portfolio",
        version: "v2",
        style: "MODERN",
        path: "index",
        data: {
            type: "Product",
            id: "k",
            title: "Our Customized Hampers",
            subTitle: "",
            description: "We source our gift items from top companies and premium brands to ensure high quality. Providing various products that encourage personal growth and mindfulness, we believe gifts should be meaningful and intentional.",
            version: "v1",
            style: "MODERN",
            products: [
                {
                    id: 1,
                    name: "Wedding Hamper for Couples",
                    description: "A luxurious wedding hamper tailored for couples, featuring customizable options. Includes personalized cups, aroma candles, and a selection of premium chocolates. Perfect for celebrating love on their big day.",
                    imageSrc: "https://corporates.giftsbyrashi.com/wp-content/uploads/2021/12/couple-gift-hamper-scaled-1-scaled.jpg",
                    imageAlt: "Birthday Gift Hamper",
                    href: "https://forms.gle/6nc85WLhJhwZzges6",
                    price: '₹2,400',
                    oldPrice: '₹2,800',
                    discount: '40',

                },
                {
                    id: 2,
                    name: "Best Friend Wedding Hamper",
                    description: "Surprise the bride-to-be with a beautifully curated wedding hamper. This elegant collection includes handmade jhumkas, perfume, and an evil eye wind chime, designed to wish her love and happiness.",
                    imageAlt: "Wedding Gift Hamper",
                    imageSrc: "https://i.pinimg.com/564x/3a/d9/c9/3ad9c938f08388f0a4028f3ed103538c.jpg",
                    href: "https://i.pinimg.com/originals/34/eb/34/34eb348ad215167acd1a952e8e19e44c.jpg",
                    price: '₹1,400',
                    oldPrice: '₹2,800',
                    discount: '40',
                },
                {
                    id: 3,
                    name: "Bride's Wedding Night Gift Hamper",
                    description: "Celebrate the bride’s wedding night with this exquisite hamper. Featuring a customized silver pendant, fragrance candles, and luxurious chocolates, it’s perfect for marking the beginning of a new union.",
                    imageSrc: "https://i.pinimg.com/originals/15/6e/60/156e601269fcb0e1a9aebd702b0b5f5f.jpg",
                    imageAlt: "Bride's Wedding Night Gift Hamper",
                    href: "https://forms.gle/6nc85WLhJhwZzges6",
                    price: '₹5,999  ',
                    oldPrice: '₹6,999',
                    discount: '10',
                },
                {
                    id: 4,
                    name: "Customized Birthday Hamper",
                    description: "A beautifully curated birthday hamper featuring chocolates, candles, and a personalized card. Ideal for a thoughtful and elegant gift to celebrate someone's special day. ",
                    imageSrc: "https://i.pinimg.com/originals/6b/e9/79/6be979c7106f3f1c6a50fd2248673554.jpg",
                    imageAlt: "Customized Birthday Hamper",
                    href: "https://forms.gle/6nc85WLhJhwZzges6",
                    price: '₹599',
                    oldPrice: '₹999',
                    discount: '49',
                },
                {
                    id: 5,
                    name: "Anniversary Celebration Hamper",
                    description: "Celebrate love with our customizable anniversary hampers. Each includes chocolates, cookies, and a personalized card to create memorable moments.  ",
                    imageSrc: "https://i.pinimg.com/originals/52/f7/be/52f7becd6c1a29a5822619f6d3da8e9f.png",
                    imageAlt: "Corporate Gift Hamper",
                    href: "https://forms.gle/6nc85WLhJhwZzges6",
                    price: '₹5,599',
                    oldPrice: '₹7,800',
                    discount: '48',
                },
                {
                    id: 6,
                    name: "Elegant Return Favor Hampers",
                    description: "Elevate your gift-giving experience with our personalized return favor hampers. Featuring unique items like customized cups, chocolates, and lollipops for every occasion.",
                    imageSrc: "https://i.pinimg.com/originals/72/cc/2c/72cc2c9645e890bee70f8ca8214f4513.png",
                    imageAlt: "Thank You Gift Hamper",
                    href: "https://forms.gle/6nc85WLhJhwZzges6",
                    price: '₹399',
                    oldPrice: '₹599',
                    discount: '18',
                },
                {
                    id: 7,
                    name: "Trousseau Packing Services",
                    description: "Experience customized trousseau packing tailored to your wedding preferences. Our services ensure a stunning presentation for all your bridal gifts. ",
                    imageSrc: "https://i.pinimg.com/originals/01/b1/73/01b173704ab29c37db5bba27e56b16d4.jpg",
                    imageAlt: "Thank You Gift Hamper",
                    href: "https://forms.gle/6nc85WLhJhwZzges6",
                    price: '₹3,999 ',
                    oldPrice: '₹5,500',
                    discount: '28',
                },
                {
                    id: 8,
                    name: "Customized Wedding In-Room Hampers",
                    description: "Create a memorable first impression with our customized wedding in-room hampers, filled with chocolates, dry fruits, and a personalized card.",
                    imageSrc: "https://i.pinimg.com/originals/6a/a9/49/6aa94932775cdbf298a1df23c388da40.jpg",
                    imageAlt: "Thank You Gift Hamper",
                    href: "https://forms.gle/6nc85WLhJhwZzges6",
                    price: '₹599',
                    oldPrice: '₹699',
                    discount: '10',
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
                    imageSrc: "data:image/png;base64,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",
                    imageAlt: "Anjali Mehta, Happy Customer",
                    testimonial: "The gift hamper I ordered was beyond my expectations! It was beautifully presented and included all my favorite treats. Thank you for making my birthday special!"
                },
                {
                    id: "2",
                    name: "Rahul Sharma",
                    designation: "Corporate Client",
                    imageSrc: "data:image/jpeg;base64,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",
                    imageAlt: "Rahul Sharma, Corporate Client",
                    testimonial: "We ordered customized gift hampers for our employees and clients, and the feedback was phenomenal. Exceptional quality and service!"
                },
                {
                    id: "3",
                    name: "Priya Singh",
                    designation: "Grateful Customer",
                    imageSrc: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQ8V40txbVR53xPKZJFqG2lfZnXRjwXIfWvCTLX2X7N4jdIC5-PWbqZyfbfRH6d_A9SI9g",
                    imageAlt: "Priya Singh, Grateful Customer",
                    testimonial: "I was thrilled with the anniversary hamper I received! It was filled with lovely items that made my day extra special."
                },
                {
                    id: "4",
                    name: "Pankaj Kumar",
                    designation: "Corporate Client",
                    imageSrc: "data:image/jpeg;base64,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",
                    imageAlt: "Rahul Sharma, Corporate Client",
                    testimonial: "We ordered customized gift hampers for our employees and clients, and the feedback was phenomenal. Exceptional quality and service!"
                },
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
                    "imageSrc": "https://i.pinimg.com/736x/3a/f9/5f/3af95f5dd7f68df7d82e0797ae0966e0.jpg",
                    "imageAlt": "Trendy Gift Hampers"
                },
                {
                    "id": "6",
                    "title": "Tips for Curating the Perfect Gift Hamper",
                    "description": "Learn essential tips for selecting the best items to include in your customized gift hampers.",
                    "descriptionContext": "From themes to personal touches, discover how to make your hampers stand out.",
                    "imageSrc": "https://i.pinimg.com/originals/aa/7f/7f/aa7f7f547455db703e0c78fec9a3ab71.jpg",
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
                    url: "/products",
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
                    { name: 'email', label: 'Email', type: 'email', required: true },
                    { name: 'mobile', label: 'Mobile', type: 'tel', required: true },
                    { name: 'message', label: 'Message', type: 'textarea', required: true },
                    {
                        name: 'servicesInterested',
                        label: 'Services Interested In',
                        type: 'select',
                        required: true,
                        options: [
                            { label: 'Birthdays', value: 'acp_installation' },
                            { label: 'Weddings', value: 'wooden_flooring' },
                            { label: 'Anniversaries', value: 'glass_solutions' },
                            { label: 'Corporate Events', value: 'ceiling_design' },
                            { label: 'Holidays (Diwali, New Year)', value: 'roof_solution' },
                            { label: 'Others', value: 'others' },
                        ],
                    },
                ]
            },
        }
    }
];

export const kalaByHimaniProductList: Section[] = [
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
                    url: "/products",
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
        id: "143d8df34370-9e0e-0c5ef7a46f6b",
        name: "Hampers Portfolio",
        version: "v2",
        style: "MODERN",
        path: "index",
        data: {
            type: "Product",
            id: "k",
            title: "Our Customized Hampers",
            subTitle: "",
            description: "We source our gift items from top companies and premium brands to ensure high quality. Providing various products that encourage personal growth and mindfulness, we believe gifts should be meaningful and intentional.",
            version: "v1",
            style: "MODERN",
            products: [
                {
                    id: 1,
                    name: "Wedding Hamper for Couples",
                    description: "A luxurious wedding hamper tailored for couples, featuring customizable options. Includes personalized cups, aroma candles, and a selection of premium chocolates. Perfect for celebrating love on their big day.",
                    imageSrc: "https://corporates.giftsbyrashi.com/wp-content/uploads/2021/12/couple-gift-hamper-scaled-1-scaled.jpg",
                    imageAlt: "Birthday Gift Hamper",
                    href: "https://forms.gle/6nc85WLhJhwZzges6",
                    price: '₹2,400',
                    oldPrice: '₹2,800',
                    discount: '40',

                },
                {
                    id: 2,
                    name: "Best Friend Wedding Hamper",
                    description: "Surprise the bride-to-be with a beautifully curated wedding hamper. This elegant collection includes handmade jhumkas, perfume, and an evil eye wind chime, designed to wish her love and happiness.",
                    imageAlt: "Wedding Gift Hamper",
                    imageSrc: "https://i.pinimg.com/564x/3a/d9/c9/3ad9c938f08388f0a4028f3ed103538c.jpg",
                    href: "https://i.pinimg.com/originals/34/eb/34/34eb348ad215167acd1a952e8e19e44c.jpg",
                    price: '₹1,400',
                    oldPrice: '₹2,800',
                    discount: '40',
                },
                {
                    id: 3,
                    name: "Bride's Wedding Night Gift Hamper",
                    description: "Celebrate the bride’s wedding night with this exquisite hamper. Featuring a customized silver pendant, fragrance candles, and luxurious chocolates, it’s perfect for marking the beginning of a new union.",
                    imageSrc: "https://i.pinimg.com/originals/15/6e/60/156e601269fcb0e1a9aebd702b0b5f5f.jpg",
                    imageAlt: "Bride's Wedding Night Gift Hamper",
                    href: "https://forms.gle/6nc85WLhJhwZzges6",
                    price: '₹5,999  ',
                    oldPrice: '₹6,999',
                    discount: '10',
                },
                {
                    id: 4,
                    name: "Customized Birthday Hamper",
                    description: "A beautifully curated birthday hamper featuring chocolates, candles, and a personalized card. Ideal for a thoughtful and elegant gift to celebrate someone's special day. ",
                    imageSrc: "https://i.pinimg.com/originals/6b/e9/79/6be979c7106f3f1c6a50fd2248673554.jpg",
                    imageAlt: "Customized Birthday Hamper",
                    href: "https://forms.gle/6nc85WLhJhwZzges6",
                    price: '₹599',
                    oldPrice: '₹999',
                    discount: '49',
                },
                {
                    id: 5,
                    name: "Anniversary Celebration Hamper",
                    description: "Celebrate love with our customizable anniversary hampers. Each includes chocolates, cookies, and a personalized card to create memorable moments.  ",
                    imageSrc: "https://i.pinimg.com/originals/52/f7/be/52f7becd6c1a29a5822619f6d3da8e9f.png",
                    imageAlt: "Corporate Gift Hamper",
                    href: "https://forms.gle/6nc85WLhJhwZzges6",
                    price: '₹5,599',
                    oldPrice: '₹7,800',
                    discount: '48',
                },
                {
                    id: 6,
                    name: "Elegant Return Favor Hampers",
                    description: "Elevate your gift-giving experience with our personalized return favor hampers. Featuring unique items like customized cups, chocolates, and lollipops for every occasion.",
                    imageSrc: "https://i.pinimg.com/originals/72/cc/2c/72cc2c9645e890bee70f8ca8214f4513.png",
                    imageAlt: "Thank You Gift Hamper",
                    href: "https://forms.gle/6nc85WLhJhwZzges6",
                    price: '₹399',
                    oldPrice: '₹599',
                    discount: '18',
                },
                {
                    id: 7,
                    name: "Trousseau Packing Services",
                    description: "Experience customized trousseau packing tailored to your wedding preferences. Our services ensure a stunning presentation for all your bridal gifts. ",
                    imageSrc: "https://i.pinimg.com/originals/01/b1/73/01b173704ab29c37db5bba27e56b16d4.jpg",
                    imageAlt: "Thank You Gift Hamper",
                    href: "https://forms.gle/6nc85WLhJhwZzges6",
                    price: '₹3,999 ',
                    oldPrice: '₹5,500',
                    discount: '28',
                },
                {
                    id: 8,
                    name: "Customized Wedding In-Room Hampers",
                    description: "Create a memorable first impression with our customized wedding in-room hampers, filled with chocolates, dry fruits, and a personalized card.",
                    imageSrc: "https://i.pinimg.com/originals/6a/a9/49/6aa94932775cdbf298a1df23c388da40.jpg",
                    imageAlt: "Thank You Gift Hamper",
                    href: "https://forms.gle/6nc85WLhJhwZzges6",
                    price: '₹599',
                    oldPrice: '₹699',
                    discount: '10',
                },
                {
                    id: 8,
                    name: "Karvachauth Sargi Hamper",
                    description: "Delight your Mother-in-law or Daughter-in-law with a beautifully curated Karvachauth hamper. This festive collection includes customized baskets, dry fruits, and decorative items to celebrate the occasion.",
                    imageSrc: "https://i.pinimg.com/564x/9c/42/3e/9c423e1bd35ffac57010479a13c237a5.jpg",
                    imageAlt: "Karvachauth Sargi Hamper",
                    href: "https://forms.gle/6nc85WLhJhwZzges6",
                    price: '₹1,400',
                },
                {
                    id: 10,
                    name: "Diwali Delight Hamper",
                    description: "Surprise the bride-to-be with a beautifully curated wedding hamper. This elegant collection includes handmade jhumkas, perfume, and an evil eye wind chime, designed to wish her love and happiness.",
                    imageSrc: "https://corporates.giftsbyrashi.com/wp-content/uploads/2021/12/couple-gift-hamper-scaled-1-scaled.jpg",
                    imageAlt: "Diwali Delight Hamper",
                    href: "https://forms.gle/6nc85WLhJhwZzges6",
                    price: '₹999',
                },
                {
                    id: 11,
                    name: "Bhai Dooj Special Hamper",
                    description: "Description: Strengthen the bond with your brother this Bhai Dooj with a personalized hamper filled with love and treats.",
                    imageSrc: "https://i.pinimg.com/564x/2d/40/4c/2d404ca39850f798c7aedbfbaa546c0f.jpg",
                    imageAlt: "Bhai Dooj Special Hamper",
                    href: "https://forms.gle/6nc85WLhJhwZzges6",
                    price: '₹799',
                },
                {
                    id: 13,
                    name: "Christmas Cheer Hamper",
                    description: "Share the joy of Christmas with our festive hamper, filled with delightful treats for family and friends. ",
                    imageSrc: "https://i.pinimg.com/564x/6b/31/ef/6b31efc43b20c96c95465aa5ddb89d97.jpg",
                    imageAlt: "Christmas Cheer Hamper",
                    href: "https://forms.gle/6nc85WLhJhwZzges6",
                    price: '₹3,500',
                },
                {
                    id: 13,
                    name: "New Year Celebration Hamper",
                    description: "Welcome the New Year with a bang! Our festive hamper is designed to kickstart your celebrations.",
                    imageSrc: "https://i.pinimg.com/564x/34/5b/87/345b879451f2b11586e331d0716c0f27.jpg",
                    imageAlt: "New Year Celebration Hamper",
                    href: "https://forms.gle/6nc85WLhJhwZzges6",
                    price: '₹2,200',
                },
            ]
        }
    },

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
                    url: "/products",
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

export const seoContent = {
    title: "Kala By Himani - Premium Personalized Gift Hampers for Every Occasion",
    description: "Discover exquisite handcrafted gift hampers at Kala by Himani. Ideal for birthdays, weddings, anniversaries, and festivals, each personalized gift creates unforgettable memories for your loved ones.",
    keywords: "personalized gift hampers, premium handmade gifts, custom cards, birthday gift ideas, wedding hampers, anniversary gift baskets, unique festival gifts, eco-friendly gifting solutions, quilling cards, bespoke gift creations",
    tags: "personalized gifts, handcrafted hampers, unique gift ideas, special occasions, eco-friendly gifts, custom greeting cards, memorable gifting solutions, Kala by Himani, quilling art",
    author: "Himani",
    imageUrl: "https://i.pinimg.com/736x/e0/63/29/e063299149106740aee5b9f0c1791a8d.jpg",
    siteUrl: "https://www.kalabyhimani.com/",
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

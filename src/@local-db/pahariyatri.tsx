import { PluginConfig } from "../modal/PluginConfig";
import { Section } from "../modal/Section";

export const pahariyatriTheme: any = {
    name: "default"
}

export const pahariyatriPlugin: PluginConfig[] = [
    {
        name: "FloatingButton",
        isActive: true,
        data: {
            "mobile": "9569576707",
            "text": "Hello from Pahari Yatri! 🏔️ We're passionate about adventure and nature. How can we assist you today?"
        },

    }
]

export const pahariyatri: Section[] = [
    {
        id: "69e7ed7e-889d-41c0-a1d9-62bd150401e2",
        name: "Header",
        version: "v1", // Add version property
        style: "MODERN", // Add style property
        path: "index",
        data: {
            type: "Header",
            id: "001",
            title: "Pahari Yatri",
            subTitle: "Hero Banner Sub Title is here",
            description: "Hero Banner Paragraph is here",
            version: "v1",
            style: "MODERN",
            contactUs: {
                address: "Himachal Pradesh 173201",
                email: "pahariyatri@gmail.com",
                phone: "+91-9569576707",
            },
        },
    },
    {
        id: "69e7ed7e-889d-41c0-a1d9-62bd150401e2",
        name: "Hero banner",
        version: "v1", // Add version property
        style: "CLASSIC", // Add style property
        path: "index",
        data: {
            type: "HeroBanner",
            id: "002",
            title: "The World is Waiting For You",
            subTitle: "Where will you go next?",
            description: "From planning to packing, Pahari Yatri is your travel companion every step of the way. Start your adventure with us today!",
            version: "v2",
            style: "CLASSIC",
            images: [
                {
                    id: '1',
                    imageSrc: 'https://gotrip-appdir.vercel.app/img/masthead/6/bg.png',
                    imageAlt: 'Desk with leather desk pad, walnut desk organizer, wireless keyboard and mouse, and porcelain mug.',
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
            title: "About Pahari Yatri",
            subTitle: "Hero Banner Sub Title is here",
            description: "At Pahari Yatri, we are passionate about providing exhilarating trekking and mountaineering experiences that connect individuals with nature's breathtaking beauty. As a leading adventure travel company, we specialize in curating personalized adventures, ensuring the highest safety standards, and promoting sustainable tourism practices. Our team of experienced professionals is committed to creating unforgettable memories for every adventurer who embarks on a journey with us.",
            version: "v1",
            style: "CLASSIC",
            images: [
                {
                    id: '1',
                    imageSrc: 'https://i.pinimg.com/564x/0a/53/75/0a53757b6915f97f12e67bcf804f7c74.jpg',
                    imageAlt: 'Desk with leather desk pad, walnut desk organizer, wireless keyboard and mouse, and porcelain mug.',
                },
            ],
        },
    },
    {
        id: "143d8df3-49c7-43709e0e-0c5ef7a46f6b",
        name: " ",
        version: "v1",
        style: "CLASSIC",
        path: "index",
        data: {
            type: "Product",
            id: "k",
            title: "Our Upcoming Destination!",
            subTitle: "Join Us for a Trip to the Himalayas",
            description: "Hero Banner Paragraph is here",
            version: "v1",
            style: "CLASSIC",
            products: [
                {
                    id: 1,
                    name: 'Roopkund Trek',
                    href: '/products/1',
                    price: '9000',
                    description: 'Trek to the mysterious Roopkund Lake located at an altitude of 5,029 meters (16,499 feet) in the Himalayas, known for its skeletal remains.',
                    imageSrc: "https://images.unsplash.com/photo-1545652985-5edd365b12eb?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1170&q=80",
                    imageAlt: 'Tall slender porcelain bottle with natural clay textured body and cork stopper.',
                },
                {
                    id: 2,
                    name: 'Valley of Flowers Trek',
                    href: '#',
                    description: 'Explore the vibrant and picturesque Valley of Flowers, a UNESCO World Heritage Site, famous for its diverse alpine flora.',
                    imageSrc: "https://images.unsplash.com/photo-1564432177374-603c4ba4ee69?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1109&q=80",
                    imageAlt: 'Olive drab green insulated bottle with flared screw lid and flat top.',
                },
                {
                    id: 3,
                    name: 'Har Ki Dun Trek',
                    href: '#',
                    description: 'Trek through the beautiful Har Ki Dun Valley, surrounded by snow-capped peaks, lush meadows, and traditional mountain villages.',
                    imageSrc: "https://images.unsplash.com/photo-1617372155962-ba2abeaf2716?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1175&q=80",
                    imageAlt: 'Tall slender porcelain bottle with natural clay textured body and cork stopper.',
                },
                {
                    id: 4,
                    name: 'Chadar Trek',
                    href: '#',
                    description: 'Embark on a unique winter trek on the frozen Zanskar River and witness the stunning frozen landscapes of the region.',
                    imageSrc: "https://images.unsplash.com/photo-1542467986-13ac00f21339?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1133&q=80",
                    imageAlt: 'Olive drab green insulated bottle with flared screw lid and flat top.',
                },
                {
                    id: 5,
                    name: 'Markha Valley Trek',
                    href: '#',
                    description: 'Trek through the remote Markha Valley, passing through traditional Ladakhi villages, monasteries, and stunning landscapes.',
                    imageSrc: "https://images.unsplash.com/photo-1666545380082-34f26c888827?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1074&q=80",
                    imageAlt: 'Tall slender porcelain bottle with natural clay textured body and cork stopper.',
                },
                {
                    id: 6,
                    name: 'Hampta Pass Trek',
                    href: '#',
                    description: 'Opulent, indulgent, and exclusive retreat for discerning guests.',
                    imageSrc: "https://images.unsplash.com/photo-1520793785533-f4b11f9ae0f6?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1170&q=80",
                    imageAlt: 'Olive drab green insulated bottle with flared screw lid and flat top.',
                },
                // More products...
            ],
        },
    },
    {
        id: "143d8df3-49c7-43709e0e-0c5ef7a46f6b",
        name: " ",
        version: "v1",
        style: "CLASSIC",
        path: "index",
        data: {
            type: "Package",
            id: "k",
            title: "Winter is Coming!",
            subTitle: "Join Us for a Trip to the Himalayas",
            description: "Hero Banner Paragraph is here",
            version: "v1",
            style: "CLASSIC",
            packages: [
                {
                    id: 1,
                    name: 'The Parvati Valley Adventure',
                    href: '#',
                    price: "16000 INR Per Person",
                    duration: "7 Days/6 Nights",
                    destination: "Kullu, Himachal Pradesh",
                    description: 'Trek to the mysterious Roopkund Lake located at an altitude of 5,029 meters (16,499 feet) in the Himalayas, known for its skeletal remains.',
                    imageSrc: "https://images.unsplash.com/photo-1545652985-5edd365b12eb?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1170&q=80",
                    imageAlt: 'Tall slender porcelain bottle with natural clay textured body and cork stopper.',
                },
                {
                    id: 2,
                    name: 'Manali Snow Adventure',
                    href: '#',
                    price: "19000 INR Per Person",
                    duration: "7 Days/6 Nights",
                    destination: "Kullu, Himachal Pradesh",
                    description: 'Explore the vibrant and picturesque Valley of Flowers, a UNESCO World Heritage Site, famous for its diverse alpine flora.',
                    imageSrc: "https://images.unsplash.com/photo-1564432177374-603c4ba4ee69?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1109&q=80",
                    imageAlt: 'Olive drab green insulated bottle with flared screw lid and flat top.',
                },
                {
                    id: 3,
                    name: 'Kasol and Tosh Winter Chill',
                    href: '#',
                    price: "16000 INR Per Person",
                    duration: "5 Days/4 Nights",
                    destination: "Kullu, Himachal Pradesh",
                    description: 'Trek through the beautiful Har Ki Dun Valley, surrounded by snow-capped peaks, lush meadows, and traditional mountain villages.',
                    imageSrc: "https://images.unsplash.com/photo-1617372155962-ba2abeaf2716?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1175&q=80",
                    imageAlt: 'Tall slender porcelain bottle with natural clay textured body and cork stopper.',
                },
                {
                    id: 4,
                    name: 'Spiti Valley Winter Expedition',
                    href: '#',
                    price: "26000 INR Per Person",
                    duration: "10 Days/9 Nights",
                    destination: "Kullu, Himachal Pradesh",
                    description: 'Embark on a unique winter trek on the frozen Zanskar River and witness the stunning frozen landscapes of the region.',
                    imageSrc: "https://images.unsplash.com/photo-1542467986-13ac00f21339?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1133&q=80",
                    imageAlt: 'Olive drab green insulated bottle with flared screw lid and flat top.',
                },
                {
                    id: 5,
                    name: 'Kasauli and Chail Weekend Gateway',
                    href: '#',
                    price: "16000 INR Per Person",
                    duration: "7 Days/6 Nights",
                    destination: "Kullu, Himachal Pradesh",
                    description: 'Trek through the remote Markha Valley, passing through traditional Ladakhi villages, monasteries, and stunning landscapes.',
                    imageSrc: "https://images.unsplash.com/photo-1666545380082-34f26c888827?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1074&q=80",
                    imageAlt: 'Tall slender porcelain bottle with natural clay textured body and cork stopper.',
                },
                {
                    id: 6,
                    name: 'Hampta Pass Trek',
                    href: '#',
                    price: "16000 INR Per Person",
                    duration: "7 Days/6 Nights",
                    destination: "Kullu, Himachal Pradesh",
                    description: 'Opulent, indulgent, and exclusive retreat for discerning guests.',
                    imageSrc: "https://images.unsplash.com/photo-1520793785533-f4b11f9ae0f6?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1170&q=80",
                    imageAlt: 'Olive drab green insulated bottle with flared screw lid and flat top.',
                },
                // More products...
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
                    imageSrc: 'https://i.pinimg.com/564x/1b/bf/db/1bbfdbd207edfe0fb208428d595291dd.jpg',
                    imageAlt: 'Desk with leather desk pad, walnut desk organizer, wireless keyboard and mouse, and porcelain mug.',
                },
                {
                    id: '2',
                    imageSrc: 'https://i.pinimg.com/564x/65/fe/54/65fe548a8409fbfeb8cd08239c8a063e.jpg',
                    imageAlt: 'Desk with leather desk pad, walnut desk organizer, wireless keyboard and mouse, and porcelain mug.',
                },
                {
                    id: '3',
                    imageSrc: 'https://i.pinimg.com/564x/06/f4/a2/06f4a25cac140841cbf9279ae8621e8c.jpg',
                    imageAlt: 'Desk with leather desk pad, walnut desk organizer, wireless keyboard and mouse, and porcelain mug.',
                },
                {
                    id: '4',
                    imageSrc: 'https://i.pinimg.com/564x/81/77/75/81777504a7fdddce6ae58e12d8c6afdc.jpg',
                    imageAlt: 'Desk with leather desk pad, walnut desk organizer, wireless keyboard and mouse, and porcelain mug.',
                },
                {
                    id: '6',
                    imageSrc: 'https://i.pinimg.com/564x/6e/b6/86/6eb6867859adb6575c3703705809b933.jpg',
                    imageAlt: 'Desk with leather desk pad, walnut desk organizer, wireless keyboard and mouse, and porcelain mug.',
                }, {
                    id: '7',
                    imageSrc: 'https://i.pinimg.com/564x/5f/9b/a5/5f9ba5a859d81f8feb156bf230b8877f.jpg',
                    imageAlt: 'Desk with leather desk pad, walnut desk organizer, wireless keyboard and mouse, and porcelain mug.',
                }, {
                    id: '8',
                    imageSrc: 'https://i.pinimg.com/564x/41/e0/82/41e082bb39b3968ff21091e1b37baa57.jpg',
                    imageAlt: 'Desk with leather desk pad, walnut desk organizer, wireless keyboard and mouse, and porcelain mug.',
                }, {
                    id: '9',
                    imageSrc: 'https://i.pinimg.com/564x/55/3b/b6/553bb6677b835497b4178ab98a9f5330.jpg',
                    imageAlt: 'Desk with leather desk pad, walnut desk organizer, wireless keyboard and mouse, and porcelain mug.',
                },
            ],
        },
    },
    {
        id: "143d8df3-49c7-43709e0e-0c5ef7a46f6b",
        name: " ",
        version: "v1",
        style: "CLASSIC",
        path: "index",
        data: {
            type: "Portfolio",
            id: "k",
            title: "Untouched Treks!",
            subTitle: "Join Us for a Trip to the Himalayas",
            description: "Hero Banner Paragraph is here",
            version: "v1",
            style: "CLASSIC",
            portfolios: [
                {
                    id: 1,
                    name: 'Roopkund Trek',
                    href: '#',
                    description: 'Trek to the mysterious Roopkund Lake located at an altitude of 5,029 meters (16,499 feet) in the Himalayas, known for its skeletal remains.',
                    imageSrc: "https://images.unsplash.com/photo-1545652985-5edd365b12eb?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1170&q=80",
                    imageAlt: 'Tall slender porcelain bottle with natural clay textured body and cork stopper.',
                },
                {
                    id: 2,
                    name: 'Valley of Flowers Trek',
                    href: '#',
                    description: 'Explore the vibrant and picturesque Valley of Flowers, a UNESCO World Heritage Site, famous for its diverse alpine flora.',
                    imageSrc: "https://images.unsplash.com/photo-1564432177374-603c4ba4ee69?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1109&q=80",
                    imageAlt: 'Olive drab green insulated bottle with flared screw lid and flat top.',
                },
                {
                    id: 3,
                    name: 'Har Ki Dun Trek',
                    href: '#',
                    description: 'Trek through the beautiful Har Ki Dun Valley, surrounded by snow-capped peaks, lush meadows, and traditional mountain villages.',
                    imageSrc: "https://images.unsplash.com/photo-1617372155962-ba2abeaf2716?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1175&q=80",
                    imageAlt: 'Tall slender porcelain bottle with natural clay textured body and cork stopper.',
                },
                {
                    id: 4,
                    name: 'Chadar Trek',
                    href: '#',
                    description: 'Embark on a unique winter trek on the frozen Zanskar River and witness the stunning frozen landscapes of the region.',
                    imageSrc: "https://images.unsplash.com/photo-1542467986-13ac00f21339?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1133&q=80",
                    imageAlt: 'Olive drab green insulated bottle with flared screw lid and flat top.',
                },
                {
                    id: 5,
                    name: 'Markha Valley Trek',
                    href: '#',
                    description: 'Trek through the remote Markha Valley, passing through traditional Ladakhi villages, monasteries, and stunning landscapes.',
                    imageSrc: "https://images.unsplash.com/photo-1666545380082-34f26c888827?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1074&q=80",
                    imageAlt: 'Tall slender porcelain bottle with natural clay textured body and cork stopper.',
                },
                {
                    id: 6,
                    name: 'Hampta Pass Trek',
                    href: '#',
                    description: 'Opulent, indulgent, and exclusive retreat for discerning guests.',
                    imageSrc: "https://images.unsplash.com/photo-1520793785533-f4b11f9ae0f6?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1170&q=80",
                    imageAlt: 'Olive drab green insulated bottle with flared screw lid and flat top.',
                },
                // More products...
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
            type: "Service",
            id: "k",
            title: "Our Services",
            subTitle: "",
            description: "We are provided following services to our customers",
            version: "v1",
            style: "CLASSIC",
            services: [
                {
                    id: 1,
                    title: 'Adventure Expeditions',
                    body: 'Embark on thrilling adventure expeditions led by experienced guides. Explore remote and rugged landscapes, conquer peaks, and challenge your limits.',
                    imageSrc: 'https://htmldemo.zcubethemes.com/riorelax/img/icon/sve-icon3.png',
                    imageAlt: 'parking icon',
                },
                {
                    id: 2,
                    title: 'Customized Travel Packages',
                    body: 'Tailor-made travel packages designed to match your interests and preferences. Whether its a solo escape, a family adventure, or a group journey, we create the perfect itinerary just for you.',
                    imageSrc: 'https://htmldemo.zcubethemes.com/riorelax/img/icon/sve-icon3.png',
                    imageAlt: 'parking icon',
                },
                {
                    id: 3,
                    title: 'Travel Resources',
                    body: 'Access a wealth of travel resources, including packing guides, visa information, local insights, safety tips, and more. We equip you with everything you need to plan your journeys with confidence.',
                    imageSrc: 'https://htmldemo.zcubethemes.com/riorelax/img/icon/sve-icon2.png',
                    imageAlt: 'parking icon',
                },
                {
                    id: 4,
                    title: 'Community & Events',
                    body: 'Join a vibrant community of fellow travelers. Share your experiences, seek advice, and stay updated on exciting travel events and gatherings. Connect, share, and explore with like-minded adventurers',
                    imageSrc: 'https://htmldemo.zcubethemes.com/riorelax/img/icon/fe-icon08.png',
                    imageAlt: 'parking icon',
                },
                {
                    id: 5,
                    title: 'Guided Tours and Excursions',
                    body: 'Explore iconic landmarks and hidden gems with our guided tours and excursions. Immerse yourself in the culture and history of each destination.',
                    imageSrc: 'https://htmldemo.zcubethemes.com/riorelax/img/icon/fe-icon05.png',
                    imageAlt: 'parking icon',
                },
                {
                    id: 6,
                    title: '24/7 Customer Support',
                    body: 'Our dedicated customer support team is available around the clock to assist you with any travel-related queries or emergencies. Your safety and satisfaction are our top priorities.',
                    imageSrc: 'https://htmldemo.zcubethemes.com/riorelax/img/icon/fe-icon05.png',
                    imageAlt: 'parking icon',
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
                    id: "1",
                    title: "Har Ki Dun Trek",
                    description: 'Trek through the beautiful Har Ki Dun Valley, surrounded by snow-capped peaks, lush meadows, and traditional mountain villages.',
                    descriptionContext: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed nonummy tincidunt ut lacreet dolore magna aliguam erat volutpat.",
                    imageSrc: "https://images.unsplash.com/photo-1545652985-5edd365b12eb?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1170&q=80",
                    imageAlt: 'Tall slender porcelain bottle with natural clay textured body and cork stopper.',
                },
                {
                    id: "2",
                    title: "Great Lakes Trek",
                    description: 'Explore the pristine alpine lakes of the Kashmir region, including Vishansar Lake, Gadsar Lake, and Nundkol Lake.',
                    descriptionContext: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed nonummy tincidunt ut lacreet dolore magna aliguam erat volutpat.",
                    imageSrc: "https://images.unsplash.com/photo-1526772662000-3f88f10405ff?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1074&q=80",
                    imageAlt: 'Tall slender porcelain bottle with natural clay textured body and cork stopper.',
                },
                {
                    id: "3",
                    title: "Sandakphu Trek",
                    description: 'Trek to the highest point in West Bengal, Sandakphu, and witness panoramic views of the Himalayas, including the majestic Kanchenjunga.',
                    descriptionContext: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed nonummy tincidunt ut lacreet dolore magna aliguam erat volutpat.",
                    imageSrc: "https://images.unsplash.com/photo-1523341139367-9de570b874ed?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1170&q=80",
                    imageAlt: 'Tall slender porcelain bottle with natural clay textured body and cork stopper.',
                },
                {
                    id: "4",
                    title: "Hampta Pass Trek",
                    description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit.",
                    descriptionContext: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed nonummy tincidunt ut lacreet dolore magna aliguam erat volutpat.",
                    imageSrc: "https://images.unsplash.com/photo-1520982184827-6950930eaf2b?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1170&q=80",
                    imageAlt: 'Tall slender porcelain bottle with natural clay textured body and cork stopper.',
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

export const pahariyatriSeo: any = {
    title: "Pahari Yatri - Adventure Trekking and Mountaineering Experiences",
    description: "Pahari Yatri offers exceptional trekking and mountaineering experiences, connecting adventure seekers with nature, culture, and their adventurous spirit.",
    keywords: "adventure travel, trekking experiences, mountaineering expeditions, camping, adventure tours, wildlife safaris, cultural immersion, sustainable travel",
    tags: "adventure travel, trekking, mountaineering, camping, adventure tours, wildlife safaris, photography expeditions, cultural immersion, sustainable travel",
    author: "Pankaj Kumar",
    imageUrl: "https://example.com/og-image.jpg",
    siteUrl: "https://www.pahariyatri.com",
};
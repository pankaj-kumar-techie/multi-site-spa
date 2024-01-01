import { PluginConfig } from "../modal/PluginConfig";
import { Section } from "../modal/Section";

export const pahariyatriTheme: any = {
    name: "default"
}

export const pahariyatriPlugin: PluginConfig[] = [
    {
        name: "FloatingButton",
        isActive: false,
        data: {
            "mobile": "9569576707",
            "text": "Hello Pahari Yatri! 🏔️ Interested in your travel package. Please share more details."
        },
    }
]

export const pahariyatri: Section[] = [
    {
        id: "889d-41c0-a1d9-62bd150401e2",
        name: "Header",
        version: "v2",
        style: "MODERN",
        path: "index",
        data: {
            type: "Header",
            id: "001",
            title: "Pahari Yatri",
            subTitle: "Hero Banner Sub Title is here",
            description: "Hero Banner Paragraph is here",
            version: "v2",
            style: "MODERN",
            logo: {
                id: "001",
                imageSrc: "https://i.pinimg.com/736x/63/27/9d/63279d93bdd63862256bb4c7e500e10b.jpg",
                imageAlt: "PahariYatriLogo",
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
                    id: "menu-4",
                    label: "Gallery",
                    url: "/gallery",
                }, {
                    id: "menu-3",
                    label: "Contact us",
                    url: "/contact-us",
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
            title: "The World is Waiting For You",
            subTitle: "Where will you go next?",
            description: "From planning to packing, Pahari Yatri is your travel companion every step of the way. Start your adventure with us today!",
            version: "v2",
            style: "CLASSIC",
            bannerData: [
                {
                    title: "The World is Waiting For You",
                    subTitle: "Where will you go next?",
                    description: "From planning to packing, Pahari Yatri is your travel companion every step of the way. Start your adventure with us today!",
                    image:
                    {
                        id: '1',
                        imageSrc: 'https://images.unsplash.com/photo-1587547131116-a0655a526190?auto=format&fit=crop&q=80&w=1832&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
                        imageAlt: 'Desk with leather desk pad, walnut desk organizer, wireless keyboard and mouse, and porcelain mug.',
                    },
                    modalProps: {
                        isOpen: true,
                        // onClose: () => void,
                        title: 'Plan Your Dream Vacation Package',
                        formFields: [
                            { name: 'name', label: 'Full Name', type: 'text', required: true },
                            { name: 'mobile', label: 'Phone Number', type: 'tel', required: true },
                            {
                                name: 'mobile', label: 'Preferred Destination', type: 'select', required: true,
                                options: [
                                    { label: 'The Parvati Valley Adventure', value: '3' },
                                    { label: 'Manali Snow Adventure', value: '5' },
                                    { label: 'Kasol and Tosh Winter Chill', value: '7' },
                                    { label: 'Narkanda Snowy Paradise', value: '21' },
                                ],
                            },
                            {
                                name: 'mobile', label: 'Number of Travelers', type: 'number', required: true,
                            },
                            {
                                name: 'mobile', label: 'I m Interested In', type: 'checkbox', required: true,
                                options: [
                                    { label: 'All-Inclusive Resorts', value: 'roof_solution' },
                                    { label: 'Adventure Tours', value: 'adventure_tours' },
                                    { label: 'Cruise Packages', value: 'adventure_package' },
                                ],
                            },
                            { name: 'text', label: 'Special Requests ', type: 'textarea', required: false },

                        ]
                    }
                },
            ],
        },
    },
    {
        id: "143d8df3-49c7-0c5ef7a46f6b",
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
                    href: '/packages/1',
                    price: "16000 INR Per Person",
                    duration: "7 Days/6 Nights",
                    destination: "Kullu, Himachal Pradesh",
                    season: "Winter (December to February)",
                    description: 'Trek to the mysterious Roopkund Lake located at an altitude of 5,029 meters (16,499 feet) in the Himalayas, known for its skeletal remains.',
                    imageSrc: "https://images.unsplash.com/photo-1545652985-5edd365b12eb?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1170&q=80",
                    imageAlt: 'Tall slender porcelain bottle with natural clay textured body and cork stopper.',
                    difficulty: "Challenging",

                },
                {
                    id: 2,
                    name: 'Devidarh to Shikari Devi Expedition',
                    href: '/packages/2',
                    price: "7500 INR Per Person",
                    duration: "3 Days/2 Nights",
                    destination: "Mandi, Himachal Pradesh",
                    difficulty: "Challenging",
                    season: "Winter (December to February)",
                    description: 'Explore the vibrant and picturesque Valley of Flowers, a UNESCO World Heritage Site, famous for its diverse alpine flora.',
                    imageSrc: "https://images.unsplash.com/photo-1679407985739-b6df6dcf2e44?auto=format&fit=crop&q=80&w=2070&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
                    imageAlt: 'Olive drab green insulated bottle with flared screw lid and flat top.',
                },
                {
                    id: 3,
                    name: 'Churdhar Sacred Ascent Trek',
                    href: '/packages/3',
                    price: "7600 INR Per Person",
                    duration: "3 Days/2 Nights",
                    destination: "Sirmaur, Himachal Pradesh",
                    difficulty: "Difficult",
                    season: "Winter (December to February)",
                    description: 'Trek through the beautiful Har Ki Dun Valley, surrounded by snow-capped peaks, lush meadows, and traditional mountain villages.',
                    imageSrc: "https://images.unsplash.com/photo-1486163224786-2356ec4ab064?auto=format&fit=crop&q=80&w=1974&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
                    imageAlt: 'Tall slender porcelain bottle with natural clay textured body and cork stopper.',
                },
                {
                    id: 4,
                    name: 'Spiti Valley Winter Expedition',
                    href: '/packages/4',
                    price: "26000 INR Per Person",
                    duration: "10 Days/9 Nights",
                    destination: "Lahaul & Spiti , Himachal Pradesh",
                    difficulty: "Extreme",
                    season: "Winter (December to February)",
                    description: 'Embark on a unique winter trek on the frozen Zanskar River and witness the stunning frozen landscapes of the region.',
                    imageSrc: "https://plus.unsplash.com/premium_photo-1661963083312-8adde31d9900?auto=format&fit=crop&q=80&w=2070&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
                    imageAlt: 'Olive drab green insulated bottle with flared screw lid and flat top.',
                },
                {
                    id: 5,
                    name: 'Kasauli and Chail Weekend Gateway',
                    href: '/packages/5',
                    price: "8500 INR Per Person",
                    duration: "3 Days/2 Nights",
                    destination: "Solan, Himachal Pradesh",
                    difficulty: "Easy",
                    description: 'Trek through the remote Markha Valley, passing through traditional Ladakhi villages, monasteries, and stunning landscapes.',
                    imageSrc: "https://images.unsplash.com/photo-1551582045-6ec9c11d8697?auto=format&fit=crop&q=80&w=1965&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
                    imageAlt: 'Tall slender porcelain bottle with natural clay textured body and cork stopper.',
                },
                {
                    id: 6,
                    name: 'Mural Danda Trek Expedition ',
                    href: '/packages/6',
                    price: "11400 INR Per Person",
                    duration: "7 Days/6 Nights",
                    destination: "Rampur, Himachal Pradesh",
                    difficulty: "Challenging",
                    description: 'Opulent, indulgent, and exclusive retreat for discerning guests.',
                    imageSrc: "https://images.unsplash.com/photo-1520793785533-f4b11f9ae0f6?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1170&q=80",
                    imageAlt: 'Olive drab green insulated bottle with flared screw lid and flat top.',
                },
                // More products...
            ],
        },
    },
    {
        id: "143d8df3-c7-43709e0e-0c5ef7a46f6b",
        name: " ",
        version: "v1",
        style: "CLASSIC",
        path: "index",
        data: {
            type: "Package",
            id: "k",
            title: "Explore Our Unexplored Treks!!",
            subTitle: "Join Us for a Trip to the Himalayas",
            description: "Hero Banner Paragraph is here",
            version: "v2",
            style: "CLASSIC",
            packages: [
                {
                    id: 101,
                    name: 'Pindari Glacier ',
                    href: '/packages/101',
                    price: "XXXX INR Per Person", // Update with the appropriate price
                    duration: "XX Days/XX Nights", // Update with the appropriate duration
                    destination: "Kullu, Himachal Pradesh",
                    difficulty: "Challenging",
                    season: "",
                    description: 'Embark on a spiritual journey to Shrikand, a sacred mountain in the Himalayas. Immerse yourself in the divine atmosphere and breathtaking landscapes.',
                    imageSrc: "https://i.pinimg.com/236x/5f/9b/a5/5f9ba5a859d81f8feb156bf230b8877f.jpg", // Update with the appropriate image URL
                    imageAlt: 'Panoramic view of Shrikand peak surrounded by clouds.',
                },
                {
                    id: 102,
                    name: 'Bushal Peak Trek Expedition ',
                    href: '/packages/101',
                    price: "XXXX INR Per Person", // Update with the appropriate price
                    duration: "XX Days/XX Nights", // Update with the appropriate duration
                    destination: "Kullu, Himachal Pradesh",
                    difficulty: "Easy",
                    season: "",
                    description: 'Embark on a spiritual journey to Shrikand, a sacred mountain in the Himalayas. Immerse yourself in the divine atmosphere and breathtaking landscapes.',
                    imageSrc: "https://i.pinimg.com/564x/f8/8a/4e/f88a4e62f7211d3f7c35af0308a556fa.jpg", // Update with the appropriate image URL
                    imageAlt: 'Panoramic view of Shrikand peak surrounded by clouds.',
                },
                {
                    id: 103,
                    name: 'Malana-Chanderkhani Pass Trek',
                    href: '/packages/101',
                    price: "XXXX INR Per Person", // Update with the appropriate price
                    duration: "XX Days/XX Nights", // Update with the appropriate duration
                    destination: "Kullu, Himachal Pradesh",
                    difficulty: "Easy",
                    season: "",
                    description: 'Embark on a spiritual journey to Shrikand, a sacred mountain in the Himalayas. Immerse yourself in the divine atmosphere and breathtaking landscapes.',
                    imageSrc: "https://i.pinimg.com/564x/6e/b6/86/6eb6867859adb6575c3703705809b933.jpg", // Update with the appropriate image URL
                    imageAlt: 'Panoramic view of Shrikand peak surrounded by clouds.',
                },
                {
                    id: 104,
                    name: 'Bushal Peak Trek Expedition ',
                    href: '/packages/101',
                    price: "XXXX INR Per Person", // Update with the appropriate price
                    duration: "XX Days/XX Nights", // Update with the appropriate duration
                    destination: "Kullu, Himachal Pradesh",
                    difficulty: "Easy",
                    season: "",
                    description: 'Embark on a spiritual journey to Shrikand, a sacred mountain in the Himalayas. Immerse yourself in the divine atmosphere and breathtaking landscapes.',
                    imageSrc: "https://i.pinimg.com/564x/00/5c/2c/005c2c487b299a12e196e23f5d8cd6a3.jpg", // Update with the appropriate image URL
                    imageAlt: 'Panoramic view of Shrikand peak surrounded by clouds.',
                },
                {
                    id: 105,
                    name: 'Shikhar Srikhandu Trek Expedition ',
                    href: '/packages/101',
                    price: "XXXX INR Per Person", // Update with the appropriate price
                    duration: "XX Days/XX Nights", // Update with the appropriate duration
                    destination: "Kullu, Himachal Pradesh",
                    difficulty: "Easy",
                    season: "",
                    description: 'Embark on a spiritual journey to Shrikand, a sacred mountain in the Himalayas. Immerse yourself in the divine atmosphere and breathtaking landscapes.',
                    imageSrc: "https://himshikhartrekking.com/admin/include/upload/packages/62108a3bb6c9aFB_IMG_1568179358261.jpg", // Update with the appropriate image URL
                    imageAlt: 'Panoramic view of Shrikand peak surrounded by clouds.',
                },
                {
                    id: 106,
                    name: 'Kugti Pass Trek',
                    href: '/packages/101',
                    price: "XXXX INR Per Person", // Update with the appropriate price
                    duration: "XX Days/XX Nights", // Update with the appropriate duration
                    destination: "Kullu, Himachal Pradesh",
                    difficulty: "Easy",
                    season: "",
                    description: 'Embark on a spiritual journey to Shrikand, a sacred mountain in the Himalayas. Immerse yourself in the divine atmosphere and breathtaking landscapes.',
                    imageSrc: "https://i.pinimg.com/564x/1b/bf/db/1bbfdbd207edfe0fb208428d595291dd.jpg", // Update with the appropriate image URL
                    imageAlt: 'Panoramic view of Shrikand peak surrounded by clouds.',
                },
            ],
        },
    },
    {
        id: "69e7ed7e-889d-41c0-a1150401e2",
        name: "Hero banner",
        version: "v1",
        style: "CLASSIC",
        path: "index",
        data: {
            type: "HeroBanner",
            id: "002",
            title: "The World is Waiting For You",
            subTitle: "Where will you go next?",
            description: "From planning to packing, Pahari Yatri is your travel companion every step of the way. Start your adventure with us today!",
            version: "v2",
            style: "CLASSIC",
            bannerData: [
                {
                    title: "The World is Waiting For You",
                    subTitle: "Where will you go next?",
                    description: "From planning to packing, Pahari Yatri is your travel companion every step of the way. Start your adventure with us today!",
                    image:
                    {
                        id: '1',
                        imageSrc: 'https://images.unsplash.com/photo-1487730116645-74489c95b41b?auto=format&fit=crop&q=80&w=2070&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
                        imageAlt: 'Desk with leather desk pad, walnut desk organizer, wireless keyboard and mouse, and porcelain mug.',
                    },
                    modalProps: {
                        isOpen: false,
                        // onClose: () => void,
                        title: 'string',
                    }
                },
            ],
        },
    },
    {
        id: "49c7-43709e0e-0c5ef7a46f6b",
        name: " ",
        version: "v1",
        style: "CLASSIC",
        path: "index",
        data: {
            type: "Package",
            id: "k",
            title: "Sacred Himalayan Pilgrimage: Kailash Yatra with Pahari Yatri",
            subTitle: "Embark on a Spiritual Journey to Shrikhand, Manimahesh, and Kinnaur Kailash",
            description: "Hero Banner Paragraph is here",
            version: "v1",
            style: "CLASSIC",
            packages: [
                {
                    id: 101,
                    name: 'Shrikhand Mahadev Kailash Yatra',
                    href: '/packages/101',
                    price: "12500 INR Per Person", // Update with the appropriate price
                    duration: "6 Days/5 Nights", // Update with the appropriate duration
                    destination: "Kullu, Himachal Pradesh",
                    difficulty: "Technical",
                    season: "",
                    description: 'Embark on a spiritual journey to Shrikand, a sacred mountain in the Himalayas. Immerse yourself in the divine atmosphere and breathtaking landscapes.',
                    imageSrc: "https://himshikhartrekking.com/admin/include/upload/packages/62108a3bb6c9aFB_IMG_1568179358261.jpg", // Update with the appropriate image URL
                    imageAlt: 'Panoramic view of Shrikand peak surrounded by clouds.',
                },
                {
                    id: 102,
                    name: 'Manimahesh Kailash Yatra',
                    href: '/packages/102',
                    price: "10500 INR Per Person", // Update with the appropriate price
                    duration: "4 Days/3 Nights", // Update with the appropriate duration
                    destination: "Chamba, Himachal Pradesh",
                    difficulty: "Difficult",
                    season: "",
                    description: 'Experience the divine aura of Manimahesh Yatra as you trek through scenic landscapes to reach the sacred Manimahesh Lake. A pilgrimage filled with spiritual significance.',
                    imageSrc: "https://i.pinimg.com/564x/06/f4/a2/06f4a25cac140841cbf9279ae8621e8c.jpg", // Update with the appropriate image URL
                    imageAlt: 'Manimahesh Lake surrounded by snow-capped peaks.',
                },
                {
                    id: 103,
                    name: 'Kinnaur Kailash Yatra',
                    href: '/packages/103',
                    price: "11001 INR Per Person", // Update with the appropriate price
                    duration: "5 Days/3 Nights", // Update with the appropriate duration
                    destination: "Kinnaur, Himachal Pradesh",
                    difficulty: "Technical",
                    description: 'Explore the enchanting Kinner Kailas region, known for its sacred sites and breathtaking landscapes. Join us on this spiritual journey to connect with the divine.',
                    imageSrc: "https://himshikhartrekking.com/admin/include/upload/packages/621093acf041d8b3e6369db5b1fbccd0cfb049bf88628.jpg", // Update with the appropriate image URL
                    imageAlt: 'View of Kinner Kailas peaks against a clear blue sky.',
                },
                // More packages...
            ],
        },
    },
    {
        id: "143d8df3-4k-9e0e-0c5ef7a46f6b",
        name: "About-Us",
        version: "v1",
        style: "CLASSIC",
        path: "index",
        data: {
            type: "AboutUs",
            id: "003",
            title: "About Pahari Yatri",
            subTitle: "Hero Banner Sub Title is here",
            description: "At Pahari Yatri, we're passionate about crafting unforgettable trekking and mountaineering experiences that connect you with nature's beauty. As a leading adventure travel company, we prioritize safety, sustainability, and personalized adventures. Our experienced team is committed to creating lasting memories for every adventurer.Our vision is to explore and reveal the hidden treasures of the Himalayas. We go beyond the ordinary, offering transformative journeys that contribute to Himalayan conservation. Join us for unique adventures, dedicated to making your journey remarkable, sustainable, and filled with cherished moments",
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
        id: "143d8df3-49c7-4370-0c5ef7a46f6b",
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
        id: "69e7ed7e-889d-41c0-a1d9-62bd15040rr1e2",
        name: "Hero banner",
        version: "v1",
        style: "CLASSIC",
        path: "index",
        data: {
            type: "HeroBanner",
            id: "002",
            title: "The World is Waiting For You",
            subTitle: "Where will you go next?",
            description: "From planning to packing, Pahari Yatri is your travel companion every step of the way. Start your adventure with us today!",
            version: "v2",
            style: "CLASSIC",
            bannerData: [
                {
                    title: "The World is Waiting For You",
                    subTitle: "Where will you go next?",
                    description: "From planning to packing, Pahari Yatri is your travel companion every step of the way. Start your adventure with us today!",
                    image:
                    {
                        id: '1',
                        imageSrc: 'https://images.unsplash.com/photo-1487730116645-74489c95b41b?auto=format&fit=crop&q=80&w=2070&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
                        imageAlt: 'Desk with leather desk pad, walnut desk organizer, wireless keyboard and mouse, and porcelain mug.',
                    },
                    modalProps: {
                        isOpen: false,
                        // onClose: () => void,
                        title: 'string',
                    }
                },
            ],
        },
    },
    {
        id: "143d8df3-49c7-4370-9e08",
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
        id: "437kk0-9e0e-0c5ef7a46f6b",
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
    // {
    //     id: "143d8-0c5ef7a46f6b",
    //     name: "ContactUs",
    //     version: "v1",
    //     style: "CLASSIC",
    //     path: "index",
    //     data: {
    //         type: "ContactUs",
    //         id: "k",
    //         title: "Get In Touch",
    //         subTitle: "Plan Your Dream Vacation Package",
    //         description: "Hero Banner Paragraph is here",
    //         version: "v2",
    //         style: "CLASSIC",
    //         contactUs: {
    //             address: "Himachal Pradesh",
    //             email: "pahariyatri@gmail.com",
    //             phone: "+91 9569576707",
    //             formFields: [
    //                 { name: 'name', label: 'Name', type: 'text', required: true },
    //                 { name: 'mobile', label: 'Mobile', type: 'tel', required: true },
    //             ]
    //         },
    //     },
    // },
    {
        id: "143d8d",
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
            "logo": {
                "id": "kk",
                "imageSrc": "path/to/your/logo.png",
                "imageAlt": "Logo Alt Text"
            },
            // "socialLink": [
            //     {
            //         "id":"icon-id",
            //         "link": "https://www.facebook.com/",
            //         "iconClass": "<FaFacebook />"  // Replace with the actual React component for the Facebook icon
            //     },
            // ],
            // "copyright": "© 2023 Your Company. All rights reserved."
        },
    },
];
export const pahariyatriDynamicDetails: Section[] = [
    {
        id: "69e7ed7e-41c0-a1d9-62bd150401e2",
        name: "Header",
        version: "v2", // Add version property
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
            logo: {
                id: "001",
                imageSrc: "https://i.pinimg.com/736x/63/27/9d/63279d93bdd63862256bb4c7e500e10b.jpg",
                imageAlt: "PahariYatriLogo",
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
                    id: "menu-4",
                    label: "Gallery",
                    url: "/gallery",
                }, {
                    id: "menu-3",
                    label: "Contact us",
                    url: "/contact-us",
                },
            ],
        },
    },
    {
        id: "69e7ed7e-889d-41c0-a1",
        name: "Hero banner",
        version: "v1",
        style: "CLASSIC",
        path: "index",
        data: {
            type: "DetailPage",
            id: "002",
            title: "The World is Waiting For You",
            subTitle: "Where will you go next?",
            description: "From planning to packing, Pahari Yatri is your travel companion every step of the way. Start your adventure with us today!",
            version: "v2",
            style: "CLASSIC",

        },
    },
    {
        id: "143-4370-9e0e-07a46f6b",
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
        id: "143d8df3-49c7-43787a46f6b",
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
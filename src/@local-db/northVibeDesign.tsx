import { PluginConfig } from "../modal/PluginConfig";
import { Section } from "../modal/Section";

export const northVibeDesignTheme: any = {
  name: "minimalist"
}

export const northVibeDesign: Section[] = [
  {
    id: "69e7ed7e-889d-41c0-a1d9-62bd150401e2",
    name: "Header",
    version: "v1",
    style: "MODERN",
    path: "index",
    data: {
      type: "Header",
      id: "001",
      title: "NV Design",
      subTitle: "",
      description: "",
      version: "v1",
      style: "MODERN",
      logo:
      {
        id: '1',
        imageSrc: 'https://i.pinimg.com/564x/8e/e4/24/8ee424ad844db2c4a48673616f42302f.jpg',
        imageAlt: 'Desk with leather desk pad, walnut desk organizer, wireless keyboard and mouse, and porcelain mug.',
      },

      contactUs: {
        address: "",
        email: "northvibedesings@gmail.com",
        phone: "6280888188",
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
      title: "Transforming Spaces with North Vibe Design",
      subTitle: "Your Dreams, Our Expertise",
      description: "Contact us today to make your dream space a reality. Elevate your surroundings with innovative designs that harmonize aesthetics and functionality.",
      version: "v2",
      style: "CLASSIC",
      bannerData: [
        {
          title: "Transforming Spaces with North Vibe Design",
          subTitle: "Your Dreams, Our Expertise",
          description: "Contact us today to make your dream space a reality. Elevate your surroundings with innovative designs that harmonize aesthetics and functionality.",
          image:
          {
            id: '1',
            imageSrc: 'https://images.unsplash.com/photo-1509592149237-bc44977d96d0?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2071&q=80',
            imageAlt: 'Desk with leather desk pad, walnut desk organizer, wireless keyboard and mouse, and porcelain mug.',
          },
          videoSrc: "string",
          modalProps: {
            isOpen: true,
            // onClose: () => void,
            title: 'Title is here ',
          }
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
      title: "About North Vibe Design",
      subTitle: "Blending Culture with Elegance",
      description: "At North Vibe Design, we are dedicated to providing specialized expertise in ACP (Aluminium Composite Panel) & HPL (High-Pressure Laminate) installation, glass solutions, premium wooden flooring, and captivating ceiling designs. Our services cater to storefronts, outdoor patios, pools, gardens, office buildings, apartments, hotels, shops, supermarkets, and more. ",
      version: "v1",
      style: "CLASSIC",
      images: [
        {
          id: '1',
          imageSrc: 'https://images.unsplash.com/photo-1600585154363-67eb9e2e2099?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1yZWxhdGVkfDE1fHx8ZW58MHx8fHx8&auto=format&fit=crop&w=500&q=60',
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
      type: "Portfolio",
      id: "k",
      title: "Projects Delivered",
      subTitle: "Showcasing Our Work",
      description: "Explore our portfolio of diverse projects, from hotel buildings to office spaces. Our designs prioritize comfort, aesthetics, and functionality, ensuring spaces that captivate.",
      version: "v1",
      style: "CLASSIC",
      portfolios: [
        {
          id: 1,
          name: 'Hotel Building in Manali, Himachal Pradesh (4000 sqft)',
          description: 'Our hotel building designs focus on guest comfort and satisfaction.',
          imageSrc: 'https://i.pinimg.com/564x/db/e5/13/dbe5130fd9f7863ef1501448a7173d03.jpg',
          imageAlt: 'Desk with leather desk pad, walnut desk organizer, wireless keyboard and mouse, and porcelain mug.',
          href: '#',
        },
        {
          id: 2,
          name: 'House Building in 34 Sector,Chandigarh (3200 sqft)',
          description: 'Tailored retail space designs for various shop types.',
          imageSrc: 'https://images.unsplash.com/photo-1628744448840-55bdb2497bd4?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1170&q=80',
          imageAlt: 'Wood table with porcelain mug, leather journal, brass pen, leather key ring, and a houseplant.',
          href: '#',
        },
        {
          id: 3,
          name: 'Office Building in Hamirpur, Himachal Pradesh (2000 sqft)',
          description: 'Functional office space designs for improved productivity.',
          imageSrc: 'https://i.pinimg.com/564x/d3/09/8f/d3098f59685b9eeddc5368c91bf494b2.jpg',
          imageAlt: 'Wood table with porcelain mug, leather journal, brass pen, leather key ring, and a houseplant.',
          href: '#',
        },
        {
          id: 4,
          name: 'Hotel Building in Chandigarh (5000 + sqft)',
          description: 'Creating comfortable and stylish homes with hotel-like amenities.',
          imageSrc: 'https://i.pinimg.com/564x/2b/9f/ff/2b9fff540ba0762a5013ee3aa7183438.jpg',
          imageAlt: 'Wood table with porcelain mug, leather journal, brass pen, leather key ring, and a houseplant.',
          href: '#',
        },
        {
          id: 5,
          name: 'Shops Building in Shimla, Himachal Pradesh (2400 sqft)',
          description: 'Designing spacious shops buildings.',
          imageSrc: 'https://i.pinimg.com/564x/48/40/bb/4840bbfbe51c8b15b88ae0a58fc8afa4.jpg',
          imageAlt: 'Collection of four insulated travel bottles on wooden shelf.',
          href: '#',
        },
        {
          id: 6,
          name: 'House Building in Ladakh (2000 sqft)',
          description: 'Designing spacious and luxurious hotel buildings.',
          imageSrc: 'https://i.pinimg.com/564x/2d/f7/67/2df767192da6ab8635569b6c1916e1ef.jpg',
          imageAlt: 'Collection of four insulated travel bottles on wooden shelf.',
          href: '#',
        },
        // Add more portfolio items here
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
          imageSrc: 'https://i.pinimg.com/564x/0a/ab/48/0aab4885d7503dd87d3e0e1206ba5e15.jpg',
          imageAlt: 'Desk with leather desk pad, walnut desk organizer, wireless keyboard and mouse, and porcelain mug.',
        },
        {
          id: '2',
          imageSrc: 'https://i.pinimg.com/564x/b8/f2/f4/b8f2f4cbfd7e93c7a41b693ced7c853e.jpg',
          imageAlt: 'Desk with leather desk pad, walnut desk organizer, wireless keyboard and mouse, and porcelain mug.',
        },
        {
          id: '3',
          imageSrc: 'https://i.pinimg.com/736x/46/8d/e7/468de704f9b10cbd1b6f8a61d3997086.jpg',
          imageAlt: 'Desk with leather desk pad, walnut desk organizer, wireless keyboard and mouse, and porcelain mug.',
        },
        {
          id: '4',
          imageSrc: 'https://images.unsplash.com/photo-1513584684374-8bab748fbf90?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1yZWxhdGVkfDE0fHx8ZW58MHx8fHx8&auto=format&fit=crop&w=500&q=60',
          imageAlt: 'Desk with leather desk pad, walnut desk organizer, wireless keyboard and mouse, and porcelain mug.',
        },
        {
          id: '6',
          imageSrc: 'https://i.pinimg.com/564x/2f/93/ea/2f93eabc4dd56713aeeb622c2a610c41.jpg',
          imageAlt: 'Desk with leather desk pad, walnut desk organizer, wireless keyboard and mouse, and porcelain mug.',
        }, {
          id: '7',
          imageSrc: 'https://i.pinimg.com/564x/37/a2/ff/37a2ffc28a2a91fcf976b6fc7f61dcbb.jpg',
          imageAlt: 'Desk with leather desk pad, walnut desk organizer, wireless keyboard and mouse, and porcelain mug.',
        }, {
          id: '8',
          imageSrc: 'https://i.pinimg.com/564x/b2/57/05/b25705d40142307cd68a4928a8862e2f.jpg',
          imageAlt: 'Desk with leather desk pad, walnut desk organizer, wireless keyboard and mouse, and porcelain mug.',
        }, {
          id: '9',
          imageSrc: 'https://images.unsplash.com/photo-1574598762239-6b6f96eab341?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1074&q=80',
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
      type: "Service",
      id: "k",
      title: "Our Services",
      subTitle: "Elevate Your Spaces",
      description: " Explore our comprehensive services that include ACP & HPL installation, wooden and ceramic flooring, glass solutions, ceiling designs, and roof solutions. Elevate your spaces with our innovative designs.",
      version: "v2",
      style: "CLASSIC",
      services: [
        {
          id: 1,
          title: '🏢 ACP & HPL Installation',
          body: 'Modern Aluminum Composite Panel installations for interiors and exteriors. Combining style, durability, and weather resistance. High-Pressure Laminate installations, offering versatility and durability.',
          imageSrc: '',
          imageAlt: 'ACP & HPL icon',
        },
        {
          id: 2,
          title: '🪵 Wooden and Ceramic Flooring',
          body: 'Add warmth and elegance with our premium wooden flooring options, tailored to your style and space.',
          imageSrc: '',
          imageAlt: 'Wooden icon',
        },
        {
          id: 3,
          title: '🪟 Glass Solutions',
          body: 'Enhance natural light and aesthetics with professional glass installations for windows, doors, partitions, and facades.',
          imageSrc: '',
          imageAlt: 'Glass icon',
        },
        {
          id: 4,
          title: '🛋️ Ceiling Designs',
          body: 'Turn plain ceilings into captivating focal points with unique and visually striking designs.',
          imageSrc: '',
          imageAlt: 'Roof icon',
        },
        {
          id: 5,
          title: ' 🏠 Roof Solutions',
          body: 'Comprehensive roofing services, from installation to maintenance, ensuring durability and weather resistance.',
          imageSrc: '',
          imageAlt: 'Roof icon',
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
      title: "Our Blogs!",
      subTitle: "Exploring Design Stories",
      description: "Dive into our blog stories, where we share insights on design trends, space transformations, and the fusion of culture and elegance. Experience the journey of design inspiration.",
      version: "v1",
      style: "CLASSIC",
      blogs: [
        {
          id: "1",
          title: "North Vibe Design: Where Local Aesthetics Meet Modern Elegance",
          description: "Experience the fusion of cultural aesthetics and contemporary elegance in our interior and exterior designs, harmonizing with North India's vibrant culture and natural beauty.",
          descriptionContext: "Enhance your retail space with eye-catching window displays that tell your brand's story and entice visitors to step inside.",
          imageSrc: "https://images.unsplash.com/photo-1617836330596-d8c050a4cfd9?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1207&q=80",
          imageAlt: "Tall slender porcelain bottle with natural clay textured body and cork stopper.",
        },
        {
          id: "2",
          title: "Outdoor Patio Perfection: Designs for Entertaining Guests",
          description: "Create an inviting outdoor entertainment space with various patio designs that set the stage for unforgettable gatherings.",
          descriptionContext: "Elevate your patio into a hub for entertainment and relaxation, where friends and family can connect amidst stylish and comfortable surroundings.",
          imageSrc: "https://images.unsplash.com/photo-1516484411845-e74b77f26b83?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1172&q=80",
          imageAlt: "Tall slender porcelain bottle with natural clay textured body and cork stopper.",
        },
        {
          id: "3",
          title: "Office Productivity Boost: Enhance Your Workspace Design",
          description: "Unlock productivity potential by optimizing your workspace layout, lighting, and ergonomic design.",
          descriptionContext: "A well-designed office environment can boost employee morale, creativity, and overall efficiency.",
          imageSrc: "https://images.unsplash.com/photo-1542581509-7e87190743b6?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1170&q=80",
          imageAlt: "Modern office interior with ergonomic furniture and natural lighting.",
        },
        {
          id: "4",
          title: "Restaurant Interior Ideas: A Recipe for Success",
          description: "Explore innovative restaurant interior designs that enhance the dining experience and leave a lasting impression on patrons.",
          descriptionContext: "From cozy cafes to upscale dining, interior design plays a crucial role in creating a memorable atmosphere.",
          imageSrc: "https://images.unsplash.com/photo-1505275350441-83dcda8eeef5?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1074&q=80",
          imageAlt: "Stylish restaurant interior with modern furnishings and artistic decor.",
        },
        {
          id: "5",
          title: "Hotel Bathroom Luxe: Five-Star Amenities You Can Have",
          description: "Elevate your bathroom design to hotel-level luxury with high-end fixtures, materials, and spa-like features.",
          descriptionContext: "Transform your bathroom into a serene oasis where relaxation and indulgence go hand in hand.",
          imageSrc: "https://plus.unsplash.com/premium_photo-1661412671807-7c1f94169607?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1264&q=80",
          imageAlt: "Elegant hotel bathroom with luxurious bathtub and marble finishes.",
        },
        {
          id: "6",
          title: "Exhibition Space Planning: Captivate Visitors with Innovative Design",
          description: "Designing exhibition spaces that engage and captivate visitors through strategic layout, interactive elements, and immersive experiences.",
          descriptionContext: "Explore the art of creating impactful exhibitions that leave a lasting impression on attendees.",
          imageSrc: "https://images.unsplash.com/photo-1501127122-f385ca6ddd9d?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=435&q=80",
          imageAlt: "Art gallery with innovative exhibition design and interactive installations.",
        },
        {
          id: "7",
          title: "The Rise of Coworking Spaces: The Future of Work",
          description: "Explore the evolving trend of coworking spaces, their benefits for freelancers and businesses, and the future of flexible work environments.",
          descriptionContext: "Discover how shared workspaces are redefining the traditional office and shaping the way people collaborate.",
          imageSrc: "https://images.unsplash.com/photo-1527192491265-7e15c55b1ed2?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1170&q=80",
          imageAlt: "Coworking space with modern decor and collaborative work areas.",
        },
        {
          id: "8",
          title: "Retail Store Makeover: Transform Your Space for Success",
          description: "Revitalize your retail store with strategic redesigns, visual merchandising, and customer-centric layouts that drive sales and brand loyalty.",
          descriptionContext: "Discover how a refreshed store environment can attract customers, enhance their shopping experience, and increase revenue.",
          imageSrc: "https://images.unsplash.com/photo-1441986300917-64674bd600d8?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1170&q=80",
          imageAlt: "Modern retail store interior with attractive displays and welcoming ambiance.",
        },
      ],
    },
  },
  {
    id: "143d8df3-49c7-4370-9e0e-0c5ef7a46f6b",
    name: "Footer",
    version: "v1",
    style: "CLASSIC",
    path: "index",
    data: {
      type: "ContactUs",
      id: "k",
      title: "Get In Touch",
      subTitle: "Let's Create Together",
      description: " Reach out to us for inquiries and collaboration. Experience personalized design solutions that elevate your spaces. Let's make your vision a reality.",
      version: "v2",
      style: "CLASSIC",
      contactUs: {
        address: "Himachal Pradesh",
        email: "northvibedesings@gmail.com",
        phone: "+91 6280 888 188",
        formFields: [
          { name: 'name', label: 'Name', type: 'text', required: true },
          { name: 'mobile', label: 'Mobile', type: 'tel', required: true },
          {
            name: 'area',
            label: 'Area in sqft',
            type: 'select',
            required: true,
            options: [
              { label: '200 - 1000 square feet', value: '1000' },
              { label: '1000 - 3000 square feet', value: '2000' },
              { label: '3000 - 5000 square feet', value: '4000' },
              { label: '5000 - 5000+ square feet', value: '5000' },
            ],
          },
          {
            name: 'servicesInterested',
            label: 'Services Interested In',
            type: 'select',
            required: true,
            options: [
              { label: 'ACP & HPL Installation', value: 'acp_installation' },
              { label: 'Wooden Flooring', value: 'wooden_flooring' },
              { label: 'Glass Solutions', value: 'glass_solutions' },
              { label: 'Ceiling Designs', value: 'ceiling_design' },
              { label: 'Roof Solutions', value: 'roof_solution' },
              { label: 'Others', value: 'others' },
            ],
          },
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

export const northVibeDesignSeo: any = {
  title: "Top Quality Interior & Exterior Design Services in North India | North Vibe Design",
  description: "Elevate your spaces with exceptional craftsmanship and creative designs. We specialize in ACP installation, glass solutions, wooden flooring, and ceiling designs. Catering to residential and commercial clients in Himachal Pradesh and North India.",
  keywords: "Interior design, exterior design, ACP installation, glass solutions, wooden flooring, ceiling designs, residential services, commercial services, remodeling, real estate, architecture, hospitality, landscape architects, Himachal Pradesh, North India.",
  tags: "Interior Design, Exterior Design, ACP Installation, Glass Solutions, Wooden Flooring, Ceiling Designs, Residential Services, Commercial Services, Remodeling, Real Estate, Architecture, Hospitality, Landscape Architects, Himachal Pradesh, North India.",
  author: "Pankaj Kumar",
  imageUrl: "https://example.com/og-image.jpg",
  siteUrl: "https://www.pahariyatri.com",
};

export const northVibeDesignPlugin: PluginConfig[] = [
  {
    name: "FloatingButton",
    isActive: true,
    data: {
      "mobile": "6280888188",
      "text": "Hello! Thank you for connecting with us. We're here to help transform your spaces with expertise. Feel free to ask any questions or discuss your interior and exterior design needs. Your vision, our expertise!"
    },

  }
]

import { Section } from "../modal/Section";
import { SeoData } from "../modal/SeoData";

export const techiepahariyatriseo: SeoData = {
    title: "Pankaj Kumar - Experienced Software Engineer Portfolio",
    description: "Explore the portfolio of Pankaj Kumar, an experienced Software Engineer specializing in full-stack development, front-end and back-end techniques, and delivering high-quality software solutions.",
    keywords: "Pankaj Kumar, software engineer, portfolio, full-stack development, front-end, back-end, AWS, Java, React, Flutter, DevOps",
    tags: "Pankaj Kumar, software engineer, portfolio, full-stack development, front-end, back-end, AWS, Java, React, Flutter, DevOps",
    author: "Pankaj Kumar",
    imageUrl: "https://example.com/portfolio-og-image.jpg",
    siteUrl: "https://techie.pahariyatri.com",
};

export const techieTheme: any = {
    name: "classic"
}

export const techie: Section[] = [
    {
        id: "69e7ed7e-889d-41c0-a1d9-62bd150401e2",
        name: "Header",
        version: "v2", // Add version property
        style: "CLASSIC", // Add style property
        path: "index",
        data: {
            type: "Header",
            id: "001",
            title: "Portfolio",
            subTitle: "Hero Banner Sub Title is",
            description: "Hero Banner Paragraph is here",
            version: "v1",
            style: "CLASSIC",
        },
    },
    {
        id: "69e7ed7e-889d-41c0-a1d9-62bd150401e2",
        name: "Herobanner",
        version: "v1", // Add version property
        style: "CLASSIC", // Add style property
        path: "index",
        data: {
            type: "HeroBanner",
            id: "002",
            title: "Pankaj Kumar",
            subTitle: "Software engineer know they don’t know everything, but also know they can learn anything",
            description: "Hero Banner Paragraph is here",
            version: "v2",
            style: "CLASSIC",
            images: [
                {
                    id: '1',
                    imageSrc: 'https://images.unsplash.com/photo-1571171637578-41bc2dd41cd2?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1170&q=80',
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
            title: "About Pankaj Kumar",
            subTitle: "Hero Banner Sub Title is here",
            description: "Experienced Software Engineer specializing in backend development with expertise in Java andbuilding robust applications using Spring Boot. Proficient in integrating frontend technologies likeJavaScript and TypeScript. Skilled in containerization with Docker and deployment using CI/CDpipelines like Jenkins. Familiar with Flutter for cross-platform mobile app development",
            version: "v1",
            style: "CLASSIC",
            bannerData: [
                {
                    title: "About Pankaj Kumar",
                    subTitle: "Hero Banner Sub Title is here",
                    description: "Experienced Software Engineer specializing in backend development with expertise in Java andbuilding robust applications using Spring Boot. Proficient in integrating frontend technologies likeJavaScript and TypeScript. Skilled in containerization with Docker and deployment using CI/CDpipelines like Jenkins. Familiar with Flutter for cross-platform mobile app development",
                    image:
                    {
                        id: '1',
                        imageSrc: 'https://i.pinimg.com/564x/0a/53/75/0a53757b6915f97f12e67bcf804f7c74.jpg',
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
import React, { useEffect, useState } from 'react';
import PackageDetailCard from '../package/components/PackageCardDetail';
import BlogDetailCard from '../../components/cards/BlogCardDetail';
import Loader from '../../components/common/loader/Loader';
import { useParams } from 'react-router-dom';
import PageNotFound from '../page-not-found/PageNotFound';
import { Blog, Package } from '../../modal/Section';
import { useClientAppDataContext } from '../../ClientAppDataContext';

const isValidSlug = (slug: string) => {
    const validSlugs = ['blogs', 'packages', 'products'];
    return validSlugs.includes(slug);
};

const DetailsPage = () => {
    const { slug, id } = useParams();
    const urlId = id || '';
    const dataContext = useClientAppDataContext();
    const { dispatch, getBlogById, getPackageById } = dataContext || {};
    const [blog, setBlog] = useState<Blog | undefined>(undefined);
    const [packageDetail, setPackageDetail] = useState<Package | undefined>(undefined);


    useEffect(() => {
        if (dispatch) {
            dispatch({
                type: 'SET_BLOGS',
                payload: [
                    {
                        id: "1",
                        title: "Har Ki Dun Trek",
                        description: 'Trek through the beautiful Har Ki Dun Valley, surrounded by snow-capped peaks, lush meadows, and traditional mountain villages.',
                        descriptionContext: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed nonummy tincidunt ut lacreet dolore magna aliguam erat volutpat.",
                        imageSrc: "https://images.unsplash.com/photo-1545652985-5edd365b12eb?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1pYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1170&q=80",
                        imageAlt: 'Tall slender porcelain bottle with natural clay textured body and cork stopper.',
                    },
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
            });
            dispatch({
                type: 'SET_PACKAGES',
                payload: [
                    {
                        id: 1,
                        name: 'The Parvati Valley Adventure',
                        href: '/packages/1',
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
                        href: '/packages/2',
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
                        href: '/packages/3',
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
                        href: '/packages/4',
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
                        href: '/packages/5',
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
                        href: '/packages/6',
                        price: "16000 INR Per Person",
                        duration: "7 Days/6 Nights",
                        destination: "Kullu, Himachal Pradesh",
                        description: 'Opulent, indulgent, and exclusive retreat for discerning guests.',
                        imageSrc: "https://images.unsplash.com/photo-1520793785533-f4b11f9ae0f6?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1170&q=80",
                        imageAlt: 'Olive drab green insulated bottle with flared screw lid and flat top.',
                    },
                    {
                        id: 101,
                        name: 'Shrikhand Mahadev Kailash Yatra',
                        href: '/packages/101',
                        price: "XXXX INR Per Person", // Update with the appropriate price
                        duration: "XX Days/XX Nights", // Update with the appropriate duration
                        destination: "Kullu, Himachal Pradesh",
                        difficulty: "25",
                        season: "",
                        description: 'Embark on a spiritual journey to Shrikand, a sacred mountain in the Himalayas. Immerse yourself in the divine atmosphere and breathtaking landscapes.',
                        imageSrc: "https://himshikhartrekking.com/admin/include/upload/packages/62108a3bb6c9aFB_IMG_1568179358261.jpg", // Update with the appropriate image URL
                        imageAlt: 'Panoramic view of Shrikand peak surrounded by clouds.',
                    },
                    {
                        id: 102,
                        name: 'Manimahesh Kailash Yatra',
                        href: '/packages/102',
                        price: "XXXX INR Per Person", // Update with the appropriate price
                        duration: "XX Days/XX Nights", // Update with the appropriate duration
                        destination: "Chamba, Himachal Pradesh",
                        difficulty: "25",
                        season: "",
                        description: 'Experience the divine aura of Manimahesh Yatra as you trek through scenic landscapes to reach the sacred Manimahesh Lake. A pilgrimage filled with spiritual significance.',
                        imageSrc: "https://i.pinimg.com/564x/06/f4/a2/06f4a25cac140841cbf9279ae8621e8c.jpg", // Update with the appropriate image URL
                        imageAlt: 'Manimahesh Lake surrounded by snow-capped peaks.',
                    },
                    {
                        id: 103,
                        name: 'Kinnaur Kailash Yatra',
                        href: '/packages/103',
                        price: "XXXX INR Per Person", // Update with the appropriate price
                        duration: "XX Days/XX Nights", // Update with the appropriate duration
                        destination: "Kinnaur, Himachal Pradesh",
                        description: 'Explore the enchanting Kinner Kailas region, known for its sacred sites and breathtaking landscapes. Join us on this spiritual journey to connect with the divine.',
                        imageSrc: "https://himshikhartrekking.com/admin/include/upload/packages/621093acf041d8b3e6369db5b1fbccd0cfb049bf88628.jpg", // Update with the appropriate image URL
                        imageAlt: 'View of Kinner Kailas peaks against a clear blue sky.',
                    },
                    // Add more package data...
                ],
            });
        } else {
            console.log("Handle the case where `dispatch` is undefined, e.g., by not calling it.")
        }
    }, [dispatch]);
    useEffect(() => {
        if (getBlogById && getPackageById) {
            if (slug === 'blogs') {
                const selectedBlog = getBlogById(urlId);
                setBlog(selectedBlog);
            } else if (slug === 'packages') {
                const selectedPackage = getPackageById(parseInt(urlId, 10));
                setPackageDetail(selectedPackage);
                console.log("package details is here ", selectedPackage)
            } else {
                console.log("Invalid slug in the URL.", slug);
            }
        } else {
            console.log("ClientAppDataContext not properly initialized.");
        }
    }, [slug, urlId, getBlogById, getPackageById]);

    if (!slug) {
        return <Loader />;
    }
    if (!isValidSlug(slug)) {
        return <PageNotFound />;
    }

    const getDetailCardComponent = (slug: string | undefined) => {
        switch (slug) {
            case 'blogs':
                return (
                    blog ? (
                        <BlogDetailCard
                            id={blog.id}
                            title={blog.title}
                            description={blog.description}
                            descriptionContext={blog.descriptionContext}
                            imageSrc={blog.imageSrc}
                            imageAlt={blog.imageAlt}
                        />
                    ) : (
                        <Loader />
                    )
                );
            case 'packages':
                return (
                    packageDetail ? (
                        <PackageDetailCard
                            id={packageDetail.id}
                            name={packageDetail.name}
                            href={packageDetail.href}
                            price={packageDetail.price}
                            duration={packageDetail.duration}
                            destination={packageDetail.destination}
                            description={packageDetail.description}
                            imageSrc={packageDetail.imageSrc}
                            imageAlt={packageDetail.imageAlt}
                        />
                    ) : (
                        <Loader />
                    )
                );
            default:
                return <div>Page not found</div>;
        }
    };

    return (
        <>
            {getDetailCardComponent(slug)}
        </>
    );
};

export default DetailsPage;
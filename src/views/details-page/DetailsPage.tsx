import React, { useEffect } from 'react';
import PackageDetailCard from '../../components/cards/PackageCardDetail';
import BlogDetailCard from '../../components/cards/BlogCardDetail';
import Loader from '../../components/common/loader/Loader';
import { useParams } from 'react-router-dom';
import PageNotFound from '../page-not-found/PageNotFound';
import Header from '../../components/layouts/header/Header';
import { useClientAppDataContext } from '../../ClientAppDataContext';

const isValidSlug = (slug: string) => {
    const validSlugs = ['blogs', 'packages', 'products'];
    return validSlugs.includes(slug);
};

const DetailsPage = () => {
    const { slug, id } = useParams();
    const blogIdFromUrl = id || '';
    const dataContext = useClientAppDataContext();
    const { state, dispatch, getBlogById } = dataContext || {};
    console.log("State Data in Detail page - blogs:", state?.blogs);
    useEffect(() => {
        if (dispatch) {
            dispatch({
                type: 'SET_BLOGS', payload: [
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
                ]
            });
        } else {
            console.log("Handle the case where `dispatch` is undefined, e.g., by not calling it.")
        }
    }, [dispatch]);
    if (!slug) {
        return <Loader></Loader>;
    }
    if (!isValidSlug(slug)) {
        return <PageNotFound />;
    }
    if (getBlogById) {
        const blog = getBlogById(blogIdFromUrl);
        if (blog) {
            console.log("Attempting to get blog with ID :", blog);
        } else {
            console.log("Blog with ID '2' not found.");
        }
    } else {
        console.log("ClientAppDataContext not properly initialized.");
    }

    const getDetailCardComponent = (slug: string | undefined) => {
        switch (slug) {
            case 'blogs':
                return <BlogDetailCard blogs={{
                    id: '',
                    title: 'Abc Blog',
                    description: '',
                    descriptionContext: '',
                    imageSrc: '',
                    imageAlt: ''
                }} comments={[]} ></BlogDetailCard>;
            case 'packages':
                return <PackageDetailCard packages={{
                    id: 0,
                    name: 'Package Abc',
                    href: '',
                    price: undefined,
                    duration: undefined,
                    destination: undefined,
                    description: '',
                    imageSrc: '',
                    imageAlt: ''
                }} />;
            default:
                return <div>Page not found</div>;
        }
    };
    return (
        <><Header data={undefined} version={'v1'}></Header><div className="container mx-auto px-4 py-8">
            <div className="bg-white shadow-lg rounded-lg overflow-hidden">
                <div className="px-6 py-4">
                    <h1 className="text-2xl font-bold mb-4">Page Title</h1>
                    <p className="text-gray-700 leading-relaxed mb-6">
                        Page content goes here.
                    </p>
                </div>
                {getDetailCardComponent(slug)}
            </div>
        </div></>
    );
};

export default DetailsPage;

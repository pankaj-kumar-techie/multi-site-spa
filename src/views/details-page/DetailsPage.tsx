import React, { useState } from 'react';
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
    const dataContext = useClientAppDataContext();
    const { state, getBlogById } = dataContext || {};
    console.log("State Data in Detail page - blogs:", state);

    if (!slug) {
        return <Loader></Loader>;
    }
    if (!isValidSlug(slug)) {
        return <PageNotFound />;
    }
    if (state) {
        // const blog = getBlogById('2');
        console.log("Attempting to get blog with ID '1':", state);
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

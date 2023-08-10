import React, { useContext } from 'react';
import { ThemeContext } from '../../themes/ThemeProvider';

const DetailsPage = () => {
    const { theme } = useContext(ThemeContext);
    return (
        <div className={`${theme.background.backgroundColor} container mx-auto px-4 py-8` }>
            <div className="bg-white shadow-lg rounded-lg overflow-hidden">
                <div className="px-6 py-4">
                    <h1 className="text-2xl font-bold mb-4">Page Title</h1>
                    <p className="text-gray-700 leading-relaxed mb-6">
                        Page content goes here.
                    </p>
                    <div className="flex items-center justify-between">
                        <div className="flex items-center">
                            <img
                                className="w-10 h-10 rounded-full mr-4"
                                src="https://images.unsplash.com/photo-1587547131116-a0655a526190?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1216&q=80"
                                alt="Author"
                            />
                            <div className="text-sm">
                                <p className="text-gray-900 leading-none">Author Name</p>
                                <p className="text-gray-600">Posted on July 12, 2023</p>
                            </div>
                        </div>
                        <div className="flex">
                            <button className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded-full mr-2">
                                Like
                            </button>
                            <button className="bg-gray-500 hover:bg-gray-700 text-white font-bold py-2 px-4 rounded-full">
                                Share
                            </button>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default DetailsPage;

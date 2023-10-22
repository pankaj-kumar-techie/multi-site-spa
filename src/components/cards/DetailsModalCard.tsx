import React, { ReactNode } from "react";
import { Blog, Package } from "../../modal/Section";

interface ModalProps {
    isOpen: boolean;
    onClose: () => void;
    children: ReactNode;
    blogs?: Blog | null;
    packages?: Package | null;
}

const DetailsModalCard: React.FC<ModalProps> = ({ isOpen, onClose, children, blogs, packages }) => {
    return (
        <div
            className={`fixed inset-0 z-50 flex items-center justify-center overflow-x-hidden overflow-y-auto ${isOpen ? "" : "hidden"}`}
        >
            {/* <div className="fixed inset-0 transition-opacity" onClick={onClose}>
                <div className="absolute inset-0 bg-black opacity-75" />
            </div> */}
            <div className="relative z-50 bg-white h-screen w-screen p-6 flex flex-col justify-between">
                <button
                    onClick={onClose}
                    className="absolute top-2 right-2 text-gray-600 hover:text-gray-800 cursor-pointer"
                >
                    Close
                </button>
                <div className="flex-1 overflow-y-auto">
                    {blogs && (
                        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
                            <div className="max-w-3xl mx-auto">
                                <h1 className="text-3xl font-bold text-gray-900">{blogs?.title}</h1>
                                <p className="text-gray-500 mt-2">{"April, 17, 2010"}</p>
                                <div className="my-8">
                                    <img className="w-full object-cover" src={blogs?.imageSrc} alt={blogs?.title} />
                                </div>
                                <div className="text-lg leading-relaxed">{blogs?.description}</div>
                            </div>
                        </div>
                    )}
                    {packages && (
                        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
                            <div className="my-8">
                                <img className="w-full object-cover" src={packages?.imageSrc} alt={blogs?.title} />
                            </div>
                            <div className="max-w-3xl mx-auto">
                                <h1 className="text-3xl font-bold text-gray-900">{packages?.name}</h1>
                                <p className="text-gray-500 mt-2">{packages?.destination}</p>
                                <p className="text-gray-500 mt-2">{packages?.description}</p>
                                {/* Add specific package details here */}
                            </div>
                        </div>
                    )}
                    {!blogs && !packages && <p>No selected Details.</p>}
                </div>
                {children}
            </div>
        </div>
    );
};

export default DetailsModalCard;

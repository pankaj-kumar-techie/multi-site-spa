import React from "react";

const images = [
    "https://images.unsplash.com/photo-1533156185246-38b4af71f2c2",
    "https://images.unsplash.com/photo-1486915309851-74a3c1e8d3b3",
    "https://images.unsplash.com/photo-1533756103556-1e9b5d94f29c",
    "https://images.unsplash.com/photo-1529902844348-7ecbfa0e9759",
    "https://images.unsplash.com/photo-1550547660-6c413ba142cd",
    "https://images.unsplash.com/photo-1529060150413-3a6aa3cfc983",
];

function Gallery(props: { data: any }) {
    return (
        <section className="bg-white py-16">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                <div className="text-center">
                    <h2 className="text-3xl font-bold text-gray-800">Gallery</h2>
                    <p className="mt-2 text-xl text-gray-600">
                        Check out some of our favorite travel photos
                    </p>
                </div>
                <div className="mt-20">
                    <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-8">
                        {images.map((image, index) => (
                            <div
                                key={index}
                                className="relative h-80 rounded-lg overflow-hidden"
                            >
                                <img
                                    className="w-full h-full object-cover"
                                    src={image}
                                    alt={`Gallery image ${index + 1}`}
                                />
                                <div className="absolute inset-0 bg-gray-900 opacity-75"></div>
                                <div className="absolute inset-0 flex items-center justify-center">
                                    <p className="text-white font-bold text-xl">Image {index + 1}</p>
                                </div>
                            </div>
                        ))}
                    </div>
                </div>
            </div>
        </section>
    );
}

export default Gallery;

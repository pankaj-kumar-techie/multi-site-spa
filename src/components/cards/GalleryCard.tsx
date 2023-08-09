import React from "react";

export default function GalleryCard(image: {
    id: any,
    imageSrc: any,
    imageAlt: any
}){
    return(
        <div
            key={image.id}
            className="relative h-80  transform
                                transition duration-1000 hover:scale-110 rounded-lg overflow-hidden"
        >
            <img
                className="w-full h-full object-cover "
                src={image.imageSrc}
                alt={`Gallery ${image.imageAlt}`}
            />
            <div className="absolute inset-0 bg-gray-700 opacity-0"></div>
        </div>
    )
}
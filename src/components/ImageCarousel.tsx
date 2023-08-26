import React, { useState } from "react";

interface ImageCarouselProps {
    images: { imageSrc: string }[];
}

const ImageCarousel: React.FC<ImageCarouselProps> = ({ images }) => {
    const [activeIndex, setActiveIndex] = useState(0);

    const handlePrev = () => {
        setActiveIndex((prevIndex) => (prevIndex - 1 + images.length) % images.length);
    };

    const handleNext = () => {
        setActiveIndex((prevIndex) => (prevIndex + 1) % images.length);
    };

    return (
        <div className="relative">
            <div
                className="w-full h-full absolute inset-0"
                style={{
                    backgroundImage: `url(${images[activeIndex].imageSrc})`,
                    backgroundSize: "cover",
                    backgroundPosition: "center",
                }}
            />
            {images.length > 1 && (
                <div className="absolute bottom-0 left-0 right-0 flex justify-center p-2">
                    <button onClick={handlePrev} className="px-3 py-1 text-white bg-gray-700 rounded-l">
                        Previous
                    </button>
                    <button onClick={handleNext} className="px-3 py-1 text-white bg-gray-700 rounded-r">
                        Next
                    </button>
                </div>
            )}
        </div>
    );
};

export default ImageCarousel;

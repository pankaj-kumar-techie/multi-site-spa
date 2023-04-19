import React, { useState } from "react";

const Loader = () => {
    const [loading] = useState(true);

    return (
        <div className="flex justify-center items-center h-screen">
            {loading && (
                <div className="border-4 border-gray-200 border-opacity-50 rounded-full w-12 h-12 animate-spin"></div>
            )}
        </div>
    );
};

export default Loader;

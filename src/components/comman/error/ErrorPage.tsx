import React from "react";

interface Props {
    message: string;
}

const ErrorPage: React.FC<Props> = ({ message }) => {
    return (
        <div className="flex flex-col items-center justify-center h-screen bg-gray-100">
            <div className="bg-white p-6 rounded-md shadow-md">
                <h1 className="text-4xl font-bold mb-4">Oops!</h1>
                <p className="text-xl mb-4">{message}</p>
                <button
                    onClick={() => window.location.reload()}
                    className="px-4 py-2 bg-blue-600 text-white rounded-md hover:bg-blue-500"
                >
                    Refresh Page
                </button>
            </div>
        </div>
    );
};

export default ErrorPage;

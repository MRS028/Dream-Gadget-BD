import React from 'react';

const ErrorPage = () => {
    return (
        <div className="flex flex-col items-center justify-center min-h-screen bg-gray-100 p-5">
            <h1 className="text-6xl font-bold text-red-500 mb-5">404</h1>
            <h2 className="text-2xl md:text-3xl font-semibold text-gray-800">Page Not Found</h2>
            <p className="text-gray-600 mt-2 text-center max-w-md">
                Oops! The page you're looking for doesn't exist. It might have been moved or deleted.
            </p>
            <button
                onClick={() => window.location.href = '/'}
                className="mt-5 px-6 py-3 bg-blue-500 text-white rounded-full text-lg font-medium hover:bg-blue-600 transition duration-300"
            >
                Go Back Home
            </button>
        </div>
    );
};

export default ErrorPage;

import React from 'react';

const Loader = () => {
    return (
        <div className="z-[100] absolute justify-center items-center h-screen w-screen">
            <div
                className="relative w-24 h-24 animate-spin rounded-full bg-gradient-to-r from-purple-400 via-blue-500 to-red-400 ">
                <div
                    className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-20 h-20 bg-white rounded-full border-2 border-white"></div>
            </div>
        </div>

    );
};

export default Loader;
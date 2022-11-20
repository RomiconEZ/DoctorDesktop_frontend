import React from 'react';

const Loader = () => {
    return (
        <div className="flex justify-center items-center h-screen flex-wrap">
            <div className="grid columns-1">
                <div className="flex justify-center items-center mb-10">
                    <div className="animate-ping absolute inline-flex h-10 w-10 rounded-full bg-azure-my opacity-75"></div>
                    <div className=" inline-flex rounded-full h-4 w-4 bg-azure-my"></div>
                </div>
                <h1 className="text-2xl font-medium text-azure-my">Загрузка...</h1>
            </div>
        </div>
    );
};

export default Loader;
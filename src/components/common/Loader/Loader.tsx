import React from 'react';

const Loader = () => {
    return (
        <div className="absolute z-[100] backdrop-blur-sm backdrop-brightness-75 h-full w-full">
            <div
                className="absolute z-[102] border-8 border-l-gray-main-theme border-r-green-active-icon border-t-green-active-icon border-b-green-active-icon h-24 w-24 m-auto bottom-0 top-0 right-0 left-0 animate-spin rounded-full bg-transparent ">
                <div
                    className="absolute z-[101] top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-20 h-20 bg-transparent rounded-full border-2 border-l-black-dark-my border-r-green-active-link border-t-green-active-link border-b-green-active-link">

                </div>

            </div>
        </div>

    );
};

export default Loader;
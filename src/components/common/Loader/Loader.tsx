import React from 'react';

const Loader = () => {
    return (
        <div className="absolute left-0 top-0 z-[100] backdrop-blur-sm backdrop-brightness-75 h-screen w-screen">
            <div
                className="absolute z-[102] border-8 border-l-our-gray-main-theme border-r-our-greenish-500 border-t-our-greenish-500 border-b-our-greenish-500 h-24 w-24 m-auto bottom-0 top-0 right-0 left-0 animate-spin rounded-full bg-transparent "
            >
                <div
                    className="absolute z-[101] top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-20 h-20 bg-transparent rounded-full border-2 border-l-our-dark border-r-our-greenish-400 border-t-our-greenish-400 border-b-our-greenish-400"
                >

                </div>

            </div>
        </div>

    );
};

export default Loader;
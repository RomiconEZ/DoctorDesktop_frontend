import React from 'react';
import {Outlet} from "react-router-dom";


const Root = () => {

    return (
        <>
        <div className="z-[0] h-full w-full">
            <Outlet/>
        </div>
        </>
    )
};

export default Root

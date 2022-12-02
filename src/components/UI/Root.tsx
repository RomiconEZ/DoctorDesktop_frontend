import React from 'react';
import {Outlet} from "react-router-dom";


const Root = () => {

    return (

        <div className="z-[0] h-screen w-screen">
            <Outlet/>
        </div>

    )
};

export default Root

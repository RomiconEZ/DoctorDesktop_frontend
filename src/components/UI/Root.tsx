import React from 'react';
import {Link, Outlet, NavLink} from "react-router-dom";


const Root = () => {

    return (
        <>
        <div className="h-full w-full">
            <Outlet/>
        </div>
        </>
    )
};

export default Root

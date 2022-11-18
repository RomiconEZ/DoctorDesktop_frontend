import React from 'react';
import {Link, Outlet, NavLink} from "react-router-dom";
import Navbar from "./Navbar/Navbar";


const Root = () => {

    return (
        <>
        <div>
            <div className='flex justify-center'>
                <h1>Root element</h1>
            </div>

            <div>
                <Outlet/>
            </div>

        </div>
        </>
    )
};

export default Root

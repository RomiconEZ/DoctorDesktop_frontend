import React from 'react';
import {Link, Outlet, NavLink} from "react-router-dom";


const Root = () => {

    return (
        <>
        <div>
            <Outlet/> // место, куда вставляется все остальное
        </div>
        </>
    )
};

export default Root

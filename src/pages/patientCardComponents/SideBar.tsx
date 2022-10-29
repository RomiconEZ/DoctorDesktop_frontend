import React from 'react';
import {Link, Outlet} from "react-router-dom";

const SideBar = () => {
    return (
        <div className="top-0 left-0 w-[35vw] bg-blue-300  p-10 pl-20 fixed h-full ">
            <nav>
                <ul>
                    <li>
                        <Link to="/patientCard/personalData">Персональные данные</Link>
                    </li>
                    <li>
                        <Link to="/patientCard/computer-aided-tomography">Компьютерная томография</Link>
                    </li>
                    <li>
                        <Link to="/patientCard/anthropometric-data">Антропометрия</Link>
                    </li>
                    <li>
                        <Link to="/patientCard/clinic-data">Клинические данные</Link>
                    </li>
                </ul>
            </nav>

            <Outlet />
        </div>
    )
};

export default SideBar;
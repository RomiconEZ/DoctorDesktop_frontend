import { Outlet, Link } from "react-router-dom";
import React from "react";

const MainMenu = () => {
    return (
        <div>
            <nav>
                <ul>
                    <li>
                        <Link to="/">Главная</Link>
                    </li>
                    <li>
                        <Link to="/patientCard" >Карточка пациента</Link>
                    </li>
                </ul>
            </nav>

            <Outlet />
        </div>
    )
};

export default MainMenu;
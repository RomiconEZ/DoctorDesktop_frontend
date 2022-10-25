import React, {useContext} from 'react';
import {Link, Outlet, NavLink} from "react-router-dom";
import {observer} from "mobx-react-lite";
import {Context} from "../../../index";
import {useAppSelector} from "../../../hooks/redux";


const Navbar = () => {
    // Кнопка выхода (нужна !!!)
    const {user} = useAppSelector(state => state.userReducer)
    const {login} = useContext(Context);

    return (
        <>
        <div className="navbar">
            <div>
                {user?.name} {user?.surname} {user?.patronymic}
            </div>
            <div>
                {user?.role}
            </div>
            <div className="navbar__links" style={{fontSize: '18pt'}}>

                <NavLink className={({ isActive }) =>
                    isActive ? 'activeClassName' : undefined
                } to="/about" end >
                    Info
                </NavLink>

            </div>
            <button onClick={() => login.logout()}>Выйти</button>
        </div>
            <Outlet/> // место, куда вставляется все остальное
        </>
    )
};

export default observer(Navbar)

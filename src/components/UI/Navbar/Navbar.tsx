import React from 'react';
import {Outlet, NavLink} from "react-router-dom";
import {useAppSelector} from "../../../hooks/redux";
import {useAppDispatch} from "../../../store/store";
import {logout} from "../../../store/reducers/ActionCreators";


const Navbar = () => {
    const {user} = useAppSelector(state => state.userReducer)
    const dispatch = useAppDispatch()


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
            <button onClick={() => dispatch(logout())}>Выйти</button>
        </div>
            <Outlet/>
        </>
    )
};

export default Navbar

import React from 'react';
import {Link, Outlet, NavLink} from "react-router-dom";


const Navbar = () => {
    // Кнопка выхода (нужна !!!)

    // const {isAuth, setIsAuth} = useContext(AuthContext);
    //
    // const logout = () => {
    //     setIsAuth(false);
    //     localStorage.removeItem('auth')
    // }

    // Нужно создать условия на отрисовку надписей в навбаре
    return (
        <>
        <div className="navbar">

            <div className="navbar__links" style={{fontSize: '18pt'}}>
                <NavLink className={({ isActive }) =>
                    isActive ? 'activeClassName' : undefined
                } to="/about" end >
                    Info
                </NavLink>
                <NavLink className={({ isActive }) =>
                    isActive ? 'activeClassName' : undefined
                } to="/posts" end>
                    List
                </NavLink>
            </div>
            <Outlet/> // место, куда вставляется все остальное
        </div>
        </>
    )
};

export default Navbar

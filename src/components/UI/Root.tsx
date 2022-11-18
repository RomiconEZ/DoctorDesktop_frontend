import React from 'react';
import {Link, Outlet, NavLink} from "react-router-dom";
import Navbar from "./Navbar/Navbar";
import {useAppSelector} from "../../hooks/redux";


const Root = () => {
    const {user, isLoading, error, isAuth} = useAppSelector(state => state.userReducer)
    return (
        <div>

            <Outlet/>

        </div>
    )
};

export default Root

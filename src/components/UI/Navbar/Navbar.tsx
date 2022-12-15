import React from 'react';
import {Outlet, Link, NavLink} from "react-router-dom";
import {useAppSelector} from "../../../hooks/redux";
import {useAppDispatch} from "../../../store/store";
import {logout} from "../../../store/reducers/ActionCreators";
import ButtonWithIcon from "../../common/ButtonWithIcon";
import {logOutIcon, tableIcon, userIcon, menuIcon} from "../../common/icons";

const Navbar = () => {
    const {user, isAuth} = useAppSelector(state => state.userReducer)
    const dispatch = useAppDispatch()

    return (
        <div className='absolute z-[100] h-screen w-screen'>

            <nav className="flex w-full justify-between pt-5 pb-4 pr-10 pl-10 bg-our-dark-navbar">
                <ul className="flex justify-between items-center gap-x-4">


                    <li>
                        <ButtonWithIcon icon={userIcon}>
                            {user!=null && <NavLink to="/auth/menu/selfpage">
                                {user?.name} {user?.surname} {user?.patronymic}
                            </NavLink>}
                        </ButtonWithIcon>
                    </li>


                    <li className="mb-1 lowercase text-our-greenish-300">
                        {user?.role===1 && <div> Врач</div>}
                        {user?.role===2 && <div> Разработчик</div>}
                        {user?.role===3 && <div> Соразработчик</div>}
                        {user?.role===4 && <div> Администратор</div>}
                        {user?.role===5 && <div> Регистратура</div>}
                        {user?.role===6 && <div> Врач-эксперт</div>}
                        {user?.role===7 && <div> Data-администратор</div>}
                        {user?.role===0 && <div> Demo</div>}
                    </li>
                </ul>


                <ul className="flex justify-between items-center gap-x-8">

                    <li>
                        <ButtonWithIcon icon={menuIcon}>
                            <NavLink to="/auth/menu">Меню</NavLink>
                        </ButtonWithIcon>
                    </li>

                    <li>
                        <ButtonWithIcon icon={tableIcon}>
                            <NavLink to="/auth/menu/patients">Пациенты</NavLink>
                        </ButtonWithIcon>
                    </li>


                    <li>
                        <ButtonWithIcon icon={tableIcon}>
                            <NavLink to="/auth/menu/doctors">Врачи</NavLink>
                        </ButtonWithIcon>
                    </li>


                    <li>
                        <ButtonWithIcon
                            icon={logOutIcon}
                            onClick={()=>dispatch(logout())}>
                            Выйти
                        </ButtonWithIcon>
                    </li>

                </ul>
            </nav>


            <main className='relative w-full h-full'>
                <Outlet/>
            </main>

        </div>
    )
};

export default Navbar


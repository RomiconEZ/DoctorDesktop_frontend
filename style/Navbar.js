import React from 'react';
import {Outlet, Link} from "react-router-dom";
import {useAppSelector} from "../../../hooks/redux";
import {useAppDispatch} from "../../../store/store";
import {logout} from "../../../store/reducers/ActionCreators";

const Navbar = () => {
    const {user} = useAppSelector(state => state.userReducer)
    const dispatch = useAppDispatch()


    return (  <>
            <div>
                <div className="flex justify-between align-center pr-8 pl-8 shadow-md">
                    <ul className="flex justify-between align-center space-x-2">
                        <li className="hover:border-b-4 pt-5 pr-3 pl-3 hover:border-b-azure-my hover:text-azure-my ">
                            {user!=null && <Link to={"/menu/doctors/" + user.id}>
                                {user?.name} {user?.surname} {user?.patronymic}
                            </Link>}
                        </li>
                        <li className="pt-5 pb-4 lowercase text-azure-my">{user?.role}</li>
                    </ul>

                    <ul className="flex justify-between align-center space-x-5">
                        {/*<li className="hover:border-b-4 pt-5 pr-3 pl-3 hover:border-b-azure-my hover:text-azure-my">*/}
                        {/*    <Link to="/menu/patients">Список пациентов</Link>*/}
                        {/*</li>*/}
                        {/*<li className="hover:border-b-4 pt-5 pr-3 pl-3 hover:border-b-azure-my hover:text-azure-my">*/}
                        {/*    <Link to="/menu/doctors">Список врачей</Link>*/}
                        {/*</li>*/}

                        <li className="pt-5 hover:text-red-my">
                            <button onClick={() => dispatch(logout())}>Выйти</button>
                        </li>
                    </ul>
                </div>
            </div>
            <Outlet/>
        </>
    )
};

export default Navbar


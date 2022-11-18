import React from 'react';
import {Outlet, Link} from "react-router-dom";
import {useAppSelector} from "../../../hooks/redux";
import {useAppDispatch} from "../../../store/store";
import {logout} from "../../../store/reducers/ActionCreators";

const Navbar = () => {
    const {user} = useAppSelector(state => state.userReducer)
    const dispatch = useAppDispatch()


    return (
        <>
        <div>
            <div className="sticky pt-5 border-b-2 pr-8 pl-8 mx-auto top-0 w-full flex items-center justify-between overflow-hidden">
                <div className="flex flex-col items-center columns-1 hover:bg-gray-100 hover:border border-gray-300">
                    {/*{user?.name} {user?.surname} {user?.patronymic}*/}
                    <div className='p-1 hover:text-cyan-500 transition-colors'>

                        {user!=null && <Link to={"/menu/doctors/" + user.id}>Иван Иванович Иванов</Link>}
                    </div>

                    {/*{user?.role}*/}
                    <span>Врач</span>

                </div>


                <ul className='flex items-center gap-5 overflow-hidden'>
                    <li className='p-1 pb-4 hover:bg-gray-100 hover:border border-gray-300 hover:text-cyan-500 transition-colors'>
                        <Link to="/menu/patients">Список пациентов</Link>
                    </li>
                    <li className='p-1 pb-4 hover:bg-gray-100 hover:border border-gray-300 hover:text-cyan-500 transition-colors'>
                        <Link to="/menu/doctors">Список врачей</Link>
                    </li>

                    <li className='p-1 pb-4 hover:bg-gray-100 hover:border border-gray-300 hover:text-red-500 transition-colors'>
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

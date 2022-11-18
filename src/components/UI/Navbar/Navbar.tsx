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
        <div className="navbar">
            <div>
                {user?.name} {user?.surname} {user?.patronymic}
            </div>
            <div>
                {user?.role}
            </div>


            {/*<div className="sticky top-0 p-4 w-full">*/}
            {/*    <ul className='flex flex-col overflow-hidden'>*/}
            {/*        <li className='hover:bg-gray-100'>*/}
            {/*            <Link to="/patientCard/personalData">Персональные данные</Link>*/}
            {/*        </li>*/}
            {/*        <li className='hover:bg-gray-100'>*/}
            {/*            <Link to="/patientCard/computer-aided-tomography">Компьютерная томография</Link>*/}
            {/*        </li>*/}
            {/*        <li className='hover:bg-gray-100'>*/}
            {/*            <Link to="/patientCard/anthropometric-data">Антропометрия</Link>*/}
            {/*        </li>*/}
            {/*        <li className='hover:bg-gray-100'>*/}
            {/*            <Link to="/patientCard/clinic-data">Клинические данные</Link>*/}
            {/*        </li>*/}
            {/*        <li className='hover:bg-gray-100'>*/}
            {/*            <Link to="/patientCard/anamnesis">Анамнез</Link>*/}
            {/*        </li>*/}
            {/*        <li className='hover:bg-gray-100'>*/}
            {/*            <Link to="/patientCard/concomDeseases">Сопутствующие заболевания</Link>*/}
            {/*        </li>*/}
            {/*        <li className='hover:bg-gray-100'>*/}
            {/*            <Link to="/patientCard/echocardiogram">ЭХОГК</Link>*/}
            {/*        </li>*/}
            {/*        <li className='hover:bg-gray-100'>*/}
            {/*            <Link to="/patientCard/msct">МСКТ</Link>*/}
            {/*        </li>*/}
            {/*        <li className='hover:bg-gray-100'>*/}
            {/*            <Link to="/patientCard/neuralNet">Нейронная сеть</Link>*/}
            {/*        </li>*/}
            {/*    </ul>*/}
            {/*</div>*/}

            <button onClick={() => dispatch(logout())}>Выйти</button>
        </div>
            <Outlet/>
        </>
    )
};

export default Navbar

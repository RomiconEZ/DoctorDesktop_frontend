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
                            {user!=null && <Link to="menu/selfpage">
                                {user?.name} {user?.surname} {user?.patronymic}
                            </Link>}
                        </li>
                        <li className="pt-5 pb-4 lowercase text-azure-my">
                            {user?.role===1 && <div> Врач</div>}
                            {user?.role===2 && <div> Разработчик</div>}
                            {user?.role===3 && <div> Соразработчик</div>}
                            {user?.role===4 && <div> Администратор</div>}
                            {user?.role===5 && <div> Регистратура</div>}
                            {user?.role===6 && <div> Врач-эксперт</div>}
                            {user?.role===6 && <div> Data-администратор</div>}
                        </li>
                    </ul>

                    <ul className="flex justify-between align-center space-x-5">
                        {/*<li className="hover:border-b-4 pt-5 pr-3 pl-3 hover:border-b-azure-my hover:text-azure-my">*/}
                        {/*    <Link to="/menu/patients">Список пациентов</Link>*/}
                        {/*</li>*/}
                        {/*<li className="hover:border-b-4 pt-5 pr-3 pl-3 hover:border-b-azure-my hover:text-azure-my">*/}
                        {/*    <Link to="/menu/doctors">Список врачей</Link>*/}
                        {/*</li>*/}

                        <li className="pt-5 hover:text-red-my hover:font-bold">
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


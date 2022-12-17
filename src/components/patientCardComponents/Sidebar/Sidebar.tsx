import React, {useEffect} from 'react';
import {NavLink, useNavigate} from 'react-router-dom';
import SidebarButton from "./SidebarButton";
import {useAppSelector} from "../../../hooks/redux";

const Sidebar = () => {
    const {SelectedPatient} = useAppSelector(state => state.additionalReducer)
    const navigate = useNavigate();
    useEffect(() => {
        navigate(`personal-data`)
    }, [])


    return (
        <ul className='w-4/5 h-full flex flex-col mt-5 pb-5 gap-y-4 overflow-hidden'>

            <li>
                <span className="italic font-semibold text-sm text-slate-400">Пациент</span>
                <h1 className='font-medium font-sans text-our-greenish-500 text-xl pb-2'>
                    {SelectedPatient.personal_data.second_name + ' ' +
                    SelectedPatient.personal_data.first_name + ' ' +
                        SelectedPatient.personal_data.patronymic}
                </h1>
            </li>

            <li>
                <SidebarButton>
                    <NavLink className="focus:text-white" to="personal-data">Персональные данные</NavLink>
                </SidebarButton>
            </li>

            <li>
                <SidebarButton>
                    <NavLink className="focus:text-white" to="computer-aided-tomography">Компьютерная томография</NavLink>
                </SidebarButton>
            </li>

            <li>
                <SidebarButton>
                    <NavLink className="focus:text-white" to="anthropometric-data">Антропометрия</NavLink>
                </SidebarButton>
            </li>

            <li>
                <SidebarButton>
                    <NavLink className="focus:text-white" to="clinic-data">Клинические данные</NavLink>
                </SidebarButton>
            </li>

            <li>
                <SidebarButton>
                    <NavLink className="focus:text-white" to="anamnesis">Анамнез</NavLink>
                </SidebarButton>
            </li>

            <li>
                <SidebarButton>
                    <NavLink className="focus:text-white" to="concom-deseases">Сопутствующие заболевания</NavLink>
                </SidebarButton>
            </li>

            <li>
                <SidebarButton>
                    <NavLink className="focus:text-white" to="echocardiogram">ЭХОГК</NavLink>
                </SidebarButton>
            </li>

            <li>
                <SidebarButton>
                    <NavLink className="focus:text-white" to="msct">МСКТ</NavLink>
                </SidebarButton>
            </li>

            <li>
                <SidebarButton>
                    <NavLink className="focus:text-white" to="neural-net">Нейронная сеть</NavLink>
                </SidebarButton>
            </li>

        </ul>
    );
};

export default Sidebar;
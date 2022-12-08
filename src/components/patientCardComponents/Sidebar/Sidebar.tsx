import React from 'react';
import { NavLink } from 'react-router-dom';
import SidebarButton from "./SidebarButton";

const Sidebar = () => {

    return (
        <ul className='w-4/5 h-full flex border-t border-t-gray-400 flex-col mt-5 pt-5 gap-y-4 overflow-hidden'>
            <li>
                <SidebarButton>
                    <NavLink to="personal-data">Персональные данные</NavLink>
                </SidebarButton>
            </li>

            <li>
                <SidebarButton>
                    <NavLink to="computer-aided-tomography">Компьютерная томография</NavLink>
                </SidebarButton>
            </li>

            <li>
                <SidebarButton>
                    <NavLink to="anthropometric-data">Антропометрия</NavLink>
                </SidebarButton>
            </li>

            <li>
                <SidebarButton>
                    <NavLink to="clinic-data">Клинические данные</NavLink>
                </SidebarButton>
            </li>

            <li>
                <SidebarButton>
                    <NavLink to="anamnesis">Анамнез</NavLink>
                </SidebarButton>
            </li>

            <li>
                <SidebarButton>
                    <NavLink to="concom-deseases">Сопутствующие заболевания</NavLink>
                </SidebarButton>
            </li>

            <li>
                <SidebarButton>
                    <NavLink to="echocardiogram">ЭХОГК</NavLink>
                </SidebarButton>
            </li>

            <li>
                <SidebarButton>
                    <NavLink to="msct">МСКТ</NavLink>
                </SidebarButton>
            </li>

            <li>
                <SidebarButton>
                    <NavLink to="neural-net">Нейронная сеть</NavLink>
                </SidebarButton>
            </li>

        </ul>
    );
};

export default Sidebar;
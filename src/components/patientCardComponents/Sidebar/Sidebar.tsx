import { MenuItem, MenuList } from '@mui/material';
import React from 'react';
import { NavLink } from 'react-router-dom';

const Sidebar = () => {

  return (
      <ul className='flex flex-col overflow-hidden'>
          <li className='hover:bg-gray-active active:bg-gray-active'>
              <NavLink to="personal-data">Персональные данные</NavLink>
          </li>
          <li className='hover:bg-gray-active active:bg-gray-active'>
              <NavLink to="computer-aided-tomography">Компьютерная томография</NavLink>
          </li>
          <li className='hover:bg-gray-active active:bg-gray-active'>
              <NavLink to="anthropometric-data">Антропометрия</NavLink>
          </li>
          <li className='hover:bg-gray-active active:bg-gray-active'>
              <NavLink to="clinic-data">Клинические данные</NavLink>
          </li>
          <li className='hover:bg-gray-active active:bg-gray-active'>
              <NavLink to="anamnesis">Анамнез</NavLink>
          </li>
          <li className='hover:bg-gray-active active:bg-gray-active'>
              <NavLink to="concom-deseases">Сопутствующие заболевания</NavLink>
          </li>
          <li className='hover:bg-gray-active active:bg-gray-active'>
              <NavLink to="echocardiogram">ЭХОГК</NavLink>
          </li>
          <li className='hover:bg-gray-active active:bg-gray-active'>
              <NavLink to="msct">МСКТ</NavLink>
          </li>
          <li className='hover:bg-gray-active active:bg-gray-active'>
              <NavLink to="neural-net">Нейронная сеть</NavLink>
          </li>
      </ul>
  );
};

export default Sidebar;

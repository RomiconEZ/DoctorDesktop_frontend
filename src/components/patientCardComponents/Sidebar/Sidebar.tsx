
import { MenuItem, MenuList } from '@mui/material';
import React from 'react';
import { NavLink } from 'react-router-dom';

const Sidebar = () => {

  return (
    <MenuList className='sidebar'>
      <MenuItem component={NavLink} className='sidebar-menu__item' to={`personal-data`}>
        {/*<AccountCircleIcon />*/}
        Персональные данные
      </MenuItem>
        <MenuItem component={NavLink} className='sidebar-menu__item' to={`computer-aided-tomography`}>
        {/*<StarBorderIcon />*/}
        Компьютерная томография
      </MenuItem>
      <MenuItem component={NavLink} className='sidebar-menu__item' to={`anthropometric-data`} >
        {/*<FavoriteBorderIcon />*/}
        Антропометрия
      </MenuItem>
      <MenuItem component={NavLink} className='sidebar-menu__item' to={`clinic-data`}>
        {/*<BookmarkBorderIcon />*/}
        Клинические данные
      </MenuItem>
      <MenuItem component={NavLink} className='sidebar-menu__item' to={`anamnesis`}>
        {/*<SettingsIcon />*/}
        Анамнез
      </MenuItem>

        <MenuItem component={NavLink} className='sidebar-menu__item' to={`concom-deseases`}>
            {/*<SettingsIcon />*/}
            Сопутствующие заболевания
        </MenuItem>
        <MenuItem component={NavLink} className='sidebar-menu__item' to={`echocardiogram`}>
            {/*<SettingsIcon />*/}
            ЭХОГК
        </MenuItem>
        <MenuItem component={NavLink} className='sidebar-menu__item' to={`msct`}>
            {/*<SettingsIcon />*/}
            МСКТ
        </MenuItem>
        <MenuItem component={NavLink} className='sidebar-menu__item' to={`neural-net`}>
            {/*<SettingsIcon />*/}
            Нейронная сеть
        </MenuItem>
    </MenuList>
  );
};

export default Sidebar;

import {NavLink} from "react-router-dom";
import {useAppSelector} from "../../hooks/redux";

import useBreadcrumbs from "use-react-router-breadcrumbs";
import {routes} from "../common/BreadCrumb";
import React from "react";
import Loader from "../common/Loader";



const SelfPage =() => {
    const {user, isLoading, error} = useAppSelector(state => state.userReducer)
    const breadcrumbs = useBreadcrumbs(routes);

    return (

        <div>
            {isLoading && <Loader/>}
            {error && <h1>Произошла ошибка при загрузке</h1>}
            <>
                {breadcrumbs.map(({match, breadcrumb}) => (
                    <NavLink key={match.pathname} to={match.pathname}>
                        {breadcrumb}
                    </NavLink>
                ))}
            </>

            <div>
                <div>
                    <span>Фамилия Имя Отчество</span>
                    <span>{user?.surname + ' ' + user?.name + ' ' + user?.patronymic} </span>
                </div>
                <div>
                    <span>Дата рождения</span>
                    <span>{user?.birthdate} </span>
                </div>
                <div>
                    <span>Пол</span>
                    <span>{user?.sex} </span>
                </div>

                <div>
                    <span>Должность</span>
                    <span>{user?.occupation} </span>
                </div>
                <div>
                    <span>Пользовательский режим</span>
                    <span>{user?.role} </span>
                </div>
                <div>
                    <span>Стаж работы</span>
                    <span>{user?.workExperience}{(user != undefined) && (user?.workExperience <= 4) ? 'года' : 'лет'}  </span>
                </div>
                <div>
                    <span>Регион</span>
                    <span>{user?.region} </span>
                </div>
                <div>
                    <span>Город</span>
                    <span>{user?.city} </span>
                </div>
                <div>
                    <span>Учереждение</span>
                    <span>{user?.placeofwork} </span>
                </div>
                <div>
                    <span>Профиль</span>
                    <span>{user?.role} </span>
                </div>
            </div>
        </div>

    )
}

export default SelfPage
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

        <div className="ml-5 mb-10">
            {isLoading && <Loader/>}
            {error && <h1>Произошла ошибка при загрузке</h1>}
                {breadcrumbs.map(({ match, breadcrumb }) => (
                    <NavLink key={match.pathname} to={match.pathname} className="text-azure-my text-xs mr-1">
                        /{breadcrumb}
                    </NavLink>
                ))}
            <div className="flex justify-center items-center flex-wrap columns-1 mt-5">
                <div className=" justify-center items-center grid columns-1 gap-y-4">

                    <div className="flex justify-between space-x-5">
                        <div className="font-medium">Фамилия Имя Отчество</div>
                        <div>{user?.surname + ' ' + user?.name + ' ' + user?.patronymic} </div>
                    </div>
                    <div className="flex justify-between">
                        <span className="font-medium">Дата рождения</span>
                        <span>{user?.birthdate} </span>
                    </div>
                    <div className="flex justify-between">
                        <span className="font-medium">Пол</span>
                        <span>{user?.sex} </span>
                    </div>

                    <div className="flex justify-between">
                        <span className="font-medium">Должность</span>
                        <span>{user?.occupation} </span>
                    </div>
                    <div className="flex justify-between">
                        <span className="font-medium">Пользовательский режим</span>
                        <span>{user?.role} </span>
                    </div>
                    <div className="flex justify-between">
                        <span className="font-medium">Стаж работы</span>
                        <span>{user?.workExperience}{(user != undefined) && (user?.workExperience <= 4) ? 'года' : 'лет'}  </span>
                    </div>
                    <div className="flex justify-between">
                        <span className="font-medium">Регион</span>
                        <span>{user?.region} </span>
                    </div>
                    <div className="flex justify-between">
                        <span className="font-medium">Город</span>
                        <span>{user?.city} </span>
                    </div>
                    <div className="flex justify-between">
                        <span className="font-medium">Учереждение</span>
                        <span>{user?.placeOfWork} </span>
                    </div>
                    <div className="flex justify-between">
                        <span className="font-medium">Профиль</span>
                        <span>{user?.role} </span>
                    </div>
                </div>
            </div>
        </div>

    )
}

export default SelfPage
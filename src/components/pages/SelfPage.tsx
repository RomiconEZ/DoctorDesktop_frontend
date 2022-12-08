import {NavLink} from "react-router-dom";
import {useAppSelector} from "../../hooks/redux";

import useBreadcrumbs from "use-react-router-breadcrumbs";
import {routes} from "../common/BreadCrumb";
import React from "react";
import Loader from "../common/Loader";
import ReadFieldStr from "../common/ReadFieldStr"
import ReadFieldBool from "../common/ReadFieldBool"


const SelfPage =() => {
    const {user, isLoading, error} = useAppSelector(state => state.userReducer)
    const breadcrumbs = useBreadcrumbs(routes);

    return (

        <div className="ml-5 mb-10">
            {isLoading && <Loader/>}
            {error && <h1>Произошла ошибка при загрузке</h1>}
                {breadcrumbs.map(({ match, breadcrumb }) => (
                    <NavLink key={match.pathname} to={match.pathname} className="text-our-greenish-300 text-xs mr-1">
                        /{breadcrumb}
                    </NavLink>
                ))}

            {user!=null ?
                <div className="flex justify-center items-center flex-wrap mt-30 ">
                    <div className="w-2/3 bg-white shadow-sm p-7 rounded-lg mt-10">

                        <div className="grid grid-cols-1 gap-y-4 pt-4 ml-6">

                            <ReadFieldStr
                                label="Фамилия Имя Отчество"
                                value={user?.surname + ' ' + user?.name + ' ' + user?.patronymic}
                            />

                            <ReadFieldStr
                                label="Дата рождения"
                                value={user?.birthdate}
                            />

                            <ReadFieldBool
                                label="Пол"
                                boolValue={user?.sex}
                                trueOption="мужской"
                                falseOption="женский"
                            />

                            <ReadFieldStr
                                label="Должность"
                                value={user?.occupation}
                            />

                            <div className=' flex'>
                                <span className=' w-1/4 mr-6 font-semibold text-slate-800'>Пользовательский режим</span>
                                {user?.role===1 && <span className="w-1/2 py-2 pl-6 rounded-md bg-our-gray-main-theme font-semibold text-slate-600">Врач</span>}
                                {user?.role===2 && <span className="w-1/2 py-2 pl-6 rounded-md bg-our-gray-main-theme font-semibold text-slate-600">Разработчик</span>}
                                {user?.role===3 && <span className="w-1/2 py-2 pl-6 rounded-md bg-our-gray-main-theme font-semibold text-slate-600">Соразработчик</span>}
                                {user?.role===4 && <span className="w-1/2 py-2 pl-6 rounded-md bg-our-gray-main-theme font-semibold text-slate-600">Администратор</span>}
                                {user?.role===5 && <span className="w-1/2 py-2 pl-6 rounded-md bg-our-gray-main-theme font-semibold text-slate-600">Регистратура</span>}
                                {user?.role===6 && <span className="w-1/2 py-2 pl-6 rounded-md bg-our-gray-main-theme font-semibold text-slate-600">Врач-эксперт</span>}
                                {user?.role===6 && <span className="w-1/2 py-2 pl-6 rounded-md bg-our-gray-main-theme font-semibold text-slate-600">Data-администратор</span>}
                            </div>

                            <ReadFieldStr
                                label="Стаж работы"
                                value={`
                                ${user?.workExperience} 
                                ${user?.workExperience % 10 == 1 ? ' год' : ''}
                                ${user?.workExperience % 10 > 1 && user?.workExperience % 10 <= 4 ? ' года' : ''}
                                ${user?.workExperience % 10 > 4 ? ' лет' : ''}
                            `}
                            />

                            <ReadFieldStr
                                label="Регион"
                                value={user?.region}
                            />

                            <ReadFieldStr
                                label="Город"
                                value={user?.city}
                            />

                            <ReadFieldStr
                                label="Учреждение"
                                value={user?.placeOfWork}
                            />

                        </div>
                    </div>
                </div>
                :
                <h1>user undefined!</h1>
            }


        </div>

    )
}

export default SelfPage
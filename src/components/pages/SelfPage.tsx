import {NavLink} from "react-router-dom";
import {useAppSelector} from "../../hooks/redux";

import useBreadcrumbs from "use-react-router-breadcrumbs";
import {routes} from "../common/BreadCrumb";
import React from "react";
import Loader from "../common/Loader";
import ReadFieldStr from "../common/ReadFieldStr";
import ReadFieldBool from "../common/ReadFieldBool";



const SelfPage =() => {
    const {user, isLoading, error} = useAppSelector(state => state.userReducer)
    const breadcrumbs = useBreadcrumbs(routes);

    return (

        <div className="ml-5 mb-10 mr-5 pt-6" >
            {isLoading && <Loader/>}
            {error && <h1>Произошла ошибка при загрузке</h1>}
            {breadcrumbs.map(({ match, breadcrumb }) => (
                <NavLink key={match.pathname} to={match.pathname} className="text-green-active-link text-xs mr-1 mb-6">
                    /{breadcrumb}
                </NavLink>
            ))}

            {user!=null ?

            <div className="flex justify-center items-center flex-wrap mt-30 ">
                <div className="w-2/3 bg-gray-active shadow-sm p-7 rounded-lg mt-10">

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
                            <span className=' w-1/4 mr-6'>Пользовательский режим</span>
                            {user?.role===1 && <span className="w-1/2 py-2 pl-6 rounded-md bg-gray-main-theme text-gray-non-active">Врач</span>}
                            {user?.role===2 && <span className="w-1/2 py-2 pl-6 rounded-md bg-gray-main-theme text-gray-non-active">Разработчик</span>}
                            {user?.role===3 && <span className="w-1/2 py-2 pl-6 rounded-md bg-gray-main-theme text-gray-non-active">Соразработчик</span>}
                            {user?.role===4 && <span className="w-1/2 py-2 pl-6 rounded-md bg-gray-main-theme text-gray-non-active">Администратор</span>}
                            {user?.role===5 && <span className="w-1/2 py-2 pl-6 rounded-md bg-gray-main-theme text-gray-non-active">Регистратура</span>}
                            {user?.role===6 && <span className="w-1/2 py-2 pl-6 rounded-md bg-gray-main-theme text-gray-non-active">Врач-эксперт</span>}
                            {user?.role===6 && <span className="w-1/2 py-2 pl-6 rounded-md bg-gray-main-theme text-gray-non-active">Data-администратор</span>}
                        </div>

                        <ReadFieldStr
                            label="Стаж работы"
                            value={user?.workExperience + user?.workExperience <= 4 ? ' года' : ' лет'}
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
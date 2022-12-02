import {NavLink, useNavigate, useParams} from "react-router-dom";
import {Link} from "react-router-dom";
import {useAppDispatch, useAppSelector} from "../../hooks/redux";
import {additionalSlice} from "../../store/reducers/AdditionalSlice";
import {doctorAPI, DoctorForDoctor} from "../../services/DoctorService";
import useBreadcrumbs from "use-react-router-breadcrumbs";
import {routes} from "../common/BreadCrumb";
import React, {useEffect} from "react";
import Loader from "../common/Loader";
import {doctorsSlice} from "../../store/reducers/DoctorsSlice";
import ReadFieldStr from "../common/ReadFieldStr";
import ReadFieldBool from "../common/ReadFieldBool";
import MyButton from "../common/MyButton";



const DoctorPage =() =>{
    const {user} = useAppSelector(state => state.userReducer)
    const params = useParams<string>()
    console.log(params.id)
    const body: DoctorForDoctor = {
        doctorID: user!.id,
        selecteddoctorID: params.id
    }
    const {data, error, isLoading:preloading , refetch} =  doctorAPI.useFetchSelectedDoctorQuery(body)

    const {SelectedDoctor: doctor} = useAppSelector(state => state.additionalReducer)

    const dispatch = useAppDispatch()
    const breadcrumbs = useBreadcrumbs(routes);
    const navigate = useNavigate();

    const handleNavigate = (e: React.FormEvent<HTMLButtonElement>) => {
        e.preventDefault();
        navigate(`/auth/menu/doctors/editdoctor/${doctor.id}`)
    }


    useEffect(() => {
        if ((preloading === false) && (data.data != undefined))
        {

            dispatch(additionalSlice.actions.ChangeSelectedDoctor(data.data))
        }
    }, [preloading])


    return(
        <div>
            {preloading && <Loader/>}
            {error && <h1>Произошла ошибка при загрузке</h1>}

            <>
                {breadcrumbs.map(({ match, breadcrumb }) => (
                    <NavLink key={match.pathname} to={match.pathname} className="text-azure-my text-xs mr-1">
                        /{breadcrumb}
                    </NavLink>
                ))}
            </>


            {!preloading &&
                <div className="flex justify-center items-center flex-wrap mt-30 ">
                    <div className="w-2/3 bg-gray-active shadow-sm p-7 rounded-lg mt-10">

                        <div className="grid grid-cols-1 gap-y-4 pt-4 ml-6">

                            <ReadFieldStr
                                label="Фамилия Имя Отчество"
                                value={doctor.surname + ' ' + doctor.name + ' ' + doctor.patronymic}
                            />

                            <ReadFieldStr
                                label="Дата рождения"
                                value={doctor.birthdate}
                            />

                            <ReadFieldBool
                                label="Пол"
                                boolValue={doctor.sex}
                                trueOption="мужской"
                                falseOption="женский"
                            />

                            <ReadFieldStr
                                label="Должность"
                                value={doctor.occupation}
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
                                value={doctor.workExperience + doctor.workExperience <= 4 ? ' года' : ' лет'}
                            />

                            <ReadFieldStr
                                label="Регион"
                                value={doctor.region}
                            />

                            <ReadFieldStr
                                label="Город"
                                value={doctor.city}
                            />

                            <ReadFieldStr
                                label="Учреждение"
                                value={doctor.placeOfWork}
                            />
                        </div>

                        <MyButton
                            onClick={handleNavigate}
                            className="relative left-1/2 mt-4 "
                        >
                            Редактировать
                        </MyButton>



                    </div>



                </div>

            }


        </div>

    )
}
export default DoctorPage
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
            {!preloading && <>
                <div>
                    <div>
                        <span>Фамилия Имя Отчество</span>
                        <span>{doctor.surname + ' ' + doctor.name + ' ' + doctor.patronymic} </span>
                    </div>
                    <div>
                        <span>Дата рождения</span>
                        <span >{doctor.birthdate} </span>
                    </div>
                    <div>
                        <span>Пол</span>
                        <span>{doctor.sex} </span>
                    </div>

                    <div>
                        <span >Должность</span>
                        <span>{doctor.occupation} </span>
                    </div>
                    <div>
                        <span>Пользовательский режим</span>
                        <span>{doctor.role} </span>
                    </div>
                    <div>
                        <span>Стаж работы</span>
                        <span>{doctor.workExperience}{doctor.workExperience<=4 ? 'года' : 'лет'}  </span>
                    </div>
                    <div>
                        <span>Регион</span>
                        <span>{doctor.region} </span>
                    </div>
                    <div>
                        <span>Город</span>
                        <span>{doctor.city} </span>
                    </div>
                    <div>
                        <span>Учереждение</span>
                        <span>{doctor.placeOfWork} </span>
                    </div>
                    <div>
                        <span>Профиль</span>
                        <span>{doctor.role} </span>
                    </div>
                </div>
            <button onClick={handleNavigate}>
                Редактировать
            </button>
            </>
            }
        </div>

    )
}
export default DoctorPage
import {NavLink, useLocation, useParams} from "react-router-dom";
import {Link} from "react-router-dom";
import {useAppDispatch, useAppSelector} from "../../hooks/redux";
import {additionalSlice} from "../../store/reducers/AdditionalSlice";
import {doctorAPI, DoctorForDoctor} from "../../services/DoctorService";
import useBreadcrumbs from "use-react-router-breadcrumbs";
import {routes} from "../common/BreadCrumb";
import React from "react";
import Loader from "../common/Loader";



const DoctorPage =() =>{
    const {user} = useAppSelector(state => state.userReducer)
    const {SelectedDoctor} = useAppSelector(state => state.additionalReducer)

    const dispatch = useAppDispatch()
    const breadcrumbs = useBreadcrumbs(routes);

    const params = useParams<string>()
    const body: DoctorForDoctor = {
        doctorID: user?.id || -1,
        selecteddoctorID: Number(params) || -1
    }
    const {data: doctor, error, isLoading, refetch} =  doctorAPI.useFetchSelectedDoctorQuery(body)


    if (doctor != undefined)
    {
        dispatch(additionalSlice.actions.ChangeSelectedDoctor(doctor))
    }
    return(
        <div>
            {isLoading && <Loader/>}
            {error && <h1>Произошла ошибка при загрузке</h1>}
            <>
                {breadcrumbs.map(({ match, breadcrumb }) => (
                    <NavLink key={match.pathname} to={match.pathname}>
                        {breadcrumb}
                    </NavLink>
                ))}
            </>

                <div>
                    <div>
                        <span>Фамилия Имя Отчество</span>
                        <span>{SelectedDoctor.surname + ' ' + SelectedDoctor.name + ' ' + SelectedDoctor.patronymic} </span>
                    </div>
                    <div>
                        <span>Дата рождения</span>
                        <span >{SelectedDoctor.birthdate} </span>
                    </div>
                    <div>
                        <span>Пол</span>
                        <span>{SelectedDoctor.sex} </span>
                    </div>

                    <div>
                        <span >Должность</span>
                        <span>{SelectedDoctor.occupation} </span>
                    </div>
                    <div>
                        <span>Пользовательский режим</span>
                        <span>{SelectedDoctor.role} </span>
                    </div>
                    <div>
                        <span>Стаж работы</span>
                        <span>{SelectedDoctor.workExperience}{SelectedDoctor.workExperience<=4 ? 'года' : 'лет'}  </span>
                    </div>
                    <div>
                        <span>Регион</span>
                        <span>{SelectedDoctor.region} </span>
                    </div>
                    <div>
                        <span>Город</span>
                        <span>{SelectedDoctor.city} </span>
                    </div>
                    <div>
                        <span>Учереждение</span>
                        <span>{SelectedDoctor.placeOfWork} </span>
                    </div>
                    <div>
                        <span>Профиль</span>
                        <span>{SelectedDoctor.role} </span>
                    </div>
                </div>
            <Link to={`auth/menu/doctors/editdoctor/${SelectedDoctor.id}`}><button>Редактировать</button></Link>
        </div>
    )
}
export default DoctorPage
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

    const {SelectedDoctor} = useAppSelector(state => state.additionalReducer)

    const dispatch = useAppDispatch()
    const breadcrumbs = useBreadcrumbs(routes);
    const navigate = useNavigate();

    const handleNavigate = (e: React.FormEvent<HTMLButtonElement>) => {
        e.preventDefault();
        navigate(`/auth/menu/doctors/editdoctor/${SelectedDoctor.id}`)
    }


    useEffect(() => {
        console.log(data)
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
            <button onClick={handleNavigate}>
                Редактировать
            </button>
        </div>
    )
}
export default DoctorPage
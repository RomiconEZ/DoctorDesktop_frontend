import React, {useEffect} from 'react';
import {useAppDispatch, useAppSelector} from "../../hooks/redux";
import UpdateDoctorForm from "../UI/UpdateDoctorForm";
import useBreadcrumbs from "use-react-router-breadcrumbs";
import {routes} from "../common/BreadCrumb";
import {NavLink, useParams} from "react-router-dom";
import Loader from "../common/Loader";
import {doctorAPI, DoctorForDoctor} from "../../services/DoctorService";
import {additionalSlice} from "../../store/reducers/AdditionalSlice";



const UpdateDoctorPage = () => {
    const {user} = useAppSelector(state => state.userReducer)
    const params = useParams<string>()
    const {SelectedDoctor: doctor} = useAppSelector(state => state.additionalReducer)
    const breadcrumbs = useBreadcrumbs(routes);
    const dispatch = useAppDispatch()
    let refetch: boolean = false
    let data: any
    let error: any
    let preloading: any

    const body: DoctorForDoctor = {
        doctorID: user!.id,
        selecteddoctorID: params.id
    }
    if (doctor.id!==Number(params.id)) {
        refetch = true
        const {data, error, isLoading: preloading} = doctorAPI.useFetchSelectedDoctorQuery(body)
    }

    useEffect(() => {
        if (refetch) {
            if ((preloading === false) && (data.data != undefined)) {
                dispatch(additionalSlice.actions.ChangeSelectedDoctor(data.data))
            }
        }
    }, [refetch, preloading])

    return (
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
                <UpdateDoctorForm />
            </div>
        </div>
    );
};

export default UpdateDoctorPage;

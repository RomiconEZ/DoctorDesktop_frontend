import TablePatients from "../patientsTablesComponents/TablePatients"
import useBreadcrumbs from "use-react-router-breadcrumbs";
import {routes} from "../common/BreadCrumb";
import {NavLink} from "react-router-dom";
import React, {useEffect} from "react";
import Loader from "../common/Loader";
import {useAppDispatch, useAppSelector} from "../../hooks/redux";

import {PaginationPatientsForCertainDoctor, patientAPI} from "../../services/PatientService";
import {patientsSlice} from "../../store/reducers/PatientsSlice";

const PatientsTablePage = () =>{
    const breadcrumbs = useBreadcrumbs(routes);

    const {user} = useAppSelector(state => state.userReducer);
    const body: PaginationPatientsForCertainDoctor = {
        doctorID: user!.id | 0,
        limit: 100,
        numofpage: -1,
    }

    const {data, error, isLoading: preloading, refetch}  = patientAPI.useFetchPatientsQuery(body)

    const isLoading = useAppSelector(state => state.patientsReducer.isLoading);
    const dispatch = useAppDispatch()



    useEffect(() => {
        dispatch(patientsSlice.actions.patientsRequested())
    }, [])

    useEffect(() => {

        if ((preloading === false) && (data.data != undefined))
        {
            console.log("Получили с сервера пациентов")
            console.log(data)
            console.log(Array.from(data))
            dispatch(patientsSlice.actions.patientsReceived(Array.from(data)))
        }
    }, [preloading])





    return(
        <div className="ml-5 mb-10 mt-2">
            {preloading && <Loader/>}
            {error && <h1>Произошла ошибка при загрузке</h1>}
            <>
                {breadcrumbs.map(({ match, breadcrumb }) => (
                    <NavLink key={match.pathname} to={match.pathname} className="text-azure-my text-xs mr-1">
                        /{breadcrumb}
                    </NavLink>
                ))}
            </>
            <TablePatients/>
        </div>
    )
}
export default PatientsTablePage
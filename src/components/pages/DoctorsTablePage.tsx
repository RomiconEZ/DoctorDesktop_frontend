import TableDoctors from "../doctorsTablesComponents/TableDoctors";
import useBreadcrumbs from "use-react-router-breadcrumbs";
import {routes} from "../common/BreadCrumb";
import {NavLink} from "react-router-dom";
import React, {useEffect} from "react";
import Loader from "../common/Loader";
import {useAppDispatch, useAppSelector} from "../../hooks/redux";
import {doctorsSlice} from "../../store/reducers/DoctorsSlice";
import {doctorAPI, PaginationDoctors} from "../../services/DoctorService";

const DoctorsTablePage = () => {


    const breadcrumbs = useBreadcrumbs(routes);
    let refetch_data
    const {user} = useAppSelector(state => state.userReducer);
    const body: PaginationDoctors = {
        doctorID: user!.id | 0,
        limit: 100,
        numofpage: -1,
    }

    const {data, error, isLoading: preloading, refetch}  = doctorAPI.useFetchDoctorsQuery(body)

    const isLoading = useAppSelector(state => state.doctorsReducer.isLoading);
    const dispatch = useAppDispatch()



    useEffect(() => {
        dispatch(doctorsSlice.actions.doctorsRequested())
    }, [])

    useEffect(() => {

        if ((preloading === false) && (data.data != undefined))
        {

            dispatch(doctorsSlice.actions.doctorsReceived(Array.from(data.data)))
            console.log("Обновили данные")
        }
    }, [preloading])

    const RefetchRequest = (e: React.FormEvent<HTMLButtonElement>) => {
        e.preventDefault();
        refetch()
    }
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

            <button onClick={RefetchRequest}>
                обновить
            </button>

            <TableDoctors/>
        </div>
    )
}
export default DoctorsTablePage
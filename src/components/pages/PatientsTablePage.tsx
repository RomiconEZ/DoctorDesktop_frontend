import TablePatients from "../patientsTablesComponents/TablePatients"
import useBreadcrumbs from "use-react-router-breadcrumbs";
import {routes} from "../common/BreadCrumb";
import {NavLink} from "react-router-dom";
import React from "react";
import Loader from "../common/Loader";
import {useAppSelector} from "../../hooks/redux";

const PatientsTablePage = () =>{
    const breadcrumbs = useBreadcrumbs(routes);
    const {isLoading, error} = useAppSelector(state => state.userReducer);

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
            <TablePatients/>
        </div>
    )
}
export default PatientsTablePage
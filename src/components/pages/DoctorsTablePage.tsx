import TableDoctors from "../doctorsTablesComponents/TableDoctors";
import useBreadcrumbs from "use-react-router-breadcrumbs";
import {routes} from "../common/BreadCrumb";
import {NavLink} from "react-router-dom";
import React from "react";
import Loader from "../common/Loader";
import {useAppSelector} from "../../hooks/redux";

const DoctorsTablePage = () =>{
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
            <TableDoctors/>
        </div>
    )
}
export default DoctorsTablePage
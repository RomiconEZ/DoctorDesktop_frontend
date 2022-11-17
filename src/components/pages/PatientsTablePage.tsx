import TablePatients from "../patientsTablesComponents/TablePatients"
import useBreadcrumbs from "use-react-router-breadcrumbs";
import {routes} from "../common/BreadCrumb";
import {NavLink} from "react-router-dom";
import React from "react";

const PatientsTablePage = () =>{
    const breadcrumbs = useBreadcrumbs(routes);

    return(
        <div>
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
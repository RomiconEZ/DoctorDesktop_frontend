import TableDoctors from "../doctorsTablesComponents/TableDoctors";
import useBreadcrumbs from "use-react-router-breadcrumbs";
import {routes} from "../common/BreadCrumb";
import {NavLink} from "react-router-dom";
import React from "react";

const DoctorsTablePage = () =>{
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
            <TableDoctors/>
        </div>
    )
}
export default DoctorsTablePage
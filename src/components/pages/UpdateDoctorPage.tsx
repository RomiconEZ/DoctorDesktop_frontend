import React from 'react';
import {useAppSelector} from "../../hooks/redux";
import UpdateDoctorForm from "../UI/UpdateDoctorForm";
import useBreadcrumbs from "use-react-router-breadcrumbs";
import {routes} from "../common/BreadCrumb";
import {NavLink} from "react-router-dom";
import Loader from "../common/Loader";



const UpdateDoctorPage = () => {
    const {isLoading, error} = useAppSelector(state => state.userReducer);
    const breadcrumbs = useBreadcrumbs(routes);

    return (
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
                {isLoading && <h1>Идет загрузка...</h1>}
                {error && <h1>Произошла ошибка при загрузке</h1>}
                <UpdateDoctorForm />
            </div>
        </div>
    );
};

export default UpdateDoctorPage;

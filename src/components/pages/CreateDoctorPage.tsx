import React from 'react';
import {useAppSelector} from "../../hooks/redux";
import CreateDoctorForm from "../UI/CreateDoctorForm";
import useBreadcrumbs from "use-react-router-breadcrumbs";
import {NavLink} from "react-router-dom";
import {routes} from "../common/BreadCrumb";
import Loader from "../common/Loader";




const CreateDoctorPage = () => {
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
                <CreateDoctorForm />
            </div>
        </div>
    );
};

export default CreateDoctorPage;

import React from 'react';
import {useAppSelector} from "../../hooks/redux";
import CreatePatientForm from "../UI/CreatePatientForm";
import useBreadcrumbs from "use-react-router-breadcrumbs";
import {routes} from "../common/BreadCrumb";
import {NavLink} from "react-router-dom";

const CreatePatientPage = () => {
    const {isLoading, error} = useAppSelector(state => state.userReducer);
    const breadcrumbs = useBreadcrumbs(routes);

// нужна кнопка создать
    return (
        <div>
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
                <CreatePatientForm />
            </div>
        </div>
    );
};

export default CreatePatientPage;

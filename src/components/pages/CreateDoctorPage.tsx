import React from 'react';
import {useAppSelector} from "../../hooks/redux";
import CreateDoctorForm from "../UI/CreateDoctorForm";
import useBreadcrumbs from "use-react-router-breadcrumbs";

// https://github.com/icd2k3/use-react-router-breadcrumbs.git
const CreateDoctorPage = () => {
    const {isLoading, error} = useAppSelector(state => state.userReducer);
    const breadcrumbs = useBreadcrumbs();
    return (
        <div>
            <React.Fragment>
                {breadcrumbs.map(({ breadcrumb }) => breadcrumb)}
            </React.Fragment>
            <div>
                {isLoading && <h1>Идет загрузка...</h1>}
                {error && <h1>Произошла ошибка при загрузке</h1>}
                <CreateDoctorForm />
            </div>
        </div>
    );
};

export default CreateDoctorPage;

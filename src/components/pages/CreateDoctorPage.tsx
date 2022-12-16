import React from 'react';
import {useAppSelector} from "../../hooks/redux";
import CreateDoctorForm from "../UI/CreateDoctorForm";
import useBreadcrumbs from "use-react-router-breadcrumbs";
import {NavLink} from "react-router-dom";
import {routes} from "../common/BreadCrumb";
import Loader from "../common/Loader";




const CreateDoctorPage = () => {
    const {isLoading, error} = useAppSelector(state => state.userReducer);


    return (
        <div className="ml-5 mb-10">
            {isLoading && <Loader/>}
            {error && <h1>Произошла ошибка при загрузке</h1>}


            <div>
                <CreateDoctorForm />
            </div>
        </div>
    );
};

export default CreateDoctorPage;

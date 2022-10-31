import React from 'react';
import {useAppSelector} from "../../hooks/redux";
import CreateDoctorForm from "../UI/CreateDoctorForm";

const CreateDoctorPage = () => {
    const {isLoading, error} = useAppSelector(state => state.userReducer);

    return (
        <div>
            <div>
                {isLoading && <h1>Идет загрузка...</h1>}
                {error && <h1>Произошла ошибка при загрузке</h1>}
                <CreateDoctorForm />
            </div>
        </div>
    );
};

export default CreateDoctorPage;

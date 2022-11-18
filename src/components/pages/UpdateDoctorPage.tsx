import React from 'react';
import {useAppSelector} from "../../hooks/redux";
import UpdateDoctorForm from "../UI/UpdateDoctorForm";



const UpdateDoctorPage = () => {
    const {isLoading, error} = useAppSelector(state => state.userReducer);

    return (
        <div>
            <div>
                {isLoading && <h1>Идет загрузка...</h1>}
                {error && <h1>Произошла ошибка при загрузке</h1>}
                <UpdateDoctorForm />
            </div>
        </div>
    );
};

export default UpdateDoctorPage;

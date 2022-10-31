import React from 'react';
import {useAppSelector} from "../../hooks/redux";
import UpdateDoctorForm from "../UI/UpdateDoctorForm";
import {IDoctorFull} from "../../models/IDoctorFull";
import {DoctorUpdateFormProps} from "../UI/UpdateDoctorForm/UpdateDoctorForm";



const CreateDoctorPage : React.FC<DoctorUpdateFormProps> = ({doctor}) => {
    const {isLoading, error} = useAppSelector(state => state.userReducer);

    return (
        <div>
            <div>
                {isLoading && <h1>Идет загрузка...</h1>}
                {error && <h1>Произошла ошибка при загрузке</h1>}
                <UpdateDoctorForm doctor={doctor} />
            </div>
        </div>
    );
};

export default CreateDoctorPage;

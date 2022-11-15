import React from 'react';
import {useAppSelector} from "../../hooks/redux";
import PersonalDataReadOnly from "./readOnlyForms/PersonalDataReadOnly";
import PersonalDataEdit from "./editForms/PersonalDataEdit";
import {PatientForDoctor} from "../../services/PatientService";
import {useParams} from "react-router-dom";

const {user, error, isLoading} = useAppSelector(state => state.userReducer)

const PersonalData = () => {



    const isEditButtonPressed = false

    return (
        <div>
            {isLoading && <h1>Loading...</h1>}
            {error && <h1>{error}</h1>}

            {!isEditButtonPressed && <PersonalDataReadOnly />}
            {isEditButtonPressed && <PersonalDataEdit/>}

        </div>
    );
};

export default PersonalData;
import React from 'react';
import {useAppSelector} from "../../hooks/redux";
import PersonalDataReadOnly from "./readOnlyForms/PersonalDataReadOnly";
import PersonalDataEdit from "./editForms/PersonalDataEdit";
import {PatientForDoctor} from "../../services/PatientService";
import {useParams} from "react-router-dom";


const PersonalData = () => {

    const {SelectedPatient, IsEditButtonPressed} = useAppSelector(state => state.additionalReducer)

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
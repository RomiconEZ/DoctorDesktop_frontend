import React, {useEffect} from 'react';
import {useAppDispatch, useAppSelector} from "../../hooks/redux";
import {PatientSlice} from "../../store/reducers/PatientSlice";
import {fetchPatient} from "../../store/reducers/ActionCreators";
import {IPersonal_data} from "../../models/IPatient";
import PersonalDataReadOnly from "./readOnlyForms/PersonalDataReadOnly";
import PersonalDataEdit from "./editForms/PersonalDataEdit";

const PersonalData = () => {
    const dispatch = useAppDispatch();
    const {isLoading, error, isEditButtonPressed} = useAppSelector(state => state.patientReducer);
    useEffect(() => {
        dispatch(fetchPatient())
    }, [])

    

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
import React, {useEffect} from 'react';
import {useAppDispatch, useAppSelector} from "../../hooks/redux";
import {fetchPatient} from "../../store/reducers/ActionCreators";
import PersonalDataReadOnly from "./readMode/PersonalDataReadOnly";
import PersonalDataEdit from "./editMode/PersonalDataEdit";

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
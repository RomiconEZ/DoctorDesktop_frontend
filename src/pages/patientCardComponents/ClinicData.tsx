import React from 'react';
import {useAppDispatch, useAppSelector} from "../../hooks/redux";

const ClinicData = () => {
    const dispatch = useAppDispatch();
    const {patient, isLoading, error} = useAppSelector(state => state.patientReducer);
    return (
        <div>
            {JSON.stringify(patient.clinical_data)}
        </div>
    );
};

export default ClinicData;
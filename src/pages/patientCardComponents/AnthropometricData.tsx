import React from 'react';
import {useAppDispatch, useAppSelector} from "../../hooks/redux";

const AnthropometricData = () => {
    const dispatch = useAppDispatch();
    const {patient, isLoading, error} = useAppSelector(state => state.patientReducer);
    return (
        <div>
            {JSON.stringify(patient.anthropometric_data)}
        </div>
    );
};

export default AnthropometricData;
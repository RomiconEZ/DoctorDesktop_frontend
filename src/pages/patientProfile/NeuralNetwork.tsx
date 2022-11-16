import React from 'react';
import {useAppDispatch, useAppSelector} from "../../hooks/redux";

const NeuralNetwork = () => {
    const dispatch = useAppDispatch();
    const {patient, isLoading, error} = useAppSelector(state => state.patientReducer);

    
    return (
        <div>
            Раздел нейронки
        </div>
    );
};

export default NeuralNetwork;
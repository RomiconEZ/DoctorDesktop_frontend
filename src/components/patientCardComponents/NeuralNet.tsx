import React from 'react';
import {useAppSelector} from "../../hooks/redux";
import NeuralNetReadOnly from "./readOnlyForms/NeuralNetReadOnly";
import NeuralNetEdit from "./editForms/NeuralNetEdit";





const NeuralNet = () => {
    const {IsEditButtonPressed} = useAppSelector(state => state.additionalReducer)

    return (
        <div>
            {!IsEditButtonPressed && <NeuralNetReadOnly />}
            {IsEditButtonPressed && <NeuralNetEdit/>}
        </div>
    );
};

export default NeuralNet;
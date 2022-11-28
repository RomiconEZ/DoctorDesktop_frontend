import React from 'react';
import {useAppSelector} from "../../hooks/redux";

import AnthropometricDataReadOnly from "./readOnlyForms/AnthropometricDataReadOnly";
import AnthropometricDataEdit from "./editForms/AnthropometricDataEdit";




const AnthropometricData = () => {
    const {IsEditButtonPressed} = useAppSelector(state => state.additionalReducer)

    return (
        <div>
            {!IsEditButtonPressed && <AnthropometricDataReadOnly />}
            {IsEditButtonPressed && <AnthropometricDataEdit/>}
        </div>
    );
};

export default AnthropometricData;
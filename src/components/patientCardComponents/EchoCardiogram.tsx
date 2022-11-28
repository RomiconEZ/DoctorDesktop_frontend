import React from 'react';
import {useAppSelector} from "../../hooks/redux";
import PersonalDataReadOnly from "./readOnlyForms/PersonalDataReadOnly";
import PersonalDataEdit from "./editForms/PersonalDataEdit";
import EchoCardiogramReadOnly from "./readOnlyForms/EchoCardiogramReadOnly";
import EchoCardiogramEdit from "./editForms/EchoCardiogramEdit";




const EchoCardiogram = () => {
    const {IsEditButtonPressed} = useAppSelector(state => state.additionalReducer)

    return (
        <div>
            {!IsEditButtonPressed && <EchoCardiogramReadOnly />}
            {IsEditButtonPressed && <EchoCardiogramEdit/>}
        </div>
    );
};

export default EchoCardiogram;
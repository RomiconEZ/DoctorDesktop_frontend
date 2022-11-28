import React from 'react';
import {useAppSelector} from "../../hooks/redux";
import PersonalDataReadOnly from "./readOnlyForms/PersonalDataReadOnly";
import PersonalDataEdit from "./editForms/PersonalDataEdit";
import MSCTReadOnly from "./readOnlyForms/MSCTReadOnly";
import MSCTEdit from "./editForms/MSCTEdit";




const MSCT = () => {
    const {IsEditButtonPressed} = useAppSelector(state => state.additionalReducer)

    return (
        <div>
            {!IsEditButtonPressed && <MSCTReadOnly />}
            {IsEditButtonPressed && <MSCTEdit/>}
        </div>
    );
};

export default MSCT;
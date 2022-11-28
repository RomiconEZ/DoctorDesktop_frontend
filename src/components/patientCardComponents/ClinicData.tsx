import React from 'react';
import {useAppSelector} from "../../hooks/redux";

import ClinicDataReadOnly from "./readOnlyForms/ClinicDataReadOnly";
import ClinicDataEdit from "./editForms/ClinicDataEdit";




const ClinicData = () => {
    const {IsEditButtonPressed} = useAppSelector(state => state.additionalReducer)

    return (
        <div>
            {!IsEditButtonPressed && <ClinicDataReadOnly />}
            {IsEditButtonPressed && <ClinicDataEdit/>}
        </div>
    );
};

export default ClinicData;
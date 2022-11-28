import React from 'react';
import {useAppSelector} from "../../hooks/redux";

import ComputerTomographyReadOnly from "./readOnlyForms/ComputerTomographyReadOnly";
import ComputerTomographyEdit from "./editForms/ComputerTomographyEdit";




const ComputerTomography = () => {
    const {IsEditButtonPressed} = useAppSelector(state => state.additionalReducer)

    return (
        <div>
            {!IsEditButtonPressed && <ComputerTomographyReadOnly />}
            {IsEditButtonPressed && <ComputerTomographyEdit/>}
        </div>
    );
};

export default ComputerTomography;
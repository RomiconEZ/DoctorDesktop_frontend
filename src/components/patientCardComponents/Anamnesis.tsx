import React from 'react';
import {useAppSelector} from "../../hooks/redux";

import AnamnesisReadOnly from "./readOnlyForms/AnamnesisReadOnly";
import AnamnesisEdit from "./editForms/AnamnesisEdit";




const Anamnesis = () => {
    const {IsEditButtonPressed} = useAppSelector(state => state.additionalReducer)

    return (
        <div>
            {!IsEditButtonPressed && <AnamnesisReadOnly />}
            {IsEditButtonPressed && <AnamnesisEdit/>}
        </div>
    );
};

export default Anamnesis;
import React from 'react';
import {useAppSelector} from "../../hooks/redux";

import ConcomDeseasesReadOnly from "./readOnlyForms/ConcomDeseasesReadOnly";
import ConcomDeseasesEdit from "./editForms/ConcomDeseasesEdit";




const ConcomDeseases = () => {
    const {IsEditButtonPressed} = useAppSelector(state => state.additionalReducer)

    return (
        <div>
            {!IsEditButtonPressed && <ConcomDeseasesReadOnly />}
            {IsEditButtonPressed && <ConcomDeseasesEdit/>}
        </div>
    );
};

export default ConcomDeseases;
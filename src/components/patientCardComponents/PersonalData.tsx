import React from 'react';
import {useAppSelector} from "../../hooks/redux";
import PersonalDataReadOnly from "./readOnlyForms/PersonalDataReadOnly";
import PersonalDataEdit from "./editForms/PersonalDataEdit";


const {isLoading, error} = useAppSelector(state => state.userReducer)
const {IsEditButtonPressed} = useAppSelector(state => state.additionalReducer)


const PersonalData = () => {
    return (
        <div>
            {isLoading && <h1>Loading...</h1>}
            {error && <h1>{error}</h1>}

            {!IsEditButtonPressed && <PersonalDataReadOnly />}
            {IsEditButtonPressed && <PersonalDataEdit/>}

        </div>
    );
};

export default PersonalData;
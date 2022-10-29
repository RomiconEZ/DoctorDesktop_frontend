import React, {useEffect} from 'react';
import {useAppDispatch, useAppSelector} from "../../hooks/redux";
import {PatientSlice} from "../../store/reducers/PatientSlice";
import {fetchPatient} from "../../store/reducers/ActionCreators";
import {IPersonal_data} from "../../models/IPatient";

const PersonalData = () => {
    const dispatch = useAppDispatch();
    const {patient, isLoading, error} = useAppSelector(state => state.patientReducer);
    useEffect(() => {
        dispatch(fetchPatient())
    }, [])


    return (
        <div>
            {isLoading && <h1>Loading...</h1>}
            {error && <h1>{error}</h1>}
            {JSON.stringify(patient.personal_data)}


            <div>
                <button
                    className="relative top-5 left-5 right-5 py-2 px-4 bg-transparent
                    text-blue-600 font-semibold border border-blue-600
                     rounded hover:bg-blue-600 hover:text-white hover:border-transparent
                      transition ease-in duration-200 transform hover:-translate-y-1 active:translate-y-0">
                Редактировать
                </button>
            </div>
        </div>
    );
};

export default PersonalData;
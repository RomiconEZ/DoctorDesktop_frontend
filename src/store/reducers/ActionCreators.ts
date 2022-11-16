import {AppDispatch} from "../store";
import {IPatient, IPersonal_data} from "../../models/IPatient";
import axios from "axios";
import {PatientSlice} from "./PatientSlice";
import {createAsyncThunk} from "@reduxjs/toolkit";

export const fetchPatient = () => async (dispatch:AppDispatch) => {
    try {
        dispatch(PatientSlice.actions.patientFetching())
        const response = await axios.get<IPatient>('https://my-json-server.typicode.com/AlexanderMenkeev/json-server/patients/1')
        dispatch(PatientSlice.actions.patientFetchingSuccess(response.data))
    } catch (e) {
        dispatch(PatientSlice.actions.patientFetchingError("Fetching of patient's data was unsuccessful"));
    }
}

export const patchPersonalData = () => async (dispatch:AppDispatch) => {
    try {
        dispatch(PatientSlice.actions.personalDataPatching)
        const response = await axios.patch<IPatient>('https://my-json-server.typicode.com/AlexanderMenkeev/json-server/patients/1')
        dispatch(PatientSlice.actions.personalDataPatchingSuccess())
    } catch (e) {
        dispatch(PatientSlice.actions.personalDataPatchingError("Personal data patching was unsuccessful"));
    }
}

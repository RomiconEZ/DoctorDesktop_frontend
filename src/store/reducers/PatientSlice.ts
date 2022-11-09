import {IPatient} from "../../models/IPatient";
import {createSlice, PayloadAction} from "@reduxjs/toolkit";
import {IPatientState} from "../../models/IPatientState";
import {initialState} from "./initialStates/initialStatePatient";

export const PatientSlice = createSlice({
    name: 'patient',
    initialState,
    reducers: {
        patientFetching(state) {
            state.isLoading = true;
        },
        patientFetchingSuccess(state, action: PayloadAction<IPatient>) {
            state.isLoading = false;
            state.error = '';
            state.patient = action.payload;
        },
        patientFetchingError(state, action: PayloadAction<string>) {
            state.isLoading = false;
            state.error = action.payload;
        },
        changeMode(state) {
            state.isEditButtonPressed = !state.isEditButtonPressed;
        }
    }
})

export const { changeMode } = PatientSlice.actions
export default PatientSlice.reducer;
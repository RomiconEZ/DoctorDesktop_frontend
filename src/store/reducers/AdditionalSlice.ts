import {createSlice, PayloadAction} from "@reduxjs/toolkit";
import {IPatientFull} from "../../models/IPatientFull";
import {initialPatientState} from "../../components/patientCardComponents/initialStates/initialStatePatient";
import {IDoctorFull} from "../../models/IDoctorFull";
import {initialDoctorState} from "../../models/initialDoctorState";

interface AddState {
    SelectedPatient: IPatientFull,
    IsEditButtonPressed: boolean,
    SelectedDoctor: IDoctorFull
}

const initialState: AddState = {
    SelectedPatient: initialPatientState,
    IsEditButtonPressed: false,
    SelectedDoctor: initialDoctorState,
}

// slice - reducer в контексте toolkit
// Затем можем вытащить отдельно reducer и action creator
export const additionalSlice = createSlice({
    name: 'additional', // у каждого слайса уникальное название
    initialState, // дефолтное значение состояния
    reducers:
        {
            ChangeIsEditButtonPressed(state, action: PayloadAction<boolean>)
            {
                state.IsEditButtonPressed = action.payload
            },
            ChangeSelectedPatient(state, action: PayloadAction<IPatientFull>)
            {
                state.SelectedPatient = action.payload
            },
            ChangeSelectedDoctor(state, action: PayloadAction<IDoctorFull>)
            {
                state.SelectedDoctor = action.payload
            },

        }
})

export default additionalSlice.reducer; // вытаскиваем reducer

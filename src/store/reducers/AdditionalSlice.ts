import {createSlice, PayloadAction} from "@reduxjs/toolkit";
import {IPatientFull} from "../../models/IPatientFull";
import {initialPatientState} from "../../components/patientCardComponents/initialStates/initialStatePatient";

interface AddState {
    SelectedPatient: IPatientFull,
    IsEditButtonPressed: boolean,
}

const initialState: AddState = {
    SelectedPatient: initialPatientState,
    IsEditButtonPressed: false
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

        }
})

export default additionalSlice.reducer; // вытаскиваем reducer

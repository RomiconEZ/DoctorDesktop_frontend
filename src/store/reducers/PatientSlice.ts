import {IPatient} from "../../models/IPatient";
import {createSlice, PayloadAction} from "@reduxjs/toolkit";

interface PatientState {
    patient: IPatient,
    isLoading: boolean,
    error: string,
}
const initialState: PatientState = {
    patient: {
        id: 1,
        personal_data: {
            first_name: '',
            second_name: '',
            patronymic: '',
            birthday: '',
            sex: true,
            region: '',
            clinic: '',
            race: ''
        },
        anthropometric_data: {
            height: 0,
            weight: 0,
            body_mass_index: 0,
            body_surface_area: 0,
            body_type: '',
            connective_tissue_dysplasia: false
        },

        clinical_data: {
            main_diag: "",
            aortic_dissection: 0,
            intramural_hematoma: 0,
            aortic_rupture: 0,
            patient_state: "",
            pain_beh_stern: 0,
            interscap_reg_pain: 0,
            conscious_loss: 0,
            lo_extrem_ischemia: 0,
            empoyeeID: 0,
            version: 0,
            date: ""
        }
    },
    isLoading: false,
    error: '',
}
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
        }
    }
})

export default PatientSlice.reducer;
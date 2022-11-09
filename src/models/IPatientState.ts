import {IPatient} from "./IPatient";

export interface IPatientState {
    patient: IPatient,
    isLoading: boolean,
    isEditButtonPressed: boolean,
    error: string,
}
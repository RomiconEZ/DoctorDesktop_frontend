import {createApi} from "@reduxjs/toolkit/dist/query/react";
import {IPatientCreate} from "../models/IPatientCreate";
import {IPatientUpdate} from "../models/IPatientUpdate";
import {baseQuery} from "./DoctorService";

export interface PaginationPatientsForCertainDoctor
{
    doctorID: number
    limit: number
    numofpage: number
    queryParams?: string
}
export interface PatientForDoctor
{
    doctorID: number
    patientID: any
}
export interface DoctorID
{
    doctorID: number
}


export const patientAPI = createApi({
    reducerPath: 'patientAPI', // уникальное название
    baseQuery: baseQuery,
    tagTypes: ['Patient'],
    endpoints: (build) => ({

        fetchPatients: build.query<any, PaginationPatientsForCertainDoctor>({

            query: (PaginationPatientsForCertainDoctor) => ({
                url: `/patients`,
                params: {
                    _doctorID: PaginationPatientsForCertainDoctor.doctorID,
                    _limit: PaginationPatientsForCertainDoctor.limit,
                    _numofpage: PaginationPatientsForCertainDoctor.numofpage,
                     _queryParams: PaginationPatientsForCertainDoctor.queryParams,
                }
            }),
            providesTags: result => ['Patient'],
            keepUnusedDataFor: 300,

        }),
        fetchSelectedPatient: build.query<any, PatientForDoctor>({

            query: (PatientForDoctor) => ({
                url: `/patients/${PatientForDoctor.patientID}`,
                params: {
                    _doctorID: PatientForDoctor.doctorID,
                }
            }),
        }),

        // Получение количества пациентов для доктора
        fetchNumOfPatients: build.query<any, DoctorID>({

            query: (DoctorID) => ({
                url: `/patients/num`,
                params:
                    {
                    _doctorID: DoctorID.doctorID,
                }
            }),
        }),
        createPatient: build.mutation<void, IPatientCreate>({ // передаем только те данные, которые нужны для первичного создания пользователя регистратурой
            query: (PatientCreate) => ({
                url: `/newpatient`,
                method: 'POST',
                body: PatientCreate
            }),
            invalidatesTags: ['Patient']
        }),
        updatePatient: build.mutation<any, IPatientUpdate>({ // отправляем только те данные, которые изменяем. И обратно принимаем также только изменившиеся данные
            query: (PatientUpdate) => ({
                url: `/patients/${PatientUpdate.patientID}`,
                method: 'PATCH',
                body: PatientUpdate
            }),
            invalidatesTags: ['Patient']
        }),
        deletePatient: build.mutation<void, IPatientUpdate>({
            query: (PatientUpdate) => ({
                url: `/patients/${PatientUpdate.patientID}`,
                method: 'DELETE',
            }),
            invalidatesTags: ['Patient']
        }),
    })
})

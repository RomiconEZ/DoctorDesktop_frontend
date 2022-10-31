import {createApi, fetchBaseQuery} from "@reduxjs/toolkit/dist/query/react";
import {IPatientShort} from "../models/IPatientShort";
import {IPatientCreate} from "../models/IPatientCreate";
import {IPatientUpdate} from "../models/IPatientUpdate";
import {IPatientFull} from "../models/IPatientFull";

interface PaginationPatientsForCertainDoctor
{
    doctorID: string
    limit: number
    numofpage: number
}
interface PatientForDoctor
{
    doctorID: string
    patientID: string
}


export const patientAPI = createApi({
    reducerPath: 'patientAPI', // уникальное название
    baseQuery: fetchBaseQuery({baseUrl: 'http://localhost:5000'}),
    tagTypes: ['Patient'],
    endpoints: (build) => ({

        fetchPatients: build.query<IPatientShort[], PaginationPatientsForCertainDoctor>({

            query: (PaginationPatientsForCertainDoctor) => ({
                url: `/patients`,
                params: {
                    _doctorID: PaginationPatientsForCertainDoctor.doctorID,
                    _limit: PaginationPatientsForCertainDoctor.limit,
                    _numofpage: PaginationPatientsForCertainDoctor.numofpage,
                }
            }),
            providesTags: result => ['Patient']
        }),
        fetchSelectedPatient: build.query<IPatientFull, PatientForDoctor>({

            query: (PatientForDoctor) => ({
                url: `/patients/${PatientForDoctor.patientID}`,
                params: {
                    _doctorID: PatientForDoctor.doctorID,
                    _patientID: PatientForDoctor.patientID,
                }
            }),
            providesTags: result => ['Patient']
        }),
        createPatient: build.mutation<void, IPatientCreate>({ // передаем только те данные, которые нужны для первичного создания пользователя регистратурой
            query: (PatientCreate) => ({
                url: `/newpatient`,
                method: 'POST',
                body: PatientCreate
            }),
            invalidatesTags: ['Patient']
        }),
        updatePatient: build.mutation<IPatientUpdate, IPatientUpdate>({ // отправляем только те данные, которые изменяем. И обратно принимаем также только изменившиеся данные
            query: (PatientUpdate) => ({
                url: `/patients/${PatientUpdate.id}`,
                method: 'PUT',
                body: PatientUpdate
            }),
            invalidatesTags: ['Patient']
        }),
        deletePatient: build.mutation<void, IPatientUpdate>({
            query: (PatientUpdate) => ({
                url: `/patients/${PatientUpdate.id}`,
                method: 'DELETE',
            }),
            invalidatesTags: ['Patient']
        }),
    })
})

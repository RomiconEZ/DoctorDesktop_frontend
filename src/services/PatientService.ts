import {createApi, fetchBaseQuery} from "@reduxjs/toolkit/dist/query/react";
import {IPatientShort} from "../models/IPatientShort";
import {IPatientCreate} from "../models/IPatientCreate";
import {IPatientUpdate} from "../models/IPatientUpdate";

interface PaginationPatientsForCertainDoctor
{
    doctorID: string
    limit: number
    numofpage: number
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
        createPatient: build.mutation<void, IPatientCreate>({ // передаем только те данные, которые нужны для первичного создания пользователя регистратурой
            query: (post) => ({
                url: `/patients`,
                method: 'POST',
                body: post
            }),
            invalidatesTags: ['Patient']
        }),
        updatePost: build.mutation<IPatientUpdate, IPatientUpdate>({ // отправляем только те данные, которые изменяем. И обратно принимаем также только изменившиеся данные
            query: (IPatientUpdate) => ({
                url: `/patients/${IPatientUpdate.id}`,
                method: 'PUT',
                body: IPatientUpdate
            }),
            invalidatesTags: ['Patient']
        }),
        deletePost: build.mutation<void, IPatientUpdate>({
            query: (IPatientUpdate) => ({
                url: `/patients/${IPatientUpdate.id}`,
                method: 'DELETE',
            }),
            invalidatesTags: ['Patient']
        }),
    })
})
import {IDoctorUpdate} from "../models/IDoctorUpdate";
import {IDoctorCreate} from "../models/IDoctorCreate";
import {DoctorID} from "./PatientService";
import {API_URL} from "../env_data";
import {createApi, fetchBaseQuery} from "@reduxjs/toolkit/dist/query/react";

export const baseQuery = fetchBaseQuery({
    baseUrl: API_URL,
    prepareHeaders: (headers, { getState }) => {
        const token = localStorage.getItem('token')
         if (token) {
            headers.set('Authorization', `Bearer ${token}`)
        }

        return headers
    },
})

export interface PaginationDoctors
{
    doctorID: number
    limit: number
    numofpage: number
    queryParams?: string
}
export interface DoctorForDoctor
{
    doctorID: number
    selecteddoctorID: any
}

export const doctorAPI = createApi({
    reducerPath: 'doctorAPI', // уникальное название
    baseQuery: baseQuery,
    tagTypes: ['Doctor'],
    endpoints: (build) => ({

        fetchDoctors: build.query<any, PaginationDoctors>({

            query: (PaginationDoctorsForCertainDoctor) => ({
                url: '/doctors',
                params: {
                    _doctorID: PaginationDoctorsForCertainDoctor.doctorID,
                    _limit: PaginationDoctorsForCertainDoctor.limit,
                    _numofpage: PaginationDoctorsForCertainDoctor.numofpage,
                    _queryParams: PaginationDoctorsForCertainDoctor.queryParams,
                }
            }),
            providesTags: result => ['Doctor'],
            keepUnusedDataFor: 300,
        }),

        fetchSelectedDoctor: build.query<any, DoctorForDoctor>({

            query: (DoctorForDoctor) => ({
                url: `/doctors/${DoctorForDoctor.selecteddoctorID}`,
                params: {
                    _doctorID: DoctorForDoctor.doctorID,
                }
            }),
            keepUnusedDataFor: 300,
        }),

        fetchNumOfDoctors: build.query<any, DoctorID>({

            query: (DoctorID) => ({
                url: `/doctors/num`,
                params:
                    {
                        _doctorID: DoctorID.doctorID,
                    }
            }),
        }),

        createDoctor: build.mutation<void, IDoctorCreate>({ // передаем только те данные, которые нужны для первичного создания пользователя регистратурой
            query: (DoctorCreate) => ({
                url: `/newdoctor`,
                method: 'POST',
                body: DoctorCreate
            }),
            invalidatesTags: ['Doctor']
        }),
        updateDoctor: build.mutation<any, IDoctorUpdate>({ // отправляем только те данные, которые изменяем. И обратно принимаем также только изменившиеся данные
            query: (DoctorUpdate) => ({
                url: `/doctors/editdoctor/${DoctorUpdate.id}`,
                method: 'PUT',
                body: DoctorUpdate
            }),
            invalidatesTags: ['Doctor']
        }),
        deleteDoctor: build.mutation<void, IDoctorUpdate>({
            query: (DoctorUpdate) => ({
                url: `/doctors/${DoctorUpdate.id}`,
                method: 'DELETE',
            }),
            invalidatesTags: ['Doctor']
        }),
    })
})

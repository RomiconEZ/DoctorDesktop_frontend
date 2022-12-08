import React, {useEffect} from 'react';
import {Link, Outlet, useParams} from "react-router-dom";
import {useAppDispatch, useAppSelector} from "../../hooks/redux";
import {patientAPI, PatientForDoctor} from "../../services/PatientService";
import {additionalSlice} from "../../store/reducers/AdditionalSlice";
import {IPatientFull} from "../../models/IPatientFull";
import Sidebar from "./Sidebar";

const SelectedPatientPage = () => {
    const {user} = useAppSelector(state => state.userReducer)
    const {SelectedPatient: patient} = useAppSelector(state => state.additionalReducer)
    const dispatch = useAppDispatch()

    const params = useParams<string>()
    const body: PatientForDoctor = {
        doctorID: user!.id,
        patientID: Number(params)
    }
    // let refetch: boolean = false
    // let data: any
    // let error: any
    // let preloading: any

    // if (patient.patient_id!==Number(params.id)) {
    //     refetch = true
    //     const {data, error, isLoading: preloading} =  patientAPI.useFetchSelectedPatientQuery(body)
    // }
    const {data, error, isLoading: preloading, refetch} =  patientAPI.useFetchSelectedPatientQuery(body)


    // useEffect(() => {
    //     if (refetch) {
    //         if ((preloading === false) && (data.data != undefined)) {
    //             dispatch(additionalSlice.actions.ChangeSelectedPatient(data.data as IPatientFull))
    //         }
    //     }
    // }, [refetch, preloading])

    useEffect(() => {
        console.log("Получили пациента")
        console.log(data)
        if ((preloading === false) && (data.data != undefined)) {
                dispatch(additionalSlice.actions.ChangeSelectedPatient(data.data as IPatientFull))
            }

    }, [preloading])


    return (
        <div className="flex h-screen w-screen flex-row gap-x-10 justify-start">

            <div className="w-1/5 sticky flex justify-center bg-our-dark-navbar overflow-hidden h-auto">
                <Sidebar />
            </div>

            <main className='w-3/5 mt-5 rounded-md bg-white h-auto overflow-scroll'>
                <Outlet />
            </main>

        </div>
    )


};

export default SelectedPatientPage;
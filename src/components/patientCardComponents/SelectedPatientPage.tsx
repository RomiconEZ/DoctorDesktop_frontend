import React, {useEffect} from 'react';
import {Link, Outlet, useParams} from "react-router-dom";
import {useAppDispatch, useAppSelector} from "../../hooks/redux";
import {patientAPI, PatientForDoctor} from "../../services/PatientService";
import {additionalSlice} from "../../store/reducers/AdditionalSlice";
import {IPatientFull} from "../../models/IPatientFull";

const SelectedPatientPage = () => {
    const {user} = useAppSelector(state => state.userReducer)
    const {SelectedPatient: patient} = useAppSelector(state => state.additionalReducer)
    const dispatch = useAppDispatch()

    const params = useParams<string>()
    const body: PatientForDoctor = {
        doctorID: user?.id || -1,
        patientID: Number(params) || -1
    }
    // let refetch: boolean = false
    // let data: any
    // let error: any
    // let preloading: any

    // if (patient.patient_id!==Number(params.id)) {
    //     refetch = true
    //     const {data, error, isLoading: preloading} =  patientAPI.useFetchSelectedPatientQuery(body)
    // }
    const {data, error, isLoading: preloading} =  patientAPI.useFetchSelectedPatientQuery(body)


    // useEffect(() => {
    //     if (refetch) {
    //         if ((preloading === false) && (data.data != undefined)) {
    //             dispatch(additionalSlice.actions.ChangeSelectedPatient(data.data as IPatientFull))
    //         }
    //     }
    // }, [refetch, preloading])

    useEffect(() => {

            if ((preloading === false) && (data.data != undefined)) {
                dispatch(additionalSlice.actions.ChangeSelectedPatient(data.data as IPatientFull))
            }

    }, [preloading])


    return (
        <div className="container mx-auto bg-slate-300">
            <div className="flex flex-row flex-wrap py-4">
                <nav className='bg-blue-100 w-full sm:w-1/3 md:w-1/4 px-2'>
                    <div className="sticky top-0 p-4 w-full">
                        <ul className='flex flex-col overflow-hidden'>
                            <li className='hover:bg-gray-100'>
                                <Link to="/patientCard/personalData">Персональные данные</Link>
                            </li>
                            <li className='hover:bg-gray-100'>
                                <Link to="/patientCard/computer-aided-tomography">Компьютерная томография</Link>
                            </li>
                            <li className='hover:bg-gray-100'>
                                <Link to="/patientCard/anthropometric-data">Антропометрия</Link>
                            </li>
                            <li className='hover:bg-gray-100'>
                                <Link to="/patientCard/clinic-data">Клинические данные</Link>
                            </li>
                            <li className='hover:bg-gray-100'>
                                <Link to="/patientCard/anamnesis">Анамнез</Link>
                            </li>
                            <li className='hover:bg-gray-100'>
                                <Link to="/patientCard/concomDeseases">Сопутствующие заболевания</Link>
                            </li>
                            <li className='hover:bg-gray-100'>
                                <Link to="/patientCard/echocardiogram">ЭХОГК</Link>
                            </li>
                            <li className='hover:bg-gray-100'>
                                <Link to="/patientCard/msct">МСКТ</Link>
                            </li>
                            <li className='hover:bg-gray-100'>
                                <Link to="/patientCard/neuralNet">Нейронная сеть</Link>
                            </li>
                        </ul>
                    </div>    
                </nav>

                <main className='bg-white relative w-full sm:w-2/3 md:w-3/4 pt-1 px-2'> <Outlet /> </main>
            </div>
        </div>
    )


};

export default SelectedPatientPage;
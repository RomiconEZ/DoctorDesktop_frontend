import React, {useEffect} from 'react';
import {useAppDispatch, useAppSelector} from "../../hooks/redux";
import {PatientSlice} from "../../store/reducers/PatientSlice";
import {fetchPatient} from "../../store/reducers/ActionCreators";
import {IPersonal_data} from "../../models/IPatient";

const PersonalData = () => {
    const dispatch = useAppDispatch();
    const {patient, isLoading, error} = useAppSelector(state => state.patientReducer);
    useEffect(() => {
        dispatch(fetchPatient())
    }, [])


    return (
        <div>
            {isLoading && <h1>Loading...</h1>}
            {error && <h1>{error}</h1>}

           

            <div className='p-8'>
                <h1 className='font-medium text-lg text-slate-800'>Персональные данные</h1>

                <div className='flex'> 
                    <span className='text-slate-400 w-1/2'>ФИО</span>
                    <span className='text-slate-800 w-1/2'>{patient.personal_data.second_name + ' ' +
                    patient.personal_data.first_name + ' ' + patient.personal_data.patronymic}</span>
                </div>

                <div className='grid grid-cols-2 mb-4'>

                    {/* <div className='flex'> 
                        <span className='text-slate-400 w-1/2'>Дата рождения</span>
                        <span className='text-slate-800 w-1/2'>{patient.personal_data.birthday.toDateString()}</span>
                    </div>  */}

                    <div className='flex'> 
                        <span className='text-slate-400 w-1/2'>Место обследования</span>
                        <span className='text-slate-800 w-1/2'>{patient.personal_data.clinic}</span>
                    </div>

                    <div className='flex'> 
                        <span className='text-slate-400 w-1/2'>Регион</span>
                        <span className='text-slate-800 w-1/2'>{patient.personal_data.region}</span>
                    </div>

                    <div className='flex'> 
                        <span className='text-slate-400 w-1/2'>Пол</span>
                        {patient.personal_data.sex && <span className='text-slate-800 w-1/2'>мужской</span>}
                        {!patient.personal_data.sex && <span className='text-slate-800 w-1/2'>женский</span>}
                    </div>

                </div>

                
                <button
                    className="relative mt-8 bottom-2 left-3/4 p-2 bg-transparent
                    text-blue-600 font-semibold border border-blue-600
                    rounded hover:bg-blue-600 hover:text-white hover:border-transparent
                    transition ease-in duration-200 transform hover:-translate-y-1 active:translate-y-0">
                Редактировать
                </button>
                
                
            </div>

            
           



        </div>
    );
};

export default PersonalData;
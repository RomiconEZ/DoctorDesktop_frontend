import React from 'react';
import {useAppDispatch, useAppSelector} from "../../hooks/redux";

const ClinicData = () => {
    const dispatch = useAppDispatch();
    const {patient, isLoading, error} = useAppSelector(state => state.patientReducer);
    return (
        <div>
            {isLoading && <h1>Loading...</h1>}
            {error && <h1>{error}</h1>}


            <div className='p-8'>
                <h1 className='font-medium text-lg text-slate-800'>Клинические данные</h1>

                <div className='grid grid-cols-2 gap-y-4 mb-4'>

                    <div className='flex'> 
                        <span className='text-slate-400 w-1/2'>Основной диагноз</span>
                        <span className='text-slate-800 w-1/2'>{patient.clinical_data.main_diag}</span>
                    </div> 

                    <div className='flex'> 
                        <span className='text-slate-400 w-1/2'>Расслоение аорты</span>
                        {patient.clinical_data.aortic_dissection && <span className='text-slate-800 w-1/2'>Да</span>}
                        {!patient.clinical_data.aortic_dissection && <span className='text-slate-800 w-1/2'>Нет</span>}
                    </div>

                    <div className='flex'> 
                        <span className='text-slate-400 w-1/2'>Разрыв аорты</span>
                        {patient.clinical_data.aortic_rupture && <span className='text-slate-800 w-1/2'>Да</span>}
                        {!patient.clinical_data.aortic_rupture && <span className='text-slate-800 w-1/2'>Нет</span>}
                    </div>

                    <div className='flex'> 
                        <span className='text-slate-400 w-1/2'>Интрамуральная гематома</span>
                        {patient.clinical_data.intramural_hematoma && <span className='text-slate-800 w-1/2'>Да</span>}
                        {!patient.clinical_data.intramural_hematoma && <span className='text-slate-800 w-1/2'>Нет</span>}
                    </div>

                    <div className='flex'> 
                        <span className='text-slate-400 w-1/2'>Состояние</span>
                        <span className='text-slate-800 w-1/2'>{patient.clinical_data.patient_state}</span>
                    </div> 

                    <div className='flex'> 
                        <span className='text-slate-400 w-1/2'>Боли за грудиной</span>
                        {patient.clinical_data.pain_beh_stern && <span className='text-slate-800 w-1/2'>Да</span>}
                        {!patient.clinical_data.pain_beh_stern && <span className='text-slate-800 w-1/2'>Нет</span>}
                    </div>

                    <div className='flex'> 
                        <span className='text-slate-400 w-1/2'>Боли в межлопаточной области</span>
                        <span className='text-slate-800 w-1/2'>{patient.clinical_data.interscap_reg_pain}</span>
                    </div>

                    <div className='flex'> 
                        <span className='text-slate-400 w-1/2'>Потеря сознания</span>
                        <span className='text-slate-800 w-1/2'>{patient.clinical_data.conscious_loss}</span>
                    </div>

                    <div className='flex'> 
                        <span className='text-slate-400 w-1/2'>Ишемия нижних конечностей</span>
                        <span className='text-slate-800 w-1/2'>{patient.clinical_data.low_extrem_ischemia}</span>
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

export default ClinicData;
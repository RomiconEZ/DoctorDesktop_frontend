import React from 'react';
import {useAppDispatch, useAppSelector} from "../../../hooks/redux";
import {useNavigate} from "react-router-dom";


const ClinicDataReadOnly = () => {
    const {SelectedPatient, IsEditButtonPressed} = useAppSelector(state => state.additionalReducer)
    const navigate = useNavigate();

    const dispatch = useAppDispatch()
    return (

        <div className='p-8'>
            <h1 className='font-medium text-lg text-slate-800 pb-4'>Клинические данные режим чтения</h1>

            <div className='grid grid-cols-2 gap-y-3 mb-4'>

                <div className='col-span-2 flex'>
                    <span className='text-slate-400 w-1/4'>Основной диагноз</span>
                    <span className='text-slate-800'>{SelectedPatient.clinical_data.main_diag}</span>
                </div>

                <div className='flex'>
                    <span className='text-slate-400 w-1/2'></span>
                    <span className='text-slate-400 w-1/2'>Наличие расслоения аорты</span>
                    {SelectedPatient.clinical_data.aortic_dissection!==0 && <span className='text-slate-800 w-1/2'>да</span> }
                    {SelectedPatient.clinical_data.aortic_dissection!==1 && <span className='text-slate-800 w-1/2'>нет</span> }
                </div>
                <div className='flex'>
                    <span className='text-slate-400 w-1/2'></span>
                    <span className='text-slate-400 w-1/2'>Наличие интрамуральной гематомы</span>
                    {SelectedPatient.clinical_data.intramural_hematoma!==0 && <span className='text-slate-800 w-1/2'>да</span> }
                    {SelectedPatient.clinical_data.intramural_hematoma!==1 && <span className='text-slate-800 w-1/2'>нет</span> }
                </div>
                <div className='flex'>
                    <span className='text-slate-400 w-1/2'></span>
                    <span className='text-slate-400 w-1/2'>Наличие разрыва аорты</span>
                    {SelectedPatient.clinical_data.aortic_rupture!==0 && <span className='text-slate-800 w-1/2'>да</span> }
                    {SelectedPatient.clinical_data.aortic_rupture!==1 && <span className='text-slate-800 w-1/2'>нет</span> }
                </div>
                <div className='col-span-2 flex'>
                    <span className='text-slate-400 w-1/4'>Состояние</span>
                    <span className='text-slate-800'>{SelectedPatient.clinical_data.patient_state}</span>
                </div>
                <div className='flex'>
                    <span className='text-slate-400 w-1/2'></span>
                    <span className='text-slate-400 w-1/2'>Боли за грудиной</span>
                    {SelectedPatient.clinical_data.pain_beh_stern!==0 && <span className='text-slate-800 w-1/2'>да</span> }
                    {SelectedPatient.clinical_data.pain_beh_stern!==1 && <span className='text-slate-800 w-1/2'>нет</span> }
                </div>
                <div className='flex'>
                    <span className='text-slate-400 w-1/2'></span>
                    <span className='text-slate-400 w-1/2'>Боли в межлопаточной области</span>
                    {SelectedPatient.clinical_data.interscap_reg_pain!==0 && <span className='text-slate-800 w-1/2'>да</span> }
                    {SelectedPatient.clinical_data.interscap_reg_pain!==1 && <span className='text-slate-800 w-1/2'>нет</span> }
                </div>
                <div className='flex'>
                    <span className='text-slate-400 w-1/2'></span>
                    <span className='text-slate-400 w-1/2'>Потеря сознания</span>
                    {SelectedPatient.clinical_data.conscious_loss!==0 && <span className='text-slate-800 w-1/2'>да</span> }
                    {SelectedPatient.clinical_data.conscious_loss!==1 && <span className='text-slate-800 w-1/2'>нет</span> }
                </div>
                <div className='flex'>
                    <span className='text-slate-400 w-1/2'></span>
                    <span className='text-slate-400 w-1/2'>Ишемия нижних конечностей</span>
                    {SelectedPatient.clinical_data.low_extrem_ischemia!==0 && <span className='text-slate-800 w-1/2'>да</span> }
                    {SelectedPatient.clinical_data.low_extrem_ischemia!==1 && <span className='text-slate-800 w-1/2'>нет</span> }
                </div>
            </div>

            <button
                onClick={()=>navigate(`edit`)}
                className="relative mt-8 bottom-2 left-3/4 p-2 bg-transparent
                text-blue-600 font-semibold border border-blue-600
                rounded hover:bg-blue-600 hover:text-white hover:border-transparent
                transition ease-in duration-200 transform hover:-translate-y-1 active:translate-y-0">
                Редактировать
            </button>

        </div>
    );
};

export default  ClinicDataReadOnly;
import React from 'react';
import {useAppDispatch, useAppSelector} from "../../../hooks/redux";

import {additionalSlice} from "../../../store/reducers/AdditionalSlice";
import {useNavigate} from "react-router-dom";


const AnthropometricDataReadOnly = () => {
    const {SelectedPatient, IsEditButtonPressed} = useAppSelector(state => state.additionalReducer)
    const navigate = useNavigate();

    const dispatch = useAppDispatch()
    return (

        <div className='p-8'>
            <h1 className='font-medium text-lg text-slate-800 pb-4'>Антропометрические данные режим чтения</h1>

            <div className='grid grid-cols-2 gap-y-3 mb-4'>

                <div className='col-span-2 flex'>
                    <span className='text-slate-400 w-1/4'>Рост</span>
                    <span className='text-slate-800'>{SelectedPatient.anthropometric_data.height}</span>
                </div>
                <div className='col-span-2 flex'>
                    <span className='text-slate-400 w-1/4'>Вес</span>
                    <span className='text-slate-800'>{SelectedPatient.anthropometric_data.weight}</span>
                </div>
                <div className='col-span-2 flex'>
                    <span className='text-slate-400 w-1/4'>Индекс массы тела</span>
                    <span className='text-slate-800'>{SelectedPatient.anthropometric_data.body_mass_index}</span>
                </div>
                <div className='col-span-2 flex'>
                    <span className='text-slate-400 w-1/4'>Площадь поверхности тела</span>
                    <span className='text-slate-800'>{SelectedPatient.anthropometric_data.body_surface_area}</span>
                </div>
                <div className='col-span-2 flex'>
                    <span className='text-slate-400 w-1/4'>Тип тела</span>
                    <span className='text-slate-800'>{SelectedPatient.anthropometric_data.body_type}</span>
                </div>
                <div className='flex'>
                    <span className='text-slate-400 w-1/2'>Дисплазия соединительных тканей</span>
                    {SelectedPatient.anthropometric_data.connective_tissue_dysplasia!==0 && <span className='text-slate-800 w-1/2'>да</span> }
                    {SelectedPatient.anthropometric_data.connective_tissue_dysplasia!==1 && <span className='text-slate-800 w-1/2'>нет</span> }
                </div>
                <div className='flex'>
                    <span className='text-slate-400 w-1/2'>Синдром Марфана</span>
                    {SelectedPatient.anthropometric_data.connective_tissue_dysplasia_Marfan!==0 && <span className='text-slate-800 w-1/2'>да</span> }
                    {SelectedPatient.anthropometric_data.connective_tissue_dysplasia_Marfan!==1 && <span className='text-slate-800 w-1/2'>нет</span> }
                </div>
                <div className='flex'>
                    <span className='text-slate-400 w-1/2'>Синдром Элерса-Данло</span>
                    {SelectedPatient.anthropometric_data.connective_tissue_dysplasia_EhlersDanlos!==0 && <span className='text-slate-800 w-1/2'>да</span> }
                    {SelectedPatient.anthropometric_data.connective_tissue_dysplasia_EhlersDanlos!==1 && <span className='text-slate-800 w-1/2'>нет</span> }
                </div>
                <div className='flex'>
                    <span className='text-slate-400 w-1/2'>Синдром Лойеса-Дитц</span>
                    {SelectedPatient.anthropometric_data.connective_tissue_dysplasia_LoeysDitz!==0 && <span className='text-slate-800 w-1/2'>да</span> }
                    {SelectedPatient.anthropometric_data.connective_tissue_dysplasia_LoeysDitz!==1 && <span className='text-slate-800 w-1/2'>нет</span> }
                </div>
                <div className='flex'>
                    <span className='text-slate-400 w-1/2'>Синдром Тернера</span>
                    {SelectedPatient.anthropometric_data.connective_tissue_dysplasia_Terner!==0 && <span className='text-slate-800 w-1/2'>да</span> }
                    {SelectedPatient.anthropometric_data.connective_tissue_dysplasia_Terner!==1 && <span className='text-slate-800 w-1/2'>нет</span> }
                </div>
                <div className='flex'>
                    <span className='text-slate-400 w-1/2'>Синдром Нуана</span>
                    {SelectedPatient.anthropometric_data.connective_tissue_dysplasia_Noonan!==0 && <span className='text-slate-800 w-1/2'>да</span> }
                    {SelectedPatient.anthropometric_data.connective_tissue_dysplasia_Noonan!==1 && <span className='text-slate-800 w-1/2'>нет</span> }
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

export default AnthropometricDataReadOnly;
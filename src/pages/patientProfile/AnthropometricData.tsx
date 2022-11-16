import React from 'react';
import {useAppDispatch, useAppSelector} from "../../hooks/redux";

const AnthropometricData = () => {
    const dispatch = useAppDispatch();
    const {patient, isLoading, error} = useAppSelector(state => state.patientReducer);
    return (
        <div>
            {isLoading && <h1>Loading...</h1>}
            {error && <h1>{error}</h1>}


            <div className='p-8'>
                <h1 className='font-medium text-lg text-slate-800 pb-4'>Антропометрические данные</h1>

                <div className='grid grid-cols-2 gap-y-3 mb-4'>

                    <div className='flex'> 
                        <span className='text-slate-400 w-1/2'>Рост</span>
                        <span className='text-slate-800 w-1/2'>{patient.anthropometric_data.height + ' см'}</span>
                    </div> 

                    <div className='flex'> 
                        <span className='text-slate-400 w-1/2'>Вес</span>
                        <span className='text-slate-800 w-1/2'>{patient.anthropometric_data.weight + ' кг'}</span>
                    </div>

                    <div className='flex'> 
                        <span className='text-slate-400 w-1/2'>Площадь поверхности тела</span>
                        <span className='text-slate-800 w-1/2'>{patient.anthropometric_data.body_surface_area + ' м2'}</span>
                    </div>

                    <div className='flex'> 
                        <span className='text-slate-400 w-1/2'>Индекс массы тела</span>
                        <span className='text-slate-800 w-1/2'>{patient.anthropometric_data.body_mass_index + ' кг/м2'}</span>
                    </div>

                    <div className='flex'> 
                        <span className='text-slate-400 w-1/2'>Телосложение</span>
                        <span className='text-slate-800 w-1/2'>{patient.anthropometric_data.body_type}</span>
                    </div>

                    <div className='flex'> 
                        <span className='text-slate-400 w-1/2'>Дисплазия соединительной ткани</span>
                        {!patient.anthropometric_data.connective_tissue_dysplasia && <span className='text-slate-800 w-1/2'>Нет</span>}
                        {patient.anthropometric_data.connective_tissue_dysplasia_EhlersDanlos && <span className='text-slate-800 w-1/2'>EhlersDanlos</span>}
                        {patient.anthropometric_data.connective_tissue_dysplasia_LoeysDitz && <span className='text-slate-800 w-1/2'>LoeysDitz</span>}
                        {patient.anthropometric_data.connective_tissue_dysplasia_Marfan && <span className='text-slate-800 w-1/2'>Marfan</span>}
                        {patient.anthropometric_data.connective_tissue_dysplasia_Noonan && <span className='text-slate-800 w-1/2'>Noonan</span>}
                        {patient.anthropometric_data.connective_tissue_dysplasia_Terner && <span className='text-slate-800 w-1/2'>Terner</span>}
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

export default AnthropometricData;
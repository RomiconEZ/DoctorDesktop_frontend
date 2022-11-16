import React from 'react';
import {useAppDispatch, useAppSelector} from "../../hooks/redux";

const MultispiralCT = () => {
    const dispatch = useAppDispatch();
    const {patient, isLoading, error} = useAppSelector(state => state.patientReducer);

    return (
        <div>
            {isLoading && <h1>Loading...</h1>}
            {error && <h1>{error}</h1>}


            <div className='p-8'>
                <h1 className='font-medium text-lg text-slate-800 pb-4'>Данные МСКТ</h1>

                <div className='grid grid-cols-2 gap-y-3 mb-4'>

                    <div className='flex gap-x-2'> 
                        <span className='text-slate-400 w-2/3'>фиброзное кольцо АК</span>
                        <span className='text-slate-800'>{patient.MCT.AV_annulus_fibrosis}</span>
                    </div>

                    <div className='flex gap-x-2'> 
                        <span className='text-slate-400 w-2/3'>синусы Вальсальвы</span>
                        <span className='text-slate-800'>{patient.MCT.sinuses_valsalva}</span>
                    </div>

                    <div className='flex gap-x-2'> 
                        <span className='text-slate-400 w-2/3'>синотубулярное соединение</span>
                        <span className='text-slate-800'>{patient.MCT.sinotubular_junction}</span>
                    </div>

                    <div className='flex gap-x-2'> 
                        <span className='text-slate-400 w-2/3'>восходящий отдел аорты на уровне бифуркации легочной артерии</span>
                        <span className='text-slate-800'>{patient.MCT.asc_aorta_pulm_art_bif}</span>
                    </div>

                    <div className='flex gap-x-2'> 
                        <span className='text-slate-400 w-2/3'>восходящий отдел аорты перед БЦС</span>
                        <span className='text-slate-800'>{patient.MCT.asc_aorta_before_BCS}</span>
                    </div>

                    <div className='flex gap-x-2'> 
                        <span className='text-slate-400 w-2/3'>дуга аорты перед ЛОСА</span>
                        <span className='text-slate-800'>{patient.MCT.aortic_arch_before_CCA}</span>
                    </div>

                    <div className='flex gap-x-2'> 
                        <span className='text-slate-400 w-2/3'>дуга аорты перед левой подключичной артерией</span>
                        <span className='text-slate-800'>{patient.MCT.aortic_arch_before_LSA}</span>
                    </div>

                    <div className='flex gap-x-2'> 
                        <span className='text-slate-400 w-2/3'>перешеек</span>
                        <span className='text-slate-800'>{patient.MCT.aorticlsthmus}</span>
                    </div>

                    <div className='flex gap-x-2'> 
                        <span className='text-slate-400 w-2/3'>средняя часть нисходящей аорты</span>
                        <span className='text-slate-800'>{patient.MCT.desc_aorta_middle_part}</span>
                    </div>

                    <div className='flex gap-x-2'> 
                        <span className='text-slate-400 w-2/3'>брюшная аорта</span>
                        <span className='text-slate-800'>{patient.MCT.abdominal_aorta}</span>
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

export default MultispiralCT;
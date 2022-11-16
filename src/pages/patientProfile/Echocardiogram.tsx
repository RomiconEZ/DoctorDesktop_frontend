import React from 'react';
import {useAppDispatch, useAppSelector} from "../../hooks/redux";

const Echocardiogram = () => {
    const dispatch = useAppDispatch();
    const {patient, isLoading, error} = useAppSelector(state => state.patientReducer);

    const date_desease = new Date(patient.anamnesis.diseaseKnowledge)
    return (
        <div>
            {isLoading && <h1>Loading...</h1>}
            {error && <h1>{error}</h1>}


            <div className='p-8'>
                <h1 className='font-medium text-lg text-slate-800 pb-4'>Данные ЭХОГК</h1>

                <div className='grid grid-cols-2 gap-y-3 mb-4'>

                    <div className='flex gap-x-2'> 
                        <span className='text-slate-400 w-2/3'>ФВ ЛЖ</span>
                        <span className='text-slate-800'>{patient.echocardiogram.LVEF}</span>
                    </div>

                    <div className='flex gap-x-2'> 
                        <span className='text-slate-400 w-2/3'>КДО ЛЖ</span>
                        <span className='text-slate-800'>{patient.echocardiogram.LVEDV}</span>
                    </div>

                    <div className='flex gap-x-2'> 
                        <span className='text-slate-400 w-2/3'>КСО ЛЖ</span>
                        <span className='text-slate-800'>{patient.echocardiogram.LVESV}</span>
                    </div>

                    <div className='flex gap-x-2'> 
                        <span className='text-slate-400 w-2/3'>Диаметр восходящего отдела аорты</span>
                        <span className='text-slate-800'>{patient.echocardiogram.ascAorticD}</span>
                    </div>

                    <div className='flex gap-x-2'> 
                        <span className='text-slate-400 w-2/3'>Диаметр синусов Вальсальвы</span>
                        <span className='text-slate-800'>{patient.echocardiogram.valsalvaSinusesD}</span>
                    </div>

                    <div className='flex gap-x-2'> 
                        <span className='text-slate-400 w-2/3'>Количество створок аортального клапана (АК)</span>
                        <span className='text-slate-800'>{patient.echocardiogram.AVLeafletN}</span>
                    </div>

                    <div className='flex gap-x-2'> 
                        <span className='text-slate-400 w-2/3'>Диаметр фиброзного кольца АК</span>
                        <span className='text-slate-800'>{patient.echocardiogram.AVAnnuFibrD}</span>
                    </div>

                    <div className='flex gap-x-2'> 
                        <span className='text-slate-400 w-2/3'>Пиковая скорость на АК</span>
                        <span className='text-slate-800'>{patient.echocardiogram.peakSpeedAV}</span>
                    </div>

                    <div className='flex gap-x-2'> 
                        <span className='text-slate-400 w-2/3'>Градиент давления на АК (максимальный)</span>
                        <span className='text-slate-800'>{patient.echocardiogram.AVPressureGradientMax}</span>
                    </div>

                    <div className='flex gap-x-2'> 
                        <span className='text-slate-400 w-2/3'>Градиент давления на АК (средний)</span>
                        <span className='text-slate-800'>{patient.echocardiogram.AVPressureGradientMean}</span>
                    </div>

                    <div className='flex gap-x-2'> 
                        <span className='text-slate-400 w-2/3'>Степень аортальной регургитации</span>
                        {patient.echocardiogram.aorticRegurgitationDegree && <span className='text-slate-800'>Да</span>}
                        {!patient.echocardiogram.aorticRegurgitationDegree && <span className='text-slate-800'>Нет</span>}
                    </div>
                    
                    <div className='flex gap-x-2'> 
                        <span className='text-slate-400 w-2/3'>Систолическое давление в легочной артерии</span>
                        <span className='text-slate-800'>{patient.echocardiogram.pulmArterySysBP}</span>
                    </div>
                    <div className='flex gap-x-2'> 
                        <span className='text-slate-400 w-2/3'>Наличие и степень митральной недостаточности и/или митрального стеноза</span>
                        <span className='text-slate-800'>{patient.echocardiogram.mitralInsuffStenPrD}</span>
                    </div>
                    <div className='flex gap-x-2'> 
                        <span className='text-slate-400 w-2/3'>Наличие и степень трикуспидальной недостаточности</span>
                        <span className='text-slate-800'>{patient.echocardiogram.tricuspi}</span>
                    </div>
                    <div className='flex gap-x-2'> 
                        <span className='text-slate-400 w-2/3'>Наличие дефекта межпредсердной перегородки</span>
                        <span className='text-slate-800'>{patient.echocardiogram.trialSeptalDefectPr}</span>
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

export default Echocardiogram;
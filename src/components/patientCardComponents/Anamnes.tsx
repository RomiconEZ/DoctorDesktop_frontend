import React from 'react';
import {useAppDispatch, useAppSelector} from "../../hooks/redux";

const Anamnes = () => {
    const dispatch = useAppDispatch();
    const {patient, isLoading, error} = useAppSelector(state => state.patientReducer);

    const date_desease = new Date(patient.anamnesis.diseaseKnowledge)
    return (
        <div>
            {isLoading && <h1>Loading...</h1>}
            {error && <h1>{error}</h1>}


            <div className='p-8'>
                <h1 className='font-medium text-lg text-slate-800 pb-4'>Данные анамнеза</h1>

                <div className='grid grid-cols-2 gap-y-3 mb-4'>

                    <div className='flex'> 
                        <span className='text-slate-400 w-1/2'>Заболевания сердца и сосудов у родственников</span>
                        {patient.anamnesis.disHeartBloodVesselsFirstLineRelatives && <span className='text-slate-800 w-1/2'>Да</span>}
                        {!patient.anamnesis.disHeartBloodVesselsFirstLineRelatives && <span className='text-slate-800 w-1/2'>Нет</span>}
                    </div>

                    <div className='flex'> 
                        <span className='text-slate-400 w-1/2'>Соединительно-тканная дисплазия у родственников</span>
                        {patient.anamnesis.relativesConnTissDysplasia && <span className='text-slate-800 w-1/2'>Да</span>}
                        {!patient.anamnesis.relativesConnTissDysplasia && <span className='text-slate-800 w-1/2'>Нет</span>}
                    </div>

                    <div className='flex'> 
                        <span className='text-slate-400 w-1/2'>Операции на сердце</span>
                        {patient.anamnesis.heartSurgeriesPr && <span className='text-slate-800 w-1/2'>{patient.anamnesis.heartSurgeriesType}</span>}
                        {!patient.anamnesis.heartSurgeriesPr && <span className='text-slate-800 w-1/2'>Нет</span>}
                    </div>

                    <div className='flex'> 
                        <span className='text-slate-400 w-1/2'>Генетический анализ</span>
                        {patient.anamnesis.geneticAnalysisPr && <span className='text-slate-800 w-1/2'>{patient.anamnesis.geneticAnalysisRes}</span>}
                        {!patient.anamnesis.geneticAnalysisPr && <span className='text-slate-800 w-1/2'>Нет</span>}
                    </div>

                    <div className='flex'> 
                        <span className='text-slate-400 w-1/2'>Курение</span>
                        {patient.anamnesis.smokingExperience != 0 && <span className='text-slate-800 w-1/2'>{patient.anamnesis.smokingExperience + " год"}</span>}
                        {patient.anamnesis.smokingExperience == 0 && <span className='text-slate-800 w-1/2'>Нет</span>}
                    </div>

                    <div className='flex'> 
                        <span className='text-slate-400 w-1/2'>Употребление алкоголя</span>
                        {patient.anamnesis.alkoConsumptionExperince != 0 && <span className='text-slate-800 w-1/2'>{patient.anamnesis.alkoConsumptionExperince + " год"}</span>}
                        {patient.anamnesis.alkoConsumptionExperince == 0 && <span className='text-slate-800 w-1/2'>Нет</span>}
                    </div>

                    <div className='flex'> 
                        <span className='text-slate-400 w-1/2'>Употребление наркотиков</span>
                        {patient.anamnesis.drugConsumptionExperince != 0 && <span className='text-slate-800 w-1/2'>{patient.anamnesis.drugConsumptionExperince + " год"}</span>}
                        {patient.anamnesis.drugConsumptionExperince == 0 && <span className='text-slate-800 w-1/2'>Нет</span>}
                    </div>

                    <div className='flex'> 
                        <span className='text-slate-400 w-1/2'>Профессиональные вредности</span>
                        <span className='text-slate-800 w-1/2'>{patient.anamnesis.occupationalHazards}</span>
                    </div>

                    <div className='flex'> 
                        <span className='text-slate-400 w-1/2'>Занятия спортом</span>
                        <span className='text-slate-800 w-1/2'>{patient.anamnesis.sports}</span>
                    </div>

                    <div className='flex'> 
                        <span className='text-slate-400 w-1/2'>Когда впервые узнал о заболевании</span>
                        <span className='text-slate-800 w-1/2'>{date_desease.toLocaleDateString()}</span>
                    </div>

                    <div className='flex'> 
                        <span className='text-slate-400 w-1/2'>Работает</span>
                        {patient.anamnesis.employed && <span className='text-slate-800 w-1/2'>Да</span>}
                        {!patient.anamnesis.employed  && <span className='text-slate-800 w-1/2'>Нет</span>}
                    </div>

                    <div className='flex'> 
                        <span className='text-slate-400 w-1/2'>Принимает кроворазжижающие препараты</span>
                        {patient.anamnesis.blodThinDrugs && <span className='text-slate-800 w-1/2'>{patient.anamnesis.blodThinDrugsType}</span>}
                        {!patient.anamnesis.blodThinDrugs  && <span className='text-slate-800 w-1/2'>Нет</span>}
                    </div>

                    <div className='flex'> 
                        <span className='text-slate-400 w-1/2'>Принимает антиагреганты</span>
                        {patient.anamnesis.disaggregants && <span className='text-slate-800 w-1/2'>{patient.anamnesis.disaggregantsType}</span>}
                        {!patient.anamnesis.disaggregants  && <span className='text-slate-800 w-1/2'>Нет</span>}
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

export default Anamnes;
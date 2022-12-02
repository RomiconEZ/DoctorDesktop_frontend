import React from 'react';
import {useAppDispatch, useAppSelector} from "../../../hooks/redux";

import {additionalSlice} from "../../../store/reducers/AdditionalSlice";
import {useNavigate} from "react-router-dom";


const AnamnesisReadOnly = () => {
    const {SelectedPatient, IsEditButtonPressed} = useAppSelector(state => state.additionalReducer)
    const navigate = useNavigate();

    const dispatch = useAppDispatch()
    return (

        <div className='p-8'>
            <h1 className='font-medium text-lg text-slate-800 pb-4'>Анамнез пациента режим чтения</h1>

            <div className='grid grid-cols-2 gap-y-3 mb-4'>

                <div className='col-span-2 flex'>
                    <span className='text-slate-400 w-1/4'>Заболевания сердца и сосудов у родственников первой линии</span>
                    <span className='text-slate-800'>{SelectedPatient.anamnesis.disHeartBloodVesselsFirstLineRelatives}</span>
                </div>

                <div className='flex'>
                    <span className='text-slate-400 w-1/2'>Наличие соединительно-тканевой дисплазии у родстенников</span>
                    {SelectedPatient.anamnesis.relativesConnTissDysplasia!==0 && <span className='text-slate-800 w-1/2'>да</span> }
                    {SelectedPatient.anamnesis.relativesConnTissDysplasia!==1 && <span className='text-slate-800 w-1/2'>нет</span> }

                </div>

                <div className='flex'>
                    <span className='text-slate-400 w-1/2'>Наличие операций на сердце в прошлом</span>
                    {SelectedPatient.anamnesis.heartSurgeriesPr!==0 && <span className='text-slate-800 w-1/2'>да</span> }
                    {SelectedPatient.anamnesis.heartSurgeriesPr!==1 && <span className='text-slate-800 w-1/2'>нет</span> }

                </div>

                <div className='flex'>
                    <span className='text-slate-400 w-1/2'>Тип операций на сердце в прошлом</span>
                    <span className='text-slate-800 w-1/2'>{SelectedPatient.anamnesis.heartSurgeriesType}</span>
                </div>
                <div className='flex'>
                    <span className='text-slate-400 w-1/2'>Проходил ли генетический анализ</span>
                    {SelectedPatient.anamnesis.geneticAnalysisPr!==0 && <>
                        <span className='text-slate-800 w-1/2'>да</span>
                        <span className='text-slate-400 w-1/2'>Результаты генетического анализа</span>
                        <span className='text-slate-800 w-1/2'>{SelectedPatient.anamnesis.geneticAnalysisRes}</span>
                    </>
                    }
                    {SelectedPatient.anamnesis.geneticAnalysisPr!==1 && <span className='text-slate-800 w-1/2'>нет</span> }
                </div>

                <div className='flex'>
                    <span className='text-slate-400 w-1/2'>Опыт курения</span>
                    {SelectedPatient.anamnesis.smokingBool!==0 && <>
                        <span className='text-slate-800 w-1/2'>да</span>
                        <span className='text-slate-800 w-1/2'>{SelectedPatient.anamnesis.smokingExperience}</span>
                    </>
                    }
                    {SelectedPatient.anamnesis.smokingBool!==1 && <span className='text-slate-800 w-1/2'>нет</span> }
                </div>

                <div className='flex'>
                    <span className='text-slate-400 w-1/2'>Опыт употребления алкоголя</span>
                    {SelectedPatient.anamnesis.alkoConsumptionBool!==0 && <>
                        <span className='text-slate-800 w-1/2'>да</span>
                        <span className='text-slate-800 w-1/2'>{SelectedPatient.anamnesis.alkoConsumptionExperince}</span>
                    </>
                    }
                    {SelectedPatient.anamnesis.alkoConsumptionBool!==1 && <span className='text-slate-800 w-1/2'>нет</span> }
                </div>
                <div className='flex'>
                    <span className='text-slate-400 w-1/2'>Опыт употребления наркотиков</span>
                    {SelectedPatient.anamnesis.drugConsumptionBool!==0 && <>
                        <span className='text-slate-800 w-1/2'>да</span>
                        <span className='text-slate-800 w-1/2'>{SelectedPatient.anamnesis.drugConsumptionExperince}</span>
                    </>
                    }
                    {SelectedPatient.anamnesis.drugConsumptionBool!==1 && <span className='text-slate-800 w-1/2'>нет</span> }
                </div>

                <div className='flex'>
                    <span className='text-slate-400 w-1/2'>Профессиональные вредности</span>
                    <span className='text-slate-800 w-1/2'>{SelectedPatient.anamnesis.occupationalHazards}</span>
                </div>
                <div className='flex'>
                    <span className='text-slate-400 w-1/2'>Занятие спортом</span>
                    <span className='text-slate-800 w-1/2'>{SelectedPatient.anamnesis.sports}</span>
                </div>
                <div className='flex'>
                    <span className='text-slate-400 w-1/2'>Когда узнал о заболевании</span>
                    <span className='text-slate-800 w-1/2'>{SelectedPatient.anamnesis.diseaseKnowledge}</span>
                </div>
                <div className='flex'>
                    <span className='text-slate-400 w-1/2'>Работает</span>
                    {SelectedPatient.anamnesis.employed!==0 && <span className='text-slate-800 w-1/2'>да</span> }
                    {SelectedPatient.anamnesis.employed!==1 && <span className='text-slate-800 w-1/2'>нет</span> }
                </div>
                <div className='flex'>
                    <span className='text-slate-400 w-1/2'>Принимает ли кроворазжижающие препараты</span>
                    {SelectedPatient.anamnesis.blodThinDrugs!==0 && <span className='text-slate-800 w-1/2'>да</span> }
                    {SelectedPatient.anamnesis.blodThinDrugs!==1 && <span className='text-slate-800 w-1/2'>нет</span> }
                </div>
                <div className='flex'>
                    <span className='text-slate-400 w-1/2'>Принимает ли дезагреганты</span>
                    { SelectedPatient.anamnesis.disaggregants!==0 && <span className='text-slate-800 w-1/2'>да</span> }
                    { SelectedPatient.anamnesis.disaggregants!==1 && <span className='text-slate-800 w-1/2'>нет</span> }
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

export default  AnamnesisReadOnly;
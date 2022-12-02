import React from 'react';
import {useAppDispatch, useAppSelector} from "../../../hooks/redux";

import {useNavigate} from "react-router-dom";



const EchoCardiogramReadOnly = () => {
    const {SelectedPatient, IsEditButtonPressed} = useAppSelector(state => state.additionalReducer)
    const navigate = useNavigate();

    const dispatch = useAppDispatch()

    return (

        <div className='p-8'>
            <h1 className='font-medium text-lg text-slate-800 pb-4'>ЭхоКГ режим чтения</h1>

            <div className='grid grid-cols-2 gap-y-3 mb-4'>

                <div className='flex'>
                    <span className='text-slate-400 w-1/2'>ФВ ЛЖ(Simpson)</span>
                    <span className='text-slate-800 w-1/2'>{SelectedPatient.echocardiogram.LVEF}%</span>
                </div>
                <div className='flex'>
                    <span className='text-slate-400 w-1/2'>КДО ЛЖ</span>
                    <span className='text-slate-800 w-1/2'>{SelectedPatient.echocardiogram.LVEDV} мл</span>
                </div>
                <div className='flex'>
                    <span className='text-slate-400 w-1/2'>КСО ЛЖ</span>
                    <span className='text-slate-800 w-1/2'>{SelectedPatient.echocardiogram.LVESV} мл</span>
                </div>
                <div className='flex'>
                    <span className='text-slate-400 w-1/2'>Диаметр восходящего отдела аорты</span>
                    <span className='text-slate-800 w-1/2'>{SelectedPatient.echocardiogram.ascAorticD} мм</span>
                </div>
                <div className='flex'>
                    <span className='text-slate-400 w-1/2'>Диаметр синусов Вальсальвы</span>
                    <span className='text-slate-800 w-1/2'>{SelectedPatient.echocardiogram.valsalvaSinusesD} мм</span>
                </div>
                <div className='flex'>
                    <span className='text-slate-400 w-1/2'>Количество створок аортального клапана</span>
                    <span className='text-slate-800 w-1/2'>{SelectedPatient.echocardiogram.AVLeafletN}</span>
                </div>
                <div className='flex'>
                    <span className='text-slate-400 w-1/2'>Диаметр фиброизного кольца аортального клапана</span>
                    <span className='text-slate-800 w-1/2'>{SelectedPatient.echocardiogram.AVAnnuFibrD} мм</span>
                </div>
                <div className='flex'>
                    <span className='text-slate-400 w-1/2'>Пиковая скорость на аортальном клапане</span>
                    <span className='text-slate-800 w-1/2'>{SelectedPatient.echocardiogram.peakSpeedAV} м/с</span>
                </div>
                <div className='flex'>
                    <span className='text-slate-400 w-1/2'>Градиент давления на аортальном клапане(максимальный)</span>
                    <span className='text-slate-800 w-1/2'>{SelectedPatient.echocardiogram.AVPressureGradientMax} мм рт ст</span>
                </div>
                <div className='flex'>
                    <span className='text-slate-400 w-1/2'>Градиент давления на аортальном клапане(средний)</span>
                    <span className='text-slate-800 w-1/2'>{SelectedPatient.echocardiogram.AVPressureGradientMean} мм рт ст</span>
                </div>
                <div className='flex'>
                    <span className='text-slate-400 w-1/2'>Степень аортальной регургитации</span>
                    <span className='text-slate-800 w-1/2'>{SelectedPatient.echocardiogram.aorticRegurgitationDegree}</span>
                </div>
                <div className='flex'>
                    <span className='text-slate-400 w-1/2'>Систолическое давление в легочной артерии</span>
                    <span className='text-slate-800 w-1/2'>{SelectedPatient.echocardiogram.pulmArterySysBP} мм рт ст</span>
                </div>

                <div className='flex'>
                    <span className='text-slate-400 w-1/2'>Наличие митральной недостаточности</span>
                    {SelectedPatient.echocardiogram.mitralInsuffBool!==0 && <>
                        <span className='text-slate-800 w-1/2'>да</span>
                        <span className='text-slate-400 w-1/2'>Степень митральной недостаточности</span>
                        <span className='text-slate-800 w-1/2'>{SelectedPatient.echocardiogram.mitralInsuffDegree}</span>
                    </>
                    }
                    {SelectedPatient.echocardiogram.mitralInsuffBool!==1 && <span className='text-slate-800 w-1/2'>нет</span> }
                </div>

                <div className='flex'>
                    <span className='text-slate-400 w-1/2'>Наличие митрального стеноза</span>
                    {SelectedPatient.echocardiogram.mitralStenBool!==0 && <>
                        <span className='text-slate-800 w-1/2'>да</span>
                        <span className='text-slate-400 w-1/2'>Степень митрального стеноза</span>
                        <span className='text-slate-800 w-1/2'>{SelectedPatient.echocardiogram.mitralStenDegree}</span>
                    </>
                    }
                    {SelectedPatient.echocardiogram.mitralStenBool!==1 && <span className='text-slate-800 w-1/2'>нет</span> }
                </div>

                <div className='flex'>
                    <span className='text-slate-400 w-1/2'>Наличие трикуспидальной недостаточности</span>
                    {SelectedPatient.echocardiogram.tricuspiBool!==0 && <>
                        <span className='text-slate-800 w-1/2'>да</span>
                        <span className='text-slate-400 w-1/2'>Степень митральной недостаточности</span>
                        <span className='text-slate-800 w-1/2'>{SelectedPatient.echocardiogram.tricuspiDegree}</span>
                    </>
                    }
                    {SelectedPatient.echocardiogram.tricuspiBool!==1 && <span className='text-slate-800 w-1/2'>нет</span> }
                </div>

                <div className='flex'>
                    <span className='text-slate-400 w-1/2'>Наличие дефекта межпредсердной перегородки</span>
                    {SelectedPatient.echocardiogram.trialSeptalDefectPr!==0 && <span className='text-slate-800 w-1/2'>да</span> }
                    {SelectedPatient.echocardiogram.trialSeptalDefectPr!==1 && <span className='text-slate-800 w-1/2'>нет</span> }

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

export default EchoCardiogramReadOnly;
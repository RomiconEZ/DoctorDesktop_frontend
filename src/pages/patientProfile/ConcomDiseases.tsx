import React from 'react';
import {useAppDispatch, useAppSelector} from "../../hooks/redux";

const ConcomDiseases = () => {
    const dispatch = useAppDispatch();
    const {patient, isLoading, error} = useAppSelector(state => state.patientReducer);
    return (
        <div>
            {isLoading && <h1>Loading...</h1>}
            {error && <h1>{error}</h1>}


            <div className='p-8'>
                <h1 className='font-medium text-lg text-slate-800 pb-4'>Сопутствующие заболевания</h1>

                <div className='grid grid-cols-2 gap-y-4 mb-4'>

                    <div className='flex'> 
                        <span className='text-slate-400 w-3/4'> Наличие клиники ишемической болезни сердца</span>
                        <span className='text-slate-800 '>{patient.concom_desease.cor_heart_disease_clinic}</span>
                    </div>

                    <div className='flex'> 
                        <span className='text-slate-400 w-3/4'>Острый инфаркт миокарда в анамнезе</span>
                        {patient.concom_desease.acuteMyocardilInfarctionNum === 0 && <span className='text-slate-800'>Нет</span>}
                        {patient.concom_desease.acuteMyocardilInfarctionNum !== 0 && <span className='text-slate-800'>{patient.concom_desease.acuteMyocardilInfarctionNum}</span>}
                       
                    </div>

                    <div className='flex'> 
                        <span className='text-slate-400 w-3/4'>Текущий инфаркт миокарда</span>
                        {patient.concom_desease.currentMyocardilInfarction && <span className='text-slate-800'>Да</span>}
                        {!patient.concom_desease.currentMyocardilInfarction && <span className='text-slate-800'>Нет</span>}
                    </div>

                    <div className='flex'> 
                        <span className='text-slate-400 w-3/4'>Сахарный диабет</span>
                        {patient.concom_desease.diabetes && <span className='text-slate-800'>{patient.concom_desease.diabetesType}</span>}
                        {!patient.concom_desease.diabetes && <span className='text-slate-800'>Нет</span>}
                    </div>

                    <div className='flex'> 
                        <span className='text-slate-400 w-3/4'>Наличие цереброваскулярной болезни</span>
                        {patient.concom_desease.cerebrovascularDisease && <span className='text-slate-800'>Да</span>}
                        {!patient.concom_desease.cerebrovascularDisease && <span className='text-slate-800'>Нет</span>}
                    </div>

                    <div className='flex'> 
                        <span className='text-slate-400 w-3/4'>Гемодинамически значимые стенозы БЦА</span>
                        {patient.concom_desease.BCAStenosis && <span className='text-slate-800'>Да</span>}
                        {!patient.concom_desease.BCAStenosis && <span className='text-slate-800'>Нет</span>}
                    </div>

                    <div className='flex'> 
                        <span className='text-slate-400 w-3/4'>Транзисторная ишемическая атака</span>
                        {patient.concom_desease.translschAttack && <span className='text-slate-800'>Да</span>}
                        {!patient.concom_desease.translschAttack && <span className='text-slate-800'>Нет</span>}
                    </div>

                    <div className='flex'> 
                        <span className='text-slate-400 w-3/4'>ОНМК в анамнезе</span>
                        {patient.concom_desease.ACVA && <span className='text-slate-800'>Да</span>}
                        {!patient.concom_desease.ACVA && <span className='text-slate-800'>Нет</span>}
                    </div>

                    <div className='flex'> 
                        <span className='text-slate-400 w-3/4'>Наличие хронических заболеваний легких</span>
                        {patient.concom_desease.chronicLungDisease && <span className='text-slate-800'>Да</span>}
                        {!patient.concom_desease.chronicLungDisease && <span className='text-slate-800'>Нет</span>}
                    </div>

                    <div className='flex'> 
                        <span className='text-slate-400 w-3/4'>Наличие перенесенных ранее инфекционных заболеваний</span>
                        {patient.concom_desease.prevInfectiousDisease && <span className='text-slate-800'>Да</span>}
                        {!patient.concom_desease.prevInfectiousDisease && <span className='text-slate-800'>Нет</span>}
                    </div>

                    <div className='flex'> 
                        <span className='text-slate-400 w-3/4'>Наличие нарушений ритма и проводимости</span>
                        {patient.concom_desease.rhythmConcluctionDisturbances && <span className='text-slate-800'>Да</span>}
                        {!patient.concom_desease.rhythmConcluctionDisturbances && <span className='text-slate-800'>Нет</span>}
                    </div>

                    <div className='flex'> 
                        <span className='text-slate-400 w-3/4'>Наличие заболеваний щитовидной железы</span>
                        {patient.concom_desease.thyroidDisease && <span className='text-slate-800'>Да</span>}
                        {!patient.concom_desease.thyroidDisease && <span className='text-slate-800'>Нет</span>}
                    </div>

                    <div className='flex'> 
                        <span className='text-slate-400 w-3/4'>Наличие острой почечной недостаточности</span>
                        {patient.concom_desease.acuteRenalFailure && <span className='text-slate-800'>Да</span>}
                        {!patient.concom_desease.acuteRenalFailure && <span className='text-slate-800'>Нет</span>}
                    </div>

                    <div className='flex'> 
                        <span className='text-slate-400 w-3/4'>Наличие хронической почечной недостаточности</span>
                        {patient.concom_desease.chronicRenalFailure && <span className='text-slate-800'>Да</span>}
                        {!patient.concom_desease.chronicRenalFailure && <span className='text-slate-800'>Нет</span>}
                    </div>

                    <div className='flex'> 
                        <span className='text-slate-400 w-3/4'>Наличие онкологических заболеваний</span>
                        {patient.concom_desease.oncology && <span className='text-slate-800'>Да</span>}
                        {!patient.concom_desease.oncology && <span className='text-slate-800'>Нет</span>}
                    </div>

                    <div className='flex'> 
                        <span className='text-slate-400 w-3/4'>Наличие гематологических заболеваний</span>
                        {patient.concom_desease.hematologicalDisease && <span className='text-slate-800'>Да</span>}
                        {!patient.concom_desease.hematologicalDisease && <span className='text-slate-800'>Нет</span>}
                    </div>

                    <div className='flex'> 
                        <span className='text-slate-400 w-3/4'>ТЭЛА</span>
                        {patient.concom_desease.pulmonaryEmbolism && <span className='text-slate-800'>Да</span>}
                        {!patient.concom_desease.pulmonaryEmbolism && <span className='text-slate-800'>Нет</span>}
                    </div>

                    <div className='flex'> 
                        <span className='text-slate-400 w-3/4'>Травмы грудной стенки</span>
                        {patient.concom_desease.chestWallInjury && <span className='text-slate-800'>Да</span>}
                        {!patient.concom_desease.chestWallInjury && <span className='text-slate-800'>Нет</span>}
                    </div>

                    <div className='flex'> 
                        <span className='text-slate-400 w-3/4'>Врожденный двустворчатый или нормальный аортальный клапан</span>
                        {patient.concom_desease.aorticValve && <span className='text-slate-800'>Врожденный двустворчатый</span>}
                        {!patient.concom_desease.aorticValve && <span className='text-slate-800'>Нормальный</span>}
                    </div>

                    <div className='flex'> 
                        <span className='text-slate-400 w-3/4'>Приобретенные пороки аортального клапана</span>
                        {patient.concom_desease.acquiredAVDisease && <span className='text-slate-800'>Да</span>}
                        {!patient.concom_desease.acquiredAVDisease && <span className='text-slate-800'>Нет</span>}
                    </div>

                    <div className='flex'> 
                        <span className='text-slate-400 w-3/4'>Дегенеративные поражения АК</span>
                        {patient.concom_desease.AVDegenerativeLesions && <span className='text-slate-800'>Да</span>}
                        {!patient.concom_desease.AVDegenerativeLesions && <span className='text-slate-800'>Нет</span>}
                    </div>

                    <div className='flex'> 
                        <span className='text-slate-400 w-3/4'>Инфекционные поражения АК</span>
                        {patient.concom_desease.AVInfectiousLesions && <span className='text-slate-800'>Да</span>}
                        {!patient.concom_desease.AVInfectiousLesions && <span className='text-slate-800'>Нет</span>}
                    </div>

                    <div className='flex'> 
                        <span className='text-slate-400 w-3/4'>Травматические поражения сосудистой стенки аорты</span>
                        {patient.concom_desease.AVWTraumaticLesionsb && <span className='text-slate-800'>Да</span>}
                        {!patient.concom_desease.AVWTraumaticLesionsb && <span className='text-slate-800'>Нет</span>}
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

export default ConcomDiseases;
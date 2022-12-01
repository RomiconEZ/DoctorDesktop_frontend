import React from 'react';
import {useAppDispatch, useAppSelector} from "../../../hooks/redux";

import {additionalSlice} from "../../../store/reducers/AdditionalSlice";
import {useNavigate} from "react-router-dom";



const ConcomDeseasesReadOnly = () => {
    const {SelectedPatient, IsEditButtonPressed} = useAppSelector(state => state.additionalReducer)
    const navigate = useNavigate();

    const dispatch = useAppDispatch()

    const birthday = new Date(SelectedPatient.personal_data.birthday)
    return (

        <div className='p-8'>
            <h1 className='font-medium text-lg text-slate-800 pb-4'>Сопутствующие заболевания режим чтения</h1>
            <div className='grid grid-cols-2 gap-y-3 mb-4'>

                <div className='flex'>
                    <span className='text-slate-400 w-1/2'>Наличие клиники ишемической болезни сердца</span>
                    {SelectedPatient.concom_desease.clinicIschHeartDis!==0 && <span className='text-slate-800 w-1/2'>да</span> }
                    {SelectedPatient.concom_desease.clinicIschHeartDis!==1 && <span className='text-slate-800 w-1/2'>нет</span> }
                </div>

                <div className='flex'>
                    <span className='text-slate-400 w-1/2'>Острые инфаркты миокарда в анамнезе</span>
                    {SelectedPatient.concom_desease.acuteMyocardilInfarctionBool!==0 && <>
                        <span className='text-slate-800 w-1/2'>да</span>
                        <span className='text-slate-800 w-1/2'>{SelectedPatient.concom_desease.acuteMyocardilInfarctionNum}</span>
                    </>
                    }
                    {SelectedPatient.concom_desease.acuteMyocardilInfarctionBool!==1 && <span className='text-slate-800 w-1/2'>нет</span> }
                </div>

                <div className='flex'>
                    <span className='text-slate-400 w-1/2'>Текущий инфаркт миокарда</span>
                    {SelectedPatient.concom_desease.currentMyocardilInfarction!==0 && <span className='text-slate-800 w-1/2'>да</span> }
                    {SelectedPatient.concom_desease.currentMyocardilInfarction!==1 && <span className='text-slate-800 w-1/2'>нет</span> }
                </div>
                <div className='flex'>
                    <span className='text-slate-400 w-1/2'>Наличие сахарного диабета</span>
                    {SelectedPatient.concom_desease.diabetes!==0 && <span className='text-slate-800 w-1/2'>да</span> }
                    {SelectedPatient.concom_desease.diabetes!==1 && <span className='text-slate-800 w-1/2'>нет</span> }
                </div>
                <div className='col-span-2 flex'>
                    <span className='text-slate-400 w-1/4'>Тип сахарного диабета</span>
                    <span className='text-slate-800'>{SelectedPatient.concom_desease.diabetesType}</span>
                </div>
                <div className='flex'>
                    <span className='text-slate-400 w-1/2'>Наличие цереброваскулярной болезни</span>
                    {SelectedPatient.concom_desease.cerebrovascularDisease!==0 && <span className='text-slate-800 w-1/2'>да</span> }
                    {SelectedPatient.concom_desease.cerebrovascularDisease!==1 && <span className='text-slate-800 w-1/2'>нет</span> }
                </div>
                <div className='flex'>
                    <span className='text-slate-400 w-1/2'>Гемодинамические значимые стенозы БЦА</span>
                    {SelectedPatient.concom_desease.BCAStenosis!==0 && <span className='text-slate-800 w-1/2'>да</span> }
                    {SelectedPatient.concom_desease.BCAStenosis!==1 && <span className='text-slate-800 w-1/2'>нет</span> }
                </div>
                <div className='flex'>
                    <span className='text-slate-400 w-1/2'>Транзисторная ишемическая атака</span>
                    {SelectedPatient.concom_desease.translschAttack!==0 && <span className='text-slate-800 w-1/2'>да</span> }
                    {SelectedPatient.concom_desease.translschAttack!==1 && <span className='text-slate-800 w-1/2'>нет</span> }
                </div>
                <div className='flex'>
                    <span className='text-slate-400 w-1/2'>ОНМК в анамнезе</span>
                    {SelectedPatient.concom_desease.ACVA!==0 && <span className='text-slate-800 w-1/2'>да</span> }
                    {SelectedPatient.concom_desease.ACVA!==1 && <span className='text-slate-800 w-1/2'>нет</span> }
                </div>
                <div className='flex'>
                    <span className='text-slate-400 w-1/2'>Наличие хронических заболеваний легких</span>
                    {SelectedPatient.concom_desease.chronicLungDisease!==0 && <span className='text-slate-800 w-1/2'>да</span> }
                    {SelectedPatient.concom_desease.chronicLungDisease!==1 && <span className='text-slate-800 w-1/2'>нет</span> }
                </div>
                <div className='flex'>
                    <span className='text-slate-400 w-1/2'>Наличие инфекционных заболеваний перенесенных ранее</span>
                    {SelectedPatient.concom_desease.prevInfectiousDisease!==0 && <span className='text-slate-800 w-1/2'>да</span> }
                    {SelectedPatient.concom_desease.prevInfectiousDisease!==1 && <span className='text-slate-800 w-1/2'>нет</span> }
                </div>
                <div className='flex'>
                    <span className='text-slate-400 w-1/2'>Наличие нарушений ритма и проводимости</span>
                    {SelectedPatient.concom_desease.rhythmConcluctionDisturbances!==0 && <span className='text-slate-800 w-1/2'>да</span> }
                    {SelectedPatient.concom_desease.rhythmConcluctionDisturbances!==1 && <span className='text-slate-800 w-1/2'>нет</span> }
                </div>
                <div className='flex'>
                    <span className='text-slate-400 w-1/2'>Наличие заболеваний щитовидной железы</span>
                    {SelectedPatient.concom_desease.thyroidDisease!==0 && <span className='text-slate-800 w-1/2'>да</span> }
                    {SelectedPatient.concom_desease.thyroidDisease!==1 && <span className='text-slate-800 w-1/2'>нет</span> }
                </div>
                <div className='flex'>
                    <span className='text-slate-400 w-1/2'>Наличие острой почечной недостаточности</span>
                    {SelectedPatient.concom_desease.acuteRenalFailure!==0 && <span className='text-slate-800 w-1/2'>да</span> }
                    {SelectedPatient.concom_desease.acuteRenalFailure!==1 && <span className='text-slate-800 w-1/2'>нет</span> }
                </div>
                <div className='flex'>
                    <span className='text-slate-400 w-1/2'>Наличие хранической почечной недостаточности</span>
                    {SelectedPatient.concom_desease.chronicRenalFailure!==0 && <span className='text-slate-800 w-1/2'>да</span> }
                    {SelectedPatient.concom_desease.chronicRenalFailure!==1 && <span className='text-slate-800 w-1/2'>нет</span> }
                </div>
                <div className='flex'>
                    <span className='text-slate-400 w-1/2'>Наличие онкологических заболеваний</span>
                    {SelectedPatient.concom_desease.oncology!==0 && <span className='text-slate-800 w-1/2'>да</span> }
                    {SelectedPatient.concom_desease.oncology!==1 && <span className='text-slate-800 w-1/2'>нет</span> }
                </div>
                <div className='flex'>
                    <span className='text-slate-400 w-1/2'>Наличие гематологических заболеваний</span>
                    {SelectedPatient.concom_desease.hematologicalDisease!==0 && <span className='text-slate-800 w-1/2'>да</span> }
                    {SelectedPatient.concom_desease.hematologicalDisease!==1 && <span className='text-slate-800 w-1/2'>нет</span> }
                </div>
                <div className='flex'>
                    <span className='text-slate-400 w-1/2'>ТЭЛА</span>
                    {SelectedPatient.concom_desease.pulmonaryEmbolism!==0 && <span className='text-slate-800 w-1/2'>да</span> }
                    {SelectedPatient.concom_desease.pulmonaryEmbolism!==1 && <span className='text-slate-800 w-1/2'>нет</span> }
                </div>
                <div className='flex'>
                    <span className='text-slate-400 w-1/2'>Травма грудной клетки</span>
                    {SelectedPatient.concom_desease.chestWallInjury!==0 && <span className='text-slate-800 w-1/2'>да</span> }
                    {SelectedPatient.concom_desease.chestWallInjury!==1 && <span className='text-slate-800 w-1/2'>нет</span> }
                </div>
                <div className='col-span-2 flex'>
                    <span className='text-slate-400 w-1/4'>Врожденный двустворчатый или нормальный аортальный клапан</span>
                    <span className='text-slate-800'>{SelectedPatient.concom_desease.aorticValve}</span>
                </div>
                <div className='flex'>
                    <span className='text-slate-400 w-1/2'>Приобретенные пороки аортального клапана</span>
                    {SelectedPatient.concom_desease.acquiredAVDisease!==0 && <span className='text-slate-800 w-1/2'>да</span> }
                    {SelectedPatient.concom_desease.acquiredAVDisease!==1 && <span className='text-slate-800 w-1/2'>нет</span> }
                </div>
                <div className='flex'>
                    <span className='text-slate-400 w-1/2'>Дегенеративные поражения аортального клапана</span>
                    {SelectedPatient.concom_desease.AVDegenerativeLesions!==0 && <span className='text-slate-800 w-1/2'>да</span> }
                    {SelectedPatient.concom_desease.AVDegenerativeLesions!==1 && <span className='text-slate-800 w-1/2'>нет</span> }
                </div>
                <div className='flex'>
                    <span className='text-slate-400 w-1/2'>Инфекционные поражения аортального клапана</span>
                    {SelectedPatient.concom_desease.AVInfectiousLesions!==0 && <span className='text-slate-800 w-1/2'>да</span> }
                    {SelectedPatient.concom_desease.AVInfectiousLesions!==1 && <span className='text-slate-800 w-1/2'>нет</span> }
                </div>
                <div className='flex'>
                    <span className='text-slate-400 w-1/2'>Травматические поражения сосудистой стенки аорты</span>
                    {SelectedPatient.concom_desease.AVWTraumaticLesionsb!==0 && <span className='text-slate-800 w-1/2'>да</span> }
                    {SelectedPatient.concom_desease.AVWTraumaticLesionsb!==1 && <span className='text-slate-800 w-1/2'>нет</span> }
                </div>




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

export default ConcomDeseasesReadOnly;
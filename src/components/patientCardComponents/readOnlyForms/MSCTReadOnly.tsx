import React from 'react';
import {useAppDispatch, useAppSelector} from "../../../hooks/redux";

import {additionalSlice} from "../../../store/reducers/AdditionalSlice";
import {useNavigate} from "react-router-dom";



const MSCTReadOnly = () => {
    const {SelectedPatient, IsEditButtonPressed} = useAppSelector(state => state.additionalReducer)
    const navigate = useNavigate();

    const dispatch = useAppDispatch()

    const birthday = new Date(SelectedPatient.personal_data.birthday)
    return (

        <div className='p-8'>
            <h1 className='font-medium text-lg text-slate-800 pb-4'>МСКТ режим чтения</h1>
            <h2 className='font-medium text-lg text-slate-800 pb-4'> Диаметр на уровне:</h2>
            <div className='grid grid-cols-2 gap-y-3 mb-4'>

                <div className='col-span-2 flex'>
                    <span className='text-slate-400 w-1/4'>Фиброзного кольца аортального клапана</span>
                    <span className='text-slate-800'>{SelectedPatient.MCT.AV_annulus_fibrosis} мм</span>
                </div>
                <div className='col-span-2 flex'>
                    <span className='text-slate-400 w-1/4'>Синуса Вальсальвы</span>
                    <span className='text-slate-800'>{SelectedPatient.MCT.sinuses_valsalva} мм</span>
                </div>
                <div className='col-span-2 flex'>
                    <span className='text-slate-400 w-1/4'>Синотубулярного соединения</span>
                    <span className='text-slate-800'>{SelectedPatient.MCT.sinotubular_junction} мм</span>
                </div>
                <div className='col-span-2 flex'>
                    <span className='text-slate-400 w-1/4'>Восходящего отдела аорты на уровне бифуркации легочной артерии</span>
                    <span className='text-slate-800'>{SelectedPatient.MCT.asc_aorta_pulm_art_bif} мм</span>
                </div>
                <div className='col-span-2 flex'>
                    <span className='text-slate-400 w-1/4'>Восходящего отдела аорты перед БЦС</span>
                    <span className='text-slate-800'>{SelectedPatient.MCT.asc_aorta_before_BCS} мм</span>
                </div>
                <div className='col-span-2 flex'>
                    <span className='text-slate-400 w-1/4'>Дуги аорты перед ЛОСА</span>
                    <span className='text-slate-800'>{SelectedPatient.MCT.aortic_arch_before_CCA} мм</span>
                </div>
                <div className='col-span-2 flex'>
                    <span className='text-slate-400 w-1/4'>Дуги аорты перед левой подключичной артерии</span>
                    <span className='text-slate-800'>{SelectedPatient.MCT.aortic_arch_before_LSA} мм</span>
                </div>
                <div className='col-span-2 flex'>
                    <span className='text-slate-400 w-1/4'>Перешейка</span>
                    <span className='text-slate-800'>{SelectedPatient.MCT.aorticlsthmus} мм</span>
                </div>
                <div className='col-span-2 flex'>
                    <span className='text-slate-400 w-1/4'>Средней части нисходящей аорты</span>
                    <span className='text-slate-800'>{SelectedPatient.MCT.desc_aorta_middle_part} мм</span>
                </div>
                <div className='col-span-2 flex'>
                    <span className='text-slate-400 w-1/4'>Брюшной аорты</span>
                    <span className='text-slate-800'>{SelectedPatient.MCT.abdominal_aorta} мм</span>
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

export default MSCTReadOnly;
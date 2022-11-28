import React from 'react';
import {useAppDispatch, useAppSelector} from "../../../hooks/redux";

import {additionalSlice} from "../../../store/reducers/AdditionalSlice";
import {useNavigate} from "react-router-dom";



const AnthropometricDataReadOnly = () => {
    const {SelectedPatient, IsEditButtonPressed} = useAppSelector(state => state.additionalReducer)
    const navigate = useNavigate();

    const dispatch = useAppDispatch()

    const birthday = new Date(SelectedPatient.personal_data.birthday)
    return (

        <div className='p-8'>
            <h1 className='font-medium text-lg text-slate-800 pb-4'>Персональные данные режим чтения</h1>

            <div className='grid grid-cols-2 gap-y-3 mb-4'>

                <div className='col-span-2 flex'>
                    <span className='text-slate-400 w-1/4'>ФИО</span>
                    <span className='text-slate-800'>{SelectedPatient.personal_data.second_name + ' ' +
                        SelectedPatient.personal_data.first_name + ' ' + SelectedPatient.personal_data.patronymic}</span>
                </div>

                <div className='flex'>
                    <span className='text-slate-400 w-1/2'>Дата рождения</span>
                    <span className='text-slate-800 w-1/2'>{birthday.toLocaleDateString()}</span>
                </div>

                <div className='flex'>
                    <span className='text-slate-400 w-1/2'>Место обследования</span>
                    <span className='text-slate-800 w-1/2'>{SelectedPatient.personal_data.clinic}</span>
                </div>

                <div className='flex'>
                    <span className='text-slate-400 w-1/2'>Регион</span>
                    <span className='text-slate-800 w-1/2'>{SelectedPatient.personal_data.region}</span>
                </div>

                <div className='flex'>
                    <span className='text-slate-400 w-1/2'>Пол</span>
                    {SelectedPatient.personal_data.sex && <span className='text-slate-800 w-1/2'>мужской</span>}
                    {!SelectedPatient.personal_data.sex && <span className='text-slate-800 w-1/2'>женский</span>}
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
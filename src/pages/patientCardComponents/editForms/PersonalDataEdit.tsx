import React from 'react';
import {IPersonal_data} from "../../../models/IPatient";
import {useAppDispatch, useAppSelector} from "../../../hooks/redux";
import {changeMode} from "../../../store/reducers/PatientSlice";

const PersonalDataEdit = () => {
    const {patient} = useAppSelector(state => state.patientReducer);
    const dispatch = useAppDispatch();

    const birthday = new Date(patient.personal_data.birthday)
    return (

        <div className='p-8'>
            <h1 className='font-medium text-lg text-slate-800 pb-4'>Персональные данные режим редактирования</h1>

            <div className='grid grid-cols-2 gap-y-3 mb-4'>

                <div className='flex col-span-2'>
                    <label htmlFor="first_name" className="text-slate-800 w-1/4">Имя</label>

                    <input type="text" id="first_name" defaultValue={patient.personal_data.first_name}
                           className="text-slate-400 w-1/2 bg-gray-50 p-1 pl-4 border rounded-md border-gray-300"/>
                </div>

                <div className='flex col-span-2'>
                    <label htmlFor="first_name" className="text-slate-800 w-1/4">Фамилия</label>

                    <input type="text" id="first_name" defaultValue={patient.personal_data.second_name}
                           className="text-slate-400 w-1/2 bg-gray-50 p-1 pl-4 border rounded-md border-gray-300"/>
                </div>

                <div className='flex col-span-2'>
                    <label htmlFor="first_name" className="text-slate-800 w-1/4">Отчество</label>

                    <input type="text" id="first_name" defaultValue={patient.personal_data.patronymic}
                           className="text-slate-400 w-1/2 bg-gray-50 p-1 pl-4 border rounded-md border-gray-300"/>
                </div>

            
                <div className='flex'>
                    <span className='text-slate-800 w-1/2'>Дата рождения</span>
                    <span className='text-slate-400 w-1/2'>{birthday.toLocaleDateString()}</span>
                </div>



                <div className='flex col-span-2'>
                    <label htmlFor="first_name" className="text-slate-800 w-1/4">Место обследования</label>

                    <input type="text" id="first_name" defaultValue={patient.personal_data.clinic}
                           className="text-slate-400 w-1/2 bg-gray-50 p-1 pl-4 border rounded-md border-gray-300"/>
                </div>

                <div className='flex col-span-2'>
                    <span className='text-slate-800 w-1/4'>Пол</span>
                    <input className="hidden" type="radio" id="male" checked/>
                    <label className="bg-gray-300 hover:bg-gray-400 text-gray-800 font-semibold py-2 px-4 cursor-pointer rounded-l-md" htmlFor="male">Мужской</label>
                    <input className="hidden" type="radio" id="female"/>
                    <label className="bg-gray-300 hover:bg-gray-400 text-gray-800 font-semibold py-2 px-4 cursor-pointer rounded-r-md" htmlFor="female">Женский</label>
                </div>

            </div>


            <button
                onClick={()=>dispatch(changeMode())}
                className="relative mt-8 bottom-2 left-3/4 p-2 bg-transparent
                text-blue-600 font-semibold border border-blue-600
                rounded hover:bg-blue-600 hover:text-white hover:border-transparent
                transition ease-in duration-200 transform hover:-translate-y-1 active:translate-y-0">
                Сохранить
            </button>

        </div>
    );
};

export default PersonalDataEdit;
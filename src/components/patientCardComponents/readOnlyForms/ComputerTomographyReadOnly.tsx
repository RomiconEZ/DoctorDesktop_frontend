import React from 'react';
import {useAppDispatch, useAppSelector} from "../../../hooks/redux";

import {additionalSlice} from "../../../store/reducers/AdditionalSlice";
import {useNavigate} from "react-router-dom";



const ComputerTomographyReadOnly = () => {
    const {SelectedPatient, IsEditButtonPressed} = useAppSelector(state => state.additionalReducer)
    const navigate = useNavigate();

    const dispatch = useAppDispatch()

    const birthday = new Date(SelectedPatient.personal_data.birthday)
    return (

        <div className='p-8'>
            <h1 className='font-medium text-lg text-slate-800 pb-4'>Компьютерная томография режим чтения</h1>

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

export default ComputerTomographyReadOnly;
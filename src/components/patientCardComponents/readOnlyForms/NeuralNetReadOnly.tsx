import React from 'react';
import {useAppDispatch, useAppSelector} from "../../../hooks/redux";

import {useNavigate} from "react-router-dom";



const NeuralNetReadOnly = () => {
    const {SelectedPatient, IsEditButtonPressed} = useAppSelector(state => state.additionalReducer)

    const dispatch = useAppDispatch()
    const navigate = useNavigate();

    return (

        <div className='p-8'>
            <h1 className='font-medium text-lg text-slate-800 pb-4'>Данные нейронной сети</h1>

            <div className='grid grid-cols-2 gap-y-3 mb-4'>


            <button
                onClick={()=>navigate(`edit`)}
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

export default NeuralNetReadOnly;
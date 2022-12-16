import React from 'react';
import {useAppDispatch, useAppSelector} from "../../../hooks/redux";

import {useNavigate} from "react-router-dom";
import MyButton from "../../common/MyButton";



const NeuralNetReadOnly = () => {
    const {SelectedPatient, IsEditButtonPressed} = useAppSelector(state => state.additionalReducer)

    const dispatch = useAppDispatch()
    const navigate = useNavigate();

    return (

        <div className='p-8 mb-16'>
            <h1 className='font-medium font-sans  text-our-greenish-400 text-2xl pb-4'>Данные нейронной сети</h1>

            <div className='grid grid-cols-1 relative gap-y-3 mb-4'>


                {/*<MyButton*/}
                {/*    onClick={()=>navigate(`edit`)}*/}
                {/*    className="w-1/5 absolute right-44 -bottom-16"*/}
                {/*>*/}
                {/*    Редактировать*/}
                {/*</MyButton>*/}

        </div>
        </div>

    );
};

export default NeuralNetReadOnly;
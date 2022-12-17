import React from 'react';
import {useAppDispatch, useAppSelector} from "../../../hooks/redux";
import {useNavigate} from "react-router-dom";



const ComputerTomographyReadOnly = () => {
    const {SelectedPatient, IsEditButtonPressed} = useAppSelector(state => state.additionalReducer)
    const navigate = useNavigate();

    // const dispatch = useAppDispatch()

    return (

        <div className='p-8 mb-16 relative'>
            <h1 className='font-medium font-sans  text-our-greenish-400 text-2xl pb-4'>Компьютерная томография режим чтения</h1>

            {/*<MyButton*/}
            {/*    onClick={()=>navigate(`edit`)}*/}
            {/*    className="w-1/5 absolute right-44 -bottom-16"*/}
            {/*>*/}
            {/*    Редактировать*/}
            {/*</MyButton>*/}

        </div>
    );
};

export default ComputerTomographyReadOnly;
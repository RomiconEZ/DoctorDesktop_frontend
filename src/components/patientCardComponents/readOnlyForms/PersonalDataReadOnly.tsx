import React from 'react';
import {useAppDispatch, useAppSelector} from "../../../hooks/redux";
import {useNavigate} from "react-router-dom";
import ReadFieldBool from "../../common/ReadFieldBool";
import ReadFieldStr from "../../common/ReadFieldStr";
import MyButton from "../../common/MyButton";


const PersonalDataReadOnly = () => {
    const {SelectedPatient, IsEditButtonPressed} = useAppSelector(state => state.additionalReducer)
    const dispatch = useAppDispatch()
    const navigate = useNavigate();
    console.log(JSON.stringify(SelectedPatient.personal_data))
    return (

        <div className='p-8 mb-16'>
            <h1 className='font-medium font-sans text-our-greenish-400 text-2xl pb-4'>Персональные данные режим чтения</h1>

            <div className='grid relative grid-cols-1 gap-y-3 my-4'>

                <ReadFieldStr
                    label="ФИО"
                    value={SelectedPatient.personal_data.second_name + ' ' +
                        SelectedPatient.personal_data.first_name + ' ' + SelectedPatient.personal_data.patronymic}
                />

                <ReadFieldStr
                    label="Дата рождения"
                    value={SelectedPatient.personal_data.birthday}
                />

                <ReadFieldStr
                    label="Место обследования"
                    value={SelectedPatient.personal_data.clinic}
                />


                <ReadFieldStr
                    label="Регион"
                    value={SelectedPatient.personal_data.region}
                />

                <ReadFieldBool
                    label="Пол"
                    boolValue={SelectedPatient.personal_data.sex}
                    trueOption="мужской"
                    falseOption="женский"
                />

                <ReadFieldStr
                    label="Раса"
                    value={SelectedPatient.personal_data.race}
                />

                <MyButton
                    onClick={()=>navigate(`edit`)}
                    className="w-1/5 absolute right-44 -bottom-16"
                >
                    Редактировать
                </MyButton>


            </div>



        </div>
    );
};

export default PersonalDataReadOnly;
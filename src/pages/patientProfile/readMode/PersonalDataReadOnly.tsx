import React from 'react';
import {useAppDispatch, useAppSelector} from "../../../hooks/redux";
import {changeMode} from "../../../store/reducers/PatientSlice";
import Button from "../../../components/Button";
import ReadFieldStr from "../../../components/ReadFieldStr";
import ReadFieldBool from "../../../components/ReadFieldBool";

const PersonalDataReadOnly = () => {
    const {patient} = useAppSelector(state => state.patientReducer);
    const dispatch = useAppDispatch();

    const birthday = new Date(patient.personal_data.birthday)
    return (

        <div className='p-8'>
            <h1 className='font-medium text-lg text-slate-800 pb-4'>Персональные данные</h1>

            <div className='grid grid-cols-2 gap-y-3 mb-4'>

                <ReadFieldStr
                    label="ФИО"
                    value={patient.personal_data.second_name + ' ' + patient.personal_data.first_name + ' '
                            + patient.personal_data.patronymic}
                    divClassName='col-span-2'
                    spanClassName='w-1/4'
                />

                <ReadFieldStr
                    label="Дата рождения"
                    value={birthday.toLocaleDateString()}
                    spanClassName='w-1/2'
                />

                <ReadFieldStr
                    label="Место обследования"
                    value={patient.personal_data.clinic}
                    spanClassName='w-1/2'
                />

                <ReadFieldStr
                    label="Регион"
                    value={patient.personal_data.region}
                    spanClassName='w-1/2'
                />

                <ReadFieldBool
                    label="Пол"
                    boolValue = {patient.personal_data.sex}
                    trueOption="мужской"
                    falseOption="женский"
                    spanClassName='w-1/2'
                />

            </div>

            <Button
                onClick={()=>dispatch(changeMode())}
                className="relative mt-8 bottom-2 left-3/4"
                >
                Редактировать
            </Button>

        </div>
    );
};

export default PersonalDataReadOnly;
import React from 'react';
import {useAppDispatch, useAppSelector} from "../../../hooks/redux";
import {useNavigate} from "react-router-dom";
import ReadFieldStr from "../../common/ReadFieldStr";
import ReadFieldBool from "../../common/ReadFieldBool";
import MyButton from "../../common/MyButton";


const ClinicDataReadOnly = () => {
    const {SelectedPatient, IsEditButtonPressed} = useAppSelector(state => state.additionalReducer)
    const navigate = useNavigate();

    const dispatch = useAppDispatch()
    return (

        <div className='p-8 mb-16'>
            <h1 className='font-medium font-sans  text-our-greenish-400 text-2xl pb-4'>Клинические данные режим чтения</h1>

            <div className='grid relative grid-cols-1 gap-y-3 my-4'>

                <ReadFieldStr
                    label="Основной диагноз"
                    value={SelectedPatient.clinical_data.main_diag}
                />

                <ReadFieldBool
                    labelClassName="w-1/4"
                    valueClassName="w-1/2"
                    label="Наличие расслоения аорты"
                    boolValue={SelectedPatient.clinical_data.aortic_dissection}
                />

                <ReadFieldBool
                    labelClassName="w-1/4"
                    valueClassName="w-1/2"
                    label="Наличие интрамуральной гематомы"
                    boolValue={SelectedPatient.clinical_data.intramural_hematoma}
                />

                <ReadFieldBool
                    labelClassName="w-1/4"
                    valueClassName="w-1/2"
                    label="Наличие разрыва аорты"
                    boolValue={SelectedPatient.clinical_data.aortic_rupture}
                />

                <ReadFieldStr
                    label="Состояние"
                    value={SelectedPatient.clinical_data.patient_state}
                />

                <ReadFieldBool
                    labelClassName="w-1/4"
                    valueClassName="w-1/2"
                    label="Боли за грудиной"
                    boolValue={SelectedPatient.clinical_data.pain_beh_stern}
                />

                <ReadFieldBool
                    labelClassName="w-1/4"
                    valueClassName="w-1/2"
                    label="Боли в межлопаточной области"
                    boolValue={SelectedPatient.clinical_data.interscap_reg_pain}
                />

                <ReadFieldBool
                    labelClassName="w-1/4"
                    valueClassName="w-1/2"
                    label="Потеря сознания"
                    boolValue={SelectedPatient.clinical_data.conscious_loss}
                />

                <ReadFieldBool
                    labelClassName="w-1/4"
                    valueClassName="w-1/2"
                    label="Ишемия нижних конечностей"
                    boolValue={SelectedPatient.clinical_data.low_extrem_ischemia}
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

export default  ClinicDataReadOnly;
import React from 'react';

import validatorConfig from './validatorConfig';
import {useAppSelector} from "../../../../hooks/redux";
import {Form, useForm} from "../../../../hooks/useForm";
import {patientAPI} from "../../../../services/PatientService";
import {IPatientUpdate} from "../../../../models/IPatientUpdate";
import {useAppDispatch} from "../../../../store/store";
import {DatePickerField, InputField, RadioGroup, SelectField} from "../../../common/Fields";
import Button from "../../../common/Button";
import {useNavigate, useParams} from "react-router-dom";
import {yesNo} from "../../../../DataLists/yesNo";
import {PatientStateData} from "../../../../DataLists/PatientStateData";
import {additionalSlice} from "../../../../store/reducers/AdditionalSlice";


const ClinicDataEdit = () => {

    const {user} = useAppSelector(state => state.userReducer)
    const {SelectedPatient, IsEditButtonPressed} = useAppSelector(state => state.additionalReducer)
    const navigate = useNavigate();
    const params = useParams<string>()
    const dispatch = useAppDispatch()
    let response: any



    const initialClinicData: any = {
        main_diag: SelectedPatient.clinical_data.main_diag, // основной диагноз
        aortic_dissection: SelectedPatient.clinical_data.aortic_dissection, // наличие расслоения аорты
        intramural_hematoma: SelectedPatient.clinical_data.intramural_hematoma, // наличие интрамуральной гематомы
        aortic_rupture: SelectedPatient.clinical_data.aortic_rupture, // наличие разрыва аорты
        patient_state: SelectedPatient.clinical_data.patient_state, // стабильное/нестабильное состояние
        pain_beh_stern: SelectedPatient.clinical_data.pain_beh_stern, // боли за грудиной
        interscap_reg_pain: SelectedPatient.clinical_data.interscap_reg_pain, // боли в межлопаточной области
        conscious_loss: SelectedPatient.clinical_data.conscious_loss, // потеря сознания
        low_extrem_ischemia: SelectedPatient.clinical_data.low_extrem_ischemia, // ишемия нижних конечностей
    }
    const {data, errors, handleInputChange, handleKeyDown, validate} = useForm(initialClinicData, true, validatorConfig);
    const [updatePatient, {}] = patientAPI.useUpdatePatientMutation();// {}-функция, которую мы можем вызвать, чтобы произошла мутация, createPost - объект с полями

    const handleUpdate = async (e: React.FormEvent<HTMLButtonElement>) => {
        e.preventDefault();
        if (validate(data))
        {
            const UpdatePatientData: IPatientUpdate = {
                patientID: SelectedPatient.patientID,
                employee_id: user!.id,
                clinical_data: {
                    main_diag: data.main_diag, // основной диагноз
                    aortic_dissection: data.aortic_dissection, // наличие расслоения аорты
                    intramural_hematoma: data.intramural_hematoma, // наличие интрамуральной гематомы
                    aortic_rupture: data.aortic_rupture, // наличие разрыва аорты
                    patient_state: data.patient_state, // стабильное/нестабильное состояние
                    pain_beh_stern: data.pain_beh_stern, // боли за грудиной
                    interscap_reg_pain: data.interscap_reg_pain, // боли в межлопаточной области
                    conscious_loss: data.conscious_loss, // потеря сознания
                    low_extrem_ischemia: data.low_extrem_ischemia, // ишемия нижних конечностей
                }
            }
            response =await updatePatient(UpdatePatientData)
            if (response.data != undefined) {
                dispatch(additionalSlice.actions.ChangeSelectedPatient(response.data))
            }
            navigate(`/auth/menu/patients/${SelectedPatient.patientID}/clinic-data`)

        }
    }
    return (
        <div className='p-8 mb-16'>
            <h1 className='font-medium font-sans  text-our-greenish-400 text-2xl pb-4'>Клинические данные режим редактирования</h1>

            <div className='grid relative grid-cols-1 gap-y-3 my-4'>
        <Form data={data} errors={errors} handleChange={handleInputChange} handleKeyDown={handleKeyDown}>
            <InputField autoFocus name='main_diag' label='Основной диагноз'/>
            <RadioGroup name='aortic_dissection' label='Наличие расслоения аортый' items={yesNo}/>
            <RadioGroup name='intramural_hematoma' label='Наличие интрамуральной гематомы' items={yesNo}/>
            <RadioGroup name='aortic_rupture' label='Наличие разрыва аорты' items={yesNo}/>
            <SelectField label='patient_state' name='Состояние' options={PatientStateData}  />
            <RadioGroup name='pain_beh_stern' label='Боли за грудиной' items={yesNo}/>
            <RadioGroup name='interscap_reg_pain' label='Боли в межлопаточной области' items={yesNo}/>
            <RadioGroup name='conscious_loss' label='Потеря сознания' items={yesNo}/>
            <RadioGroup name='low_extrem_ischemia' label='Ишемия нижних конечностей' items={yesNo}/>
            <Button type='submit' onClick={handleUpdate} className="w-1/5 absolute right-44 -bottom-20" disabled={Object.keys(errors).length !== 0}>
                Сохранить
            </Button>
        </Form>
            </div>

        </div>
    );
};

export default ClinicDataEdit;
import React from 'react';

import validatorConfig from './validatorConfig';
import {TextField, TextFieldProps} from "@mui/material";
import {useAppSelector} from "../../../../hooks/redux";
import {additionalSlice} from "../../../../store/reducers/AdditionalSlice";
import {ResidenseRegions} from "../../../../DataLists/ResidenseRegions";
import {Regions} from "../../../../DataLists/Regions";
import {Form, useForm} from "../../../../hooks/useForm";
import {genderItems} from "../../../../DataLists/genderItems";
import {patientAPI} from "../../../../services/PatientService";
import {Race} from "../../../../DataLists/Race";
import {IPatientUpdate} from "../../../../models/IPatientUpdate";
import {useAppDispatch} from "../../../../store/store";
import {DatePickerField, InputField, RadioGroup, SelectField} from "../../../common/Fields";
import Button from "../../../common/Button";
import {useNavigate, useParams} from "react-router-dom";
import {yesNo} from "../../../../DataLists/yesNo";


const ClinicDataEdit = () => {

    const {user} = useAppSelector(state => state.userReducer)
    const {SelectedPatient, IsEditButtonPressed} = useAppSelector(state => state.additionalReducer)
    const navigate = useNavigate();
    const params = useParams<string>()
    const dispatch = useAppDispatch()


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
            await updatePatient(UpdatePatientData)
            navigate(`/auth/menu/patients/${SelectedPatient.patientID}/clinic-data`)

        }
    }
    return (
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
            <Button type='submit' onClick={handleUpdate} fullWidth disabled={Object.keys(errors).length !== 0}>
                Сохранить
            </Button>
        </Form>
    );
};

export default ClinicDataEdit;
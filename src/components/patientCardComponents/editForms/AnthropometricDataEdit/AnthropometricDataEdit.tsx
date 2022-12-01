import React from 'react';

import validatorConfig from './validatorConfig';
import {TextField, TextFieldProps} from "@mui/material";
import {useAppSelector} from "../../../../hooks/redux";

import {Form, useForm} from "../../../../hooks/useForm";
import {patientAPI} from "../../../../services/PatientService";
import {IPatientUpdate} from "../../../../models/IPatientUpdate";
import {useAppDispatch} from "../../../../store/store";
import {DatePickerField, InputField, RadioGroup, SelectField} from "../../../common/Fields";
import Button from "../../../common/Button";
import {useNavigate, useParams} from "react-router-dom";
import {yesNo} from "../../../../DataLists/yesNo";
import {Regions} from "../../../../DataLists/Regions";




const AnthropometricDataEdit = () => {
    const {user} = useAppSelector(state => state.userReducer)
    const {SelectedPatient, IsEditButtonPressed} = useAppSelector(state => state.additionalReducer)
    const navigate = useNavigate();
    const params = useParams<string>()
    const dispatch = useAppDispatch()


    const initialAnthropometricData: any = {
        height: SelectedPatient.anthropometric_data.height, // рост
        weight: SelectedPatient.anthropometric_data.weight, // вес
        body_mass_index: SelectedPatient.anthropometric_data.body_mass_index, // индекс массы тела
        body_surface_area: SelectedPatient.anthropometric_data.body_surface_area, //площадь поверхности тела
        body_type: SelectedPatient.anthropometric_data.body_type, // тип тела // выбрать из списка
        connective_tissue_dysplasia: SelectedPatient.anthropometric_data.connective_tissue_dysplasia, // дисплазия соединительных тканей
        connective_tissue_dysplasia_Marfan: SelectedPatient.anthropometric_data.connective_tissue_dysplasia_Marfan, // синдром Марфана
        connective_tissue_dysplasia_EhlersDanlos: SelectedPatient.anthropometric_data.connective_tissue_dysplasia_EhlersDanlos, // синдром Элерса-Данло
        connective_tissue_dysplasia_LoeysDitz: SelectedPatient.anthropometric_data.connective_tissue_dysplasia_LoeysDitz, // синдром Лойеса-Дитц
        connective_tissue_dysplasia_Terner: SelectedPatient.anthropometric_data.connective_tissue_dysplasia_Terner, // синдром Тернера
        connective_tissue_dysplasia_Noonan: SelectedPatient.anthropometric_data.connective_tissue_dysplasia_Noonan, // синдром Нуана
    }
    const {data, errors, handleInputChange, handleKeyDown, validate} = useForm(initialAnthropometricData, true, validatorConfig);
    const [updatePatient, {}] = patientAPI.useUpdatePatientMutation();// {}-функция, которую мы можем вызвать, чтобы произошла мутация, createPost - объект с полями

    const handleUpdate = async (e: React.FormEvent<HTMLButtonElement>) => {
        e.preventDefault();
        if (validate(data))
        {
            const UpdatePatientData: IPatientUpdate = {
                patientID: SelectedPatient.patientID,
                employee_id: user!.id,
                anthropometric_data: {
                    height: data.height, // рост
                    weight: data.weight, // вес
                    body_mass_index: data.body_mass_index, // индекс массы тела
                    body_surface_area: data.body_surface_area, //площадь поверхности тела
                    body_type: data.body_type, // тип тела // выбрать из списка
                    connective_tissue_dysplasia: data.connective_tissue_dysplasia, // дисплазия соединительных тканей
                    connective_tissue_dysplasia_Marfan: data.connective_tissue_dysplasia_Marfan, // синдром Марфана
                    connective_tissue_dysplasia_EhlersDanlos: data.connective_tissue_dysplasia_EhlersDanlos, // синдром Элерса-Данло
                    connective_tissue_dysplasia_LoeysDitz: data.connective_tissue_dysplasia_LoeysDitz, // синдром Лойеса-Дитц
                    connective_tissue_dysplasia_Terner: data.connective_tissue_dysplasia_Terner, // синдром Тернера
                    connective_tissue_dysplasia_Noonan: data.connective_tissue_dysplasia_Noonan, // синдром Нуана
                }
            }
            await updatePatient(UpdatePatientData)
            navigate(`/auth/menu/patients/${SelectedPatient.patientID}/anthropometric-data`)

        }
    }
    return (
        <Form data={data} errors={errors} handleChange={handleInputChange} handleKeyDown={handleKeyDown}>
            <InputField autoFocus name='height' label='Рост'/>
            <InputField autoFocus name='weight' label='Вес'/>
            <InputField autoFocus name='body_mass_index' label='Индекс массы тела'/>
            <InputField autoFocus name='body_surface_area' label='Площадь поверхности тела'/>
            <InputField autoFocus name='body_surface_area' label='Площадь поверхности тела'/>
            <SelectField label='Тип тела' name='body_type' options={BodyTypeData}  />
            <RadioGroup name='connective_tissue_dysplasia' label='Дисплазия соединительных тканей' items={yesNo}/>
            <RadioGroup name='connective_tissue_dysplasia_Marfan' label='Синдром Марфана' items={yesNo}/>
            <RadioGroup name='connective_tissue_dysplasia_EhlersDanlos' label='Синдром Элерса-Данло' items={yesNo}/>
            <RadioGroup name='connective_tissue_dysplasia_LoeysDitz' label='Синдром Лойеса-Дитц' items={yesNo}/>
            <RadioGroup name='connective_tissue_dysplasia_Terner' label='Синдром Тернера' items={yesNo}/>
            <RadioGroup name='connective_tissue_dysplasia_Noonan' label='Синдром Нуана' items={yesNo}/>
            <Button type='submit' onClick={handleUpdate} fullWidth disabled={Object.keys(errors).length !== 0}>
                Сохранить
            </Button>
        </Form>
    );
};

export default AnthropometricDataEdit;
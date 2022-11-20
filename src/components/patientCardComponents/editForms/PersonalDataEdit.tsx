import React from 'react';
import {useAppDispatch, useAppSelector} from "../../../hooks/redux";

import {additionalSlice} from "../../../store/reducers/AdditionalSlice";
import {IPatientUpdate} from "../../../models/IPatientUpdate";

import validatorConfig from './validatorConfig';
import {Form, useForm} from "../../../hooks/useForm";
import {patientAPI} from "../../../services/PatientService";
import Button from "../../common/Button";
import {DatePickerField, InputField, RadioGroup, SelectField} from "../../common/Fields";
import {genderItems} from "../../../DataLists/genderItems";
import {TextField, TextFieldProps} from "@mui/material";
import {Regions} from "../../../DataLists/Regions";

import {ResidenseRegions} from "../../../DataLists/ResidenseRegions";
import {Race} from "../../../DataLists/Race";

const {user} = useAppSelector(state => state.userReducer)

const {SelectedPatient, IsEditButtonPressed} = useAppSelector(state => state.additionalReducer)


const PersonalDataEdit = () => {
    const dispatch = useAppDispatch()


    const initialPersonalData: IPatientUpdate = {
        id: SelectedPatient.patient_id,
        employee_id: user?.id || -1,

        personal_data: {
            first_name: SelectedPatient.personal_data.first_name,
            second_name: SelectedPatient.personal_data.second_name,
            patronymic: SelectedPatient.personal_data.patronymic,
            birthday: SelectedPatient.personal_data.birthday,
            sex: SelectedPatient.personal_data.sex,
            region: SelectedPatient.personal_data.region,
            clinic: SelectedPatient.personal_data.clinic,
            race: SelectedPatient.personal_data.race,
        }
    }
    const {data, errors, handleInputChange, handleKeyDown, validate} = useForm(initialPersonalData, true, validatorConfig);
    const [updatePatient, {}] = patientAPI.useUpdatePatientMutation();// {}-функция, которую мы можем вызвать, чтобы произошла мутация, createPost - объект с полями

    const handleUpdate = async (e: React.FormEvent<HTMLButtonElement>) => {
        e.preventDefault();
        if (validate(data))
        {
            dispatch(additionalSlice.actions.ChangeIsEditButtonPressed(false))
            await updatePatient(data)
        }
    }
    return (
        <>
            <Form data={data} errors={errors} handleChange={handleInputChange} handleKeyDown={handleKeyDown}>
                <InputField autoFocus name='first_name' label='Имя'/>
                <InputField name='second_name' label='Фамилия'/>
                <InputField name='patronymic' label='Отчество'/>
\               <RadioGroup name='sex' items={genderItems}/>

                <DatePickerField
                    value={data.personal_data?.birthday || 0}
                    onChange={handleInputChange}
                    openTo='year'
                    mask='__.__.____'
                    label='Дата Рождения'
                    name='birthdate'
                    minDate={new Date('1900-01-01')}
                    renderInput={(params: JSX.IntrinsicAttributes & TextFieldProps) => (
                        <TextField {...params} {...(errors?.birthYear && { error: true, helperText: errors?.birthYear })} />
                    )}
                />
                <SelectField label='Регион' name='region' options={Regions}  />
                <SelectField label='Раса' name='race' options={Race}  />
                <SelectField label='Город' name='clinic' options={ResidenseRegions}  />

                <Button type='submit' onClick={handleUpdate} fullWidth disabled={Object.keys(errors).length !== 0}>
                    Сохранить
                </Button>
        </Form>
        </>
    );
};

export default PersonalDataEdit;
import {TextField, TextFieldProps} from '@mui/material';
import React from 'react';
import {DatePickerField, InputField, RadioGroup, SelectField} from '../../common/Fields';
import validatorConfig from './validatorConfig';
import {Form, useForm} from "../../../hooks/useForm";
import {IPatientCreate} from "../../../models/IPatientCreate";

import {patientAPI} from "../../../services/PatientService";
import Button from "../../common/Button";
import {useAppSelector} from "../../../hooks/redux";
import {ResidenseRegions} from "../../../DataLists/ResidenseRegions";
import {Regions} from "../../../DataLists/Regions";
import {genderItems} from "../../../DataLists/genderItems";
import {Race} from "../../../DataLists/Race";
import {Cities} from "../../../DataLists/Cities";
import {Clinics} from "../../../DataLists/Clinics";



const CreatePatientForm = () => {
    const {user} = useAppSelector(state => state.userReducer)
    let NewPatient: IPatientCreate

    const initialData: IPatientCreate = {
        first_name: '',
        second_name: '',
        patronymic: '',
        birthday: Date.now(),
        sex: true,
        race: 'evr',
        clinic: user!.placeOfWork,
        residenseregion: user!.region,
    }
  const {data, errors, handleInputChange, handleKeyDown, validate} = useForm(initialData, true, validatorConfig);

  const [createPatient, {}] = patientAPI.useCreatePatientMutation();// {}-функция, которую мы можем вызвать, чтобы произошла мутация, createPost - объект с полями

    const handleCreate = async (e: React.FormEvent<HTMLButtonElement>) => {
        e.preventDefault();
        if (validate(data))
        {
            await createPatient(data)
        }
    }

  return (
      <>

        <Form data={data} errors={errors} handleChange={handleInputChange} handleKeyDown={handleKeyDown}>
          <InputField autoFocus name='first_name' label='Имя'/>
          <InputField name='second_name' label='Фамилия'/>
            <InputField name='patronymic' label='Отчество'/>
          <RadioGroup name='sex' items={genderItems}/>
            <SelectField label='Раса' name='race' options={Race}  />

            <DatePickerField
              value={data.birthday}
              onChange={handleInputChange}
              openTo='year'
              mask='__.__.____'
              label='Дата Рождения'
              name='birthday'
              minDate={new Date('1900-01-01')}
              renderInput={(params: JSX.IntrinsicAttributes & TextFieldProps) => (
            <TextField {...params} {...(errors?.birthYear && { error: true, helperText: errors?.birthYear })} />
          )}
        />
            <SelectField label='Клиника' name='clinic' options={Clinics}  />
            <SelectField label='Регион обследования' name='residenseregion' options={ResidenseRegions}  />

            <Button type='submit' onClick={handleCreate} fullWidth disabled={Object.keys(errors).length !== 0}>
          Создать
        </Button>
      </Form>
    </>
  );
};

export default CreatePatientForm;

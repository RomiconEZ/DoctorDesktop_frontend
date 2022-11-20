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



const CreatePatientForm = () => {
    const {user} = useAppSelector(state => state.userReducer)


    const initialData: IPatientCreate = {

        name: '',
        surname: '',
        patronymic: '',
        birthdate: Date.now(),
        sex: true,
        race: 'evr',
        region: user?.region || 'Северо-западный регион',
        city: user?.city || 'Санкт-Петербург',
        residenseregion: user?.region || 'Северо-западный регион',
    }
  const {data, errors, handleInputChange, handleKeyDown, validate} = useForm(initialData, true, validatorConfig);

  const [createPatient, {}] = patientAPI.useCreatePatientMutation();// {}-функция, которую мы можем вызвать, чтобы произошла мутация, createPost - объект с полями

    const handleCreate = async (e: React.FormEvent<HTMLButtonElement>) => {
        e.preventDefault();
        if (validate(data)) {await createPatient(data)}
    }

  return (
      <>

        <Form data={data} errors={errors} handleChange={handleInputChange} handleKeyDown={handleKeyDown}>
          <InputField autoFocus name='name' label='Имя'/>
          <InputField name='surname' label='Фамилия'/>
            <InputField name='patronymic' label='Отчество'/>
          <RadioGroup name='sex' items={genderItems}/>

            <DatePickerField
              value={data.birthdate}
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
            <SelectField label='Город' name='city' options={Cities}  />
            <SelectField label='Регион обследования' name='residenseregion' options={ResidenseRegions}  />

            <Button type='submit' onClick={handleCreate} fullWidth disabled={Object.keys(errors).length !== 0}>
          Создать
        </Button>
      </Form>
    </>
  );
};

export default CreatePatientForm;

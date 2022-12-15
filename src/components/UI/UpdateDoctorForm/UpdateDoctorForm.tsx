import {TextField, TextFieldProps} from '@mui/material';
import React from 'react';
import {DatePickerField, InputField, RadioGroup, SelectField} from '../../common/Fields';
import validatorConfig from './validatorConfig';
import {Form, useForm} from "../../../hooks/useForm";
import Button from "../../common/Button";
import {doctorAPI} from "../../../services/DoctorService";
import {IDoctorFull} from "../../../models/IDoctorFull";

import {genderItems} from "../../../DataLists/genderItems";
import {Regions} from "../../../DataLists/Regions";
import {PlacesOfWork} from "../../../DataLists/PlacesOfWork";
import {Occupations} from "../../../DataLists/Occupations";
import {Roles} from "../../../DataLists/Roles";
import {useAppDispatch, useAppSelector} from "../../../hooks/redux";
import {Cities} from "../../../DataLists/Cities";
import {additionalSlice} from "../../../store/reducers/AdditionalSlice";
import {useNavigate} from "react-router-dom";


const UpdateDoctorForm = () => {
    const {SelectedDoctor: doctor} = useAppSelector(state => state.additionalReducer)
    let response: any
    const dispatch = useAppDispatch()
    const navigate = useNavigate();

    // console.log((new Date(doctor!.birthdate)).getTime())
    // console.log(doctor!.birthdate)

    const initialData: IDoctorFull = {
        id: doctor!.id,
        name: doctor!.name,
        surname: doctor!.surname,
        patronymic: doctor!.patronymic,
        birthdate: (new Date(doctor!.birthdate)).getTime(),
        workExperience: doctor!.workExperience,
        sex: doctor!.sex,
        region: doctor!.region,
        city: doctor!.city,
        placeOfWork: doctor!.placeOfWork,
        occupation: doctor!.occupation,
        email: doctor!.email,
        role: doctor!.role,
    }

  const {data, errors, handleInputChange, handleKeyDown, validate} = useForm(initialData, true, validatorConfig);

  const [updateDoctor, {}] = doctorAPI.useUpdateDoctorMutation();// {}-функция, которую мы можем вызвать, чтобы произошла мутация, createPost - объект с полями

    const handleUpdate = async (e: React.FormEvent<HTMLButtonElement>) => {
        e.preventDefault();
        if (validate(data)) {
            response = await updateDoctor(data)
            if (response != undefined) {
                dispatch(additionalSlice.actions.ChangeSelectedDoctor(response.data))
                navigate(`/auth/menu/doctors/${doctor.id}`)
            }

        }
    }


    return (
      <>

        <Form data={data} errors={errors} handleChange={handleInputChange} handleKeyDown={handleKeyDown}>
          <InputField autoFocus name='name' label='Имя'/>
          <InputField name='surname' label='Фамилия'/>
            <InputField name='patronymic' label='Отчество'/>
            <InputField name='workExperience' label='Опыт работы'/>
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
            <SelectField label='Город' name='city' options={Cities}  />


            <SelectField label='Место работы' name='placeOfWork' options={PlacesOfWork}  />
            <SelectField label='Профиль' name='occupation' options={Occupations}  />
            <SelectField label='Роль' name='role' options={Roles}  />

            <InputField name='email' label='Почта' />

            <Button type='submit' onClick={handleUpdate} fullWidth disabled={Object.keys(errors).length !== 0}>
          Обновить
        </Button>
      </Form>
    </>
  );
};

export default UpdateDoctorForm;

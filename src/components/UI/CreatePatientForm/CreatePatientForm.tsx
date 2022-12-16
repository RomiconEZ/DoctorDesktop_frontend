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
import {genderItems} from "../../../DataLists/genderItems";
import {Race} from "../../../DataLists/Race";
import {Clinics} from "../../../DataLists/Clinics";
import {NavLink} from "react-router-dom";
import useBreadcrumbs from "use-react-router-breadcrumbs";
import {routes} from "../../common/BreadCrumb";



const CreatePatientForm = () => {
    const {user} = useAppSelector(state => state.userReducer)
    const breadcrumbs = useBreadcrumbs(routes);

    let NewPatient: IPatientCreate

    const initialData: IPatientCreate = {
        first_name: '',
        second_name: '',
        patronymic: '',
        birthday: Date.now(),
        sex: 1,
        race: '',
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
          <div className='p-8 flex justify-center'>
          <div className='w-3/5 pb-20 pt-5 pl-10 rounded-md bg-white h-auto'>
              <>
                  {breadcrumbs.map(({ match, breadcrumb }) => (
                      <NavLink key={match.pathname} to={match.pathname} className="text-our-greenish-300 text-xs mr-1">
                          /{breadcrumb}
                      </NavLink>
                  ))}
              </>
              <h1 className='font-medium font-sans text-our-greenish-400 text-2xl pb-4'>Создание пациента</h1>
              <div className='grid relative grid-cols-1 gap-y-3 my-4'>
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

            <Button type='submit' onClick={handleCreate} className="w-1/5 absolute right-45 -bottom-10" disabled={Object.keys(errors).length !== 0}>
          Создать
        </Button>
      </Form>
              </div>

          </div>
          </div>
    </>
  );
};

export default CreatePatientForm;

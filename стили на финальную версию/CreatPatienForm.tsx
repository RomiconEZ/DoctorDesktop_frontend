import {TextField, TextFieldProps, Grid} from '@mui/material';
import React from 'react';
import {DatePickerField, InputField, RadioGroup, SelectField} from '../../common/Fields';
import validatorConfig from './validatorConfig';
import {Form} from "../../../hooks/useForm";
import {useForm} from "react-hook-form";
import {IPatientCreate} from "../../../models/IPatientCreate";

import {patientAPI} from "../../../services/PatientService";
import Button from "../../common/Button";
import {useAppSelector} from "../../../hooks/redux";
import {ResidenseRegions} from "../../../DataLists/ResidenseRegions";
import {Regions} from "../../../DataLists/Regions";
import {genderItems} from "../../../DataLists/genderItems";
import {Race} from "../../../DataLists/Race";
import {Cities} from "../../../DataLists/Cities";
import EditFieldStr from "../../common/EditFieldStr";
import {register} from "../DWV/serviceWorkerRegistration";
import EditFieldRadio from "../../common/EditFieldRadio";
import MyButton from "../../common/MyButton";



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
    const {
        register,
        formState:{
            errors
        },
        handleSubmit

    } = useForm()

  //const {data, errors, handleInputChange, handleKeyDown, validate} = useForm(initialData, true, validatorConfig);

  // const [createPatient, {}] = patientAPI.useCreatePatientMutation();// {}-функция, которую мы можем вызвать, чтобы произошла мутация, createPost - объект с полями
  //
  //   const handleCreate = async (e: React.FormEvent<HTMLButtonElement>) => {
  //       e.preventDefault();
  //       if (validate(data)) {await createPatient(data)}
  //   }

    const onSubmit = async (data: any) => {

    }


  return (
      <>
          <form onSubmit={handleSubmit(onSubmit)}>
              <div className='p-8  flex justify-center'>
                  <div className=' w-3/5 pb-8 mt-5 pt-5 pl-10 rounded-md bg-white h-auto overflow-scroll'>
              <div className='grid relative grid-cols-1 gap-y-3 my-4'>
                  <EditFieldStr
                      label="Имя"
                      defaultValue={initialData.name}
                      register={register("name")}
                      id="name"
                  />

                  <EditFieldStr
                      label="Фамилия"
                      defaultValue={initialData.surname}
                      register={register("surname")}
                      id="surname"
                  />

                  <EditFieldStr
                      label="Отчество"
                      defaultValue={initialData.patronymic}
                      register={register("patronymic")}
                      id="patronymic"
                  />
                  <div className="flex flex-row">
                      <span className="w-1/4 mr-6 font-semibold text-slate-800">Пол</span>

                      <EditFieldRadio
                          register={register("sex")}
                          defaultValue={Boolean(genderItems)}
                          value={1}
                          label="Мужской"
                          id="male"
                          divClassName="w-1/4"
                      />

                      <EditFieldRadio
                          register={register("sex")}
                          defaultValue={!Boolean(genderItems)}
                          value={0}
                          label="Женский"
                          id="female"
                          divClassName="w-1/4"
                      />
                  </div>

              {/*    <EditFieldStr*/}
              {/*    label="Дата рождения"*/}
              {/*    defaultValue={initialData.birthdate}*/}
              {/*    register={register("birthdate")}*/}
              {/*    id="birthdate"*/}
              {/*/>*/}
                  <EditFieldStr
                      label="Раса"
                      defaultValue={initialData.race}
                      register={register("race")}
                      id="race"
                  />
                  <EditFieldStr
                      label="Регион"
                      defaultValue={initialData.region}
                      register={register("region")}
                      id="region"
                  />

                  <EditFieldStr
                      label="Город"
                      defaultValue={initialData.city}
                      register={register("city")}
                      id="city"
                  />
                  <EditFieldStr
                      label="Регион обследования"
                      defaultValue={initialData.residenseregion}
                      register={register("residenseregion")}
                      id="residenseregion"
                  />
                  <MyButton
                      onClick={handleSubmit(onSubmit)}
                      className="w-1/5 absolute right-44 -bottom-16"
                  >
                      Сохранить
                  </MyButton>
              </div>
                  </div>
              </div>
          </form>

      {/*  <Form data={data} errors={errors} handleChange={handleInputChange} handleKeyDown={handleKeyDown} >*/}
      {/*    <Grid container direction="column"*/}
      {/*           justifyContent="space-evenly"*/}
      {/*           alignItems="center"*/}
      {/*           >*/}
      {/*        <InputField autoFocus name='name' label='Имя'/>*/}
      {/*        <InputField name='surname' label='Фамилия' />*/}
      {/*        <InputField name='patronymic' label='Отчество' />*/}
      {/*        <RadioGroup name='sex' items={genderItems} />*/}

      {/*        <DatePickerField*/}
      {/*            value={data.birthdate}*/}
      {/*            onChange={handleInputChange}*/}
      {/*            openTo='year'*/}
      {/*            mask='__.__.____'*/}
      {/*            label='Дата Рождения'*/}
      {/*            name='birthdate'*/}
      {/*            minDate={new Date('1900-01-01')}*/}
      {/*            renderInput={(params: JSX.IntrinsicAttributes & TextFieldProps) => (*/}
      {/*                <TextField {...params} {...(errors?.birthYear && { error: true, helperText: errors?.birthYear })} defaultValue="small" />*/}
      {/*            )}*/}
      {/*        />*/}
      {/*        <SelectField label='Регион' name='region' options={Regions} style={{ margin:5,paddingRight: 210}} />*/}
      {/*        <SelectField label='Раса' name='race' options={Race} style={{ margin:5, paddingRight: 210}}/>*/}
      {/*        <SelectField label='Город' name='city' options={Cities} style={{ margin:5, paddingRight: 210}}/>*/}
      {/*        <SelectField label='Регион обследования' name='residenseregion' options={ResidenseRegions} style={{ margin:5, paddingRight: 210}}/>*/}

      {/*        <button className="pl-16 pr-16 pt-3 pb-3 rounded-lg border-our-greenish-400 bg-our-greenish-400 text-white border-2 font-medium hover:text-white hover:bg-our-greenish-500 hover:border-our-greenish-500" type='submit' onClick={handleCreate} disabled={Object.keys(errors).length !== 0}>*/}
      {/*            Создать*/}
      {/*        </button>*/}
      {/*    </Grid>*/}


      {/*</Form>*/}
    </>
  );
};

export default CreatePatientForm;

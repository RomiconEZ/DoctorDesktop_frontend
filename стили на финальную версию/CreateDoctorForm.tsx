import {TextField, TextFieldProps, Grid} from '@mui/material';
import React, {useMemo} from 'react';
import {DatePickerField, InputField, RadioGroup, SelectField} from '../../common/Fields';
import validatorConfig from './validatorConfig';
import {Form} from "../../../hooks/useForm";
import {useForm} from "react-hook-form";
import withPassword from '../../common/Fields/HOC/withPassword';
import Button from "../../common/Button";
import {useAppSelector} from "../../../hooks/redux";
import {IDoctorCreate} from "../../../models/IDoctorCreate";
import {doctorAPI} from "../../../services/DoctorService";
import { Roles } from '../../../DataLists/Roles';
import {PlacesOfWork} from "../../../DataLists/PlacesOfWork";
import {Occupations} from "../../../DataLists/Occupations";
import {Regions} from "../../../DataLists/Regions";
import {Cities} from "../../../DataLists/Cities";
import {genderItems} from "../../../DataLists/genderItems";
import EditFieldStr from "../../common/EditFieldStr";
import EditFieldRadio from "../../common/EditFieldRadio";
import MyButton from "../../common/MyButton";



const CreateDoctorForm = () => {
    const user = useAppSelector(state => state.userReducer.user)
    const initialData: IDoctorCreate = {
        name: "",
        surname: "",
        patronymic: "",
        birthdate: user!.birthdate,
        workExperience: 0,
        sex: true,
        region: user!.region,
        city: user!.city,
        placeOfWork: user!.placeOfWork,
        occupation: user!.occupation,
        email: "",
        password: "",
        role: -1
    }
    // const {data, errors, handleInputChange, handleKeyDown, validate} = useForm(initialData, true, validatorConfig);
    // const [createDoctor, {}] = doctorAPI.useCreateDoctorMutation();// {}-функция, которую мы можем вызвать, чтобы произошла мутация, createPost - объект с полями
    // const handleCreate = async (e: React.FormEvent<HTMLButtonElement>) => {
    //     e.preventDefault();
    //     if (validate(data)) {
    //         await createDoctor(data)
    //     }
    // }

    const {
        register,
        formState:{
            errors
        },
        handleSubmit

    } = useForm()

    const onSubmit = async (data: any) => {

    }
    const InputFieldWithPassword = useMemo(() => withPassword(InputField), []);

        return (
            <>
                <form onSubmit={handleSubmit(onSubmit)}>
                    <div  className='p-8  flex justify-center'>
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
                            {/*<EditFieldStr*/}
                            {/*    label="Почта"*/}
                            {/*    defaultValue={initialData.workExperience}*/}
                            {/*    register={register("workExperience")}*/}
                            {/*    id="workExperience"*/}
                            {/*/>*/}
                            <EditFieldStr
                                label="Почта"
                                defaultValue={initialData.email}
                                register={register("email")}
                                id="email"
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

                            {/*<EditFieldStr*/}
                            {/*    label="Дата рождения"*/}
                            {/*    defaultValue={initialData.birthdate}*/}
                            {/*    register={register("birthdate")}*/}
                            {/*    id="surname"*/}
                            {/*/>*/}
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
                                label="Место работы"
                                defaultValue={initialData.placeOfWork}
                                register={register("placeOfWork")}
                                id="placeOfWork"
                            />
                            <EditFieldStr
                                label="Профиль"
                                defaultValue={initialData.occupation}
                                register={register("occupation")}
                                id="occupation"
                            />
                            {/*<EditFieldStr*/}
                            {/*    label="Роль"*/}
                            {/*    defaultValue={initialData.role}*/}
                            {/*    register={register("role")}*/}
                            {/*    id="role"*/}
                            {/*/>*/}
                            <EditFieldStr
                                label="Пароль"
                                defaultValue={initialData.password}
                                register={register("password")}
                                id="password"
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

                {/*<Form data={data} errors={errors} handleChange={handleInputChange} handleKeyDown={handleKeyDown}>*/}
                {/*    <Grid container direction="column"  justifyContent="space-evenly" alignItems="center">*/}
                {/*            <InputField autoFocus name='name' label='Имя'/>*/}
                {/*            <InputField name="surname" label='Фамилия'/>*/}
                {/*            <InputField name="patronymic" label='Отчество'/>*/}
                {/*            <InputField name="workExperience" label='Опыт работы'/>*/}
                {/*            <InputField name='email' label='Почта'/>*/}
                {/*            <RadioGroup name="sex" items={genderItems} />*/}

                {/*            <DatePickerField*/}
                {/*                value={data.birthdate}*/}
                {/*                onChange={handleInputChange}*/}
                {/*                openTo='year'*/}
                {/*                mask='__.__.____'*/}
                {/*                label='Дата Рождения'*/}
                {/*                name='birthdate'*/}
                {/*                minDate={new Date('1900-01-01')}*/}
                {/*                renderInput={(params: JSX.IntrinsicAttributes & TextFieldProps) => (*/}
                {/*                    <TextField {...params} {...(errors?.birthYear && {*/}
                {/*                        error: true,*/}
                {/*                        helperText: errors?.birthYear*/}
                {/*                    })} defaultValue="small"/>*/}
                {/*                )}*/}
                {/*            />*/}
                {/*            <SelectField label='Регион' name='region' options={Regions} style={{ margin:5,paddingRight: 210}}/>*/}
                {/*            <SelectField label='Город' name='city' options={Cities} style={{ margin:5,paddingRight: 210}}/>*/}
                {/*            <SelectField label='Место работы' name='placeOfWork' options={PlacesOfWork} style={{ margin:5,paddingRight: 210}}/>*/}
                {/*            <SelectField label='Профиль' name='occupation' options={Occupations} style={{ margin:5,paddingRight: 210}}/>*/}
                {/*            <SelectField label='Роль' name='role' options={Roles} style={{ margin:5,paddingRight: 210}}/>*/}
                {/*            <InputFieldWithPassword name='password' label='Пароль' type='password'/>*/}
                {/*            <button className="pl-16 pr-16 pt-3 pb-3 rounded-lg border-our-greenish-400 bg-our-greenish-400 text-white border-2 font-medium hover:text-white hover:bg-our-greenish-500 hover:border-our-greenish-500" type='submit' onClick={handleCreate}*/}
                {/*                    disabled={Object.keys(errors).length !== 0}>*/}
                {/*                Создать*/}
                {/*            </button>*/}
                {/*</Grid>*/}
                {/*</Form>*/}
            </>
        );
};

export default CreateDoctorForm;

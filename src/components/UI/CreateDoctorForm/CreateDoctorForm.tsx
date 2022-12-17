import {TextField, TextFieldProps} from '@mui/material';
import React, {useMemo} from 'react';
import {DatePickerField, InputField, RadioGroup, SelectField} from '../../common/Fields';
import validatorConfig from './validatorConfig';
import {Form, useForm} from "../../../hooks/useForm";
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
import {NavLink, useNavigate} from "react-router-dom";
import useBreadcrumbs from "use-react-router-breadcrumbs";
import {routes} from "../../common/BreadCrumb";



const CreateDoctorForm = () => {
    const user = useAppSelector(state => state.userReducer.user)
    // const navigate = useNavigate();
    const breadcrumbs = useBreadcrumbs(routes);

    const initialData: IDoctorCreate = {
        name: "",
        surname: "",
        patronymic: "",
        birthdate: Date.now(),
        workExperience: 0,
        sex: 1,
        region: user!.region,
        city: user!.city,
        placeOfWork: user!.placeOfWork,
        occupation: user!.occupation,
        email: "",
        password: "",
        role: 3
    }
    const {data, errors, handleInputChange, handleKeyDown, validate} = useForm(initialData, true, validatorConfig);
    const [createDoctor, {}] = doctorAPI.useCreateDoctorMutation();// {}-функция, которую мы можем вызвать, чтобы произошла мутация, createPost - объект с полями
    const handleCreate = async (e: React.FormEvent<HTMLButtonElement>) => {
        e.preventDefault();
        if (validate(data)) {
            await createDoctor(data)
        }
    }
    const InputFieldWithPassword = useMemo(() => withPassword(InputField), []);

        return (

                <div  className='p-8 flex justify-center'>
                    <div className='w-3/5 pb-10 pt-5 pl-10 pr-10 rounded-md bg-white h-auto'>
                        <>
                            {breadcrumbs.map(({ match, breadcrumb }) => (
                                <NavLink key={match.pathname} to={match.pathname} className="text-our-greenish-300 text-xs mr-1">
                                    /{breadcrumb}
                                </NavLink>
                            ))}
                        </>

                        <h1 className='font-medium font-sans text-our-greenish-400 text-2xl pb-4'>Создание доктора</h1>
                        <div className='grid relative grid-cols-1 gap-y-3 my-4'>
                            <Form data={data} errors={errors} handleChange={handleInputChange} handleKeyDown={handleKeyDown}>
                            <InputField autoFocus name='name' label='Имя'/>
                            <InputField name="surname" label='Фамилия'/>
                            <InputField name="patronymic" label='Отчество'/>
                            <InputField name="workExperience" label='Опыт работы'/>
                            <RadioGroup name="sex" items={genderItems}/>

                            <DatePickerField
                                value={data.birthdate}
                                onChange={handleInputChange}
                                openTo='year'
                                mask='__.__.____'
                                label='Дата Рождения'
                                name='birthdate'
                                minDate={new Date('1900-01-01')}
                                renderInput={(params: JSX.IntrinsicAttributes & TextFieldProps) => (
                                    <TextField {...params} {...(errors?.birthYear && {
                                        error: true,
                                        helperText: errors?.birthYear
                                    })} />
                                )}
                            />
                            <SelectField label='Регион' name='region' options={Regions}/>
                            <SelectField label='Город' name='city' options={Cities}/>
                            <SelectField label='Место работы' name='placeOfWork' options={PlacesOfWork}/>
                            <SelectField label='Профиль' name='occupation' options={Occupations}/>
                            <SelectField label='Роль' name='role' options={Roles}/>

                            <InputField name='email' label='Почта'/>
                            <InputFieldWithPassword name='password' label='Пароль' type='password'/>

                                <Button type='submit' onClick={handleCreate} className="w-1/5 absolute right-45 -bottom-10"
                                    disabled={Object.keys(errors).length !== 0}>
                                Создать
                            </Button>

                </Form>
                </div>
            </div>
        </div>

        );
};

export default CreateDoctorForm;

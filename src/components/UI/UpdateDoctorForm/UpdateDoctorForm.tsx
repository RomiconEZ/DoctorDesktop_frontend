import {TextField, TextFieldProps} from '@mui/material';
import React from 'react';
import {DatePickerField, InputField, RadioGroup, SelectField} from '../../common/Fields';
import validatorConfig from './validatorConfig';
import Button from "../../common/Button";
import {doctorAPI} from "../../../services/DoctorService";
import {IDoctorFull} from "../../../models/IDoctorFull";
import {Regions} from "../../../DataLists/Regions";
import {PlacesOfWork} from "../../../DataLists/PlacesOfWork";
import {Occupations} from "../../../DataLists/Occupations";
import {useAppSelector} from "../../../hooks/redux";
import {Cities} from "../../../DataLists/Cities";
import EditFieldStr from "../../common/EditFieldStr";
import MyButton from "../../common/MyButton";
import {useForm} from "react-hook-form";
import {useNavigate} from "react-router-dom";
import EditFieldBool from "../../common/EditFieldBool";
import EditFieldSelect from "../../common/EditFieldSelect";
import {Roles} from "../../../DataLists/Roles";


const UpdateDoctorForm = () => {
    const {SelectedDoctor: doctor} = useAppSelector(state => state.additionalReducer)
    const navigate = useNavigate();
    const {
        register,
        formState:{
            errors
        },
        handleSubmit

    } = useForm()

    const initialData: IDoctorFull = {
        id: doctor!.id,
        name: doctor!.name,
        surname: doctor!.surname,
        patronymic: doctor!.patronymic,
        birthdate: doctor!.birthdate,
        workExperience: doctor!.workExperience,
        sex: doctor!.sex,
        region: doctor!.region,
        city: doctor!.city,
        placeOfWork: doctor!.placeOfWork,
        occupation: doctor!.occupation,
        email: doctor!.email,
        role: doctor!.role,
    }


  const [updateDoctor, {}] = doctorAPI.useUpdateDoctorMutation();// {}-функция, которую мы можем вызвать, чтобы произошла мутация, createPost - объект с полями

    const onSubmit = async (data:any) => {
        //await updateDoctor(data)
        alert(JSON.stringify(data))
    }


    return (

        <form onSubmit={handleSubmit(onSubmit)}>
                <div  className='p-8 flex justify-center'>
                    <div className='w-3/5 pb-20 pt-5 pl-10 rounded-md bg-white h-auto'>

                        <h1 className='font-medium font-sans text-our-greenish-400 text-2xl pb-4'>Изменение доктора</h1>
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

                            <EditFieldStr
                                label="Почта"
                                defaultValue={initialData.email}
                                register={register("email")}
                                id="email"
                            />

                            <EditFieldBool
                                register={register("sex")}
                                defaultValue={Boolean(initialData.sex)}
                                label="Пол"
                                id="sex"
                                label_true="мужской"
                                label_false="женский"
                            />

                            <EditFieldSelect
                                label="Регион"
                                defaultValue={initialData.region}
                                id={"region"}
                                listOfValues={Regions}
                                register={register("region")}
                            />

                            <EditFieldSelect
                                label="Город"
                                defaultValue={initialData.city}
                                id={"city"}
                                listOfValues={Cities}
                                register={register("city")}
                            />

                            <EditFieldSelect
                                label="Место работы"
                                defaultValue={initialData.placeOfWork}
                                id={"placeOfWork"}
                                listOfValues={PlacesOfWork}
                                register={register("placeOfWork")}
                            />

                            <EditFieldSelect
                                label="Профиль"
                                defaultValue={initialData.occupation}
                                id={"occupation"}
                                listOfValues={Occupations}
                                register={register("occupation")}
                            />

                            <EditFieldSelect
                                label="Роль"
                                defaultValue={Roles[initialData.role]}
                                id={"role"}
                                listOfValues={Roles}
                                register={register("role")}
                            />

                            <EditFieldStr
                                label="Пароль"
                                defaultValue={''}
                                register={register("password")}
                                id="password"
                            />

                            <MyButton
                                onClick={() => {navigate(`/auth/menu/doctors`)}}
                                className="w-1/5 absolute left-0 -bottom-20"
                                defaultStyle=" border-gray-500 text-gray-500 hover:bg-gray-700 hover:text-white"
                            >
                                <div className="bg-our-dark-navbar"></div>
                                Отменить
                            </MyButton>

                            <MyButton
                                onClick={handleSubmit(onSubmit)}
                                className="w-1/5 absolute right-44 -bottom-20"
                            >
                                Сохранить
                            </MyButton>
                        </div>
                    </div>
                </div>
            </form>

  );
};

export default UpdateDoctorForm;

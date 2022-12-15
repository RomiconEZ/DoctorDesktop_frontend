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
import {PlacesOfWork} from "../../../DataLists/PlacesOfWork";
import {Occupations} from "../../../DataLists/Occupations";
import {Regions} from "../../../DataLists/Regions";
import {Cities} from "../../../DataLists/Cities";
import EditFieldStr from "../../common/EditFieldStr";
import EditFieldRadio from "../../common/EditFieldRadio";
import MyButton from "../../common/MyButton";
import EditFieldBool from "../../common/EditFieldBool";
import EditFieldSelect from "../../common/EditFieldSelect";
import {Roles} from "../../../DataLists/Roles";
import {useNavigate} from "react-router-dom";



const CreateDoctorForm = () => {
    const user = useAppSelector(state => state.userReducer.user)
    const navigate = useNavigate();
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
    const [createDoctor, {}] = doctorAPI.useCreateDoctorMutation();// {}-функция, которую мы можем вызвать, чтобы произошла мутация, createPost - объект с полями

    const {
        register,
        formState:{
            errors
        },
        handleSubmit

    } = useForm()

    const onSubmit = async (data: any) => {
        //await createDoctor(data)
        alert(JSON.stringify(data))
    }
    const InputFieldWithPassword = useMemo(() => withPassword(InputField), []);

    return (
        <form onSubmit={handleSubmit(onSubmit)}>
            <div  className='p-8 flex justify-center'>
                <div className='w-3/5 pb-20 pt-5 pl-10 rounded-md bg-white h-auto'>

                    <h1 className='font-medium font-sans text-our-greenish-400 text-2xl pb-4'>Создание доктора</h1>
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
                            defaultValue={""}
                            register={register("password")}
                            id="password"
                        />

                        <MyButton
                            onClick={() => {navigate(`/auth/menu`)}}
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

export default CreateDoctorForm;


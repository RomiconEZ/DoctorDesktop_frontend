import React from 'react';
import {useForm} from "react-hook-form";
import {IPatientCreate} from "../../../models/IPatientCreate";
import {useAppSelector} from "../../../hooks/redux";
import EditFieldStr from "../../common/EditFieldStr";
import EditFieldRadio from "../../common/EditFieldRadio";
import MyButton from "../../common/MyButton";
import {patientAPI} from "../../../services/PatientService";
import EditFieldBool from "../../common/EditFieldBool";
import {useNavigate} from "react-router-dom";



const CreatePatientForm = () => {
    const {user} = useAppSelector(state => state.userReducer)
    const navigate = useNavigate();

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


    const [createPatient, {}] = patientAPI.useCreatePatientMutation();// {}-функция, которую мы можем вызвать, чтобы произошла мутация, createPost - объект с полями


    const onSubmit = async (data: any) => {
        //await createPatient(data)
        alert(JSON.stringify(data))
    }


    return (
        <form onSubmit={handleSubmit(onSubmit)}>
            <div className='p-8 flex justify-center'>
                <div className='w-3/5 pb-20 pt-5 pl-10 rounded-md bg-white h-auto'>

                    <h1 className='font-medium font-sans text-our-greenish-400 text-2xl pb-4'>Создание пациента</h1>
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


                        <EditFieldBool
                            register={register("sex")}
                            defaultValue={Boolean(initialData.sex)}
                            label="Пол"
                            id="sex"
                        />


                        <EditFieldStr
                            label="Дата рождения"
                            defaultValue={String(initialData.birthdate)}
                            inputType="date"
                            register={register("birthday")}
                            id="birthday"
                        />

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

export default CreatePatientForm;
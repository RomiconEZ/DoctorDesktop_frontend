import React, {useState} from 'react';
import validatorConfig from './validatorConfig';
import {useAppSelector} from "../../../../hooks/redux";
import {useForm} from "react-hook-form";
import {patientAPI} from "../../../../services/PatientService";
import {IPatientUpdate} from "../../../../models/IPatientUpdate";
import {useAppDispatch} from "../../../../store/store";
import {useNavigate, useParams} from "react-router-dom";
import MyButton from "../../../common/MyButton";
import EditFieldStr from "../../../common/EditFieldStr";
import EditFieldRadio from "../../../common/EditFieldRadio";




const PersonalDataEdit = () => {
    const {user} = useAppSelector(state => state.userReducer)
    const {SelectedPatient} = useAppSelector(state => state.additionalReducer)
    const navigate = useNavigate();
    const params = useParams<string>()
    const dispatch = useAppDispatch()

    const initialPersonalData: any = {
        first_name: SelectedPatient.personal_data.first_name,
        second_name: SelectedPatient.personal_data.second_name,
        patronymic: SelectedPatient.personal_data.patronymic,
        birthday: SelectedPatient.personal_data.birthday,
        sex: SelectedPatient.personal_data.sex,
        region: SelectedPatient.personal_data.region,
        clinic: SelectedPatient.personal_data.clinic,
        race: SelectedPatient.personal_data.race,
    }

    const {
        register,
        formState:{
            errors
        },
        handleSubmit

    } = useForm()


    const [updatePatient, {}] = patientAPI.useUpdatePatientMutation();// {}-функция, которую мы можем вызвать, чтобы произошла мутация, createPost - объект с полями

    // const handleUpdate = async (e: React.FormEvent<HTMLButtonElement>) => {
    //     e.preventDefault();
    //     if (validate(data))
    //     {
    //         const UpdatePatientData: IPatientUpdate = {
    //             patientID: SelectedPatient.patientID,
    //             employee_id: user!.id,
    //             personal_data: {
    //                 first_name: data.first_name,
    //                 second_name: data.second_name,
    //                 patronymic: data.patronymic,
    //                 birthday: data.birthday,
    //                 sex: data.sex,
    //                 region: data.region,
    //                 clinic: data.clinic,
    //                 race: data.race,
    //             }
    //         }
    //         await updatePatient(UpdatePatientData)
    //         navigate(`/auth/menu/patients/${SelectedPatient.patientID}/personal-data`)
    //
    //     }
    // }
    const onSubmit = async (data: any) => {

        // const UpdatePatientData: IPatientUpdate = {
        //             patientID: SelectedPatient.patientID,
        //             employee_id: user!.id,
        //             personal_data: {
        //                 first_name: data.first_name,
        //                 second_name: data.second_name,
        //                 patronymic: data.patronymic,
        //                 birthday: data.birthday,
        //                 sex: data.sex,
        //                 region: data.region,
        //                 clinic: data.clinic,
        //                 race: data.race,
        //             }
        //         }
        //
        // await updatePatient(UpdatePatientData)
        navigate(`/auth/menu/patients/${SelectedPatient.patientID}/personal-data`)
        alert(JSON.stringify(data))
    }



    return (
        <form onSubmit={handleSubmit(onSubmit)}>
            <div className='p-8'>
                <h1 className='font-medium font-sans  text-our-greenish-400 text-2xl pb-4'>Персональные данные режим редактирования</h1>

                <div className='grid relative grid-cols-1 gap-y-3 my-4'>

                    <EditFieldStr
                        label="Имя"
                        defaultValue={SelectedPatient.personal_data.first_name}
                        register={register("first_name")}
                        id="first_name"
                    />

                    <EditFieldStr
                        label="Фамилия"
                        defaultValue={SelectedPatient.personal_data.second_name}
                        register={register("second_name")}
                        id="second_name"
                    />

                    <EditFieldStr
                        label="Отчество"
                        defaultValue={SelectedPatient.personal_data.patronymic}
                        register={register("patronymic")}
                        id="patronymic"
                    />

                    <EditFieldStr
                        label="Место обследования"
                        defaultValue={SelectedPatient.personal_data.clinic}
                        register={register("clinic")}
                        id="clinic"
                    />

                    <EditFieldStr
                        label="Раса"
                        defaultValue={SelectedPatient.personal_data.race}
                        register={register("race")}
                        id="race"
                    />

                    <div className="flex flex-row">
                        <span className="w-1/4 mr-6 font-semibold text-slate-800">Пол</span>

                        <EditFieldRadio
                            register={register("sex")}
                            defaultValue={Boolean(SelectedPatient.personal_data.sex)}
                            value={1}
                            label="Мужской"
                            id="male"
                            divClassName="w-1/4"
                        />

                        <EditFieldRadio
                            register={register("sex")}
                            defaultValue={!Boolean(SelectedPatient.personal_data.sex)}
                            value={0}
                            label="Женский"
                            id="female"
                            divClassName="w-1/4"
                        />
                    </div>

                    <MyButton
                        onClick={handleSubmit(onSubmit)}
                        className="w-1/5 absolute right-44 -bottom-16"
                    >
                        Сохранить
                    </MyButton>

                </div>

            </div>
        </form>

    );
};

export default PersonalDataEdit;